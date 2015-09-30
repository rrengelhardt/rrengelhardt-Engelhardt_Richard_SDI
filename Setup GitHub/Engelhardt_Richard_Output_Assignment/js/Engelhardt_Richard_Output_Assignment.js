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
// var myNumberAge;
var numInput;
var kilometers;
var myAddress;

myStreetNumber = "30";
myStreetName = "Salmer Avenue";
myCity = "Pontiac";
myState = "MI";
myZip = "48341";
myAddress = myStreetNumber + " " + myStreetName + ", " + myCity + ", " + myState + " " + myZip;

document.write("My address is: " + myAddress);

// input miles and calculate kilometers

milesToWork = prompt("How many miles to drive to work?","");

kilometers = parseFloat(milesToWork) * 1.60934;
alert("That is " + kilometers + " kilometers");

myStringAge = prompt("How old do you think I am?","");

if ((isNaN(myStringAge)) == true) {
    numInput = false;
    alert("Was a number input is " + numInput);
}   else {}
