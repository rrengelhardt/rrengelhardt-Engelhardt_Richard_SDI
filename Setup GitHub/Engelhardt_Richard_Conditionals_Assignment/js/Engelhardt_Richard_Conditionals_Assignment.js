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
var getTime;
var calcInterest;
var newPrinciple;

principal = "";
calcInterest = true;
getRate = true;
getTime = true;
getPrincipal = true;
calculate = true;       // initialize calculate to true, so it will go through the while loop at least once
console.log("line 18 calculate = " + calculate);

while (calculate === true) {    // while the user wants to calculate
    calcString = prompt("Do you wish to calculate the interest, principal, rate, or time?  input y/n");
    if (calcString === "") {
        console.log("line 23 You must enter a value");
        calculate = true;
    } else if ((calcString === "Y") || (calcString === "y")) {
        calcWhat = prompt("Do you wish to calculate for interest, principal, rate, or time input i, p, r, t")
    }
    if ((calcWhat === "i") || (calcWhat === "I")) {
        while (calcInterest === true)    {
        while (getPrincipal === true) {
            principal = prompt("Please enter the principal", "");
            if (((isNaN(principal) === true)) || (principal === "")) {
                console.log("Line 36 the principal = " + principal);
                if (principal === "") {
                    getPrincipal = true;
                    console.log("line 39 You must enter a value");
                } else {
                    console.log("Line 41 you must enter a number");
                }
            } else {
                getPrincipal = false;
                principal = Number(principal);
            }
            while (getRate === true) {
                rate = prompt("Please enter the rate", "");
                console.log("Line 50 the rate = " + rate);
                if ((((isNaN(rate) === true)) || rate === "")) {
                    if (rate === "") {
                        getRate = true;
                        console.log("line 54 You must enter a value");
                    } else {
                        console.log("Line 56 you must enter a number");
                    }
                } else {
                    getRate = false;
                    rate = Number(rate);
                }
                while (getTime === true) {
                    time = prompt("Please enter the amount of time in years", "");
                    console.log("Line 65 the time = " + time);
                    if ((((isNaN(time) === true)) || time === "")) {
                        if (time === "") {
                            getTime = true;
                            console.log("line 69 You must enter a value");
                        } else {
                            console.log("Line 71 you must enter a number");
                        }
                    } else {
                        getTime = false;
                        time = Number(time);
                    }
                }
            }
        }
            calcInterest = false;
            interest = principal * rate * time;
            newPrinciple = principal + interest;
            console.log("Line 88 The interest = " + interest);
            console.log("Line 89 The New Principal = " + newPrinciple);
        }

        console.log("Line 92 calculate = " + calculate);
    }
}