
const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0;

let country = 'RSA'
let currency = 'R'
const customers = 1
let shipping = null


let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED


 let totalCost = shoes + toys + shirts + batteries + pens 

 

if (country === 'RSA') {
        shipping = 400

} else if (country === 'NAM') {
        currency = '$'
        shipping = 600 
       }
    else {
        currency = '$' 
        shipping = 800
     }
        
if ( totalCost >= 1000 && customers === 1) {
    if(country==="RSA"|| country==="NAM"){
        shipping =  0

  } 
}
     if ( totalCost >= 60 && customers === 1) {
        if(country==="NAM"){
            currency= '$'
            shipping = 0
      } 
      

    }   
if (country === 'NK') {
    console.log(BANNED_WARNING);
} 
else if (customers > 1) {
    console.log(FREE_WARNING);
} 
else{
    console.log('Price:', currency, totalCost + shipping);

    
}
