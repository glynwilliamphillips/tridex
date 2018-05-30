// JavaScript Document word handling
/* functions here:- see scratchpad.js

*/

function letter_pressed(lett) {
	debug_alert('F7: letter_pressed('+lett+')');
	letter_selected = lett;

	put_letter_in_cube(lett, HTU_number, HTU_string);
	seek_word(lett, HTU_string);
}

/* cube_click_black does nothing as the cube is black	
*/
function cube_click_black(x_value, y_value, z_value){
	alert('F16:cube_click_black('+x_value+','+y_value+','+z_value+'). Nothing to do');
}
/* function cube_click acts on a click at cube x,y,z.
It takes the X,y,x and make up a single xyz called the HundredsTensUnits
It colours the cube selected cube yellow - whether it had a letter on or not

*/
function cube_click(x_value, y_value, z_value){
	show_instruction_box('cube_click('+x_value+','+y_value+','+z_value+'). Now choose a letter');
	cube_x = x_value;
	cube_y = y_value;
	cube_z = z_value;
	make_HTU(x_value,y_value, z_value);
	position_selected = HTU_string;
	/*returns HTU_string but also sets up HTU_number */
	
	//update_frame3_word(HTU_string);	
	//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
	//colour the cube yellow while working on it
	new_src = 'cube_raw2_yellow.png'
	cube_colour[HTU_number] = 'yellow';
	
	debug_alert('F37:cube yellow');
	id = 'cube_'+HTU_string;
	word_cube=document.getElementById(id);
	old_src = word_cube.src;
	original_cube_name = 'cube_raw2_white.png';
	if(old_src.indexOf(original_cube_name) > 0) {
		//debug_alert('F43: untouched mini-cube original_cube_name='+original_cube_name );
		word_cube.src = new_src;
		//alert('F45:new temp.src='+word_cube.src);
	} else {
		//mini-cube was not the original - it already had a letter
		//Find the filename for that letter on a yellow mini-cube
		alert('F49:word handling2:33');
		for (k=0; k <= alphabet_list.length; k++) {
			letter = alphabet_list[k];
			old_cube_name = "cube_raw2_"+letter+".png";
			if (old_src.indexOf(old_cube_name) >= 0) {
				new_src = "cube_raw2_yellow_"+letter+".png";
			}	
		}
	}
	word_cube.src = new_src;	
	word_cube.onclick = ""; 
	
}
/* Seek a word with a letter in the position corresponding with square number (as a string) */

/* seek_word(lett, HTU_string) looks for the word with a letter at the given position 
Puts all the matched words into drop down list POSSIBLE */

function seek_word(lett, HTU_string) {
	//alert('w69:seek_word('+lett+','+HTU_string+')');
	clear_possible();
	//alert('before viewed_slice ='+viewed_slice);
	get_word_frame(lett, HTU_string, viewed_slice);
	word_letters[0] = lett;
	for (i = 0; i <7; i++) {
		temp = document.getElementById('cube_'+word_frame[i]);
		//alert('temp='+temp);
		/* file:///C: ...cube_raw2_A.png or
		raw2_white.png */
		//alert('temp.src='+temp.src);
		minicube_name = temp.src;
		word_letters[i] = filename_to_letter(minicube_name);
		//alert('returned'+word_letters[i]);
		//word_letter[i] = 
	}
//By this point we have the pattern of the word in word_letters[0-6] and want to find all the words 
//Go through ANSWERS to find words that could match
	ANSWER_length = ANSWER.length;
// debugging nobble 
	ANSWER_length = 200;
	//alert('W92: word_handling3:93:length = '+ANSWER_length);
	//alert('word_letters='+word_letters);
	for (int_sw = 0; int_sw <= ANSWER_length; int_sw++) {
		this_answer = ANSWER[int_sw];
		matched = true;
		/*
		gash = ' ';
		if (gash == ' ') {
			alert('1 true');
		} else {
			alert('FALSE');
		}
		if(word_letters[1] == ' ') {
			alert ('2nd true');
		} else {
			alert('word_letters[1]='+word_letters[1]);
		}
		*/

		for (int_sw2 = 0; int_sw2 <= 6; int_sw2++) {
			//alert('compare '+word_letters[int_sw2]+' with '+this_answer[int_sw2]);
			/*if(word_letters[int_sw2] == '') {
				alert((word_letters[int_sw2] == ''));
			}*/
			if((word_letters[int_sw2] == this_answer[int_sw2]) || (word_letters[int_sw2] == '_') || (word_letters[int_sw2] == ' ')) {
				//alert('true');
			} else {
				//alert('false');
				matched = false;
			}
		}
		if(matched) {

			word_to_select(this_answer);
		}


	}
}
/* filename_to_letter either returns a letter such as A or a space*/
function filename_to_letter(filename){
	if (minicube_name.match('cube_raw2_white.png')) {
		return ' ';
	}

	for (k=0; k<alphabet_list.length; k++) {
		tester = 'cube_raw2_'+alphabet_list[k]+'.png';
		if (filename.indexOf(tester) >= 0) {
			return alphabet_list[k];
		} else {
			alert('problem with filename: '+filename);
		}
	}
}
/* get_word_frame(letter, HTU_position, viewed_slice, letter_position), looks in the word_position_HTU to find a 
set of letters including this one that could make a word. The viewed_slice shows which variable is fixed on the current display.
The letter_position may be something but maybe not */
function get_word_frame(letter_selected, HTU_position, viewed_slice) {
	//alert('W100: get_word_frame('+letter_selected+','+HTU_position+','+viewed_slice+')');
	for (int_ptr = 0; int_ptr < word_position_HTU.length; int_ptr++) {
		individual_word_locations = word_position_HTU[int_ptr];
		if(individual_word_locations[7] == viewed_slice) {
			//alert('interesting');
			for (ii = 0; ii < 7; ii++) {
				//alert('try matching'+HTU_position+' with '+individual_word_locations[ii]);
				if (individual_word_locations[ii] == HTU_position) {
					//alert('W136:match'+HTU_position+'='+individual_word_locations[ii]);
					word_frame = individual_word_locations;
				}
			}
		}else {
			//alert('boring '+individual_word_locations[7]+'<>'+ viewed_slice);
		}
		//alert('indiv='+individual_word_locations);
	}
	//alert('word_frame='+word_frame);
	return word_frame;
	//saved_word_position_HTU[0] = sub_word_position_HTU[0];				

}

function put_letter_into_frame3(number,letter) {
	if(number == 0) {
		frame3_word_0.value = letter;
		temp = document.getElementById('frame3_word_0');
		temp.value = lett;
		alert('frame3_word_0='+frame3_word_0.value);

	}
		
}

/* given the address in form xyz find the letter if it exists on minicube of that number */

function get_letter(add_letter) {
	return cube_letter[add_letter];
}

function clear_possible() {
	debug_alert('F163:clear_possible');
	accumulated_options = '';
	temp = document.getElementById('POSSIBLE');
	temp.innerHTML = "<option value='blank'>Possible words</option>";
	for(i = 0; i <7; i++) {
		word_letters[i] = '';
	}
}
function word_to_select(word) {
	temp = document.getElementById('POSSIBLE');
	temp.innerHTML = temp.innerHTML + '<option value="' + word + '"' + " onClick('"+word+"')"+">"+word+"</option>";	
}
/* call with a list of locations and a list of known letters */
var known_letters = new Array(7);
var known_locations = new Array(7);
function look_for_rest_of_word() {
	if(known_letters[0] = null) {
		get_letter(posn,known_locations[0]);
	}
}

/* add_to_grid: Get the selected word from mySelect and put its letters into the appropriate cells 
function add_to_grid() {
	alert('F187:add to grid');
	answer = ' ';
	possible = document.getElementById('POSSIBLE');
	temp2 = possible.selected;
	
	for (i = 0; i < possible.options.length; i++) {
		if(possible.options[i].selected) {
			answer = possible.options[i].text;
		}
	}
	//we now have a word in answer to place into mini cubes numbered as in saved_word_position
	alert('F198:put word '+answer+' in mini-cubes');
	alert('saved_word_position='+saved_word_position);
	alert('F200:sub_word_position='+sub_word_position);
	j = 0;
	for (i = 0; i < answer.length; i++) {
		if((answer[i] != ' ') && (answer[i] != '-')) {
			alert('F204:word_handling2:313 problem with HTU in next line');
			put_letter_in_cube(answer[i],saved_word_position[j]);
			j++;
		}
	}
	
}
*/
/* put the given letter into the cube identified by the HTU_number & HTU_string */
function put_letter_in_cube(lett, HTU_number, HTU_string) {
	//debug_alert('F213:put letter in cube('+lett+','+HTU_number+','+HTU_string);
	//Save away the letter stored in this mini-cube
	cube_letter[HTU_number] = lett;
	/* put the filename of the minicube with letter on it eg 'cube_raw2_A.png into the minicube slot */
	for (k = 0; k < alphabet_list.length; k++) {
		if (lett == alphabet_list[k]) {
			minicube1 = document.getElementById('cube_'+HTU_string);
			//alert('src was '+minicube1.src+' set to '+'cube_raw2_'+lett+'.png');
			minicube1.src = 'cube_raw2_'+lett+'.png';
		} else {
			//alert(lett +'<>'+alphabet_list[k]);
		}
	}

}