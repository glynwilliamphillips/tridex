// JavaScript Document
//cubify called from [>] button
/* given the answer put it into the minicubes shown by:
g_WORD_stripped
g_HTU_number
*/
function cubify_answer() {
	g_word_stripped = find_and_tidy_selected();
//	console.log('cubify_answer()'+'word_stripped='+g_word_stripped);
//	console.log('number='+g_HTU_number);
var	cube = mini_cubes[g_HTU_number];
//	console.log('cube='+cube);
//	console.log('cube.direction_A ,_B, _C ='+cube.direction_A+','+cube.direction_B+','+cube.direction_C);
//	console.log('g_word_stripped ='+g_word_stripped);
	/*NOBBLE */
		//return;
	if (cube.direction_A == 'A') {
//		console.log('put_..('+g_word_stripped+','+g_HTU_number+')');
		/*work out next sequence based on word space */
		g_word_cube_HTU = find_word_HTU(g_HTU_number , 'A');
		if(g_word_cube_HTU[0] < 0) {
			alert('Error HTU '+g_HTU_number+' not found in list');
		}
		put_answer_in_direction_A(g_word_stripped, g_HTU_number);	
	}
	if (cube.direction_B == 'B') {
		console.log('put_..('+g_word_stripped+','+g_HTU_number+')');
		/*work out next sequence based on word space */
		g_word_cube_HTU = find_word_HTU(g_HTU_number , 'A');
		//put_answer_in_direction(g_word_stripped, 'A', direction);	
/*		if(g_word_cube_HTU[0] < 0) {
			alert('Error HTU '+in_HTU+' not found in list');
		}
		*/
		put_answer_in_direction_B(g_word_stripped, g_HTU_number);	
	}
	if (cube.direction_C == 'C') {
		console.log('put_..('+g_word_stripped+','+g_HTU_number+')');
		/*work out next sequence based on word space */
		g_word_cube_HTU = find_word_HTU(g_HTU_number , 'C');
		//put_answer_in_direction(g_word_stripped, 'A', direction);	
		if(g_word_cube_HTU[0] < 0) {
			alert('Error HTU '+in_HTU+' not found in list');
		}
		put_answer_in_direction_C(g_word_stripped, g_HTU_number);	
	}
	
}

/* put_answer_in_direction_A 
Given the word & the location of the first letter put it in letter by letter*/
function put_answer_in_direction_A (answer, HTU_start) {
//	console.log('put_answerIn direction_A('+answer+'HTU_start='+HTU_start);
	find_word_HTU (HTU_start , 'A');
	if(g_word_cube_HTU[0] < 0) {
		alert('Error HTU '+HTU_start+' not found in list');
	}
	
	/* returns g_word_cube_HTU[0..6] */
	for (i =1; i < 7; i++) {
		/* put answer[i] in location[i] */
		letter = g_word_stripped[i];
		/* put_letter_in_cube */
		put_letter_in_cube(letter , g_word_cube_HTU[i]);
	}
}

/* put_answer_in_direction_B 
Given the word & the location of the first letter put it in letter by letter*/
function put_answer_in_direction_B (answer, HTU_start) {
	console.log('put_answerIn direction_B('+answer+'HTU_start='+HTU_start);
	find_word_HTU (HTU_start , 'B');
	if(g_word_cube_HTU[0] < 0) {
		alert('Error HTU '+HTU_start+' not found in list');
	}
	/* returns g_word_cube_HTU[0..6] */
	for (i =1; i < 7; i++) {
		/* put answer[i] in location[i] */
		letter = g_word_stripped[i];
		/* put_letter_in_cube */
		put_letter_in_cube(letter , g_word_cube_HTU[i]);
	}
}


/* put_answer_in_direction_C 
Given the word & the location of the first letter put it in letter by letter*/
function put_answer_in_direction_C (answer, HTU_start) {
	console.log('put_answerIn direction_C('+answer+'HTU_start='+HTU_start);
	find_word_HTU (HTU_start , 'C');
	if(g_word_cube_HTU[0] < 0) {
		alert('Error HTU '+HTU_start+' not found in list');
	}
	/* returns g_word_cube_HTU[0..6] */
	for (i =1; i < 7; i++) {
		/* put answer[i] in location[i] */
		letter = g_word_stripped[i];
		/* put_letter_in_cube */
		put_letter_in_cube(letter , g_word_cube_HTU[i]);
	}
}

function find_and_tidy_selected() {
	selected = find_selected_1()
	tidied = extract_answer(selected);
	return tidied;
}
/* take [12343]ANSWER & return ANSWER alone */
function extract_answer(untidy) {
	indstart = untidy.indexOf(']');
	indend = untidy.length;
	//console.log('g_word_stripped = '+g_word_stripped);
	tidy_out = untidy.substring(indstart+1,indend);
	return tidy_out;
}