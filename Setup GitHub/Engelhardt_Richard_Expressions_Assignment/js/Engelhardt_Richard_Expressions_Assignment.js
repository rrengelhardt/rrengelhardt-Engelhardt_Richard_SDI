/*
    Richard Engelhardt
    SDI 1510
    Creating Variables and Output
    09-30-2015
 */

// declare variables

   // variable to hold the measurement of the sides of a right triangular prism.
var index;      // integer used to hold the value of the array index.
var surfaceArea; // holds the value of the surface area of the right triangular prism.
var numInput;   // variable to hold the result of if an input was Not a Number.

// input, assign values and check if Not a Number

index = 0;  // assign 0 to the array index
var side[index] = prompt("Please enter side one, the length:  ");    // Enter the value for the measurement of side one

/* check to see if myStringFriends is a number, if not display false, otherwise display true
 if the number of friends is over 10 then display lot of friends, otherwise display few friends.

if ((isNaN(side[index])) == true) {         // check to see if myStringFriends is Not a Number
    numInput = false;                           // if so set numInput to false
    console.log("The amount entered was not a number.  Try again?");
}   else {                                      // else if myStringFriends is input as a number
    numInput = true;                        // set numInput to true
    console.log("Was a number input is " + numInput);             // display numInput
}
*/
/*

// concatenate address parts to make and display complete address

myAddress = myStreetNumber + " " + myStreetName + ", " + myCity + ", " + myState + " " + myZip;
document.write("My address is: " + myAddress);

// input miles and calculate kilometers

milesToWork = prompt("How many miles to drive to work?","");    // input miles
kilometers = parseFloat(milesToWork) * 1.60934; // calculate kilometers by converting to a number
alert("That is " + kilometers + " kilometers"); // display the number of kilometers

myStringFriends = prompt("How many friends do you think I have?","");  // get number of friends

*/