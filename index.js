// Declare a variable customerName in global scope
var customerName = 'bob';

// Function to uppercase customerName
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}


// Function to set bestCustomer variable globally
function setBestCustomer() {
  // Declaring a global variable (not recommended, but for demonstration)
 
  bestCustomer = 'not bob';
}

// Function to overwrite bestCustomer variable in global scope
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Modifying the global variable
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'Alice';

// Function to attempt to change a constant (not possible)
function changeLeastFavoriteCustomer(newLeastFavorite) {
  // This will throw an error because constants cannot be reassigned
  leastFavoriteCustomer = newLeastFavorite;
}

// Example usage
console.log(upperCaseCustomerName()); // Output: 'BOB'
setBestCustomer();
console.log(bestCustomer); // Output: 'not bob'

overwriteBestCustomer();
console.log(bestCustomer); // Output: 'maybe bob'

// Attempting to change a constant (will throw an error)
// Uncommenting the line below will result 