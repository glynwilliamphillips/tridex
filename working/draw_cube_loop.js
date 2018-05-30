// JavaScript Document
//screen_functions
/*
draw_cube_loop()		called from: set_letter; put_letter_in_cube; letter_to_cube
check_a()
check_b()
check_c()

/* draw_cube_loop does:
	draws all the mini_cubes via min_draw_H_TML()
	Called from 1 of the buttons around the cube space
*/
/* Draw from b_start to b_end and within that
		Draw from c_start to c_end and within that
			Draw from a_start to a_end; */
function draw_cube_loop(sender) {
	//alert('draw_cube_loop('+sender+')');
	a_start = 0;
	b_start = 0;
	c_start = 0;
	a_inc = -1;
	b_inc = 0;
	c_inc = +1;
	if(g_draw_axis[0] == 'A') {
		redo_space_a(g_draw_axis[0], g_draw_axis[1],'25');
		return;
	}
	if(g_draw_axis[0] == 'B') {
		redo_space_b(g_draw_axis[0], g_draw_axis[1] ,29);
		return;
	}
	if(g_draw_axis[0] == 'C') {
		redo_space_c(g_draw_axis[0], g_draw_axis[1]);
		return;
	}
}
