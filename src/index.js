import 'dotenv/config'; // eslint-disable-line import/no-unassigned-import
import Koa from 'koa';
import withings from 'withings-request';
import json from 'koa-json';

import miles from './util/miles';
import speed from './util/speed';
import { getData } from './util/api';
import { getAuth } from './util/auth';
import subscribe from './util/subscribe';
import gif from './util/gif';

const WITHINGS_CONSUMER_KEY = process.env.WITHINGS_CONSUMER_KEY;
const WITHINGS_CONSUMER_SECRET = process.env.WITHINGS_CONSUMER_SECRET;
const PORT = 3000;
const CALLBACK_URL = process.env.NOW_URL || `http://localhost:${PORT}`;

const authRequest = getAuth();
const app = new Koa();

// Lets you return an object as json
app.use(json());

app.use(async (ctx, next) => {
    const auth = await authRequest;
    const options = {
        consumerKey: WITHINGS_CONSUMER_KEY,
        consumerSecret: WITHINGS_CONSUMER_SECRET,
        token: auth.token,
        tokenSecret: auth.secret,
        userid: auth.id,
        wbsUrl: 'https://wbsapi.withings.net/v2/',
        timeout: 10000,
    };
    const w = withings(options);
    let data;
    try {
        data = await getData(w);
    } catch (err) {
        console.log('Errored');
        ctx.body = { error: `💩 ${err}` };
        return next();
    }

    console.log(data)

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

    if (ctx.request.path === '/json') {
        ctx.body = {
            totalDistance,
            sessions,
            avgDistance,
            longest,
            fastest: {
                distance: fastest.data.distance,
                duration: fastest.data.effduration,
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
            main {
                position: fixed;
                height: 100%;
                width: 100%;
                // background: url("${gif()}") no-repeat center center fixed;
                background-size: cover;

                font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal, Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans serif;
                color: white;
                text-stroke: 3px black;
                -webkit-text-stroke: 3px black;
                -moz-text-stroke: 3px black;
                -ms-text-stoke: 3px black;
                text-transform: uppercase;
                font-weight: 900;
                font-size: 3rem;
                overflow-y: scroll;
            }
            p {
                width: 50%;
                min-width: 360px;

                margin: auto;
                margin-top: 2rem;
                margin-bottom: 1rem;
            }
            @media (max-width: 400px) {
                p {
                    width: 90%;
                    min-width: 0;
                    font-size: 1em;
                }
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
        <main>
            <p>In ${new Date().getFullYear()} I've run ${miles(totalDistance)} miles, over ${sessions} sessions. That's an average of ${miles(avgDistance)} miles per session. The longest distance was ${miles(longest)} miles. The fastest time was ${miles(fastest.data.distance)} miles in ${fastest.data.effduration / 60} minutes.</p>
            <p>Code <a href="https://github.com/danreeves/how-far-ive-run">here</a>.</p>
        </main>`;
    }
});

app.listen(PORT);
console.log(`🏃  Running at ${CALLBACK_URL}`);

// Try registering for withings callbacks
// on data sync, so the server is periodically
// woken up! 😴
authRequest.then(
    subscribe({
        CALLBACK_URL,
        WITHINGS_CONSUMER_KEY,
        WITHINGS_CONSUMER_SECRET,
    })
);
