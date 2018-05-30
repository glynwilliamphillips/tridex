// JavaScript Document


function clue_chosen(num) {
	console.log('functions6_clue_chosen('+num+')');
	//add clue to selected_clue
	alert('clue = '+CLUES[num]);
 
}

/* DELETED see later get_clue*/
function zzz_get_clue() {
	console.log('functions6_get_clue:() Get the clue corresponding with the selected ANSWER');

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
function zzz_split_selected_answer(answer) {
	/* starting with AMERICA(5) find 'big countrty' */
	console.log('functions6_splitting'+answer);
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

/* draw_x_layer draws the cube with the gioven x layer exposed */
function draw_x_layer(x_value) {
	console.log('functions6_draw_x_layer('+ x_value+')');
	hide_affix_inputs(x_value);
	//show_affix_inputs(x_value,0,0);
	//alert('here');
	if(x_value == 1) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_X01.jpg';
	}
	if(x_value == 2) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_X02.jpg';
		show_affix_inputs(x_value,0,0);
		clear_numbers();
	}
	if(x_value == 3) {
		//alert('x_val 3');
		temp = document.getElementById('cube_image1');
		//alert('temp');
		temp.src = 'cube7_X03.jpg';
	}
	if(x_value == 4) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_X04.jpg';
	}
	if(x_value == 5) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_X05.jpg';
	}
	if(x_value == 6) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_X06.jpg';
	}
	if(x_value == 7) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_X07.jpg';
	}
}
function y1(y_value) {
	console.log('functions6_y1('+ y_value+')');
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
	console.log('functions6_z1('+ z_value+')');
	temp = document.getElementById("cube_space");
	//alert('temp='+temp.innerHTML);
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
		//alert('here');
		find_words(lett1, lett2, lett3, lett4, lett5, lett6, lett7);
	}
}
function find_words(L1,L2,L3,L4,L5,L6,L7) {
	console.log('functions6_find_words: find_words('+L1+','+L2+','+L3+','+L4+','+L5+','+L6+','+L7+')');
	//alert('here');
	//alert('ANSWER.len = '+ANSWER.length);
	//alert('CLUE.len = '+CLUE.length);
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
		//alert('First letter is '+letter1);
		if ((L1 != '') &  	
			 (L1 == ans_letter1)) {
				//alert('match 1 at '+ANSWER[i]);
				L_match = true;
			
		} else {
			//console.log('434:mis-match letter = '+L1);
		}
		//alert('436: 2nd letter of sought word ='+L2);
		if ((L_match)) {
			if  ((L2 != ' ') & (L2 != '')) {
				//alert('length = '+L2.length);
				//console.log('446: 2nd letter of sought word ='+L2+':');	
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
					alert('mis-match 4 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L5 != ' ') & (L5 != '')) {
				//console.log('5th letter of sought word ='+L5);
				/* matched so far in word */
				if (L5 != ans_letter5) {	
					alert('mis-match 5 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L6 != ' ') & (L6 != '')) {
				//console.log('6th letter of sought word ='+L6);
				/* matched so far in word */
				if (L6 != ans_letter6) {	
					alert('mis-match 6 at '+ANSWER[i]);
					L_match = false;
				}
			}
		}
		if ((L_match)) {
			if  ((L7 != ' ') & (L7 != '')) {
				//console.log('7th letter of sought word ='+L7);
				/* matched so far in word */
				if (L7 != ans_letter7) {	
					alert('mis-match 7 at '+ANSWER[i]);
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
		alert('clean_letter('+inp+') called with > 1 char');
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

/* given myid which specifies the box in the right position on screen 
put in the xyz value (becomes */
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
	message = '<option onClick="clue_chosen(clue_num)" value="'+temp_text+'">'+temp_text+'</option>';
	console.log('message='+message);
	if (options_open) {
		//First time in clear out options
		temp = document.getElementById('POSSIBLE');
		accumulated_options = accumulated_options + message;

	} else {
		console.log('add_option(): opening options');
		options_open = true;
		//accumulated_options =  '<option value="yahoo">yahoo</option>';
		accumulated_options =  message;
		//alert('first');
		
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
	alert('inner2='+temp.innerHTML);
	temp = document.getElementById('p_top');
	temp.innerHTML = '	<input type="button" class="x10y0"; value="x=10"><input type="button" class="x20y0"; value="x=20"><input type="button" class="x30y0"; value="x=30"><input type="button" class="x40y0"; value="x=40"><input type="button" class="x50y0"; value="x=50"><input type="button" class="x60y0"; value="x=60"><input type="button" class="x70y0"; value="x=70"><input type="button" class="x80y0"; value="x=80">';
	
	temp = document.getElementById('p_right');
	temp.innerHTML = '	<input type="button" class="x90y0"; value="x90y0"><input type="button" class="x90y10"; value="x90y10"><input type="button" class="x90y20"; value="x90y20"><input type="button" class="x90y30"; value="x90y30"><input type="button" class="x90y40"; value="x90y40"><input type="button" class="x90y50"; value="x90y50"><input type="button" class="x90y60"; value="x90y60"><input type="button" class="x90y70"; value="x90y70"><input type="button" class="x90y80"; value="x90y80"><input type="button" class="x90y90"; value="x90y90">';
	alert('inner='+temp.innerHTML);
	alert('point');
}
function show_x_axis() {
	console.log('functions6_set x axis');
	temp = document.getElementById('p_x_axis');	
	
	temp.innerHTML = 				'<input type="button" onClick="draw_x_layer(1)" class="x100" id="x1" value="X=1">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(2)" class="x200" id="x2" value="2">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(3)" class="x300" id="x3" value="3">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(4)" class="x400" id="x4" value="4">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(5)" class="x500" id="x5" value="5">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(6)" class="x600" id="x6" value="6">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(7)" class="x700" id="x7" value="7">';

}
function show_y_axis(){
	console.log('functions6_set y axis');
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
	console.log('functions6_set z axis');
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

function hide_affix_inputs() {
	console.log('functions6_hide_affix_inputs');
	temp = document.getElementById('affix');
	//alert('affix ='+temp);
	temp.innerHTML = '';
	//alert('temp zz= ');
	
}
function show_affix_inputs(x_value, y_value, z_value) {
	console.log('functions6_show_affix_inputs');
	if(x_value != 2) {
		alert('x_value not 2');
		return;
	}
	temp = document.getElementById('affix');
	//alert('affix ='+temp);
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
//	console.log('functions6_make_HTU('+p_x+','+p_y+','+p_z+')');
	HTU_x = p_x;
	HTU_y = p_y;
	HTU_z = p_z;
	h = p_x * 100;
	t = p_y * 10;
	u = p_z;
	
	h_string = make_string(p_x);
	t_string = make_string(p_y);
	u_string = make_string(p_z);
	//console.log('made');
	if(p_x == 0) {
		//alert('p_x='+p_x+'p_y='+p_y+'p_z='+p_z);
	}

	HTU_number = h + t + u;
	HTU_string = h_string + t_string + u_string;
	//console.log('HTU='+HTU+'HTU_string='+HTU_string);
	return HTU_string;
}
function getx_from_HTU(HTU_in) {
	console.log('functions6_getx_from_HTU()');
	remainder = HTU_in % 100;
	x = (HTU_in - remainder) / 100;
	//alert(HTU_in+'  '+x+"   "+remainder);
	return x;
}
function gety_from_HTU(HTU_in) {
	console.log('functions6_gety_from_HTU()');
	//working = HTU_in % 100;
	alert('working = '+working);
	z = HTU_in % 10;
	y = (working -z) / 100;
	return y;
}
function getz_from_HTU(HTU_in) {
	console.log('functions6_getz_from_HTU()');
	z = HTU_in % 10;
	return z;
}
//take a 1 digit number and make it a string
function make_string(inp) {
//	console.log('functions6_make_string()');
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
	console.log('functions6_update'+link_number);
	temp = document.getElementById('para_hole');
	alert(temp);
	temp.innerHTML = 'aaa'+ link_number;
}
function answer_selected() {
//	console.log('functions6_answer_selected');
	possible = document.getElementById('POSSIBLE');
	opt=possible.options;
	//alert('optons='+opt);
	for(x=0;x <opt.length; x++) {
		/*
		alert('x='+x);
		alert('option['+x+']='+opt[x]);
		alert('option['+x+'].selected='+opt[x].selected);
		*/
		if(opt[x].selected) {
			//alert('this selected');
			//alert('option['+x+'].innerHTML='+opt[x].innerHTML);
			//alert('option['+x+'].value='+opt[x].value);

		}
	}
	
	//alert('possible='+possible);
	//alert('selected='+possible.selected);
}
function answer_focus() {
	console.log('functions6_answer_focus');
}
/* WORD HANDLING
// JavaScript Document word handling
/* functions here:- see scratchpad.js

*/

function letter_pressed(lett) {
	console.log('functions6_737: letter_pressed('+lett+')');

	put_letter_in_cube(lett, HTU_number, HTU_string);
	//return;
	//alert('cube_x = '+cube_x+'cube_y = '+cube_y+'z='+cube_z);
	seek_word(lett, HTU_string);
}

/* cube_click_black does nothing as the cube is black	
*/
function cube_click_black(x_value, y_value, z_value){
	console.log('functions6_cube_click_black('+x_value+','+y_value+','+z_value+'). Nothing to do');
}
/* function cube_click acts on a click at cube x,y,z.
It takes the X,y,x and make up a single xyz called the HundredsTensUnits
It colours the cube selected cube yellow - whether it had a letter on or not

*/
function cube_click(x_value, y_value, z_value){
	console.log('functions6_cube_click('+x_value+','+y_value+','+z_value+'). Now choose a letter');
	cube_x = x_value;
	cube_y = y_value;
	cube_z = z_value;
	make_HTU(x_value,y_value, z_value);
	/*returns HTU_string but also sets up HTU_number */
	
	//update_frame3_word(HTU_string);	
	//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
	//colour the cube yellow while working on it
	new_src = './cube_raw2/cube_raw2_yellow.png'
	cube_colour[HTU_number] = 'yellow';
	
//	console.log('cube yellow');
	id = 'cube_'+HTU_string;
	//alert('id='+id);
	word_cube=document.getElementById(id);
	old_src = word_cube.src;
	original_cube_name = './cube_raw2/cube_raw2_white.png';
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
Puts all the matched words into drop down list POSSIBLE */

function seek_word(lett, HTU_string) {
	console.log('functions6_seek_word('+lett+','+HTU_string+')');
	clear_possible();
	find_word_frame(lett, HTU_string);
	word_letters[0] = lett;
//By this point we have the pattern of the word in word_letters[0-6] and want to find all the words 
//Go through ANSWERS to find words that could match
	ANSWER_length = ANSWER.length;
// debugging nobble 
	ANSWER_length = 200;
	console.log('811: word_handling2length = '+ANSWER_length);
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
	console.log('828_exit word_handling2');
}

/* find_word_frame may find the given letter at the 
	start of a word location
	If it does, it takes the addresses of the other letters of the word
	and looks at the minicubes to see if the letter is filled in.
 	Output is in array saved_word_list[0-6] & word_letters
*/
function find_word_frame(lett, HTU_string){
	console.log("functions6_837: find_word_frame("+lett+','+HTU_string+')');
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
	console.log("leave find_word_frame("+lett+','+HTU_string+')');						
}

/* given the address in form xyz find the letter if it exists on minicube of that number */

function get_letter(add_letter) {
//	console.log('functions6_get_letter()');
	return cube_letter[add_letter];
}

function clear_possible() {
	console.log('functions6_clear_possible');
	accumulated_options = '';
	temp = document.getElementById('POSSIBLE');
	//alert('temp='+temp);
	//alert('value='+temp.value);
	//alert('innerHTML='+temp.innerHTML);
	temp.innerHTML = "<option value='blank'>Possible words 5</option>";
	for(i = 0; i <7; i++) {
		word_letters[i] = '';
	}
	console.log('cleared_possible');
}
function word_to_select(word) {
	console.log('functions6_word_to_select('+word+')');
	temp = document.getElementById('POSSIBLE');
	temp.innerHTML = temp.innerHTML + '<option value="' + word + '"' + " onClick('"+word+"')"+">"+word+"</option>";	
	console.log('<option value="' + word + '"' + " onClick('"+word+"')"+">"+word+"</option>");
}

/* call with a list of locations and a list of known letters */
var known_letters = new Array(7);
var known_locations = new Array(7);
function look_for_rest_of_word() {
	console.log('functions6_look_for_rest_of_word()');
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
	alert('put word '+answer+' in mini-cubes');
	alert('saved_word_list='+saved_word_list);
	alert('sub_word_list='+sub_word_list);
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
	console.log('functions6_put letter in cube('+lett+','+HTU_number+','+HTU_string);
	//Save away the letter stored in this mini-cube
	cube_letter[HTU_number] = lett;
	/* put the filename of the minicube with letter on it eg 'cube_raw2/cube_raw2_A.png into the minicube slot */
	//alert('alphabet_list='+alphabet_list);
	for (k = 0; k < alphabet_list.length; k++) {
		if (lett == alphabet_list[k]) {
			minicube1 = document.getElementById('cube_'+HTU_string);
			//console.log('Fetching element '+'cube_'+HTU_string);
			//console.log('got'+minicube1);
			//console.log('of which the src is '+minicube1.src);
			console.log('src was '+minicube1.src+' set to '+'./cube_raw2/cube_raw2_'+lett+'.png');
			minicube1.src = './cube_raw2/cube_raw2_'+lett+'.png';
		} else {
			//alert(lett +'<>'+alphabet_list[k]);
		}
	}
	console.log('leave put letter in cube('+lett+','+HTU_number+','+HTU_string);

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
			//alert('imatch i='+iclue+'word_in='+word_in+'ANSWER[iclue]='+ANSWER[iclue]);
			console.log('clues_code:71:CLUES='+CLUE[iclue]);
			return CLUE[iclue];
		} else {
			//alert('word_in'+word_in+'<>ANSWER['+iclue+']'+ANSWER[iclue]);
		}
	}
	alert('no clue found for '+word_in);
}
