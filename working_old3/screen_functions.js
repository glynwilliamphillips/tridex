// JavaScript Document
//screen_functions

/* draw cube space across a steps from 0 to specified value 
Draw a slice where a is the given value*/


/* draw_cube_loop does:
	draws all the mini_cubes via min_draw_H_TML()
*/
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
	b = b_start;
	do_b = true;
	while (do_b) {
		d=d_start;
		while((d != d_end) || (d_inc == 0)) {						//open d loop
			a = a_start;
			while((a != a_end) || (a_inc == 0)) {					//open a loop
				index = d*49+b*7+a;
				cube = mini_cubes[index];
				cube_draw_H_TML(cube);
				//console.log('86:a='+a+'b='+b+'d='+d);
				//console.log('done');
				if((a_inc == 0) || (a == a_end)) {				//open a inc
					break;
				}
				a = a + a_inc;
			}									//close a loop
			if((d_inc == 0) || (d == d_end)) {					//open d inc
				break;
			}
			d = d+d_inc;
			}

		if  ((b == b_end) || (b_inc == 0)) {
			do_b = false;
		} else {
			b = b + b_inc;
		}
		
												//close d increment
			
										//close b loop
}

}
-->
function check_a() {
		if (a_start != a_end) {
		if(a_inc == 0) {
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
					
			if (a_end == a_start) {
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
		if(b_inc == 0) {
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
					
			if (b_end == b_start) {
				alert('b_value wrong');
				return false;
			}
		}
	}
}
function check_d() {
	if (d_start != d_end) {
		if(d_inc == 0) {
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
					
			if (d_end == d_start) {
				alert('d_value wrong');
				return false;
			}
		} 
	}
	console.log('d_value OK');
	return true;
}

function draw_cube_space_a(a_value) {
	console.log('draw_cube_space_a('+a_value+')');
	user_instruction(1); //'Click on one of the white minicubes to select it'

	clear_cube_space();

	a_start = 6;
	a_end = a_value-1;
	a_inc = -1;
	b_start = 6;
	b_end = 0;
	b_inc = -1;
	d_start = 0;
	d_end = 7;
	d_inc = 1;
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');

	if(numbers_tag.checked) {
		console.log('numbers');
		b_start = b_end;;
	}
	if(coords_tag.checked) {
		a_start = a_end;
		console.log('coords');
	}
	draw_cube_loop()
	add_cube_space();
}


function draw_cube_space_b(b_value) {
	console.log('draw_cube_space_b('+b_value+')');
	user_instruction(1);	//'Click on one of the white minicubes to select it'
	clear_cube_space();

	/ NOBBLE BLOCK */
	a_start = 6;
	a_end = -1;
	a_inc = -1;
	b_start = 6;
	b_end = b_value;
	b_inc = -1;
	d_start = 0; 
	d_end = 7;
	d_inc = 1;
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');

	if(numbers_tag.checked) {
		console.log('numbers');
		b_start = b_end;;
	}
	if(coords_tag.checked) {
		a_start = a_end;
		console.log('coords');
	}
	draw_cube_loop()
	add_cube_space();
}


<!--
/* draw_cube_space_d(d_value) should draw 
all the horizontal layers until it reached d=d_value */

function draw_cube_space_d(d_value) {
	
	console.log('draw_cube_space_d('+d_value+')');
	user_instruction(1);	//'Click on one of the white minicubes to select it'


	clear_cube_space();


	d_start = 0;
	d_end = d_value+1;
	d_inc = 1;
	b_start = 6;
	b_end = 0;
	b_inc = -1;
	a_start = 6;
	a_end = -1;
	a_inc = -1;
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');

	if(numbers_tag.checked) {
		d_start = d_end;;
	}
	if(coords_tag.checked) {
		a_start = a_end;
	}
	draw_cube_loop()
	add_cube_space();
}

-->
<!--

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
	HTU_number = make_HTU_number(a_value, b_value, d_value);
//	console.log('cube_click_white('+a_value+','+b_value+','+d_value+') ='+HTU_number);
	user_instruction(2);	//'Select a letter for this minicube'
	current_minicube = mini_cubes[HTU_number];
//	console.log('[279screen_functions set to yellow');
	set_colour(current_minicube, 'yellow');
	compute_pattern(current_minicube);
	draw_cube_loop();
//	console.log('282:after draw_cube_loop');
	add_cube_space();
	return;	
	
	/****************************/
	alert('DUFF entry');
	current_HTU = make_HTU_number(d_value, b_value, a_value);
	current_minicube = get_minicube(a_value, b_value, d_value);
	console.log('cube_click_white('+a_value+','+b_value+','+d_value+')='+current_HTU+'. Now choose a letter');
	find_letter_cubes(current_minicube);
/* colour the cube yellow while working on it */
	console.log('[291screen_functions Change cube '+current_minicube.HTU_string+' to yellow');
	current_minicube.cube_colour = 'yellow';
	mini_draw_H_TML(a_value, b_value, d_value);
/* If we've already started go straight to fitting the word rather than geting a letter */	
	id = 'cube_'+current_minicube.HTU_string;
	word_cube=document.getElementById(id);
	console.log('word_cube='+word_cube);
	old_src = word_cube.innerHTML;
	new_src = '';
	original_cube_name = './cube_raw2/cube_raw2_white.png';
	if(old_src.indexOf(original_cube_name) > 0) {
		//console.log('45: untouched mini-cube original_cube_name='+original_cube_name );
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
	console.log('onclick set to space');
	
}


function do_YELLOW() {
	console.log('do_YELLOW()  implemented');
	integer = make_HTU_number(0,5,5);
	console.log('integer ='+integer);
	cube_YELL = mini_cubes[integer];
	cube_list('YELLOW',cube_YELL);
}
function get_minicube(a, b, d)	{
		index = d *49 + b*7 + a;

 	return mini_cubes[index];
}
-->
/* Give an instruction to the user */
function user_instruction(i_number) {
	message = instructs[i_number];
	loc = document.getElementById('message_id');
	if(i_number == 0) {
		loc.value = 'test message';
	} else {
		loc.value = message;
	}
}
instructs= new Array(
"Click a button to draw cubes - blue Across; red Behind; Orange Down",
'Click on one of the white minicubes to select it',
'Select a letter for this minicube',
'Select a word with this word pattern'
);

function check_270() {
	alert('check 270');
	test = mini_cubes[270];
	alert('mini'+test);
	alert('mini_cubes.length = '+mini_cubes.length);

}
/* on mouse over key */
function key_note(message) {
	console.log(message);
}

