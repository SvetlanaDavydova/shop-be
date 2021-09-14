import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.mainFind`,
  events: [
    {
      http: {
        method: 'get',
        path: 'products/{id}',
        cors: true
      }
    }
  ]
}
