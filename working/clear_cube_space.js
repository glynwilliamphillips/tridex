// JavaScript Document draw_cube_space
function clear_cube_space(){
//	console.log('clear_cube_space()');
	temp = document.getElementById("cube_space");
	temp.innerHTML = "";
	accum_space = '';
}
/* add the HTML (accum_space) of this cube to that displayed on screen */
function add_cube_space() {
//	console.log('add_cube_space()');
	temp = document.getElementById("cube_space");
	//cube_count1 = temp.innerHTML.length;
	temp.innerHTML = accum_space;
	//cube_count2 = temp.innerHTML.length;
//	console.log('out:add_cube_space()');
}
