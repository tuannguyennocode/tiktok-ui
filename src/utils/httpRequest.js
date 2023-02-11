import axios from 'axios';

export const httpRequest = axios.create({ baseURL: 'https://tiktok.fullstack.edu.vn/api/' });

export const get = async (api, options = {}) => {
    const response = await httpRequest.get(api,options);
    return response.data
}