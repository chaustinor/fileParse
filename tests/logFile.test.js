const fileIO = require("../utils/fileIO.js");
const math = require("../utils/math.js");
const logFileEngine = require("../utils/logFileEngine.js");
const chai = require('chai'); 
const assert = chai.assert;
const { inputFile, testOutputFile ,outputFile } = require('minimist')(process.argv.slice(2));

describe("mean calculation test", () => {
  it("verifies that the mean calculation function is correct", () => {
	
    const data = [10,20,30];
    const expectedMean = 20;
    const calcMean = math.calculateMean(data);
    const msg = `Mean Calc Test - Expected: ${expectedMean} Actual: ${calcMean}`;
    assert.equal(expectedMean, calcMean, msg);
  })
})

describe("standard deviation calculation test", () => {
  it("verifies that the standard deviation calculation function is correct", () => {
	
    const data = [3,5,7,8];
    const expectedStdDeviation = 1.92;
    const calcStdDeviation = math.calculateStandardDeviation(data);
    const msg = `Std Deviation Calc Test - Expected: ${expectedStdDeviation} Actual: ${calcStdDeviation}`;
    assert.equal(expectedStdDeviation, calcStdDeviation.toFixed(2), msg);
  })
})

describe("test input file", () => {
  it("verifies that input file is read correctly", () => {
  
    fileIO.readFileAsync(inputFile).then(file => {
      fileIO.writeFileAsync(testOutputFile, file);
      assert.isNotNaN(file.length);
    })
  })
})

describe("test parsing of input file", () => {
  it("verifies that input file is properly parsed ", () => {

  	fileIO.readFileAsync(inputFile).then(file => {
      const sensorRatings = logFileEngine.evaluateLogFile(file);
      fileIO.writeFileAsync(outputFile, JSON.stringify(sensorRatings, null, 2));
      assert.isNotNaN(file.length);
    })
  })
})

