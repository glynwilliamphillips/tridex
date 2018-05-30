// JavaScript Document
/* cube 
create a cube using
fred = new Cube(?,1,2,3) where x coordinate is 1, y coord 2 & z coord 3
The list of Cubes is called mini_cubes[]*/

function Cube(index, a,b,d) {
	this.index = index;
	/* set up all variables to default*/
	this.page_A = a;
	this.page_B = b;
	this.page_D = d;
	/* geometry */
	this.display_top = 0;
	this.display_left = 0;
	/* directions of the words using this cube */
	this.direction_A = search_direction(index, 'A');
	if(this.direction_A > 0) {
//		console.log('index='+index+' direction_A = '+this.direction_A);
	} else {
//		console.log('index='+index+' zero ');
	}
//	console.log('direction');
	this.direction_B = '';
	this.direction_D = '';
	/* numbers that show where this cube fits in with the cube of the whole crossword */
	this.HTU_string = a + '_' + b + '_' + d;
	this.HTU_number = d*49+b*7+a;
	
	this.cube_letter = '_';
	this.cube_colour = 'unknown**';
	get_colour(this);	
	this.height_D = this.page_D * d_height;
	this.height_A = this.page_A * a_height;
	this.height_B = this.page_B * b_height;
	this.cube_pattern = 'abc'; 
	this.image_string = 'xyz';
//	console.log('xximage_string='+this.image_string);


	compute_pattern(this);
}
function compute_pattern(myCube) {
	//cube_list('compute_pattern for ',myCube);
	

	myCube.display_top = top_displacement   - myCube.height_D - myCube.height_A - myCube.height_B ;
	//console.log('top_disp='+top_displacement+'height_D='+myCube.height_D+'height_A='+myCube.height_A+'height_B='+myCube.height_B);
	myCube.display_left = left_displacement - (myCube.page_B * b_left) + (myCube.page_A * a_left);
	if (myCube.cube_letter != '_') {
		myCube.image_string = './cube_raw2/cube_raw2_'+myCube.cube_letter+'.png';
		console.log('cube:compute_pattern letter spedcified'+myCube.cube_pattern);
		console.log('cube:image_string 1 ='+myCube.image_string);
		/**************************/

	} else {
		myCube.image_string = './cube_raw2/cube_raw2_'+myCube.cube_colour+'.png';
	}
	
	on_click = '';
	if(myCube.cube_colour == 'white') {
		on_click = ' onClick="cube_click_white('+xa+','+xb+','+xd+')"';
	} else {		
		on_click   = ' onClick="cube_click_black('+ myCube.page_A+','+myCube.page_B+','+myCube.page_D+')"';
//		console.log('***myCube.page_A='+myCube.page_A+'myCube.page_B='+myCube.page_B+'myCube.page_D='+myCube.page_D);
	}
//	console.log('on_click='+on_click);
	new_line = '<p';							
	new_line += ' STYLE="position:absolute; top:' + myCube.display_top + 'px;';	
	new_line += ' left:'+  myCube.display_left +'px">';
	figures_line = new_line + '<' +myCube.HTU_string + '>';
	figures_line += '</p>';
	
	coords_line = new_line + '{' +myCube.page_A +','+myCube.page_B+','+myCube.page_D + '}';
	coords_line += '</p>';
	
	new_line += '<img id="cube_' + myCube.HTU_string+'" src="' + myCube.image_string +'" width="50px" height="50px"';
	new_line += on_click + '>'+'</p>';
	
	
	myCube.figures_pattern = figures_line;
	myCube.coords_pattern = coords_line;
	myCube.cube_pattern = new_line;
	//console.log('myCube='+myCube.HTU_string);
	//console.log('image_string 2 ='+myCube.image_string);
//	console.log('cube_pattern ='+myCube.cube_pattern);
}
function cube_draw_H_TML(myCube) {
	//console.log('cube_draw_H_TML page:' + myCube.page_A);
	
	new_line = '';

	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');
	if(numbers_tag.checked) { 
		mini_draw_numbers(index, fa, fb, fd);
	} else {
		if(coords_tag.checked) {
			mini_draw_coords(index, fa, fb, fd);
		} else {
			cube_draw_cube(myCube.index)
		}
	}
	accum_space = accum_space + new_line;
	//console.log('Mini_Draw_H_TML(Add line to accum_space');
	

}
function cube_draw_cube(index) {
	//console.log('index='+index);
	new_line = mini_cubes[index].cube_pattern;
//	console.log('cube_pattern='+mini_cubes[index].cube_pattern);
}
function get_colour(myCube) {
		//console.log('get_colour****');
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
		xd = myCube.page_D;
		if ((xd == 0) || (xd == 2) || (xd == 4) || (xd == 6)) {
			//console.log('0246 slot');
	
			if ((xa == 1) || (xa == 3) || (xa == 5)) {
				if ((xb == 1) || (xb == 3) || (xb == 5)) {
					//change to white
					//console.log('[236:minicube white at '+xa+','+xb+','+xd);
					myCube.cube_colour = 'white';
				}
			}
		} else {
		
	/*	
										■□■□■□■
	d= 1,3,5 slice						□□□□□□□
										■□■□■□■
										□□□□□□□ ↑
										■□■□■□■ ↑
										□□□□□□□ B
										■□■□■□■   
											  A->
		
	*/
			//console.log('d=135 slot');
			if ((xa == 1) || (xa == 3) || (xa == 5)) {
				myCube.cube_colour = 'white';
			} 
				/*a=0,2,4,6 */
				
			if ((xb == 1) || (xb == 3) || (xb == 5)) {
					//change to white
				myCube.cube_colour = 'white';
			}
		}
		if((xa == 0) & (xb == 5) & (xd == 5)) {
			alert('Initial construction');
		}
		//console.log('Leaving myCube.cube_colour='+myCube.cube_colour);
		return myCube.cube_colour;
		
		return 'white';
	}


setup_A=0; setup_B=0; setup_D=0;
for (setup_D = 0; setup_D < 7; setup_D++) {
	//console.log('xx d='+setup_D)
	for(setup_B = 0; setup_B<7; setup_B++) {
		//console.log('yy setup_B ='+setup_B);
		for (setup_A = 0; setup_A < 7; setup_A++) {
			//console.log('zz setup_A = '+setup_A);
			setup_index = setup_D*49 +setup_B*7 +setup_A;
			mini_cubes[setup_index] = new Cube(setup_index, setup_A, setup_B, setup_D);
			if(setup_index == 270) {
				console.log('At 270 mini_cubes[setup_index]='+mini_cubes[setup_index]);
			}
		}
	}
}
function set_colour(myCube, colour) {
	myCube.cube_colour = colour;
}
function set_draw_coords() {
	button = document.getElementById('draw_coords_tag');
	if (button.checked) {
		console.log(' coords set');
		button.checked = false;
	} else {
		console.log('coords unset');
		button.checked = true;
	}
}
function set_draw_numbers() {
	button = document.getElementById('draw_numbers_tag');
	if (button.checked) {
		console.log('numbers set');
		button.checked = false;
	} else {
		console.log('numbers unset');
		button.checked = true;
	}
}
/* Allow or cancel list of minicube parameters */
function do_list() {
	button = document.getElementById('list_on_tag');
	if (button.checked) {
		console.log('list unset');
		button.checked = false;
	} else {
		console.log('list set');
		button.checked = true;
	}
}
/* take an integer and divide it into 3 parts base 7 */
function make_HTU_string(A, B, D) {
	//console.log('make_HTU_string(A='+A+'B='+B+'D='+D+')');
	result = make_string(A) + make_string(B) + make_string(D);
	//console.log('make_HTU_string(A='+A+'B='+B+'D='+D+') result='+result);
	return result;
} 
function make_HTU_number(A, B, D) {
	result = D * 49 + B * 7 + A;
	return result;
}


/* revised routine */
function mini_draw_H_TML(fa, fb, fd) {
	alert('mini_draw_H_TML('+fa+','+fb+','+fd+')');
	
	index = fd *49 + fb*7 + fa;
	new_line = '';

	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');
	if(numbers_tag.checked) { 
		mini_draw_numbers(index, fa, fb, fd);
	} else {
		if(coords_tag.checked) {
			mini_draw_coords(index, fa, fb, fd);
		} else {
			mini_draw_cube(index, fa, fb, fd)
		}
	}
	accum_space = accum_space + new_line;
	//console.log('Mini_Draw_H_TML(Add line to accum_space');
}
/* cube_list lists on the console the values of the given cube */
function cube_list(title, list_cube) {
	signal = false;
	list_tag = document.getElementById('list_on_tag');
	if (list_tag) {
		signal = true;
	}
//	console.log('list_tag='+list_tag);
	
	if(signal) { 
		console.log('**********************************');
		console.log(title);
		console.log('Index:'+list_cube.index);
		console.log('page_A:'+list_cube.page_A +'page_B:'+list_cube.page_B +'page_D:' +list_cube.page_D);
	
		console.log('display_top:'+list_cube.display_top +'display_left:'+list_cube.display_left);
		console.log('direction_A:'+list_cube.direction_A + 'direction_B:'+list_cube.direction_B + ' direction_D:' + list_cube.direction_D);
		console.log('HTU_string: '+list_cube.HTU_string);
		console.log('HTU_number: '+list_cube.HTU_number );
		
		console.log('cube_letter: '+list_cube.cube_letter );
		console.log('cube_colour: '+list_cube.cube_colour);
		console.log('D*height: '+list_cube.height_D );
		console.log('A*height: '+list_cube.height_A );
		console.log('B*height '+list_cube.height_B );
		console.log('cube_pattern: '+list_cube.cube_pattern ); 
		console.log('image_string: '+list_cube.image_string);
	}
}
function set_letter(myCube, letter) {
	myCube.cube_letter = letter;
	compute_pattern(current_minicube);
	draw_cube_loop();
	add_cube_space();

}
/* Creating this minicube, we need to work out in which direction
 a word could pass (Across, Back, or Down.
 We will find this info from the list of word_locations */
function search_direction(myIndex, myLetter){
	if(myLetter == 'A') {
		//console.log('searching for direction Across myIndex='+myIndex);
		across = 0;
		//Look to see if this is a start of word location
		for (i = 0; i < words_across.length;i += 7) {
			//console.log(i+' try '+words_across[i]+','+words_across[i+1]+','+words_across[i+2]+','+words_across[i+3]+','+words_across[i+4]+','+words_across[i+5]+','+words_across[i+6]);
			if (words_across[i] == myIndex) {
//				console.log('***match0 '+myIndex);
				across = 10;
				j = i;
			}
			if (words_across[i+1] == myIndex) {
//				console.log('***match1 '+myIndex);
				across = 11;
				j = i;
			}
			if (words_across[i+2] == myIndex) {
//				console.log('***match2 '+myIndex);
				across = 12;
				j = i;
			}
			if (words_across[i+3] == myIndex) {
//				console.log('***match3 '+myIndex);
				across = 13;
				j = i;
			}
			if (words_across[i+4] == myIndex) {
//				console.log('***match4 '+myIndex);
				across = 14;
				j = i;
			}
			if (words_across[i+5] == myIndex) {
//				console.log('***match5 '+myIndex);
				across = 15;
				j = i;
			}
			if (words_across[i+6] == myIndex) {
//				console.log('***match6 '+myIndex);
				across = 16;
				j = i;
			}
		}
		if(across != 0) {
			//console.log('direction_A='+across);
//			console.log(across+' match '+words_across[j]+','+words_across[j+1]+','+words_across[j+2]+','+words_across[j+3]+','+words_across[j+4]+','+words_across[j+5]+','+words_across[j+6]);

		}
		return across;
	}
	if(myLetter == 'B') {
	}
	if(myLetter == 'D') {
	}
}
	