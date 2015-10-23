/** Richard Engelhardt
 *  SDI 1510
 *  10-22-2015
 *  Functions Assignment
 */

//  THis program finds Powerball Numbers, or FLorida Lottery numbers depending on the users choice
// declare globalvariable

var numberCeil;                     // the ceiling for picking the numbers
var getLotto = true;                // boolean used to get a set of numbers or exit
var answer = "";                    // used to hold the answer of whether to play lottery
var answerArray = new Array();      // used to hold the valuea of array returned from the function

/*************************************************************************************************************************************************/

function myArray(fCeil) {       // this function gathers lottery numbers and returns them in an array
    var fCeil;                      // used to hold the value of whether Florida lottery or power ball
    var lottoNum = 0;               // holds the value of the current lottery number
    var j = 0;                      // used as counter in for loop
    var getnum = true;              // holds boolean value to determine whether to get another number
    var lottoArray2 = new Array();  // array that holds lottery numbers

    lottoArray2[0] = fCeil;         // put the type of lottery in first position in array

    for (i = 1; i < 6; i++) {       // loop to put numbers into array
        lottoNum = (Math.floor(Math.random() * fCeil) + 1); // get a random number
        if (i > 1) {                                        // if > 1 then check for duplicates
            getNum = true;                                  // set boolean duplicate number checker to true
            while (getNum === true) {                       // keep doing this while numbers may be equal
                for (j = 1; j <= i; j++) {                  // loop rhrough the array
                    if (lottoArray2[j] === lottoNum) {      // check for a duplicate
                        lottoNum = (Math.floor(Math.random() * fCeil) + 1); //if duplicate get another number
                        j = 1;          // if a duplicate was found reset the loop counter
                    }                   // end if
                }   // end for
                getNum = false;         // set to false to exit the while loop
                lottoArray2[i] = lottoNum;  // put the random number into the array
            } // end while
        } else { // else if first number
            lottoArray2[i] = lottoNum;  // put the random number into the array
        } // end else
    }   // end for
    if ((i = 6) && (lottoArray2[0] === 59)) // check if last number in case of powerball
    {
        lottoNum = (Math.floor(Math.random() * 35) + 1 );   // if powerball
        lottoArray2[i] = lottoNum;  // put the random number into the array
    }   // end if for powerball
    else if ((i = 6) && (lottoArray2[0] === 53)) {  // if not powerball
        lottoNum = (Math.floor(Math.random() * fCeil) + 1); // get the random number
        lottoArray2[i] = lottoNum;  // put the random number into the array
    }
    return lottoArray2;  // return the array
}
    /******************************************************************************************************************************************/

    /***************************************************************************************************************************************/

    while (getLotto === true) { // while user wants to get lotto numbers
        answer = prompt("Do you wish to play the lottery? Y/N");    // prompt for yes or no

        switch (answer) { // switch to the correct case
            case "":        // case empty string
                console.log("Please enter a value");  // display error message
                break;      // exit the switch statement
            case "N":       // if No
            case "n":       // if no
                getLotto = false;   // set getlotto to false to exit the loop
                break;      // exit the statement
            case "Y":       // if Yes
            case "y":       // if yes
                calcLotto = true;   // stays true until user makes valid entry
                while (calcLotto === true) {    // do until a valid entry is made
                    whatToGet = prompt("Line 126 Enter F for Florida, or P for Powerball"); // prompt for what type of lotto
                    if ((whatToGet === "F") || (whatToGet === "f")) {   // if florida lotto
                        calcLotto = false;  // set to false to exit loop
                        numberCeil = 53;    // set variable for type of lotto
                    }   // end if
                    else if ((whatToGet === "P") || (whatToGet === "p")) {  // esle compute for powerball
                        calcLotto = false;  // set to false to exit loop
                        numberCeil = 59;    // set variable to powerball
                    }
                }   answerArray = myArray(numberCeil);  // call the functon
                break;  // exit switch
            default :       // for everything else
                console.log("Please enter F or P ");  // give error message
                break;  // exit switch
        }   // end switch
        console.log("Your lottery nubers are "); // display message
        for (i=1;i<6;i++) { // go thrpugh the array
            console.log(answerArray[i]);    // print the first 5 numbers
        }   // end for
        if(answerArray[0] === 53) {  // if florida lotto
            console.log("and the final winning number is " + answerArray[6]);  // display final number for florida lotto
        } else {    // otherwise
            console.log("and the Power Ball is " + answerArray[6]);  // display powerball number
        }   // end else
    }   // end while
