// JavaScript Document functions_used



function letter_pressed(lett) {
	console.log('letter_pressed('+lett+')');
/* remember where on the big cube we are */
	put_letter_in_cube(lett, HTU_number);
	/* choose direction A word */
	//console.log('HTU ='+HTU_number);
	seek_word(lett, HTU_number);
}


/* Seek a word with a letter in the position corresponding with square number (as a string) */

/* seek_word(lett, HTU_number) looks for the word with a letter at the given position 
Puts all the matched words into drop down list POSSIBLE 
Put the position in the ANSWER list in square brackets by the word*/

function seek_word(lett, HTU_number) {
	this_mini_cube = mini_cubes[HTU_number];
	//console.log('here');
	//console.log('***seek_word('+lett+','+HTU_number+')');
	clear_possible();
	//console.log('***add direction to next line');
/* try various directions */

	if(this_mini_cube.a_direction >= 0) {
		//console.log('direction A');
		find_word_frame(lett, HTU_number, 'A');
	}
	if(this_mini_cube.b_direction >= 0) {
		alert('direction B');
	}
	if(this_mini_cube.d_direction >= 0) {
		alert('direction D');
	}
}

/* find_word_frame:
Given a letter, its HTU position and its direction work out the pattern
of letters already used in the given direction.
*/
function find_word_frame(lett, HTU_number, direction){
//	console.log("find_word_frame(letter: "+lett+',HTU:'+HTU_number+',direction'+direction+')');
	if(direction == 'A') {
		HTU0 = HTU_number;
		minicube0 = mini_cubes[HTU0];
		letter0 = minicube0.cube_letter;

		HTU1 = HTU0 +49;
		minicube1 = mini_cubes[HTU1];
		letter1 = minicube1.cube_letter;
		
		HTU2 = HTU1 +49;
		minicube2 = mini_cubes[HTU2];
		letter2 = minicube2.cube_letter;
		
		HTU3 = HTU2 +49;
		minicube3 = mini_cubes[HTU3];
		letter3 = minicube3.cube_letter;

		HTU4 = HTU3 +49;
		minicube4 = mini_cubes[HTU4];
		letter4 = minicube4.cube_letter;
		
		HTU5 = HTU4 +49;
		minicube5 = mini_cubes[HTU5];
		letter5 = minicube5.cube_letter;
		
		HTU6 = HTU5 +49;
		minicube6 = mini_cubes[HTU6];
		letter6 = minicube6.cube_letter;
	
	//console.log('106:'+letter0+','+ letter1+','+letter2+','+letter3+','+letter4+','+letter5+','+letter6);	
		
	}
	this_word = [letter0, letter1, letter2, letter3, letter4, letter5, letter6];
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
			console.log('length of '+sub_ANS+'wrong at'+strip_ANS.length);
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
	
	/*
	for(ANSWER_CLUE_ptr = 0; ANSWER_CLUE_ptr < ANSWER_CLUE.length; ANSWER_CLUE_ptr++) {
		if(ANSWER_CLUE_ptr % 7 == 0) {
			sub_ANS = get_ANSWER(ANSWER_CLUE_ptr);
			sub_ANS = ANSWER_CLUE[ANS_CLUE_ptr];

			match = true;
			if ((letter0 == '_') || (sub_ANSWER[0] == letter0)) {
				//console.log('first letter matches');
			} else {
				match = false;
			}
			if ((letter1 == '_') || (sub_ANSWER[1] == letter1)) {
				//console.log('2 letter matches');
			} else {
				match = false;
			}
			if ((letter2 == '_') || (sub_ANSWER[2] == letter2)) {
				//console.log('3 letter matches');
			} else {
				match = false;
			}
			if ((letter3 == '_') || (sub_ANSWER[3] == letter3)) {
				//console.log('4 letter matches');
			} else {
				match = false;
			}
			if ((letter4 == '_') || (sub_ANSWER[4] == letter4)) {
				//console.log('5 letter matches');
			} else {
				match = false;
			}
			if ((letter5 == '_') || (sub_ANSWER[5] == letter5)) {
				//console.log('6 letter matches');
			} else {
				match = false;
			}
			if ((letter6 == '_') || (sub_ANSWER[6] == letter6)) {
				//console.log('7 letter matches');
			} else {
				match = false;
			}
			if (match) {
				answer_number = 5;
				console.log('word match with '+sub_ANSWER[0]+sub_ANSWER[1]+sub_ANSWER[2]+sub_ANSWER[3]+sub_ANSWER[4]+sub_ANSWER[5]+sub_ANSWER[6]);
				add_to_selection(answer_number, sub_ANSWER);
			}
		}
	}
	*/
//	console.log('after find_word_frame saved_word_location='+saved_word_location);
}
function get_ANSWER(index) {
	//a_c will be in the form [answer]clue 
	a_c = ANSWER_CLUE[index];
	for (k = 0; k < a_c.length; k++) {
		if(a_c[k] == '[') {
			open_position = k+1;
		}
		if (a_c[k] == ']') {
			close_position = k;
		}
	}
	inner = a_c.slice(open_position, close_position);	
	return inner;
}
function get_CLUE(index) {
	//a_c will be in the form [answer]clue 
	a_c = ANSWER_CLUE[index];
	for (k = 0; k < a_c.length; k++) {
		if(a_c[k] == '[') {
			open_position = k+1;
		}
		if (a_c[k] == ']') {
			close_position = k;
		}
	}
	inner = a_c.slice(close_position, ac.length);	
	return inner
}

function clear_possible() {
//	console.log('clear_possible()');
	for (i = 0; i < presented_words.length; i++) {
		presented_words[i] = '_';
	}

	temp = document.getElementById('POSSIBLE');
	temp.innerHTML = "<option value='blank'>Possible words 5</option>";
}

/* given the address in form abd find the letter if it exists on minicube of that number */

function get_letter(add_letter) {
//	console.log('get_letter('+add_letter+')'+'from HTU '+add_letter + '='+mini_cubes[add_letter].cube_letter);
	minicube = mini_cubes[add_letter].cube_letter;
//	console.log('got letter'+minicube.cube_letter+' at '+add_letter);
	return minicube.cube_letter;
}
/* put the given letter into the cube identified by the HTU_number & HTU_string */
function put_letter_in_cube(lett, HTU_number) {
	console.log('put letter in cube('+lett+','+HTU_number);
	mini_cube = mini_cubes[HTU_number];
	console.log('mini_cube='+mini_cube);
	//Save away the letter stored in this mini-cube
	HTU_string = string_HTU(HTU_number);
	console.log('HTU_string='+HTU_string);
	/* HTU_string needed to give he minicube an ID */
	console.log('put_letter_in_cube error');
	mini_cube.cube_letter = lett;
	/* put the filename of the minicube with letter on it eg 'cube_raw2/cube_raw2_A.png into the minicube slot */
	for (k = 0; k < alphabet_list.length; k++) {
		if (lett == alphabet_list[k]) {
			minicube1 = document.getElementById('cube_'+HTU_string);
			minicube1.src = './cube_raw2/cube_raw2_'+lett+'.png';
		} else {
			//console.log(lett +'<>'+alphabet_list[k]);
		}
	}

}
/* Add a word into the presented_words array then put it into the drop down box */
/* clear_possible() clears out before this one adds in tp possibles */

function add_to_selection(answer_number, selected_ANSWER) {
	//console.log('add_to_selection('+selected_ANSWER+')');
	//console.log('AAA presented_words['+0+']='+presented_words[0]);
	possible_element = document.getElementById('POSSIBLE');

	/* add to presented words 
	Find the end of the list*/
	
	for (i=0; i < presented_words.length ;i++) {		
		if (presented_words[i] == '_') {
			break;
		}
	}
	//console.log('pointer to presented_words='+i);
	presented_words[i] = selected_ANSWER;
	
//	console.log('presented_words='+presented_words[0]+presented_words[1]);
	/* take from presented_words */
	HTML_string = '';
//	console.log('presented_words='+presented_words);
	for (i=0; i < presented_words.length ;i++) {		
		if (presented_words[i] == '_') {
			//HTML_string += '<option>'+presented_words[i]+'</option>';
			break;
		} else {
			//console.log('presented_words['+i+']='+presented_words[i]);
			answer_number = i;
			gash = '['+i+']'+presented_words[i];
			HTML_string += '<option onClick="answer_selected(\''+gash+'\')">'+gash+'</option>';
			//HTML_string += '<option onClick="answer_selected(\''+'['+answer_number+']'+presented_words[i]+'\')">'+presented_words[i]+'</option>';
		}
	}
	//console.log('HTML_string = '+HTML_string);
	possible_element.innerHTML = HTML_string;

}

/* a word has been selected from the drop down list - deal with it */

function answer_selected(selected_ANSWER) {
	console.log('answer_selected('+selected_ANSWER+')');
/* Find which word was selected  */
	temp = document.getElementById('POSSIBLE');
	tempoptions = temp.options;
	for(j=0; j<tempoptions.length; j++) {
		if(tempoptions[j].selected) {
			selected_ANSWER = tempoptions[j].value;
		}
	}
	chosen = selected_ANSWER;
	console.log('***answer_selected ('+selected_ANSWER+')');


	/* having selected the word, we want the clue to it */
	selected_word = chosen;
	selected_word_clue = fetch_clue(chosen); 
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
//	console.log('cube_click_white('+a_value+','+b_value+','+d_value+'). Now choose a letter');
	cube_HTU = make_HTU_number(a_value, b_value, d_value);
	thiscube = mini_cubes[cube_HTU];
	make_HTU(a_value,b_value, d_value);
	/*returns HTU_string but also sets up HTU_number */
	
	//update_frame3_word(HTU_string);	
	//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
	//colour the cube yellow while working on it
	new_src = './cube_raw2/cube_raw2_yellow.png'
	thiscube.cube_colour = 'yellow';
	
	//console.log('cube yellow');
	id = 'cube_'+HTU_string;
	word_cube=document.getElementById(id);
	old_src = word_cube.src;
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
	word_cube.src = new_src;	
	word_cube.onclick = ""; 
	
}
/* Given the word chosen in the form [123] ABANDON find clue 123 which relates to ABANDON */
/* called from answer_selected */
var untidy = [,,,,,,,];
var tidy_out = [,,,,,,,];

function fetch_clue(word_chosen) {
	console.log('***fetch clue for: '+word_chosen);
	tidy_out = [];
	untidy = [];
	tidy_ANSWER = [];
	indstart = word_chosen.indexOf('[')+1;
	indend = word_chosen.indexOf(']');
	answer_number = word_chosen.substring(indstart,indend);
	console.log('number='+answer_number);
	ind = 0;
	match = false;
	for(ind=0; ind < ANSWER_CLUE.length; ind++){
		untidy = ANSWER_CLUE[ind];
	}
	this_clue = word_chosen.substring(indend+1,word_chosen.length);
	
/*	
	console.log('ANSWER.length='+ANSWER.length);
	console.log('entry 1988='+ANSWER[1988]);
	for(ind=0; ind < ANSWER.length; ind++){
		untidy = (ANSWER[ind]);
		temp=ANSWER[ind];
		console.log('temp='+temp+'ind='+ind);
		tidied = tidy(temp)
		tidy_ANSWER.concat(tidied);
		if (word_chosen == tidy_ANSWER) {
			match = true;
			answer_number = ind;
			console.log('match at '+ind+tidy_ANSWER);
		} else {
			console.log('307:'+word_chosen+'does not match '+tidy_ANSWER);
		}
	}


	console.log('answer_clue='+ANSWER_CLUE[answer_number]);
	c_b = document.getElementById('clue_box');
	c_b.value = CLUE[answer_number];
	//console.log('c_b='+c_b);
	c_b.text = CLUE[answer_number];
*/	
}
/* tidy and answer from form DEAD-SEA, or DEAD SEA to DEADSEA */
function tidy(untidy) {
	//console.log('tidy('+untidy+')');
	u = 0;
	for (t = 0; t < untidy.length; t++) {
		if ((untidy[t] == '_') || (untidy[t] == '-')  || (untidy[t] == ' ')) {
			console.log('Hyphen ignored');
		} else {
			tidy_out[u++] = untidy[t];
		}
	}
	if (u != 7) {
		console.log('problem with '+untidy+'length is'+tidy_out.length+' u='+u);
	}
	return tidy_out;
}
/* Given a word, return the first clue that matches it */
/* called from clues_add(??) */
function get_clue(word_in) {
	console.log('get_clue('+word_in+')');
	
//	for(i = 0; i <ANSWER.length; i++) {
	for(iclue = 0; iclue <100; iclue++) {
		if (word_in == ANSWER[iclue]) {
			console.log('clues_code:71:CLUES='+CLUE[iclue]);
			return CLUE[iclue];
		} else {
			//console.log('word_in'+word_in+'<>ANSWER['+iclue+']'+ANSWER[iclue]);
		}
	}
}

