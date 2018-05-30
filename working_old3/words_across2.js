//words_across & down (actuall up!)- see introduction.ods for pictures
//Across lines
//horizontal on B = 1,3,5 D=1,3,5
//horizontal on A = 1,3,5 D=1,3,5
//horizontal on d = 1,3,5 already covered

//Vertical   on A = 1,3,5 B = 1,3,5

D=64;
B=7;
A=1;
//horizontal on B = 1,3,5 D=1,3,5
//*******************************
_BD=1*B+1*D	//71
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//										71	72		73		74		75		76		77

_BD=1*B+3*D	//154
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//									154		155		156		157		158		159		160
_BD=1*B+5*D	//252
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//									252		253		254		255		256		257		258
_BD=3*B+1*D	//95
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//									95		96		97		98		99		100		101
_BD=3*B+3*D	//198
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//									198		199		200		201		202		203		204
_BD=3*B+5*D	//266
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//									266		267		268		269		270		271		272

_BD=5*B+1*D	//102
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//									102		103		104		105		106		107		108
_BD=5*B+3*D	//205
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//									205		206		207		208		209		210		211
_BD=5*B+5*D	//273
words_across  =  words_across.concat(0+_BD,	1+_BD,	2+_BD,	3+_BD, 4+_BD,	5+_BD,	6+_BD);
//									273		274		275		276		277		278		279

//horizontal on A = 1,3,5 D=1,3,5
//			    A = 1	  D=1,3,5
//*******************************
_AD=1*A+1*D		//50
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									50		57		64		71		78		85		92
_AD=1*A+3*D		//148
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									148		155		162		169		176		183		190
_AD=1*A+5*D		//246
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									246		253		260		267		274		281		288

//horizontal on A = 3 D=1,3,5
//-------------------------------
_AD=3*A+1*D		//52
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									52		59		66		73		80		87		94
_AD=3*A+3*D		//150
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									150		157		164		171		178		185		192
_AD=3*A+5*D		//248
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									248		255		262		279		276		283		290

//horizontal on A = 3 D=1,3,5
//-------------------------------
_AD=5*A+1*D		//54
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									54		61		58		65		72		79		96
_AD=5*A+3*D		//152
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									152		159		166		173		180		187		194
_AD=5*A+5*D		//250
words_across  =  words_across.concat(0+_AD,	7+_AD,	14+_AD,	21+_AD, 28+_AD,	35+_AD,	+42+_AD);
//									250		257		264		271		278		285		292
 












//vertical on A=5
//left to right, higher to lower D=5
//----------------------------------
_BD = 64+7*5	//99
words_across  =  words_across.concat(0*A+_BD,	1*A+_BD,	2*A+_BD,	30*A+_BD , 40*A+_BD , 50*A+_BD , 60*A+_BD);
//										99		100			101			102			103			104			105
_BD = 64+7*3;	//85
words_across  =  words_across.concat(0*A+_BD,	1*A+_BD,	2*A+_BD,	30*A+_BD,	40*A+_BD,	50*A+_BD,	60*A+_BD);
//										85		86			87			88			89			90			91
_BD = 64+7; 	//71
words_across  =  words_across.concat(0*A+_BD,	1*A+_BD , 2*A+_BD , 3*A+_BD , 4*A+_BD , 5*A+_BD , 6*A+_BD);
//										71		72			73		74			75			76			77

//left to right, higher to lower D=3
//----------------------------------
_BD = 64+7*5	//99
words_across  =  words_across.concat(0*A+_BD,	1*A+_BD,	2*A+_BD,	30*A+_BD , 40*A+_BD , 50*A+_BD , 60*A+_BD);
//										99		100			101			102			103			104			105
_BD = 64+7*3;	//85
words_across  =  words_across.concat(0*A+_BD,	1*A+_BD,	2*A+_BD,	30*A+_BD,	40*A+_BD,	50*A+_BD,	60*A+_BD);
//										85		86			87			88			89			90			91
_BD = 64+7; 	//71
words_across  =  words_across.concat(0*A+_BD,	1*A+_BD , 2*A+_BD , 3*A+_BD , 4*A+_BD , 5*A+_BD , 6*A+_BD);
//										71		72			73		74			75			76			77

//Left to right, lower to higher D=1
//----------------------------------

_BD = 64+7*5; 	//99
words_across  =  words_across.concat(0*A+_BD,	1*A+_BD,	2*A+_BD,	30*A+_BD , 40*A+_BD , 50*A+_BD , 60*A+_BD);
//										99		100			101			102			103			104			105
_BD = 64+7*3;	//85
words_across  =  words_across.concat(0*A+_BD,	1*A+_BD,	2*A+_BD,	30*A+_BD,	40*A+_BD,	50*A+_BD,	60*A+_BD);
//										85		86			87			88			89			90			91
_BD = 64+7; 	//71
