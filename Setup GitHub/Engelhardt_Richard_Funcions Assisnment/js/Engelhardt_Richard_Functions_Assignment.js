/** Richard Engelhardt
 *  SDI 1510
 *  10-21-2015
 *  Functions Assignment
 */

//  THis program finds Powervall Numbers, or FLorida Lottery numbers depending on the users choice
// declare globalvariables

alert("Line 10 inside script");


var numberCeil;             numberholds
var getLotto = true;               // boolean used to get a set of numbers or exit
var answer = "";
var whatToGet= "";
var lottoArray = new Array();

console.log("Line 17 before function");

/*************************************************************************************************************************************************/

function fillArray(fceil) [

var i=1;
var lottoNum= 0;
var j=0;
var getnum = true;
var lottoArray2 new ()

for (i=1;i<6;i++) {
    lottoNum = (Math.floor(Math.random() * fCeil) + 1);
    if (i>1) {
        getNum = true;
        while (getNum === true) {
            for (j = 1; j <= i; j++) {
                if (lottoArray2[j] === lottoNum) {
                    lottoNum = (Math.floor(Math.random() * fCeil) + 1);
                    j--
                }
            }
            getNum = fals;
    lottoArray2[i] = lottoNum;
    console.log("Line 47 lottoArray2 = " + lottoArray2[i]);
}

]

for (i=1;i<6;i++) {
    lottoNum = (Math.floor(Math.random() * 59) + 1);
    if (i>1) {
        getNum = true;
        while (getNum === true) {
            for (j = 1; j <= i; j++) {
                if (lottoArray2[j] === lottoNum) {
                    lottoNum = (Math.floor(Math.random() * 59) + 1);
                }
            }
            getNum = false;
        }
    }
    lottoArray2[i] = lottoNum;
    console.log("Line 47 lottoArray2 = " + lottoArray2[i]);
}

/******************************************************************************************************************************************/


function getNumbers(numberCeil) {
    var randomNum = Math.random();
    var lottoArray2 = new Array();
    var i = 0;
    var j = 0;
    var lottoNum;
    var getNum;

    if (numberCeil === 59) {
        lottoArray2[i] = 59;
        console.log("Line 25 inside function i = " + i);
                lottoNum = (Math.floor(Math.random() * 35) + 1);
        lottoArray2[i] = lottoNum;
        console.log("Line 47 lottoArray2 = " + lottoArray2[i]);
    } else {
        lottoArray2[i] = 53
        for (i=1;i<7;i++) {
            lottoNum = (Math.floor(Math.random() * 53) + 1);
            if (i>1) {
                getNum = true;
                while (getNum === true) {
                    for (j = 1; j <= i; j++) {
                        if (lottoArray2[j] === lottoNum) {
                            lottoNum = (Math.floor(Math.random() * 53) + 1);
                        }
                    }
                    getNum = false;
                }
            }
            lottoArray2[i] = lottoNum;
            console.log("Line 66 lottoArray2 = " + lottoArray2[i]);
        };
    }
}
    console.log("Line 26 after function");
// for (i=1; i<6; i++) {console.log("Line22 i = " + i);}

/***************************************************************************************************************************************/

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
