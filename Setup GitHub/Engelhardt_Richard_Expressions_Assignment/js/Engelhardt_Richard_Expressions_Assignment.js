/** Richard Engelhardt
 *  SDI 1510
 *  10-06-2015
 *  Expressions Assignment
 */

//  This program accepts as input the length, width, and height of a right triangular prism and outputs the surface area
// declare variables

var index;                      // integer used to hold the value of the array index
var surfaceArea;                // holds the value of the surface area of the right triangular prism
var numInput;                   // variable to hold the result of if an input was Not a Number
var sideArray = new Array();    // array to hold values for sides of a triangular prism
var widthSquared;               // holds the value of the width * width
var heightSquared;              // holds the value of the height * height
var hypotenuseSquared;          // holds the value of the hypotenuse * hypotenuse
var hypotenuse;                 // holds the value of the hypotenuse

index = 0;          // assign 0 to the array index
numInput = false;   // tells whether a number was input

while (numInput == false) {  // do while a number has not been input
    // input, assign values and check if Not a Number
    sideArray[index] = prompt("Please enter side 1 the length ", 0);    // get the value for side 1
    if ((isNaN(sideArray[index])) == true) {    // check to see if sideArray is a number, if not display false, otherwise display true
        numInput = false;                       // if so set numInput to false
        console.log("The amount entered was not a number.  Try again?");    // tell the user a number was not input
    } else {                                    // else if is Not a Number is false
        sideArray[index] = Number(sideArray[index]);    // convert the answer to a number
        numInput = true;                        // set numInput to true
        console.log("Was a number input is " + numInput);   // display whether a number was input
    }   // end else
}   // end while

numInput = false;               // reset whether a number was input
index++;                        // increment the value used as the index for sideArray

while (numInput == false) {     // so while a number has not been input
    sideArray[index] = prompt("Please enter side two, the width:  ", "");    // Enter the value for the measurement of side two

    // check to see if sideArray is a number, if not display false, otherwise display true
    if ((isNaN(sideArray[index])) == true) {         // check to see if sideArray is Not a Number
        numInput = false;                           // if so set numInput to false
        console.log("The amount entered was not a number.  Try again?");  // tell the user the amount entered was not a number
    } else {                                       // else if sideArray is input as a number
        sideArray[index] = Number(sideArray[index]);    // convert the answer to a number
        numInput = true;                          // set numInput to true
        console.log("Was a number input is " + numInput);             // display numInput

    }   // end else
}   // end while

numInput = false;               // reset whether a number was input
index++;                        // increment the value used as the index for sideArray

while (numInput == false) {     // so while a number has not been input
    sideArray[index] = prompt("Please enter side three, the height:  ", "");    // Enter the value for the measurement of side three

    // check to see if sideArray is a number, if not display false, otherwise display true
    if ((isNaN(sideArray[index])) == true) {         // check to see if sideArray is Not a Number
        numInput = false;                           // if so set numInput to false
        console.log("The amount entered was not a number.  Try again?");    // display a number was not entered
    } else {                                      // else if sideArray is input as a number
        sideArray[index] = Number(sideArray[index]);    // convert the answer to a number
        numInput = true;                        // set numInput to true
        console.log("Was a number input is " + numInput);             // display numInput
    }   // end else
}   //end while

/* using the pythagrean theorem compute the hypotenuse then the surface area */
widthSquared = sideArray[index] * sideArray[index];     // compute a squared, or in other words the width squared
index--;                                                // decrease the value of the index by 1
heightSquared = sideArray[index] * sideArray[index];    // compute b squared, or in other words the height squared
hypotenuseSquared = widthSquared + heightSquared;       // compute c squared, or in other words the hypotenuse squared
hypotenuse = Math.sqrt(hypotenuseSquared);              // compute the hypotenuse

/*********** calculate the surface area ****************/
surfaceArea = (sideArray[1] * sideArray[2]) + (sideArray[0] * sideArray[1]) + (sideArray[0] * sideArray[2]) + (sideArray[0] * hypotenuse);

console.log("The Hypotenuse = " + hypotenuse);          // outpuy the hypotenuse
console.log("The total surface area of the right triangular prism is :  " + surfaceArea); // ouput the surface area

/* I typed 9 for the length, 8 for the width, and 6 for the height and my calculator gave me 264 for the surface area */