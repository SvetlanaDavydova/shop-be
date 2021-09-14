import 'source-map-support/register';
import { middyfy } from '@libs/lambda';
import { hello } from '@functions/hello/handler';

const find = async (event) => {
    const data = await hello();
    let books = JSON.parse(data.body);
    console.log(books);
    let result = books.find((item) => item.id == event.pathParameters.id)
    return {
      statusCode: 200,
      body: JSON.stringify(result)
     
    }
}
export const mainFind = middyfy(find);