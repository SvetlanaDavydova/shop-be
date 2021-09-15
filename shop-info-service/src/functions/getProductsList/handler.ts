import 'source-map-support/register';

// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { data } from "./mock";
// import schema from './schema';

export const getProductsList = async () => {
  try{
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*"
      }
    }
  } catch(err){
    return {
      statusCode: 404,
      message: err.message           
    }
  }
}

export const main = middyfy(getProductsList);
