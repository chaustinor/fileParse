#!/bin/bash
NODE_ENV=development FILE_LOG_LEVEL='info' CONSOLE_LOG_LEVEL='debug' node app --inputFile='./readings/input.txt' --outputFile='./output/ratings.txt' 