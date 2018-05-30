// JavaScript Document
//minicube.js
/*
A mini_cube has the following variables

index HTU number of the mini cube
cube_pattern is pattern to draw it on the page
figures_pattern to draw it with the number of the minicube
coords_H_HTML similar
page_A division of HTU
page_B
page_D
HTU_string
HTU_number
display_top
display_left		
cube_letter
cube_colour
a_direction
b_direction
d_direction

and the following methods:-
get_colour(xa,xb,xd)


The list of mini_cubes is called mini_cubes[]

Because the main cube is made up of 7 x 7 x 7 mini_cubes.
A mini_cube has a string of HTML to draw it on the page.
It has coordinates on the display page.
It has a colour: black for no letter there; yellow for in progress and white for blank or a letter
It has links to another object which is the Word object.
If white it has a direction – but maybe not as the word would define this!
To  create it just type 
fred = mini_cube(123) where 1 is the a, 2 the b & 3 the d coordinates.
An array of mini_cubes[0..I777] called mini_cubes contains data for each mini_cube
functions applied to a mini_cube are:-
	mini_draw_H_TML(a, b, d)
	mini_set_colour(colour)
	mini_set_image(image name)
	mini_set_direction('a'/'b'/'d' and maybe'ab'?)
	test = true;

*/

/* constructor mini_cube(number from 0 to 6*49+6*7+6) */
function mini_cube(index_in) {
	//console.log('minicube constructor '+index_in);
	if( index_in == 342) {
		console.log('highest');
	}
	this.index = index_in;
	/* divide by 7 to get remainder A */
	new_A = index_in % 7;			//0.0000001
	
	B_and_D = (index_in - new_A)/7;
	
	new_B = B_and_D % 7;
	new_D = (B_and_D - new_B) / 7;
	

	this.page_A = new_A;
	this.page_B =  new_B;
	this.page_D = new_D;
	//console.log('page_D='+this.page_D);
	this.HTU_number = index_in;
	this.HTU_string = make_HTU_string(this.page_A, this.page_B, this.page_D);
	this.display_top = 99;
	this.display_left = left_displacement;	//defined in DATA3.js
	this.cube_letter = '_';

	this.cube_colour = get_colour(this.page_A,this.page_B,this.page_D);
	/* cube directions could be in up to 3 ways:
	a_direction if there is a word with b & d constant and a between 0 & 6
	b_direction if there is a word with a & d constant and b between 0 & 6
	d_direction if there is a word with a & b constant and d between 0 & 6
	
	a_done/b_done/d_done means that the word has been set in this direction
	*/
	
	this.a_done = -1;
	this.b_done = -1;
	this.d_done = -1;
	
	this.a_direction = -1;
	this.b_direction = -1;
	this.d_direction = -1;

	xa = this.page_A;
	xb = this.page_B
	xd = this.page_D;
	/* xa,xb,xd are just for testing */
	coords = '('+xa+','+xb+','+xd+')';
		
	
	new_line = '';
	
	htd = xd * d_height;
	hta = xa * a_height;
	htb = xb * b_height; 
	
	temp = xd*49+xb*7+xa;
	this.display_top = top_displacement   - htd - hta - htb ;
	this.display_left = left_displacement - (xb * b_left) + (xa * a_left);
	
	console.log('[110minicube');
	H_colour_string = './cube_raw2/cube_raw2_'+this.cube_colour+'.png';
	
	on_click = '';
	if(this.cube_colour == 'white') {
		on_click = ' onClick="cube_click_white('+xa+','+xb+','+xd+')"';
	} else {		
		on_click   = ' onClick="cube_click_black('+ xa+','+xb+','+xd+')"';
	}
	new_line = '<p';							
	new_line += ' STYLE="position:absolute; top:' + this.display_top + 'px;';	
	new_line += ' left:'+  this.display_left +'px">';
	figures_line = new_line + '<' +this.HTU_string + '>';
	figures_line += '</p>';
	
	coords_line = new_line + '{' +this.page_A +','+this.page_B+','+this.page_D + '}';
	coords_line += '</p>';
	
	new_line += '<img id="cube_' +this.HTU_string+'" src="' + H_colour_string +'" width="50px" height="50px"';
	new_line += on_click + '>'+'</p>';
	
	
	this.figures_pattern = figures_line;
	this.coords_pattern = coords_line;
	this.cube_pattern = new_line;
	
	/* By this time the program has the HTML to produce this mini cube in new_line */
	
	
}

/* end of mini_cube constructor **/

function set_colour(colour) {
	console.log('set colour for this minicube object');
}



/* declare array of objects */
console.log('create '+I777+ 'mini_cubes numbered 0 to '+(I777-1));
for (i = 0; i < I777; i++) {
	//console.log('201:i='+i);
	mini_cubes[i] = new mini_cube(i);

}


/* take the HTML from the given mini_cubes and add it to that in cube_space */

/* revised routine */
function mini_draw_H_TML(fa, fb, fd) {
	//console.log('mini_draw_H_TML('+fa+','+fb+','+fd+')');
	
	index = fd *49 + fb*7 + fa;
	new_line = '';
	if(mini_cubes[index].cube_colour == 'white') {
		console.log('[179 white');
	} else {
		console.log('[181'+mini_cubes[index].cube_colour);
	}

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
	console.log('Mini_Draw_H_TML(Add line to accum_space');
}

function mini_draw_numbers(index, na, nb, nd) {
	console.log('[198:mini_draw_numbers');
	if(mini_cubes[index].cube_colour == 'white') {
		new_line = mini_cubes[index].figures_pattern;
//	} else {
//		new_line = '■';
	}
}
function mini_draw_coords(index, ca,cb,cd) {
	console.log('[206:mini_draw_coords');
	if(mini_cubes[index].cube_colour == 'white') {
		new_line = mini_cubes[index].coords_pattern;
	}
}
function mini_draw_cube(index,xa,xb,xd) {
	//console.log('index='+index);
	//console.log('269:mini_cubes{'+index+')='+mini_cubes[index]);
	new_line = mini_cubes[index].cube_pattern;
}

function get_colour(xa,xb,xd) {
	cube_colour = 'black';
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
	if ((xd == 0) || (xd == 2) || (xd == 4) || (xd == 6)) {
 		//console.log('0246 slot');

		if ((xa == 1) || (xa == 3) || (xa == 5)) {
			if ((xb == 1) || (xb == 3) || (xb == 5)) {
				//change to white
				console.log('[236:minicube white at '+xa+','+xb+','+xd);
				cube_colour = 'white';
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
			cube_colour = 'white';
		} 
			/*a=0,2,4,6 */
			
		if ((xb == 1) || (xb == 3) || (xb == 5)) {
				//change to white
			cube_colour = 'white';
		}
	}
	if((xa == 0) & (xb == 5) & (xd == 5)) {
		alert('Initial construction');
	}
	return cube_colour;
}
function show_cube_space() {
	console.log('show_cube_space()');
	temp = document.getElementById('cube_space');
	len = temp.innerHTML.length;
	console.log('space('+len+')='+temp.innerHTML);

}
function set_draw_numbers() {
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');
	coords_tag.checked = false;
	if(numbers_tag.checked) {
		numbers_tag.checked = false
	} else {
		numbers_tag.checked = true;	
	}
}
/* set_draw_coords */
function set_draw_coords() {
	numbers_tag = document.getElementById('draw_numbers_tag');
	coords_tag = document.getElementById('draw_coords_tag');
	numbers_tag.checked = false;
	if(coords_tag.checked) {
		coords_tag.checked = false
	} else {
		coords_tag.checked = true;	
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

//take a 1 digit number and make it a string
function make_string(inp) {
//	console.log('make_string('+inp+')');
	switch(inp) {
		case 0:
			return '0';
		case 1:
			return '1';
		case 2:
			return '2';
		case 3:
			return '3';
		case 4:
			return '4';
		case 5:
			return '5';
		case 6:
			return '6';
		case 7:
			return '7';
		case 8:
			return '8';
		case 9:
			return '9';
		alert('Error routine make_string cannot cope with '+inp);
	}
}
/* given a minicube take all the parameters like colour and make
 the HTML that would print that cube */
function make_cube_pattern(minicube) {
	minicube.cube_pattern = ''; //start with blank
		new_line = '<p';							
	new_line += ' STYLE="position:absolute; top:' + this.display_top + 'px;';	
	new_line += ' left:'+  this.display_left +'px">';
	figures_line = new_line + '<' +this.HTU_string + '>';
	figures_line += '</p>';
	
	coords_line = new_line + '{' +this.page_A +','+this.page_B+','+this.page_D + '}';
	coords_line += '</p>';
	
	new_line += '<img id="cube_' +this.HTU_string+'" src="' + H_colour_string +'" width="50px" height="50px"';
	new_line += on_click + '>'+'</p>';
	
	minicube.cube_pattern = new_line;
	
}
//current_HTU = new make_HTU(1,2,3);

