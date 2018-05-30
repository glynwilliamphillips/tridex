// JavaScript Document


function word_to_select(word) {
//	console.log('***word_to_select('+word+')');
	possible_element = document.getElementById('POSSIBLE');
	opts = possible_element.options;
	for (i = 0; i < opts.length; i++) {
	//	console.log('option['+i+']='+opts[i].value);
	}
	//console.log('possible_element.inner='+possible_element.innerHTML);
	element_addition =
//First layer with ' layer to be passed to subroutine    
//	<option value="AVERAGE" >AVERAGE</option>
//Option constructor(text of the option,  optional value, selected by default or not, selected or not)
	newOption = new Option(word,word,0,0);
	possible_element.add(newOption,0);
	thisOptions = possible_element.options;
	for(i = 0; i < thisOptions.length; i++) {
//		console.log('i='+i+'option='+thisOptions[i].value);
	}
}

function answer_selected() {
//	console.log('***answer_selected ()');
	possible_element = document.getElementById('POSSIBLE');
	opts = possible_element.options;
	for (i = 0; i < opts.length; i++) {
		//console.log('option['+i+']='+opts[i].value+'selected='+opts[i].selected);
	}
	
	chosen = '';
	possible = document.getElementById('POSSIBLE');
	//console.log('length='+possible.options.length);
	for(i=0; i< possible.options.length; i++) {
		if (possible.options[i].selected) {
			chosen = possible.options[i].value;
			//console.log('option['+i+'] selected value='+possible.options[i].value);
		} else {
			//console.log('options['+i+']='+possible.options[i]);
			//console.log('option['+i+'].value='+possible.options[i].value);
		}
		if(possible.options[i].selected) {
			//console.log('selected');
			chosen = possible.options[i].value
		}
	}
	//console.log('chosen='+chosen);
	/* having selected the word, we want the clue to it */
	selected_word = chosen;
	selected_word_clue = fetch_clue(chosen); 
}
/* Given the word chosen in the form [123] ABANDON find clue 123 which relates to ABANDON */
/* used */
function fetch_clue(word_chosen) {
	//console.log('***fetch clue for: '+word_chosen);
	indstart = word_chosen.indexOf('[')+1;
	indend = word_chosen.indexOf(']');
	answer_number = word_chosen.substring(indstart,indend);
//	console.log('number='+answer_number);

//	console.log('answer='+ANSWER[answer_number]);
//	console.log('clue='+CLUE[answer_number]);
	c_b = document.getElementById('clue_box');
	c_b.value = CLUE[answer_number];
	//console.log('c_b='+c_b);
	c_b.text = CLUE[answer_number];
}
function put_answer_in_direction (answer,HTU_start, ABD_dir_in) {
	if (ABD_dir_in == 'a') {
		put_answer_in_direction_a(answer, HTU_start);	
	}
	if (ABD_dir_in == 'bb') {
		put_answer_in_direction_b(answer, HTU_start);	
	}
	if (ABD_dir_in == 'd') {
		put_answer_in_direction_d(answer, HTU_start);	
	}
}
function put_answer_in_direction_x(answer,HTU_start) {
}
function put_answer_in_direction_y(answer,HTU_start) {
}
function put_answer_in_direction_z(answer,HTU_start) {
}

function data_change(val) {
	console.log('functions6_data change('+val+')');
	if ((val == '272') |
		(val == '262') |
		(val == '252') |
		(val == '242') |
		(val == '232') |
		(val == '222') |
		(val == '212')) {
		temp = document.getElementById('x2_272');
		lett1 = temp.value;
		if(lett1.length > 1) {
			lett1 = ' ';
		}
		temp = document.getElementById('x2_262');
		lett2 = temp.value;
		if(lett2.length > 1) {
			lett2 = ' ';
		}
		temp = document.getElementById('x2_252');
		lett3 = temp.value;
		temp = document.getElementById('x2_242');
		lett4 = temp.value;
		temp = document.getElementById('x2_232');
		lett5 = temp.value;
		temp = document.getElementById('x2_222');
		lett6 = temp.value;
		temp = document.getElementById('x2_212');
		lett7 = temp.value;
		lett1 = clean_letter(lett1);
		lett2 = clean_letter(lett2);
		lett3 = clean_letter(lett3);
		lett4 = clean_letter(lett4);
		lett5 = clean_letter(lett5);
		lett6 = clean_letter(lett6);
		lett7 = clean_letter(lett7);
		find_words(lett1, lett2, lett3, lett4, lett5, lett6, lett7);
	}
}
function find_words(L1,L2,L3,L4,L5,L6,L7) {
	console.log('functions6_find_words: find_words('+L1+','+L2+','+L3+','+L4+','+L5+','+L6+','+L7+')');
	for (i = 0; i < ANSWER.length ; i++) {
		L_match = false;
		ans = ANSWER[i];
		ans_letter1 = ans[0];
		ans_letter2 = ans[1];
		ans_letter3 = ans[2];
		ans_letter4 = ans[3];
		ans_letter5 = ans[4];
		ans_letter6 = ans[5];
		ans_letter6 = ans[6];
		if ((L1 != '') &  	
			 (L1 == ans_letter1)) {
				L_match = true;
			
		} else {
			//console.log('434:mis-match letter = '+L1);
		}
		if ((L_match)) {
			if  ((L2 != ' ') & (L2 != '')) {
				//console.log('446: 2nd letter of sought word ='+L2+':');	
				/* matched so far in word */
				if (L2 != ans_letter2) {	
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L3 != ' ') & (L3 != '')) {
				//console.log('3rd letter of sought word ='+L3+'.');
				/* matched so far in word */
				if (L3 != ans_letter3) {	
					//console.log('mis-match 3 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L4 != ' ') & (L4 != '')) {
				//console.log('4th letter of sought word ='+L4);
				/* matched so far in word */
				if (L4 != ans_letter4) {	
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L5 != ' ') & (L5 != '')) {
				//console.log('5th letter of sought word ='+L5);
				/* matched so far in word */
				if (L5 != ans_letter5) {	
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L6 != ' ') & (L6 != '')) {
				//console.log('6th letter of sought word ='+L6);
				/* matched so far in word */
				if (L6 != ans_letter6) {	
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L7 != ' ') & (L7 != '')) {
				//console.log('7th letter of sought word ='+L7);
				/* matched so far in word */
				if (L7 != ans_letter7) {	
					L_match = false;
				}
			}
		}
		if (L_match) {
			//console.log('454: matched ' + ANSWER[i]);
			add_option(ANSWER[i],i);
		}
	}
	//?load_select();
}
function clean_letter(inp) {
	console.log('functions6_clean_letter()');
	if (inp.length != 1) {
		console.log('clean_letter('+inp+') called with > 1 char');
		return ' ';
	}

	if ((inp[0] <= 'z') & (inp[0] >= 'a')) {
			/* lower case add shift */
			return upper_case(inp[0]);
		
	}
	if ((inp[0] <= 'Z') & (inp[0] >= 'A')) {
			/* lower case add shift */
			return inp[0];
		
	}
	return '';
}
function upper_case(low) {
	if (low == 'a') {
		return 'A';
	}
	if (low == 'b') {
		return 'B';
	}
	if (low == 'c') {
		return 'C';
	}
	if (low == 'd') {
		return 'D';
	}
	if (low == 'e') {
		return 'E';
	}
	if (low == 'f') {
		return 'F';
	}
	if (low == 'g') {
		return 'G';
	}
	if (low == 'h') {
		return 'H';
	}
	if (low == 'i') {
		return 'I';
	}
	if (low == 'j') {
		return 'J';
	}
	if (low == 'k') {
		return 'K';
	}
	if (low == 'l') {
		return 'L';
	}
	if (low == 'm') {
		return 'M';
	}
	if (low == 'n') {
		return 'N';
	}
	if (low == 'o') {
		return 'O';
	}
	if (low == 'p') {
		return 'P';
	}
	if (low == 'q') {
		return 'Q';
	}
	if (low == 'r') {
		return 'R';
	}
	if (low == 's') {
		return 'S';
	}
	if (low == 't') {
		return 'T';
	}
	if (low == 'u') {
		return 'U';
	}
	if (low == 'v') {
		return 'V';
	}
	if (low == 'w') {
		return 'W';
	}
	if (low == 'x') {
		return 'X';
	}
	if (low == 'y') {
		return 'Y';
	}
	if (low == 'z') {
		return 'Z';
	}
}

/* given myid which specifies the box in the right position on screen 
put in the abd value (becomes */
function showit(myid, becomes) {
	console.log('functions6_showit');
	temp = document.getElementById(myid);
	myclass = temp.className;
	temp.className = becomes;

}
function show_inputs(num) {
	console.log('functions6_show');
	if (num == '2') {
		return;
		showit('x2_x3y3', 'x262')
		
	}
}
function clear_numbers() {
	console.log('functions6_clear_numbers()');
	clear_cell('x2_261');
	clear_cell('x2_241');
	clear_cell('x2_221');
	
	clear_cell('x2_272');
	clear_cell('x2_262');
	clear_cell('x2_252');
	clear_cell('x2_242');
	clear_cell('x2_232');
	clear_cell('x2_222');
	clear_cell('x2_212');

	clear_cell('x2_263');
	clear_cell('x2_243');
	clear_cell('x2_223');
	
	clear_cell('x2_274');
	clear_cell('x2_264');
	clear_cell('x2_254');
	clear_cell('x2_244');
	clear_cell('x2_234');
	clear_cell('x2_224');
	clear_cell('x2_214');

	clear_cell('x2_265');
	clear_cell('x2_245');
	clear_cell('x2_225');

	clear_cell('x2_276');
	clear_cell('x2_266');
	clear_cell('x2_256');
	clear_cell('x2_246');
	clear_cell('x2_236');
	clear_cell('x2_226');
	clear_cell('x2_216');

	clear_cell('x2_267');
	clear_cell('x2_247');
	clear_cell('x2_227');

}
function clear_cell(cellid) {
	console.log('functions6_clear_cell()');
	temp = document.getElementById(cellid);
	temp.value = '';
}
var accumulated_options = '';
function add_option(option_text,clue_num) {
	console.log('functions6_add_option('+option_text+','+clue_num+')');
	temp_text = option_text +'('+clue_num+')';

	if (options_open) {
		//First time in clear out options
		temp = document.getElementById('POSSIBLE');
		accumulated_options = accumulated_options + message;

	} else {
		console.log('add_option(): opening options');
		options_open = true;
		//accumulated_options =  '<option value="yahoo">yahoo</option>';
		accumulated_options =  message;
	}
	
}
var options_open = false;
function clear_options() {
	console.log('functions6_clear_options');
	options_open = true;
}
function clear_select() {
	console.log('functions6_clear_select()');
	temp = document.getElementById('myselect');
	temp.innerHTML = '<option >empty</option>';

	accumulated_options = '';
	options_open = false;
	
}
function show_points() {
	console.log('functions6_show_points()');

	temp = document.getElementById('p_left');

	temp.innerHTML = '<input type="button" class="x0y0h"; value="y=0" id="idx0y0"><input type="button" class="x0y10"; value="y=10"><input type="button" class="x0y20"; value="y=20"><input type="button" class="x0y30"; value="y=30"><input type="button" class="x0y40"; value="y=40"><input type="button" class="x0y50"; value="y=50"><input type="button" class="x0y60"; value="y=60"><input type="button" class="x0y70"; value="y=70"><input type="button" class="x0y80"; value="y=80"><input type="button" class="x0y90"; value="y=90">';
	temp = document.getElementById('p_top');
	temp.innerHTML = '	<input type="button" class="x10y0"; value="x=10"><input type="button" class="x20y0"; value="x=20"><input type="button" class="x30y0"; value="x=30"><input type="button" class="x40y0"; value="x=40"><input type="button" class="x50y0"; value="x=50"><input type="button" class="x60y0"; value="x=60"><input type="button" class="x70y0"; value="x=70"><input type="button" class="x80y0"; value="x=80">';
	
	temp = document.getElementById('p_right');
	temp.innerHTML = '	<input type="button" class="x90y0"; value="x90y0"><input type="button" class="x90y10"; value="x90y10"><input type="button" class="x90y20"; value="x90y20"><input type="button" class="x90y30"; value="x90y30"><input type="button" class="x90y40"; value="x90y40"><input type="button" class="x90y50"; value="x90y50"><input type="button" class="x90y60"; value="x90y60"><input type="button" class="x90y70"; value="x90y70"><input type="button" class="x90y80"; value="x90y80"><input type="button" class="x90y90"; value="x90y90">';
}

function hide_affix_inputs() {
	console.log('functions6_hide_affix_inputs');
	temp = document.getElementById('affix');
	temp.innerHTML = '';
	
}
function show_affix_inputs(a_value, b_value, d_value) {
	console.log('functions6_show_affix_inputs');
	if(a_value != 2) {
		return;
	}
	temp = document.getElementById('affix');
	temp.innerHTML = '';
temp.innerHTML = temp.innerHTML + '	<p style=" position:absolute; left:230px; top: 260px"><input  type="text" id="x2_261" value="261" onChange="data_change(261)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style=" position:absolute; left:330px; top: 310px"><input  type="text" id="x2_241" value="241" onChange="data_change(241)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style=" position:absolute; left:430px; top: 360px"><input  type="text" id="x2_221" value="221" onChange="data_change(221)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:180px; top: 300px"><input  type="text" id="x2_272" value="272" onChange="data_change(272)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:230px; top: 325px"><input  type="text" id="x2_262" value="262" onChange="data_change(262)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:280px; top: 350px"><input  type="text" id="x2_252" value="252" onChange="data_change(252)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:330px; top: 375px"><input  type="text" id="x2_242" value="242" onChange="data_change(242)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:390px; top: 400px"><input  type="text" id="x2_232" value="232" onChange="data_change(232)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:440px; top: 425px"><input  type="text" id="x2_222" value="222" onChange="data_change(222)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:490px; top: 450px"><input  type="text" id="x2_212" value="212" onChange="data_change(212)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:230px; top: 370px"><input  type="text" id="x2_263" value="263" onChange="data_change(263)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:330px; top: 420px"><input  type="text" id="x2_243" value="243" onChange="data_change(243)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:440px; top: 480px"><input  type="text" id="x2_223" value="223" onChange="data_change(223)"size="1"></p>';
<!----------------------------------------->
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:180px; top: 400px"><input  type="text" id="x2_274" value="274" onChange="data_change(274)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:230px; top: 425px"><input  type="text" id="x2_264" value="264" onChange="data_change(264)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:280px; top: 450px"><input  type="text" id="x2_254" value="254" onChange="data_change(254)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:330px; top: 475px"><input  type="text" id="x2_244" value="244" onChange="data_change(244)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:390px; top: 500px"><input  type="text" id="x2_234" value="234" onChange="data_change(234)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:440px; top: 525px"><input  type="text" id="x2_224" value="224" onChange="data_change(224)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:490px; top: 550px"><input  type="text" id="x2_214" value="214" onChange="data_change(214)"size="1"></p>';

<!------------------------------------>
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:230px; top: 480px"><input  type="text" id="x2_265" value="265" onChange="data_change(265)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:330px; top: 530px"><input  type="text" id="x2_245" value="245" onChange="data_change(245)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:430px; top: 570px"><input  type="text" id="x2_225" value="225" onChange="data_change(225)"size="1"></p>';
<!----------------------------------------->

temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:180px; top: 500px"><input  type="text" id="x2_276" value="276" onChange="data_change(276)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:230px; top: 525px"><input  type="text" id="x2_266" value="266" onChange="data_change(266)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:280px; top: 550px"><input  type="text" id="x2_256" value="256" onChange="data_change(256)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:330px; top: 575px"><input  type="text" id="x2_246" value="246" onChange="data_change(246)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:390px; top: 600px"><input  type="text" id="x2_236" value="236" onChange="data_change(236)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:440px; top: 625px"><input  type="text" id="x2_226" value="226" onChange="data_change(226)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:490px; top: 650px"><input  type="text" id="x2_216" value="216" onChange="data_change(216)"size="1"></p>';
<!------------------------------------>
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:230px; top: 590px"><input  type="text" id="x2_267" value="267" onChange="data_change(267)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:330px; top: 640px"><input  type="text" id="x2_247" value="247" onChange="data_change(247)"size="1"></p>';
temp.innerHTML = temp.innerHTML + '<p style="position:absolute; left:430px; top: 680px"><input  type="text" id="x2_227" value="227" onChange="data_change(227)"size="1"></p>';
<!----------------------------------------->

}
function update_para(link_number) {
	console.log('functions6_update'+link_number);
	temp = document.getElementById('para_hole');
	temp.innerHTML = 'aaa'+ link_number;
}

function answer_focus() {
	console.log('functions6_answer_focus');
}
/* WORD HANDLING
// JavaScript Document word handling
/* functions here:- see scratchpad.js

*/

function letter_pressed(lett) {
	console.log('letter_pressed('+lett+')');

	put_letter_in_cube(lett, HTU_number, HTU_string);
	seek_word(lett, HTU_string);
}

/* cube_click_black does nothing as the cube is black	
*/
function cube_click_black(a_value, b_value, d_value){
	console.log('cube_click_black('+a_value+','+b_value+','+d_value+'). Nothing to do');
}
/* function cube_click_white acts on a click at cube x,y,z.
It takes the X,y,x and make up a single abd called the HundredsTensUnits
It colours the cube selected cube yellow - whether it had a letter on or not

*/
function cube_click_white(a_value, b_value, d_value, slice_direction, answer_direction){
	console.log('cube_click_white('+a_value+','+b_value+','+d_value+'). Now choose a letter');
	cube_x = a_value;
	cube_y = b_value;
	cube_z = d_value;
	make_HTU(a_value,b_value, d_value);
	/*returns HTU_string but also sets up HTU_number */
	
	//update_frame3_word(HTU_string);	
	//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
	//colour the cube yellow while working on it
	new_src = './cube_raw2/cube_raw2_yellow.png'
	cube_colour[HTU_number] = 'yellow';
	
//	console.log('cube yellow');
	id = 'cube_'+HTU_string;
	word_cube=document.getElementById(id);
	old_src = word_cube.src;
	original_cube_name = './cube_raw2/cube_raw2_white.png';
	if(old_src.indexOf(original_cube_name) > 0) {
		//console.log('45: untouched mini-cube original_cube_name='+original_cube_name );
		word_cube.src = new_src;
	} else {
		//mini-cube was not the original - it already had a letter
		//Find the filename for that letter on a yellow mini-cube
		for (k=0; k <= alphabet_list.length; k++) {
			letter = alphabet_list[k];
			old_cube_name = "./cube_raw2/cube_raw2_"+letter+".png";
			if (old_src.indexOf(old_cube_name) >= 0) {
				new_src = "./cube_raw2/cube_raw2_yellow_"+letter+".png";
			}	
		}
	}
	word_cube.src = new_src;	
	word_cube.onclick = ""; 
	
}
/* Seek a word with a letter in the position corresponding with square number (as a string) */

/* seek_word(lett, HTU_string) looks for the word with a letter at the given position 
Puts all the matched words into drop down list POSSIBLE 
Put the position in the ANSWER list in square brackets by the word*/

function seek_word(lett, HTU_string) {
//	console.log('***seek_word('+lett+','+HTU_string+')');
	clear_possible();
	find_word_frame(lett, HTU_string);
	word_letters[0] = lett;
//By this point we have the pattern of the word in word_letters[0-6] and want to find all the words 
//Go through ANSWERS to find words that could match
	ANSWER_length = ANSWER.length;
// debugging nobble 
	ANSWER_length = 2;
	for (answer_ptr = 0; answer_ptr <= ANSWER_length; answer_ptr++) {
		this_answer = ANSWER[answer_ptr];
		matched = true;

/* start assuming a match then change if anything different */
		for (int_sw2 = 0; int_sw2 <= 6; int_sw2++) {
			if((word_letters[int_sw2] == this_answer[int_sw2]) || (word_letters[int_sw2] == '_')) {
			} else {
				matched = false;
			}
		} 
		if(matched) {
			word_to_select('['+answer_ptr+'] '+this_answer);
			//console.log('result '+answer_ptr+'match');
		}else{
			console.log('seek_word: mismatch '+answer_ptr +' '+ANSWER[answer_ptr]);
		}

	}
//	console.log('828_exit word_handling2');
}

/* find_word_frame may find the given letter at the 
	start of a word location
	If it does, it takes the addresses of the other letters of the word
	and looks at the minicubes to see if the letter is filled in.
 	Output is in array saved_word_list[0-6] & word_letters
*/
function find_word_frame(lett, HTU_string){
//	console.log("functions6_837: find_word_frame("+lett+','+HTU_string+')');
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
//	console.log("leave find_word_frame("+lett+','+HTU_string+')');						
}

/* given the address in form abd find the letter if it exists on minicube of that number */

function get_letter(add_letter) {
//	console.log('functions6_get_letter()');
	return cube_letter[add_letter];
}

function clear_possible() {
//	console.log('functions6_clear_possible');
	accumulated_options = '';
	temp = document.getElementById('POSSIBLE');
	temp.innerHTML = "<option value='blank'>Possible words 5</option>";
	for(i = 0; i <7; i++) {
		word_letters[i] = '';
	}
	//console.log('cleared_possible');
}

/* call with a list of locations and a list of known letters */
var known_letters = new Array(7);
var known_locations = new Array(7);
function look_for_rest_of_word() {
	console.log('functions7:look_for_rest_of_word()');
	if(known_letters[0] = null) {
		get_letter(posn,known_locations[0]);
	}
}

/* add_to_grid: Get the selected word from mySelect and put its letters into the appropriate cells */

function add_to_grid() {
	console.log('functions6_add_to_grid()');
	answer = ' ';
	possible = document.getElementById('POSSIBLE');
	temp2 = possible.selected;
	
	for (i = 0; i < possible.options.length; i++) {
		if(possible.options[i].selected) {
			answer = possible.options[i].text;
		}
	}
	//we now have a word in answer to place into mini cubes numbered as in saved_word_list
	j = 0;
	for (i = 0; i < answer.length; i++) {
		if((answer[i] != ' ') && (answer[i] != '-')) {
			console.log('word_handling2:313 problem with HTU in next line');
			put_letter_in_cube(answer[i],saved_word_list[j]);
			j++;
		}
	}
	
}
/* put the given letter into the cube identified by the HTU_number & HTU_string */
function put_letter_in_cube(lett, HTU_number, HTU_string) {
//	console.log('functions6_put letter in cube('+lett+','+HTU_number+','+HTU_string);
	//Save away the letter stored in this mini-cube
	cube_letter[HTU_number] = lett;
	/* put the filename of the minicube with letter on it eg 'cube_raw2/cube_raw2_A.png into the minicube slot */
	for (k = 0; k < alphabet_list.length; k++) {
		if (lett == alphabet_list[k]) {
			minicube1 = document.getElementById('cube_'+HTU_string);
			//console.log('Fetching element '+'cube_'+HTU_string);
			//console.log('got'+minicube1);
			//console.log('of which the src is '+minicube1.src);
//			console.log('src was '+minicube1.src+' set to '+'./cube_raw2/cube_raw2_'+lett+'.png');
			minicube1.src = './cube_raw2/cube_raw2_'+lett+'.png';
		} else {
			//console.log(lett +'<>'+alphabet_list[k]);
		}
	}
//	console.log('leave put letter in cube('+lett+','+HTU_number+','+HTU_string);

}
/* CLUES CODE */
// JavaScript Document clues_code
function clues_clear() {
	console.log('functions6_clear clues');
	clues_temp = document.getElementById('clues_box');
	clues_temp.innerHTML = 'Clues';
	clues_text = '';
}
clues_text = '';
function clues_copy() {
	console.log('functions6_clues_copy()');
	clues_text = '';

	for(cc = 0; cc <word_list.length; cc=cc+7) {
		console.log('\ncc='+cc);
		//clues_add(word_list_number[cc]);
		clues_add(cc);
	}
	clues_temp = document.getElementById('clues_box');
	clues_temp.innerHTML = 'Clues\n\r'+clues_text;

}
/* index goes 0 to length of word list by 7s */
//		called from clues_copy(??)
function clues_add(index) {
	console.log('clues_add('+index+')');
	//console.log('functions6_clues_code:23:clue_add'+index);
	clues_text = clues_text + index+'\t';

	word_match = true;  //may be changed in get_entry
	whole_word = '';
	console.log('29:index='+index+'word_list_number[index]='+word_list_number[index]);
	clues_text += name_list(index);
	clues_text += get_entry(word_list_number[index])+' ';
	clues_text += get_entry(word_list_number[index+1])+' ';
	clues_text += get_entry(word_list_number[index+2])+' ';
	clues_text += get_entry(word_list_number[index+3])+' ';
	clues_text += get_entry(word_list_number[index+4])+' ';
	clues_text += get_entry(word_list_number[index+5])+' ';
	clues_text += get_entry(word_list_number[index+6]);
	
	clues_text += word_list_number[i];	//******
	if(word_match) {
		clues_text += 'word '+whole_word;
		this_clue = get_clue(whole_word);
		//console.log('41: this_clue='+this_clue);
		clues_text += this_clue;
		//console.log('43: '+clues_text);
	}
	clues_text += '\n';
	//console.log('35: clue_add exit');
	
}
/* Given the number of the mini-cube return a string of the letter in that cell & tab */
function get_entry(HTU_number) {
	console.log('functions6_get_entry HTU='+HTU_number);
	GEvalue = cube_letter[HTU_number];
	if(GEvalue == '_') {
		word_match = false;
	} else {
		whole_word += GEvalue;
	}
	
	return ('['+HTU_number+']'+cube_letter[HTU_number]);
}

/* Given a word, return the first clue that matches it */
/* called from clues_add(??) */
function get_clue(word_in) {
	console.log('get_clue('+word_in+')');
	
//	for(i = 0; i <ANSWER.length; i++) {
	for(iclue = 0; iclue <100; iclue++) {
		if (word_in == ANSWER[iclue]) {
			console.log('clues_code:71:CLUES='+CLUE[iclue]);
			return CLUE[iclue];
		} else {
			//console.log('word_in'+word_in+'<>ANSWER['+iclue+']'+ANSWER[iclue]);
		}
	}
}


/* save_answer(HTU_string, selected_word) takes the selected word (selected_word) & puts it in the cube at the place specified by
HTU_string & ??? */
function save_answer(HTU_number, selected_word) {
	temp_a = get_a_from_HTU_number(HTU_string);
	temp_b = get_b_from_HTU_number(HTU_string);
	temp_d = get_d_from_HTU_number(HTU_string);
	console.log('save_answer('+temp_a+','+temp_b+','+temp_d+','+selected_word+')');
	console.log('answer_direction ='+answer_direction);
	if (answer_direction == 'a') {
	}
	if (answer_direction == 'b') {
	}
	if (answer_direction == 'd') {
	}
}