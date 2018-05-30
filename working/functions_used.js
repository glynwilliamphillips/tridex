// JavaScript Document 

//functions_used

function get_ANSWER_1(index) {
//	console.log('get_ANSWER('+index+')');
	//a_c will be in the form "[ABANDON]Leave a musical group playing",
	a_c = ANSWER_CLUE_1[index];
	for (k = 0; k < a_c.length; k++) {
		if(a_c[k] == '[') {
			open_position = k+1;
		}
		if (a_c[k] == ']') {
			close_position = k;
		}
	}
	inner = a_c.slice(open_position, close_position);	
//	console.log('out:get_ANSWER'+inner);
	return inner;
}	
function get_ANSWER_2(index) {
//	console.log('get_ANSWER('+index+')');
	//a_c will be in the form [answer]clue 
	a_c = ANSWER_CLUE_2[index];
	for (k = 0; k < a_c.length; k++) {
		if(a_c[k] == '[') {
			open_position = k+1;
		}
		if (a_c[k] == ']') {
			close_position = k;
		}
	}
	inner = a_c.slice(open_position, close_position);	
//	console.log('out:get_ANSWER_2'+inner);
	return inner;
}
function get_CLUE_1(index) {
	console.log('get_CLUE_2('+index+')');
	//a_c will be in the form "[ABANDON]Leave a musical group playing", 
	a_c = ANSWER_CLUE_1[index];
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
function get_CLUE_2(index) {
	console.log('get_CLUE_2('+index+')');
	//a_c will be in the form [answer]clue 
	a_c = ANSWER_CLUE_2[index];
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
	for (i = 0; i < presented_words_1.length; i++) {
		presented_words_1[i] = '_';
		presented_words_2[i] = '_';
	}

	temp = document.getElementById('POSSIBLE_1');
	temp.innerHTML = "<option value='blank'>Possible words 1</option>";

	temp = document.getElementById('POSSIBLE_2');
	temp.innerHTML = "<option value='blank'>Possible words 2</option>";
}

/* given the address in form abd find the letter if it exists on minicube of that number */

function get_letter(add_letter) {

	console.log('get_letter('+add_letter+')');

	//console.log('get_letter('+add_letter+')'+'from HTU '+add_letter + '='+mini_cubes[add_letter].cube_letter);
	minicube = mini_cubes[add_letter].cube_letter;
//	console.log('got letter'+minicube.cube_letter+' at '+add_letter);
	return minicube.cube_letter;
}

/* a word has been selected from the drop down list
Values set up here:
g_word_chosen
g_clue_chosen
*/

function answer_selected() {
//	console.log('answer_selected()');
	clear_clues_1();
	/* Which word (ANSWER) has been selected */
	g_word_chosen = find_selected_1();
//	console.log('g_word_chosen = '+g_word_chosen);
	/* having selected the word, we want the clues to it */
	g_clue_chosen = display_clues_1(g_word_chosen)
	/* Put clue into clue_box on screen 
	temp = document.getElementById('clue_box');
	temp.value=g_clue_chosen;
	console.log('answer_selected');
	console.log(' g_word_chosen='+g_word_chosen);
	console.log(' g_clue_chosen='+g_clue_chosen);
	//find_word_slots(cube,g_WORD_stripped); */
	user_instruction(4, '');
}
function clear_clues_1() {
//	console.log('clear_clues_1()');
	temp = document.getElementById('clues_1');
	temp.innerHTML = '';

}
//<option value="text">News clues selected from Cambridge News</option>
function add_to_clues_1(a_clue) {
//	console.log('add_to_clues('+a_clue+')');
	temp = document.getElementById('clues_1');
//	console.log('temp='+temp);
//	console.log('temp.innerHTML='+temp.innerHTML);
	temp.innerHTML= temp.innerHTML + "<option value='text'>" + a_clue + '</option>';
//	console.log('temp.innerHTML becomes '+temp.innerHTML);
}
function display_clues_1(g_word_chosen) {
//	console.log('display_clues for: '+g_word_chosen);
	word_in = strip_off_brackets(g_word_chosen);
	
	for (ind = 0; ind < ANSWER_CLUE_1.length; ind++) {
		//word_in = ANSWER_CLUE_1[ind];
		//word_in = g_word_chosen;
		
		list_WORD = ANSWER_CLUE_1[ind];
		/*"[ODDMENT]A part that can't be matched",*/
//		console.log('list_WORD = '+list_WORD);
		indstart = list_WORD.indexOf('[')+1;
		indend = list_WORD.indexOf(']');
		start = indstart;
		end = indend ;
//		console.log('indstart='+indstart + ' indend='+indend);
		answer0 = list_WORD.substring(start, end);
		answer = strip_hyphens(list_WORD.substring(start, end));
//		console.log('answer0 = '+answer0);
//		console.log('strip '+list_WORD+'from '+start +' to '+end);
//		console.log('answer = '+answer);
		//console.log('start;end='+indstart+','+indend+' looking at word '+answer+'word_in='+word_in);
		if (answer == word_in) {
//			console.log('match answer='+answer+'word_in='+word_in);
//			console.log('list_WORD='+list_WORD);
//			console.log('indend = '+indend);
//			console.log('length='+list_WORD.length);
			clue = list_WORD.substring(indend+1, list_WORD.length);
//			console.log('clue='+clue);
			add_to_clues_1(clue);
		} else {
			//console.log('mis-match answer='+answer+'  word_in='+word_in);
		}
	}
}
function strip_off_brackets(in1) {
	//console.log('before strip '+in1);
	indstart = in1.indexOf('[')+1;
	indend = in1.indexOf(']');
	word_clue = in1.substring(indend+1, in1.length);
	counter = in1.substring(indstart, indend);
	//console.log('after  strip'+word_clue);
	return word_clue;	
}
function strip_hyphens(word_in) {
	word_out = '';
	for (i= 0; i < word_in.length; i++) {
		if ((word_in[i] == '-') || (word_in[i] == ' ')){
			//console.log('removing '+word_in[i]);
		} else {
			word_out = word_out +word_in[i];
		}
	}
	//console.log('word_in '+word_in+ 'stripped to'+word_out);
	return word_out;
}
		

/* find_clue(word_chosen) accepts the word_chosen as [123]JANITOR splits it up and sets the variables */
function find_clue_1(g_word_chosen) {

	stock_number = word_in.substring(indstart,indend);

	/* Now use the number to look up the clue in  table ANSWER_CLUE */
	ind = 0;
	match = false;
	untidy = ANSWER_CLUE_1[stock_number];
	//untidy = g_word_chosen;
	indstart = untidy.indexOf('[');
	indend = untidy.indexOf(']');
	//console.log('g_word_stripped = '+g_word_stripped);
	g_word_stripped = untidy.substring(indstart+1,indend);
	//console.log('91:WORD_stripped='+g_word_stripped);
	this_clue = untidy.substring(indend+1,untidy.length);
//	console.log('word='+word_chosen+'clue='+this_clue)
	return this_clue;
	console.log('out:find_clue()');
}

function find_selected_1() {
/* Find which word was selected on element POSSIBLE_1 */

	temp = document.getElementById('POSSIBLE_1');
	tempoptions = temp.options;
	for(j=0; j<tempoptions.length; j++) {
		if(tempoptions[j].selected) {
			selected_ANSWER = tempoptions[j].value;
		}
	}
	return selected_ANSWER;
}
function find_selected_2() {
/* Find which word was selected on element POSSIBLE_2 */

	temp = document.getElementById('POSSIBLE_2');
	tempoptions = temp.options;
	for(j=0; j<tempoptions.length; j++) {
		if(tempoptions[j].selected) {
			selected_ANSWER = tempoptions[j].value;
		}
	}
	return selected_ANSWER;
}

