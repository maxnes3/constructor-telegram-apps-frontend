import axios from 'axios';

export const serviceConfig = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});
