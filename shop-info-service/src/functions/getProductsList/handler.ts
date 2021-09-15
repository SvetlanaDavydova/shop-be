import 'source-map-support/register';
import { getAllProducts } from 'src/services/getAllProducts';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { NotFoundError } from 'src/helpers/errorsModel';
import { errorHandler } from 'src/helpers/errorsHandler';

export const getProductsList: APIGatewayProxyHandler = async (event) => {
  console.log('getProductsList was called with: ', event);

  try{
    const data = await getAllProducts();
    console.log('The result of calling helper getAllProducts is: ', data);

    if(!data){
      console.log('went into NotFoundError');
      throw new NotFoundError();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin" : "*"
      }
    }
  } catch(err){
    const result = errorHandler(err);
    return result;
  }
}

