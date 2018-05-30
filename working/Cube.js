// JavaScript Document
/* cube 

create a cube using
fred = new Cube(index,1,2,3) 
where Across coordinate is 1, Behind coord 2 & Climb coord 3
index = C * 49 + B * 7 + A
The list of Cubes is called mini_cubes[]*/

function Cube(index, a,b,c) {
//	console.log('Create cube'+index+','+a+','+b+','+c);
	this.index = index;
	/* set up all variables to default*/
	this.page_A = a;
	this.page_B = b;
	this.page_C = c;
	/* geometry */
	this.display_top = 0;
	this.display_left = 0;
	/* directions of the words using this cube */
	this.direction_A = '_';
	this.direction_B = '_';
	this.direction_C = '_';
	/* numbers that show where this cube fits in with the cube of the whole crossword */
	this.HTU_string = a + '_' + b + '_' + c;
	this.HTU_number = make_HTU_number(a,b,c);
	
	this.cube_letter = '_';
	this.cube_colour = 'unknown**';
		/* created here and used 
			compute_pattern(myCube)
			get_colour(myCube)
			set_directions(myCube,'debug')
			set_colour(myCube, colour)
*/
	get_colour(this);	
	this.height_C = this.page_C * c_height;
	this.height_A = this.page_A * a_height;
	this.height_B = this.page_B * b_height;
	this.cube_pattern = 'abc'; 
	this.image_string = 'xyz';
	compute_pattern(this);
}

function compute_pattern(myCube) {
	//console.log('cube: compute_pattern for ',myCube, 0);

	myCube.display_top = top_displacement   - myCube.height_C - myCube.height_A - myCube.height_B ;
	//console.log('top_disp='+top_displacement+'height_D='+myCube.height_D+'height_A='+myCube.height_A+'height_B='+myCube.height_B);
	myCube.display_left = left_displacement - (myCube.page_B * b_left) + (myCube.page_A * a_left);
	if (myCube.cube_letter != '_') {
		if (g_orientation == 'sideways') {
			myCube.image_string = './cube_raw2/cube_raw2_sideways_'+myCube.cube_letter+'.png';
		} else {
			myCube.image_string = './cube_raw2/cube_raw2_'+myCube.cube_letter+'.png';
		}
	} else {
		myCube.image_string = './cube_raw2/cube_raw2_'+myCube.cube_colour+'.png';
	}
	console.log('Cube:60 '+myCube.image_string);
	
	on_click = '';
	if((myCube.cube_colour == 'white') || (myCube.cube_colour == 'yellow') || (myCube.cube_colour == 'green')) {
		on_click = ' onClick="green_pressed('+xa+','+xb+','+xc+')"';
	} else {		
		on_click   = ' onClick="cube_click_black('+ myCube.page_A+','+myCube.page_B+','+myCube.page_C+')"';
	}
	new_line = '<p';							
	new_line += ' STYLE="position:absolute; top:' + myCube.display_top + 'px;';	
	new_line += ' left:'+  myCube.display_left +'px">';
	figures_line = new_line + '<' +myCube.HTU_string + '>';
	figures_line += '</p>';
	
	coords_line = new_line + '{' +myCube.page_A +','+myCube.page_B+','+myCube.page_C + '}';
	coords_line += '</p>';
	
	new_line += '<img id="cube_' + myCube.HTU_string+'" src="' + myCube.image_string +'" width="50px" height="50px"';
	new_line += on_click + '>'+'</p>';
	
	
	myCube.figures_pattern = figures_line;
	myCube.coords_pattern = coords_line;
	myCube.cube_pattern = new_line;
}
function cube_draw_H_TML(myCube, sender) {
//	console.log('draw_H_TML('+myCube+','+sender);
	//console.log('myCube='+myCube+'cube_draw_H_TML page:' + myCube.page_A+','+myCube.page_B+','+myCube.page_C+'index='+index);
	new_line = '';


	//cube_draw_cube(myCube.index)
	
	accum_space = accum_space + mini_cubes[myCube.index].cube_pattern;
}
/* cube_draw_cube sets new_line to HTML of this cube */
function cube_draw_cube(index) {
	console.log('cube_draw_cube('+index+')' ,0);
	
	new_line = mini_cubes[index].cube_pattern;
}
/* get_colour called with the minicube object as parameter */

function get_colour(myCube) {
	//console.log('get_colour('+myCube.page_A+','+myCube.page_B+','+myCube.page_C+')');
//	console.log('============================');
	myCube.cube_colour = 'black';

	/* Change some black squares to white */
	/* top layer z=0 or z=2,4,6	■■■■■■■
								■□■□■□■
								■■■■■■■
								■□■□■□■ ↑
								■■■■■■■ |
								■□■□■□■ B
								■■■■■■■
								   A->
		 9 white squares pointing down
		*/
		xa = myCube.page_A;
		xb = myCube.page_B;
		xc = myCube.page_C;
//		console.log('coords:'+xa+','+xb+','+xc);
		/* words across the cubes */
		
		if ((xa == 0)) {
			//console.log('xa = 0');
			if((xb == 1) || (xb == 3) || xb == 5) {
				//console.log('xb ='+xb);
				if((xc == 1) || (xc == 3) || xc == 5) {
					myCube.cube_colour = 'green';
				}
			}
		}
		
		

	/* words behind the cubes */	
		if ((xb == 6)) {
			if((xa == 1) || (xa == 3) || (xa == 5)) {
				if((xc == 1) || (xc == 3) || (xc== 5)) {
					myCube.cube_colour = 'green';
				}
			}
		}
		
		if ((xc == 0)) {
			myCube.cube_colour = 'black';
			if ((xa == 1) || (xa == 3) || (xa == 5)) {
				if ((xb == 1) || (xb == 3) || (xb == 5)) {
					myCube.cube_colour = 'green';
				}
			} 
		}
					
		if ( (xc == 2) || (xc == 4) || (xc == 6)) {
			if ((xa == 1) || (xa == 3) || (xa == 5)) {
				if ((xb == 1) || (xb == 3) || (xb == 5)) {
					myCube.cube_colour = 'green';
				
					//change to white
					if (xa == 0) {
						console.log('nobble');
					} else {
//						console.log('164 to white');
						myCube.cube_colour = 'white';
					}
					/* Check for start of word */
				}
			}
		} else {
			if(xc != 0) {
			
		/*	
											■□■□■□■
		c= 1,3,5 slice						□□□□□□□
											■□■□■□■
											□□□□□□□ ↑
											■□■□■□■ ↑
											□□□□□□□ B
											■□■□■□■   
												  A->
			
		*/
				//console.log('c=135 slot');
				if ((xa == 1) || (xa == 3) || (xa == 5)) {
					if (myCube.cube_colour != 'green') {
						//console.log('185 to white colour='+myCube.cube_colour);
						myCube.cube_colour = 'white';
					}
				} 
					/*a=2,4,6 */
				if (myCube.cube_colour != 'green') {	
					if ((xb == 1) || (xb == 3) || (xb == 5)) {
						//console.log('192 to white');
						myCube.cube_colour = 'white';
					}
				}
			}
			if((xa == 0) & (xb == 5) & (xc == 5)) {
				alert('Initial construction');
			}
			if(myCube.cube_colour == 'green') {
	//			console.log('still green 3');
			}
		}
		return myCube.cube_colour;
		
	}
setup_A=0; setup_B=0; setup_C=0;
for (setup_C = 0; setup_C < 7; setup_C++) {
	//console.log('xx c='+setup_C)
	for(setup_B = 0; setup_B<7; setup_B++) {
		//console.log('yy setup_B ='+setup_B);
		for (setup_A = 0; setup_A < 7; setup_A++) {
			//console.log('zz setup_A = '+setup_A);
			setup_index = make_HTU_number(setup_A, setup_B, setup_C);
			//setup_index = setup_C*49 +setup_B*7 +setup_A;
//			console.log('create '+setup_index+'('+setup_A+','+setup_B +','+setup_C+')');
			mini_cubes[setup_index] = new Cube(setup_index, setup_A, setup_B, setup_C);
		}
	}
}

for(k = 0; k < mini_cubes.length; k++) {
	//console.log('mini_cubes['+k+']='+mini_cubes[k]);
}
/* initial download sequence */
// console.log('Create directions on startup');
for(j = 0; j < mini_cubes.length; j++) {
	//console.log('call set_directions j='+j+'length='+mini_cubes.length);
	set_directions(mini_cubes[j], 'cube:227');
}

function set_directions(myCube, sender) {
//	console.log('set_directions() '+myCube.index + sender);
	var a = myCube.page_A;
	var b = myCube.page_B;
	var c = myCube.page_C;

	var index = myCube.HTU_number;
	word_ok = false;
	if (myCube.cube_colour == 'white') {
		word_ok = true;
	}
	if (myCube.cube_colour == 'yellow')  {
		word_ok = true;
	}
	if (myCube.cube_colour == 'green')  {
		word_ok = true;
	}
		/* This minicube may be the start of a word */
	if (word_ok) {
//		console.log('start of word '+a+','+b+','+c);
//		console.log('before A'+a+','+b+','+c);
		if (a == 0) {
//			console.log('A=0');
			/* This might be the start of an Across */
			cube1 = mini_cubes[index+1];
			cube2 = mini_cubes[index+2];
			cube3 = mini_cubes[index+3];
			cube4 = mini_cubes[index+4];
			cube5 = mini_cubes[index+5];
			cube6 = mini_cubes[index+6];
			word_ok = true;
			/* First letter is either white, green or yellow */
			if (cube1.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube2.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube3.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube4.cube_colour != 'white'){
				word_ok = false;
			}
			if (cube5.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube6.cube_colour !='white'){
				word_ok = false;
			}
			if (word_ok) {
				myCube.direction_A = 'A';
			}
		}
//		console.log('before B'+a+','+b+','+c);
		if (b == 6) {
			//console.log('B=6');
			/* This might be the start of a Back/Behind */
//			console.log('257:back start');
			cube1 = mini_cubes[index-1*7];
			cube2 = mini_cubes[index-2*7];
			cube3 = mini_cubes[index-3*7];
			cube4 = mini_cubes[index-4*7];
			cube5 = mini_cubes[index-5*7];
			cube6 = mini_cubes[index-6*7];
			//console.log('word_colours:'+cube1.cube_colour+cube2.cube_colour+cube3.cube_colour+cube4.cube_colour+cube5.cube_colour+cube6.cube_colour);
			/* First letter is either white, green or yellow */
			word_ok = true;
			if(cube1.cube_colour != 'white'){
				word_ok = false; 
			}
			if (cube2.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube3.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube4.cube_colour != 'white'){
				word_ok = false;
			}
			if(cube5.cube_colour != 'white'){
				word_ok = false;
			}
			if (cube6.cube_colour != 'white'){
				word_ok = false;
			}
			if (word_ok) {	
				//console.log('set B to B');
				myCube.direction_B = 'B';				
			}
			else {
				console.log('b != 6');
			}
		}
		//console.log('before C'+a+','+b+','+c);
		if (c == 0) {
//			console.log('C=0');
			/* This might be the start of a Climb */
			cube1 = mini_cubes[index+1*49];
			cube2 = mini_cubes[index+2*49];
			cube3 = mini_cubes[index+3*49];
			cube4 = mini_cubes[index+4*49];
			cube5 = mini_cubes[index+5*49];
			cube6 = mini_cubes[index+6*49];
			word_ok = true;
			//console.log('index = '+index+'abc='+a+','+b+','+c);
			/* First letter is either white, green or yellow */
			if(cube1.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube2.cube_colour != 'white') {
				word_ok = false;
			}
			if(cube3.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube4.cube_colour != 'white'){
				word_ok = false;
			}
			if(cube5.cube_colour != 'white') {
				word_ok = false;
			}
			if (cube6.cube_colour != 'white'){
				word_ok = false;
			}
			if (word_ok) {
				//console.log('Cube:295:direction_C set = C');
				myCube.direction_C = 'C';				
			}	//word_ok
		}	// c== 0
		
	}	//first letter green or ywllow
	
}


function set_colour(myCube, colour, sender) {
//	console.log('set_colour('+myCube+','+colour+','+sender);
	myCube.cube_colour = colour;
//	console.log('set_colour()to '+myCube.cube_colour);
}
/* Allow or cancel list of minicube parameters */
function do_list() {
	console.log('do_list()');
	
	button = document.getElementById('list_on_tag');
	if (button.checked) {
		console.log('list unset');
		button.checked = false;
	} else {
		console.log('list set');
		button.checked = true;
	}
}
function make_HTU_both(A,B,C) {
	g_HTU_string = make_string(A) + '_'+ make_string(B) +'_' + make_string(C);
	g_HTU_number =  parseInt(C) * 49 + parseInt(B) * 7 + parseInt(A);
}
/* take an integer and divide it into 3 parts base 7 */
function make_HTU_string(A, B, C) {
	//console.log('make_HTU_string(A='+A+'B='+B+'C='+C+')');
	result = make_string(A) + '_'+ make_string(B) +'_' + make_string(C);
	//console.log('make_HTU_string(A='+A+'B='+B+'C='+C+') result='+result);
	return result;
} 
function make_HTU_number(A, B, C) {
	
	//console.log('A='+A+' parseInt(A)='+parseInt(A)+' B='+B+' parseInt(B)='+parseInt(B)+' C='+C+' parseInt(C)='+parseInt(C));
	//Use of parseInt is because 0 become a string '0' which is appended not added
	result = parseInt(C) * 49 + parseInt(B) * 7 + parseInt(A);
	return result;
}
function make_string(inp) {
	result =  ''+inp+'';
	return result;
}

/* revised routine */
function mini_draw_H_TML(fa, fb, fc) {
	console.log('mini_draw_H_TML('+fa+','+fb+','+fc+')');
	
	index = fc *49 + fb*7 + fa;
	new_line = '';

	mini_draw_cube(index, fa, fb, fc)
	
	accum_space = accum_space + new_line;
	//console.log('Mini_Draw_H_TML(Add line to accum_space');
}

/* set_letter may not be used */
function set_letter(myCube, letter) {
//	console.log('set_letter('+letter+')',2);

	myCube.cube_letter = letter;
	compute_pattern(myCube);
//	console.log('set_letter: draw_cube_loop()');
	draw_cube_loop('385');
	add_cube_space();

}
/* put the given letter into the cube identified by the HTU_number & HTU_string */
function put_letter_in_cube(lett, HTU_number) {
	//console.log('Cu: put letter in cube('+lett+','+HTU_number+')');
	
	mini_cube = mini_cubes[HTU_number];
	console.log('Cube:439 letter was '+mini_cube.cube_letter+' changed to '+lett);
	if(mini_cube.cube_letter == '_') {
		mini_cube.cube_letter = lett;
	} else {
		console.log('Attempt to change min_cube.cube_letter from '+mini_cube.cube_letter+ ' to '+lett);
	}
	compute_pattern(mini_cube);
//	console.log('put_letter_in_cube('+lett+','+HTU_number+')');
	//draw_cube_loop('397');
//	add_cube_space();
	
//	compute_pattern(mini_cube);
//	console.log('pattern computed ');
	draw_cube_loop('479*');
	//cube_draw_cube(HTU_number);
	add_cube_space();
	
	return;
	

}
/* letter_to_cube(myCube, letter) puts the given letter in the given cube 
Called by letter_pressed for 1st letter of word 
& by ? for rest of word*/
function letter_to_cube(myCube, lett) {
//	console.log('letter_to_cube('+myCube+','+lett+')');
	myCube.cube_letter = lett;
	compute_pattern(myCube);
//	console.log('letter_to_cube: draw_cube_loop');
	draw_cube_loop('420');
	add_cube_space();
	
	return;
	
}

