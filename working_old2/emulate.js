// JavaScript Document
//emulate stages of play:-
function emulate(stage) {
	if (stage == 1) {
		emulate_stage_1();
	}
	if (stage == 2) {
		emulate_stage_2();
	}
	if (stage == 3) {
		emulate_stage_3();
	}
	if (stage == 123) {
		emulate_stage_123();
	}
}
function emulate_stage_1() {
	console.log('emulate_stage_1 - display slice of cube and select a mini-cube');
	//display whole grid
	//Refresh
	//select slice 5
	draw_cube_space_b(5);
	cube_click_white(0,5,3);
	return;
}

function emulate_stage_2() {
	letter_pressed('J');
	temp = document.getElementById('POSSIBLE');
	tempoptions = temp.options;
	tempoptions[1].selected = true; 
	
	answer_selected('[883]JESTING');
}
function emulate_stage_3() {
	console.log('emulate_stage_3 - all possible words into list possible words 5 ');
	seek_word(lett, HTU_number);

}
function emulate_stage_123() {
	console.log('emulate_stage_123 - all 3 stages 1-3 ');
	draw_cube_space_b(5);
	cube_click_white(0,5,3);
	lett = 'A';
	HTU_number = 53;
	HTU_string = '053';
	put_letter_in_cube(lett, HTU_number);
//	console.log('seek_word');
	seek_word(lett, HTU_number);
	

}
