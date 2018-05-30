//utility functions

/* an HTU is an object of Hundreds Tens & Units
One can create it 
current_HTU = new make_HTU(2,1,5) 

The minicube on the screen is named as cube_123 where the HTU is 123.
To get info from an HTU use
current_HTU.number_string
current_HTU.number

When used in the geometry of the big cube: A is for across, B is for behind & D is for down.
A minicube has 3 number for A, B & D.
If combined to an HTU the number value is 49 x D + 7 x B + A



//HTU & HTU_string are globals
var HTU_number = -1, HTU_string = 'I777', HTU_a, HTU_b, HTU_d;
/* make_HTU(x,y,z) takes the values and sets up 
HTU_number simple value a * 49 + b *7 +d
HTU_string simple string of 2 characters x followed by 2 characters y then 2 characters Z
It returns HTU_string.
18	string_HTU(HTU_number)
26	make_HTU(p_a, p_b, p_d)
44	make_HTU_number(p_a, p_b, p_d)
56	get_a_from_HTU_number(HTU_in)
62	get_b_from_HTU_number(HTU_in)
72	get_d_from_HTU_number(HTU_in)
80	make_string(inp)

*/


function make_HTU(ph,pt,pu) {	
	console.log('make_HTU('+ph+','+pt+','+pu+')');

	this.h = ph;
	this,t = pt;
	this.u = pu;
	
	h_string = make_string(ph);
	t_string = make_string(pt);
	u_string = make_string(pu);
	this.number = ph *49 + pt*7 + pu;
	this.number_string = h_string + t_string + u_string;
	return this;
}
function get_HTU_number(HTU_in) {
	return HTU.number;
}

function get_h_from_HTU(HTU_in) {
	return HTU_in.h;
}

//take a 1 digit number and make it a string
function make_string(inp) {
//	console.log('make_string('+inp+')');
	switch(inp) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		alert('Error routine make_string cannot cope with '+inp);
	}
}

current_HTU = new make_HTU(1,2,3);



