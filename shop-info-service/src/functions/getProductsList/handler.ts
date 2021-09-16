import { getAllProducts } from 'src/services/getAllProducts';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { NotFoundError } from 'src/helpers/errorsModel';
import { errorHandler } from 'src/helpers/errorsHandler';
import { logger } from 'src/helpers/logger';

export const getProductsList: APIGatewayProxyHandler = async (event) => {
  logger.info('getProductsList was called with: ', {event});

  try{
    const data = await getAllProducts();
    logger.info('The result of calling helper getAllProducts is: ', {data});

    if(!data){
      throw new NotFoundError('Product list not found');
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

