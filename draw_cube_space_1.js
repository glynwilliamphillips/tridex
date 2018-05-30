// JavaScript Document draw_cube_space
function emulate(nn) {
	console.log('emulate()');
}
/* draw cube space across a steps from 0 to specified value 
Draw a slice where a is the given value*/

function draw_cube_space_a(a_value) {
	console.log('draw_cube_space_a('+a_value+')');
	
	clear_cube_space();

	//alert('a_value ='+a_value);

	a_start = 6;
	a_end = a_value;
	b_start = 6;
	b_end = 0;
	d_start = 0;
	d_end = 6;
	console.log('a');
	for(a = a_start; a >= a_end; a--) {
		console.log('a='+a);
		for (d = d_start; d <= d_end; d++) {
			console.log('d='+d);
			for(b = b_start; b >= b_end; b--) {
				j = a*7*7+b*7+d;
				console.log('j='+j +'a='+a+'b='+b+'d='+d);
				mini_draw_HTML(j);
			}
		}
	}
	console.log('finished');
	add_cube_space();
}

function draw_cube_space_b(b_value) {
	console.log('draw_cube_space_b('+b_value+')');
	//alert('here');
	clear_cube_space();
	
	a_start = 6;
	a_end = 0;
	b_start = 6;
	b_end = b_value;
	d_start = 0;
	d_end = 6;
	
	//console.log('mini_draw_HTML(0)');
	//mini_draw_HTML(0);
	//alert('done');

	for(b = b_start; b >= b_end; b--) {
		//alert('b');
		for (d = d_start; d <= d_end; d++) {
			//console.log(d);
			for(a = a_start; a >= a_end; a--) {
				j = a*7*7+b*7+d;
				//console.log('j= '+j+'  '+a+','+b+','+d);
				mini_draw_HTML(j);
				
			}
		}
	}
	add_cube_space();

}
function draw_cube_space_d(d_value) {
	console.log('draw_cube_space_d('+d_value+')');
	
	clear_cube_space();


	d_start = 0;
	d_end = d_value;
	b_start = 6;
	b_end = 0;
	a_start = 6;
	a_end = 0;
	for (dd = d_start; dd <=d_end; dd++) {
		//console.log('xxdraw_level'+dd);
		for (bb = b_start; bb >= b_end; bb--) {
			/* increment A */
			for (aa = a_start; aa >= a_end; aa--) {
				index = aa*49+bb*7+dd;
				//alert('index='+index);
				mini_draw_HTML(index);
			}
		}	
		//alert('dd='+dd+'accumulated_cube_space='+accumulated_cube_space.length);	
	}

	//alert('here');
	add_cube_space();
}
function clear_cube_space(){
	//console.log('clear_cube_space()');
	temp = document.getElementById("cube_space");
	console.log('temp='+temp);
	temp.innerHTML = "";
	accumulated_cube_space = '';
}
function add_cube_space() {
	//console.log('add_cube_space()');
	temp = document.getElementById("cube_space");
	cube_count1 = temp.innerHTML.length;
	//console.log('temp='+temp);
	temp.innerHTML = accumulated_cube_space;
	//console.log('cc'+accumulated_cube_space);
	cube_count2 = temp.innerHTML.length;
	//console.log('count1='+cube_count1+' count2='+cube_count2);
	
}
function draw_cube(a,b,d) {
	console.log('draw_cube('+a+','+b+','+d+')');
	
	clear_cube_space();

	j = a*7*7+b*7+d;

	mini_draw_HTML(j);
	add_cube_space();
}
