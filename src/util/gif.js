const gifs = [
    'https://i.giphy.com/EaMTsoYxfPpuw.gif',
    'https://i.giphy.com/8B3ClOcitdvCE.gif',
    'https://i.giphy.com/9jBUAQEJPmAiQ.gif',
    'https://i.giphy.com/jGzOai7F7LnkQ.gif',
    'https://i.giphy.com/wA7Yb2PgxfJRu.gif',
    'https://i.giphy.com/CRWdhM1XgJ7Pi.gif',
    'https://i.giphy.com/10GgFiIfnRqkhO.gif',
    'https://i.giphy.com/QfR3KaUwlYul2.gif',
    'https://i.giphy.com/Q9NrmGiBbsvfO.gif',
    'https://i.giphy.com/PnkVQPj0MA9UI.gif',
    'https://i.giphy.com/pVtulZdJsUuCQ.gif',
];

export default () => gifs[Math.floor(Math.random() * gifs.length)];
