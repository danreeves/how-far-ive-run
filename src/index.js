import 'dotenv/config';
import Koa from 'koa';
import Withings from 'withings-request';
import passport from 'koa-passport';
import session from 'koa-session';
import json from 'koa-json';
import { Strategy as WithingsStrategy } from 'passport-withings';

import miles from './util/miles';
import speed from './util/speed';
import getData from './util/api';
import { getAuth, setAuth } from './util/auth';
import gif from './util/gif';

const WITHINGS_CONSUMER_KEY = process.env.WITHINGS_CONSUMER_KEY;
const WITHINGS_CONSUMER_SECRET = process.env.WITHINGS_CONSUMER_SECRET;
const PORT = 3000;
const CALLBACK_URL = process.env.NOW_URL || `http://localhost:${PORT}`;

const authRequest = getAuth();
const app = new Koa();

// Lets you return an object as json
app.use(json());

// Init Withings OAuth strategy with Passport
passport.use(new WithingsStrategy(
    {
        consumerKey: WITHINGS_CONSUMER_KEY,
        consumerSecret: WITHINGS_CONSUMER_SECRET,
        callbackURL: CALLBACK_URL
    },
    function(token, tokenSecret, profile, done) {
        const auth = {
            token: token,
            secret: tokenSecret,
            id: profile.id
        };
        authRequest = Promise.resolve(auth);
        setAuth(auth);
        return done(undefined, profile.id);
    }
));

// Init passport auth middleware
app.keys = [ 'secret' ];
app.use(session(app));
app.use(passport.initialize());

app.use(async (ctx, next) => {
    const auth = await authRequest;
    // Only oauth if we haven't cached the necessary credentials
    if (!auth.id) {
        return passport.authenticate('withings', function(err, user) {
            if (user === false) {
                ctx.body = { success: false };
                ctx.throw(401);
            } else {
                ctx.login(user);
                ctx.redirect('/');
            }
        })(ctx, next);
    }
    await next();
});

app.use(async (ctx, next) => {
    const auth = await authRequest;
    const options = {
        consumerKey: WITHINGS_CONSUMER_KEY,
        consumerSecret: WITHINGS_CONSUMER_SECRET,
        token: auth.token,
        tokenSecret: auth.secret,
        userid: auth.id,
        wbsUrl: 'https://wbsapi.withings.net/v2/',
        timeout: 10000
    };
    const withings = Withings(options);
    let data;
    try {
        data = await getData(withings);
    } catch (e) {
        console.log('Errored');
        ctx.body = { error: `💩 ${e}` };
        return next();
    }

    // Category 2 is running
    const running = data.series.filter(i => i.category === 2);

    const totalDistance = running.reduce(
        (prev, current) => prev + current.data.distance,
        0
    );

    const sessions = running.length;

    const avgDistance = totalDistance / sessions;

    const longest = running.reduce(
        (prev, current) => Math.max(prev, current.data.distance),
        0
    );

    const fastest = running.reduce(
        (prev, current) => speed(prev) > speed(current) ? prev : current
    );

    if (ctx.request.path == '/json') {
        ctx.body = {
            totalDistance,
            sessions,
            avgDistance,
            longest,
            fastest: {
                distance: fastest.data.distance,
                duration: fastest.data.effduration
            },
        };
    } else {
        ctx.body = `
        <title>How far I've run in ${new Date().getFullYear()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            html {
                height: 100%;
                width: 100%;
                background: no-repeat center url("${gif()}");
                background-size: cover;
            }
            body {
                font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif;
                color: white;
                text-stroke: 3px black;
                -webkit-text-stroke: 3px black;
                -moz-text-stroke: 3px black;
                -ms-text-stoke: 3px black;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 3rem;
                margin: auto;
                margin-top: 2rem;
                width: 50%;
                min-width: 360px;
            }
            p {
                margin-bottom: 1rem;
            }
            a {
                color: white;
                text-stroke: 3px black;
                -webkit-text-stroke: 3px black;
                -moz-text-stroke: 3px black;
                -ms-text-stoke: 3px black;
            }
            a:visited {
                color: white;
            }
        </style>
        <p>In ${new Date().getFullYear()} I've run ${miles(totalDistance)} miles, over ${sessions} sessions. That's an average of ${miles(avgDistance)} miles per session. The longest distance was ${miles(longest)} miles. The fastest time was ${miles(fastest.data.distance)} miles in ${fastest.data.effduration / 60} minutes.</p>
        <p>Code <a href="https://github.com/danreeves/how-far-ive-run">here</a>.</p>`;
    }
});

app.listen(PORT);
console.log(`🏃  Running at ${CALLBACK_URL}`);
