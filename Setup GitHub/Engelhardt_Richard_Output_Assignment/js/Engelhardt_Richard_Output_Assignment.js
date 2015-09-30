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
var ownCar;
var kilometers;
var myAddress;

myStreetNumber = "30"
myStreetName = "Salmer Avenue";
myCity = "Pontiac";
myState = "MI";
myZip = "48341";
myAddress = myStreetNumber + " " + myStreetName + ", " + myCity + ", " + myState + " " + myZip;

document.write(myAddress);

milesToWork = prompt("How many miles to drive to work?","");
kilometers = parseFloat(milesToWork) * 1.60934;
alert("That is " + kilometers + " kilometers");
