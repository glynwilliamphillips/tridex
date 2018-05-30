// JavaScript Document draw_cube_space
/* draw cube space across a steps from 0 to specified value */

function draw_cube_space_a(a_value) {
	//console.log('draw_cube_space_a('+a_value+')');
	
	clear_cube_space();

	alert('a_value ='+a_value);
	a= a_value;
	b=0;
	d=0;
	
	//	for (a =  a_value; a <= end_a; ) {
	for (d = 6; d >= 0; d--) {
		for(b = 6; b >= 0; b--) {
			j = a*7*7+b*7+d;
			//console.log('j='+j +'a='+a+'b='+b+'d='+d);
			//mini_set_HTML(j);
			mini_draw_HTML(j);
		}
	}
}

function draw_cube_space_b(b_value) {
	console.log('draw_cube_space_d('+d_value+')');
	
	clear_cube_space();

	a = 0;
	b=0;
	d=d_value;
	for (d = 0; d <= d_value; d++) {
		for (a = 6; a >= 0; a--) {
			for(b = 6; b >= 0; b--) {
				j = a*7*7+b*7+d;
				//alert('j= '+j+'  '+a','+b+','+d);
				mini_set_HTML(j,a,b,d);
				mini_draw_HTML(j);
			}
		}
	}

}
function draw_cube_space_d(d_value) {
	//console.log('draw_cube_space_d('+d_value+')');
	
	clear_cube_space();

	alert('d_value ='+d_value);
	return;
	a= a_value;
	b=0;
	d=0;
	
	//	for (a =  a_value; a <= end_a; ) {
	for (d = 6; d >= 0; d--) {
		for(b = 6; b >= 0; b--) {
			j = a*7*7+b*7+d;
			//console.log('j='+j +'a='+a+'b='+b+'d='+d);
			//mini_set_HTML(j);
			mini_draw_HTML(j);
		}
	}
}


function clear_cube_space(){
//	console.log('clear_cube_space()');
	temp = document.getElementById("cube_space");
	temp.innerHTML = "";		
}
/* do_slice is called from 
draw_cube_space_a(n), draw_cube_space_b(n) * draw_cube_space_d(n)
where n is the number of the slice 0-6 */

function do_slice(I777_start, I777_increment, I777_limit) {
	for (j = I777_start; j <I777_limit; j=j+I777_increment) {
		mini_set_HTML(j);
		mini_draw_HTML(j);
	}

}