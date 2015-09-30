/*
    Richard Engelhardt
    SDI 1510
    Creating Variables and Output
    09-30-2015
 */

// declare variables

var myStreetNumber; // variable to hold the street number
var myStreetName;   // variable to hold the street name
var myCity;         // variable to hold the city name
var myState;        // variable to hold the state name
var myZip;          // variable to hold the zip code
var milesToWork;    // variable to hold the number of miles to work
var myStringFriends;// variable to hold the number of friends
var numInput;       // variable to tell if a number was input true or false
var kilometers;     // variable to hold the result of converting miles to kilometers
var myAddress;      // the concatenated entire address

myStreetNumber = "30";              // assign a string value
myStreetName = "Salmer Avenue";     // assign a string value
myCity = "Pontiac";                 // assign a string value
myState = "MI";                     // assign a string value
myZip = "48341";                    // assign a string value

// concatenate address parts to make and display complete address

myAddress = myStreetNumber + " " + myStreetName + ", " + myCity + ", " + myState + " " + myZip;
document.write("My address is: " + myAddress);

// input miles and calculate kilometers

milesToWork = prompt("How many miles to drive to work?","");    // input miles
kilometers = parseFloat(milesToWork) * 1.60934; // calculate kilometers by converting to a number
alert("That is " + kilometers + " kilometers"); // display the number of kilometers

myStringFriends = prompt("How many friends do you think I have?","");  // get number of friends

/* check to see if myStringFriends is a number, if not display false, otherwise display true
    if the number of friends is over 10 then display lot of friends, otherwise display few friends.
*/

if ((isNaN(myStringFriends)) == true) {         // check to see if myStringFriends is Not a Number
    numInput = false;                           // if so set numInput to false
    alert("Was a number input is " + numInput); // display numInput
}   else {                                      // else if myStringFriends is input as a number
        numInput = true;                        // set numInput to true
        alert("Was a number input is " + numInput);             // display numInput
        if (parseFloat(myStringFriends) > 10) {                 // if I have more than 10 friends
            alert("You must think I have a lot of friends");    // then display statement for lot of friends
        } else {                                                // otherwise
            alert("You must think I only have a few friends");  // display the other statement foe few friends
        }
}
