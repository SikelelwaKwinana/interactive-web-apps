// const nickname= "Timmy";
// const firstname = "Timothy";

// console.log("Good Morning, ${nickname} || {firstname}!")


/*********SOLUTION**************/

const nickname = "Timmy";
const firstname = "Timothy";

 const greeting = nickname || firstname 

 /**********OR**********/
 
// if (nickname) {
//     console.log(`Good Morning, ${nickname}!`);
// } else if (firstname) {
//     console.log(`Good Morning, ${firstname}!`);
// } else {
//     console.log("Good Morning!");
// }

console.log(`Good Morning,${greeting}!`)