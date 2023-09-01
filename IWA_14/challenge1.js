/*firstName = 'John';
age = 35;
hobby = 'Coding';

const logTwice = () => {
  console(parameter)
  console(parameter)
}

function hobby () {
  logTwice(`Hello, ${name} (${age}). I love ${hobby}!`)
}

hobby()*/

const firstName = "John";
const age = 35;
const hobby = "Coding";

/*A parameter is a placeholder for the actual value 
that will be provided when the function is called.*/

const logTwice = (parameter) => {//define parameter

 //the provided parameter is logged twice using the console.log function.
  console.log(parameter); 
  console.log(parameter);

};

function logMessage() { 
// the logTwice function is called with the values that include firstName, age, and hobby variables
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

logMessage(); //Call logMessage Function
