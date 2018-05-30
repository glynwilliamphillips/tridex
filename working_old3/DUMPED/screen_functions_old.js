// JavaScript Document
//screen_functions

/* draw cube space across a steps from 0 to specified value 
Draw a slice where a is the given value*/
<!--
function draw_cube_space_a(a_value) {
	console.log('draw_cube_space_a('+a_value+')');

	clear_cube_space();

	a_start = 6;
	a_end = a_value;
	b_start = 6;
	b_end = 0;
	d_start = 0;
	d_end = 6;
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');
	
	if(numbers_tag.checked) {
		a_start = a_end;
	}
	if(coords_tag.checked) {
		a_start = a_end;
	}
	for(a = a_start; a >= a_end; a--) {
		for (d = d_start; d <= d_end; d++) {
			for(b = b_start; b >= b_end; b--) {
				console.log('26:a='+a+'b='+b+'d='+d+' j='+j);
				mini_draw_H_TML(a, b, d);
			}
		}
	}
	add_cube_space();
}
/*comment */
-->

function draw_cube_loop() {
	console.log('draw_cube_loop()'+'d from '+d_start+' to '+d_end+'by '+d_inc);
	console.log('draw_cube_loop()'+'a from '+a_start+' to '+a_end+'by '+a_inc);
	console.log('draw_cube_loop()'+'b from '+b_start+' to '+b_end+'by '+b_inc);

	/*************************/
	if (check_b()) {
		if (check_d()) {
				if (check_a() ) {
				}
		}
	}
	//return;
	b = b_start;
	while ((b != b_end) || (b_inc == 0)) {
		d=d_start;
		console.log('116 b='+b);
		//break;
		while(d != d_end) {						//open d loop
			console.log('d='+d);
			a = a_start;
			while(a != a_end) {					//open a loop
				console.log('58:a='+a+'b='+b+'d='+d);
				//mini_draw_H_TML(a, b, d);
				console.log('86:a='+a+'b='+b+'d='+d);
				console.log('done');
				if(a != a_end) {				//open a inc
					a = a + a_inc;
				}								//close a inc
			}									//close a loop
			if(d != d_end) {					//open d inc
				d = d+d_inc;
			}
		if(b != b_end) {
			b = b + b_inc;
		}
		}										//close d increment
			
										//close b loop
}

}
-->
function check_a() {
		if (a_start != a_end) {
		if(a_inc = 0) {
			return true;
		}
		if (a_inc > 0) {
			/* climbing up */
			if (a_end <= a_start) {
				alert('a_value wrong');
				return false;
			}
		} 
		if (a_inc < 0) {
			/*climbing down */
			
			if (a_end > a_start) {
				alert('a_value wrong');
				return false;
			}
					
			if (a_end = a_start) {
				alert('a_value wrong');
				return false;
			}
		}
	}
	console.log('a_value OK');
	return true;
}

function check_b() {
		if (b_start != b_end) {
		if(b_inc = 0) {
			return true;
		}
		if (b_inc > 0) {
			/* climbing up */
			if (b_end <= b_start) {
				alert('b_value wrong');
				return false;
			}
		} 
		if (b_inc < 0) {
			/*climbing down */
			
			if (b_end > b_start) {
				alert('b_value wrong');
				return false;
			}
					
			if (b_end = b_start) {
				alert('b_value wrong');
				return false;
			}
		}
	}
}
function check_d() {
	if (d_start != d_end) {
		if(d_inc = 0) {
			return true;
		}
		if (d_inc > 0) {
			/* climbing up */
			if (d_end <= d_start) {
				alert('d_value wrong');
				return false;
			}
		} 
		if (d_inc < 0) {
			/*climbing down */
			
			if (d_end > d_start) {
				alert('d_value wrong');
				return false;
			}
					
			if (d_end = d_start) {
				alert('d_value wrong');
				return false;
			}
		} 
	}
	console.log('d_value OK');
	return true;
}

<!--
function draw_cube_space_b(b_value) {
	console.log('draw_cube_space_b('+b_value+')');
	clear_cube_space();
	a_start = 6;
	a_end = 0;
	a_inc = -1;
	b_start = 6;
	b_end = b_value;
	b_inc = b_end - b_start;

	a_end = a_start -1;	//NOBBLE
	d_start = 6;
	d_end = 0;
	d_inc = -1;
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');
	//console.log('numbers.tag='+numbers_tag);
	//console.log('numbers.tag.checked='+numbers_tag.checked);

	if(numbers_tag.checked) {
		console.log('numbers');
		b_start = b_end;;
	}
	if(coords_tag.checked) {
		a_start = a_end;
		console.log('coords');
	}
//	console.log('norm a_start='+a_start+'a_end='+a_end+'a_inc ='+a_inc);
//	console.log('norm b_start='+b_start+'b_end='+b_end+'b_inc ='+b_inc);
//	console.log('norm d_start='+d_start+'d_end='+d_end+'d_inc ='+d_inc);
	draw_cube_loop()
	add_cube_space();
}

-->
<!--
/* draw_cube_space_d(d_value) should draw 
all the horizontal layers until it reached d=ds_value */

function draw_cube_space_d(d_value) {
	
	console.log('draw_cube_space_d('+d_value+')');


	clear_cube_space();


	d_start = 0;
	d_end = d_value;
	//alert('d_end='+d_end);
	b_start = 6;
	b_end = 0;
	a_start = 6;
	a_end = 0;
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');

	if(numbers_tag.checked) {
		d_start = d_end;;
	}
	if(coords_tag.checked) {
		a_start = a_end;
	}

	
	for (dd = d_start; dd <=d_end; dd++) {
		//alert('d='+dd+'d_end='+d_end);
		for (bb = b_start; bb >= b_end; bb--) {
			for (aa = a_start; aa >= a_end; aa--) {
				//console.log('94:a='+aa+'b='+bb+'d='+dd+' j='+index);
				mini_draw_H_TML(aa, bb, dd);
			}
		}	
	}

	add_cube_space();
}

-->
<!--
function letter_pressed(lett) {
	console.log('letter_pressed('+lett+')'+'HTU_number='+HTU_number);
/* remember where on the big cube we are */
	put_letter_in_cube(lett, HTU_number);
	/* choose direction A word */
	//console.log('HTU ='+HTU_number);
	seek_word(lett, HTU_number);
}

/* cube_click_black does nothing as the cube is black	
*/
function cube_click_black(a_value, b_value, d_value){
	console.log('cube_click_black('+a_value+','+b_value+','+d_value+'). Nothing to do');
}
/* function cube_click_white acts on a click at cube x,y,z.
It takes the X,y,x and make up a single abd called the HundredsTensUnits
It colours the cube selected cube yellow - whether it had a letter on or not

*/
function cube_click_white(a_value, b_value, d_value){	
	console.log('cube_click_white('+a_value+','+b_value+','+d_value+')');
	
	current_HTU = make_HTU_number(d_value, b_value, a_value);
	current_minicube = get_minicube(a_value, b_value, d_value);
	console.log('cube_click_white('+a_value+','+b_value+','+d_value+')='+current_HTU+'. Now choose a letter');
	find_letter_cubes(current_minicube);
/* colour the cube yellow while working on it */
	console.log('Change cube '+current_minicube.HTU_string+' to yellow');
	current_minicube.src = './cube_raw2/cube_raw2_yellow.png'
	current_minicube.cube_colour = 'yellow';
	mini_draw_H_TML(a_value, b_value, d_value);
/* If we've already started go straight to fitting the word rather than geting a letter */	
	id = 'cube_'+current_minicube.HTU_string;
	//debug_cube_space=document.getElementById('cube_space');
	//console.log('cube_space='+debug_cube_space);
	//console.log('cube_space.inner='+debug_cube_space.innerHTML);
	//console.log('number_string='+current_minicube.HTU_number);
	word_cube=document.getElementById(id);
	console.log('word_cube='+word_cube);
	old_src = word_cube.innerHTML;
	new_src = '';
	original_cube_name = './cube_raw2/cube_raw2_white.png';
	if(old_src.indexOf(original_cube_name) > 0) {
		//console.log('45: untouched mini-cube original_cube_name='+original_cube_name );
		word_cube.src = new_src;
	} else {
		//mini-cube was not the original - it already had a letter
		//Find the filename for that letter on a yellow mini-cube
		for (k=0; k <= alphabet_list.length; k++) {
			letter = alphabet_list[k];
			old_cube_name = "./cube_raw2/cube_raw2_"+letter+".png";
			if (old_src.indexOf(old_cube_name) >= 0) {
				new_src = "./cube_raw2/cube_raw2_yellow_"+letter+".png";
			}	
		}
	}
	console.log('change '+word_cube.innerHTML+'to'+new_src);
	word_cube.innerHTML = new_src;	
	word_cube.onclick = ""; 
	
}
-->
<!--
function do_HTML() {
	alert('do_HTML() not implemented');
}
function get_minicube(a, b, d)	{
		index = d *49 + b*7 + a;

 	return mini_cubes[index];
}
-->
