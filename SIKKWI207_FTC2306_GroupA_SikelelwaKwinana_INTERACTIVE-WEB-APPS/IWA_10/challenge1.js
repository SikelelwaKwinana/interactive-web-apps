const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(
  holidays[futureId]
    ? holidays[futureId].name
    : `ID ${futureId} not created yet`
);

// Fix 1: Create a copy of the Christmas holiday object
const copied = { ...holidays[christmas] };

// Fix 2: Update the name and reset the time for the copied Christmas object
copied.name = "X-mas";
const correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);
const isEarlier = correctDate < holidays[christmas].date;
console.log("New date is earlier:", isEarlier);

// Format and log the date change
const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}; //--OR FORMAT THIS WAY---const formatDate = date => date.toLocaleDateString('en-gb')

// Compare changes and log them
if (isEarlier) {
  copied.date = correctDate;
  console.log(`ID change: ${holidays[christmas].id !== copied.id}`);
  console.log(`Name change: ${copied.name}`);
  console.log(
    `Date change: ${
      copied.date.toLocaleDateString() ? formatDate(copied.date) : false
    }`
  );
}

const userWantsToUpdate = true; // Set to true if user wants to apply changes

if (userWantsToUpdate) {
  // Apply changes from COPIED to the original holidays object

  console.log("Changes applied to holidays object:", copied);
} else {
  console.log("Changes were not applied.");
}

// Find the earliest and latest holiday timestamp
const holidayDate = Object.values(holidays).map((holiday) => holiday.date);
const firstHoliday = new Date(holidayDate);
const lastHoliday = new Date(holidayDate);

//log the formatted dates of two holidays
console.log(`${formatDate(holidayDate[3])}`);
console.log(`${formatDate(holidayDate[2])}`);

// Randomly select and log a holiday date
const randomHolidayIndex = Math.floor(
  Math.random() * Object.keys(holidays).length
);
//log the randomly selected holiday
const randomHoliday = holidays[randomHolidayIndex];
console.log(randomHoliday);
