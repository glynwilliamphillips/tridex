// JavaScript Document
//Routines NOT USED
/* return [123]test */	
function get_WORD(word_chosen) {
	alert('get_word() NOT USED');
	return word_chosen.WORD;
}
function get_ANS(word_chosen) {
	alert('get_ANS() NOT USED');
	return word_chosen.ANS;
}
/* Go through all word minicubes detecting if the word needs to be updated 
look at words_across here*/
/* Seems not to be called! */
function update_words(key_HTU) {
	alert('update_words() NOT USED');
	thisword = Array(6);
	word_HTUs = '';
	for(w = 0; w <= word_climb.length; w++) {
		word_HTUs = word_location[w];
		matched = false;
		for (letter=0; letter < 7; letter++) {
			if(key_HTU == word_HTUs[letter]) {
				matched = true;
			}
		}
		if(matched) {
			for (letter=0; letter < 7; letter++) {
				tmp1 = Key_HTU[letter];
				tmp2 = word_HTUs[letter];
			}

		}
		
		thisword[0] = wordstring[0];
		
	}
}
function get_HTU_ANS_CLUE(word_chosen) {
	alert('get_HTU_ANS_CLUE() NOT USED');
	
	console.log('word:get_HTU_ANS_CLUE('+word_chosen+')');
	if(HTU_ANS_CLUE == '') {
		HTU_ANS_CLUE = get_HTU(word_chosen) + word_chosen + get_CLUE(word_chosen);
	}
	return word_chosen.this.HTU_ANS_CLUE;
}
function get_HTU(word_chosen) {
	alert('word:get_HTU('+word_chosen+') NOT USED');
	if(word_chosen == '') {
		alert('error get_HTU('+word_chosen+')');
	}
	return word_chosen.HTU;
}
/* Change this minicube to one with the relevant letter in it 
Parameter is the HTU number of the cube
function letter_to_cube(cube_HTU){
	alert('letter_to_cube');
	cube = mini_cubes[cube_HTU];
	//set_colour(cube,'yellow');
	//compute_pattern(cube);
	cube_draw_H_TML(cube);
	console.log('make cube yellow (from '+cube.cube_colour+')'); 
}
*/
/* given the HTU pointer to one minicube find all the minicubes in its line */
function find_letter_cubes(current_minicube) {
	alert('find_letter_cubes() NOT USED');

	console.log('fu:find_letter_cubes( '+current_minicube+') _ to be done');

	/* we now have 90 - look for word containing it */
	find_word_slots(current_minicube, g_WORD_stripped);
}
/* take cube_HTU the number of the minicube used.
Look through words for that number 
Find those minicubes and put the letters in 
return them in */

function find_word_slots(myCube,WORD_stripped){
	alert('find_word_slots() NOT USED');

	console.log('FIND_WORD_SLOTS');
	console.log('HTU_number = '+myCube.HTU_number);
	console.log('myCube.index = '+myCube.index);

	console.log('fu:find_word_slots '+WORD_stripped+ ' to cube at HTU '+myCube.HTU_number+'/'+myCube.HTU_string);

	match = 0;
	for (i = 0; i < word_location.length; i=i+7) {		
		if(cube.index == word_location[i]) {
			console.log('matches first word');
			match = 1;
			lett1=cube.index;
			lett2=word_location[i+1];
			lett3=word_location[i+2];
			lett4=word_location[i+3];
			lett5=word_location[i+4];
			lett6=word_location[i+5];
			lett7=word_location[i+6];
			if(lett2 == 87) {
				//alert('this'+lett2+','+lett3+','+lett4);
				//put_letter_in_cube(lett, HTU_number);
				put_letter_in_cube(WORD_stripped[1], lett2);
				put_letter_in_cube(WORD_stripped[2], lett3);
				put_letter_in_cube(WORD_stripped[3], lett4);
				put_letter_in_cube(WORD_stripped[4], lett5);
				put_letter_in_cube(WORD_stripped[5], lett6);
				put_letter_in_cube(WORD_stripped[6], lett7);


	
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

function word_to_select(word) {
	alert('word_to_select() NOT USED')
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

/* cube_list lists on the console the values of the given cube */
function cube_list(title, list_cube) {
	alert('cube_list called');
	signal = false;
	list_tag = document.getElementById('list_on_tag');
	if (list_tag) {
//NOBBLE 		signal = true;
	}
//	console.log('list_tag='+list_tag);
	
	if(signal) { 
		console.log('**********************************');
		console.log(title);
		console.log('Index:'+list_cube.index);
		console.log('page_A:'+list_cube.page_A +'page_B:'+list_cube.page_B +'page_C:' +list_cube.page_C);
	
		console.log('display_top:'+list_cube.display_top +'display_left:'+list_cube.display_left);
		console.log('direction_A:'+list_cube.direction_A + 'direction_B:'+list_cube.direction_B + ' direction_C:' + list_cube.direction_C);
		console.log('HTU_string: '+list_cube.HTU_string);
		console.log('HTU_number: '+list_cube.HTU_number );
		
		console.log('cube_letter: '+list_cube.cube_letter );
		console.log('cube_colour: '+list_cube.cube_colour);
		console.log('C*height: '+list_cube.height_C );
		console.log('A*height: '+list_cube.height_A );
		console.log('B*height '+list_cube.height_B );
		console.log('cube_pattern: '+list_cube.cube_pattern ); 
		console.log('image_string: '+list_cube.image_string);
	}
}

/*
Go through all the word patterns looking for words containing any words with the HTU of interest
Inputs:HTU of current minicube; 
	word pointer. Normally 0 but higher if this is a second call to the routine
Output:word_HTU array pointing to this word positions
	word_loc_pointer
*/
/* Given the starting HTU, make an array of all the HTUs for this word
g_word_cube_HTU is the result */
/*
function find_word_HTU (in_HTU , direction) {

	console.log('find_word_HTU('+in_HTU+','+g_word_cube_HTU+')');
	g_word_cube_HTU[0] = -1;
	if (direction == 'A') {
		for (pointer = 0; pointer < words_across.length; pointer = pointer + 7) {
			if (words_across[pointer] == in_HTU) {
				g_word_cube_HTU[0] = words_across[pointer];
				g_word_cube_HTU[1] = words_across[pointer+1];
				g_word_cube_HTU[2] = words_across[pointer+2];
				g_word_cube_HTU[3] = words_across[pointer+3];
				g_word_cube_HTU[4] = words_across[pointer+4];
				g_word_cube_HTU[5] = words_across[pointer+5];
				g_word_cube_HTU[6] = words_across[pointer+6];
			} else {
//				console.log('words_across['+pointer+'] != '+in_HTU);
			}
		}
	}
	if (direction == 'B') {
		var y = new Array(7);

		for (x = 0; x < words_back.length; x += 7) {
			y[0] = words_back[x];
			y[1] = words_back[x+1];
			y[2] = words_back[x+2];
			y[3] = words_back[x+3];
			y[4] = words_back[x+4];
			y[5] = words_back[x+5];
			y[6] = words_back[x+6];
		}
		console.log(y);
	
		for (pointer = 0; pointer < words_back.length; pointer = pointer + 7) {
			if (words_back[pointer] == in_HTU) {
				console.log('Setting up minicube '+in_HTU);
				g_word_cube_HTU[0] = words_back[pointer];
				g_word_cube_HTU[1] = words_back[pointer+1];
				g_word_cube_HTU[2] = words_back[pointer+2];
				g_word_cube_HTU[3] = words_back[pointer+3];
				g_word_cube_HTU[4] = words_back[pointer+4];
				g_word_cube_HTU[5] = words_back[pointer+5];
				g_word_cube_HTU[6] = words_back[pointer+6];
			}
		}
	}
	if (direction == 'C') {
//		console.log('words_climb:362 to be done');

		for (pointer = 0; pointer < words_climb.length; pointer = pointer + 7) {
//			console.log('Compare '+words_climb[pointer]+' with '+in_HTU);
//			console.log(words_climb[pointer]+','+words_climb[pointer+1]+','+words_climb[pointer+2]+','+words_climb[pointer+3]+','+words_climb[pointer+4]);
			if (words_climb[pointer] == in_HTU) {
				g_word_cube_HTU[0] = words_climb[pointer];
				g_word_cube_HTU[1] = words_climb[pointer+1];
				g_word_cube_HTU[2] = words_climb[pointer+2];
				g_word_cube_HTU[3] = words_climb[pointer+3];
				g_word_cube_HTU[4] = words_climb[pointer+4];
				g_word_cube_HTU[5] = words_climb[pointer+5];
				g_word_cube_HTU[6] = words_climb[pointer+6];
			}
		}
	}
//	console.log('found_word_HTU('+in_HTU+','+g_word_cube_HTU+')');
	return g_word_cube_HTU;

}
*/

