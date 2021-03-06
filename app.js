const fileIO = require("./utils/fileIO.js")
const math = require("./utils/math.js")
const logFileEngine = require("./utils/logFileEngine.js")
const assert = require("assert")
const logger = require('./winston.js')
const testFolder = './data/';
const fs = require('fs');
const { inputFile, outputFile } = require('minimist')(process.argv.slice(2));

let error = false;

if (!inputFile) {
  logger.error('Input file name parameter is missing!');
  error = true;
}

if (inputFile.substr(inputFile.length - 4) !== '.txt') {
  logger.error('Input file .txt extension missing or incorrect format!');
  error = true;
}

if (!outputFile) {
  logger.error('Output file name parameter is missing!');
  error = true;
}

if (outputFile.substr(outputFile.length - 4) !== '.txt') {
  logger.error('Output file .txt extension missing or incorrect format!');
  error = true;
}

if (!error){
  fileIO.readFileAsync(inputFile).then(file => {
    const sensorRatings = logFileEngine.evaluateLogFile(file);
    fileIO.writeFileAsync(outputFile, JSON.stringify(sensorRatings, null, 2));
  })
}
else {
  setTimeout(() => { process.exit(1) }, 1000);
}

process.on('uncaughtException', (err) => {
  logger.error(`Fatal error occurred: ${err}`);
});

