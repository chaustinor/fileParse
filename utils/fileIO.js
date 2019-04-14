const promise = require('bluebird')
const fs = promise.promisifyAll(require('fs'))
const logger = require('../winston.js')

const readFileAsync = fileName => {

  logger.info(`Reading input file...`);

  return fs.readFileAsync(fileName, 'utf8')
  .then(data => {
    logger.info(`Input file has been successfully loaded`);
    return data
  })
  .catch(error => {
    logger.error(`The following error occurred reading the input file: ${error}`);
  })
}

const writeFileAsync = (fileName, data) => {

  logger.info(`Writing to ouput file...`);
  
  return fs.writeFileAsync(fileName, data)
  .then(res => {
    logger.info(`Output file has been successfully written`);
  })
  .catch(error => {
    logger.error(`The following error occurred writing to the output file: ${error}`);
  })
}

module.exports = { writeFileAsync, readFileAsync }
