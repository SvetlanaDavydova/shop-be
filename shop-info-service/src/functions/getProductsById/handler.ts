import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { errorHandler } from 'src/helpers/errorsHandler';
import { NotFoundError } from 'src/helpers/errorsModel';
import { getProductById } from 'src/services/getProductById';

export const getProductsById: APIGatewayProxyHandler = async (event) => {
  console.log('getProductsById was called with: ', event);

  try {    
    const result = await getProductById(event.pathParameters.id);
    console.log('The result of calling helper getProductById is: ', result);

    if (!result) {
      console.log('went into NotFoundError');
      throw new NotFoundError();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }

  } catch (err) {
    const result = errorHandler(err);
    return result;      
  }
}

