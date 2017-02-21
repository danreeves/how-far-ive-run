import LRU from 'lru-cache';
const cache = LRU({ maxAge: 1000 * 60 * 60 * 3 });

export function getData(withings) {
    const year = new Date().getFullYear();
    return new Promise(function(resolve, reject) {
        const data = cache.get('data');
        if (data) resolve(data);
        else {
            withings(
                'measure',
                'getworkouts',
                { startdateymd: `${year}-01-01`, enddateymd: `${year}-12-31` },
                function(err, body) {
                    if (err) reject(err);
                    cache.set('data', body);
                    resolve(body);
                }
            );
        }
    });
}

export function getNotifications(withings) {
    return new Promise(function(resolve, reject) {
        withings('notify', 'list', function(err, body) {
            if (err) reject(err);
            resolve(body);
        });
    });
}

export function subscribe(withings, { userid, callbackurl, comment, appli }) {
    return new Promise(function(resolve, reject) {
        withings('notify', 'subscribe', {
            userid,
            callbackurl,
            comment,
            appli
        }, function (err, body) {
            if (err) reject(err);
            resolve(body);
        });
    });
}
