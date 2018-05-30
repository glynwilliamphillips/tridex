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

function draw_cube_space_d(d_value) {
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


/*

		I777_start = 6*6*5; 
		I777_limit = 6 * 6 * a_value;	
		j = I777_start;
		mini_set_HTML(j);
		mini_draw_HTML(j);

		I777_start = 6*6*4; 
		I777_increment = -6;
		I777_limit = 6 * 6 * a_value;	
		j = I777_start;
		mini_set_HTML(j);
		mini_draw_HTML(j);

		I777_start = 6*6*3; 
		I777_increment = -6;
		I777_limit = 6 * 6 * a_value;	
		j = I777_start;
		mini_set_HTML(j);
		mini_draw_HTML(j);

		I777_start = 6*6*2; 
		I777_increment = -6;
		I777_limit = 6 * 6 * a_value;	
		j = I777_start;
		mini_set_HTML(j);
		mini_draw_HTML(j);

		I777_start = 6*6*1; 
		I777_increment = -6;
		I777_limit = 6 * 6 * a_value;	
		j = I777_start;
		mini_set_HTML(j);
		mini_draw_HTML(j);

		I777_start = 6*6*0; 
		I777_increment = -6;
		I777_limit = 6 * 6 * a_value;	
		j = I777_start;
		mini_set_HTML(j);
		mini_draw_HTML(j);

		I777_start = 6*6*0 - 6; 
		I777_increment = -6;
		I777_limit = 6 * 6 * a_value;	
		j = I777_start;
		mini_set_HTML(j);
		mini_draw_HTML(j);


	//for (k = 6; k>= a_value; k--) {
	for (k = 6; k> 5; k--) {
		//draw previous level_x for higher numbers
		I777_start = 6*6*6; 
		I777_increment = -6;
		I777_limit = 6 * 6 * a_value;	
	console.log('starting at '+I777_start+' stepping '+I777_increment+' to '+I777_limit);
		for (j = I777_start; j >= I777_limit; j=j+I777_increment) {
			mini_set_HTML(j);
			mini_draw_HTML(j);
		}
	}

*/
/*	
	gathered = '';
	temp_a = 6;
	for (temp_a = 6; temp_a >= a_value; temp_a--) {
		display_level_a(temp_a);
		//console.log('temp_a='+temp_a +'gathered.length = '+gathered.length);
	}
	slice_direction = 'a';
	draw_cube_space(gathered);
*/

/* This function takes all the cubes on Y level given and draws them
It uses as input:-
*/
function draw_cube_space_b(b_value) {
	console.log('**draw_cube_space_b('+b_value+')');
	clear_cube_space();
	gathered = '';
	temp_b = 0;
	for (temp_b = 6; temp_b >= b_value; temp_b--) {
		console.log('25 temp_b='+temp_b);
		display_level_b(temp_b);
	}
	slice_direction = 'b5';
	console.log('29:');
	draw_cube_space(gathered);
}

/*used*/
function draw_cube_space(gathered){
	//console.log('draw_cube_space cube_colour[5]='+cube_colour[5]);
	temp = document.getElementById("cube_space");	
	temp.innerHTML += gathered;		
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