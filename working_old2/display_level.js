// JavaScript Document
//display_level_b etc.
function display_level_b(b_value) {
	console.log('display_level_b('+b_value+')');
	for(a = 0; a < 7; a++) {
		for(d = 0; d < 7; d++){
			index = a*49+b_value*7+d;;
//			console.log('display_level_b() index='+index+' d='+d+' a='+a);
			mini_draw_HTML(index);
		}
	}
	console.log('display_level_b exit');
}
function display_level_a(temp_a) {
	console.log('display_level_a('+temp_a+')');
	for (y = 6; y >= 0; y--) {
		for (z = 0; z <=6; z++) {
			make_HTU(temp_a,y,z);
			mini_draw_HTML(index);
		}
	}
}
function display_level_d(HTU_number) {
	console.log('display_level_d('+HTU_number+')');
	I777_limit = 7*49+7;
	for (j = 0; j <I777_limit; j=j+7) {
//		console.log('doHTML'+j);
		//HTMLstring = '<p>aaa</p>';
		//mini_draw_HTML(j);
	}
	alert('HTML set up');
	gash = mini_cubes[2];
	alert('gash='+gash);
	alert('HTML ='+gash.HTML_string);
}
