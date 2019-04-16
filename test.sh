#!/bin/bash
NODE_ENV=development ./node_modules/mocha/bin/mocha ./tests/math.test.js 
NODE_ENV=development ./node_modules/mocha/bin/mocha ./tests/fileIO.test.js --inputFile='./readings/input.txt' --testOutputFile='./output/testoutputfile.txt'
NODE_ENV=development ./node_modules/mocha/bin/mocha ./tests/logFileEngine.test.js --inputFile='./readings/input.txt' --outputFile='./output/outputfile.txt'