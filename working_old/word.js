// JavaScript Document
// word object
/*
A Word object has 7 letter links.
It has a space to store the word letters and the clue to the word.
It also has links to audio files for the clue and the word.
It has some data to recognise the word if the doer says it.
data_word is a 7 letter string of letters
*/
function gword(input_word) {
	this.data_word = input_word;
	this.data_clue = 'zz';
	this.minicubes = new Array(7);
}
a_slice_word = Array(3,3);
for (a=1; a < 3; a++){
	a_slice_word[a, 3] = new gword('abc'+a);
	//alert('word='+ a_slice_word[a, 3].data_word);
}
	