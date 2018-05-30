// JavaScript Document word handling
/* functions here:- see scratchpad.js

*/

function letter_pressed(lett) {
//	console.log('7: letter_pressed('+lett+')');

	put_letter_in_cube(lett, HTU_number, HTU_string);
	//return;
	//alert('cube_x = '+cube_x+'cube_y = '+cube_y+'z='+cube_z);
	seek_word(lett, HTU_string);
}

/* cube_click_black does nothing as the cube is black	
*/
function cube_click_black(x_value, y_value, z_value){
	console.log('cube_click_black('+x_value+','+y_value+','+z_value+'). Nothing to do');
}
/* function cube_click acts on a click at cube x,y,z.
It takes the X,y,x and make up a single xyz called the HundredsTensUnits
It colours the cube selected cube yellow - whether it had a letter on or not

*/
function cube_click(x_value, y_value, z_value){
//	console.log('cube_click('+x_value+','+y_value+','+z_value+'). Now choose a letter');
	cube_x = x_value;
	cube_y = y_value;
	cube_z = z_value;
	make_HTU(x_value,y_value, z_value);
	/*returns HTU_string but also sets up HTU_number */
	
	//update_frame3_word(HTU_string);	
	//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
	//colour the cube yellow while working on it
	new_src = 'cube_raw2_yellow.png'
	cube_colour[HTU_number] = 'yellow';
	
//	console.log('cube yellow');
	id = 'cube_'+HTU_string;
	//alert('id='+id);
	word_cube=document.getElementById(id);
	old_src = word_cube.src;
	original_cube_name = 'cube_raw2_white.png';
	if(old_src.indexOf(original_cube_name) > 0) {
		//console.log('45: untouched mini-cube original_cube_name='+original_cube_name );
		word_cube.src = new_src;
		//alert('new temp.src='+word_cube.src);
	} else {
		//mini-cube was not the original - it already had a letter
		//Find the filename for that letter on a yellow mini-cube
		//alert('word handling2:33');
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
	//alert('entry to seek_word');
//	console.log('72:seek_word('+lett+','+HTU_string+')');
	clear_possible();
	//return;
	find_word_frame(lett, HTU_string);
	word_letters[0] = lett;
//By this point we have the pattern of the word in word_letters[0-6] and want to find all the words 
//Go through ANSWERS to find words that could match
	ANSWER_length = ANSWER.length;
// debugging nobble 
	ANSWER_length = 200;
//	console.log('171: word_handling2:78:length = '+ANSWER_length);
	for (int_sw = 0; int_sw <= ANSWER_length; int_sw++) {
		this_answer = ANSWER[int_sw];
		matched = true;

		for (int_sw2 = 0; int_sw2 <= 6; int_sw2++) {
			if((word_letters[int_sw2] == this_answer[int_sw2]) || (word_letters[int_sw2] == '_')) {
			} else {
				matched = false;
			}
		}
		if(matched) {

			word_to_select(this_answer);
		}

	}
}

/* find_word_frame may find the given letter at the start of a word location
If it does, it takes the addresses of the other letters of the word and
 looks at the minicubes to see if the letter is filled in.
 Output is in array saved_word_list[0-6] & word_letters
*/
function find_word_frame(lett, HTU_string){
//	console.log("196: find_word_frame("+lett+','+HTU_string+')');
	for (int_word_list_ptr = 0; int_word_list_ptr < word_list.length; int_word_list_ptr++) {
		if (int_word_list_ptr % 7 == 0) { 
			//int_word_list_ptr is pointing to the first letter of a word
			//extract the 7 locations from word_list into sub_word_list
			for (int_z=0; int_z <=6; int_z++) {
				sub_word_list[int_z] = word_list[int_word_list_ptr+int_z];


			}
			if(HTU_string == sub_word_list[0]) {

				
				word_letters[0] = lett;
				temp = document.getElementById('frame3_word_0');
				temp.value = lett;
				saved_word_list[0] = sub_word_list[0];				
				word_letters[1] = get_letter(sub_word_list[0]);
				temp = document.getElementById('frame3_word_1');
				temp.value = get_letter(sub_word_list[1]);
				saved_word_list[1] = sub_word_list[1];
				word_letters[1] = get_letter(sub_word_list[1]);	
						
				saved_word_list[2] = sub_word_list[2];
				temp = document.getElementById('frame3_word_2');
				temp.value = get_letter(sub_word_list[2]);
				word_letters[2] = get_letter(sub_word_list[2]);
				
				saved_word_list[3] = sub_word_list[3];
				temp = document.getElementById('frame3_word_3');
				temp.value = get_letter(sub_word_list[3]);
				word_letters[3] = get_letter(sub_word_list[3]);
				
				saved_word_list[4] = sub_word_list[4];
				temp = document.getElementById('frame3_word_4');
				temp.value = get_letter(sub_word_list[4]);
				word_letters[4] = get_letter(sub_word_list[4]);
				
				saved_word_list[5] = sub_word_list[5];
				temp = document.getElementById('frame3_word_5');
				temp.value = get_letter(sub_word_list[5]);
				word_letters[5] = get_letter(sub_word_list[5]);
				
				saved_word_list[6] = sub_word_list[6];
				temp = document.getElementById('frame3_word_6');
				temp.value = get_letter(sub_word_list[6]);
				word_letters[6] = get_letter(sub_word_list[6]);				
			}
		}
	}						
}

/* given the address in form xyz find the letter if it exists on minicube of that number */

function get_letter(add_letter) {
//	console.log('get_letter()');
	return cube_letter[add_letter];
}

function clear_possible() {
//	console.log('clear_possible');
	accumulated_options = '';
	temp = document.getElementById('POSSIBLE');
	//alert('temp='+temp);
	//alert('value='+temp.value);
	//alert('innerHTML='+temp.innerHTML);
	temp.innerHTML = "<option value='blank'>Possible words</option>";
	for(i = 0; i <7; i++) {
		word_letters[i] = '';
	}
	//alert('cleared_possible');
}
function word_to_select(word) {
//	console.log('word_to_select()');
	temp = document.getElementById('POSSIBLE');
	temp.innerHTML = temp.innerHTML + '<option value="' + word + '"' + " onClick('"+word+"')"+">"+word+"</option>";	
}
/* call with a list of locations and a list of known letters */
var known_letters = new Array(7);
var known_locations = new Array(7);
function look_for_rest_of_word() {
	console.log('look_for_rest_of_word()');
	if(known_letters[0] = null) {
		get_letter(posn,known_locations[0]);
	}
}

/* add_to_grid: Get the selected word from mySelect and put its letters into the appropriate cells */

function add_to_grid() {
	console.log('add_to_grid()');
	answer = ' ';
	possible = document.getElementById('POSSIBLE');
	temp2 = possible.selected;
	
	for (i = 0; i < possible.options.length; i++) {
		if(possible.options[i].selected) {
			answer = possible.options[i].text;
		}
	}
	//we now have a word in answer to place into mini cubes numbered as in saved_word_list
	alert('put word '+answer+' in mini-cubes');
	alert('saved_word_list='+saved_word_list);
	alert('sub_word_list='+sub_word_list);
	j = 0;
	for (i = 0; i < answer.length; i++) {
		if((answer[i] != ' ') && (answer[i] != '-')) {
			alert('word_handling2:313 problem with HTU in next line');
			put_letter_in_cube(answer[i],saved_word_list[j]);
			j++;
		}
	}
	
}
/* put the given letter into the cube identified by the HTU_number & HTU_string */
function put_letter_in_cube(lett, HTU_number, HTU_string) {
//	console.log('put letter in cube('+lett+','+HTU_number+','+HTU_string);
	//Save away the letter stored in this mini-cube
	cube_letter[HTU_number] = lett;
	/* put the filename of the minicube with letter on it eg 'cube_raw2_A.png into the minicube slot */
	//alert('alphabet_list='+alphabet_list);
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