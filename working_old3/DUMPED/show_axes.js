// JavaScript Document
function y1(y_value) {
	alert('gash1');
	console.log('functions6_y1('+ y_value+')');
	hide_affix_inputs(y_value);
	show_inputs(y_value);
	if(y_value == 1) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y1.jpg';
	}
	if(y_value == 2) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y2.jpg';
	}
	if(y_value == 3) {
		//alert('x_val 3');
		temp = document.getElementById('cube_image1');
		//alert('temp');
		temp.src = 'cube7_Y3.jpg';
	}
	if(y_value == 4) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y4.jpg';
	}
	if(y_value == 5) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y5.jpg';
	}
	if(y_value == 6) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y6.jpg';
	}
	if(y_value == 7) {
		temp = document.getElementById('cube_image1');
		temp.src = 'cube7_Y7.jpg';
	}
}


function z1(z_value) {
	console.log('show_axes:_z1('+ z_value+')');
	temp = document.getElementById("cube_space");
	//alert('temp='+temp.innerHTML);
	//alert('after temp');
	//hide_affix_inputs(z_value);
	if(z_value == 0) {
		temp.innerHTML = gathered_Z0;
	}
	if(z_value == 1) {
		temp.innerHTML = gathered_Z1;
	}
	if(z_value == 2) {
		temp.innerHTML = gathered_Z2;
	}
	if(z_value == 3) {
		temp.innerHTML = gathered_Z3;
	}
	if(z_value == 4) {
		temp.innerHTML = gathered_Z4;
	}
	if(z_value == 5) {
		temp.innerHTML = gathered_Z5;
	}
	if(z_value == 6) {
		temp.innerHTML = gathered_Z6;
	}
}
function show_x_axis() {
	console.log('show_axes:show_x axis');
	temp = document.getElementById('p_x_axis');	
	
	temp.innerHTML = 	'<input type="button" onClick="draw_x_layer(1)" class="x100" id="x1" value="X=1">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(2)" class="x200" id="x2" value="2">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(3)" class="x300" id="x3" value="3">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(4)" class="x400" id="x4" value="4">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(5)" class="x500" id="x5" value="5">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(6)" class="x600" id="x6" value="6">';
	temp.innerHTML +=  '<input type="button" onClick="draw_x_layer(7)" class="x700" id="x7" value="7">';

}
function show_y_axis(){
	console.log('show_axes:show_y axis');
	temp = document.getElementById('p_y_axis');	
	temp.innerHTML = '<input type="button" onClick="y1(1)" class="y100" id="y1" value="1">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(2)" class="y200" id="y2" value="2">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(3)" class="y300" id="y3" value="3">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(4)" class="y400" id="y4" value="4">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(5)" class="y500" id="y5" value="5">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(6)" class="y600" id="y6" value="6">'
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="y1(7)" class="y700" id="y7" value="Y=7">';
	//alert('end inner ='+temp.innerHTML);
}
function show_z_axis() {
	console.log('show_axes:show_z_xis');
	temp = document.getElementById('p_z_axis');	
	temp.innerHTML = '<input type="button" onClick="z1(1)" class="z100" id="z1" value="Z=1">'; 	
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(2)" class="z200" id="z2" value="2">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(3)" class="z300" id="z3" value="3">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(4)" class="z400" id="z4" value="4">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(5)" class="z500" id="z5" value="5">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(6)" class="z600" id="z6" value="6">';
	temp.innerHTML = temp.innerHTML + '<input type="button" onClick="z1(7)" class="z700" id="z7" value="7">';

}
