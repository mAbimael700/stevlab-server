const getDomain = () => {
    return "test.stevlabsoftware.com";
};

const baseURL = `https://${getDomain()}/api`;

const fetchApiClient = async (url, options = {}) => {
    const response = await fetch(baseURL + url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        const error = await response.json();
        return Promise.reject(error);
    }

    return response.json();
};


module.exports = { fetchApiClient };
