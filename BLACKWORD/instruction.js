// JavaScript Document
function jumpPage(newLoc) {
	newPage = newLoc.options[newLoc.selectedIndex].value;
	if(newPage = "") {
		alert('here');
		console.log('here');
	}
}




function draw_squares() {
	alert('draw_squares');
	/* Assuming 90% width x same amount deep */
	width = document.width;
	alert('number_of_squares = '+number_of_squares);
	alert('width = '+width);
}
function colour_black() {
	alert('colour_black');
}
function blacken(x,y, caller) {
	console.log('blacken('+x+','+y+','+'caller)');
	console.log('caller = '+caller);
	square = document.getElementById(caller);
	square = document.getElementById('col1');
	console.log('caller='+caller);
	console.log('bgcolor='+square.bgColor);
	if(square.bgColor == '#000000') {
		console.log('change from black');
		square.bgColor = '#777777';
	} else {
		console.log('change from ?');
		square.bgColor = '#000000';
	}
	console.log('square='+square);
	console.log('background='+square.background);
}
function add_letters() {
	alert('add_letters');
}