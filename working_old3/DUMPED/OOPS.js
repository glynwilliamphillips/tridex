// JavaScript Document
function Employee() {
	this.firstName = "Abc";
	this.xxx = function() {
		return 'aaa';
	}
}
/*
Employee.firstName = "Abc";
Employee.lastName = "Patel";
Employee.full = function() {
	console.log(this.firstName+' '+this.lastName);
}
*/

var abc = new Employee();

function test() {
	alert('abc name is '+abc.firstName);
	alert('abc last name is '+abc.lasttName);
	alert(' last name is '+abc.xxx);
}

