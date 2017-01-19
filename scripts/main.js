/* 
	This is a block comment
*/

// this is a line comment
var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/alliance_logo.png') {
		myImage.setAttribute ('src','images/horde_logo.png');
	} else {
		myImage.setAttribute ('src','images/alliance_logo.png');
	}
}

var timeTil = function() {
	//JAVASCRIPT TIME CALCULATOR: how much time is it in milliseconds from 1970 from your specified date?

var milSec = 1000;
var tMin = 60;
var tHour = 60;
var tDay = 24;
var fDay = milSec * tMin * tHour * tDay;

var leapYearZero = 1972;  //the first leap year since 1970
// MAKE A COUNTER HERE SO WE CAN CREATE THE APPROPRIATE TIME ie(365,365,365,366,365,365,etc.)
var tLeapYear = 366 * fDay;
var tYear = 365 * fDay;
var tTravel = 2017 - 1970;
document.getElementById("PLACEHOLDER1").innerHTML = tYear * tTravel;
document.getElementById("PLACEHOLDER2").innerHTML = display;
};

document.getElementById("countDown").innerHTML = Date();

console.log("test");
