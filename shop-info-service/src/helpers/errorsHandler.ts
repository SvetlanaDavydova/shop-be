// class NotFoundError {
//     // message: string;
//     // statusCode: number;
//     constructor(message:string, statusCode:number){
        
//         this.message = message;
//         this.statusCode = statusCode;
//     }
// }

export class NotFoundError extends Error{
    
    constructor(message:string, public statusCode:number ){
        super(message);
        this.statusCode = statusCode;
    }
}
