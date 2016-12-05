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

console.log("test")