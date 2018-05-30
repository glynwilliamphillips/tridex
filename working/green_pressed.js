// JavaScript Document
//green_pressed()
/* function green_pressed acts on a click at cube x,y,z.
It takes the X,y,x and make up a single abd called the HundredsTensUnits
It colours the cube selected cube yellow - whether it had a letter on or not

*/
function green_pressed(a_value, b_value, c_value){	
	console.log('green_pressed('+a_value+','+b_value+','+c_value+')');
	make_HTU_both(a_value, b_value, c_value);
	user_instruction(2, '');	//'Select a first letter for this word'
	clear_previous_yellow();
	current_minicube = mini_cubes[g_HTU_number];
	//set_colour(current_minicube, 'yellow');
	colour_word_yellow(current_minicube);
	redraw_axis();
}
function clear_previous_yellow() {
	for (j = 0; j <mini_cubes.length; j++) {
		cube1 = mini_cubes[j];
		if (cube1.cube_colour == 'yellow') {
//			console.log('clear yellow '+j);
			cube1.cube_colour = 'white';
			compute_pattern(cube1);
			cube_draw_H_TML(cube1, 'clear_previous_yellow');

		}
	}
	/* debug now list all the mini_cube colours */
	for (j = 0; j <mini_cubes.length; j++) {
		cube1 = mini_cubes[j];
//		console.log('mini_cubes['+j+']='+mini_cubes[j].cube_colour);
	}

}

function redraw_axis() {
	//console.log('redraw_axis: g_draw_axis='+g_draw_axis[0]+','+g_draw_axis[1]);
	if(g_draw_axis[0] == 'A') {
		redo_space_a(g_draw_axis[0], g_draw_axis[1],'40');
		user_instruction(2, '');
	}
	if(g_draw_axis[0] == 'B') {
		redo_space_b(g_draw_axis[0], g_draw_axis[1] ,44);
		user_instruction(2 , '');
	}
	if(g_draw_axis[0] == 'C') {
		redo_space_c(g_draw_axis[0], g_draw_axis[1]);
		user_instruction(2 , '');		
	}
	//alert('error in redraw_axis');
}

/* colour_word_yellow
	Take the current minicube HTU
	Look at the direction of this word
	Find the minicubes in this direction and colour them yellow
	*/
function colour_word_yellow(start_minicube) {
	//console.log('colour_word_yellow('+start_minicube);	//console.log('directions='+start_minicube.direction_A+','+start_minicube.direction_B+','+start_minicube.direction_C);
	/* Find the HTUs for the word */
	var in_HTU = start_minicube.HTU_number;
	var direction_A = start_minicube.direction_A;
	var direction_B = start_minicube.direction_B;
	var direction_C = start_minicube.direction_C;
//	console.log('direction_ABC='+direction_A+direction_B+direction_C)
	if((direction_A == 'A') && (direction_B == 'B')) {
		console.log('error Across & behind');
	}
	if((direction_B == 'B') && (direction_C == 'C')) {
		console.log('error Behind & Climb');
	}
	if((direction_A == 'A') && (direction_C == 'C')) {
		console.log('error Across & Climb');
	}
	//console.log('direction_A ='+direction_A);
	//console.log('direction_B ='+direction_B);
	//console.log('direction_C ='+direction_C);
	var direct = '_';
	if (direction_A == 'A') {
		direct = 'A';
	}
	if (direction_B == 'B') {
		direct = 'B';
	}
	if (direction_C == 'C') {
		direct = 'C';
	}
	//console.log('direct ='+direct);
	find_word_HTU (in_HTU , direct);
	/* returns g_word_cube_HTU*/
//	console.log('g_word_cube_HTU=');
//	console.log(g_word_cube_HTU);
	if(g_word_cube_HTU[0] < 0) {
		alert('Error HTU '+in_HTU+' not found in list');
	}
	//console.log('g_word_cube_HTU.length'+g_word_cube_HTU.length);
	/* maybe use g_word_cube_HTU.reverse();*/
	loopcount = g_word_cube_HTU.reverse();
	//Don't colour 1st letter
	for (ix = 0; ix < loopcount.length-1; ix++) {
		/* colour cube i yellow */
//		console.log('g_word_cube_HTU['+ix+']='+g_word_cube_HTU[ix]);
		colour_cube_yellow(g_word_cube_HTU[ix]);
	}
}
function colour_cube_yellow(cube_HTU){
	cube = mini_cubes[cube_HTU];
	set_colour(cube,'yellow', 'colour_cube_yellow()');
	compute_pattern(cube);
	cube_draw_H_TML(cube, 'colour_cube_yellow');
	//console.log('make cube yellow (from '+cube.cube_colour+')'); 
}
/* Arrange the array into the order that the minicubes fit onto the page
A higher numbers come first
B higher first
C lower first
*/

function lowest(inarray) {
	/* start at the bottom A=6, B=6, C=0 increment them until match given numbers 
	Return an array of numbers accordingly */
	var outarray = new Array(7);
	if (inarray[1] - inarray[0] == 1) {
		/*incrementing on the A scale */
		outarray[6] = inarray[0];
		outarray[5] = inarray[1];
		outarray[4] = inarray[2];
		outarray[3] = inarray[3];
		outarray[2] = inarray[4];
		outarray[1] = inarray[5];
		outarray[0] = inarray[6];
	} else {
		if (inarray[1] - inarray[0] == 7) {
			/* increment on the B scale */
			outarray[6] = inarray[0];
			outarray[5] = inarray[1];
			outarray[4] = inarray[2];
			outarray[3] = inarray[3];
			outarray[2] = inarray[4];
			outarray[1] = inarray[5];
			outarray[0] = inarray[6];
		} else {
			if (inarray[0] - inarray[1] == 49) {
				/* increment on the C scale */
				outarray = inarray;
			} else {
				alert('error on scales');
			}
		return outarray;
	}
	}
}
		
