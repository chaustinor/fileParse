var appRoot = require('app-root-path');
var winston = require('winston');

const fileLogLevel = process.env.FILE_LOG_LEVEL || 'info'
const consoleLogLevel = process.env.CONSOLE_LOG_LEVEL || 'debug'

var options = {
  file: {
    level: fileLogLevel,
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: false,
    json: true,
    maxsize: 100000,
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: consoleLogLevel,
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

var logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file)
  ],
  exitOnError: true
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console(options.console));
}

module.exports = logger;