    // const rent = 400;
    // const tax = '8%';
    // const food = 51.7501;
    // const salary = 800;
    // const transport = 10.2;
    // const hourOfDay = 00;
    // const minuteOfDay = 00;
    
    // // Only change below this line
    
    // if hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
    //     const taxAsDecimal = tax / '100'
    //   const startingAfterTax = salary * '1' - taxAsDecimal
    //     const balace = starting - transport - food - rent
    // }
        
    // console.log(balance.toFixed(3))

    /****************SOLUTION********************/ 
    
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
    
}
