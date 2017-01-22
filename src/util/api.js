import LRU from 'lru-cache';
const cache = LRU({ maxAge: 1000 * 60 * 60 * 3 });

export default function getData(withings) {
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
