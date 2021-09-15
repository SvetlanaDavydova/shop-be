import 'source-map-support/register';
import { getAllProducts } from 'src/helpers/getAllProducts';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { NotFoundError } from 'src/helpers/errorsHandler';

export const getProductsList: APIGatewayProxyHandler = async (event) => {
  console.log('getProductsList was called with: ', event);

  try{
    const data = await getAllProducts();
    console.log('The result of calling helper getAllProducts is: ', data);

    if(!data){
      console.log('went into NotFoundError');
      throw new NotFoundError( 'List of products not found', 404 )
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
    if(err instanceof NotFoundError){
      return {
        statusCode: err.statusCode,
        body: err.message
      }
    } else {
      return {
        statusCode: 500,
        body: 'Internal Server Error'         
      }
    }
  }
}

