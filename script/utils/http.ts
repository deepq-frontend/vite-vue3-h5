/* eslint-disable @typescript-eslint/no-var-requires */
const axios = require('axios');

const http = axios.create({
  baseURL: process.env._ROUTE_HOST, // url = base url + request url
  timeout: 10000,
  headers: {
    'content-type': 'application/x-www-form-urlencoded'
  }
  // withCredentials: true // send cookies when cross-domain requests
});
http.interceptors.request.use(function (config: any) {
  // 在发送请求之前做些什么
  if (process.env._ROUTE_TOKEN) {
    config.headers.common.Authorization = process.env._ROUTE_TOKEN;
  }
  return config;
});
http.interceptors.response.use((response: any) => response.data);

module.exports = http;
