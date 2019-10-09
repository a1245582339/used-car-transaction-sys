import axios from 'axios';
const http = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});
// const whiteList = ['/login']

// request拦截器
http.interceptors.request.use(
  config => {
    return config
  },
  error => error,
);

// response拦截器
http.interceptors.response.use(
  response => response,
  (error) => {
    console.log(error)
    throw error
  },
);


export default http;