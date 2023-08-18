/*
const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay !== undefined && minuteOfDay !== undefined 
    && hourOfDay === 0 && minuteOfDay === 0) 
    {

    const taxAsDecimal = parseFloat(tax) / 100; // Converting tax to a decimal
    const startingAfterTax = salary * (1 - taxAsDecimal); // salary after tax
    const balance = startingAfterTax - transport - food - rent; // Calculate the balance

    console.log(`R ${balance.toFixed(2)}`); // Print balance with R symbol and 2 decimal places
    */
   
// const salary = 4000;
// const lodging = 'apartment'
// const size = 'large'


// // Only change the syntax below (not the values or key names)

// const expenses = {
//     food: 51.7501,
//     transport:  10.2,
// }
  
// const tax = {
//     734: '3%',
//     234: '20%',
//     913: '12%',
//     415: '38%',
//     502: '42%',
// }

// const rent = {
//     none: 0,
//     'small-room': 200,
//     'large-room': 300,
//     'small-apartment': 400,
//     'large-apartment': 800,
//     'small-house': 1200,
//     'large-house': 2400,
// }

// // You can change below however you want

// const taxAsDecimal = tax.913 / 100
// const startingAfterTax = salary * 1 - taxAsDecimal
// const type = lodging + size
// const balance = expenses(transport) - expenses(food) - expenses(rent.type) 
// console.log(balance)
// const salary = 4000;
// const lodging = 'apartment';
// const size = 'large';

// // Only change the syntax below (not the values or key names)
const salary = 4000;
const lodging = 'apartment';
const size = 'large';

const expenses = {
    food: 51.7501,
    transport:  10.2,
};

const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
};

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
};

// You can change below however you want

const taxAsDecimal = parseInt(tax['913']) / 100;// tax is a string, pass it as num, removed the. and added parentheses +quatations marks
const startingAfterTax = salary * (1 - taxAsDecimal) //added parentheses
const type = `${size}-${lodging}`//swapped variables + interloping
const balance = startingAfterTax - expenses.transport - expenses.food -rent[type]; //romoved brackets for .items from expenses. Minus from after tax

console.log(balance.toFixed(2)) //added .tofixed(2)