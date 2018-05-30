// JavaScript Document
//letter_pressed sequence
function letter_pressed(lett) {
	stack_in('letter_pressed()')
	//console.log('letter_pressed('+lett+')',1);
	/*
	if(global_list_paths == 'functions') {
		console.log('1. letter_pressed('+lett+')');
	} */
/* remember where on the big cube we are */
//	console.log('HTU_number='+HTU_number+'global='+global_HTU_number);
	thiscube = mini_cubes[global_HTU_number];
	letter_to_cube(thiscube,lett)
	//put_letter_in_cube(lett, global_HTU_number);
	/* choose direction A word */
	//console.log('HTU ='+HTU_number);
	 seek_word(lett, global_HTU_number);
	 stack_out('letter_pressed');
}

/* seek_word(lett, HTU_number) looks for the word with a letter at the given position 
Puts all the matched words into drop down list POSSIBLE 
Put the position in the ANSWER list in square brackets by the word*/

function seek_word(lett, HTU_number) {
	stack_in('seek_word('+lett+','+HTU_number+')');
	this_mini_cube = mini_cubes[HTU_number];
	clear_possible();
	//console.log('***add direction to next line');
/* try various directions 
console.log('this_mini_cube ='+this_mini_cube);
console.log('direction_A ='+this_mini_cube.direction_A);
console.log('direction_B ='+this_mini_cube.direction_B);
console.log('direction_C ='+this_mini_cube.direction_C);
*/
	if(this_mini_cube.direction_A == 'A') {
		//console.log('go seek');
		find_word_frame(lett, HTU_number, 'A');
	}
	if(this_mini_cube.direction_B == 'B') {
//		console.log('direction B');
	}
	if(this_mini_cube.direction_C == 'C') {
		console.log('direction C');
	}
	stack_out('seek_word()');
}


/* find_word_frame:
Given a letter, its HTU position and its direction work out the pattern
of letters already used in the given direction.
*/
function find_word_frame(lett, HTU_number, direction){
	stack_in("find_word_frame("+lett+',HTU:'+HTU_number+',direction'+direction+')');
var this_word = new Array(7);
	/* The minicubes are held as objects in an array 0 to 7*64 +7*7 +6.
	The position in this array is by HTU number.
	therefore the relevant minicubes are start, start+1, start +2, start+3, start+4, start+5, start+6
	*/
	if(direction == 'A') {
		HTU0 = HTU_number;
		minicube0 = mini_cubes[HTU0];
		this_word[0] = minicube0.cube_letter;

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
		HTU0 = HTU_number;
		console.log('lp: Climb from HTU'+HTU0);
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
		HTU0 = HTU_number;
		console.log('lp: Climb from HTU'+HTU0);
		minicube0 = mini_cubes[HTU0];
		this_word[0] = minicube0.cube_letter;

		minicube1 = mini_cubes[HTU0 + 7];
		this_word[1] = minicube1.cube_letter;
		
		minicube2 = mini_cubes[HTU0 + 14];
		this_word[2] = minicube2.cube_letter;

		minicube3 = mini_cubes[HTU0 + 21];
		this_word[3] = minicube3.cube_letter;
		
		minicube4 = mini_cubes[HTU0 + 28];
		this_word[4] = minicube4.cube_letter;

		minicube5 = mini_cubes[HTU0 + 35];
		this_word[5] = minicube5.cube_letter;

		minicube6 = mini_cubes[HTU0 + 42];
		this_word[6] = minicube6.cube_letter;
	}
		/* The letters of the potential word are now held in array this_word */
//		console.log('Word in array ='+this_word);
	
	
	/* go through list of potential words (answers)
	 to see what would fit tbis_word */
	for(ptr = 0; ptr < ANSWER_CLUE.length; ptr++) {	
		//console.log('clue='+ANSWER_CLUE[ptr]); 
		sub_ANS = get_ANSWER(ptr);
		/***********************************************************/
		strip_ANS = tidy(sub_ANS);
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
		if (strip_ANS.length != 7) {
//			console.log('length of '+sub_ANS+'wrong at'+strip_ANS.length);
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
			add_to_selection(answer_number, strip_ANS);
		}
		
			
	}
	stack_out('find_word_frame()');
}

/* Add a word into the presented_words array then put it into the drop down box */
/* clear_possible() clears out before this one adds in tp possibles */

function add_to_selection(answer_number, selected_ANSWER) {
	if(check_functions) {
		console.log('lp:add_to_selection('+answer_number+','+selected_ANSWER+')');
	}
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
			cube_pattern += '<option onClick="answer_selected(\''+gash+'\')">'+gash+'</option>';
			//HTML_string += '<option onClick="answer_selected(\''+'['+answer_number+']'+presented_words[i]+'\')">'+presented_words[i]+'</option>';
			//console.log('XXX cube_pattern='+cube_pattern);
		}
	}
	possible_element.innerHTML = cube_pattern;
	//console.log('add_to_selection '+cube_pattern);

}
