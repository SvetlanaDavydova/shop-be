'use strict';

const { data } = require("./mock");

module.exports.hello = async (event) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    }
  };
};
