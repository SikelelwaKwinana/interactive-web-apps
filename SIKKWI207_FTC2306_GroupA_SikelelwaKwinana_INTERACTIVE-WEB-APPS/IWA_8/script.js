const leoName = "Leo Musvaire";
const leoNumber = "2";
const leoStreet = "Church St.";
const leoPostal = "3105";
const leoBalance = "-10";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";
const sarahNumber = "13";
const sarahStreet = "William Close";
const sarahPostal = "0310";

// Create an object named 'leo' with properties
const leo = {
  name: leoName,
  balance: leoBalance,
  accessId: "47afb389-8014-4d0b-aff3-e40203d2107f",
  age: 24,
  address: {
    number: leoNumber,
    street: leoStreet,
    postalCode: leoPostal,
  },
};

// Create an object named 'sarah' with properties
const sarah = {
  name: sarahName.trim() + " " + sarahSurname,
  age: 62,
  accessId: "6b279ae5-5657-4240-80e9-23f6b635f7a8",
  balance: sarahBalance,
  address: {
    number: sarahNumber,
    street: sarahStreet,
    postalCode: sarahPostal,
  },
};
// Log Leo's information and convert his postal code to an integer
console.log(leo, parseInt(leo.address.postalCode));
// Log Sarah's information along with her postal code
console.log(sarah, sarah.address.postalCode);
