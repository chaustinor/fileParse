const logger = require('../winston.js')

const calculateMean = data => {
	return data.reduce((x,y) => x + y, 0) / data.length;
}

const calculateStandardDeviation = data => {
  var mean = calculateMean(data);
  
  var squareDiffs = data.map(function(value){
    var diff = value - mean;
    var sqrDiff = diff * diff;
    return sqrDiff;
  })
  
  var avgSquareDiff = calculateMean(squareDiffs);

  return Math.sqrt(avgSquareDiff);
}

module.exports = { calculateMean, calculateStandardDeviation }