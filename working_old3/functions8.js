// JavaScript Document


HTU_number = 53;

function word_to_select(word) {
	console.log('***word_to_select('+word+')');
	possible_element = document.getElementById('POSSIBLE');
	opts = possible_element.options;
	for (i = 0; i < opts.length; i++) {
	//	console.log('option['+i+']='+opts[i].value);
	}
	//console.log('possible_element.inner='+possible_element.innerHTML);
	element_addition =
//First layer with ' layer to be passed to subroutine    
//	<option value="AVERAGE" >AVERAGE</option>
//Option constructor(text of the option,  optional value, selected by default or not, selected or not)
	newOption = new Option(word,word,0,0);
	possible_element.add(newOption,0);
	thisOptions = possible_element.options;
	for(i = 0; i < thisOptions.length; i++) {
//		console.log('i='+i+'option='+thisOptions[i].value);
	}
}

function put_answer_in_direction (answer,HTU_start, ABD_dir_in) {
	if (ABD_dir_in == 'a') {
		put_answer_in_direction_a(answer, HTU_start);	
	}
	if (ABD_dir_in == 'bb') {
		put_answer_in_direction_b(answer, HTU_start);	
	}
	if (ABD_dir_in == 'd') {
		put_answer_in_direction_d(answer, HTU_start);	
	}
}


/* WORD HANDLING
// JavaScript Document word handling


/* CLUES CODE */
clues_text = '';



/* save_answer(HTU_string, selected_word) takes the selected word (selected_word) & puts it in the cube at the place specified by
HTU_string & ??? */
//function save_answer(HTU_number, selected_word) {
function save_answer() {	
	temp_a = get_a_from_HTU_number(HTU_number);
	temp_b = get_b_from_HTU_number(HTU_number);
	temp_d = get_d_from_HTU_number(HTU_number);
	console.log('save_answer('+temp_a+','+temp_b+','+temp_d+','+selected_word+')');
	i = 0;
}
