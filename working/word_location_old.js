// arrays.js


//54 words possible on a 7 x 7 x 7 cube
words_back = new Array();
words_down = new Array();
words_climb = new Array()
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
// Back/Behind


/*************************/


//Across, Back, Climb
//word_location = word_location.concat(0*A+1*B+5)

//horizontal on B=1

word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);

//vertical on B=1
word_climb = word_climb.concat(false);
word_location =  words_down.concat(1*A+1*B+6, 1*A+1*B+5 , 1*A+1*B+4 , 1*A+1*B+3 , 1*A+1*B+2 , 1*A+1*B+1 , 1*A+1*B+0);
//									062			61			60			59			58			57			56
word_climb = word_climb.concat(false);
words_down =  words_down.concat(3*A+1*B+6, 3*A+1*B+5 , 3*A+1*B+4 , 3*A+1*B+3 , 3*A+1*B+2 , 3*A+1*B+1 , 3*A+1*B+0);
//									160			159			158			157			156			155			154
word_climb = word_climb.concat(false);
words_down =  words_down.concat(5*A+1*B+6, 5*A+1*B+5 , 5*A+1*B+4 , 5*A+1*B+3 , 5*A+1*B+2 , 5*A+1*B+1 , 5*A+1*B+0);
//									258			257			256			255			254			253			252



//horizontal on B=3

word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);

//vertical on B=3

word_climb = word_climb.concat(false);
words_down =  words_down.concat(1*A+3*B+6, 1*A+3*B+5 , 1*A+3*B+4 , 1*A+3*B+3 , 1*A+3*B+2 , 1*A+3*B+1 , 1*A+3*B+0);
//										76			75			74			73			72			71			70
word_climb = word_climb.concat(false);
words_down =  words_down.concat(3*A+3*B+6, 3*A+3*B+5 , 3*A+3*B+4 , 3*A+3*B+3 , 3*A+3*B+2 , 3*A+3*B+1 , 3*A+3*B+0);
//										174			173			172			171			170			169			168
word_climb = word_climb.concat(false);
words_down =  words_down.concat(5*A+3*B+6, 5*A+3*B+5 , 5*A+3*B+4 , 5*A+3*B+3 , 5*A+3*B+2 , 5*A+3*B+1 , 5*A+3*B+0);
//										272			271			270			269			268			267			266



//horizontal on B=5

word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);

//vertical on B=5

word_climb = word_climb.concat(false);
words_down =  words_down.concat(1*A+5*B+6, 1*A+5*B+5 , 1*A+5*B+4 , 1*A+5*B+3 , 1*A+5*B+2 , 1*A+5*B+1 , 1*A+5*B+0);
//										90			89			88			87			86			85			84
word_climb = word_climb.concat(false);
words_down =  words_down.concat(3*A+5*B+6, 3*A+5*B+5 , 3*A+5*B+4 , 3*A+5*B+3 , 3*A+5*B+2 , 3*A+5*B+1 , 3*A+5*B+0);
//										188			187			186			185			184			183			182
word_climb = word_climb.concat(false);
words_down =  words_down.concat(5*A+5*B+6, 5*A+5*B+5 , 5*A+5*B+4 , 5*A+5*B+3 , 5*A+5*B+2 , 5*A+5*B+1 , 5*A+5*B+0);
//										286			285			284			283			282			281			280


//horizontal on A=1

word_climb = word_climb.concat(false);
words_back = words_back.concat(1*A+6*B+5 , 1*A+5*B+5 , 1*A+4*B+5 , 1*A+3*B+5 , 1*A+2*B+5 , 1*A+1*B+5 , 1*A+0*B+5);
//										96			89			82			75			68			61			54			
word_climb = word_climb.concat(false);
words_back = words_back.concat(1*A+6*B+3 , 1*A+5*B+3 , 1*A+4*B+3 , 1*A+3*B+3 , 1*A+2*B+3 , 1*A+1*B+3 , 1*A+0*B+3);
//										94			87			80			73			66			59			52
word_climb = word_climb.concat(false);
words_back = words_back.concat(1*A+6*B+1 , 1*A+5*B+1 , 1*A+4*B+1 , 1*A+3*B+1 , 1*A+2*B+1 , 1*A+1*B+1 , 1*A+0*B+1);
//										92			85			78			71			64			57			50

//vertical on A=1

word_climb = word_climb.concat(false);
words_down = words_down.concat(1*A+5*B+6 , 1*A+5*B+5 , 1*A+5*B+4 , 1*A+5*B+3 , 1*A+5*B+2 , 1*A+5*B+1 , 1*A+5*B+0);
//										90			89			88			87			86			85			84
word_climb = word_climb.concat(false);
words_down = words_down.concat(1*A+3*B+6 , 1*A+3*B+5 , 1*A+3*B+4 , 1*A+3*B+3 , 1*A+3*B+2 , 1*A+3*B+1 , 1*A+3*B+0);		
//										76			75			74			73			72			71			70
word_climb = word_climb.concat(false);
words_down = words_down.concat(1*A+1*B+6 , 1*A+1*B+5 , 1*A+1*B+4 , 1*A+1*B+3 , 1*A+1*B+2 , 1*A+1*B+1 , 1*A+1*B+0);
//										62			61			60			59			58			57			56


//horizontal on A=3

word_climb = word_climb.concat(false);
words_back = words_back.concat(3*A+6*B+5 , 3*A+5*B+5 , 3*A+4*B+5 , 3*A+3*B+5 , 3*A+2*B+5 , 3*A+1*B+5 , 3*A+0*B+5);
//										194			187			180			173			166			159			152		
word_climb = word_climb.concat(false);
words_back = words_back.concat(3*A+6*B+3 , 3*A+5*B+3 , 3*A+4*B+3 , 3*A+3*B+3 , 3*A+2*B+3 , 3*A+1*B+3 , 3*A+0*B+3);
//										192			185			178			171			164			157			150
word_climb = word_climb.concat(false);
words_back = words_back.concat(3*A+6*B+1 , 3*A+5*B+1 , 3*A+4*B+1 , 3*A+3*B+1 , 3*A+2*B+1 , 3*A+1*B+1 , 3*A+0*B+1);
//										190			183			176			169			162			155			148


//vertical on A=3
word_climb = word_climb.concat(false);
words_down = words_down.concat(3*A+5*B+6 , 3*A+5*B+5 , 3*A+5*B+4 , 3*A+5*B+3 , 3*A+5*B+2 , 3*A+5*B+1 , 3*A+5*B+0);
//										188			187			186			185			184			183			182
word_climb = word_climb.concat(false);
words_down = words_down.concat(3*A+3*B+6 , 3*A+3*B+5 , 3*A+3*B+4 , 3*A+3*B+3 , 3*A+3*B+2 , 3*A+3*B+1 , 3*A+3*B+0);
//										174			173			172			171			170			169			168					
word_climb = word_climb.concat(false);
words_down = words_down.concat(3*A+1*B+6 , 3*A+1*B+5 , 3*A+1*B+4 , 3*A+1*B+3 , 3*A+1*B+2 , 3*A+1*B+1 , 3*A+1*B+0);
//										160			159			158			157			156			155			154

//horizontal on A=5

word_climb = word_climb.concat(false);
words_back = words_back.concat(5*A+6*B+5 , 5*A+5*B+5 , 5*A+4*B+5 , 5*A+3*B+5 , 5*A+2*B+5 , 5*A+1*B+5 , 5*A+0*B+5);
//										292			285			278			271			264			257			250
word_climb = word_climb.concat(false);
words_back = words_back.concat(5*A+6*B+3 , 5*A+5*B+3 , 5*A+4*B+3 , 5*A+3*B+3 , 5*A+2*B+3 , 5*A+1*B+3 , 5*A+0*B+3);
//										290			283			276			269			262			255			248
word_climb = word_climb.concat(false);
words_back = words_back.concat(5*A+6*B+1 , 5*A+5*B+1 , 5*A+4*B+1 , 5*A+3*B+1 , 5*A+2*B+1 , 5*A+1*B+1 , 5*A+0*B+1);
//										288			281			274			267			260			253			246


//vertical on A=5

word_climb = word_climb.concat(false);
words_down = words_down.concat(5*A+5*B+6 , 5*A+5*B+5 , 5*A+5*B+4 , 5*A+5*B+3 , 5*A+5*B+2 , 5*A+5*B+1 , 5*A+5*B+0);
//										286			285			284			283			282			281			280
word_climb = word_climb.concat(false);
words_down = words_down.concat(5*A+3*B+6 , 5*A+3*B+5 , 5*A+3*B+4 , 5*A+3*B+3 , 5*A+3*B+2 , 5*A+3*B+1 , 5*A+3*B+0);
//										272			271			270			269			268			267			266
word_climb = word_climb.concat(false);
words_down = words_down.concat(5*A+1*B+6 , 5*A+1*B+5 , 5*A+1*B+4 , 5*A+1*B+3 , 5*A+1*B+2 , 5*A+1*B+1 , 5*A+1*B+0);
//										258			257			256			255			254			253			252



//Left to right, lower to higher C=5

word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);



//left to right, higher to lower C=5

word_climb = word_climb.concat(false);
words_back = words_back.concat(1*A+6*B+5 , 1*A+5*B+5 , 1*A+4*B+5 , 1*A+3*B+5 , 1*A+2*B+5 , 1*A+1*B+5 , 1*A+0*B+5);
//										96			89			82			75			68			61			54	
word_climb = word_climb.concat(false);
words_back = words_back.concat(3*A+6*B+5 , 3*A+5*B+5 , 3*A+4*B+5 , 3*A+3*B+5 , 3*A+2*B+5 , 3*A+1*B+5 , 3*A+0*B+5);
//										194			187			180			173			166			159			152
word_climb = word_climb.concat(false);
words_back = words_back.concat(5*A+6*B+5 , 5*A+5*B+5 , 5*A+4*B+5 , 5*A+3*B+5 , 5*A+2*B+5 , 5*A+1*B+5 , 5*A+0*B+5);
//										292			285			278			271			264			257			250




//Left to right, lower to higher C=3

word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);
word_climb = word_climb.concat(false);


//left to right, higher to lower C=3

word_climb = word_climb.concat(false);
words_back  =  words_back.concat(1*A+6*B+3 , 1*A+5*B+3 , 1*A+4*B+3 , 1*A+3*B+3 , 1*A+2*B+3 , 1*A+1*B+3 , 1*A+0*B+3);
//											94			87			80			73			66			59			52
word_climb = word_climb.concat(false);
words_back  =  words_back.concat(3*A+6*B+3 , 3*A+5*B+3 , 3*A+4*B+3 , 3*A+3*B+3 , 3*A+2*B+3 , 3*A+1*B+3 , 3*A+0*B+3);
//											192			185			178			171			164			157			150
word_climb = word_climb.concat(false);
words_back  =  words_back.concat(5*A+6*B+3 , 5*A+5*B+3 , 5*A+4*B+3 , 5*A+3*B+3 , 5*A+2*B+3 , 5*A+1*B+3 , 5*A+0*B+3);
//											290			283			276			269			262			255			248


//Left to right, lower to higher C=1

word_climb = word_climb.concat(false);
words_across  =  words_across.concat(0*A+5*B+1 , 1*A+5*B+1 , 2*A+5*B+1 , 3*A+5*B+1 , 4*A+5*B+1 , 5*A+5*B+1 , 6*A+5*B+1);
//											36			85			134			183			232			281			330
word_climb = word_climb.concat(false);
words_across  =  words_across.concat(0*A+3*B+1 , 1*A+3*B+1 , 2*A+3*B+1 , 3*A+3*B+1 , 4*A+3*B+1 , 5*A+3*B+1 , 6*A+3*B+1);
//											22			71			120			169			218			267			316
word_climb = word_climb.concat(false);
words_across  =  words_across.concat(0*A+1*B+1 , 1*A+1*B+1 , 2*A+1*B+1 , 3*A+1*B+1 , 4*A+1*B+1 , 5*A+1*B+1 , 6*A+1*B+1);
//											8			57			106			155			204			253			302



//left to right, higher to lower C=1

word_climb = word_climb.concat(false);
words_back  =  words_back.concat(1*A+6*B+1 , 1*A+5*B+1 , 1*A+4*B+1 , 1*A+3*B+1 , 1*A+2*B+1 , 1*A+1*B+1 , 1*A+0*B+1);
//											92			85			68			61			54			47			40
word_climb = word_climb.concat(false);
words_back  =  words_back.concat(3*A+6*B+1 , 3*A+5*B+1 , 3*A+4*B+1 , 3*A+3*B+1 , 3*A+2*B+1 , 3*A+1*B+1 , 3*A+0*B+1);
//											190			183			176			169			162			155			148
word_climb = word_climb.concat(false);
words_back  =  words_back.concat(5*A+6*B+1 , 5*A+5*B+1 , 5*A+4*B+1 , 5*A+3*B+1 , 5*A+2*B+1 , 5*A+1*B+1 , 5*A+0*B+1);
//											288			281			274			267			260			253			246

/* name_list */
name_list = new Array();
name_list = name_list.concat("Horizontal B=1");
name_list = name_list.concat("Horizontal B=1");
name_list = name_list.concat("Vertical B=1");
name_list = name_list.concat("Horizontal B=3");
name_list = name_list.concat("Vertcal B=3");
name_list = name_list.concat("Horizontal B=5");
name_list = name_list.concat("Vertical B=5");
name_list = name_list.concat("Horizontal A=1");
name_list = name_list.concat("Vertical A=1");
name_list = name_list.concat("Horizontal A=3");
name_list = name_list.concat("Vertical A=3");
name_list = name_list.concat("Horizontal A=5");
name_list = name_list.concat("Vertical A=5");
name_list = name_list.concat("Left to Right lower to higher \nHorizontal C=5");
name_list = name_list.concat('left to right, higher to lower C=5');
name_list = name_list.concat('Left to right, lower to higher C=3');
name_list = name_list.concat('left to right, higher to lower C=3');
name_list = name_list.concat('Left to right, lower to higher C=1');
name_list = name_list.concat('left to right, higher to lower C=1');

/*
for(i = 0; i < words_across.length; i += 7) {
	console.log(words_across[i]+','+words_across[i+1]+','+words_across[i+2]+','+words_across[i+3]+','+words_across[i+4]+','+words_across[i+5]+','+words_across[i+6]);
}
*/
/*
Go through all the word patterns looking for words containing any words with the HTU of interest
Inputs:HTU of current minicube; 
	word pointer. Normally 0 but higher if this is a second call to the routine
Output:word_HTU array pointing to this word positions
	word_loc_pointer
*/
/* Given the starting HTU, make an array of all the HTUs for this word
global_word_cube_HTU is the result */

function find_word_HTU (in_HTU , direction) {

	console.log('find_word_HTU('+in_HTU+','+global_word_cube_HTU+')');
	if (direction == 'A') {
		for (pointer = 0; pointer < words_across.length; pointer = pointer + 7) {
			if (words_across[pointer] == in_HTU) {
				global_word_cube_HTU[0] = words_across[pointer];
				global_word_cube_HTU[1] = words_across[pointer+1];
				global_word_cube_HTU[2] = words_across[pointer+2];
				global_word_cube_HTU[3] = words_across[pointer+3];
				global_word_cube_HTU[4] = words_across[pointer+4];
				global_word_cube_HTU[5] = words_across[pointer+5];
				global_word_cube_HTU[6] = words_across[pointer+6];
			} else {
//				console.log('words_across['+pointer+'] != '+in_HTU);
			}
		}
	}
	if (direction == 'B') {
		console.log('word_location:347 to be done');
		for (pointer = 0; pointer < words_back.length; pointer = pointer + 7) {
			if (words_back[pointer] == in_HTU) {
				console.log('Setting up minicube '+in_HTU);
				global_word_cube_HTU[0] = words_back[pointer];
				global_word_cube_HTU[1] = words_back[pointer-7];
				global_word_cube_HTU[2] = words_back[pointer-2*7];
				global_word_cube_HTU[3] = words_back[pointer-3*7];
				global_word_cube_HTU[4] = words_back[pointer-4*7];
				global_word_cube_HTU[5] = words_back[pointer-5*7];
				global_word_cube_HTU[6] = words_back[pointer-6*7];
			}
		}
	}
	if (direction == 'C') {
//		console.log('words_across:362 to be done');
		for (pointer = 0; pointer < words_climb.length; pointer = pointer + 7) {
			if (words_climb[pointer] == in_HTU) {
				global_word_cube_HTU[0] = words_climb[pointer];
				global_word_cube_HTU[1] = words_climb[pointer+49*1];
				global_word_cube_HTU[2] = words_climb[pointer+49*2];
				global_word_cube_HTU[3] = words_climb[pointer+49*3];
				global_word_cube_HTU[4] = words_climb[pointer+49*4];
				global_word_cube_HTU[5] = words_climb[pointer+49*5];
				global_word_cube_HTU[6] = words_climb[pointer+49*6];
			}
		}
	}
//	console.log('found_word_HTU('+in_HTU+','+global_word_cube_HTU+')');
	return global_word_cube_HTU;

}

/*	
	for (word_loc_pointer = global_word_cube_numbers; word_loc_pointer < word_location.length; word_loc_pointer = word_loc_pointer+7) {
		//console.log('word_loc_pointer='+word_loc_pointer);
		
		word_HTUs[0] = word_location[word_loc_pointer];
		word_HTUs[1] = word_location[word_loc_pointer+1];
		word_HTUs[2] = word_location[word_loc_pointer+2];
		word_HTUs[3] = word_location[word_loc_pointer+3];
		word_HTUs[4] = word_location[word_loc_pointer+4];
		word_HTUs[5] = word_location[word_loc_pointer+5];
		word_HTUs[6] = word_location[word_loc_pointer+6];
		match = false;
		console.log('word_HTUs='+word_HTUs);
		//console.log('word_HTUs.length='+word_HTUs.length);
		for(i = 0; i < word_HTUs.length; i++) {
			//console.log('word_HTUs['+i+']='+word_HTUs[i]);
			if (word_HTUs[i] == in_HTU) {
				console.log('word is interesting');
				match = true;
				return word_HTUs
			}
		}
	}
}
*/


