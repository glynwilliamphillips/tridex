// JavaScript Document
//letter_pressed sequence
function letter_pressed(lett) {
	console.log('letter_pressed('+lett+')'+'HTU_number='+HTU_number);
/* remember where on the big cube we are */
	put_letter_in_cube(lett, HTU_number);
	/* choose direction A word */
	//console.log('HTU ='+HTU_number);
	seek_word(lett, HTU_number);
}

/* seek_word(lett, HTU_number) looks for the word with a letter at the given position 
Puts all the matched words into drop down list POSSIBLE 
Put the position in the ANSWER list in square brackets by the word*/

function seek_word(lett, HTU_number) {
	console.log('seek_word('+lett+','+HTU_number+')');
	this_mini_cube = mini_cubes[HTU_number];
	clear_possible();
	//console.log('***add direction to next line');
/* try various directions */

	if(this_mini_cube.direction_A >= 0) {
		find_word_frame(lett, HTU_number, 'A');
	}
	if(this_mini_cube.direction_B >= 0) {
		console.log('direction B');
	}
	if(this_mini_cube.direction_D >= 0) {
		console.log('direction D');
	}
}


/* find_word_frame:
Given a letter, its HTU position and its direction work out the pattern
of letters already used in the given direction.
*/
function find_word_frame(lett, HTU_number, direction){
	console.log("find_word_frame("+lett+',HTU:'+HTU_number+',direction'+direction+')');
var this_word = new Array(7);
	if(direction == 'A') {
		HTU0 = HTU_number;
		minicube0 = mini_cubes[HTU0];
		this_word[0] = minicube0.cube_letter;

		HTU1 = HTU0 + 1;
		minicube1 = mini_cubes[HTU1];
		this_word[1] = minicube1.cube_letter;
		
		HTU2 = HTU1 +1;
		minicube2 = mini_cubes[HTU2];
//		console.log('HTU0='+HTU0);
//		console.log('HTU1='+HTU1);
//		console.log('HTU2='+HTU2);
//		console.log('HTU2='+HTU2);
//		console.log('mini_cubes.length = '+mini_cubes.length);
		test = mini_cubes[270];
//		alert('mini'+test);

		//check_270();
//		console.log('minicube2='+minicube2);
		this_word[2] = minicube2.cube_letter;
		
		HTU3 = HTU2 +1;
		minicube3 = mini_cubes[HTU3];
		this_word[3] = minicube3.cube_letter;

		HTU4 = HTU3 +1;
		minicube4 = mini_cubes[HTU4];
		this_word[4] = minicube4.cube_letter;
		
		HTU5 = HTU4 +1;
		minicube5 = mini_cubes[HTU5];
		this_word[5] = minicube5.cube_letter;
		
		HTU6 = HTU5 +1;
		minicube6 = mini_cubes[HTU6];
		this_word[6] = minicube6.cube_letter;
	
	
	}
	/* go through list of potential words (answers)
	 to see what would fit */
	for(ptr = 0; ptr < ANSWER_CLUE.length; ptr++) {	
		//console.log('clue='+ANSWER_CLUE[ptr]); 
		sub_ANS = get_ANSWER(ptr);
		/* strip punctuation from ANSER word */
		strip_ANS = [];
		for (i = 0; i < sub_ANS.length; i++) {
			if((sub_ANS[i] == '_') || (sub_ANS[i] == ' ') || (sub_ANS[i] == '-')) {
			} else {
				strip_ANS += sub_ANS[i];
			}
		}
		if (strip_ANS.length != 7) {
//			console.log('length of '+sub_ANS+'wrong at'+strip_ANS.length);
		}
			
		match = true;
		this_ptr = 0;
		for (i = 0; i < strip_ANS.length; i++) {
			if ((this_word[i] == strip_ANS[i]) || (this_word[i] == '_')) {
			} else {
				match = false;
			}
		}
		if (match) {
			answer_number = ptr;	//probably not used
//			console.log('word match with '+strip_ANS);
			add_to_selection(answer_number, strip_ANS);
		}
		
			
	}
}

/* Add a word into the presented_words array then put it into the drop down box */
/* clear_possible() clears out before this one adds in tp possibles */

function add_to_selection(answer_number, selected_ANSWER) {
	console.log('add_to_selection('+answer_number+','+selected_ANSWER+')');
	possible_element = document.getElementById('POSSIBLE');

	/* add to presented words 
	Find the end of the list*/
	
	for (i=0; i < presented_words.length ;i++) {		
		if (presented_words[i] == '_') {
			break;
		}
	}
	presented_words[i] = selected_ANSWER;
	presented_numbers[i] = answer_number;
	
	/* take from presented_words */
	cube_pattern = '';
	for (i=0; i < presented_words.length ;i++) {		
		if (presented_words[i] == '_') {
			//cube_pattern += '<option>'+presented_words[i]+'</option>';
			break;
		} else {
			//console.log('presented_words['+answer_number+']='+presented_words[i]);
			//answer_number = i;
			gash = '['+presented_numbers[i]+']'+presented_words[i];
			//alert('QQQQ');
			cube_pattern += '<option onClick="answer_selected(\''+gash+'\')">'+gash+'</option>';
			//HTML_string += '<option onClick="answer_selected(\''+'['+answer_number+']'+presented_words[i]+'\')">'+presented_words[i]+'</option>';
			console.log('XXX cube_pattern='+cube_pattern);
		}
	}
	possible_element.innerHTML = cube_pattern;

}
