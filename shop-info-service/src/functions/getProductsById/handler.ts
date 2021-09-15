import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import { getProductsList } from '@functions/getProductsList/handler';

export const getProductsById: APIGatewayProxyHandler = async (event) => {
  console.log('getProductsById was called with:', event);

  try {
    const data = await getProductsList();

    console.log(data);

    const books = JSON.parse(data.body);

    console.log(books);

    const result = books.find((item) => item.id == event.pathParameters.id);
    
    console.log(result);

    if (!result) {
      console.log('134')
      throw new Error("Product not found")
    }

    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  } catch (err) {
    console.log('222', err)
    return {
      statusCode: 404,
      body: '',
      // message: err.message
    }
  }
}
// export const mainFind = middyfy(getProductsById);
