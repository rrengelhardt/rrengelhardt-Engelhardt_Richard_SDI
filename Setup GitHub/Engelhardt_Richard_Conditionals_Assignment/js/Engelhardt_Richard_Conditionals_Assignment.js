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
var getInterest;         // holds the boolean value for whether to prompt for the interest

getInterest = true;
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
    else {
        console.log("Line 44 that is an invalid input, please try again");
        calculate = true;
    }
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
            console.log("Line 102 The interest = " + interest);              // output the interest
            console.log("Line 103 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcInterest
        console.log("Line 100 calculate = " + calculate);   // outpute calculate
    }   else if (calcWhat === "x") {                        // calcWhat = exit
            calculate = false;                              // to set calculate to false so can exit loop
    }   else if ((calcWhat === "p") || (calcWhat === "P")) {     // if calcWhat = principal
        console.log("Line 109 inside else if calcWhat " + calcWhat);
        calcPrincipal = true;                            // set calcPrincipal to true
        while (calcPrincipal === true) {              // do while calcPrincipal is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 116 the interest = " + interest);     // output the interest
                    if (interest === "") {                                 // if notheing entered
                        getInterest = true;                                // get the interest is true
                        console.log("line 119 You must enter a value");      // display error message
                    } else {                                                // otherwise
                        console.log("Line 121 you must enter a number");     // display error message
                    }   // end else
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
                console.log("Line 127 getInterest = " + getInterest);
            }
            getRate = true;                                                     // set getting the rate to true
            while (getRate === true) {                                      // while getRate is true
                rate = prompt("Please enter the rate", "");                 // get the rate from the user
                console.log("Line 131 the rate = " + rate);                  // ouput the rate
                if ((((isNaN(rate) === true)) || rate === "")) {            // if rate is not a number or was empty
                    if (rate === "") {                                      // if nothing entered
                        getRate = true;                                         // make sure get rate is set to true
                        console.log("line 135 You must enter a value");      // display error message
                    } else {                                                // else it is not a number
                        console.log("Line 137 you must enter a number");     // display error message
                    }                                                           // end else
                } else {                                                    // otherwise a valid rate has been entered
                    getRate = false;                                        // set getting the rate to false
                    rate = Number(rate);                                    // convert the rate to a number
                }
            }// end else
            getTime = true;                                             // set getting the amount of time to true
            while (getTime === true) {                                  // as long as getTime is true
                time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                console.log("Line 146 the time = " + time);              // output the time
                if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                    if (time === "") {                                  // if no time entered
                        getTime = true;                                 // set getting the time to true
                        console.log("line 143 You must enter a value");  // display error message
                    } else {                                                // otherwise a number was not entered
                        console.log("Line 145 you must enter a number"); // display error message
                    }                       // end else
                } else {                    // the time has been entered
                    getTime = false;        // get time = false
                    time = Number(time);    // convert time to a number
                }   //end else
            }       // end while getTime
            // end while getRate
            // end while getPrincipal
            calcPrincipal = false;                                           // set the calcPrincipal to false to exit the loop
            principal = interest / rate * time;                             // compute the interest
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 164 The principal = " + principal);              // output the interest
            console.log("Line 165 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcPrincipal
        console.log("Line 160 calculate = " + calculate);   // outpute calculate

    } else if ((calcWhat === "r") || (calcWhat === "R")) {     // if calcWhat = principal
        console.log("Line 170 inside else if calcWhat " + calcWhat);
        calcRate = true;                            // set calcRate to true
        while (calcRate === true) {              // do while calcRate is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 177 the interest = " + interest);     // output the interest
                    if (interest === "") {                                 // if notheing entered
                        getInterest = true;                                // get the interest is true
                        console.log("line 180 You must enter a value");      // display error message
                    } else {                                                // otherwise
                        console.log("Line 182 you must enter a number");     // display error message
                    }   // end else
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
            }
            getPrincipal = true;                                                     // set getting the principal to true
            while (getPrincipal === true) {                                      // while getPrincipal is true
                principal = prompt("Please enter the principal", "");                 // get the principal from the user
                console.log("Line 191 the principal = " + principal);                  // ouput the principal
                if ((((isNaN(principal) === true)) || principal === "")) {            // if is not a number or was empty
                    if (principal === "") {                                      // if nothing entered
                        getPrincipal = true;                                     // make sure set to true
                        console.log("line 195 You must enter a value");      // display error message
                    } else {                                                // else it is not a number
                        console.log("Line 197 you must enter a number");     // display error message
                    }                                                           // end else
                } else {                                                    // otherwise a valid rate has been entered
                    getPrincipal = false;                                        // set getting the rate to false
                    principal = Number(principal);                                    // convert the rate to a number
                }
            }
            getTime = true;                                             // set getting the amount of time to true
            while (getTime === true) {                                  // as long as getTime is true
                time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                console.log("Line 206 the time = " + time);              // output the time
                if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                    if (time === "") {                                  // if no time entered
                        getTime = true;                                 // set getting the time to true
                        console.log("line 210 You must enter a value");  // display error message
                    } else {                                                // otherwise a number was not entered
                        console.log("Line 212 you must enter a number"); // display error message
                    }                       // end else
                } else {                    // the time has been entered
                    getTime = false;        // get time = false
                    time = Number(time);    // convert time to a number
                }   //end else
            }       // end while getTime}
            // end while getPrincipal
            // end while getInterest
            calcRate = false;                                           // set the calcPrincipal to false to exit the loop
            rate = interest / principal * time;                             // compute the interest
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 224 The rate = " + rate);              // output the interest
            console.log("Line 225 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcRate
        console.log("Line 231 calculate = " + calculate);   // outpute calculate

    } else if ((calcWhat === "t") || (calcWhat === "T")) {     // if calcWhat = principal
        console.log("Line 234 inside else if calcWhat " + calcWhat);
        calcTime = true;                            // set calcRate to true
        while (calcTime === true) {              // do while calcRate is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 177 the interest = " + interest);     // output the interest
                    if (interest === "") {                                 // if notheing entered
                        getInterest = true;                                // get the interest is true
                        console.log("line 180 You must enter a value");      // display error message
                    } else {                                                // otherwise
                        console.log("Line 182 you must enter a number");     // display error message
                    }   // end else
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
            }
            getPrincipal = true;                                                     // set getting the principal to true
            while (getPrincipal === true) {                                      // while getPrincipal is true
                principal = prompt("Please enter the principal", "");                 // get the principal from the user
                console.log("Line 191 the principal = " + principal);                  // ouput the principal
                if ((((isNaN(principal) === true)) || principal === "")) {            // if is not a number or was empty
                    if (principal === "") {                                      // if nothing entered
                        getPrincipal = true;                                     // make sure set to true
                        console.log("line 195 You must enter a value");      // display error message
                    } else {                                                // else it is not a number
                        console.log("Line 197 you must enter a number");     // display error message
                    }                                                           // end else
                } else {                                                    // otherwise a valid rate has been entered
                    getPrincipal = false;                                        // set getting the rate to false
                    principal = Number(principal);                                    // convert the rate to a number
                }
            }
            getRate = true;                                             // set getting the amount of time to true
            while (getRate === true) {                                  // as long as getTime is true
                rate = prompt("Please enter the rate", "");  // input the amount of time
                console.log("Line 272 the rate = " + rate);              // output the time
                if ((((isNaN(rate) === true)) || rate === "")) {        // if the time is not a number or empty
                    if (rate === "") {                                  // if no time entered
                        getRate = true;                                 // set getting the time to true
                        console.log("line 276 You must enter a value");  // display error message
                    } else {                                                // otherwise a number was not entered
                        console.log("Line 278 you must enter a number"); // display error message
                    }                       // end else
                } else {                    // the time has been entered
                    getRate = false;        // get time = false
                    rate = Number(rate);    // convert time to a number
                }   //end else
            }       // end while getTime}
            // end while getPrincipal
            // end while getInterest
            calcTime = false;                                           // set the calcPrincipal to false to exit the loop
            time = interest / principal * rate;                             // compute the interest
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 290 The time = " + time);              // output the interest
            console.log("Line 291 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcRate
        console.log("Line 293 calculate = " + calculate);   // outpute calculate
/*
    }   else if ((calcWhat === "t") || (calcWhat === "T")) {     // if calcWhat = time
        console.log("Line 230 inside else if calcWhat " + calcWhat);
        calcTime = true;                            // set calcTime to true
        while (calcTime === true) {              // do while calcTime is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 237 the interest = " + interest);     // output the interest
                    if (interest === "") {                                 // if notheing entered
                        getInterest = true;                                // get the interest is true
                        console.log("line 235 You must enter a value");      // display error message
                    } else {                                                // otherwise
                        console.log("Line 237 you must enter a number");     // display error message
                    }   // end else
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                    console.log("Line 242 getInterest = " + getInterest);
                }   // end else
                getPrincipal = true;                                                     // set getting the principal to true
                while (getPrincipal === true) {                                      // while getPrincipal is true
                    principal = prompt("Please enter the principal", "");                 // get the principal from the user
                    console.log("Line 246 the principal = " + principal);                  // ouput the principal
                    if ((((isNaN(principal) === true)) || principal === "")) {            // if is not a number or was empty
                        if (principal === "") {                                      // if nothing entered
                            getPrincipal = true;                                     // make sure set to true
                            console.log("line 250 You must enter a value");      // display error message
                        } else {                                                // else it is not a number
                            console.log("Line 252 you must enter a number");     // display error message
                        }                                                           // end else
                    } else {                                                    // otherwise a valid rate has been entered
                        getPrincipal = false;                                        // set getting the rate to false
                        principal = Number(principal);                                    // convert the rate to a number
                    }                                                           // end else
                    getRate = true;                                             // set getting the amount of time to true
                    while (getRate === true) {                                  // as long as getTime is true
                        rate = prompt("Please enter the rate", "");  // input the amount of time
                        console.log("Line 261 the rate = " + rate);              // output the time
                        if ((((isNaN(rate) === true)) || rate === "")) {        // if the time is not a number or empty
                            if (time === "") {                                  // if no time entered
                                getRate = true;                                 // set getting the time to true
                                console.log("line 265 You must enter a value");  // display error message
                            } else {                                                // otherwise a number was not entered
                                console.log("Line 267 you must enter a number"); // display error message
                            }                       // end else
                        } else {                    // the time has been entered
                            getRate = false;        // get time = false
                            rate = Number(rate);    // convert time to a number
                        }   //end else
                    }  // end while getTime
                          // end while getPrincipal
                    // end while getInterest
            calcTime = false;                                           // set the calcTime to false to exit the loop
            time = interest / principal * rate;                             // compute the interest
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 284 The time = " + time);              // output the time
            console.log("Line 285 The New Principal = " + newPrinciple);     // output the new principal
            console.log(" Line 286 getInterest = " + getInterest);          // output getInterest
        }   // while getPrincipal
        console.log("Line 288 calculate = " + calculate);   // outpute calculate
    }   else if((calcWhat === "")) {     // if calcWhat = nothing
        console.log("Line 290 calcWhat = " + calcWhat);
        console.log("Line 291 you must enter something");
        calculate = true;
    }
        else {
            console.log("Line 295 that is an invalid input, please try again");
*/       calculate = true;
    }
}   // end while calculate