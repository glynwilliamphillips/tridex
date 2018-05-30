// JavaScript Document
//Draw whole cube

//variables & strings prefixed with H_ are HTML

started = false;
	
	H_colour_string = './cube_raw2/cube_raw2_black.png';
	
	gathered = '';
	gathered = '';
 	a_value = '0';
	b_value = '0';
	d_value = '0';
	
		/* This is in DATA.js
		top_displacement = 950;   //pixels
		left_displacement = 400;
		d_height = -25;
		b_height = -10;
		a_height = -10;
		b_left = -20;
		a_left = +20;
	*/
	console.log('STARTING');
	collate_objects_HTML();
	
	gathered = collate_minicubes_HTML();
//	collate_objects_HTML();

/* used */
function collate_minicubes_HTML() {
	
	console.log('collate_minicubes_HTML');

	level_gathered = '';
	//console.log('before cube_letter[5]='+cube_letter[5]);

	for(d_value=0; d_value<=6; d_value++) {
		
		for (b_value = 6; b_value>= 0; b_value--) {
			
			for(a_value=0; a_value <= 6; a_value++) {

				make_HTU(a_value, b_value,d_value);
				cube_colour_saved = 'K';
				
				if (cube_colour[HTU_number] == 'A') {
					cube_colour_saved = cube_colour[HTU_number];
				}
				cube_colour[HTU_number] = 'black';
				cube_letter[HTU_number] = '_';
				
				/* work through the z layere to see if it is a checked(dotted) or lined layer */
				test_cube_white(HTU_number);
				if (cube_colour_saved == 'A') {
					//cube_colour[HTU_number] = cube_colour_saved;
				}
				temp = gather_minicube_HTML(HTU_number);
				
				level_gathered += temp;
			
			}
		}
	}
	return level_gathered;
	alert('level_gathered ='+level_gathered);
	
}
function collate_objects_HTML() {
	
	console.log('collate_objects_HTML');

	level_gathered = '';
	//console.log('before cube_letter[5]='+cube_letter[5]);
	for ( i = 0; i < I777; i++) {
		mini_cubes[i].HTML_string = gather_minicube_HTML(i);	
	}
	console.log('level_gathered ='+level_gathered);
	
}

/* work through the z layere to see if it is a checked(dotted) or lined layer 
test_cube_white() to work out the pattern of white minicubes amongst the black

sets up: 
cube_HTML[] the HTML to set up the mini cubes
cube_colour to 'black' or 'white'
*/
/* used */
function test_cube_white(HTU_number) {
	//	console.log('test_cube_white');
	if ((HTU_d == 0 ) || (HTU_d == 2) || (HTU_d == 4) || (HTU_d == 6)) {
		/* checked layer */ 
		if ((HTU_b == 1) && (HTU_a == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 3) && (HTU_a == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 5) && (HTU_a == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 1) && (HTU_a == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 3) && (HTU_a == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 5) && (HTU_a == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 1) && (HTU_a == 5)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 3) && (HTU_a == 5)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 5) && (HTU_a == 5)) {
			cube_colour[HTU_number] = 'white';
		}
	} else {
		/* lined layer */
		if ((HTU_b == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_b == 5)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_a == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_a == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_a == 5)) {
			cube_colour[HTU_number] = 'white';
		}
		
	}//end lined layer choice
}


/* given a single digit number make a string of it */

function get_string(figure) {
	console.log('get_string()');
	if(figure == 0) {
		return '0';
	}
	if(figure == 1) {
		return '1';
	}
	if(figure == 2) {
		return '2';
	}
	if(figure == 3) {
		return '3';
	}
	if(figure == 4) {
		return '4';
	}
	if(figure == 5) {
		return '5';
	}
	if(figure == 6) {
		return '6';
	}
	if(figure == 7) {
		return '7';
	}
	if(figure == 8) {
		return '8';
	}
	if(figure == 9) {
		return '9';
	}
}


/* gather_level_a works out all the HTML to draw the level x & stores it in gathered to be drawn later 
Basically it concatenates all the HTML for each cube in the level*/
function gather_level_a(temp_a) {
	if (started) {
		console.log('gether_level_x()');
	}
	for (y = 6; y >= 0; y--) {
		for (z = 0; z <=6; z++) {
			make_HTU(temp_a,y,z);
			gather_minicube_HTML(HTU_number)
			gathered += cube_HTML[HTU_number];
		}
	}
}
function gather_level_b(temp_b) {
	if (started) {
		console.log('gether_level_y('+temp_b+')');
	}
	for (x = 6; x >= 0; x--) {
		for (z = 0; z <=6; z++) {
			//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
			make_HTU(x,temp_b,z);
			gather_minicube_HTML(HTU_number);
			gathered += cube_HTML[HTU_number];
		}
	}
	return gathered;
}
/* called from draw_cube_space_d() which is called from button on screen 
Gather the HTML for this horizontal layer
save it in cube_HTML[HTU_number]
*/

function gather_level_d(temp_d) {
	if (started) {
		console.log('gather_level_d()');
	}
	for (x = 6; x >= 0; x--) {
		for (y = 6; y >=0; y--) {
			//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
			//console.log('x='+x+'y='+y+'z='+temp_d);
			make_HTU(x,y,temp_d);
			gather_minicube_HTML(HTU_number);
			gathered += cube_HTML[HTU_number];
		}
	}
	return;
}


/* Given the a, b & d in the HTU_number prepare the HTML to draw the minicube 
It assumes slice_direction & answer_direction
 */
/* used */
function gather_minicube_HTML(HTU_number) {
//	console.log('gather_minicube_HTML('+'HTU_number+')');
	cube_HTML[HTU_number] = '';
	new_line = '';
	height_abd[HTU_number] = top_displacement+ HTU_d*d_height + HTU_b * b_height + HTU_a * a_height;
	left_abd[HTU_number] = left_displacement+HTU_b*b_left + HTU_a*a_left;
	H_colour_string = './cube_raw2/cube_raw2_'+cube_colour[HTU_number]+'.png';
	
	if(cube_letter[HTU_number] != '_') {
		//console.log('match cube_letter not blank HTU='+HTU_number);
		H_colour_string = './cube_raw2/cube_raw2_'+cube_letter[HTU_number]+'.png';
	}
// do on_click
	on_click = '';
	if(cube_colour[HTU_number] == 'white') {
		on_click = ' onClick="cube_click_white('+HTU_a+','+HTU_b+','+HTU_d+')"';
	} else {
		
		on_click   = ' onClick="cube_click_black('+ HTU_a+','+HTU_b+','+HTU_d+')"';
	}
// done on_click

	new_line = '<p';							
	//<p STYLE="position:absolute; top 950ish px
	new_line += ' STYLE="position:absolute; top:' + height_abd[HTU_number] + 'px;';	
	//<p STYLE="position:absolute; top 950ish px left: 123px
	new_line += ' left:'+  left_abd[HTU_number] +'px">';
	//<p STYLE="position:absolute; top 950ish px left: 123px <img id="cube_abd" src='??' width=50px height=50px align='left'
	
	new_line += '<img id="cube_' +HTU_a+HTU_b+HTU_d+'" src="' + H_colour_string +'" width="50px" height="50px" align="left"';
	
	new_line += on_click + '>'+'</p>';

	if (cube_HTML[HTU_number] == '') {
		cube_HTML[HTU_number] = new_line;
	} else {
		new_line = cube_HTML[HTU_number];
	}
	if(started) {
		temp = document.getElementById('cube_space');
		alert('temp.innerHTML ='+temp.innerHTML);
		temp.innerHTML = temp.innerHTML + new_line;
		started = false;
	}
	console.log('new_line'+new_line);
	console.log(object_gather_HTML(HTU_number));
	return new_line;
	
}
function object_gather_HTML(HTU_number) {
	object = mini_cubes[HTU_number];
	return object.HTML_string;
}

function set_space() {
		//console.log('onclick='+on_click);
	gash = document.getElementById("z0");
	console.log('gash='+gash);
	temp_fred = document.getElementById("cube_space");
	console.log('temp_fred='+temp_fred);
	console.log('temp_fred.inner='+temp_fred.innerHTML);
	cube_space_on = true;
}