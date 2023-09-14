/*----------------------------Set variables--------------------------------*/
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

let country = "RSA";
let currency = "R";
const customers = 1;
let shipping = null;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

/*-----------------Calculate the total cost of the order--------------------------------*/
let totalCost = shoes + toys + shirts + batteries + pens;

/*-----------------Determine shipping cost and currency based on the country-------------*/
if (country === "RSA") {
  shipping = 400;
} else if (country === "NAM") {
  currency = "$";
  shipping = 600;
} else {
  currency = "$";
  shipping = 800;
}

/*------------------Apply shipping discounts based on total cost and country--------------*/
if (totalCost >= 1000 && customers === 1) {
  if (country === "RSA" || country === "NAM") {
    shipping = 0;
  }
}
if (totalCost >= 60 && customers === 1) {
  if (country === "NAM") {
    currency = "$";
    shipping = 0;
  }
}

/*-------------------Check for country restrictions------------------------------*/
if (country === "NK") {
  console.log(BANNED_WARNING);
} else if (customers > 1) {
/*------------------ Check for multiple customers----------------------------------*/
  console.log(FREE_WARNING);
} else {
/*-------------------Output the total cost with currency and shipping---------------*/
  console.log("Price:", currency, totalCost + shipping);
}
