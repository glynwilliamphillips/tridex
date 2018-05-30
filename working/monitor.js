// JavaScript Document monitor
flow_ptr = 1;
function monitor(message,level) {
	return;
	do_monitor(message, level);
	if(check_functions) {
		console.log(message);
	}

	if(global_list_paths == 'functions') {
		do_monitor(message, level);
	}
}
function do_monitor(message, level) {
	flowname = 'flow'+flow_ptr;
	flowchart = document.getElementById(flowname);
	if(flowchart) {
		console.log('flowchart contents = '+flowchart.textContent);

		for(temp = 1; temp <= flow_ptr; temp++) {
			flowchart.textContent += '	';
		}
		flowchart.textContent += flow_ptr+' ';
		flowchart.textContent += message;
		console.log('flowchart text = '+flowchart.textContent);
		flow_ptr++;
	} else {
		console.log('No flowname'+message);
	} 

}
