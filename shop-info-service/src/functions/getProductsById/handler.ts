import { APIGatewayProxyHandler } from 'aws-lambda';
import { errorHandler } from 'src/helpers/errorsHandler';
import { NotFoundError } from 'src/helpers/errorsModel';
import { logger } from 'src/helpers/logger';
import { getProductById } from 'src/services/getProductById';

export const getProductsById: APIGatewayProxyHandler = async (event) => {
  logger.info('getProductsById was called with: ', {event});

  try {    
    const result = await getProductById(event.pathParameters.id);
    logger.info('The result of calling helper getProductById is: ', {result});

    if (!result) {
      throw new NotFoundError('Product not found');
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

