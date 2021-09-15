import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { NotFoundError } from 'src/helpers/errorsHandler';
import { getProductById } from 'src/helpers/getProductById';

export const getProductsById: APIGatewayProxyHandler = async (event) => {
  console.log('getProductsById was called with: ', event);

  try {    
    const result = await getProductById(event.pathParameters.id);
    console.log('The result of calling helper getProductById is: ', result);

    if (!result) {
      console.log('went into NotFoundError');
      throw new NotFoundError('Product not found', 404);
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }

  } catch (err) {
    if(err instanceof NotFoundError){
      return {
        statusCode: err.statusCode,
        body: err.message
      }
    } else {
      return {
        statusCode:500,
        body: err.message
      }
    }        
  }
}

