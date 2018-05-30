// JavaScript Document
//use_answers
/* take the results stored 

by save_answer() and populate the minicubes */
function use_answers() {
	console.log('ua:use_answers');
	/* start with a=0 */
	
	user_number('5');
	redraw_axis();
	list_answer('results_0_1_1');	//PARASOL
	user_number('6');
	redraw_axis();
	list_answer('results_0_1_3');	//SATCHEL
	user_number('7');
	redraw_axis();
	
	list_answer('results_0_1_5');	//;MANAGES
	redraw_axis();
	
	list_answer('results_0_3_1');	//GENERAL
	redraw_axis();
	list_answer('results_0_3_3');	//WORSTED
	redraw_axis();
	list_answer('results_0_3_5');	//"DECIMAL
	redraw_axis();
	
	list_answer('results_0_5_1');	//FLYSWAT
	redraw_axis();
	list_answer('results_0_5_3');	//SOLOIST
	redraw_axis();
	list_answer('results_0_5_5');	//
	"[OSTRICH]Confused torch is a large bird",
	redraw_axis();
	
	
	list_answer('results_1_6_1');		//ILLEGAL
	redraw_axis();
	list_answer('results_3_6_1');		//TREASON
	redraw_axis();
	list_answer('results_5_6_1');		//JANITOR
	redraw_axis();

	list_answer('results_1_6_3');		//SONATAS
	redraw_axis();
	list_answer('results_3_6_3');		//BORSHCH
	redraw_axis();
	list_answer('results_5_6_3');		//OSSELET
	redraw_axis();

	list_answer('results_1_6_5');		//ASSEGAI
	redraw_axis();
	list_answer('results_3_6_5');		//ORDINAL
	redraw_axis();
	list_answer('results_5_6_5');		//SCRAPES
	redraw_axis();

	list_answer('results_3_5_0');		//ARMOURY
	redraw_axis();
	list_answer('results_3_3_0');		//PARSNIP
	redraw_axis();
	list_answer('results_3_1_0');		//CONCEAL
	redraw_axis();
	
	list_answer('results_5_5_0');		//CASSOCK
	redraw_axis();
	list_answer('results_5_3_0');		//FIREMAN
	redraw_axis();
	list_answer('results_5_1_0');		//FOREVER
	redraw_axis();

	list_answer('results_1_5_0');		//ALTOIST
	redraw_axis();
	list_answer('results_1_3_0');		//BERATED
	redraw_axis();
	list_answer('results_1_1_0');		//CABANAS
	redraw_axis();


/* now redisplay */
	redraw_axis();


}
function list_answer(answername) {
	console.log('list_answer('+answername+')');
	line=document.getElementById(answername);
	
	if(line.textContent.length > 5) {
//		console.log('answername='+line.textContent);
		parse_line(line.textContent);
		/* Has created splitText[0]	0_5_5
								[1]	"A month before or after it, he takes care"
								[2]	"JANITOR"
						coords[0]	cube_a	0
						coords[1]	cube_b	5
						coords[2]	cube_c	5
						index as integer 055
							*/
		//console.log('split_text='+splitText);
		//console.log('coords='+coords);
		//console.log('index='+index);
var		raw_word = splitText[2];
	/* Strip out unwanted spaces, quotes etc. */
		word = new Array();
		for (k = 0; k < raw_word.length; k++) {
			if ((raw_word[k] == '-') || (raw_word[k] == ' ') || raw_word[k] == '"') {
				k++;
			}
			word = word + raw_word[k];
		}
		console.log('++adding raw-word='+raw_word);
		console.log('split_text ='+splitText);
		//console.log('**after word='+word);
		//index = 0 + 49 * coords[2] + 7 * coords[1]  + coords[0];
		//index = make_HTU_number(coords[0],coords[1],coords[2]);
		//console.log('coords='+coords+'index='+index);
						// = 0+ 5*7 + 5	= 40 
		//console.log('word = '+word);
		word_index = index;
		mini_cube = mini_cubes[word_index];
		if(mini_cube.direction_A == 'A') {
			ptr = 0;
			set_letter(mini_cubes[word_index], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+1], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+2], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+3], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+4], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+5], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+6], word[ptr]);
		}
		if(mini_cube.direction_B == 'B') {
			ptr = 0;
			set_letter(mini_cubes[word_index], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index-7], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index-14], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index-21], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index-28], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index-35], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index-42], word[ptr]);		}
		if(mini_cube.direction_C == 'C') {
			ptr = 0;
			set_letter(mini_cubes[word_index], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+49], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+98], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+147], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+196], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+245], word[ptr]);
			ptr++;
			set_letter(mini_cubes[word_index+294], word[ptr]);
		}
		
								
		
	} else {
		//console.log(line.textContent.length);
	}
	
}
/* Cope with a line such as:-
0_5_5;"The French I hurt, but only in fun";"JESTING"
*/
function parse_line(lineText) {

	//console.log('sf:parse_line '+lineText);

	splitText = lineText.split(';');
	//console.log('item1='+splitText[0]);
	//console.log('item2='+splitText[1]);
	//console.log('item3='+splitText[2]);
	coords = splitText[0].split('_');
	//console.log('cube_a='+coords[0]);
	//console.log('cube_b='+coords[1]);
	//console.log('cube_c='+coords[2]);
	index = make_HTU_number(coords[0],coords[1],coords[2]);
	cube = mini_cubes[index];	
}

