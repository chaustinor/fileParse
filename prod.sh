#!/bin/bash
NODE_ENV=production FILE_LOG_LEVEL='error' node app --inputFile='./readings/input.txt' --outputFile='./output/ratings.txt' 