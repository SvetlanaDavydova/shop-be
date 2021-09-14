'use strict';

const { hello } = require("./handler");

module.exports.find = async (event) => {
    const data = await hello();
    let books = JSON.parse(data.body);
    let result = books.find((item) => item.id == event.pathParameters.id)
    return {
      statusCode: 200,
      body: JSON.stringify(result)    
    };
  };
  