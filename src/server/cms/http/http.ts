import axios from 'axios';
import { env } from '~/env.mjs';

const http = axios.create({
  baseURL: env.CMS_API_URL,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const cmsHttp = () => {
  return http;
};

