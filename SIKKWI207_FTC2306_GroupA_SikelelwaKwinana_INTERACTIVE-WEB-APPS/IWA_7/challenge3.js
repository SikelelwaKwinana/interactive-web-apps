const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

// Calculate the total amount owed by adding the balances of Leo and Sarah
const owed = parseFloat(leoBalance) + parseFloat(sarahBalance);

// Create a formatted string for Leo's information, including the owed amount
const leo = `${leoName} ${leoSurname.trim()}  (Owed: R ${parseFloat(
  leoBalance
).toFixed(2)})`;

// Create a formatted string for Sarah's information, including the owed amount
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${parseFloat(
  sarahBalance
).toFixed(2)})`;

/* Format the total owed amount by adding commas for thousands separators and 2 decimal places
 * Math.abs is a function returns the absolute value of a number and turns it to a positive value
 * Convert the formatted number into a string.
 */
const totalAmount = Math.abs(owed)
  .toFixed(2)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

// Create a string for the total amount owed
const total = `Total amount owed:  R ${totalAmount}`;

// Combine Leo's, Sarah's, total amount, and divider into the final result
const result = `\n${leo}\n${sarah}\n\n${divider}\n  ${total}\n${divider}\n`;

// Print the result to the console
console.log(result);
