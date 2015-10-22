/** Richard Engelhardt
 *  SDI 1510
 *  10-21-2015
 *  Functions Assignment
 */

//  THis program finds Powervall Numbers, or FLorida Lottery numbers depending on the users choice
// declare globalvariable

var numberCeil;                     // the ceiling for picking the numbers
var getLotto = true;               // boolean used to get a set of numbers or exit
var answer = "";
var answerArray = new Array();
var lottoArray = new Array();
console.log("Line 15 before function");

/*************************************************************************************************************************************************/

function myArray(fCeil) {
    var fCeil;
    var lottoNum = 0;
    var j = 0;
    var k = 0;
    var getnum = true;
    var lottoArray2 = new Array();

    lottoArray2[0] = fCeil;
    for (i = 1; i < 6; i++) {
        lottoNum = (Math.floor(Math.random() * fCeil) + 1);
        if (i > 1) {
            getNum = true;
            while (getNum === true) {
                for (j = 1; j <= i; j++) {
                    if (lottoArray2[j] === lottoNum) {
                        lottoNum = (Math.floor(Math.random() * fCeil) + 1);
                        console.log("inside if of for loop, j= " +j);
                        j--;
                    }
                }
                getNum = false;
                lottoArray2[i] = lottoNum;
                console.log("Line 40 lottoArray2 = " + lottoArray2[i]);
                //  return;

            }
            for (k = 1; k < 6; k++) {
                console.log("Line 45 inside for k = " + k);
                lottoNum = (Math.floor(Math.random() * fCeil) + 1);
                if (k > 1) {
                    getNum = true;
                    while (getNum === true) {
                        for (j = 1; j <= i; j++) {
                            if (lottoArray2[j] === lottoNum) {
                                lottoNum = (Math.floor(Math.random() * fCeil) + 1);
                            }
                        }     lottoNum = (Math.floor(Math.random() * fCeil) + 1);
                        getNum = false;
                    }
                }
                lottoArray2[k] = lottoNum;
                if ((k = 6) && (lottoArray2[0] === 59))
                {
                    console.log("Line 60 inside if k = " + k);
                    lottoNum = (Math.floor(Math.random() * 35) + 1 );
                    console.log("Line 61 lottoArray2 = " + lottoArray2[k]);
                }
                else {
                    lottoNum = (Math.floor(Math.random() * fCeil) + 1);
                    console.log("Line 66 inside else k = " + k);
                }
                console.log("Line 68 outside if then else k = " + k)
                lottoArray2[k] = lottoNum;
            }
        }
    }
    return lottoArray2;
}
    /******************************************************************************************************************************************/

/*
    function getNumbers(numberCeil) {
        var randomNum = Math.random();var lottoArray2 = new Array();
        var i = 0;
        var j = 0;
        var lottoNum;
        var getNum;

        if (numberCeil === 59) {
            lottoArray2[i] = 59;
            console.log("Line 79 inside function i = " + i);
            lottoNum = (Math.floor(Math.random() * 59) + 1);
            lottoArray2[i] = lottoNum;
            console.log("Line 82 lottoArray2 = " + lottoArray2[i]);
        } else {
            lottoArray2[i] = 53;
            for (i = 1; i < 7; i++) {
                lottoNum = (Math.floor(Math.random() * 53) + 1);
                if (i > 1) {
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
                console.log("Line 99 lottoArray2 = " + lottoArray2[i]);
            }
            ;
        }
    }

*/
    console.log("Line 106 after function");
// for (i=1; i<6; i++) {console.log("Line22 i = " + i);}

    /***************************************************************************************************************************************/

    while (getLotto === true) {
        answer = prompt("Do you wish to play the lottery? Y/N");

        switch (answer) { // switch to the correct case
            case "":        // case empty string
                console.log("Line 116 Please enter a value");  // display error message
                break;      // exit the switch statement
            case "N":       // if calcWhat is interest
            case "n":       // if calcWhat is Interest
                getLotto = false;
                break;
            case "Y":       // if calcWhat is principal
            case "y":       // if calcWhat is Principal
                calcLotto = true;
                while (calcLotto === true) {
                    whatToGet = prompt("Line 126 Enter F for Florida, or P for Powerball");
                    if ((whatToGet === "F") || (whatToGet === "f")) {
                        console.log("Line 128 whattoo get = " + whatToGet);
                        calcLotto = false;
                        numberCeil = 53;
                    }
                    else if ((whatToGet === "P") || (whatToGet === "p")) {
                        console.log("Line 133 whattoo get = " + whatToGet);
                        calcLotto = false;
                        numberCeil = 59;
                    }
                    console.log("Line 137 calcLotto = " + calcLotto);
                }   answerArray = myArray(numberCeil);


                console.log("Line 139 calclotto - " + calcLotto);
                break;
            default :       // for everything else
                console.log("Line 142 please enter F or P ");
                break;// display error message
        }   // end switch
        console.log("Your lottery nubers are ");
        for (i=1;i<6;i++) {
            console.log(answerArray[i]);
        }
        console.log("answerarray[0] is " + answerArray[0]);
        if(answerArray[0] === 53) {
            console.log("and the final winning number is " + answerArray[6]);
        } else {
            console.log("and the Power Ball is " + answerArray[6]);
        }
    }
