import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.API_URL,
	withCredentials: true,
});

export default instance;
