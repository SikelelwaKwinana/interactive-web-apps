
const year = 2050;
let status = 'parent'
let count = 0

if (year === 2050) {
    console.log('January', 'New Year’s Day')
    console.log('March', 'Human Rights Day')
    console.log('April', 'Family Day')
    console.log('April', 'Freedom Day')
    console.log ('June', 'Youth Day')
    console.log('August', "Women's Day")
    console.log('September', 'Heritage Day')
    console.log('December', 'Day of Reconciliation')
    console.log('December', 'Christmas Day')
    console.log('December', 'Day of Goodwill')

    if (status === "student") {
        console.log ('June', 'Youth Day') 
       
    } 
     else if (status === "parent") {
        console.log('December', 'Christmas Day')
        count += 9
    }

}

console.log('Your status is:', status);
console.log('The year is:', year);
console.log('The total holidays is:', count);






