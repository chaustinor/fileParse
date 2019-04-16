
#Project Description
This project calculates statistics on ANY TYPE OF SENSOR readings provided that the data input format is adhered to. 

#Input
Input text file(s) containing readings as referenced in the bash files (i.e. ./dev.sh) are read into the app.

#Output
The output is a text file(s) containing the calculations for all of the applicable devices.

#Step-up:
	1) Ensure that Node is installed. This can be downloaded here: https://nodejs.org/en/
	2) After installation, ensure that both node and npm are installed by running "node -v" and "npm -v"
	3) Navigate to the root directory of this project
	4) Run the following command: "npm install". This will ensure that all the necessary dependencies are installed
	5) This app is executed from the bash scripts located in the root of this project: "./dev.sh" + "./prod.sh" + "./test/sh"
	6) Ensure that the following cmd is run first to ensure that your OS recognizes these files as executables: "chmod +x <file>"
	 For example: "chmod +x ./dev.sh"

#Testing:
	Execute the following bash file: "./test.sh"
	Modify the script as needed
	Outputs will be displayed to the console and output as test files accordingly

#Running the app:
	Execute the following bash file: "./dev.sh" or "./prod.sh"
	Modify the script(s) as needed
	Ensure that both the input/output files are provided as parameters with .txt extensions

#Logging
	Winston logging has been implemented with configurable levels based upon env and/or input as defined in the winston.js log. Furthermore, it been configured to log to both file and console for non-production environments and only to file for production. The logging outputs to the './logs' directory

#Recommended Enhancements
	- Move the "reference" values (currently temperature and humidity) out of the input file and pass them as parameters into the app from the bash scripts
	- Break out the input file into separate files based upon the sensor type. This will reduce the complexity of the parsing logic, thereby making the app more robust
	- As for the output, a flag should be passed that either: a) writes all the statistics to a single file; or, b) writes to separate files
	
#Misc
This app was designed to already support future devices types. To implement a new device, simply follow these steps:
	- Append the data to the input file following the current format
	- In the "logFileEngine" file, write the corresponding calculation logic in a function and reference it in the "evaluateLogFile" function's case statement. A stubbed out function for pressure has been provided as an example.
Ensure that the target input and output directories in fact exists before running. This app does not handle on-the-fly directory creation.

