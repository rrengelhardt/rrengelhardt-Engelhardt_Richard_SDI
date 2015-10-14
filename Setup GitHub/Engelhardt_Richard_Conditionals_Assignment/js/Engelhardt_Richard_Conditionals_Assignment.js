/** Richard Engelhardt
 *  SDI 1510
 *  10-12-2015
 *  Expressions Assignment
 */

//  This application will solve for interest, principal, rate, or time depending on the users choice
// declare variables

var interest;                   // holds the value of the interest
var principal;                  // holds the value of the principal
var rate;                       // holds the value of the rate
var time;                       // holds the value of the time
var calcString;                 // holds the y or n, Y or N
var calculate;                  // holds the boolean value of whether to do a calculation or not
var calcWhat;                   // holds the value for what to calculate for
var getPrincipal;               // holds the boolean value of whether to prompt for the principal
var getRate;                    // holds the boolean value of whether to prompt for the rate
var getTime;            // holds the boolean value of whether to prompt for the amount of time
var calcInterest;       // holds the boolean value for whether to calculate the interest
var newPrinciple;       // holds the value of the new principal after the interest has been calculated

calcInterest = true;    // set calcInterest to true it will later be changed to false if necessaru
getRate = true;         // set getRate to true will be turned off later
getTime = true;         // set getTime to true will be turned off later
getPrincipal = true;    // set getPrincipal to true will be turned off later
calculate = true;       // initialize calculate to true, so it will go through the while loop at least once
console.log("line 28 calculate = " + calculate);

while (calculate === true) {    // while the user wants to calculate
    calcString = prompt("Do you wish to calculate the interest, principal, rate, or time?  input y/n"); // ask if want to calculate
    if (calcString === "") {    // if the answer is empty
        console.log("line 23 You must enter a value");  // display an error message
        calculate = true;       // make sure calculate is set to true so it will go through at least one more iteration
    } else if ((calcString === "Y") || (calcString === "y")) {  // if the answer was yes
        calcWhat = prompt("Do you wish to calculate for interest, principal, rate, or time input i, p, r, t");  // input iprt
    } else if ((calcString === "N") || (calcString = "n")) {    // if the answer was no
        calculate = false;  // set whether to calculate to false
        calcWhat = "x";     // set calcWhat to x or exit to exit the program
    }   // end else if
    console.log(("Line 41 calcWhat = " + calcWhat));    // output calcWhat
    if ((calcWhat === "i") || (calcWhat === "I")) {     // if calcWhat = interest
        calcInterest = true;                            // set calcInterest to true
        while (calcInterest === true)    {              // do while calcInterest is true
            getPrincipal = true;                        // set getPrincipal to true
        while (getPrincipal === true) {                 // do while getPrincipal is true
            principal = prompt("Please enter the principal", "");       // get the principal
            if (((isNaN(principal) === true)) || (principal === "")) {  // if not a number or is empty
                console.log("Line 49 the principal = " + principal);    // output the principal
                if (principal === "") {                                 // if notheing entered
                    getPrincipal = true;                                // get the principal is true
                    console.log("line 52 You must enter a value");      // display error message
                } else {                                                // otherwise
                    console.log("Line 41 you must enter a number");     // display error message
                }   // end else
            } else {    // otherwise
                getPrincipal = false;           // set getprincipal to false to be able to exit the loop
                principal = Number(principal);  // make sure principal is converted to a number
            }   // end else
        getRate = true;                                                     // set getting the rate to true
            while (getRate === true) {                                      // while getRate is true
                rate = prompt("Please enter the rate", "");                 // get the rate from the user
                console.log("Line 63 the rate = " + rate);                  // ouput the rate
                if ((((isNaN(rate) === true)) || rate === "")) {            // if rate is not a number or was empty
                    if (rate === "") {                                      // if nothing entered
                    getRate = true;                                         // make sure get rate is set to true
                        console.log("line 67 You must enter a value");      // display error message
                    } else {                                                // else it is not a number
                        console.log("Line 69 you must enter a number");     // display error message
                }                                                           // end else
                } else {                                                    // otherwise a valid rate has been entered
                    getRate = false;                                        // set getting the rate to false
                    rate = Number(rate);                                    // convert the rate to a number
                }                                                           // end else
                getTime = true;                                             // set getting the amount of time to true
                while (getTime === true) {                                  // as long as getTime is true
                    time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                    console.log("Line 78 the time = " + time);              // output the time
                    if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                        if (time === "") {                                  // if no time entered
                            getTime = true;                                 // set getting the time to true
                            console.log("line 82 You must enter a value");  // display error message
                    } else {                                                // otherwise a number was not entered
                            console.log("Line 84 you must enter a number"); // display error message
                        }                       // end else
                    } else {                    // the time has been entered
                        getTime = false;        // get time = false
                        time = Number(time);    // convert time to a number
                    }   //end else
                }       // end while getTime
            }           // end while getRat4e
        }               // end while getPrincipal
            calcInterest = false;                                           // set the calcInterest to false to exit the loop
            interest = principal * rate * time;                             // compute the interest
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 96 The interest = " + interest);              // output the interest
            console.log("Line 97 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcInterest
        console.log("Line 100 calculate = " + calculate);   // outpute calculate
    }   else if (calcWhat === "x") {                        // calcWhat = exit
            calculate = false;                              // to set calculate to false so can exit loop
    }   // end else if
}   // end while calculate