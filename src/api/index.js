import axios from 'axios';
import {DATA_URL} from "../configs/api";
import querystring from "querystring"

/**
 * Get users from api origin
 * @param inc
 * @param rest
 * @returns {Promise<any>}
 */
export const getUsers = ({
    inc = ['id', 'name', 'email', 'picture'],
    ...rest
} = {}) => {
    return fetch(
        `${$DATA_URL}?${querystring.stringify(
            {inc,...rest},
            {arrayFormat: 'comma'}
        )}`
    ).then((res) => res.json());
}
/*
const http = axios.create({
    baseURL: DATA_URL,
    responseType: "json",
    timeout: 10000,
});

export const getData = async()  => {
    const {
        data: {results}
    } = await http.get("?results=10");

    return results;
};*/