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
var getIPRT;

calcString = "";
calcWhat = "";
getIPRT = true;
getInterest = true;     // set getInterest to true
calcInterest = true;    // set calcInterest to true it will later be changed to false if necessaru
getRate = true;         // set getRate to true will be turned off later
getTime = true;         // set getTime to true will be turned off later
getPrincipal = true;    // set getPrincipal to true will be turned off later
calculate = true;       // initialize calculate to true, so it will go through the while loop at least once
console.log("Line 36 calculate = " + calculate);

while (calculate === true) {    // while the user wants to calculate
    calcString = prompt("Do you wish to calculate the interest, principal, rate, or time?  input y/n"); // ask if want to calculate
    if (calcString === "") {    // if the answer is empty
        console.log("line 41 You must enter a value");  // display an error message
        calculate = true;       // make sure calculate is set to true so it will go through at least one more iteration
    }   else if ((calcString === "Y") || (calcString === "y")) {  // if the answer was yes
        getIPRT = true;
        while (getIPRT === true) {
            calcWhat = prompt("Do you wish to calculate for interest, principal, rate, or time input i, p, r, t");  // input iprt
            switch (calcWhat) {
                case "":
                    console.log("Line 49 Please enter a value");
                    break;
                case "i":
                case "I":
                case "p":
                case "P":
                case "r":
                case "R":
                case "t":
                case "T":
                    getIPRT = false;
                    break;
                default :
                    console.log("Line 62 please enter i,p,r,t ");
            }
        }
    } else if ((calcString === "N") || (calcString === "n")) {    // if the answer was no
        console.log("Line 66 calcString = " + calcString);
                calculate = false;  // set whether to calculate to false
                calcWhat = "x";     // set calcWhat to x or exit to exit the program
                getIPRT = false;
            }   // end else if
    else {  // they didn't enter a valid character
                console.log("Line 72 that is an invalid input, please try again");  // give them the error message
                calculate = true;   // make sure calculate stays to true so it will ask again
            }
           // end else

    console.log(("Line 77 calcWhat = " + calcWhat));    // output calcWhat
    if ((calcWhat === "i") || (calcWhat === "I")) {     // if calcWhat = interest
        calcInterest = true;                            // set calcInterest to true
        while (calcInterest === true)    {              // do while calcInterest is true
            getPrincipal = true;                        // set getPrincipal to true
        while (getPrincipal === true) {                 // do while getPrincipal is true
            principal = prompt("Please enter the principal", "");       // get the principal
            if (((isNaN(principal) === true)) || (principal === "")) {  // if not a number or is empty
                console.log("Line 85 the principal = " + principal);    // output the principal
                (principal === "") ? console.log("line 86 You must enter a value") : console.log("Line 86 you must enter a number"); // display error messages
            } else {    // otherwise
                getPrincipal = false;           // set getprincipal to false to be able to exit the loop
                principal = Number(principal);  // make sure principal is converted to a number
            }   // end else
        getRate = true;                                                     // set getting the rate to true
            while (getRate === true) {                                      // while getRate is true
                rate = prompt("Please enter the rate", "");                 // get the rate from the user
                console.log("Line 94 the rate = " + rate);                  // ouput the rate
                if ((((isNaN(rate) === true)) || rate === "")) {            // if rate is not a number or was empty
                    (rate === "") ? console.log("Line 96 you must enter a value") : console.log("Line 96 you must enter a number"); // display error messages
                } else {                                                    // otherwise a valid rate has been entered
                    getRate = false;                                        // set getting the rate to false
                    rate = Number(rate);                                    // convert the rate to a number
                }                                                           // end else
                getTime = true;                                             // set getting the amount of time to true
                while (getTime === true) {                                  // as long as getTime is true
                    time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                    console.log("Line 104 the time = " + time);              // output the time
                    if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                        (time === "") ? console.log("line 106 You must enter a value") : console.log("Line 106 you must enter a number"); // display error messages
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
            console.log("Line 117 The interest = " + interest);              // output the interest
            console.log("Line 118 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcInterest
        console.log("Line 120 calculate = " + calculate);   // outpute calculate
    }   else if (calcWhat === "x") {                        // calcWhat = exit
            calculate = false;                              // to set calculate to false so can exit loop
    }   else if ((calcWhat === "p") || (calcWhat === "P")) {     // if calcWhat = principal
        console.log("Line 124 inside else if calcWhat " + calcWhat);
        calcPrincipal = true;                            // set calcPrincipal to true
        while (calcPrincipal === true) {              // do while calcPrincipal is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 131 the interest = " + interest);     // output the interest
                    (interest === "") ? console.log("line 132 You must enter a value") : console.log("Line 132 you must enter a number"); // display error messages
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
                console.log("Line 137 getInterest = " + getInterest);   // output getInterest
            }   // end while getInterest
            getRate = true;                                                     // set getting the rate to true
            while (getRate === true) {                                      // while getRate is true
                rate = prompt("Please enter the rate", "");                 // get the rate from the user
                console.log("Line 142 the rate = " + rate);                  // ouput the rate
                if ((((isNaN(rate) === true)) || rate === "")) {            // if rate is not a number or was empty
                    (rate === "") ? console.log("Line 144 you must enter a value") : console.log("Line 144 you must enter a number"); // display error messages
                } else {                                                    // otherwise a valid rate has been entered
                    getRate = false;                                        // set getting the rate to false
                    rate = Number(rate);                                    // convert the rate to a number
                }
            }   // end else
            getTime = true;                                             // set getting the amount of time to true
            while (getTime === true) {                                  // as long as getTime is true
                time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                console.log("Line 153 the time = " + time);              // output the time
                if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                    (time === "") ? console.log("line 155 You must enter a value") : console.log("Line 155 you must enter a number"); // display error messages
                } else {                    // the time has been entered
                    getTime = false;        // get time = false
                    time = Number(time);    // convert time to a number
                }   //end else
            }       // end while getTime
            calcPrincipal = false;                                           // set the calcPrincipal to false to exit the loop
            principal = interest / rate * time;                             // compute the interest
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 164 The principal = " + principal);              // output the interest
            console.log("Line 165 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcPrincipal
        console.log("Line 167 calculate = " + calculate);   // output calculate

    } else if ((calcWhat === "r") || (calcWhat === "R")) {     // if calcWhat = rate
        console.log("Line 170 inside else if calcWhat " + calcWhat);
        calcRate = true;                            // set calcRate to true
        while (calcRate === true) {              // do while calcRate is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 177 the interest = " + interest);     // output the interest
                    (interest === "") ? console.log("line 178 You must enter a value") : console.log("Line 178 you must enter a number"); // display error messages
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
            }
            getPrincipal = true;                                                     // set getting the principal to true
            while (getPrincipal === true) {                                      // while getPrincipal is true
                principal = prompt("Please enter the principal", "");                 // get the principal from the user
                console.log("Line 187 the principal = " + principal);                  // ouput the principal
                if ((((isNaN(principal) === true)) || principal === "")) {            // if is not a number or was empty
                    (principal === "") ? console.log("line 189 You must enter a value") : console.log("Line 189 you must enter a number"); // display error messages
                } else {                                                    // otherwise a valid principal has been entered
                    getPrincipal = false;                                        // set getting the principal to false
                    principal = Number(principal);                                    // convert the principal to a number
                }   // end else
            }   // end while getPrincipal
            getTime = true;                                             // set getting the amount of time to true
            while (getTime === true) {                                  // as long as getTime is true
                time = prompt("Please enter the amount of time in years", "");  // input the amount of time
                console.log("Line 198 the time = " + time);              // output the time
                if ((((isNaN(time) === true)) || time === "")) {        // if the time is not a number or empty
                    (time === "") ? console.log("line 200 You must enter a value") : console.log("Line 200 you must enter a number"); // display error messages
                } else {                    // the time has been entered
                    getTime = false;        // get time = false
                    time = Number(time);    // convert time to a number
                }   //end else
            }       // end while getTime}
            // end while getPrincipal
            calcRate = false;                                           // set the calcRate to false to exit the loop
            rate = interest / principal * time;                             // compute the rate
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 210 The rate = " + rate);              // output the rate
            console.log("Line 211 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcRate
        console.log("Line 213 calculate = " + calculate);   // outpute calculate

    } else if ((calcWhat === "t") || (calcWhat === "T")) {     // if calcWhat = time
        console.log("Line 216 inside else if calcWhat " + calcWhat);    // output calcWhat
        calcTime = true;                            // set calcTime to true
        while (calcTime === true) {              // do while calcRate is true
            getInterest = true;                        // set getInterest to true
            while (getInterest === true) {                 // do while getInterest is true
                interest = prompt("Please enter the interest", "");       // get the interest
                if (((isNaN(interest) === true)) || (interest === "")) {  // if not a number or is empty
                    console.log("Line 223 the interest = " + interest);     // output the interest
                    (interest === "") ? console.log("line 224 You must enter a value") : console.log("Line 224 you must enter a number"); // display error messages
                } else {    // otherwise
                    getInterest = false;           // set getInterest to false to be able to exit the loop
                    interest = Number(interest);  // make sure interest is converted to a number
                }   // end else
            }
            getPrincipal = true;                                                     // set getting the principal to true
            while (getPrincipal === true) {                                      // while getPrincipal is true
                principal = prompt("Please enter the principal", "");                 // get the principal from the user
                console.log("Line 233 the principal = " + principal);                  // ouput the principal
                if ((((isNaN(principal) === true)) || principal === "")) {            // if is not a number or was empty
                    (principal === "") ? console.log("line 235 You must enter a value") : console.log("Line 235 you must enter a number"); // display error messages
                } else {                                                    // otherwise a valid rate has been entered
                    getPrincipal = false;                                        // set getting the principal to false
                    principal = Number(principal);                                    // convert the principal to a number
                }   // end else
            }   // while getPrincipal
            getRate = true;                                             // set getting the rate to true
            while (getRate === true) {                                  // as long as getRate is true
                rate = prompt("Please enter the rate", "");  // input the rate
                console.log("Line 244 the rate = " + rate);              // output the rate
                if ((((isNaN(rate) === true)) || rate === "")) {        // if the rate is not a number or empty
                    (rate === "") ? console.log("Line 246 you must enter a value") : console.log("Line 246 you must enter a number"); // display error messages
                } else {                    // the rate has been entered
                    getRate = false;        // get rate = false
                    rate = Number(rate);    // convert rate to a number
                }   //end else
            }       // end while getTime}
            calcTime = false;                                           // set the calcTime to false to exit the loop
            time = interest / principal * rate;                             // compute the time
            newPrinciple = principal + interest;                            // compute the new principal
            console.log("Line 255 The time = " + time);              // output the time
            console.log("Line 256 The New Principal = " + newPrinciple);     // output the new principal
        }   // while calcTime
        console.log("Line 258 calculate = " + calculate);   // output calculate

    }   else if((calcWhat === "")) {     // if calcWhat = nothing
        console.log("Line 261 calcWhat = " + calcWhat); // output calcWhat
        console.log("Line 262 you must enter something");   // output error message
        calculate = true;       // set calculate to true
    }   // end else if
        else {  // else if an invalid char was input
            console.log("Line 266 that is an invalid input, please try again"); // output error message
            calculate = true;   // set calculate to true
    }   // end else
    calcWhat = "";  // reset calcWhat
}   // end while calculate