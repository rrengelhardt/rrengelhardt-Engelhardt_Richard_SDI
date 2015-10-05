/*
    Richard Engelhardt
    SDI 1510
    Creating Variables and Output
    09-30-2015
 */
console.log("Inside script.");

// declare variables

// variable to hold the measurement of the sides of a right triangular prism.

var index;      // integer used to hold the value of the array index.
var surfaceArea; // holds the value of the surface area of the right triangular prism.
var numInput;   // variable to hold the result of if an input was Not a Number.
// input, assign values and check if Not a Number
var sideArray = new Array();

index = 0;  // assign 0 to the array index
console.log("Line 20 After index = " +index);

// console.log("Side is " +sideArray[index]);

numInput = false;

while (numInput == false) {
//    sideArray[index] = prompt("Please enter side 1 the length ", 100);
sideArray[index] = prompt("Line 28 enter the length ", "");
console.log("Line 29 numInput = " +numInput);
//    console.log("Line 29 sideArrary = " + sideArray[index]);

// check to see if sidearray is a number, if not display false, otherwise display true

console.log("Line 32 numInput = " +numInput);
//    if ((isNaN(sideArray[index])) == true) {         // check to see if myStringFriends is Not a Number
    if ((isNaN(sideArray[index])) == true) {
        numInput = false;                           // if so set numInput to false
        console.log("Line 35 The amount entered was not a number.  Try again?");
    } else {                                      // else if myStringFriends is input as a number
        numInput = true;                        // set numInput to true
        console.log("Line 38 Was a number input is " + numInput);             // display numInput
    }

}

numInput = false;
index++;
while (numInput == false) {
    sideArray[index] = prompt("Please enter side two, the width:  ", "");    // Enter the value for the measurement of side one

// check to see if sideArray is a number, if not display false, otherwise display true

    console.log("Line 50 numInput = " +numInput);
    if ((isNaN(sideArray[index])) == true) {         // check to see if myStringFriends is Not a Number
        numInput = false;                           // if so set numInput to false
        console.log("Line 53 The amount entered was not a number.  Try again?");
    } else {                                      // else if myStringFriends is input as a number
        numInput = true;                        // set numInput to true
        console.log("Line 56  Was a number input is " + numInput);             // display numInput
    }

}

numInput = false;
index++;
while (numInput == false) {
    sideArray[index] = prompt("Please enter side three, the height:  ", "");    // Enter the value for the measurement of side one

// check to see if sideArray is a number, if not display false, otherwise display true

    console.log("Line 71 numInput = " +numInput);
    if ((isNaN(sideArray[index])) == true) {         // check to see if myStringFriends is Not a Number
        numInput = false;                           // if so set numInput to false
        console.log("Line 74 The amount entered was not a number.  Try again?");
    } else {                                      // else if myStringFriends is input as a number
        numInput = true;                        // set numInput to true
        console.log("Line 77  Was a number input is " + numInput);             // display numInput
    }

}