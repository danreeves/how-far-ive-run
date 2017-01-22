import Koa from 'koa';
import Withings from 'withings-request';
import passport from 'koa-passport';
import session from 'koa-session';
import json from 'koa-json';
import {Strategy as WithingsStrategy} from 'passport-withings';

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

const USER_TOKEN = '';
const USER_SECRET = '';
const USER_ID = '';
const PORT = 3000;

const app = new Koa();

// Lets you return an object as json
app.use(json());

// Init Withings OAuth strategy with Passport
passport.use(new WithingsStrategy(
    {
        consumerKey: WITHINGS_CONSUMER_KEY,
        consumerSecret: WITHINGS_CONSUMER_SECRET,
        callbackURL: process.env.NOW_URL || `http://localhost:${PORT}`
    },
    function(token, tokenSecret, profile, done) {
        USER_TOKEN = token;
        USER_SECRET = tokenSecret;
        USER_ID = profile.id;
        return done(undefined, profile.id);
    }
));

// Init passport auth middleware
app.keys = ['secret'];
app.use(session(app));
app.use(passport.initialize());

app.use(async (ctx, next) => {
    // Only oauth if we haven't cached the necessary credentials
    if (!USER_ID) {
        return passport.authenticate('withings', function(err, user) {
            if (user === false) {
                ctx.body = {success: false};
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
        ctx.body = {error: `💩 ${e}`};
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
        ctx.body = `In ${new Date().getFullYear()} I've run ${miles(
            totalDistance
        )} miles, over ${sessions} sessions. That's an average of ${miles(
            avgDistance
        )} miles per session. The longest run was ${miles(
            longest
        )} miles. The fastest run was ${miles(
            fastest.data.distance
        )} miles in ${fastest.data.effduration / 60} minutes.`;
    }
});

app.listen(PORT);
