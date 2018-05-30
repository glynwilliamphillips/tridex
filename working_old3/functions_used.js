// JavaScript Document functions_used

	
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
	console.log('put letter in cube('+lett+','+HTU_number+')');
	mini_cube = mini_cubes[HTU_number];
	mini_cube.cube_letter = lett;
	compute_pattern(mini_cube);
	draw_cube_loop();
	add_cube_space();
	return;
	
	
	cube_list('put_letter_in_cube',mini_cube);
	compute_pattern(mini_cube);
	console.log('pattern computed ');
	cube_list('put_letter_in_cube2',mini_cube);
	/* redo pattern */
	cube_draw_cube(HTU_number);
	add_cube_space();
	
	return;
	
}
/*
	console.log('mini_cube='+mini_cube);
	//Save away the letter stored in this mini-cube
	HTU_string = mini_cube.HTU_number;
	console.log('HTU_string='+HTU_string);
	/* HTU_string needed to give he minicube an ID */
/*
	console.log('put_letter_in_cube error');
	mini_cube.cube_letter = lett;
	/* put the filename of the minicube with letter on it eg 'cube_raw2/cube_raw2_A.png into the minicube slot */
/*	
	for (k = 0; k < alphabet_list.length; k++) {
		if (lett == alphabet_list[k]) {
			console.log('HTU_string='+HTU_string+'makes '+('cube_'+HTU_string));
			minicube1 = document.getElementById('cube_'+HTU_string);
			console.log('minicube1='+minicube1);
		} 
	}

}
*/

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
	//???find_word_slots(cube,word_stripped);
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
/* given the HTU pointer to one minicube find all the minicubes in its line */
function find_letter_cubes(current_minicube) {
	console.log('find_letter_cubes( '+current_minicube+') _ to be done');
	/* we now have 90 - look for word containing it */
	find_word_slots(current_minicube, word_stripped);
}
/* take cube_HTU the number of the minicube used.
Look through word_locations for that number 
Find those minicubes and put the letters in 
return them in */

function find_word_slots(myCube,word_stripped){
	console.log('find_word_slots '+word_stripped+ ' to cube at HTU '+myCube.HTU_number+'/'+myCube.HTU_string);
	/* look for the locations of a word from this minicube in word_location */
	match = 0;
	for (i = 0; i < word_location.length; i=i+7) {		
		if(cube_HTU == word_location[i]) {
			console.log('matches first word');
			match = 1;
			lett1=cube_HTU;
			lett2=word_location[i+1];
			lett3=word_location[i+2];
			lett4=word_location[i+3];
			lett5=word_location[i+4];
			lett6=word_location[i+5];
			lett7=word_location[i+6];
			if(lett2 == 87) {
				//alert('this'+lett2+','+lett3+','+lett4);
				//put_letter_in_cube(lett, HTU_number);
				put_letter_in_cube(word_stripped[1], lett2);
				put_letter_in_cube(word_stripped[2], lett3);
				put_letter_in_cube(word_stripped[3], lett4);
				put_letter_in_cube(word_stripped[4], lett5);
				put_letter_in_cube(word_stripped[5], lett6);
				put_letter_in_cube(word_stripped[6], lett7);


	
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


