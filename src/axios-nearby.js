import axios from 'axios';

//TODO add timeout
const instance = axios.create({
    baseURL: 'https://us-central1-getbus-app-1.cloudfunctions.net',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'GET, POST'
    }
})

export default instance;