/*
    Richard Engelhardt
    SDI 1510
    Creating Variables and Output
    09-30-2015
 */

// declare variables

var myStreetNumber;
var myStreetName;
var myCity;
var myState;
var myZip;
var milesToWork;
var myStringAge;
var numInput;
var kilometers;
var myAddress;

myStreetNumber = "30";
myStreetName = "Salmer Avenue";
myCity = "Pontiac";
myState = "MI";
myZip = "48341";

// concatenate address parts to make and display complete address

myAddress = myStreetNumber + " " + myStreetName + ", " + myCity + ", " + myState + " " + myZip;
document.write("My address is: " + myAddress);

// input miles and calculate kilometers

milesToWork = prompt("How many miles to drive to work?","");
kilometers = parseFloat(milesToWork) * 1.60934;
alert("That is " + kilometers + " kilometers");

// get age

myStringAge = prompt("How old do you think I am?","");

/* check to see if age is a number, if not display false, otherwise display true
    if the age is over 40 then display old, otherwise display young.
*/

if ((isNaN(myStringAge)) == true) {
    numInput = false;
    alert("Was a number input is " + numInput);
}   else {
        numInput = true;
        alert("Was a number input is " + numInput);
        if (parseFloat(myStringAge) > 40) {
            alert("You must think I am old");
        } else {
            alert("You must think I am young");
        }
}
