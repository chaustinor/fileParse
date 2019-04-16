const fileIO = require("../utils/fileIO.js");
const chai = require('chai'); 
const assert = chai.assert;
const { inputFile, testOutputFile } = require('minimist')(process.argv.slice(2));

describe("test input file", () => {
  it("verifies that input file is read correctly", () => {
  
    fileIO.readFileAsync(inputFile).then(file => {
      fileIO.writeFileAsync(testOutputFile, file);
      assert.isNotNaN(file.length);
    })
  })
})
