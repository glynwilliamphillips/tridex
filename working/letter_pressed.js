// JavaScript Document
//letter_pressed sequence
function letter_pressed(lett) {
	console.log('letter_pressed('+lett+')')
	thiscube = mini_cubes[g_HTU_number];
	//letter_to_cube(g_HTU_number, lett);
	letter_to_cube(thiscube,lett)
	 seek_word(lett, thiscube);
//	 console.log('out:letter_pressed');
}

/* seek_word(lett, cube) looks for the word with a letter at the given position 
Puts all the matched words into drop down list POSSIBLE 
Put the position in the ANSWER list in square brackets by the word*/

function seek_word(lett, myCube) {
//	console.log('seek_word('+lett+','+myCube+')');
	clear_possible();
	//console.log('***add direction to next line');
	if(myCube.direction_A == 'A') {
//		console.log('go seek');
		find_word_frame(lett, myCube, 'A');
		find_potential_words_1(g_word_frame);
		find_potential_words_2(g_word_frame);
	}
	if(myCube.direction_B == 'B') {
		find_word_frame(lett, myCube, 'B');
		find_potential_words_1(g_word_frame);
		find_potential_words_2(g_word_frame);
	}
	if(myCube.direction_C == 'C') {
		console.log('direction C');
		find_word_frame(lett, myCube, 'C');
		find_potential_words_1(g_word_frame);
		find_potential_words_2(g_word_frame);
	}
//	console.log('out:seek_word()');
}


/* find_word_frame:
Given a letter, its HTU position and its direction work out the pattern
of letters already used in the given direction.
Return array g_word_frame[]
*/
function find_word_frame(lett, myCube, direction){
//	console.log("find_word_frame("+lett+',cube:'+myCube+',direction'+direction+')');
var this_word = new Array(7);
	/* The minicubes are held as objects in an array 0 to 7*64 +7*7 +6.
	The position in this array is by HTU number.
	therefore the relevant minicubes are start, start+1, start +2, start+3, start+4, start+5, start+6
	*/
	if(direction == 'A') {
		HTU0 = myCube.HTU_number;
		this_word[0] = myCube.cube_letter;

		minicube1 = mini_cubes[HTU0+1];
		this_word[1] = minicube1.cube_letter;
		
		minicube2 = mini_cubes[HTU0+2];
		this_word[2] = minicube2.cube_letter;

		minicube3 = mini_cubes[HTU0+3];
		this_word[3] = minicube3.cube_letter;
		
		minicube4 = mini_cubes[HTU0+4];
		this_word[4] = minicube4.cube_letter;

		minicube5 = mini_cubes[HTU0+5];
		this_word[5] = minicube5.cube_letter;

		minicube6 = mini_cubes[HTU0+6];
		this_word[6] = minicube6.cube_letter;
	}
	if(direction == 'C') {	//Climb
		HTU0 = myCube.HTU_number;
		console.log('Climb from HTU'+HTU0);
		minicube0 = mini_cubes[HTU0];
		this_word[0] = minicube0.cube_letter;

		minicube1 = mini_cubes[HTU0+49];
		this_word[1] = minicube1.cube_letter;
		
		minicube2 = mini_cubes[HTU0 + 98];
		this_word[2] = minicube2.cube_letter;

		minicube3 = mini_cubes[HTU0 + 147];
		this_word[3] = minicube3.cube_letter;
		
		minicube4 = mini_cubes[HTU0 + 196];
		this_word[4] = minicube4.cube_letter;

		minicube5 = mini_cubes[HTU0 + 245];
		this_word[5] = minicube5.cube_letter;

		minicube6 = mini_cubes[HTU0 + 294];
		this_word[6] = minicube6.cube_letter;
	}
	if(direction == 'B') {	//Behind or Back
		HTU0 = myCube.HTU_number;
		console.log('BACK from HTU'+HTU0);
		minicube0 = mini_cubes[HTU0];
		this_word[0] = minicube0.cube_letter;

		minicube1 = mini_cubes[HTU0 - 7];
		this_word[1] = minicube1.cube_letter;
		
		minicube2 = mini_cubes[HTU0 - 14];
		this_word[2] = minicube2.cube_letter;

		minicube3 = mini_cubes[HTU0 - 21];
		this_word[3] = minicube3.cube_letter;
		
		minicube4 = mini_cubes[HTU0 - 28];
		this_word[4] = minicube4.cube_letter;

		minicube5 = mini_cubes[HTU0 - 35];
		this_word[5] = minicube5.cube_letter;

		minicube6 = mini_cubes[HTU0 - 42];
		this_word[6] = minicube6.cube_letter;
	}
//	console.log('this_word = '+this_word);
	g_word_frame = this_word;

}
		/* The letters of the potential word are now held in array this_word */
//		console.log('Word in array ='+this_word);
	
	
	/* go through list of potential words (answers)
	 to see what would fit words matching g_word_frame */

	 
function find_potential_words_1(word_frame) {	
	/* 'word_frame is just a dummy name */
//	console.log('find NEWS words that match g_word_frame '+g_word_frame);	
	this_word = g_word_frame; 
	for(ptr = 0; ptr < ANSWER_CLUE_1.length; ptr++) {	
		//console.log('clue='+ANSWER_CLUE[ptr]); 
		sub_ANS = get_ANSWER_1(ptr);
		/***********************************************************/
		/* tidy and answer from form DEAD-SEA, or DEAD SEA to DEADSEA */
		strip_ANS = tidy_up_ANSWER(sub_ANS);
		if (strip_ANS.length !=14) {
			if (strip_ANS.length != 7) {
				console.log('length of '+strip_ANS+'wrong at'+strip_ANS.length);
				console.log('**strip_ANS='+strip_ANS+'sub_ANS='+sub_ANS);
			}
		}
		match = true;
		this_ptr = 0;
		fred = 0;
		for (i = 0; i < strip_ANS.length; i++) {
			if ((this_word[i] != '_')) {		/* no pattern letter to compare */
				/* pattern letter to match */	
				if (this_word[i] != strip_ANS[i])	{
					/* pattern letter doesn't match */
					//console.log('this_word['+i+'] does not match strip_ANS['+i+']');
					match = false;
				}
			}
		}
		if (match) {
			answer_number = ptr;	//probably not used
			//console.log('word '+ this_word+' matched with '+strip_ANS);
			if(strip_ANS != previous_strip_ANS_1) {
				add_to_selection_1(answer_number, strip_ANS);
				previous_strip_ANS_1 = strip_ANS;
			}
		}
		
			
	}
//	console.log('out:find_matching_words()');
	redraw_axis();
	user_instruction(3, '');	
}

/* Add a word into the presented_words array then put it into the drop down box */
/* clear_possible() clears out before this one adds in tp possibles */

function add_to_selection_1(answer_number, selected_ANSWER) {
//	console.log('add_to_selection_1('+answer_number+','+selected_ANSWER+')');
	possible_element = document.getElementById('POSSIBLE_1');
	/* add to presented words 
	Find the end of the list*/
	for (i=0; i < presented_words_1.length ;i++) {		
		if (presented_words_1[i] == '_') {
			break;
		}
	}
//	console.log('broken i='+i);
	/* Add the new word to end of list */
//	console.log('selected_ANSWER='+selected_ANSWER);
	presented_words_1[i] = selected_ANSWER;
	//console.log('a.presented_words_1[0]='+presented_words_1[0]);
	/* take from presented_words */
	var cube_pattern = '';
	for (k = 0; k < 10; k++) {
		//console.log('presented_words['+k+']='+presented_words_1[k]);
	}
	for (i=0; i < presented_words_1.length ;i++) {	
//		console.log('b.presented_words[0]='+presented_words_1[0]);	
		if (presented_words_1[i] == '_') {
			//cube_pattern += '<option>'+presented_words[i]+'</option>';
			break;
		} else {
			//answer_number = i;
			gash = '[' + answer_number +']'+presented_words_1[i];
			cube_pattern += '<option onClick="answer_selected(\''+gash+'\')">'+gash+'</option>';
			//HTML_string += '<option onClick="answer_selected(\''+'['+answer_number+']'+presented_words[i]+'\')">'+presented_words[i]+'</option>';
			//console.log('XXX cube_pattern='+cube_pattern);
		}
	}
//	console.log('innerHTML was '+possible_element.innerHTML+'cube_pttern='+cube_pattern);
	possible_element.innerHTML = cube_pattern;
	//console.log('innerHTML becomes '+possible_element.innerHTML);
	//console.log('add_to_selection ');
}
<!------------------------------------------------------>
function find_potential_words_2(word_frame) {	
//	console.log('find OWN words that match g_word_frame '+g_word_frame);	
	this_word = g_word_frame; 
	/* ANSWER_CLUE_1 is of the form "[ABANDON]Leave a musical group playing",*/
	for(ptr = 0; ptr < ANSWER_CLUE_2.length; ptr++) {	
		//console.log('clue='+ANSWER_CLUE[ptr]); 
		sub_ANS = get_ANSWER_2(ptr);
		/***********************************************************/
		strip_ANS = tidy_up_ANSWER(sub_ANS);
		//console.log(ptr+'strip_ANS='+strip_ANS);
		///More to do here!!!!
		/* strip punctuation from ANSWER word */
		strip_ANS = [];
		for (i = 0; i < sub_ANS.length; i++) {
			if((sub_ANS[i] == '_') || (sub_ANS[i] == ' ') || (sub_ANS[i] == '-')) {
			} else {
				strip_ANS += sub_ANS[i];
			}
		}
		if (strip_ANS.length !=14) {
			if (strip_ANS.length != 7) {
				console.log('length of '+sub_ANS+'wrong at'+strip_ANS.length);
			}
		}
		match = true;
		this_ptr = 0;
		fred = 0;
		for (i = 0; i < strip_ANS.length; i++) {
			if (this_word[i] == strip_ANS[i])	{
				match = true;
			} else {
				//match = false;
			
				if ((this_word[i] == '_')) {
					fred = 2;
				} else {
					match = false;
				}
			}
		}
		if (match) {
			answer_number = ptr;	//probably not used
			//console.log('word match with '+strip_ANS);
			if(strip_ANS != previous_strip_ANS_2) {
				add_to_selection_2(answer_number, strip_ANS);
				previous_strip_ANS_2 = strip_ANS;
			}
		}
		
			
	}
	//console.log('out:find_matching_words()');
	redraw_axis();
	user_instruction(3, '');	
}

/* Add a word into the presented_words_2 array then put it into the drop down box */
/* clear_possible() clears out before this one adds in tp possibles */

function add_to_selection_2(answer_number, selected_ANSWER) {
//	console.log('add_to_selection_2('+answer_number+','+selected_ANSWER+')');
	possible_element = document.getElementById('POSSIBLE_2');
	/* add to presented words 
	Find the end of the list*/
	for (i=0; i < presented_words_2.length ;i++) {		
		if (presented_words_2[i] == '_') {
			break;
		}
	}
	presented_words_2[i] = selected_ANSWER;
	/* take from presented_words */
	var cube_pattern = '';
	for (i=0; i < presented_words_2.length ;i++) {		
		if (presented_words_2[i] == '_') {
			//cube_pattern += '<option>'+presented_words_2[i]+'</option>';
			break;
		} else {
			//console.log('presented_words_2['+answer_number+']='+presented_words_2[i]);
			//answer_number = i;
			gash = '[' + answer_number +']'+presented_words_2[i];
			cube_pattern += '<option onClick="answer_selected(\''+gash+'\')">'+gash+'</option>';
			//HTML_string += '<option onClick="answer_selected(\''+'['+answer_number+']'+presented_words[i]+'\')">'+presented_words[i]+'</option>';
			//console.log('XXX cube_pattern='+cube_pattern);
		}
	}
	possible_element.innerHTML = cube_pattern;
	//console.log('add_to_selection '+cube_pattern);

}
