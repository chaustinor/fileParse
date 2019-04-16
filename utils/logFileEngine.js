const math = require("../utils/math.js");
const logger = require('../winston.js');

const REFERENCE = 'reference';

const THERMOMETER = 'thermometer';
const THERMOMETER_TOLERANCE = .5;
const THERMOMETER_3_STDS = 3;
const THERMOMETER_5_STDS = 5;

const HUMIDITY = 'humidity';
const HUMIDITY_TOLERANCE = .01;

const evaluateLogFile = fileContents => {
  
  let parsedFile = parseInputFile(fileContents);

  let results = {};

  parsedFile.sensors.forEach((values, key) => {
    switch(key) {
      case THERMOMETER:
        results = { ...results, ...calcThermometerData(parsedFile.reference.temp, values) };
        break;
      case HUMIDITY:
        results = { ...results, ...calcHumidityData(parsedFile.reference.humidity, values) };
        break;
      default:
      //add more future sensor type calculations: pressure, wind speed and direction etc
    }
  })
  
  return results;
}

const calcThermometerData = (tempRef, dataSets) => {
  logger.info(`Calculating thermometer data...`);
  
  let results = {};

  dataSets.forEach((dataSet, key) => {

    var rawData = dataSet.map(x => parseFloat(x[1]));

    var avg = math.calculateMean(rawData);
    var std = math.calculateStandardDeviation(rawData);

    var avgDiff = Math.abs(parseFloat(tempRef) - avg);
    var rating = '';

    if (avgDiff <= THERMOMETER_TOLERANCE){
      if (std < THERMOMETER_3_STDS){
        rating = 'ultra';
      }
      else if (std < THERMOMETER_5_STDS){
        rating = 'very';
      }
    }
   
    results[key] = `${rating} precise`.trim()
  })

  return results;
}

const calcHumidityData = (humidityRef, dataSets) => {
  logger.info(`Calculating humidity data...`);
  
  let results = {};

  dataSets.forEach((dataSet, key) => {

    var rawData = dataSet.map(x => parseFloat(x[1]))

    var avg = math.calculateMean(rawData);

    var humidity = parseFloat(humidityRef);
   
    var tolerance = humidity * HUMIDITY_TOLERANCE;

    let low = humidity - tolerance;

    let high = humidity + tolerance;

    results[key] = (avg >= low && avg <= high) ? 'keep' : 'discard';
  })

  return results;
}

const calcPressureData = data => {
  //Future Implementation
}

const parseInputFile = file => {
  logger.info(`Parsing input file...`);
  
  var lines = file.trim().split('\n')
  let sensorType = ''
  let sensorSerialNumber = ''
  
  var data = {
    reference: {},
    sensors: new Map()
  }

  var dataSet = [];

  for (var i = 0; i < lines.length; i++) {
    let line = lines[i];
    let [firstElem, secElem, thirdElem] = lineElems = line.split(' ');

    if (line.includes(REFERENCE)){
      data.reference = { temp: secElem, humidity: thirdElem };
    }
    else if (!isNaN(parseFloat(secElem))){
      data.sensors.get(sensorType).get(sensorSerialNumber).push([...lineElems]);
    }
    else {
      sensorType = firstElem;
      sensorSerialNumber = secElem;
    
      let sensor = data.sensors.get(sensorType);
      
      if (sensor){
        sensor.set(sensorSerialNumber, dataSet);
      }
      else {
        let newGrp = new Map();
        newGrp.set(sensorSerialNumber, dataSet);
        data.sensors.set(sensorType, newGrp);
      }

      dataSet = [];
    }
  }
 
  return data;
}

module.exports = { evaluateLogFile, calcThermometerData, calcHumidityData }
