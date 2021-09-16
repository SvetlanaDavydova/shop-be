import * as winston from "winston";


export const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'shop-info-service' },
    transports: [
      new winston.transports.Console()
    ]
});