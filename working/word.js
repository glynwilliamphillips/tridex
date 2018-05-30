// JavaScript Document
// word object
/*
A Word object has 7 letter links.
It has a space to store the word letters and the clue to the word.
It also has links to audio files for the clue and the word.
It has some data to recognise the word if the doer says it.
data_word is a 7 letter string of letters
creation can be in the form [123]
*/
/*
var	HTU_numbers		//7 character array
					 A set of numbers which indicates where the letters of the minicube may be found
					Equal to Across * 64 + Behind (or Back) * 7 + Climb
					As these numbers start at 0, a negative value means undefined
					HTU_numbers[0] is the location where the ANSWER starts and so is key to the clue stored in the crossword
var ANS				A string of 7 letters to sit the crossword
var CLUE			A string of text
var HTU_ANS_CLUE	A string [ANSWERR]Crossword blue
var STOCK_ANS_CLUE	A string [stock number][ANSWERR]Crossword clue.
Functions:
	In the following word_chosen is a word object
	gword	create an empty word object
	fetch_CLUE(word_chosen) {	fetch_CLUE will return the clue if it is not blank.
								If it is blank it will find it then return it
		find_clue(word_chosen);
			tidy_up_ANSWER(untidy) {
	get_HTU_ANS_CLUE(word_chosen) {
	get_CLUE(word_chosen) {


*/
/*
function gword() {
	console.log('gword()');
	this.WORD = '[123]test';
	this.CLUE = '';
	this.HTU_ANS_CLUE = '';	//HTU is not known here
	this.STOCK_ANS_CLUE = '';
	this.ANS = g_WORD_stripped;
	this.HTU_sequence = '';
	this.WORD_stripped = 'tbd';
}
*/
/* Given a word object return the clue string
 */
var untidy = [,,,,,,,];
var tidy_out = [,,,,,,,];
/*
function fetch_clue(word_chosen) {
	console.log('word:fetch_clue('+word_chosen.WORD+')');
	if(g_clue_chosen =='') {
		g_clue_chosen = find_clue(g_word_chosen);
	}
	console.log('fetch_clue()');
	return g_clue_chosen;
}
*/
function find_clue_2(g_word_chosen) {
	console.log('find_clue for: '+g_word_chosen);
	word_in = g_word_chosen;
	tidy_out = [];
	untidy = [];
	tidy_ANSWER = [];
	indstart = word_in.indexOf('[')+1;
	indend = word_in.indexOf(']');
	stock_number = word_in.substring(indstart,indend);

	/* Now use the number to look up the clue in  table ANSWER_CLUE */
	ind = 0;
	match = false;
	untidy = ANSWER_CLUE_2[stock_number];
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
/* tidy and answer from form DEAD-SEA, or DEAD SEA to DEADSEA */
function tidy_up_ANSWER(untidy) {
	//console.log('word:tidy_up_ANSWER('+untidy+')');
	u = 0;
	tidy_out = '';
	for (t = 0; t < untidy.length; t++) {
		if ((untidy[t] == '_') || (untidy[t] == '-')  || (untidy[t] == ' ')) {
//			console.log('Hyphen ignored');
		} else {
			tidy_out += untidy[t];
			//console.log('adding: '+untidy[t]);
		}
	}
	if(tidy_out.length > 7) {
		console.log('tidy_out cut from '+tidy_out);
		tidy_out = tidy_out.slice(0,7);
		//console.log('stripped to '+tidy_out);
	}
	//console.log('untidy='+untidy+' tidy_out= '+tidy_out);
	return tidy_out;
}

function list_word(word_chosen) {
	console.log('ANSswer='+word_chosen.ANS);
	console.log('HTU_ANS_CLUE='+word_chosen.HTU_ANS_CLUE);
	console.log('CLUE='+word_chosen.CLUE);
	console.log('STOCK_ANS_CLUE='+word_chosen.STOCK_ANS_CLUE);
	console.log('HTU_sequence='+word_chosen.HTU_sequence);
}



	