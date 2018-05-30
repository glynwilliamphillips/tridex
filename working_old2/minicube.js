// JavaScript Document
//minicube.js
/*
A mini_cube has the following variables

index HTU number of the mini cube
HTML_string to draw it on the page
page_A division of HTU
page_B
page_D
display_height
display_left		
cube_letter
cube_colour
a_direction
b_direction
d_direction

The list of mini_cubes is called mini_cubes[]

Because the main cube is made up of 7 x 7 x 7 mini_cubes, I use OO to describe the mini_cubes.
A mini_cube has a string of HTML to draw it on the page.
It has coordinates on the display page.
It has a colour: black for no letter there; yellow for in progress and white for blank or a letter
It has links to another object which is the Word object.
If white it has a direction – but maybe not as the word would define this!
To  create it just type 
fred = mini_cube(123) where 1 is the a, 2 the b & 3 the d coordinates.
An array of mini_cubes[0..I777] called mini_cubes contains data for each mini_cube
functions applied to a mini_cube are:-
mini_draw_HTML(index)
mini_set_colour(colour)
mini_set_image(image name)
mini_set_direction('a'/'b'/'d' and maybe'ab'?)
do_HTML is a test routine to do something with the HTML
	test = true;

*/


function mini_cube(index_in) {
	this.index = index_in;
	this.HTML_string = '<p>new</p>';
	gash = index_in;				//1
	num1 = index_in / 49;			//0.0000001
	rem = index_in % 49;			//1
	last2 = rem;					//1
	//last2 is now the last 2 digits
	rem2 = last2 % 7;				//0.000001
	middle = (rem -rem2)/7;

	this.page_A = (index_in - last2) / 49;
	this.page_D =  rem2;
	this.page_B = middle;
	//console.log('page_D='+this.page_D);
	
	this.display_height = 99;
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
	//console.log('xd='+xd);
	/* xa,xb,xd are just for testing */
	coords = '('+xa+','+xb+','+xd+')';
		
	
	new_line = '';
	
	//htd = (6-xd) * d_height - 6*d_height;
	//console.log('htd='+htd+'xd='+xd);
	htd = xd * d_height;
	hta = xa * a_height;
	htb = xb * b_height;
	this.display_height = top_displacement   - htd - hta - htb ;

	//console.log('display_height['+index_in+']='+this.display_height+'htd='+htd);

	this.display_left = left_displacement - (xb * b_left) + (xa * a_left);

	//console.log(xa+','+xb+','+xd+' at left='+this.display_left+' height='+this.display_height);

	H_colour_string = './cube_raw2/cube_raw2_'+this.cube_colour+'.png';
	
	on_click = '';
	if(this.cube_colour == 'white') {
		on_click = ' onClick="cube_click_white('+xa+','+xb+','+xd+')"';
	} else {
		
		on_click   = ' onClick="cube_click_black('+ xa+','+xb+','+xd+')"';
	}
	/* decide the directions of the words from this cube */
	if ((xd == 0) || (xd == 2) || (xd == 4) || (xd ==6)) {
		/* top layer or similar pattern z=0 or z=2,4,6
						 	■■■■■■■
							■□■□■□■
							■■■■■■■
							■□■□■□■ ↑
							■■■■■■■ |
							■□■□■□■ B
							■■■■■■■
							   A->
	 	9 white squares pointing down
		*/	
		if ( (xa == 1) || (xa == 3) || (xa == 5) ) {
			if( (xb == 1) || (xb == 3) || (xb == 5) ) {
				/* white square pointing down */
				this.d_direction = xd;
			}
		}
	} else {
		/* 2nd and alternate rows
		
							■□■□■□■
d= 1,3,5 slice				□□□□□□□
							■□■□■□■
							□□□□□□□ ↑
							■□■□■□■ ↑
							□□□□□□□ B
							■□■□■□■   
							  A->
	
*/			  
		if ( (xa == 1) || (xa == 3) || (xa == 5) ) {
			if( (xb == 1) || (xb == 3) || (xb == 5) ) {
				/* white square pointing down */
				this.d_direction = xd;
			}
		}
		if( (xb == 1) || (xb == 3) || (xb == 5) ) {
			this.a_direction = xa;
		}
		if ( (xa ==1) || (xa == 3) || (xa == 5) ) {
			this.b_direction = xb;
		}
	}
	
	
	new_line = '<p';							
	//<p STYLE="position:absolute; top 950ish px
	new_line += ' STYLE="position:absolute; top:' + this.display_height + 'px;';	
	//<p STYLE="position:absolute; top 950ish px : 123px
	new_line += ' left:'+  this.display_left +'px">';
	//console.log('='+this.display_left);	
	new_line += '<img id="cube_' +xa+xb+xd+'" src="' + H_colour_string +'" width="50px" height="50px"';
	
	new_line += on_click + '>'+'</p>';
	this.HTML_string = new_line;
	set_space('abc');
	/* By this time the program has the HTML to produce this mini cube in new_line */
	
	this.cube_HTML = new_line;
}

/* end of mini_cube constructor **/

/* declare array of objects */

for (i = 0; i < I777; i++) {
	//console.log('make mini_cubes['+i+']');
	mini_cubes[i] = new mini_cube(i);
}

/* take the HTML from the given mini_cubes and add it to that in cube_space */
function mini_draw_HTML(index) {
	//console.log('mini_cubes['+index+']='+mini_cubes[index]);
	new_line = mini_cubes[index].cube_HTML;
	//console.log('index'+index+'='+mini_cubes[index].page_A+','+mini_cubes[index].page_B+','+mini_cubes[index].page_D);
	//console.log('line='+new_line);
	//console.log('height '+mini_cubes[index].display_height+' left '+mini_cubes[index].display_left);
	a = mini_cubes[index].page_A;
	b = mini_cubes[index].page_B;
	d = mini_cubes[index].page_D;
	odd = d + 7*b + 49*a;
	if(index == odd) {
	} else {
		alert('odd wrong '+odd+' index='+index);
	}
	accumulated_cube_space = accumulated_cube_space + new_line;
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
				//console.log('white at '+xa+','+xb+','+xd);
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
	return cube_colour;
}
function show_cube_space() {
	console.log('show_cube_space()');
	temp = document.getElementById('cube_space');
	len = temp.innerHTML.length;
	console.log('space('+len+')='+temp.innerHTML);

}
