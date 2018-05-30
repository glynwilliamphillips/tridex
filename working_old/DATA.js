//DATA.js
/*
*/
H_colour_string = './cube_raw2/cube_raw2_black.png';

slice_direction = 'GG';
answer_direction = 'HH';
selected_word = 'selected word';
top_displacement = 250;   //pixels
left_displacement = 400;
z_height = -25;
y_height = -10;
x_height = -10;
y_left = -20;
x_left = +20;
var cube_x = -1;
var cube_y = -1;
var cube_z = -1;
big_cube_size = 7 * 7 * 7;
height_abd = new Array(big_cube_size);	//top_displacement+ HTU_*z_height + HTU_b * y_height + HTU_a * x_height;
left_abd = new Array(big_cube_size);
minicube_Array = new Array(big_cube_size);
cube_colour = new Array(big_cube_size);
cube_letter = new Array(big_cube_size);
cube_HTML = new Array(big_cube_size);
/* answer_directions is an array covering evry minicube in the 7x7x7 cube.
[0] represents the position a = 0; b = 0; d = 0
this steps up by units of z; 7s of b and 49 of a.
So index to it is a (across * 49 + b (back) * 7 + d (down) */
var answer_directions = new Array(big_cube_size);
var disp = new Array(7);
var disp_ans = new Array(7);
var answer_direction = 'm';
HTU_number = 0;
HTU_string = '000';


arr135 = new Array(1,3,5);
arr0246 = new Array(0,2,4,6);
arr0123456 = new Array(0,1,2,3,4,5,6);

debug_scratch = '';	//variable that keeps track of innerHTML of the debug field
show_data_load = true;
show_data_numbers = true;
//show_data_load = false;
show_data_numbers = false;
for(i = 0; i < big_cube_size; i++) {
	height_abd[i] = 99;
	left_abd[i] = 400;
	cube_colour[i] = 'black';
	cube_letter[i] = '_';
	cube_HTML[i] = '';
}
alphabet_list = ['A','B','C','D',
				'E','F','G','H',
				'I','J','K','L',
				'M','N','O','P',
				'Q','R','S','T',
				'U','V','W','X',
				'Y','Z'];
/* each minicube has an 3 letter entry in array answer_directions.	
'■■■' means it is a black minicube.
The first letter tells the direction of the answer as seen from an a slice
The second letter tells the direction of the answer as seen from an b slice
The third letter tells the direction of the answer as seen from an d slice
'a', 'b' & 'd' Indicate the direction of the answer in this minicube
*/			
function populate_answer_directions() {
	/* fill all holes black unlessotherwise stated */
	
	for (i = 0; i < answer_directions.length; i++){
		answer_directions[i] = '■';
	}
	a=0;b=0;d=0
	<!-- top slice -->
	d = 0;
	/*
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

	for (y in arr135) {
		b=arr135[y];
	//	console.log('b='+b);
		for (x in arr135) {	
			a = arr135[x];
			index = a*49+b*7+d;
			answer_directions[index] = 'd';	//down
			//console.log('D in'+ 'a='+a+'b='+b+' index='+index+answer_directions[index]);
		}
	}
	if(show_data_load) {
		console.log('--D=0--');
		for (b = 0; b <7; b++) {
			for (a = 0; a < 7; a++) {
				disp[a] = a*49 + b*7 + d;
				disp_ans[a] = answer_directions[disp[a]];
			}
			if (show_data_numbers) {
				console.log(disp);
			}
			line = disp_ans[0];
			line=line+disp_ans[1];
			line=line+disp_ans[2];
			line=line+disp_ans[3];
			line=line+disp_ans[4];
			line=line+disp_ans[5];
			line=line+disp_ans[6];
			console.log(line);	
		}
	}
	
	d=1;
	/*
	2nd slice
	
	■□■□■□■
	□□□□□□□
	■□■□■□■
	□□□□□□□ ↑
	■□■□■□■ ↑
	□□□□□□□ B
	■□■□■□■   
	  A->
	
	*/
	<!-- interleaved white & black -->
	
	for (n in arr0246) {
		b=arr0246[n];
		for (m in arr135) {
			a=arr135[m]
			index = a*49+b*7+d;
			//console.log('interleave a='+a+'b='+b+' index='+index);
			if (b == 6) {
				answer_directions[index] = '^';
			} else {
				answer_directions[index] = '.';
			}
			//console.log('D in'+ 'a='+a+'b='+b+' index='+index);
		}
	}

	<!-- continuous white line -->
	for (n in arr135) {
		b = arr135[n];
		for (m in arr0123456) {
			a = arr0123456[m];
			index = a*49+b*7+d;	
			if (a == 0) {
				answer_directions[index] = '>';
			} else {
				answer_directions[index] = '.';
			}
//			console.log('---a='+a+'b='+b + 'index='+index+' '+answer_directions[index]);
		}
		index = a*49+b*7 + d;		
		//console.log('125:d=1 '+i+'a='+a+'b='+b+': '+'index='+index+' '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
	}

	if(show_data_load) {
		for (m in arr0123456) {
			b = arr0123456[m];
				a=0;
				index = a*49+b*7+d;		
//			console.log('d=1: '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
		}
	}
	if(show_data_load) {
		console.log('--D=1--');
		for (b = 0; b <7; b++) {
			for (a = 0; a < 7; a++) {
				disp[a] = a*49 + b*7 + d;
				disp_ans[a] = answer_directions[disp[a]];
			}
			if (show_data_numbers) {
				console.log(disp);
			}
			line = disp_ans[0];
			line=line+disp_ans[1];
			line=line+disp_ans[2];
			line=line+disp_ans[3];
			line=line+disp_ans[4];
			line=line+disp_ans[5];
			line=line+disp_ans[6];
			console.log(line);	
		}
	}



	d = 2;
	
	
	/*
	■■■■■■■
	■□■□■□■
	■■■■■■■
	■□■□■□■ ↑
	■■■■■■■ |
	■□■□■□■ B
	■■■■■■■
	   A->
	 9 white squares
	*/
	for (n = 0; n < arr135.length; n++) {
		b=arr135[n];
		//console.log('b='+b);
		for (m = 0; m < arr135.length; m++) { 
			a = arr135[m];
			index = a*49+b*7+d;		
			//console.log('white: D='+d+' a='+a+'b='+b+'index='+index);
			answer_directions[index] = '.';	
		}
	}
	/*
	if(show_data_load) {
		for (n = 0; n < arr0123456.length; n++) {
			b=arr0123456[n];
			index = a*49+b*7 +d;		
//			console.log('d=2: '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
		}
	}
	*/
	if(show_data_load) {
		console.log('--D=2--');
		for (b = 0; b <7; b++) {
			for (a = 0; a < 7; a++) {
				disp[a] = a*49 + b*7 + d;
				disp_ans[a] = answer_directions[disp[a]];
			}
			if (show_data_numbers) {
				console.log(disp);
			}
			line = disp_ans[0];
			line=line+disp_ans[1];
			line=line+disp_ans[2];
			line=line+disp_ans[3];
			line=line+disp_ans[4];
			line=line+disp_ans[5];
			line=line+disp_ans[6];
			console.log(line);	
		}
	}
	d = 3;

/*
	■□■□■□■
	□□□□□□□
	■□■□■□■
	□□□□□□□ ↑
	■□■□■□■ ↑
	□□□□□□□ B
	■□■□■□■   
	  A->
	  
	  target a=0;b=5;d=3
	  
*/	

	<!-- interleaved white & black -->
	
	for (n in arr0246) {
		b=arr0246[n];
		for (m in arr135) {
			a=arr135[m]
			index = a*49+b*7+d;
			//console.log('interleave49='+d*49+' a='+a+'b='+b+' index='+index);
			if (b == 6) {
				answer_directions[index] = '^';
			} else {
				answer_directions[index] = '.';
			}
			//console.log('answer_directions['+index+']='+answer_directions[index]);
			//console.log('D in'+ 'a='+a+'b='+b+' index='+index);
		}
	}

	<!-- continuous white line -->
	for (n in arr135) {
		b = arr135[n];
		for (m in arr0123456) {
			a = arr0123456[m];
			index = a*49+b*7+d;		
			if (a == 0) {
				answer_directions[index] = '>';
			} else {
				answer_directions[index] = '.';
			}
//			console.log('---a='+a+'b='+b + 'index='+index+' '+answer_directions[index]);
		}
		index = a*49+b*7+d;		
		//console.log('125:d=1 '+i+'a='+a+'b='+b+': '+'index='+index+' '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
	}

/*	
	if(show_data_load) {
		for (m in arr0123456) {
			b = arr0123456[m];
				a=0;
				index = a*49+b*7+d;		
//			console.log('d=3: '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
		}
	}
	*/
		if(show_data_load) {
		console.log('--D=3--');
		d=2;
		for (b = 0; b <7; b++) {
			for (a = 0; a < 7; a++) {
				disp[a] = a*49 + b*7 + d;
				disp_ans[a] = answer_directions[disp[a]];
			}
			if (show_data_numbers) {
//				console.log('316:'+disp);
			}
			line = disp_ans[0];
			line=line+disp_ans[1];
			line=line+disp_ans[2];
			line=line+disp_ans[3];
			line=line+disp_ans[4];
			line=line+disp_ans[5];
			line=line+disp_ans[6];
			console.log(line);	
		}
	}

//show_data_load = false;
	d = 4;
	/*
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
	for (n = 0; n < arr135.length; n++) {
		b=arr135[n];
		//console.log('b='+b);
		for (m = 0; m < arr135.length; m++) { 
			a = arr135[m];
			index = a*49+b*7+d;		
			//console.log('white: D='+d+' a='+a+'b='+b+'index='+index);
			answer_directions[index] = '.';	
		}
	}
	if(show_data_load) {
		for (n = 0; n < arr0123456.length; n++) {
			b=arr0123456[n];
			index = a*49+b*7+d;		
//			console.log('d=4: '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
		}
	}
	if(show_data_load) {
		console.log('--D=4--');
		for (b = 0; b <7; b++) {
			for (a = 0; a < 7; a++) {
				disp[a] = a*49 + b*7 + d;
				disp_ans[a] = answer_directions[disp[a]];
			}
			if (show_data_numbers) {
				console.log(disp);
			}
			line = disp_ans[0];
			line=line+disp_ans[1];
			line=line+disp_ans[2];
			line=line+disp_ans[3];
			line=line+disp_ans[4];
			line=line+disp_ans[5];
			line=line+disp_ans[6];
			console.log(line);	
		}
	}

	d = 5;
	/*
	■□■□■□■
	□□□□□□□
	■□■□■□■
	□□□□□□□ ↑
	■□■□■□■ ↑
	□□□□□□□ B
	■□■□■□■   
	  A->
*/

	<!-- interleaved white & black -->
	
	for (n in arr0246) {
		b=arr0246[n];
		for (m in arr135) {
			a=arr135[m]
			index = a*49+b*7+d;
			//console.log('interleave a='+a+'b='+b+' index='+index);
			if (b == 6) {
				answer_directions[index] = '^';
			} else {
				answer_directions[index] = '.';
			}
			//console.log('D in'+ 'a='+a+'b='+b+' index='+index);
		}
	}

	<!-- continuous white line -->
	for (n in arr135) {
		b = arr135[n];
		for (m in arr0123456) {
			a = arr0123456[m];
			index = a*49+b*7+d;		
			if (a == 0) {
				answer_directions[index] = '>';
			} else {
				answer_directions[index] = '.';
			}
//			console.log('---a='+a+'b='+b + 'index='+index+' '+answer_directions[index]);
		}
		index = a*49+b*7+d;		
		//console.log('125:d=1 '+i+'a='+a+'b='+b+': '+'index='+index+' '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
	}

	if(show_data_load) {
	
		for (m in arr0123456) {
			b = arr0123456[m];
			a=0;
			index = a*49+b*7+d;		
//			console.log('d=5: '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
		}
	}
	if(show_data_load) {
		console.log('--D=5--');
		for (b = 0; b <7; b++) {
			for (a = 0; a < 7; a++) {
				disp[a] = a*49 + b*7 + d;
				disp_ans[a] = answer_directions[disp[a]];
			}
			if (show_data_numbers) {
				console.log(disp);
			}
			line = disp_ans[0];
			line=line+disp_ans[1];
			line=line+disp_ans[2];
			line=line+disp_ans[3];
			line=line+disp_ans[4];
			line=line+disp_ans[5];
			line=line+disp_ans[6];
			console.log(line);	
		}
	}
		
	d = 6;
	/*
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
	for (n = 0; n < arr135.length; n++) {
		b=arr135[n];
		//console.log('b='+b);
		for (m = 0; m < arr135.length; m++) { 
			a = arr135[m];
			index = a*49+b*7+d;		
			//console.log('white: D='+d+' a='+a+'b='+b+'index='+index);
			answer_directions[index] = '.';	
		}
	}
	if(show_data_load) {
		for (n = 0; n < arr0123456.length; n++) {
			b=arr0123456[n];
			index = a*49+b*7 +d;		
//			console.log('d=6: '+answer_directions[index] + answer_directions[1+index] + answer_directions[2+index] + answer_directions[3+index] + answer_directions[4+index] + answer_directions[5+index] + answer_directions[6+index]); 	
		}
	}
	if(show_data_load) {
		console.log('--D=6--');
		for (b = 0; b <7; b++) {
			for (a = 0; a < 7; a++) {
				disp[a] = a*49 + b*7 + d;
				disp_ans[a] = answer_directions[disp[a]];
			}
			if (show_data_numbers) {
				console.log(disp);
			}
			line = disp_ans[0];
			line=line+disp_ans[1];
			line=line+disp_ans[2];
			line=line+disp_ans[3];
			line=line+disp_ans[4];
			line=line+disp_ans[5];
			line=line+disp_ans[6];
			console.log(line);	
		}
	}
	
	a = 0;
	b = 5;
	d = 3;
		ht = a * 100 + b * 10 +d;
		//console.log('DATA:answer_directions['+ht+']='+answer_directions[ht]);
		
		//console.log('xxi=0 answer_directions[0]='+answer_directions[0]);
		//console.log('xxi=1 answer_directions[1]='+answer_directions[1]);
		
	for (i = 0; i < 20; i = i+10) {
		//console.log('FF:'+i+': '+answer_directions[i] + answer_directions[i+1] + answer_directions[i+2] + answer_directions[i+3] + answer_directions[i+4] + answer_directions[i+5] + answer_directions[i+6]); 
	
	}

		return answer_directions;
}