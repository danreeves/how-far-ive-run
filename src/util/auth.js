import axios from 'axios';

const axi = axios.create({
    headers: {
        authorization: `token ${process.env.JSONBIN_SECRET}`,
    },
});

export async function getAuth() {
    try {
        return await axi.get('https://jsonbin.org/danreeves/withingskeys')
            .then(d => d.data);
    } catch (e) {
        console.log('erroring', e)
        return {};
    }
}

export async function setAuth(auth) {
    return await axi.post('https://jsonbin.org/danreeves/withingskeys', auth);
}
