const axios = require('axios');

class BaseHttpRepository {
    constructor({ config }) {
        this.baseURL = config.centralServerUrl;
        this.client = axios.create({
            baseURL: this.baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'EquipmentNode/1.0'
            }
        });

        this._setupInterceptors();
    }

    _setupInterceptors() {
        // Request interceptor para logging y auth
        this.client.interceptors.request.use(
            (config) => {
                console.log(`HTTP Request: ${config.method?.toUpperCase()} ${config.url}`);
                return config;
            },
            (error) => {
                console.error('HTTP Request Error:', error);
                return Promise.reject(error);
            }
        );

        // Response interceptor para manejo de errores
        this.client.interceptors.response.use(
            (response) => {
                return response;
            },
            (error) => {
                console.error(`HTTP Error: ${error.response?.status} ${error.response?.statusText}`);

                // Transformar errores HTTP a errores de dominio
                if (error.response?.status === 404) {
                    throw new Error('Resource not found');
                } else if (error.response?.status === 500) {
                    throw new Error('Internal server error');
                } else if (error.code === 'ECONNREFUSED') {
                    throw new Error('Cannot connect to central server');
                }

                throw error;
            }
        );
    }

    async get(url, params = {}) {
        const response = await this.client.get(url, { params });
        return response.data;
    }

    async post(url, data) {
        const response = await this.client.post(url, data);
        return response.data;
    }

    async put(url, data) {
        const response = await this.client.put(url, data);
        return response.data;
    }

    async delete(url) {
        const response = await this.client.delete(url);
        return response.data;
    }
}