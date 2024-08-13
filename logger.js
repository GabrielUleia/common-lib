import winston from 'winston'
const { combine, timestamp, json, prettyPrint } = winston.format

// create a logger instance and configure it
const logger = winston.createLogger({
    level: 'debug',
    format: combine(
        timestamp(),
        json(),
        prettyPrint()
    ),
    transports: [
        // this sends logs into the Console
        new winston.transports.Console(), 

        // this generates an 'app.log' file (if it doesn't already exist) and sends logs inside it
        new winston.transports.File({filename: 'server.log'}),
    ]
})

logger.info('This is a log.')