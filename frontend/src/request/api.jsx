import axios from 'axios'

export function setupAPICliente() {


    const api = axios.create({
        baseURL: 'http://localhost:3333',
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error) => {

        return Promise.reject(error);

    })

      return api;
}