'use strict';

const { data } = require("./mock");

module.exports.hello = async (event) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};

module.exports.find = async (event) => {
  console.log('Event', event);
 
  let result = data.find((item) => item.id == event.pathParameters.id)
  return {
    statusCode: 200,
    body: JSON.stringify(result)
    
  };
};
