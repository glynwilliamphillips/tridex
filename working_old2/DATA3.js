//DATA.js
/*
*/
// console.log('off');

H_colour_string = './cube_raw2/cube_raw2_black.png';
var I777 = 7*7*7+1;
var word_chosen = 'word chosen';
var word_stripped = 'word_stripped';
var selected_word = 'selected word';
top_displacement = 250;   //pixels
left_displacement = 430;
d_height = 25;
b_height = 10;
a_height = 10;
b_left = +20;
a_left = +20;
accumulated_cube_space = '';


var sub_ANSWER = new Array(7);

/* presented_words is a list of the words displayed in the POSSIBLE icon */
presented_words = new Array(100);
presented_numbers = new Array(100);
for (i = 0; i <presented_words; i++) {
	presented_words = '_';
}




HTU_number = 0;
HTU_string = '000';
mini_cubes = Array(I777);
//working_cube = new mini_cube();

alphabet_list = ['A','B','C','D',
				'E','F','G','H',
				'I','J','K','L',
				'M','N','O','P',
				'Q','R','S','T',
				'U','V','W','X',
				'Y','Z'];
/* 	
'■■■' means it is a black minicube.
The first letter tells the direction of the answer as seen from an a slice
The second letter tells the direction of the answer as seen from an b slice
The third letter tells the direction of the answer as seen from an d slice
'a', 'b' & 'd' Indicate the direction of the answer in this minicube
*/			
