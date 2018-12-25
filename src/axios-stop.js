import axios from 'axios';

//TODO add timeout
const instance = axios.create({
    baseURL: 'https://getbus-app-1.firebaseio.com/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST'
    }
})

export default instance;