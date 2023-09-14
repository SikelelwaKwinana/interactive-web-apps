// Define the year, status, and count variables
const year = 2050;
let status = "parent";
let count = 0;

/* Check if the year is 2050
 * Output holidays for the year 2050
 */
if (year === 2050) {
  console.log("January", "New Year’s Day");
  console.log("March", "Human Rights Day");
  console.log("April", "Family Day");
  console.log("April", "Freedom Day");
  console.log("June", "Youth Day");
  console.log("August", "Women's Day");
  console.log("September", "Heritage Day");
  console.log("December", "Day of Reconciliation");
  console.log("December", "Christmas Day");
  console.log("December", "Day of Goodwill");

  /* Check if the status is "student"
   * If the status is "student," output Youth Day
   */
  if (status === "student") {
    console.log("June", "Youth Day");
  } else if (status === "parent") {

  /* Check if the status is "parent"
   * If the status is "parent," output Christmas Day and increase the count by 9
   */
    console.log("December", "Christmas Day");
    count += 9;
  }
}

// Output the status, year, and total holidays count
console.log("Your status is:", status);
console.log("The year is:", year);
console.log("The total holidays is:", count);
