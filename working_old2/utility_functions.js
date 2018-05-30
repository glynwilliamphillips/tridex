//utility functions
//HTU & HTU_string are globals
var HTU_number = -1, HTU_string = '777', HTU_x, HTU_y, HTU_z;
/* make_HTU(x,y,z) takes the values and sets up 
HTU_number simple value x * 100 + y * 10 *z
HTU_string simple string of 2 characters x followed by 2 characters y then 2 characters Z
It returns HTU_string.
*/
function string_HTU(HTU_number) {
	return get_x_from_HTU_number(HTU_number) + get_b_from_HTU_number(HTU_number) + get_d_from_HTU_number(HTU_number)
}
function make_HTU(p_a, p_b, p_d) {
//	console.log('make_HTU('+p_a+','+p_b+','+p_d+')');
	HTU_x = p_a;
	HTU_y = p_b;
	HTU_z = p_d;
	h = p_x * 100;
	t = p_y * 10;
	u = p_z;
	
	h_string = make_string(p_a);
	t_string = make_string(p_b);
	u_string = make_string(p_d);
	//console.log('made');
	HTU_number = h + t + u;
	HTU_string = h_string + t_string + u_string;
	//console.log('HTU='+HTU+'HTU_string='+HTU_string);
	return HTU_string;
}
function get_x_from_HTU_number(HTU_in) {
	//console.log('get_x_from_HTU_number()');
	remainder = HTU_in % 100;
	x = (HTU_in - remainder) / 100;
	return x;
}
function get_y_from_HTU_number(HTU_in) {
	//console.log('get_y_from_HTU_number('+HTU_in+')');
	working = HTU_in % 100;
	//console.log('working='+working);
	z = HTU_in % 10;
	//console.log('z='+z);
	y = (working -z) / 10;
	//console.log('y='+y);
	return y;
}
function get_z_from_HTU_number(HTU_in) {
	//console.log('get_z_from_HTU_number('+HTU_in+')');
	z = HTU_in % 10;
	return z;
}


//take a 1 digit number and make it a string
function make_string(inp) {
//	console.log('functions6_make_string()');
	if (inp == 0) {
		return '0';
	}
	if (inp == 1) {
		return '1';
	}
	if (inp == 2) {
		return '2';
	}
	if (inp == 3) {
		return '3';
	}
	if (inp == 4) {
		return '4';
	}
	if (inp == 5) {
		return '5';
	}
	if (inp == 6) {
		return '6';
	}
	if (inp == 7) {
		return '7';
	}
	if (inp == 8) {
		return '8';
	}
	if (inp == 9) {
		return '9';
	}
}

