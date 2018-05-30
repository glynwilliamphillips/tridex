//utility functions
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

function string_HTU(HTU_number) {
//	console.log('HTU_number = '+HTU_number);
	tempa = get_a_from_HTU_number(HTU_number);
	tempb = get_b_from_HTU_number(HTU_number);
	tempd = get_d_from_HTU_number(HTU_number);
	temp_string = String(tempa) + String(tempb) + String(tempd);
	return temp_string;
}
function make_HTU(p_a, p_b, p_d) {
//	console.log('make_HTU('+p_a+','+p_b+','+p_d+')');
	xa = p_a;
	xb = p_b;
	xd = p_d;
	h = xa * 7 * 7;
	t = xb * 7;
	u = xd;
	
	h_string = make_string(p_a);
	t_string = make_string(p_b);
	u_string = make_string(p_d);
	//console.log('made');
	HTU_number = h + t + u;
	HTU_string = h_string + t_string + u_string;
	//console.log('HTU='+HTU+'HTU_string='+HTU_string);
	return HTU_string;
}
function make_HTU_number(p_a, p_b, p_d) {
//	console.log('make_HTU_number('+p_a+','+p_b+','+p_d+')');

	h = p_a * 7 * 7;
	t = p_b * 7;
	u = p_d;
	
	HTU_number = h + t + u;

	//console.log('HTU='+HTU+'HTU_string='+HTU_string);
	return HTU_number;
}
function get_a_from_HTU_number(HTU_in) {
	//console.log('get_a_from_HTU_number()');
	remainder = HTU_in % 49;
	a = (HTU_in - remainder) / 49;
	return a;
}
function get_b_from_HTU_number(HTU_in) {
	//console.log('get_b_from_HTU_number('+HTU_in+')');
	working = HTU_in % 49;
	//console.log('working='+working);
	d = HTU_in % 7;
	//console.log('z='+z);
	b = (working -d) / 7;
	//console.log('b='+b);
	return b;
}
function get_d_from_HTU_number(HTU_in) {
	//console.log('get_d_from_HTU_number('+HTU_in+')');
	d = HTU_in % 7;
	return d;
}


//take a 1 digit number and make it a string
function make_string(inp) {
//	console.log('functions6_make_string('+inp+')');
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




