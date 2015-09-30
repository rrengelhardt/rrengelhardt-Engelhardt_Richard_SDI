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
var milesToWork = prompt("How many miles to drive to work?","");
var ownCar;
var kilometers;
var myAddress;

myStreetNumber = "30"
myStreetName = "Salmer Avenue";
myCity = "Pontiac";
myState = "MI";
myAddress = myStreetNumber + " " + myStreetName + ", " + myCity + ", " + myState + " " + myZip;

document.write(myAddress);