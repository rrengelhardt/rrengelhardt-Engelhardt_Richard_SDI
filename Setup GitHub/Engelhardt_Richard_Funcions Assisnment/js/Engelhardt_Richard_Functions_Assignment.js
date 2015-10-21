/** Richard Engelhardt
 *  SDI 1510
 *  10-21-2015
 *  Functions Assignment
 */

//  THis program finds Powervall Numbers, or FLorida Lottery numbers depending on the users choice
// declare globalvariables

alert("Line 10 inside script");

var calcLotto = true;
var numberCeil;
var getLotto = true;               // boolean used to get a set of numbers or exit
var answer = "";
var whatToGet= "";
var lottoArray = new Array();

console.log("Line 17 before function");

function getNumbers(numberCeil) {
    var randomNum = Math.random();
    var lottoArray2 = new Array();
    var i = 0;
    if (numberCeil === 59) {
        lottoArray2[i] = 59;
        console.log("Line 25 inside function i = " + i);
    }
}
    console.log("Line 26 after function");
// for (i=1; i<6; i++) {console.log("Line22 i = " + i);}

while (getLotto === true) {
    answer = prompt("Do you wish to play the lottery? Y/N");

    switch (answer) { // switch to the correct case
        case "":        // case empty string
            console.log("Line 37 Please enter a value");  // display error message
            break;      // exit the switch statement
        case "N":       // if calcWhat is interest
        case "n":       // if calcWhat is Interest
            getLotto = false;
            break;
        case "Y":       // if calcWhat is principal
        case "y":       // if calcWhat is Principal
            calcLotto = true;
            while (calcLotto === true) {
                whatToGet = prompt("Line 46 Enter F for Florida, or P for Powerball");
                if ((whatToGet === "F") || (whatToGet === "f")){
                    console.log("Line 50 whattoo get = " + whatToGet);
                    calcLotto = false;
                    myArray = getNumbers(53);
                }
                else if ((whatToGet === "P") || (whatToGet === "p"))
                {
                    console.log("Line 54 whattoo get = " + whatToGet);
                    calcLotto = false;
                    myArray = getNumbers(59);
                }
                console.log("Line 57 calcLotto = " + calcLotto);
            }
            console.log("Line 59 calclotto - " + calcLotto);
                break;
        default :       // for everything else
            console.log("Line 59 please enter F or P ");
               break;// display error message
    }   // end switch
}




/*
    if((answer != "y") || (answer != "n"))
    {
        console.log("that was an invalid answer, try again");
    }
    if (answer === "n") {
        getLotto = false;
        console.log("Line 40 inside if getLotto = " + getLotto);
    }
    if (answer === "y") {

        while ((whatToGet != "F") && (whatToGet != "P"))
        {
            whatToGet = prompt("Input F for Florida Lottery,or P for Powerball");
        }

    }

}

*/


/*
 else if (Answer === "N") {
 getLotto === False;
 console.log(("Line 43 getLotto = " + getLotto));
 }

        else {






*/