# How Far I've Run

A little experiment that hooks into the Withings API to pull data that I track with my watch (Withings Activité Pop).

All requests will return a page information on my running for the year.
Requests to `/json` will return that data in JSON. Units are metres and seconds.

## Running locally

1. Clone the repo
2. `npm install`
2. Add a `.env` file to the project with `WITHINGS_CONSUMER_KEY` and `WITHINGS_CONSUMER_SECRET` variables. `dotenv` is used to load them locally. Get your credentials from [the Withings site](http://oauth.withings.com/api#first_steps).
3. `npm run dev`
4. Auth with your Withings account

## Deployment

`now -e WITHINGS_CONSUMER_KEY=@withings-consumer-key -e WITHINGS_CONSUMER_SECRET=@withings-consumer-secret`
