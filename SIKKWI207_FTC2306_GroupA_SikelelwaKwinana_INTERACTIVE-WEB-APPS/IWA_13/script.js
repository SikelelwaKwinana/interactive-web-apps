let state = "idle";
let user = null;
let calculated = "1";

// Only allowed to change below

const logCalc = () => {
  //typeof determines the type of variable
  const isString = typeof calculated === "string" && !isNaN(calculated); //!isNaN(calculated) to check if the string can be converted to a number
  const calculatedAsNumber = isString
    ? parseInt(calculated)
    : parseInt(calculated);
  calculated = calculatedAsNumber + 1;
};

const calcUser = () => {
  logCalc(); //Call this function which increments the value of -calculated
  if (calculated > 2) user = "John"; // if calculated is greater than 2, the user is set to 'John'
  if (calculated > 2) state = "requesting"; //if calculated is greater than 2, the state is set to 'requesting'
  if (calculated > 3) state = "idle"; //if calculated is greater than 3, the state is set back to 'idle'
};

const checkUser = () => {
  if (user && state === "requesting") {
    //if user is true and if state is 'requesting'.
    console.log(`User: ${user} (${calculated})`);
  }
};

// Only allowed to change code above

calcUser();
checkUser();

calcUser();
checkUser();

calcUser();
checkUser();

calcUser();
checkUser();

calcUser();
checkUser();
