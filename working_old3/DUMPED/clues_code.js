// JavaScript Document clues_code
function clues_clear() {
	//alert('clear clues');
	clues_temp = document.getElementById('clues_box');
	clues_temp.innerHTML = 'Clues';
	clues_text = '';
}
clues_text = '';
/* Given the number of the mini-cube return a string of the letter in that cell & tab */
function get_entry(HTU_number) {
	//debug_alert('get_entry HTU='+HTU_number);
	//debug_alert('cube_letter='+cube_letter[HTU_number]);
	GEvalue = cube_letter[HTU_number];
	if(GEvalue == '_') {
		word_match = false;
	} else {
		whole_word += GEvalue;
	}
	
	return ('['+HTU_number+']'+cube_letter[HTU_number]);
}

/* Given a word, return the first clue that matches it */
function get_clue(word_in) {
	//return 'xx';
	debug_alert('clues_code:67:length='+ANSWER.length+'word_in '+word_in);
	alert('ans 1 ='+ANSWER[1]);
//	for(i = 0; i <ANSWER.length; i++) {
	for(iclue = 0; iclue <100; iclue++) {
		if (word_in == ANSWER[iclue]) {
			//alert('imatch i='+iclue+'word_in='+word_in+'ANSWER[iclue]='+ANSWER[iclue]);
			debug_alert('clues_code:71:CLUES='+CLUE[iclue]);
			return CLUE[iclue];
		} else {
			//alert('word_in'+word_in+'<>ANSWER['+iclue+']'+ANSWER[iclue]);
		}
	}
	alert('no clue found for '+word_in);
}