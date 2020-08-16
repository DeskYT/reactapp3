import axios from 'axios';

const http = axios.create({
    baseURL: 'https://randomuser.me/api/',
    responseType: "json",
    timeout: 10000,
});

export const getData = async()  => {
    const {
        data: {results}
    } = await http.get("?results=10");

    return results;
};