const fileIO = require("../utils/fileIO.js")
const math = require("../utils/math.js")
const logFileEngine = require("../utils/logFileEngine.js")
const assert = require("assert")
const logger = require('../winston.js')

const inputFile = process.argv[4]
const outputFile = process.argv[6]

console.log(`Input file: ${inputFile}`)
console.log(`Output file: ${outputFile}`)

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// describe("mean calculation test", () => {
//   it("verifies that the mean calculation function is correct", () => {
	
//     const data = [10,20,30]
//     const expectedMean = 20
//     const calcMean = math.calculateMean(data)
//     logger.info(`Mean Calc Test - Expected: ${expectedMean} Actual: ${calcMean}`);
//     assert.equal(expectedMean, calcMean)
//   })
// })

// describe("standard deviation calculation test", () => {
//   it("verifies that the standard deviation calculation function is correct", () => {
	
//     const data = [3,5,7,8]
//     const expectedStdDeviation = 1.92
//     const calcStdDeviation = math.calculateStandardDeviation(data)
//     logger.info(`Std Deviation Calc Test - Expected: ${expectedStdDeviation} Actual: ${calcStdDeviation}`);
//     assert.equal(expectedStdDeviation, calcStdDeviation.toFixed(2))
//   })
// })

// describe("test input file", () => {
//   it("verifies that input file is read correctly", () => {
  
//     fileIO.readFileAsync(inputFile).then(file => {
//    		debugger
//       fileIO.writeFileAsync(outputFile, file)
//       //assert.equal(expectedStdDeviation, )
//     })
//   })
// })

// describe("test parsing of input file", () => {
//   it("verifies that input file is properly parsed ", () => {

//   	logger.error('chris');
//     //logger.silly('Info statement');

//   	fileIO.readFileAsync('./data/input.txt').then(file => {

//       const sensorRatings = logFileEngine.evaluateLogFile(file)

//       fileIO.writeFileAsync('./data/output.txt', JSON.stringify(sensorRatings, null, 2))
//     })

//     //assert.equal(expectedStdDeviation, calcStdDeviation.toFixed(2))
//   })
// })

// describe("test parsing of input file", () => {
//   it("verifies that input file is properly parsed ", () => {
  
//     const inputFile = ioUtility.uploadInputFileSync('./input.txt')

//     const data = ioUtility.parseInputFile(inputFile)

//     const chris = utility.calculateData(data)
//     //assert.equal(expectedStdDeviation, calcStdDeviation.toFixed(2))
//   });
// });


