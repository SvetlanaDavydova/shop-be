import { NotFoundError } from "./errorsModel"

export const errorHandler = async (err) => {

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