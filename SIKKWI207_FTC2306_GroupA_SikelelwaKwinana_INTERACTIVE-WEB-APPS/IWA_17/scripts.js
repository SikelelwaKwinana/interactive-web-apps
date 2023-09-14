// scripts.js

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

/**This function creates an array of numbers from 0 to length - 1 (days and weeks)*/
const createArray = (length) => {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(i); //push or add whatever the value of i is to result[]
  }

  return result;
};

/*this function creates the calender data*/

const createData = () => {
  const current = new Date(); //this object is current date and time
  current.setDate(1); //set the first day of the monnt to 1

  const startDay = current.getDay(); //retrives the day of the week....
  const daysInMonth = getDaysInMonth(current); //calculates the total number of days in the current month

  const weeks = createArray(5); //an array for the 5 weeks in the calender 0-4
  const days = createArray(7); //an array for the numbey of days in a week
  const result = []; //stores data for each week

  for (const weekIndex of weeks) {
    //Function--- for each week, an object is created and pushed to the result array
    result.push({
      week: weekIndex + 1, //represent each week & +
      days: [], //to store day data
    });

    /*loop goes through each day of the week, dayIndex being current day, for each day a day value is calculated */
    for (const dayIndex of days) {

      const day = dayIndex - startDay + weekIndex * 7 + 1; //calculates the day number based on current day of the week and the current week
      const isValid = day > 0 && day <= daysInMonth; //check if the calculated day is a valid day in the month (>0 & < days of the month)

      result[weekIndex].days.push({
        dayOfWeek: dayIndex + 1, //curent day of week shifted by 1 instead of 0-6 its 1-7
        value: isValid ? day : "", // assind the day to value if its valid
      });
    }
  }

  return result;
};

/* html. existing is a for the existing HTML content.
 * classString create a table cell with a CSS class 'classString'.
 * &nbsp;${value}&nbsp; places the value inside the table cell
 * and ensures there's spacing around the value. */
const addCell = (existing, classString, value) => {
  const result = `  ${existing}
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

  return result;
};

const createHtml = (data) => {
  let result = "";

  /*fuction for all objects in data array */
  
  for (const { week, days } of data) {
   
    let inner = ""; //to store HTML content for current week
    /*addCell is a function with a class 'table__cell table__cell_sidebar' to display week numbers */
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);

    for (const { dayOfWeek, value } of days) {
      //runs through days of the week array
      const isToday = new Date().getDate() === value; // Checks if the current value is equal to today's date
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // 0 for Sunday, 6 for Saturday
      const isAlternate = week % 2 === 0; //Checks if the current week number is even

      let classString = "table__cell"; //variable is initialized with CSS class

      /*Conditional statements are used to add additional CSS classes*/

      if (isToday) classString = `${classString} table__cell_today`;
      if (isWeekend) classString = `${classString} table__cell_weekend`;
      if (isAlternate) classString = `${classString} table__cell_alternate`;

      inner = addCell(inner, classString, value);
    }

    result = `
            ${result}
            <tr>${inner}</tr>
        `;
  }

  return result;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);
