const rent = 400;
const tax = "8%";
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

/* Checks if the hourOfDay and minuteOfDay are both defined and equal to 0 */
if (
  hourOfDay !== undefined &&
  minuteOfDay !== undefined &&
  hourOfDay === 0 &&
  minuteOfDay === 0
) {
  // Converts the tax percentage to a decimal
  const taxAsDecimal = parseFloat(tax) / 100;

  // Calculates the salary after tax deduction
  const startingAfterTax = salary * (1 - taxAsDecimal);

  // Calculates the balance by subtracting expenses from the salary after tax
  const balance = startingAfterTax - transport - food - rent;

  // Print the balance with the 'R' symbol and 2 decimal places
  console.log(`R ${balance.toFixed(2)}`);
}
