import 'source-map-support/register';

// import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { data } from "./mock";
// import schema from './schema';

export const hello = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : "*"
    }
  }
}

export const main = middyfy(hello);
