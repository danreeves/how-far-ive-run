import axios from 'axios';

const JSONBIN_URL = `https://jsonbin.org/${process.env.JSONBIN_USERNAME}/withingskeys`;
const axi = axios.create({
    headers: {
        authorization: `token ${process.env.JSONBIN_SECRET}`,
    },
});

export async function getAuth() {
    try {
        return await axi.get(JSONBIN_URL)
            .then(d => d.data);
    } catch (e) {
        console.log('erroring', e)
        return {};
    }
}

export async function setAuth(auth) {
    return await axi.post(JSONBIN_URL, auth);
}
