import Withings from 'withings-request';
import { getNotifications, subscribe } from './api';

export default function setup(
    { CALLBACK_URL, WITHINGS_CONSUMER_KEY, WITHINGS_CONSUMER_SECRET }
) {
    return async function subscribe(auth) {
        if (!CALLBACK_URL.includes('localhost')) return;

        const options = {
            consumerKey: WITHINGS_CONSUMER_KEY,
            consumerSecret: WITHINGS_CONSUMER_SECRET,
            token: auth.token,
            tokenSecret: auth.secret,
            userid: auth.id,
            wbsUrl: 'https://wbsapi.withings.net/v2/',
            timeout: 10000,
        };
        const withings = Withings(options);
        const { profiles } = await getNotifications(withings);
        console.log(profiles);
        const deployHasProfile = profiles.reduce(
            (acc, profile) => {
                if (!acc) {
                    if (profile.callbackurl === CALLBACK_URL) {
                        return true;
                    }
                    return false;
                }
                return acc;
            },
            false
        );

        if (!deployHasProfile) {
            try {
                console.log(
                    await subscribe(withings, {
                        userid: auth.id,
                        callbackurl: CALLBACK_URL,
                        comment: 'how-far-ive-run',
                        appli: 16,
                    })
                );
            } catch (e) {
                console.log(`💩 ${e}`);
            }
        }
    };
}
