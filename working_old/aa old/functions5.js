// JavaScript Document
/*
Having found a word in the list that could be required one add this to frame3 list
add_option adds a possible word to the list which will be put in the pull down list in frame3 

function add_option(option_text,clue_num) {
*/

function clue_chosen(num) {
	alert('clue_chosen('+num+')');
	//add clue to selected_clue
	alert('clue = '+CLUES[num]);
 
}

/* Get the clue corresponding with the selected ANSWER */
function get_clue() {
	debug_alert('get_clue:() Get the clue corresponding with the selected ANSWER');

	temp_select = document.getElementById('POSSIBLE');
	/* now get the selected option */
	select_count = temp_select.length;
	//alert('get_clue: search through '+select_count+'entries');
	for (i = 0; i < select_count; i++) {
		if(temp_select.options[i].selected) {
			//alert('selected value is '+temp_select.options[i].value);
			selected_answer = temp_select.options[i].value;
			selected_clue = document.getElementById('selected_clue');
			//alert('selected_clue = '+selected_clue);
			selected_clue.value = temp_select.options[i].value;
		} //end if
	} //end for 
	clue = split_selected_answer(selected_answer);
	selected_clue = document.getElementById('selected_clue');
	//alert('selected_clue = '+selected_clue);
	//alert('clue = '+clue);
	selected_clue.value = clue;


} //end function
/* split the selected answer into word & number, then get the clue at the given number */
function split_selected_answer(answer) {
	/* starting with AMERICA(5) find 'big countrty' */
	//alert('splitting'+answer);
	var open = answer.indexOf('(');
	open = open +1;
	var close = answer.indexOf(')');
	if ((open > 0) & (close > 0)) {
		//alert('split_selected_answer: found brackets');
		//alert('open = '+open);
		var sliced = answer.slice(open,close);
		//alert('split_selected_answer: sliced = '+sliced);
	}
	sliced_number = parseInt(sliced) ;
	//alert('split_selected_answer: sliced_number = ' + sliced_number);
	//alert('split_selected_answer: entry[7] = '+CLUE[7]);
	//alert('split_selected_answer: new_clue = '+CLUE[sliced_number]);
	return CLUE[sliced_number];
}

function y1(y_value) {
	//alert('xlayer '+ x_value);
	hide_affix_inputs(y_value);
	show_inputs(y_value);
	if(y_value == 1) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y1.jpg';
	}
	if(y_value == 2) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y2.jpg';
	}
	if(y_value == 3) {
		//alert('x_val 3');
		temp = document.getElementById('cube_image1');
		//alert('temp');
		temp.src = 'cube7_Y3.jpg';
	}
	if(y_value == 4) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y4.jpg';
	}
	if(y_value == 5) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y5.jpg';
	}
	if(y_value == 6) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y6.jpg';
	}
	if(y_value == 7) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y7.jpg';
	}
}


function z1(z_value) {
	//alert('zlayer '+ z_value);
	temp = document.getElementById("cube_space");
	//alert('nswer'+temp.innerHTML);
	//alert('after temp');
	//hide_affix_inputs(z_value);
	if(z_value == 0) {
		temp.innerHTML = gathered_Z0;
	}
	if(z_value == 1) {
		temp.innerHTML = gathered_Z1;
	}
	if(z_value == 2) {
		temp.innerHTML = gathered_Z2;
	}
	if(z_value == 3) {
		temp.innerHTML = gathered_Z3;
	}
	if(z_value == 4) {
		temp.innerHTML = gathered_Z4;
	}
	if(z_value == 5) {
		temp.innerHTML = gathered_Z5;
	}
	if(z_value == 6) {
		temp.innerHTML = gathered_Z6;
	}
}
function data_change(val) {
	alert('data_change('+val+')');
	debug_alert('data change('+val+')');
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
	alert('find_match');
	debug_alert('find_words: find_words('+L1+','+L2+','+L3+','+L4+','+L5+','+L6+','+L7+')');
	for (i = 0; i < ANSWER.length ; i++) {
		L_match = false;
		ans = ANSWER[i];
		//debug_alert('comparing with '+ans);
		ans_letter1 = ans[0];
		ans_letter2 = ans[1];
		ans_letter3 = ans[2];
		ans_letter4 = ans[3];
		ans_letter5 = ans[4];
		ans_letter6 = ans[5];
		ans_letter6 = ans[6];
		//alert('First letter is '+letter1);
		if ((L1 != '') &  	
			 (L1 == ans_letter1)) {
				//alert('match 1 at '+ANSWER[i]);
				L_match = true;
			
		} else {
			//debug_alert('434:mis-match letter = '+L1);
		}
		//alert('436: 2nd letter of sought word ='+L2);
		if ((L_match)) {
			if  ((L2 != ' ') & (L2 != '')) {
				//alert('length = '+L2.length);
				//debug_alert('446: 2nd letter of sought word ='+L2+':');	
				/* matched so far in word */
				if (L2 != ans_letter2) {	
					//alert('L2 = '+L2+'@');
					//alert('mis-match 2 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L3 != ' ') & (L3 != '')) {
				//debug_alert('3rd letter of sought word ='+L3+'.');
				/* matched so far in word */
				if (L3 != ans_letter3) {	
					//debug_alert('mis-match 3 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L4 != ' ') & (L4 != '')) {
				//debug_alert('4th letter of sought word ='+L4);
				/* matched so far in word */
				if (L4 != ans_letter4) {	
					alert('mis-match 4 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L5 != ' ') & (L5 != '')) {
				//debug_alert('5th letter of sought word ='+L5);
				/* matched so far in word */
				if (L5 != ans_letter5) {	
					alert('mis-match 5 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L6 != ' ') & (L6 != '')) {
				//debug_alert('6th letter of sought word ='+L6);
				/* matched so far in word */
				if (L6 != ans_letter6) {	
					alert('mis-match 6 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L7 != ' ') & (L7 != '')) {
				//debug_alert('7th letter of sought word ='+L7);
				/* matched so far in word */
				if (L7 != ans_letter7) {	
					alert('mis-match 7 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if (L_match) {
			//alert('454');
			//debug_alert('454: matched ' + ANSWER[i]);
			add_option(ANSWER[i],i);
		}
	}
	load_select();
}
function clean_letter(inp) {
	if (inp.length != 1) {
		//alert('> 1 char');
		return ' ';
	}

	if ((inp[0] <= 'z') & (inp[0] >= 'a')) {
			/* lower case add shift */
			//alert('lower case');
			return upper_case(inp[0]);
		
	}
	if ((inp[0] <= 'Z') & (inp[0] >= 'A')) {
			/* lower case add shift */
			//alert('upper case');
			return inp[0];
		
	}
	alert('other');
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
	alert('unmatched character '+low);
}

/* gien myid which specifies the box in the right position on screen 
put in the xyz value (becomes */
function showit(myid, becomes) {
	alert('showit');
	temp = document.getElementById(myid);
	myclass = temp.className;
	temp.className = becomes;

}
function show_inputs(num) {
	//alert('show');
	if (num == '2') {
		return;
		showit('x2_x3y3', 'x262')
		
	}
}
function clear_numbers() {
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
	temp = document.getElementById(cellid);
	temp.value = '';
}
var accumulated_options = '';
/* add_option adds a possible word to the list which will be put in the pull down list in frame3 */
function add_option(option_text,clue_num) {
	debug_alert('add_option('+option_text+','+clue_num+')');
	temp_text = option_text +'('+clue_num+')';
	message = '<option onClick="clue_chosen(clue_num)" value="'+temp_text+'">'+temp_text+'</option>'
	if (options_open) {
		//First time in clear out options
		temp = document.getElementById('POSSIBLE');
		accumulated_options = accumulated_options + message;

	} else {
		debug_alert('add_option(): opening options');
		options_open = true;
		//accumulated_options =  '<option value="yahoo">yahoo</option>';
		accumulated_options =  message;
		//alert('first');
		
	}
	
}
var options_open = false;

function clear_select() {
	temp = document.getElementById('myselect');
	temp.innerHTML = '<option >empty</option>';

	accumulated_options = '';
	options_open = false;
	
}
function show_x_axis() {
	//alert('set x axis');
	temp = document.getElementById('p_x_axis');	
	
	temp.innerHTML = 	'<input type="button" onClick="draw_x_layer(1)" class="x100" id="x1" value="X=1">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(2)" class="x200" id="x2" value="2">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(3)" class="x300" id="x3" value="3">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(4)" class="x400" id="x4" value="4">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(5)" class="x500" id="x5" value="5">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(6)" class="x600" id="x6" value="6">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(7)" class="x700" id="x7" value="7">';

}
function show_y_axis(){
	//alert('set y axis');
	temp = document.getElementById('p_y_axis');	
	temp.innerHTML = '<input type="button" onClick="y1(1)" class="y100" id="y1" value="1">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(2)" class="y200" id="y2" value="2">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(3)" class="y300" id="y3" value="3">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(4)" class="y400" id="y4" value="4">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(5)" class="y500" id="y5" value="5">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(6)" class="y600" id="y6" value="6">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(7)" class="y700" id="y7" value="Y=7">';
	//alert('end inner ='+temp.innerHTML);
}
function show_z_axis() {
	//alert('set z axis');
	temp = document.getElementById('p_z_axis');	
	temp.innerHTML = '<input type="button" onClick="z1(1)" class="z100" id="z1" value="Z=1">'; 	
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(2)" class="z200" id="z2" value="2">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(3)" class="z300" id="z3" value="3">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(4)" class="z400" id="z4" value="4">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(5)" class="z500" id="z5" value="5">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(6)" class="z600" id="z6" value="6">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(7)" class="z700" id="z7" value="7">';

	
	//alert('end inner ='+temp.innerHTML);
}

cube_x = -1;
cube_y = -1;
cube_z = -1;
//HTU & HTU_string are globals
var HTU_number = -1, HTU_string = '777', HTU_x, HTU_y, HTU_z;
/* make_HTU(x,y,z) takes the values and sets up 
HTU_number simple value x * 100 + y * 10 *z
HTU_string simple string of 2 characters x followed by 2 characters y then 2 characters Z
It returns HTU_string.
*/

function make_HTU(p_x, p_y, p_z) {
	//alert('blob');
	//alert('make_HTU('+p_x+','+p_y+','+p_z+')');
	HTU_x = p_x;
	HTU_y = p_y;
	HTU_z = p_z;
	h = p_x * 100;
	t = p_y * 10;
	u = p_z;
	
	h_string = make_string(p_x);
	t_string = make_string(p_y);
	u_string = make_string(p_z);
	//debug_alert('made');
	if(p_x == 0) {
		//alert('p_x='+p_x+'p_y='+p_y+'p_z='+p_z);
	}

	HTU_number = h + t + u;
	HTU_string = h_string + t_string + u_string;
	//debug_alert('HTU='+HTU+'HTU_string='+HTU_string);
	return HTU_string;
}
function getx_from_HTU(HTU_in) {
	remainder = HTU_in % 100;
	x = (HTU_in - remainder) / 100;
	//alert(HTU_in+'  '+x+"   "+remainder);
	return x;
}
function gety_from_HTU(HTU_in) {
	//working = HTU_in % 100;
	alert('working = '+working);
	z = HTU_in % 10;
	y = (working -z) / 100;
	return y;
}
function getz_from_HTU(HTU_in) {
	z = HTU_in % 10;
	return z;
}
//take a 1 digit number and make it a string
function make_string(inp) {
	if (inp == 0) {
		return '0';
	}
	if (inp == 1) {
		return '1';
	}
	if (inp == 2) {
		return '2';
	}
	if (inp == 3) {
		return '3';
	}
	if (inp == 4) {
		return '4';
	}
	if (inp == 5) {
		return '5';
	}
	if (inp == 6) {
		return '6';
	}
	if (inp == 7) {
		return '7';
	}
	if (inp == 8) {
		return '8';
	}
	if (inp == 9) {
		return '9';
	}
	alert('Faulty program functions5 make_string('+inp+')');
}
function update_para(link_number) {
	alert('update'+link_number);
	temp = document.getElementById('para_hole');
	alert(temp);
	temp.innerHTML = 'aaa'+ link_number;
}
function get_answer_selected(answer) {
	alert('functions.get_answer_selected('+answer+')');
	possible = document.getElementById('POSSIBLE');
	opt=possible.options;
	for(x=0;x <opt.length; x++) {
		//alert('F593: selected='+opt[x].selected);
		if(opt[x].selected) {
			alert('option['+x+'].innerHTML='+opt[x].innerHTML);
			put_answer_selected(opt[x].innerHTML);
		}
	}
	
	alert('leave get_answer_selected');
}
/* put_answer_selected(ACREAGE) to put the word into frame3 */
function put_answer_selected(chosen) {
	//alert('F603:functions.put_answer_selected('+chosen+')');
	frame3_word_0.value = chosen[0];
	frame3_word_1.value = chosen[1];
	frame3_word_2.value = chosen[2];
	frame3_word_3.value = chosen[3];
	frame3_word_4.value = chosen[4];
	frame3_word_5.value = chosen[5];
	frame3_word_6.value = chosen[6];
	//return;
	//Find where we were on master-cube and look up word_position_htu there
	//alert('HTU_number ='+HTU_number)
	//alert('619:HTU_string='+HTU_string);
	//Now find this letter at start of a word location
	//look in word_position_HTU to see where this word starts
	//alert('618:word_position.length='+word_position.length);
	for (ii = 0; ii < word_position_HTU.length; ii++) {
		single = word_position_HTU[ii];
	/*	if((ii <= 1) || (ii==43)){
			alert('single='+single+'    HTU='+word_position_HTU[ii]);
		}*/
		if (single[0] == HTU_string) {
			//alert('625:number = '+ii);
			//alert('word spaces='+single)
			put_word_to_frame(chosen, single);
		}
	}
	
	//alert('leave put_answer_selected');
}
/* Put the 7 letter word (word_string) into the frame given the list of HTU numbers */
function put_word_to_frame(word_string, word_HTU) {
	//alert('635:put_word_to_frame('+word_string);
	for (wi = 0; wi <=6; wi++) {
		//alert('637:put letter'+word_string[wi]+' into cell with HTU='+word_HTU);
		//word_number is set to nothing
		put_letter_in_cube(word_string[wi],0,word_HTU[wi]);
	}
	
}

function answer_focus() {
	alert('answer_focus');
}
