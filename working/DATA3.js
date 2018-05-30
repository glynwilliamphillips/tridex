//DATA.js
/*
*/
// console.log('off');

var start_image_string = './cube_raw2/cube_raw2_black.png';
var I777 = 7*7*7;
var word_chosen = 'word chosen';
var selected_word = 'selected word';
top_displacement = 250;   //pixels
left_displacement = 400;
var slice_number = 1;
c_height = 25;
b_height = 10;
a_height = 10;
b_left = 20;
a_left = +20;
accum_space = '';
var g_orientation = 'straight_up';	//or 'sideways'
var g_word_chosen = ''; //Set up by routine answer_selected
var g_clue_chosen = '';
var g_HTU_number = 0;
var g_HTU_string = '0_0_0';
//var	g_word_object = new gword();
var g_word_stripped = 'word_stripped';
var g_list_paths = 0;
var g_word_cube_HTU = Array(7);	//HTU number of cubes for this word
var g_draw_axis = new Array(2);	//0 is axis 'A','B',or 'C'
										//1 is axis 0..9
var g_word_frame = new Array(7); //This will be filled in by find_word_frame										
var previous_strip_ANS_1 = new Array(7);
var previous_strip_ANS_2 = new Array(7);
var g_draw_dir = '_';		//will become A,B or C


console.log('clear accum_space');
word_loc_pointer = 0; //pointer to words lists
word_HTUs = new Array(7);


/* presented_words is a list of the words displayed in the POSSIBLE icon */
presented_words_1 = new Array(100);
presented_words_2 = new Array(100);
for (i = 0; i <presented_words_1.length; i++) {
	presented_words_1[i] = '_';
	presented_words_2[i] = '_';
}


mini_cubes = Array(I777);
//working_cube = new Mini_cube();

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

//word_locations (formerly .js)

/* Common details */
A = 1;
B = 7;
C = 49;


/* Part 1 words_across */
//horizontal on C=1
words_across= new Array();
start = 1*B + 1*C;	//56
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//									56				57			58			59				60			61			62
start = 3*B + 1*C;	//70
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//									71				72			73			74				75			76			77
start = 5*B + 1*C;	//84
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//										84			85			86			87				88			89			90

// Horizontal on C=3									
start = 1*B + 3*C;	//154
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//										154			155			156			157			158				159			160
start = 3*B + 3*C;	//168
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//										168			169			170			171			172				173			174
start = 5*B + 3*C;	//182
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//										182			183			184			185			186				187			188

// Horizontal on C=5									
start = 1*B + 5*C;	//252
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//										252			253			254			255			256				257			258
start = 3*B + 5*C;	//266
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//										266			267			268			269			270				271			272
start = 5*B + 5*C;	//280
words_across =  words_across.concat(start + 0*A ,start+1*A , start + 2*A , start + 3*A , start + 4*A, start + 5*A , start + 6*A);									
//										280			281			282			283			284				285				286

			





/**************************/
//Back (/Behind)
words_back = new Array();
A = 1;
B = 7;
C = 49;
/*Start on Across = 1
Top word has C = 5 */
	
	
	
A_value=1;	
C_value = 5;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);

A_value=1;	
C_value = 3;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);
								
A_value=1;	
C_value = 1;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);

/* move to next slice A = 3
Top word has C = 5 */

A_value=3;	
C_value = 5;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);

A_value=3;	
C_value = 3;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);
								
A_value=3;	
C_value = 1;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);

/* move to next slice A = 5
Top word has C = 5 */

A_value=5;	
C_value = 5;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);

A_value=5;	
C_value = 3;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);
								
A_value=5;	
C_value = 1;
words_back =  words_back.concat(A*A_value+C*C_value+B*6);
words_back =  words_back.concat(A*A_value+C*C_value+B*5);
words_back =  words_back.concat(A*A_value+C*C_value+B*4);
words_back =  words_back.concat(A*A_value+C*C_value+B*3);
words_back =  words_back.concat(A*A_value+C*C_value+B*2);
words_back =  words_back.concat(A*A_value+C*C_value+B*1);
words_back =  words_back.concat(A*A_value+C*C_value+B*0);



/************************
CLIMB
**************************/
words_climb = new Array()
A = 1;
B = 7;
C = 49;
/*Start on Across = 1
Top word has C = 5 */

A_value = 1;
B_value = 1;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);


A_value = 3;
B_value = 1;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);

A_value = 5;
B_value = 1;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);

/*NEW */
A_value = 1;
B_value = 3;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);


A_value = 3;
B_value = 3;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);

A_value = 5;
B_value = 3;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);
/*bbb*/
A_value = 1;
B_value = 5;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);


A_value = 3;
B_value = 5;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);

A_value = 5;
B_value = 5;

words_climb = words_climb.concat(A*A_value + B * B_value + 0 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 1 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 2 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 3 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 4 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 5 * C);
words_climb = words_climb.concat(A*A_value + B * B_value + 6 * C);
