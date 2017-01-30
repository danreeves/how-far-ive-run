# How Far I've Run

A little experiment that hooks into the Withings API to pull data that I track with my watch (Withings Activité Pop).

All requests will return a page information on my running for the year.
Requests to `/json` will return that data in JSON. Units are metres and seconds.

## Running locally

1. Clone the repo
2. `npm install`
2. Add a `.env` file to the project with `WITHINGS_CONSUMER_KEY`, `WITHINGS_CONSUMER_SECRET`, `JSONBIN_SECRET`, and `JSONBIN_USERNAME` variables. `dotenv` is used to load them locally. Get your Withings credentials from [the Withings site](http://oauth.withings.com/api#first_steps). You'll also need to set up a [jsonbin](https://jsonbin.org) account. The Withings user auth keys are stored securely here so you only need to auth once.
3. `npm run dev`
4. Auth with your Withings account

## Deployment

`now -e WITHINGS_CONSUMER_KEY=@withings-consumer-key -e WITHINGS_CONSUMER_SECRET=@withings-consumer-secret -e JSONBIN_SECRET=@jsonbin-secret JSONBIN_USERNAME=@jsonbin-username`
