// JavaScript Document


HTU_number = 53;

function word_to_select(word) {
	console.log('***word_to_select('+word+')');
	possible_element = document.getElementById('POSSIBLE');
	opts = possible_element.options;
	for (i = 0; i < opts.length; i++) {
	//	console.log('option['+i+']='+opts[i].value);
	}
	//console.log('possible_element.inner='+possible_element.innerHTML);
	element_addition =
//First layer with ' layer to be passed to subroutine    
//	<option value="AVERAGE" >AVERAGE</option>
//Option constructor(text of the option,  optional value, selected by default or not, selected or not)
	newOption = new Option(word,word,0,0);
	possible_element.add(newOption,0);
	thisOptions = possible_element.options;
	for(i = 0; i < thisOptions.length; i++) {
//		console.log('i='+i+'option='+thisOptions[i].value);
	}
}

function put_answer_in_direction (answer,HTU_start, ABD_dir_in) {
	if (ABD_dir_in == 'a') {
		put_answer_in_direction_a(answer, HTU_start);	
	}
	if (ABD_dir_in == 'bb') {
		put_answer_in_direction_b(answer, HTU_start);	
	}
	if (ABD_dir_in == 'd') {
		put_answer_in_direction_d(answer, HTU_start);	
	}
}
function put_answer_in_direction_x(answer,HTU_start) {
}
function put_answer_in_direction_y(answer,HTU_start) {
}
function put_answer_in_direction_z(answer,HTU_start) {
}
/* clean_letter may not be used */
function clean_letter(inp) {
	console.log('functions6_clean_letter()');
	if (inp.length != 1) {
		console.log('clean_letter('+inp+') called with > 1 char');
		return ' ';
	}

	if ((inp[0] <= 'z') & (inp[0] >= 'a')) {
			/* lower case add shift */
			return upper_case(inp[0]);
		
	}
	if ((inp[0] <= 'Z') & (inp[0] >= 'A')) {
			/* lower case add shift */
			return inp[0];
		
	}
	return '';
}
function upper_case(low) {
	if (low == 'a') {
		return 'A';
	}
	if (low == 'b') {
		return 'B';
	}
	if (low == 'c') {
		return 'C';
	}
	if (low == 'd') {
		return 'D';
	}
	if (low == 'e') {
		return 'E';
	}
	if (low == 'f') {
		return 'F';
	}
	if (low == 'g') {
		return 'G';
	}
	if (low == 'h') {
		return 'H';
	}
	if (low == 'i') {
		return 'I';
	}
	if (low == 'j') {
		return 'J';
	}
	if (low == 'k') {
		return 'K';
	}
	if (low == 'l') {
		return 'L';
	}
	if (low == 'm') {
		return 'M';
	}
	if (low == 'n') {
		return 'N';
	}
	if (low == 'o') {
		return 'O';
	}
	if (low == 'p') {
		return 'P';
	}
	if (low == 'q') {
		return 'Q';
	}
	if (low == 'r') {
		return 'R';
	}
	if (low == 's') {
		return 'S';
	}
	if (low == 't') {
		return 'T';
	}
	if (low == 'u') {
		return 'U';
	}
	if (low == 'v') {
		return 'V';
	}
	if (low == 'w') {
		return 'W';
	}
	if (low == 'x') {
		return 'X';
	}
	if (low == 'y') {
		return 'Y';
	}
	if (low == 'z') {
		return 'Z';
	}
}

function show_points() {
	console.log('functions6_show_points()');

	temp = document.getElementById('p_left');

	temp.innerHTML = '<input type="button" class="x0y0h"; value="y=0" id="idx0y0"><input type="button" class="x0y10"; value="y=10"><input type="button" class="x0y20"; value="y=20"><input type="button" class="x0y30"; value="y=30"><input type="button" class="x0y40"; value="y=40"><input type="button" class="x0y50"; value="y=50"><input type="button" class="x0y60"; value="y=60"><input type="button" class="x0y70"; value="y=70"><input type="button" class="x0y80"; value="y=80"><input type="button" class="x0y90"; value="y=90">';
	temp = document.getElementById('p_top');
	temp.innerHTML = '	<input type="button" class="x10y0"; value="x=10"><input type="button" class="x20y0"; value="x=20"><input type="button" class="x30y0"; value="x=30"><input type="button" class="x40y0"; value="x=40"><input type="button" class="x50y0"; value="x=50"><input type="button" class="x60y0"; value="x=60"><input type="button" class="x70y0"; value="x=70"><input type="button" class="x80y0"; value="x=80">';
	
	temp = document.getElementById('p_right');
	temp.innerHTML = '	<input type="button" class="x90y0"; value="x90y0"><input type="button" class="x90y10"; value="x90y10"><input type="button" class="x90y20"; value="x90y20"><input type="button" class="x90y30"; value="x90y30"><input type="button" class="x90y40"; value="x90y40"><input type="button" class="x90y50"; value="x90y50"><input type="button" class="x90y60"; value="x90y60"><input type="button" class="x90y70"; value="x90y70"><input type="button" class="x90y80"; value="x90y80"><input type="button" class="x90y90"; value="x90y90">';
}

/* WORD HANDLING
// JavaScript Document word handling

/* call with a list of locations and a list of known letters */
var known_letters = new Array(7);
var known_locations = new Array(7);
function look_for_rest_of_word() {
	console.log('functions7:look_for_rest_of_word()');
	if(known_letters[0] = null) {
		get_letter(posn,known_locations[0]);
	}
}

/* CLUES CODE */
// JavaScript Document clues_code
function clues_clear() {
	console.log('functions6_clear clues');
	clues_temp = document.getElementById('clues_box');
	clues_temp.innerHTML = 'Clues';
	clues_text = '';
}
clues_text = '';
/* Given the number of the mini-cube return a string of the letter in that cell & tab */
function get_entry(HTU_number) {
	console.log('functions8:get_entry HTU='+HTU_number);
	GEvalue = cube_letter[HTU_number];
	if(GEvalue == '_') {
		word_match = false;
	} else {
		whole_word += GEvalue;
	}
	
	return ('['+HTU_number+']'+cube_letter[HTU_number]);
}



/* save_answer(HTU_string, selected_word) takes the selected word (selected_word) & puts it in the cube at the place specified by
HTU_string & ??? */
function save_answer(HTU_number, selected_word) {
	
	temp_a = get_a_from_HTU_number(HTU_number);
	temp_b = get_b_from_HTU_number(HTU_number);
	temp_d = get_d_from_HTU_number(HTU_number);
	console.log('save_answer('+temp_a+','+temp_b+','+temp_d+','+selected_word+')');
	i = 0;
}
