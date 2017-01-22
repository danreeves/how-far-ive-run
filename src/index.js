import Koa from 'koa';
import Withings from 'withings-request';
import passport from 'koa-passport';
import session from 'koa-session';
import json from 'koa-json';
import { Strategy as WithingsStrategy } from 'passport-withings';

import miles from './util/miles';
import speed from './util/speed';
import getData from './util/api';

if (process.env.NODE_ENV === 'development') {
    try {
        require('dotenv').load();
    } catch (e) {
    }
}

const WITHINGS_CONSUMER_KEY = process.env.WITHINGS_CONSUMER_KEY;
const WITHINGS_CONSUMER_SECRET = process.env.WITHINGS_CONSUMER_SECRET;
const PORT = 3000;
const CALLBACK_URL = process.env.NOW_URL || `http://localhost:${PORT}`;

const USER_TOKEN = '';
const USER_SECRET = '';
const USER_ID = '';

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
        USER_TOKEN = token;
        USER_SECRET = tokenSecret;
        USER_ID = profile.id;
        return done(undefined, profile.id);
    }
));

// Init passport auth middleware
app.keys = [ 'secret' ];
app.use(session(app));
app.use(passport.initialize());

app.use(async (ctx, next) => {
    // Only oauth if we haven't cached the necessary credentials
    if (!USER_ID) {
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
    const options = {
        consumerKey: WITHINGS_CONSUMER_KEY,
        consumerSecret: WITHINGS_CONSUMER_SECRET,
        token: USER_TOKEN,
        tokenSecret: USER_SECRET,
        userid: USER_ID,
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
            }
        };
    } else {
        ctx.body = `
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            body {
                background: #121010;
                color: white;
                font-size: 2em;
                font-family: monospace;
                width: 50%;
                min-width: 360px;
                position: relative;
                margin: auto;
                margin-top: 2em;
            }
            body::before {
                position: fixed;
                content: " ";
                display: block;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                z-index: 2;
                background-size: 100% 2px, 3px 100%;
                pointer-events: none;
            }
            h1:before, p:before {
                content: '> ';
                position: absolute;
                left: 0.25em;
            }
            h1, p {
                padding-left: 1.25em;
                margin-bottom: 1em;
                font-size: 1em;
            }
            p {
                position: relative;
            }
            p:before {
                bottom: -2em;
                animation: cursor 1s infinite;
            }
            @keyframes cursor {
                0% {
                    opacity: 0;
                }
                40% {
                    opacity: 0;
                }
                50% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                }
            }
        </style>
        <h1>🏃</h1>
        <p>In ${new Date().getFullYear()} I've run ${miles(
            totalDistance
        )} miles, over ${sessions} sessions. That's an average of ${miles(avgDistance)} miles per session. The longest distance was ${miles(longest)} miles. The fastest time was ${miles(fastest.data.distance)} miles in ${fastest.data.effduration / 60} minutes.</p>`;
    }
});

app.listen(PORT);
console.log(`🏃  Running at ${CALLBACK_URL}`);
