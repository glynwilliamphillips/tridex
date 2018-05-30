// JavaScript Document
//Routines NOT USED
/* return [123]test */	
function get_WORD(word_chosen) {
	return word_chosen.WORD;
}
function get_ANS(word_chosen) {
	return word_chosen.ANS;
}
/* Go through all word minicubes detecting if the word needs to be updated 
look at words_across here*/
/* Seems not to be called! */
function update_words(key_HTU) {
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
	console.log('word:get_HTU_ANS_CLUE('+word_chosen+')');
	if(HTU_ANS_CLUE == '') {
		HTU_ANS_CLUE = get_HTU(word_chosen) + word_chosen + get_CLUE(word_chosen);
	}
	return word_chosen.this.HTU_ANS_CLUE;
}
function get_HTU(word_chosen) {
	console.log('word:get_HTU('+word_chosen+')');
	if(word_chosen == '') {
		alert('error get_HTU('+word_chosen+')');
	}
	return word_chosen.HTU;
}
