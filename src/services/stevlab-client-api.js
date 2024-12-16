const axios = require('axios');

const getDomain = () => {
    return "test.stevlabsoftware.com";
};

const stevlabApiClient = axios.create({
    baseURL: `https://${getDomain()}/api/`,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});

stevlabApiClient.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

module.exports = { stevlabApiClient };
