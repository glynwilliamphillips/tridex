// JavaScript Document
//screen_functions
/* draw cube space across a steps from 0 to specified value 
Draw a slice where a is the given value*/
function draw_all_minicubes_extra() {
	draw_all_minicubes0();
	draw_all_minicubes1();
	draw_all_minicubes2();
}
function draw_all_minicubes0() {
	alert('0');
	draw_minicubes('A',5) 
}
function draw_all_minicubes1() {
	slice_number = 2;
	alert('1');
	console.log('slice 1');
	draw_minicubes('A',3) 	
}
function draw_all_minicubes2() {
	slice_number = 3;
	draw_minicubes('A',1) 	

}

function draw_minicubes(ABC,abc_top) {
	console.log('draw_minicubes(ABC,'+abc_top+')');
	g_draw_dir = ABC;
	clear_cube_space();
	g_draw_axis[0] = ABC;
	g_draw_axis[1] = abc_top;

	user_instruction(1, ''); //'Click on one of the green minicubes to select it'
	redo_space(ABC,abc_top);
}
function redo_space(ABC,abc_top) {
	if(ABC == 'A') {
		redo_space_a(ABC,abc_top,'redo_space:37');
	}
	if(ABC == 'B') {
		redo_space_b(ABC,abc_top, 40);
	}
	if(ABC == 'C') {
		redo_space_c(ABC,abc_top);
	}
}
function redo_space_a(ABC,abc_top, caller) {
//	console.log('redo_space_a('+ABC+','+abc_top+')');
	set_orientation ('straight up');
/* for a cube space A we must set the A value then do all the B & C value cubes */
	//console.log('redo_space_a('+ABC+','+abc_top+','+caller+')');
	a_start = 6;
	a_end = abc_top;
	a_inc = -1;
	b_start = 6;
	b_end = -1;
	b_inc = -1;
	c_start = 0;
	c_end = 7;
	c_inc = 1;
	for (a_value = a_start; a_value>= a_end ; a_value+=a_inc) {
		for (b_value = b_start; b_value != b_end; b_value += b_inc) {
			for (c_value = c_start; c_value != c_end; c_value += c_inc) {
				console.log('draw('+a_value+','+b_value+','+c_value+')');
				index = make_HTU_number(a_value,b_value,c_value);
				temp_cube = mini_cubes[index];
				cube_draw_H_TML(temp_cube, 'redo_space_a()');
	
			}
		}
	}
	add_cube_space();
}

function redo_space_b(ABC,abc_top, sender) {
	set_orientation('straight up');
	
/* for a cube space B we must set the B value then do all the A & C value cubes */
	a_start = 6;
	a_end = -1;
	a_inc = -1;
	b_start = 6;
	b_end = abc_top;
	b_inc = -1;
	c_start = 0; 
	c_end = 7;
	c_inc = 1;
	for (b_value = b_start; b_value >= b_end ; b_value+=b_inc) {
		for (a_value = a_start; a_value != a_end; a_value += a_inc) {
			for (c_value = c_start; c_value != c_end; c_value += c_inc) {
				console.log('draw('+a_value+','+b_value+','+c_value+')');
				index = make_HTU_number(a_value,b_value,c_value);
				temp_cube = mini_cubes[index];
				cube_draw_H_TML(temp_cube, 'redo_space_b()');
	
			}
		}
	}
	add_cube_space();
}



function redo_space_c(ABC,abc_top) {

	set_orientation('sideways');
/* for a cube space C we must set the C value then do all the A & B value cubes */


	c_start = 0;
	c_end = abc_top+1;
	c_inc = 1;
	b_start = 6;
	b_end = -1;
	b_inc = -1;
	a_start = 6;
	a_end = -1;
	a_inc = -1;
	for (c_value = c_start; c_value < c_end ; c_value+=c_inc) {
		for (a_value = a_start; a_value != a_end; a_value += a_inc) {
			for (b_value = b_start; b_value != b_end; b_value += b_inc) {
//				console.log('draw('+a_value+','+b_value+','+c_value+')');
				index = make_HTU_number(a_value,b_value,c_value);
				temp_cube = mini_cubes[index];
				cube_draw_H_TML(temp_cube, 'redo_space_c()');
	
			}
		}
	}


	//draw_cube_loop(138);
	add_cube_space();
}


<!--

/* cube_click_black does nothing as the cube is black	
*/
function cube_click_black(a_value, b_value, c_value){
//	console.log('sf:cube_click_black('+a_value+','+b_value+','+c_value+'). Nothing to do');

}

function get_minicube(a, b, c)	{

	console.log('get_minicube('+a+','+b+','+c);

	index = c *49 + b*7 + a;
 	return mini_cubes[index];
}
-->
/* Give an instruction to the user */
function user_instruction(i_number, sender) {
//	console.log('user_instruction('+i_number+')');
	message = sender + instructs[i_number];
	loc = document.getElementById('white_instruction');
	if(i_number == 0) {
		loc.value = 'test message';
	} else {
		loc.value = message;
		//loc.size = 80+i_number;
	}
}
function user_number(number) {
	loc = document.getElementById('white_instruction');
	loc.value = number;
}

function button_1() {
	alert('button1');
	temp = document.getElementById('white_instruction');
	alert(temp.value);
	alert('maxlength='+temp.maxLength);
	temp.size = 60;
	temp.maxLength = 60;
	temp.disabled = true;
	
	temp = document.getElementById('red_instruction');
	alert(temp.value);
	alert('class='+temp.class);
	temp.class = 'white_instruction';
	temp.size = 1;
	temp.bgColor = 'white';
}
instructs= new Array(
"1. Click a button to draw mini cubes - blue Across; red Behind; Orange Climb",
'2. Click on one of the green minicubes to select it',
'3. Select a first letter for this word (frame 1)',
'4. Select a word from the list in frame2 (Cambridge News)',
'5. Press > key to put this word into the grid'

);

/* save_answer() takes the currently selected word (g_word_chosen) and clue (g_clue_chosen) & puts it in the minicubes
 at the place specified by g_currentHTU
It then takes the same info into the  */
//function save_answer(HTU_number, selected_word) {
function save_answer() {
	console.log('sf:save_answer()');
	results = document.getElementById('results_'+g_HTU_string);
	results.textContent = g_HTU_string +';"'+ g_clue_chosen+'";';	//0_5_5;"The French...";
	results.textContent = results.textContent +'"'+ g_word_stripped + '";'; ; //0_5_5;"The French...";"JESTING";
}

function list_minicubes() {
	for ( i = 0; i < 20; i++) {
		it = mini_cubes[i];
		console.log('mini_cubes['+i+']='+it);
	}
}
/* function set_orientation sets it to 'straight_up' or 'sideways' */
function set_orientation(new_orientation) {
	return;
	g_orientation = new_orientation;
	console.log('length='+mini_cubes.length);
	for (m = 0; m < mini_cubes.length; m++) {
		console.log('set_orientation m='+m);
		compute_pattern(mini_cubes[m]);
		console.log('done');
	}
}

