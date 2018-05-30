// JavaScript Document draw_cube_space
function clear_cube_space(){
	//console.log('clear_cube_space()');
	temp = document.getElementById("cube_space");
	//console.log('temp='+temp);
	temp.innerHTML = "";
	accumulated_cube_space = '';
}
function add_cube_space() {
	//console.log('\n105:add_cube_space('+accumulated_cube_space+')\n');
	temp = document.getElementById("cube_space");
	cube_count1 = temp.innerHTML.length;
	//console.log('temp='+temp);
	temp.innerHTML = accumulated_cube_space;
	//console.log('cc'+accumulated_cube_space);
	cube_count2 = temp.innerHTML.length;
	//console.log('count1='+cube_count1+' count2='+cube_count2);
	
}
