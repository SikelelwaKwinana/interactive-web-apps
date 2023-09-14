//Set variable
const nickname = "Timmy";
const firstname = "Timothy";

// If nickname is defined, use it; otherwise, use firstname
const greeting = nickname || firstname;

// Print a greeting message with the combined name
console.log(`Good Morning, ${greeting}!`);

/**********OR**********/

// if (nickname) {
//     console.log(`Good Morning, ${nickname}!`);
// } else if (firstname) {
//     console.log(`Good Morning, ${firstname}!`);
// } else {
//     console.log("Good Morning!");
// }
