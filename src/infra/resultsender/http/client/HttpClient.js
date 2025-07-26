const axios = require("axios");

class HttpClient {

    constructor(apiUrl) {
        this.client = axios.create({
            baseURL: `${apiUrl}/api`,
            headers: {'Content-Type': 'application/json'},
            timeout: 1000
        });

        this.client.interceptors.response.use(
            response => response,
            error => Promise.reject(error)
        )
    }

}

const httpClient = new HttpClient("http://localhost:3000").client;
module.exports = httpClient;