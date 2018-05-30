// JavaScript Document
//Draw whole cube
/* 
function collate_minicubes_HTML() {
function test_cube_white(HTU_number) {
function draw_cube_space(gathered){
function clear_cube_space(){
function clear_cube_HTML() {
function get_string(figure) {
function gather_level_z(z_value) {
function gather_minicube_HTML(HTU_number) {
function draw_cube_space_x(x_value) {
function draw_cube_space_y(y_value) {
function draw_cube_space_z(z_value) {
function gather_level_y(temp_y) {
zz function draw_cube_again() {
function draw_slice(xyz, value) {
function draw_x_slice(xyz, value) {
function draw_y_slice(xyz, value) {
function draw_z_slice(xyz, value) {
function gather_minicube_HTML(HTU_number) {

	
*/
//variables & strings prefixed with H_ are HTML
/*
	H_open_p = '<p ';	//open para
    H_style1 	= ' STYLE="position:absolute; top:';
    H_style_px 	= 'px;';
	H_style_left = ' left:';
	H_style3 = 'px">';
	H_img1 = '<img id="cube_';
	//debug_img1 = 'img id="cube_';
   	H_img2 = '" src="';    
	H_affix1 = '" width="50px" height="50px" align="left"';
	H_cube_click1 = ' onClick="cube_click(';
	H_cube_click1B = ' onClick="cube_click_black(';
	H_comma = ',';
	H_close_paren = ')"';
	H_G_than = '>';	//Greater than (close style)
	H_L_than = '<';	//Less than (open style)
	H_end_para = '</p>';
	*/
	
	H_colour_string = '../cube_raw2/cube_raw2_black.png';
	
	gathered = '';
	clear_cube_HTML();
	gathered = '';
 	x_value = '0';
	y_value = '0';
	z_value = '0';
	/* This is in DATA.js
	top_displacement = 950;   //pixels
	left_displacement = 400;
	z_height = -25;
	y_height = -10;
	x_height = -10;
	y_left = -20;
	x_left = +20;
	*/
	//console.log('draw_base:one');
	gathered = collate_minicubes_HTML();
	//alert('draw_base:two');
	draw_cube_space(gathered);
	//alert('draw_base:twoA');
	//HTML_to_info_box('64:'+gathered);
	//alert(gathered);
	//alert('draw base:three');
	/*
	for (z_value = 0; z_value <= 6; z_value++) {
		gathered = gather_level_z(z_value);
		//console.log('d_b: z='+z_value);
	}
	temp = document.getElementById("cube_space");
	temp.innerHTML = gathered;
	*/
 //end  draw_base
//console.log('draw_base2: done');
/* work out the HTML for each of the minicubes

uses: 
make_HTU() calculate the Hundred,Tens & Unit calues 000 up to 666
test_cube_white() to work out the pattern of white minicubes amongst the black
 
sets up: 
cube_HTML[] the HTML to set up the mini cubes
cube_colour to 'black' or 'white'
cube_letter to _ (underscore)

*/

function collate_minicubes_HTML() {
//	console.log('collate_minicubes_HTML');
	level_gathered = '';
	//console.log('before cube_letter[5]='+cube_letter[5]);

	for(z_value=0; z_value<=6; z_value++) {
		//console.log('gather z ='+z_value);
		for (y_value = 6; y_value>= 0; y_value--) {
			//console.log('gather y ='+y_value);
			for(x_value=0; x_value <= 6; x_value++) {
				//console.log('gather x ='+x_value);
				//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
				make_HTU(x_value, y_value,z_value);
				//console.log('HTU made');
				cube_colour_saved = 'K';
				if (cube_colour[HTU_number] == 'A') {
					console.log('c_c['+HTU_number+']='+cube_colour[HTU_number]);
					cube_colour_saved = cube_colour[HTU_number];
				}
				cube_colour[HTU_number] = 'black';
				//console.log('\nAA cube_colour['+HTU_number+']='+cube_colour[HTU_number])
				cube_letter[HTU_number] = '_';
				//console.log('black');		
				/* work through the z layere to see if it is a checked(dotted) or lined layer */
				test_cube_white(HTU_number);
				//console.log('\nAB cube_colour['+HTU_number+']='+cube_colour[HTU_number])
				if (cube_colour_saved == 'A') {
					//cube_colour[HTU_number] = cube_colour_saved;
				}
				temp = gather_minicube_HTML(HTU_number);
				//console.log('101:length = '+temp.length);
				level_gathered += temp;
				//alert('here'+temp);
				//console.log('minicube_gathered'+level_gathered);
				//alert('after');	
			
			}
		}
	}
	//console.log('leaving'+gathered);
	return level_gathered;
	alert('after cube_letter[5]='+cube_letter[5]);
	
}

/* work through the z layere to see if it is a checked(dotted) or lined layer 
test_cube_white() to work out the pattern of white minicubes amongst the black

sets up: 
cube_HTML[] the HTML to set up the mini cubes
cube_colour to 'black' or 'white'
*/
function test_cube_white(HTU_number) {
//	console.log('test_cube_white');
	if ((HTU_z == 0 ) || (HTU_z == 2) || (HTU_z == 4) || (HTU_z == 6)) {
		/* checked layer */ 
		if ((HTU_y == 1) && (HTU_x == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 3) && (HTU_x == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 5) && (HTU_x == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 1) && (HTU_x == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 3) && (HTU_x == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 5) && (HTU_x == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 1) && (HTU_x == 5)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 3) && (HTU_x == 5)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 5) && (HTU_x == 5)) {
			cube_colour[HTU_number] = 'white';
		}
	} else {
		/* lined layer */
		if ((HTU_y == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_y == 5)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_x == 1)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_x == 3)) {
			cube_colour[HTU_number] = 'white';
		}
		if ((HTU_x == 5)) {
			cube_colour[HTU_number] = 'white';
		}
		
	}//end lined layer choice
	//alert('end');
}

function draw_cube_space(gathered){
//	console.log('draw_cube_space cube_colour[5]='+cube_colour[5]);
	
	temp = document.getElementById("cube_space");
	
	temp.innerHTML += gathered;		
}
function clear_cube_space(){
//	console.log('clear_cube_space()');
	temp = document.getElementById("cube_space");
	temp.innerHTML = "";		
}
function clear_cube_HTML() {
//	console.log('clear_cube_HTML()');
	for (i = 0; i <=666; i++) {
		cube_HTML[i] = '';
	}

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



function draw_cube_space_x(x_value) {
//	console.log('draw_cube_space_x('+x_value+')');
	//draw previous level_x for higher numbers
	clear_cube_space();
	gathered = '';
	temp_x = 6;
	//alert('loop startx_value ='+x_value);
	for (temp_x = 6; temp_x >= x_value; temp_x--) {
		gather_level_x(temp_x);
		//console.log('temp_x='+temp_x +'gathered.length = '+gathered.length);
	}
	
	draw_cube_space(gathered);
}
/* gather_level_x works out all the HTML to draw the level x & stores it in gathered to be drawn later 
Basically it concatenates all the HTML for each cube in the level*/
function gather_level_x(temp_x) {
//	console.log('gether_level_x()');
	for (y = 6; y >= 0; y--) {
		for (z = 0; z <=6; z++) {
			make_HTU(temp_x,y,z);
			gather_minicube_HTML(HTU_number)
			gathered += cube_HTML[HTU_number];
		}
	}
}
/* This function takes all the cubes on Y level given and draws them
It uses as input:-
*/
function draw_cube_space_y(y_value) {
//	console.log('draw_cube_space_y('+y_value+')');
	clear_cube_space();
	gathered = '';
	temp_y = 0;
	for (temp_y = 6; temp_y >= y_value; temp_y--) {
		gather_level_y(temp_y);
	}
	draw_cube_space(gathered);
}
function gather_level_y(temp_y) {
//	console.log('gether_level_y()');
	for (x = 6; x >= 0; x--) {
		for (z = 0; z <=6; z++) {
			//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
			make_HTU(x,temp_y,z);
			gather_minicube_HTML(HTU_number);
			gathered += cube_HTML[HTU_number];
		}
	}
	return gathered;
}
/* do z */
function draw_cube_space_z(z_value) {
//	console.log('draw_cube_space_z('+z_value+')');
	clear_cube_space();
	gathered = '';
	temp_Z = 0;
	for (temp_z = 0; temp_z <= z_value; temp_z++) {
//		console.log('z='+temp_z);
		gather_level_z(temp_z);
	}
	draw_cube_space(gathered);
}
function gather_level_z(temp_z) {
//	console.log('gather_level_z()');
	for (x = 6; x >= 0; x--) {
		for (y = 6; y >=0; y--) {
			//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string
			//console.log('x='+x+'y='+y+'z='+temp_z);
			make_HTU(x,y,temp_z);
			gather_minicube_HTML(HTU_number);
			gathered += cube_HTML[HTU_number];
		}
	}
	return gathered;
}
/*
function draw_cube_again() {
	console.log('draw_base:one');
	gathered = '';
	clear_cube_space();
	alert('clear');
	
	for (z_value = 0; z_value <= 6; z_value++) {
		alert('z='+z_value);
		gathered = gather_level_z(z_value);
		alert('d_b: z='+z_value);
		//alert('gathered.length = '+gathered.length);
		draw_cube_space(gathered);
	}
	//temp = document.getElementById("cube_space");
	//temp.innerHTML = gathered;
	//alert('draw_base:two');
	
}
*/
/* function draw_slice creates the HTML for a slice of the cube for a given value of x,y or z */
function draw_slice(xyz, value) {
	console.log('draw_slice()');
	if(xyz=='x') {
		//draw x slice
	}
	if(xyz=='y') {
		//draw y slice
	}
	if(xyz=='z') {
		//draw z slice
	}
}
function draw_x_slice(x_value) {
	console.log('draw x slice');
	for (z_value = 0; z_value <= 6; z_value++) {
		for (y_value = 6; y_value >= 0; y_value--) {
			make_HTU(x_value, y_value, z_value);
			gather_minicube_HTML(HTU_number);

		}
	}
}
function draw_y_slice(y_value) {
	console.log('draw y slice');
	for (z_value = 0; z_value <= 6; z_value++) {
		for (x_value = 0; x_value <= 0; x_value ++) {
			make_HTU(x_value, y_value, z_value);
			gather_minicube_HTML(HTU_number);
		}
	}

}
function draw_z_slice(z_value) {
	console.log('draw z slice');
	for (x_value = 0; x_value <= 6; x_value++) {
		for (y_value = 6; y_value >= 0; y_value--) {
			make_HTU(x_value, y_value, z_value);
			gather_minicube_HTML(HTU_number);
		}
	}

}

/* Given the x,y & z prepare the HTML to draw the minicube 
The parameter defines if this cube is of colour black or white and if white if it has a letter*/
function gather_minicube_HTML(HTU_number) {
	//combine x, y & z into one Hundreds,Tens, Units number HTU_number & string HTU_string

//	console.log('gather_minicube_HTML'+' HTU='+HTU_number);
	cube_HTML[HTU_number] = '';
	//console.log('228:cube_HTML[HTU_number]='+cube_HTML[HTU_number]);
	new_line = '';
	height_xyz[HTU_number] = top_displacement+ HTU_z*z_height + HTU_y * y_height + HTU_x * x_height;
	left_xyz[HTU_number] = left_displacement+HTU_y*y_left + HTU_x*x_left;
	H_colour_string = '../cube_raw2/cube_raw2_'+cube_colour[HTU_number]+'.png';
	//add_HTML_to_info_box('\ncube_colour['+HTU_number+']='+cube_colour[HTU_number])
	//console.log('left_xyz='+left_xyz[HTU_number]);
	if(cube_letter[HTU_number] != '_') {
		//console.log('match cube_letter not blank HTU='+HTU_number);
		//add_HTML_to_info_box('oops cube_letter['+HTU_number+']='+cube_letter[HTU_number]+' cube_colour[] ='+cube_colour[HTU_number]);
		H_colour_string = '../cube_raw2/cube_raw2_'+cube_letter[HTU_number]+'.png';
	}

/*				     
	H_open_p = '<p ';	//open para
    H_style1 	= ' STYLE="position:absolute; top:';
    H_style_px 	= 'px;';
	H_style_left = ' left:';
	H_style3 = 'px">';
	H_img1 = '<img id="cube_';
	//debug_img1 = 'img id="cube_';
   	H_img2 = '" src="'; 
	   
	H_colour_string = '../cube_raw2/cube_raw2_black.png';
	
	H_affix1 = '" width="50px" height="50px" align="left"';
	H_cube_click1 = ' onClick="cube_click(';
	H_cube_click1B = ' onClick="cube_click_black(';
	H_comma = ',';
	H_close_paren = ')"';
	H_G_than = '>';	//Greater than (close style)
	H_L_than = '<';	//Less than (open style)
	H_end_para = '</p>';
*/	
	new_line = '<p';							//<p 
	new_line += ' STYLE="position:absolute; top:' + height_xyz[HTU_number] + 'px;';	//STYLE="position:absolute; top 950ish
	new_line += ' left:'+  left_xyz[HTU_number] +'px">';
	
	new_line += '<img id="cube_' +HTU_x+HTU_y+HTU_z+'" src="' + H_colour_string +'" width="50px" height="50px" align="left"';
	if(cube_colour[HTU_number] == 'white') {
	
		new_line += ' onClick="cube_click('+HTU_x+','+HTU_y+','+HTU_z+')"';
		new_line += '>'+'</p>';
	} else {
		
		new_line   += ' onClick="cube_click_black('+ HTU_x+','+HTU_y+','+HTU_z+')"></p>';
	}
	//console.log('new_linexxlength='+new_line.length);
	if (cube_HTML[HTU_number] == '') {
		//console.log('blank'+cube_HTML[HTU_number]);
		cube_HTML[HTU_number] = new_line;
	} else {
		//console.log('not_blank reuse HTU='+HTU_number+'cube_HTML['+HTU_number+']='+cube_HTML[HTU_number]);
		new_line = cube_HTML[HTU_number];
	}
	//tabbed_alert('468:new_line='+new_line);
	//add_HTML_to_info_box('401:HTU='+HTU_number);
	
	//add_HTML_to_info_box('\n403:gather_minicube_HTML returning '+new_line);
	return new_line;
	
}
function cube_KeyPress(kx,ky,kz) {
	console.log('KeyPress('+kx+','+ky+','+kz+')');
}
function cube_KeyDown(kx,ky,kz) {
	console.log('KeyDown('+kx+','+ky+','+kz+')');
}
function cube_KeyUp(kx,ky,kz) {
	console.log('KeyUp('+kx+','+ky+','+kz+')');
}

