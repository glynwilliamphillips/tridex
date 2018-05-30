// JavaScript Document
//display_level_b etc.
function display_level_a(temp_a) {
	console.log('display_level_a('+temp_a+')');
	for (b = 6; b >= 0; b--) {
		for (d = 0; d <=6; d++) {
			console.log('\n19 '+temp_a+','+b+','+d);
			//mini_draw_H_TML(a,b,d);
			mini_draw_H_TML(a,b,d);
		}
	}
}
function display_level_b(b_value) {
	console.log('display_level_b('+b_value+')');
	for(a = 0; a < 7; a++) {
		for(d = 0; d < 7; d++){
			index = d*49+b_value*7+a;;
			console.log('8:display_level_b() index='+index+' d='+d+' a='+a);
			mini_draw_H_TML(a,b,d);
		}
	}
	console.log('display_level_b exit');
}

function display_level_c(HTU_number) {
	console.log('display_level_c('+HTU_number+')');
	I777_limit = 7*49+7;
	for (j = 0; j <I777_limit; j=j+7) {
//		console.log('doHTML'+j);
		//HTMLstring = '<p>aaa</p>';
	}
	alert('HTML set up');
	gash = mini_cubes[2];
	alert('gash='+gash);
	alert('HTML ='+gash.HTML_string);
}
