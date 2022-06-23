/* eslint-disable @typescript-eslint/no-var-requires */

const service = require('./http');

const login = (data: unknown) => {
  return service.request({
    url: process.env._ROUTE_HOST + '/user/login',
    method: 'post',
    params: data
  });
};

const publishRouters = (data: unknown) => {
  console.log(JSON.stringify(data));

  return service.request({
    url: process.env._ROUTE_HOST + '/routes/import',
    headers: {
      'content-type': 'application/json'
    },
    method: 'post',
    data: JSON.stringify(data)
  });
};

module.exports = {
  login,
  publishRouters
};
