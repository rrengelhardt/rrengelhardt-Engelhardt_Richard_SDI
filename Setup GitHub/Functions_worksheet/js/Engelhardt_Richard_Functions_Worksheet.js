/*
    Richard Engelhardt
    SDI 1510
    Creating Variables and Output
    09-30-2015
 */

// declare variables
console.log("Line 9 preliminary test");
// calculate the circumference of a circle
var radius = 5;
var circumference = calcCircumference(radius);
console.log("Line 13 the circumference is " + circumference);

function calcCircumference(radius)
{
        return radius * 2 * 3.141;
}
