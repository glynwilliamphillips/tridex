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





/*
Go through all the word patterns looking for words containing any words with the HTU of interest
Inputs:HTU of current minicube; 
	word pointer. Normally 0 but higher if this is a second call to the routine
Output:word_HTU array pointing to this word positions
	word_loc_pointer
*/
/* Given the starting HTU, make an array of all the HTUs for this word
g_word_cube_HTU is the result */

function find_word_HTU (in_HTU , direction) {

//	console.log('find_word_HTU('+in_HTU+','+g_word_cube_HTU+')');
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



