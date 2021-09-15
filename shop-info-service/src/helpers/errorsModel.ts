interface ErrorFields{
    statusCode: number,
}

class CustomError extends Error implements ErrorFields{
    statusCode: number;
    constructor(message:string, statusCode:number){
        super(message);
        this.statusCode = statusCode;
    }
}

export class NotFoundError extends CustomError{
    constructor(){
        super('Product not found', 404);
    }
}