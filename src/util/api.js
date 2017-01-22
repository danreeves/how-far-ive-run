export default function getData(withings) {
    const year = new Date().getFullYear();
    return new Promise(function(resolve, reject) {
        withings(
            'measure',
            'getworkouts',
            {startdateymd: `${year}-01-01`, enddateymd: `${year}-12-31`},
            function(err, body) {
                if (err) reject(err);
                resolve(body);
            }
        );
    });
}
