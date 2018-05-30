// arrays.js


//54 words possible on a 7 x 7 x 7 cube
name_list = new Array();
word_location= new Array();
//Across, Behind, Down 
A = 49;
B = 7;
D = 1;
//word_location = word_location.concat(0*A+1*B+5)

//horizontal on B=1
name_list = name_list.concat("Horizontal B=1");
word_location =  word_location.concat(0*A+1*B+5, 1*A+1*B+5 , 2*A+1*B+5 , 3*A+1*B+5 , 4*A+1*B+5 , 5*A+1*B+5 , 6*A+1*B+5);
//									012			61			110			159			208			257			306
word_location =  word_location.concat(0*A+1*B+3, 1*A+1*B+3 , 2*A+1*B+3 , 3*A+1*B+3 , 4*A+1*B+3 , 5*A+1*B+3 , 6*A+1*B+3);
//									011			60			109			158			207			256			305
word_location =  word_location.concat(0*A+1*B+1, 1*A+1*B+1 , 2*A+1*B+1 , 3*A+1*B+1 , 4*A+1*B+1 , 5*A+1*B+1 , 6*A+1*B+1);
//									010			59			108			157			206			255			304


//vertical on B=1
name_list = name_list.concat("Vertical B=1");

word_location =  word_location.concat(1*A+1*B+6, 1*A+1*B+5 , 1*A+1*B+4 , 1*A+1*B+3 , 1*A+1*B+2 , 1*A+1*B+1 , 1*A+1*B+0);
//									062			61			60			59			58			57			56
word_location =  word_location.concat(3*A+1*B+6, 3*A+1*B+5 , 3*A+1*B+4 , 3*A+1*B+3 , 3*A+1*B+2 , 3*A+1*B+1 , 3*A+1*B+0);
//									160			159			158			157			156			155			154
word_location =  word_location.concat(5*A+1*B+6, 5*A+1*B+5 , 5*A+1*B+4 , 5*A+1*B+3 , 5*A+1*B+2 , 5*A+1*B+1 , 5*A+1*B+0);
//									258			257			256			255			254			253			252



//horizontal on B=3

name_list = name_list.concat("Horizontal B=3");

word_location =  word_location.concat(0*A+3*B+5, 1*A+3*B+5 , 2*A+3*B+5 , 3*A+3*B+5 , 4*A+3*B+5 , 5*A+3*B+5 , 6*A+3*B+5);
//										26			75			124			173			222			271			320
word_location =  word_location.concat(0*A+3*B+3, 1*A+3*B+3 , 2*A+3*B+3 , 3*A+3*B+3 , 4*A+3*B+3 , 5*A+3*B+3 , 6*A+3*B+3);
//										24			73			122			171			220			269			318
word_location =  word_location.concat(0*A+3*B+1, 1*A+3*B+1 , 2*A+3*B+1 , 3*A+3*B+1 , 4*A+3*B+1 , 5*A+3*B+1 , 6*A+3*B+1);
//										22			71			120			169			218			267			316

//vertical on B=3
name_list = name_list.concat("Vertcal B=3");

word_location =  word_location.concat(1*A+3*B+6, 1*A+3*B+5 , 1*A+3*B+4 , 1*A+3*B+3 , 1*A+3*B+2 , 1*A+3*B+1 , 1*A+3*B+0);
//										76			75			74			73			72			71			70
word_location =  word_location.concat(3*A+3*B+6, 3*A+3*B+5 , 3*A+3*B+4 , 3*A+3*B+3 , 3*A+3*B+2 , 3*A+3*B+1 , 3*A+3*B+0);
//										174			173			172			171			170			169			168
word_location =  word_location.concat(5*A+3*B+6, 5*A+3*B+5 , 5*A+3*B+4 , 5*A+3*B+3 , 5*A+3*B+2 , 5*A+3*B+1 , 5*A+3*B+0);
//										272			271			270			269			268			267			266


//horizontal on B=5
name_list = name_list.concat("Horizontal B=5");

word_location =  word_location.concat(0*A+5*B+5, 1*A+5*B+5 , 2*A+5*B+5 , 3*A+5*B+5 , 4*A+5*B+5 , 5*A+5*B+5 , 6*A+5*B+5);
//										40			89			138			187			236			285			334
word_location =  word_location.concat(0*A+5*B+3, 1*A+5*B+3 , 2*A+5*B+3 , 3*A+5*B+3 , 4*A+5*B+3 , 5*A+5*B+3 , 6*A+5*B+3);
//										38			87			136			185			234			283			332
word_location =  word_location.concat(0*A+5*B+1, 1*A+5*B+1 , 2*A+5*B+1 , 3*A+5*B+1 , 4*A+5*B+1 , 5*A+5*B+1 , 6*A+5*B+1);
//										36			85			134			183			232			281			330

//vertical on B=5
name_list = name_list.concat("Vertical B=5");

word_location =  word_location.concat(1*A+5*B+6, 1*A+5*B+5 , 1*A+5*B+4 , 1*A+5*B+3 , 1*A+5*B+2 , 1*A+5*B+1 , 1*A+5*B+0);
//										90			89			88			87			86			85			84
word_location =  word_location.concat(3*A+5*B+6, 3*A+5*B+5 , 3*A+5*B+4 , 3*A+5*B+3 , 3*A+5*B+2 , 3*A+5*B+1 , 3*A+5*B+0);
//										188			187			186			185			184			183			182
word_location =  word_location.concat(5*A+5*B+6, 5*A+5*B+5 , 5*A+5*B+4 , 5*A+5*B+3 , 5*A+5*B+2 , 5*A+5*B+1 , 5*A+5*B+0);
//										286			285			284			283			282			281			280


//horizontal on A=1
name_list = name_list.concat("Horizontal A=1");

word_location = word_location.concat(1*A+6*B+5 , 1*A+5*B+5 , 1*A+4*B+5 , 1*A+3*B+5 , 1*A+2*B+5 , 1*A+1*B+5 , 1*A+0*B+5);
//										96			89			82			75			68			61			54			
word_location = word_location.concat(1*A+6*B+3 , 1*A+5*B+3 , 1*A+4*B+3 , 1*A+3*B+3 , 1*A+2*B+3 , 1*A+1*B+3 , 1*A+0*B+3);
//										94			87			80			73			66			59			52
word_location = word_location.concat(1*A+6*B+1 , 1*A+5*B+1 , 1*A+4*B+1 , 1*A+3*B+1 , 1*A+2*B+1 , 1*A+1*B+1 , 1*A+0*B+1);
//										92			85			78			71			64			57			50

//vertical on A=1
name_list = name_list.concat("Vertical A=1");

word_location = word_location.concat(1*A+5*B+6 , 1*A+5*B+5 , 1*A+5*B+4 , 1*A+5*B+3 , 1*A+5*B+2 , 1*A+5*B+1 , 1*A+5*B+0);
//										90			89			88			87			86			85			84
word_location = word_location.concat(1*A+3*B+6 , 1*A+3*B+5 , 1*A+3*B+4 , 1*A+3*B+3 , 1*A+3*B+2 , 1*A+3*B+1 , 1*A+3*B+0);		
//										76			75			74			73			72			71			70
word_location = word_location.concat(1*A+1*B+6 , 1*A+1*B+5 , 1*A+1*B+4 , 1*A+1*B+3 , 1*A+1*B+2 , 1*A+1*B+1 , 1*A+1*B+0);
//										62			61			60			59			58			57			56


//horizontal on A=3
name_list = name_list.concat("Horizontal A=3");

word_location = word_location.concat(3*A+6*B+5 , 3*A+5*B+5 , 3*A+4*B+5 , 3*A+3*B+5 , 3*A+2*B+5 , 3*A+1*B+5 , 3*A+0*B+5);
//										194			187			180			173			166			159			152		
word_location = word_location.concat(3*A+6*B+3 , 3*A+5*B+3 , 3*A+4*B+3 , 3*A+3*B+3 , 3*A+2*B+3 , 3*A+1*B+3 , 3*A+0*B+3);
//										192			185			178			171			164			157			150
word_location = word_location.concat(3*A+6*B+1 , 3*A+5*B+1 , 3*A+4*B+1 , 3*A+3*B+1 , 3*A+2*B+1 , 3*A+1*B+1 , 3*A+0*B+1);
//										190			183			176			169			162			155			148


//vertical on A=3
name_list = name_list.concat("Vertical A=3");
word_location = word_location.concat(3*A+5*B+6 , 3*A+5*B+5 , 3*A+5*B+4 , 3*A+5*B+3 , 3*A+5*B+2 , 3*A+5*B+1 , 3*A+5*B+0);
//										188			187			186			185			184			183			182
word_location = word_location.concat(3*A+3*B+6 , 3*A+3*B+5 , 3*A+3*B+4 , 3*A+3*B+3 , 3*A+3*B+2 , 3*A+3*B+1 , 3*A+3*B+0);
//										174			173			172			171			170			169			168					
word_location = word_location.concat(3*A+1*B+6 , 3*A+1*B+5 , 3*A+1*B+4 , 3*A+1*B+3 , 3*A+1*B+2 , 3*A+1*B+1 , 3*A+1*B+0);
//										160			159			158			157			156			155			154

//horizontal on A=5
name_list = name_list.concat("Horizontal A=5");

word_location = word_location.concat(5*A+6*B+5 , 5*A+5*B+5 , 5*A+4*B+5 , 5*A+3*B+5 , 5*A+2*B+5 , 5*A+1*B+5 , 5*A+0*B+5);
//										292			285			278			271			264			257			250
word_location = word_location.concat(5*A+6*B+3 , 5*A+5*B+3 , 5*A+4*B+3 , 5*A+3*B+3 , 5*A+2*B+3 , 5*A+1*B+3 , 5*A+0*B+3);
//										290			283			276			269			262			255			248
word_location = word_location.concat(5*A+6*B+1 , 5*A+5*B+1 , 5*A+4*B+1 , 5*A+3*B+1 , 5*A+2*B+1 , 5*A+1*B+1 , 5*A+0*B+1);
//										288			281			274			267			260			253			246


//vertical on A=5
name_list = name_list.concat("Vertical A=5");

word_location = word_location.concat(5*A+5*B+6 , 5*A+5*B+5 , 5*A+5*B+4 , 5*A+5*B+3 , 5*A+5*B+2 , 5*A+5*B+1 , 5*A+5*B+0);
//										286			285			284			283			282			281			280
word_location = word_location.concat(5*A+3*B+6 , 5*A+3*B+5 , 5*A+3*B+4 , 5*A+3*B+3 , 5*A+3*B+2 , 5*A+3*B+1 , 5*A+3*B+0);
//										272			271			270			269			268			267			266
word_location = word_location.concat(5*A+1*B+6 , 5*A+1*B+5 , 5*A+1*B+4 , 5*A+1*B+3 , 5*A+1*B+2 , 5*A+1*B+1 , 5*A+1*B+0);
//										258			257			256			255			254			253			252

//Left to right, lower to higher C=5
name_list = name_list.concat("Left to Right lower to higher \nHorizontal C=5");

word_location = word_location.concat(0*A+5*B+5 , 1*A+5*B+5 , 2*A+5*B+5 , 3*A+5*B+5 , 4*A+5*B+5 , 5*A+5*B+5 , 6*A+5*B+5);
//										40			89			138			187			236			285			334
word_location = word_location.concat(0*A+3*B+5 , 1*A+3*B+5 , 2*A+3*B+5 , 3*A+3*B+5 , 4*A+3*B+5 , 5*A+3*B+5 , 6*A+3*B+5);
//										26			75			124			173			222			271			320
word_location = word_location.concat(0*A+1*B+5 , 1*A+1*B+5 , 2*A+1*B+5 , 3*A+1*B+5 , 4*A+1*B+5 , 5*A+1*B+5 , 6*A+1*B+5);
//										12			61			110			159			208			257			306



//left to right, higher to lower C=5
name_list = name_list.concat('left to right, higher to lower C=5');
word_location = word_location.concat(1*A+6*B+5 , 1*A+5*B+5 , 1*A+4*B+5 , 1*A+3*B+5 , 1*A+2*B+5 , 1*A+1*B+5 , 1*A+0*B+5);
//										96			89			82			75			68			61			54	
word_location = word_location.concat(3*A+6*B+5 , 3*A+5*B+5 , 3*A+4*B+5 , 3*A+3*B+5 , 3*A+2*B+5 , 3*A+1*B+5 , 3*A+0*B+5);
//										194			187			180			173			166			159			152
word_location = word_location.concat(5*A+6*B+5 , 5*A+5*B+5 , 5*A+4*B+5 , 5*A+3*B+5 , 5*A+2*B+5 , 5*A+1*B+5 , 5*A+0*B+5);
//										292			285			278			271			264			257			250


//Left to right, lower to higher C=3
name_list = name_list.concat('Left to right, lower to higher C=3');
word_location  =  word_location.concat(0*A+5*B+3 , 1*A+5*B+3 , 2*A+5*B+3 , 3*A+5*B+3 , 4*A+5*B+3 , 5*A+5*B+3 , 6*A+5*B+3);
//											38			87			136			185			234			283			332
word_location  =  word_location.concat(0*A+3*B+3 , 1*A+3*B+3 , 2*A+3*B+3 , 3*A+3*B+3 , 4*A+3*B+3 , 5*A+3*B+3 , 6*A+3*B+3);
//											24			73			122			171			220			269			318
word_location  =  word_location.concat(0*A+1*B+3 , 1*A+1*B+3 , 2*A+1*B+3 , 3*A+1*B+3 , 4*A+1*B+3 , 5*A+1*B+3 , 6*A+1*B+3);
//											10			59			108			157			206			255			304


//left to right, higher to lower C=3
name_list = name_list.concat('left to right, higher to lower C=3');
word_location  =  word_location.concat(1*A+6*B+3 , 1*A+5*B+3 , 1*A+4*B+3 , 1*A+3*B+3 , 1*A+2*B+3 , 1*A+1*B+3 , 1*A+0*B+3);
//											94			87			80			73			66			59			52
word_location  =  word_location.concat(3*A+6*B+3 , 3*A+5*B+3 , 3*A+4*B+3 , 3*A+3*B+3 , 3*A+2*B+3 , 3*A+1*B+3 , 3*A+0*B+3);
//											192			185			178			171			164			157			150
word_location  =  word_location.concat(5*A+6*B+3 , 5*A+5*B+3 , 5*A+4*B+3 , 5*A+3*B+3 , 5*A+2*B+3 , 5*A+1*B+3 , 5*A+0*B+3);
//											290			283			276			269			262			255			248


//Left to right, lower to higher C=1
name_list = name_list.concat('Left to right, lower to higher C=1');
word_location  =  word_location.concat(0*A+5*B+1 , 1*A+5*B+1 , 2*A+5*B+1 , 3*A+5*B+1 , 4*A+5*B+1 , 5*A+5*B+1 , 6*A+5*B+1);
//											36			85			134			183			232			281			330
word_location  =  word_location.concat(0*A+3*B+1 , 1*A+3*B+1 , 2*A+3*B+1 , 3*A+3*B+1 , 4*A+3*B+1 , 5*A+3*B+1 , 6*A+3*B+1);
//											22			71			120			169			218			267			316
word_location  =  word_location.concat(0*A+1*B+1 , 1*A+1*B+1 , 2*A+1*B+1 , 3*A+1*B+1 , 4*A+1*B+1 , 5*A+1*B+1 , 6*A+1*B+1);
//											8			57			106			155			204			253			302



//left to right, higher to lower C=1
name_list = name_list.concat('left to right, higher to lower C=1');
word_location  =  word_location.concat(1*A+6*B+1 , 1*A+5*B+1 , 1*A+4*B+1 , 1*A+3*B+1 , 1*A+2*B+1 , 1*A+1*B+1 , 1*A+0*B+1);
//											92			85			68			61			54			47			40
word_location  =  word_location.concat(3*A+6*B+1 , 3*A+5*B+1 , 3*A+4*B+1 , 3*A+3*B+1 , 3*A+2*B+1 , 3*A+1*B+1 , 3*A+0*B+1);
//											190			183			176			169			162			155			148
word_location  =  word_location.concat(5*A+6*B+1 , 5*A+5*B+1 , 5*A+4*B+1 , 5*A+3*B+1 , 5*A+2*B+1 , 5*A+1*B+1 , 5*A+0*B+1);
//											288			281			274			267			260			253			246


