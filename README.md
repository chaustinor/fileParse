This project calculates statisics on thermometer readings

An input text file containing readings is read in and the output is a text file outputing scores.

Pre-run steps:
	Ensure that Node that installed. Can be downloaded here: https://nodejs.org/en/
	After installation, ensure that both node and npm are installed by running "node -v" and "npm -v", respectively; in the console window
	Navigate to the root directory of this project
	Run the following command: npm install -- this will ensure that mocha is installed

Testing:
	To test, simply run the following comamnd (after mocha has been installed): "npx mocha app.test.js"
	Outputs will be displayed to the console

Running the app:
	To run the app, simply run the following command: "node tetris <inputfile>.txt <outputfile>.txt
	Ensure that both the input and output files are provided as parameters with .txt extensions

Further enchanements
	

reformat input file
	- include the model # and serial number
	- definitive EOL end if line flag
	- require at least 30 sample points for statistically significant results
	- separate temp and humidity readings



TODO:
Constants
complete scripts
consider sample (N) vs population (N-1)
webkit??



