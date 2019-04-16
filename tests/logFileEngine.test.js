const fileIO = require("../utils/fileIO.js");
const logFileEngine = require("../utils/logFileEngine.js");
const chai = require('chai'); 
const assert = chai.assert;
const expect = chai.expect;
const { inputFile, outputFile } = require('minimist')(process.argv.slice(2));

describe("test parsing of input file", () => {
  it("verifies that input file is properly parsed ", () => {

    fileIO.readFileAsync(inputFile).then(file => {
      const expectedRatings = { 
        "temp-1": "precise",
        "temp-2": "ultra precise",
        "hum-1": "keep",
        "hum-2": "discard"
      }

      const actualSensorRatings = logFileEngine.evaluateLogFile(file);
      expect(expectedRatings).to.eql(actualSensorRatings); 
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

