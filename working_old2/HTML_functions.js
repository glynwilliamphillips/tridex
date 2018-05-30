// JavaScript Document
//HTML functions


function do_HTML() {
	console.log('doHTML');
	//alert('do_HTML: cube0 HTML='+mini_cubes[2].HTML_string);
	I777_start = 0;
	I777_increment = 7;
	I777_limit = 7*49+7;
	for (j = I777_start; j <I777_limit; j=j+I777_increment) {
		mini_draw_HTML(j);
	}
}

function set_space(string) {
	//console.log('set_space('+string+')');
	temp = document.getElementById('cube_space');
}