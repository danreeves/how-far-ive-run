import React from 'react';
import Head from 'next/head';
import miles from '../lib/miles';

export default class extends React.Component {
    static async getInitialProps() {
        return {
            totalDistance: 1,
            sessions: 1,
            avgDistance: 1,
            fastest: {
                data: {
                    distance: 1,
                    effduration: 1,
                },
            },
            longest: 1,
        };
    }

    render() {
        const {
            totalDistance,
            sessions,
            avgDistance,
            fastest,
            longest,
        } = this.props;
        return (
            <div>
                <Head>
                    <title>
                        {`How far I've run in ${new Date().getFullYear()}`}
                    </title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <style>
                        {
                            `
* {
    margin: 0;
    padding: 0;
}
main {
    position: fixed;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, rgba(11,72,107, 0.5) 10%, rgba(245,98,23,0.5) 90%), url("/static/img/hunter-johnson-223002.jpg") no-repeat;
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
                    `
                        }
                    </style>
                </Head>
                <main>
                    <p>
                        {
                            `In ${new Date().getFullYear()} I've run ${miles(totalDistance)} miles, over ${sessions} sessions. That's an average of ${miles(avgDistance)} miles per session. The longest distance was ${miles(longest)} miles. The fastest time was ${miles(fastest.data.distance)} miles in ${fastest.data.effduration / 60} minutes.`
                        }
                    </p>
                    <p>
                        Code
                        {' '}
                        <a href="https://github.com/danreeves/how-far-ive-run">
                            here
                        </a>
                        .
                    </p>
                </main>
            </div>
        );
    }
}
