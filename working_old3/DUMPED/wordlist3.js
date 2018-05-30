// wordlist.js
/* drawing_list is an array of all the mini-cubes that are drawn on the screen regardless of whether they are black white or other
It mat not be used!
*/
//start with x=0 , y=6, z=0
drawing_list = new Array();
drawing_list = drawing_list.concat("060","061","062","063","064","065","066");
drawing_list = drawing_list.concat("050","051","052","053","054","055","056");
drawing_list = drawing_list.concat("040","041","042","043","044","045","046");
drawing_list = drawing_list.concat("030","031","032","033","034","035","036");
drawing_list = drawing_list.concat("020","021","022","023","024","025","026");
drawing_list = drawing_list.concat("010","011","012","013","014","015","016");
drawing_list = drawing_list.concat("000","001","002","003","004","005","006");

// x=1 , y=6, z=0
drawing_list = drawing_list.concat("160","161","162","163","164","165","166");
drawing_list = drawing_list.concat("150","151","152","153","154","155","156");
drawing_list = drawing_list.concat("140","141","142","143","144","145","146");
drawing_list = drawing_list.concat("130","131","132","133","134","135","136");
drawing_list = drawing_list.concat("120","121","122","123","124","125","126");
drawing_list = drawing_list.concat("110","111","112","113","114","115","116");
drawing_list = drawing_list.concat("100","101","102","103","104","105","106");

// x=1 , y=6, z=0
drawing_list = drawing_list.concat("260","261","262","263","264","265","266");
drawing_list = drawing_list.concat("250","251","252","253","254","255","256");
drawing_list = drawing_list.concat("240","241","242","243","244","245","246");
drawing_list = drawing_list.concat("230","231","232","233","234","235","236");
drawing_list = drawing_list.concat("220","221","222","223","224","225","226");
drawing_list = drawing_list.concat("210","211","212","213","214","215","216");
drawing_list = drawing_list.concat("200","201","202","203","204","205","206");

// x=2 , y=6, z=0
drawing_list = drawing_list.concat("360","361","362","363","364","365","366");
drawing_list = drawing_list.concat("350","351","352","353","354","355","356");
drawing_list = drawing_list.concat("340","341","342","343","344","345","346");
drawing_list = drawing_list.concat("330","331","332","333","334","335","336");
drawing_list = drawing_list.concat("320","321","322","323","324","325","326");
drawing_list = drawing_list.concat("310","311","312","313","314","315","316");
drawing_list = drawing_list.concat("300","301","302","303","304","305","306");

// x=3 , y=6, z=0
drawing_list = drawing_list.concat("360","361","362","363","364","365","366");
drawing_list = drawing_list.concat("350","351","352","353","354","355","356");
drawing_list = drawing_list.concat("340","341","342","343","344","345","346");
drawing_list = drawing_list.concat("330","331","332","333","334","335","336");
drawing_list = drawing_list.concat("320","321","322","323","324","325","326");
drawing_list = drawing_list.concat("310","311","312","313","314","315","316");
drawing_list = drawing_list.concat("300","301","302","303","304","305","306");

// x=4 , y=6, z=0
drawing_list = drawing_list.concat("460","461","462","463","464","465","466");
drawing_list = drawing_list.concat("450","451","452","453","454","455","456");
drawing_list = drawing_list.concat("440","441","442","443","444","445","446");
drawing_list = drawing_list.concat("430","431","432","433","434","435","436");
drawing_list = drawing_list.concat("420","421","422","423","424","425","426");
drawing_list = drawing_list.concat("410","411","412","413","414","415","416");
drawing_list = drawing_list.concat("400","401","402","403","404","405","406");

// x=5 , y=6, z=0
drawing_list = drawing_list.concat("560","561","562","563","564","565","566");
drawing_list = drawing_list.concat("550","551","552","553","554","555","556");
drawing_list = drawing_list.concat("540","541","542","543","544","545","546");
drawing_list = drawing_list.concat("530","531","532","533","534","535","536");
drawing_list = drawing_list.concat("520","521","522","523","524","525","526");
drawing_list = drawing_list.concat("510","511","512","513","514","515","516");
drawing_list = drawing_list.concat("500","501","502","503","504","505","506");

// x=6 , y=6, z=0
drawing_list = drawing_list.concat("660","661","662","663","664","665","666");
drawing_list = drawing_list.concat("650","651","652","653","654","655","656");
drawing_list = drawing_list.concat("640","641","642","643","644","645","646");
drawing_list = drawing_list.concat("630","631","632","633","634","635","636");
drawing_list = drawing_list.concat("620","621","622","623","624","625","626");
drawing_list = drawing_list.concat("610","611","612","613","614","615","616");
drawing_list = drawing_list.concat("600","601","602","603","604","605","606");

//54 words possible on a 7 x 7 x 7 cube
name_list = new Array();
//horizontal on y=1
name_list = name_list.concat("Horizontal y=1");
//vertical on y=1
name_list = name_list.concat("Vertical y=1");
//horizontal on y=3
name_list = name_list.concat("Horizontal y=3");
//vertical on y=3
name_list = name_list.concat("Vertcal y=3");
//horizontal on y=5
name_list = name_list.concat("Horizontal y=5");
//vertical on y=5
name_list = name_list.concat("Vertical y=5");

//horizontal on x=1
name_list = name_list.concat("Horizontal x=1");

//vertical on x=1
name_list = name_list.concat("Verticalal x=1");
//horizontal on x=3
name_list = name_list.concat("Horizontal x=3");
//vertical on x=3
name_list = name_list.concat("Vertical x=3");
//horizontal on x=5
name_list = name_list.concat("Horizontal x=5");
//vertical on x=5
name_list = name_list.concat("Vertical x=5");

//Left to right, lower to higher z=5
name_list = name_list.concat("Left to Right lower to higher \nHorizontal z=5");
//left to right, higher to lower Z=5

//Left to right, lower to higher z=3
//left to right, higher to lower Z=3
//Left to right, lower to higher z=1
//left to right, higher to lower Z=1


word_position_HTU= new Array()
/* word_position_HTU contains a list arrays. 
Each array is of the HTU numbers that make up a word 
followed by the letter of the variable that clocks up or down on this word*/
//horizontal on y=1
k=0;
word_position_HTU[k++] = new Array("015","115","215","315","415","515","615","Y"); //word_position_HTU.concat(nought);
word_position_HTU[k++] = new Array("013","113","213","313","413","513","613","Y");
word_position_HTU[k++] = new Array("011","111","211","311","411","511","611","Y");
//vertical on y=1
word_position_HTU[k++] = new Array("116","115","114","113","112","111","110","Y");
word_position_HTU[k++] = new Array("316","315","314","313","312","311","310","Y");
word_position_HTU[k++] = new Array("516","515","514","513","512","511","510","Y");
//horizontal on y=3
word_position_HTU[k++] = new Array("035","135","235","335","435","535","635","Y");
word_position_HTU[k++] = new Array("033","133","233","333","433","533","633","Y");
word_position_HTU[k++] = new Array("031","131","231","331","431","531","631","Y");
//vertical on y=3
word_position_HTU[k++] = new Array("136","135","134","133","132","131","130","Y");
word_position_HTU[k++] = new Array("336","335","334","333","332","331","330","Y");
word_position_HTU[k++] = new Array("536","535","534","533","532","531","530","Y");
//horizontal on y=5
word_position_HTU[k++] = new Array("055","155","255","355","455","555","655","Y");
word_position_HTU[k++] = new Array("053","153","253","353","453","553","653","Y");
word_position_HTU[k++] = new Array("051","151","251","351","451","551","651","Y");
//vertical on y=5
word_position_HTU[k++] = new Array("156","155","154","153","152","151","150","Y");
word_position_HTU[k++] = new Array("356","355","354","353","352","351","350","Y");
word_position_HTU[k++] = new Array("556","555","554","553","552","551","550","Y");

//horizontal on x=1
word_position_HTU[k++] = new Array("165","155","145","135","125","115","105","X");
word_position_HTU[k++] = new Array("163","153","143","133","123","113","103","X");
word_position_HTU[k++] = new Array("161","151","141","131","121","111","101","X");
//vertical on x=1
word_position_HTU[k++] = new Array("156","155","154","153","152","151","150","X");
word_position_HTU[k++] = new Array("136","135","134","133","132","131","130","X");
word_position_HTU[k++] = new Array("116","115","114","113","112","111","110","X");
//horizontal on x=3
word_position_HTU[k++] = new Array("365","355","345","335","325","315","305","X");
word_position_HTU[k++] = new Array("363","353","343","333","323","313","303","X");
word_position_HTU[k++] = new Array("361","351","341","331","321","311","301","X");
//vertical on x=3
word_position_HTU[k++] = new Array("356","355","354","353","352","351","350","X");
word_position_HTU[k++] = new Array("336","335","334","333","332","331","330","X");
word_position_HTU[k++] = new Array("316","315","314","313","312","311","310","X");
//horizontal on x=5
word_position_HTU[k++] = new Array("565","555","545","535","525","515","505","X");
word_position_HTU[k++] = new Array("563","553","543","533","523","513","503","X");
word_position_HTU[k++] = new Array("561","551","541","531","521","511","501","X");
//vertical on x=5
word_position_HTU[k++] = new Array("556","555","554","553","552","551","550","X");
word_position_HTU[k++] = new Array("536","535","534","533","532","531","530","X");
word_position_HTU[k++] = new Array("516","515","514","513","512","511","510","X");

//Left to right"," lower to higher z=5
word_position_HTU[k++] = new Array("055","155","255","355","455","555","655","Z");
word_position_HTU[k++] = new Array("035","135","235","335","435","535","635","Z");
word_position_HTU[k++] = new Array("015","115","215","315","415","515","615","Z");
//left to right"," higher to lower Z=5
word_position_HTU[k++] = new Array("165","155","145","135","125","115","105","Z");
word_position_HTU[k++] = new Array("365","355","345","335","325","315","305","Z");
word_position_HTU[k++] = new Array("565","555","545","535","525","515","505","Z");

//Left to right"," lower to higher z=3
word_position_HTU[k++] = new Array("053","153","253","353","453","553","653","Z");
word_position_HTU[k++] = new Array("033","133","233","333","433","533","633","Z");
word_position_HTU[k++] = new Array("013","113","213","313","413","513","613","Z");
//left to right"," higher to lower Z=3
word_position_HTU[k++] = new Array("163","153","143","133","123","113","103","Z");
word_position_HTU[k++] = new Array("363","353","343","333","323","313","303","Z");
word_position_HTU[k++] = new Array("563","553","543","533","523","513","503","Z");
//Left to right"," lower to higher z=1
word_position_HTU[k++] = new Array("051","151","251","351","451","551","651","Z");
word_position_HTU[k++] = new Array("031","131","231","331","431","531","631","Z");
word_position_HTU[k++] = new Array("011","111","211","311","411","511","611","Z");
//left to right"," higher to lower Z=1
word_position_HTU[k++] = new Array("161","151","141","131","121","111","101","Z");
word_position_HTU[k++] = new Array("361","351","341","331","321","311","301","Z");
word_position_HTU[k++] = new Array("561","551","541","531","521","511","501","Z");

/* saved_word_position is the selected part of word_position */
var saved_word_position = new Array(7);
var sub_word_position = new Array(7);
var word_letters = new Array(7);


test = '';
for(ix = 0; ix <=6; ix++) {
	//debug_alert('x row');
	for(iz = 0; iz <=6; iz++) {
		//alert('z = '+iz);
		for (iy = 0; iy <= 6; iy++){
			//alert(' y= '+iy);
			// make_HTU makes HTU & HTU_string
			HTU_text = '';
			HTU = make_HTU(ix,iy,iz);

			//alert('HTU='+HTU);
			test += '  HTU='+HTU_text;
			if ((iz == 0) || (iz == 2) || (iz == 4) || (iz ==6)) {
				//alert('dotted');
				//dotted layer
				/*
				xxxxxxx
				xoxoxox
				xxxxxxx
				xoxoxox
				xxxxxxx
				xoxoxox
				xxxxxxx
				*/
				colour_filenames[HTU] =  'cube_raw2_black.png';
				if ((iy == 1) || (iy == 3) || (iy == 5)) {	
					test += 'whitish y at' +HTU_text;			
					if  ((ix == 1) || (ix == 3) || (ix == 5)) {
						test += 'white*** '+HTU_text;
						colour_filenames[HTU] =  'cube_raw2_white.png';
					}
				}
				//alert('end dotted');
				
			} else {
				//alert('straight');
				/*
				xoxoxox
				ooooooo
				xoxoxox
				ooooooo
				xoxoxox
				ooooooo
				xoxoxox
				*/
				colour_filenames[HTU] =  'cube_raw2_black.png';
	
				if ((iy == 1) || (iy == 3) || (iy == 5)) {				
					colour_filenames[HTU] =  'cube_raw2_white.png';
						//test += 'white at '+ix +iy +iz;
				}
				if  ((ix == 1) || (ix == 3) || (ix == 5)) {
					colour_filenames[HTU] =  'cube_raw2_white.png';
						//test += 'white at '+ix +iy +iz;
				}
			}//else
		}//for(iy
	} //for(iz
}


