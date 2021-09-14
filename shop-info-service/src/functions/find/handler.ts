import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import { getProductsList } from '@functions/hello/handler';

const getProductsById  = async (event) => {
    const data = await getProductsList();
    let books = JSON.parse(data.body);
    console.log(books);
    let result = books.find((item) => item.id == event.pathParameters.id)
    return {
      statusCode: 200,
      body: JSON.stringify(result)
     
    }
}
export const mainFind = middyfy(getProductsById );