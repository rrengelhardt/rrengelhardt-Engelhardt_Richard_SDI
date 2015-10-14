/** Richard Engelhardt
 *  SDI 1510
 *  10-12-2015
 *  Expressions Assignment
 *
 *  I have a lot of diagnostic output going on.  I decided to leave it in.
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
var getInterest;         // holds the boolean value for whether to prompt for the interest

getInterest = true;     // set getInterest to true
calcInterest = true;    // set calcInterest to true it will later be changed to false if necessaru
getRate = true;         // set getRate to true will be turned off later
getTime = true;         // set getTime to true will be turned off later
getPrincipal = true;    // set getPrincipal to true will be turned off later
calculate = true;       // initialize calculate to true, so it will go through the while loop at least once
console.log("line 32 calculate = " + calculate);

while (calculate === true) {    // while the user wants to calculate
    calcString = prompt("Do you wish to calculate the interest, principal, rate, or time?  input y/n"); // ask if want to calculate
    if (calcString === "") {    // if the answer is empty
        console.log("line 37 You must enter a value");  // display an error message
        calculate = true;       // make sure calculate is set to true so it will go through at least one more iteration
    } else if ((calcString === "Y") || (calcString === "y")) {  // if the answer was yes
        calcWhat = prompt("Do you wish to calculate for interest, principal, rate, or time input i, p, r, t");  // input iprt
    } else if ((calcString === "N") || (calcString = "n")) {    // if the answer was no
        calculate = false;  // set whether to calculate to false
        calcWhat = "x";     // set calcWhat to x or exit to exit the program
    }   // end else if
    else {  // they didn't enter a valid character
        console.log("Line 46 that is an invalid input, please try again");  // give them the error message
        calculate = true;   // make sure calculate stays to true so it will ask again
    }   // end else
    console.log(("Line 49 calcWhat = " + calcWhat));    // output calcWhat
    if ((calcWhat === "i") || (calcWhat === "I")) {     // if calcWhat = interest
        calcInterest = true;                            // set calcInterest to true
        while (calcInterest === true)    {              // do while calcInterest is true
            getPrincipal = true;                        // set getPrincipal to true
        while (getPrincipal === true) {                 // do while getPrincipal is true
            principal = prompt("Please enter the principal", "");       // get the principal
            if (((isNaN(principal) === true)) || (principal === "")) {  // if not a number or is empty
                console.log("Line 57 the principal = " + principal);    // output the principal
                (principal === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
            } else {    // otherwise
                getPrincipal = false;           // set getprincipal to false to be able to exit the loop
                principal = Number(principal);  // make sure principal is converted to a number
            }   // end else
        getRate = true;                                                     // set getting the rate to true
            while (getRate === true) {                                      // while getRate is true
                rate = prompt("Please enter the rate", "");                 // get the rate from the user
                console.log("Line 70 the rate = " + rate);                  // ouput the rate
                if ((((isNaN(rate) === true)) || rate === "")) {            // if rate is not a number or was empty
                    (rate === "") ? console.log("Line 273 you must enter a value") : console.log("Line 273 you must enter a number"); // display error messages
/*                    if (rate === "") {                                      // if nothing entered
                    getRate = true;                                         // make sure get rate is set to true
                        console.log("line 75 You must enter a value");      // display error message
                    } else {                                                // else it is not a number
                        console.log("Line 77 you must enter a number");     // display error message
                }                                                           // end else
                */
                } else {                                                    // otherwise a valid rate has been entered
                    getRate = false;                                        // set getting the rate to false
                    rate = Number(rate);                                    // convert the rate to a number
                }                                                           // end else
                getTime = true;                                             // set getting the amount of time to true
                while (getTime === true) {                                  // as long as getTime is true
                    time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                    console.log("Line 86 the time = " + time);              // output the time
                    if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                        (time === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
                    } else {                    // the time has been entered
                        getTime = false;        // get time = false
                        time = Number(time);    // convert time to a number
                    }   //end else
                }       // end while getTime
            }           // end while getRate
        }               // end while getPrincipal
            calcInterest = false;                                           // set the calcInterest to false to exit the loop
            interest = principal * rate * time;                             // compute the interest
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 103 The interest = " + interest);              // output the interest
            console.log("Line 105 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcInterest
        console.log("Line 107 calculate = " + calculate);   // outpute calculate
    }   else if (calcWhat === "x") {                        // calcWhat = exit
            calculate = false;                              // to set calculate to false so can exit loop
    }   else if ((calcWhat === "p") || (calcWhat === "P")) {     // if calcWhat = principal
        console.log("Line 111 inside else if calcWhat " + calcWhat);
        calcPrincipal = true;                            // set calcPrincipal to true
        while (calcPrincipal === true) {              // do while calcPrincipal is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 118 the interest = " + interest);     // output the interest
                    (interest === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
                console.log("Line 129 getInterest = " + getInterest);   // output getInterest
            }   // end while getInterest
            getRate = true;                                                     // set getting the rate to true
            while (getRate === true) {                                      // while getRate is true
                rate = prompt("Please enter the rate", "");                 // get the rate from the user
                console.log("Line 134 the rate = " + rate);                  // ouput the rate
                if ((((isNaN(rate) === true)) || rate === "")) {            // if rate is not a number or was empty
                    (rate === "") ? console.log("Line 273 you must enter a value") : console.log("Line 273 you must enter a number"); // display error messages
/*
                    if (rate === "") {                                      // if nothing entered
                        getRate = true;                                         // make sure get rate is set to true
                        console.log("line 138 You must enter a value");      // display error message
                    } else {                                                // else it is not a number
                        console.log("Line 140 you must enter a number");     // display error message
                    }                                                           // end else
                    */
                } else {                                                    // otherwise a valid rate has been entered
                    getRate = false;                                        // set getting the rate to false
                    rate = Number(rate);                                    // convert the rate to a number
                }
            }   // end else
            getTime = true;                                             // set getting the amount of time to true
            while (getTime === true) {                                  // as long as getTime is true
                time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                console.log("Line 150 the time = " + time);              // output the time
                if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                    (time === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
                } else {                    // the time has been entered
                    getTime = false;        // get time = false
                    time = Number(time);    // convert time to a number
                }   //end else
            }       // end while getTime
            calcPrincipal = false;                                           // set the calcPrincipal to false to exit the loop
            principal = interest / rate * time;                             // compute the interest
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 166 The principal = " + principal);              // output the interest
            console.log("Line 167 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcPrincipal
        console.log("Line 169 calculate = " + calculate);   // output calculate

    } else if ((calcWhat === "r") || (calcWhat === "R")) {     // if calcWhat = rate
        console.log("Line 172 inside else if calcWhat " + calcWhat);
        calcRate = true;                            // set calcRate to true
        while (calcRate === true) {              // do while calcRate is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 179 the interest = " + interest);     // output the interest
                    (interest === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
            }
            getPrincipal = true;                                                     // set getting the principal to true
            while (getPrincipal === true) {                                      // while getPrincipal is true
                principal = prompt("Please enter the principal", "");                 // get the principal from the user
                console.log("Line 194 the principal = " + principal);                  // ouput the principal
                if ((((isNaN(principal) === true)) || principal === "")) {            // if is not a number or was empty
                    (principal === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
                } else {                                                    // otherwise a valid principal has been entered
                    getPrincipal = false;                                        // set getting the principal to false
                    principal = Number(principal);                                    // convert the principal to a number
                }   // end else
            }   // end while getPrincipal
            getTime = true;                                             // set getting the amount of time to true
            while (getTime === true) {                                  // as long as getTime is true
                time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                console.log("Line 210 the time = " + time);              // output the time
                if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                    (time === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
                } else {                    // the time has been entered
                    getTime = false;        // get time = false
                    time = Number(time);    // convert time to a number
                }   //end else
            }       // end while getTime}
            // end while getPrincipal
            calcRate = false;                                           // set the calcRate to false to exit the loop
            rate = interest / principal * time;                             // compute the rate
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 227 The rate = " + rate);              // output the rate
            console.log("Line 228 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcRate
        console.log("Line 230 calculate = " + calculate);   // outpute calculate

    } else if ((calcWhat === "t") || (calcWhat === "T")) {     // if calcWhat = time
        console.log("Line 233 inside else if calcWhat " + calcWhat);    // output calcWhat
        calcTime = true;                            // set calcTime to true
        while (calcTime === true) {              // do while calcRate is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 240 the interest = " + interest);     // output the interest
                    (interest === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
            }
            getPrincipal = true;                                                     // set getting the principal to true
            while (getPrincipal === true) {                                      // while getPrincipal is true
                principal = prompt("Please enter the principal", "");                 // get the principal from the user
                console.log("Line 255 the principal = " + principal);                  // ouput the principal
                if ((((isNaN(principal) === true)) || principal === "")) {            // if is not a number or was empty
                    (principal === "") ? console.log("line 259 You must enter a value") : console.log("Line 261 you must enter a number"); // display error messages
                } else {                                                    // otherwise a valid rate has been entered
                    getPrincipal = false;                                        // set getting the principal to false
                    principal = Number(principal);                                    // convert the principal to a number
                }   // end else
            }   // while getPrincipal
            getRate = true;                                             // set getting the rate to true
            while (getRate === true) {                                  // as long as getRate is true
                rate = prompt("Please enter the rate", "");  // input the rate
                console.log("Line 271 the rate = " + rate);              // output the rate
                if ((((isNaN(rate) === true)) || rate === "")) {        // if the rate is not a number or empty
                    (rate === "") ? console.log("Line 273 you must enter a value") : console.log("Line 273 you must enter a number"); // display error messages
                } else {                    // the rate has been entered
                    getRate = false;        // get rate = false
                    rate = Number(rate);    // convert rate to a number
                }   //end else
            }       // end while getTime}
            calcTime = false;                                           // set the calcTime to false to exit the loop
            time = interest / principal * rate;                             // compute the time
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 287 The time = " + time);              // output the time
            console.log("Line 288 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcTime
        console.log("Line 290 calculate = " + calculate);   // output calculate

    }   else if((calcWhat === "")) {     // if calcWhat = nothing
        console.log("Line 293 calcWhat = " + calcWhat); // output calcWhat
        console.log("Line 294 you must enter something");   // output error message
        calculate = true;       // set calculate to true
    }   // end else if
        else {  // else if an invalid char was input
            console.log("Line 298 that is an invalid input, please try again"); // output error message
            calculate = true;   // set calculate to true
    }   // end else
    calcWhat = "";  // reset calcWhat
}   // end while calculate