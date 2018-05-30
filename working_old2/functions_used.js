// JavaScript Document functions_used

function letter_pressed(lett) {
	console.log('letter_pressed('+lett+')');
/* remember where on the big cube we are */
	put_letter_in_cube(lett, HTU_number);
	/* choose direction A word */
	//console.log('HTU ='+HTU_number);
	seek_word(lett, HTU_number);
}
	
function get_ANSWER(index) {
//	console.log('get_ANSWER('+index+')');
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
	console.log('get_CLUE('+index+')');
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
	console.log('clear_possible()');
	for (i = 0; i < presented_words.length; i++) {
		presented_words[i] = '_';
	}

	temp = document.getElementById('POSSIBLE');
	temp.innerHTML = "<option value='blank'>Possible words 5</option>";
}

/* given the address in form abd find the letter if it exists on minicube of that number */

function get_letter(add_letter) {
	console.log('get_letter('+add_letter+')');
	//console.log('get_letter('+add_letter+')'+'from HTU '+add_letter + '='+mini_cubes[add_letter].cube_letter);
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

/* a word has been selected from the drop down list - deal with it */
/* selected_ANSWER is useless
useful are minicube selected (the yellow one) cube_HTU
This can be looked up in*/

function answer_selected(selected_ANSWER) {
//	console.log('answer_selected('+selected_ANSWER+')');
//	console.log('cube_HTU='+cube_HTU);
/* Find which word was selected  */
	temp = document.getElementById('POSSIBLE');
	tempoptions = temp.options;
	for(j=0; j<tempoptions.length; j++) {
		if(tempoptions[j].selected) {
			selected_ANSWER = tempoptions[j].value;
		}
	}
	word_chosen = selected_ANSWER;
//	console.log('***answer_selected ('+selected_ANSWER+')');


	/* having selected the word, we want the clue to it */
	selected_word = word_chosen;
	selected_word_clue = fetch_clue(word_chosen); 
	temp = document.getElementById('clue_box');
//	console.log('was'+temp.value);
	temp.value=selected_word_clue;
	console.log('111: Look at word_list cube_HTU='+cube_HTU+'word_stripped='+word_stripped);
	word_to_cubes(cube_HTU,word_stripped);
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
	abd = make_HTU_number(a_value, b_value, d_value);
	console.log('cube_click_white('+a_value+','+b_value+','+d_value+')='+abd+'. Now choose a letter');
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
//	console.log('number='+answer_number);
	/* Now use the number to look up the clue in  table ANSWER_CLUE */
	ind = 0;
	match = false;
	untidy = ANSWER_CLUE[answer_number];
	indstart = untidy.indexOf('[');
	indend = untidy.indexOf(']');
	word_stripped = untidy.substring(indstart+1,indend);
//	console.log('180:word_stripped='+word_stripped);
	this_clue = untidy.substring(indend+1,untidy.length);
	return this_clue;
}
/* tidy and answer from form DEAD-SEA, or DEAD SEA to DEADSEA */
function tidy(untidy) {
	console.log('tidy('+untidy+')');
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
function word_to_cubes(cube_HTU,word_stripped){
	console.log('put word '+word_stripped+ ' to cube at HTU '+cube_HTU);
	/* look for the locations of a word from this minicube in word_location */
	match = 0;
	for (i = 0; i < word_location.length; i=i+7) {		
		if(cube_HTU == word_location[i]) {
			console.log('matches first word');
			match = 1;
			lett2=word_location[i+1];
			lett3=word_location[i+2];
			lett4=word_location[i+3];
			lett5=word_location[i+4];
			lett6=word_location[i+5];
			lett7=word_location[i+6];
			if(lett2 == 87) {
				alert('this');
	
			}
		}
		if(cube_HTU == word_location[i+1]) {
			console.log('matches word 2');
			match = 2;
		}
		if(cube_HTU == word_location[i+2]) {
			console.log('matches word 3');
			match = 3;
		}
		if(cube_HTU == word_location[i+3]) {
			console.log('matches word 4');
			match = 4;
		}
		if(cube_HTU == word_location[i+4]) {
			console.log('matches word 5');
			match = 5;
		}
		if(cube_HTU == word_location[i+5]) {
			console.log('matches word 6');
			match = 6;
		}
		if(cube_HTU == word_location[i+6]) {
			console.log('matches word 7');
			match = 7;
		}
	}
			
}

