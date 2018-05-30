// arrays.js


//54 words possible on a 7 x 7 x 7 cube
name_list = new Array();
word_list= new Array();
H = 49;
T = 7;
U = 1;
//horizontal on y=1
name_list = name_list.concat("Horizontal y=1");
word_list =  word_list.concat(0*H+1*T+5, 1*H+1*T+5 , 2*H+1*T+5 , 3*H+1*T+5 , 4*H+1*T+5 , 5*H+1*T+5 , 6*H+1*T+5);
//								015			115			215			315			415			515			615
word_list =  word_list.concat(0*H+1*T+3, 1*H+1*T+3 , 2*H+1*T+3 , 3*H+1*T+3 , 4*H+1*T+3 , 5*H+1*T+3 , 6*H+1*T+3);
//								013			113			213			313			413			513			613
word_list =  word_list.concat(0*H+1*T+1, 1*H+1*T+1 , 2*H+1*T+1 , 3*H+1*T+1 , 4*H+1*T+1 , 5*H+1*T+1 , 6*H+1*T+1);
//								011			111			211			311			411			511			611


//vertical on y=1
name_list = name_list.concat("Vertical y=1");

word_list =  word_list.concat(1*H+1*T+6, 1*H+1*T+5 , 1*H+1*T+4 , 1*H+1*T+3 , 1*H+1*T+2 , 1*H+1*T+1 , 1*H+1*T+0);
//								116			115			114			113			112			111			110
word_list =  word_list.concat(3*H+1*T+6, 3*H+1*T+5 , 3*H+1*T+4 , 3*H+1*T+3 , 3*H+1*T+2 , 3*H+1*T+1 , 3*H+1*T+0);
//								316			315			314			313			312			311			310
word_list =  word_list.concat(5*H+1*T+6, 5*H+1*T+5 , 5*H+1*T+4 , 5*H+1*T+3 , 5*H+1*T+2 , 5*H+1*T+1 , 5*H+1*T+0);
//								516			515			514			513			512			511			510



//horizontal on y=3

name_list = name_list.concat("Horizontal y=3");

word_list =  word_list.concat(0*H+3*T+5, 1*H+3*T+5 , 2*H+3*T+5 , 3*H+3*T+5 , 4*H+3*T+5 , 5*H+3*T+5 , 6*H+3*T+5);
//								035			135			235			335			435			535			635
word_list =  word_list.concat(0*H+3*T+3, 1*H+3*T+3 , 2*H+3*T+3 , 3*H+3*T+3 , 4*H+3*T+3 , 5*H+3*T+3 , 6*H+3*T+3);
//								033			133			233			333			433			533			633
word_list =  word_list.concat(0*H+3*T+1, 1*H+3*T+1 , 2*H+3*T+1 , 3*H+3*T+1 , 4*H+3*T+1 , 5*H+3*T+1 , 6*H+3*T+1);
//								031			131			231			331			431			531			631


//vertical on y=3
name_list = name_list.concat("Vertcal y=3");

word_list =  word_list.concat(1*H+3*T+6, 1*H+3*T+5 , 1*H+3*T+4 , 1*H+3*T+3 , 1*H+3*T+2 , 1*H+3*T+1 , 1*H+3*T+0);
//								136			135			134			133			132			131			130
word_list =  word_list.concat(3*H+3*T+6, 3*H+3*T+5 , 3*H+3*T+4 , 3*H+3*T+3 , 3*H+3*T+2 , 3*H+3*T+1 , 3*H+3*T+0);
//								336			335			334			333			332			331			330
word_list =  word_list.concat(5*H+3*T+6, 5*H+3*T+5 , 5*H+3*T+4 , 5*H+3*T+3 , 5*H+3*T+2 , 5*H+3*T+1 , 5*H+3*T+0);
//								536			535			534			533			532			531			530


//horizontal on y=5
name_list = name_list.concat("Horizontal y=5");

word_list =  word_list.concat(0*H+5*T+5, 1*H+5*T+5 , 2*H+5*T+5 , 3*H+5*T+5 , 4*H+5*T+5 , 5*H+5*T+5 , 6*H+5*T+5);
//								055			155			255			355			455			555			655
word_list =  word_list.concat(0*H+5*T+3, 1*H+5*T+3 , 2*H+5*T+3 , 3*H+5*T+3 , 4*H+5*T+3 , 5*H+5*T+3 , 6*H+5*T+3);
//								053			153			253			353			453			553			653
word_list =  word_list.concat(0*H+5*T+1, 1*H+5*T+1 , 2*H+5*T+1 , 3*H+5*T+1 , 4*H+5*T+1 , 5*H+5*T+1 , 6*H+5*T+1);
//								051			151			251			351			451			551			651

//vertical on y=5
name_list = name_list.concat("Vertical y=5");

word_list =  word_list.concat(1*H+5*T+6, 1*H+5*T+5 , 1*H+5*T+4 , 1*H+5*T+3 , 1*H+5*T+2 , 1*H+5*T+1 , 1*H+5*T+0);
//								156			155			154			153			152			151			150
word_list =  word_list.concat(3*H+5*T+6, 3*H+5*T+5 , 3*H+5*T+4 , 3*H+5*T+3 , 3*H+5*T+2 , 3*H+5*T+1 , 3*H+5*T+0);
//								356			355			354			353			352			351			350
word_list =  word_list.concat(5*H+5*T+6, 5*H+5*T+5 , 5*H+5*T+4 , 5*H+5*T+3 , 5*H+5*T+2 , 5*H+5*T+1 , 5*H+5*T+0);
//								556			555			554			553			552			551			550


//horizontal on x=1
name_list = name_list.concat("Horizontal x=1");

word_list = word_list.concat(1*H+6*T+5 , 1*H+5*T+5 , 1*H+4*T+5 , 1*H+3*T+5 , 1*H+2*T+5 , 1*H+1*T+5 , 1*H+0*T+5);
//								165			155			145			135			125			115			105
word_list = word_list.concat(1*H+6*T+3 , 1*H+5*T+3 , 1*H+4*T+3 , 1*H+3*T+3 , 1*H+2*T+3 , 1*H+1*T+3 , 1*H+0*T+3);
//								163			153			143			133			123			113			103
word_list = word_list.concat(1*H+6*T+1 , 1*H+5*T+1 , 1*H+4*T+1 , 1*H+3*T+1 , 1*H+2*T+1 , 1*H+1*T+1 , 1*H+0*T+1);
//								161			151			141			131			121			111			101

//vertical on x=1
name_list = name_list.concat("Verticalal x=1");

word_list = word_list.concat(1*H+5*T+6 , 1*H+5*T+5 , 1*H+5*T+4 , 1*H+5*T+3 , 1*H+5*T+2 , 1*H+5*T+1 , 1*H+5*T+0);
//								156			155			154			153			152			151			150
word_list = word_list.concat(1*H+3*T+6 , 1*H+3*T+5 , 1*H+3*T+4 , 1*H+3*T+3 , 1*H+3*T+2 , 1*H+3*T+1 , 1*H+3*T+0);		
//								136			135			134			133			132			113			130
word_list = word_list.concat(1*H+1*T+6 , 1*H+1*T+5 , 1*H+1*T+4 , 1*H+1*T+3 , 1*H+1*T+2 , 1*H+1*T+1 , 1*H+1*T+0);
//								116			115			114			113			112			111			110"


//horizontal on x=3
name_list = name_list.concat("Horizontal x=3");

word_list = word_list.concat(3*H+6*T+5 , 3*H+5*T+5 , 3*H+4*T+5 , 3*H+3*T+5 , 3*H+2*T+5 , 3*H+1*T+5 , 3*H+0*T+5);
//								365			355			345			335			325			315			305		
word_list = word_list.concat(3*H+6*T+3 , 3*H+5*T+3 , 3*H+4*T+3 , 3*H+3*T+3 , 3*H+2*T+3 , 3*H+1*T+3 , 3*H+0*T+3);
//								363			353			343			333			323			313			303
word_list = word_list.concat(3*H+6*T+1 , 3*H+5*T+1 , 3*H+4*T+1 , 3*H+3*T+1 , 3*H+2*T+1 , 3*H+1*T+1 , 3*H+0*T+1);
//								361			351			341			331			321			311			301


//vertical on x=3
name_list = name_list.concat("Vertical x=3");
word_list = word_list.concat(3*H+5*T+6 , 3*H+5*T+5 , 3*H+5*T+4 , 3*H+5*T+3 , 3*H+5*T+2 , 3*H+5*T+1 , 3*H+5*T+0);
//								356			355			354			353			352			351			350
word_list = word_list.concat(3*H+3*T+6 , 3*H+3*T+5 , 3*H+3*T+4 , 3*H+3*T+3 , 3*H+3*T+2 , 3*H+3*T+1 , 3*H+3*T+0);
//								336			335			334			333			332			331			330							
word_list = word_list.concat(3*H+1*T+6 , 3*H+1*T+5 , 3*H+1*T+4 , 3*H+1*T+3 , 3*H+1*T+2 , 3*H+1*T+1 , 3*H+1*T+0);
//								316			315			314			313			312			311			310

//horizontal on x=5
name_list = name_list.concat("Horizontal x=5");

word_list = word_list.concat(5*H+6*T+5 , 5*H+5*T+5 , 5*H+4*T+5 , 5*H+3*T+5 , 5*H+2*T+5 , 5*H+1*T+5 , 5*H+0*T+5);
//								565			555			545			535			525			515			505
word_list = word_list.concat(5*H+6*T+3 , 5*H+5*T+3 , 5*H+4*T+3 , 5*H+3*T+3 , 5*H+2*T+3 , 5*H+1*T+3 , 5*H+0*T+3);
//								563			553			543			533			523			513			503
word_list = word_list.concat(5*H+6*T+1 , 5*H+5*T+1 , 5*H+4*T+1 , 5*H+3*T+1 , 5*H+2*T+1 , 5*H+1*T+1 , 5*H+0*T+1);
//								561			551			541			531			521			511			501


//vertical on x=5
name_list = name_list.concat("Vertical x=5");

word_list = word_list.concat(5*H+5*T+6 , 5*H+5*T+5 , 5*H+5*T+4 , 5*H+5*T+3 , 5*H+5*T+2 , 5*H+5*T+1 , 5*H+5*T+0);
//								556			555			554			553			552			551			550
word_list = word_list.concat(5*H+3*T+6 , 5*H+3*T+5 , 5*H+3*T+4 , 5*H+3*T+3 , 5*H+3*T+2 , 5*H+3*T+1 , 5*H+3*T+0);
//								536			535			534			533			532			531			530
word_list = word_list.concat(5*H+1*T+6 , 5*H+1*T+5 , 5*H+1*T+4 , 5*H+1*T+3 , 5*H+1*T+2 , 5*H+1*T+1 , 5*H+1*T+0);
//								516			515			514			513			512			511			510

//Left to right, lower to higher z=5
name_list = name_list.concat("Left to Right lower to higher \nHorizontal z=5");

word_list = word_list.concat(0*H+5*T+5 , 1*H+5*T+5 , 2*H+5*T+5 , 3*H+5*T+5 , 4*H+5*T+5 , 5*H+5*T+5 , 6*H+5*T+5);
//								055			155			255			355			455			555			655
word_list = word_list.concat(0*H+3*T+5 , 1*H+3*T+5 , 2*H+3*T+5 , 3*H+3*T+5 , 4*H+3*T+5 , 5*H+3*T+5 , 6*H+3*T+5);
//								035			135			235			335			435			535			635
word_list = word_list.concat(0*H+1*T+5 , 1*H+1*T+5 , 2*H+1*T+5 , 3*H+1*T+5 , 4*H+1*T+5 , 5*H+1*T+5 , 6*H+1*T+5);
//								015			115			215			315			415			515			615


//left to right, higher to lower Z=5
name_list = name_list.concat('left to right, higher to lower Z=5');
word_list = word_list.concat(1*H+6*T+5 , 1*H+5*T+5 , 1*H+4*T+5 , 1*H+3*T+5 , 1*H+2*T+5 , 1*H+1*T+5 , 1*H+0*T+5);
//								165			155			145			135			125			115			105	
word_list = word_list.concat(3*H+6*T+5 , 3*H+5*T+5 , 3*H+4*T+5 , 3*H+3*T+5 , 3*H+2*T+5 , 3*H+1*T+5 , 3*H+0*T+5);
//								365			355			345			335			325			315			305
word_list = word_list.concat(5*H+6*T+5 , 5*H+5*T+5 , 5*H+4*T+5 , 5*H+3*T+5 , 5*H+2*T+5 , 5*H+1*T+5 , 5*H+0*T+5);
//								565			555			545			535			525			515			505


//Left to right, lower to higher z=3
name_list = name_list.concat('Left to right, lower to higher z=3');
word_list  =  word_list.concat(0*H+5*T+3 , 1*H+5*T+3 , 2*H+5*T+3 , 3*H+5*T+3 , 4*H+5*T+3 , 5*H+5*T+3 , 6*H+5*T+3);
//									053			153			253			353			453			553			653
word_list  =  word_list.concat(0*H+3*T+3 , 1*H+3*T+3 , 2*H+3*T+3 , 3*H+3*T+3 , 4*H+3*T+3 , 5*H+3*T+3 , 6*H+3*T+3);
//									033			133			233			333			433			533			633
word_list  =  word_list.concat(0*H+1*T+3 , 1*H+1*T+3 , 2*H+1*T+3 , 3*H+1*T+3 , 4*H+1*T+3 , 5*H+1*T+3 , 6*H+1*T+3);
//									013			113			213			313			413			513			613

//left to right, higher to lower Z=3
name_list = name_list.concat('left to right, higher to lower Z=3');
word_list  =  word_list.concat(1*H+6*T+3 , 1*H+5*T+3 , 1*H+4*T+3 , 1*H+3*T+3 , 1*H+2*T+3 , 1*H+1*T+3 , 1*H+0*T+3);
//									163			153			143			133			123			113			103
word_list  =  word_list.concat(3*H+6*T+3 , 3*H+5*T+3 , 3*H+4*T+3 , 3*H+3*T+3 , 3*H+2*T+3 , 3*H+1*T+3 , 3*H+0*T+3);
//									363			353			343			333			323			313			303
word_list  =  word_list.concat(5*H+6*T+3 , 5*H+5*T+3 , 5*H+4*T+3 , 5*H+3*T+3 , 5*H+2*T+3 , 5*H+1*T+3 , 5*H+0*T+3);
//									563			553			543			533			523			513			503


//Left to right, lower to higher z=1
name_list = name_list.concat('Left to right, lower to higher z=1');
word_list  =  word_list.concat(0*H+5*T+1 , 1*H+5*T+1 , 2*H+5*T+1 , 3*H+5*T+1 , 4*H+5*T+1 , 5*H+5*T+1 , 6*H+5*T+1);
//									051			151			251			351			451			551			651
word_list  =  word_list.concat(0*H+3*T+1 , 1*H+3*T+1 , 2*H+3*T+1 , 3*H+3*T+1 , 4*H+3*T+1 , 5*H+3*T+1 , 6*H+3*T+1);
//									031			131			231			331			431			531			631
word_list  =  word_list.concat(0*H+1*T+1 , 1*H+1*T+1 , 2*H+1*T+1 , 3*H+1*T+1 , 4*H+1*T+1 , 5*H+1*T+1 , 6*H+1*T+1);
//									011			111			211			311			411			511			611


//left to right, higher to lower Z=1
name_list = name_list.concat('left to right, higher to lower Z=1');
word_list  =  word_list.concat(1*H+6*T+1 , 1*H+5*T+1 , 1*H+4*T+1 , 1*H+3*T+1 , 1*H+2*T+1 , 1*H+1*T+1 , 1*H+0*T+1);
//									161			151			141			131			121			111			101
word_list  =  word_list.concat(3*H+6*T+1 , 3*H+5*T+1 , 3*H+4*T+1 , 3*H+3*T+1 , 3*H+2*T+1 , 3*H+1*T+1 , 3*H+0*T+1);
//									361			351			341			331			321			311			301
word_list  =  word_list.concat(5*H+6*T+1 , 5*H+5*T+1 , 5*H+4*T+1 , 5*H+3*T+1 , 5*H+2*T+1 , 5*H+1*T+1 , 5*H+0*T+1);
//									561			551			541			531			521			511			501


