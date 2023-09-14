// Set variables with phone numbers
const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Check if a string contains only digits
const validPattern = /^\d+$/;

// Check if primaryPhone is a valid numerical string
const primaryValid = validPattern.test(primaryPhone);

// Check if secondaryPhone is a valid numerical string
const secondaryValid = validPattern.test(secondaryPhone);

// Output the results of the validity checks
console.log("Primary phone is valid numerical string:", primaryValid);
console.log("Secondary phone is valid numerical string:", secondaryValid);
