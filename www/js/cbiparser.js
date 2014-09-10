
/*
	Default template driver for JS/CC generated parsers running as
	browser-based JavaScript/ECMAScript applications.
	
	WARNING: 	This parser template will not run as console and has lesser
				features for debugging than the console derivates for the
				various JavaScript platforms.
	
	Features:
	- Parser trace messages
	- Integrated panic-mode error recovery
	
	Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
	
	This is in the public domain.
*/

var _dbg_withtrace		= false;
var _dbg_string			= new String();

function __dbg_print( text )
{
	_dbg_string += text + "\n";
}

function __lex( info )
{
	var state		= 0;
	var match		= -1;
	var match_pos	= 0;
	var start		= 0;
	var pos			= info.offset + 1;

	do
	{
		pos--;
		state = 0;
		match = -2;
		start = pos;

		if( info.src.length <= start )
			return 60;

		do
		{

switch( state )
{
	case 0:
		if( ( info.src.charCodeAt( pos ) >= 9 && info.src.charCodeAt( pos ) <= 10 ) || info.src.charCodeAt( pos ) == 13 || info.src.charCodeAt( pos ) == 32 ) state = 1;
		else if( info.src.charCodeAt( pos ) == 35 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 40 ) state = 3;
		else if( info.src.charCodeAt( pos ) == 41 ) state = 4;
		else if( info.src.charCodeAt( pos ) == 42 ) state = 5;
		else if( info.src.charCodeAt( pos ) == 43 ) state = 6;
		else if( info.src.charCodeAt( pos ) == 44 ) state = 7;
		else if( info.src.charCodeAt( pos ) == 45 ) state = 8;
		else if( info.src.charCodeAt( pos ) == 47 ) state = 9;
		else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 10;
		else if( info.src.charCodeAt( pos ) == 58 ) state = 11;
		else if( info.src.charCodeAt( pos ) == 59 ) state = 12;
		else if( info.src.charCodeAt( pos ) == 60 ) state = 13;
		else if( info.src.charCodeAt( pos ) == 61 ) state = 14;
		else if( info.src.charCodeAt( pos ) == 62 ) state = 15;
		else if( info.src.charCodeAt( pos ) == 63 ) state = 16;
		else if( ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 66 ) || info.src.charCodeAt( pos ) == 70 || info.src.charCodeAt( pos ) == 72 || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 78 && info.src.charCodeAt( pos ) <= 79 ) || info.src.charCodeAt( pos ) == 81 || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 86 ) || ( info.src.charCodeAt( pos ) >= 88 && info.src.charCodeAt( pos ) <= 90 ) ) state = 17;
		else if( info.src.charCodeAt( pos ) == 91 ) state = 18;
		else if( info.src.charCodeAt( pos ) == 93 ) state = 19;
		else if( info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || info.src.charCodeAt( pos ) == 102 || info.src.charCodeAt( pos ) == 104 || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 110 && info.src.charCodeAt( pos ) <= 111 ) || info.src.charCodeAt( pos ) == 113 || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 118 ) || ( info.src.charCodeAt( pos ) >= 120 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 123 ) state = 21;
		else if( info.src.charCodeAt( pos ) == 125 ) state = 22;
		else if( info.src.charCodeAt( pos ) == 33 ) state = 51;
		else if( info.src.charCodeAt( pos ) == 68 ) state = 52;
		else if( info.src.charCodeAt( pos ) == 100 ) state = 53;
		else if( info.src.charCodeAt( pos ) == 34 ) state = 54;
		else if( info.src.charCodeAt( pos ) == 73 ) state = 55;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 56;
		else if( info.src.charCodeAt( pos ) == 46 ) state = 57;
		else if( info.src.charCodeAt( pos ) == 67 ) state = 74;
		else if( info.src.charCodeAt( pos ) == 99 ) state = 75;
		else if( info.src.charCodeAt( pos ) == 76 ) state = 76;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 77;
		else if( info.src.charCodeAt( pos ) == 77 ) state = 78;
		else if( info.src.charCodeAt( pos ) == 109 ) state = 79;
		else if( info.src.charCodeAt( pos ) == 82 ) state = 80;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 81;
		else if( info.src.charCodeAt( pos ) == 83 ) state = 82;
		else if( info.src.charCodeAt( pos ) == 115 ) state = 83;
		else if( info.src.charCodeAt( pos ) == 69 ) state = 91;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 92;
		else if( info.src.charCodeAt( pos ) == 71 ) state = 93;
		else if( info.src.charCodeAt( pos ) == 103 ) state = 94;
		else if( info.src.charCodeAt( pos ) == 80 ) state = 95;
		else if( info.src.charCodeAt( pos ) == 112 ) state = 96;
		else if( info.src.charCodeAt( pos ) == 87 ) state = 99;
		else if( info.src.charCodeAt( pos ) == 119 ) state = 100;
		else state = -1;
		break;

	case 1:
		state = -1;
		match = 1;
		match_pos = pos;
		break;

	case 2:
		state = -1;
		match = 45;
		match_pos = pos;
		break;

	case 3:
		state = -1;
		match = 43;
		match_pos = pos;
		break;

	case 4:
		state = -1;
		match = 44;
		match_pos = pos;
		break;

	case 5:
		state = -1;
		match = 42;
		match_pos = pos;
		break;

	case 6:
		state = -1;
		match = 39;
		match_pos = pos;
		break;

	case 7:
		state = -1;
		match = 21;
		match_pos = pos;
		break;

	case 8:
		if( info.src.charCodeAt( pos ) == 62 ) state = 25;
		else state = -1;
		match = 40;
		match_pos = pos;
		break;

	case 9:
		state = -1;
		match = 41;
		match_pos = pos;
		break;

	case 10:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 10;
		else if( info.src.charCodeAt( pos ) == 46 ) state = 26;
		else state = -1;
		match = 49;
		match_pos = pos;
		break;

	case 11:
		state = -1;
		match = 27;
		match_pos = pos;
		break;

	case 12:
		state = -1;
		match = 26;
		match_pos = pos;
		break;

	case 13:
		if( info.src.charCodeAt( pos ) == 61 ) state = 27;
		else if( info.src.charCodeAt( pos ) == 62 ) state = 28;
		else state = -1;
		match = 38;
		match_pos = pos;
		break;

	case 14:
		if( info.src.charCodeAt( pos ) == 61 ) state = 29;
		else if( info.src.charCodeAt( pos ) == 62 ) state = 30;
		else state = -1;
		match = 28;
		match_pos = pos;
		break;

	case 15:
		if( info.src.charCodeAt( pos ) == 61 ) state = 31;
		else state = -1;
		match = 37;
		match_pos = pos;
		break;

	case 16:
		state = -1;
		match = 30;
		match_pos = pos;
		break;

	case 17:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 18:
		state = -1;
		match = 24;
		match_pos = pos;
		break;

	case 19:
		state = -1;
		match = 25;
		match_pos = pos;
		break;

	case 20:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 21:
		state = -1;
		match = 22;
		match_pos = pos;
		break;

	case 22:
		state = -1;
		match = 23;
		match_pos = pos;
		break;

	case 23:
		state = -1;
		match = 33;
		match_pos = pos;
		break;

	case 24:
		if( info.src.charCodeAt( pos ) == 34 ) state = 54;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 25:
		state = -1;
		match = 29;
		match_pos = pos;
		break;

	case 26:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 26;
		else state = -1;
		match = 50;
		match_pos = pos;
		break;

	case 27:
		state = -1;
		match = 35;
		match_pos = pos;
		break;

	case 28:
		state = -1;
		match = 34;
		match_pos = pos;
		break;

	case 29:
		state = -1;
		match = 32;
		match_pos = pos;
		break;

	case 30:
		state = -1;
		match = 31;
		match_pos = pos;
		break;

	case 31:
		state = -1;
		match = 36;
		match_pos = pos;
		break;

	case 32:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 5;
		match_pos = pos;
		break;

	case 33:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 2;
		match_pos = pos;
		break;

	case 34:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 16;
		match_pos = pos;
		break;

	case 35:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 10;
		match_pos = pos;
		break;

	case 36:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 72 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) || ( info.src.charCodeAt( pos ) >= 104 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 71 || info.src.charCodeAt( pos ) == 103 ) state = 44;
		else state = -1;
		match = 19;
		match_pos = pos;
		break;

	case 37:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 9;
		match_pos = pos;
		break;

	case 38:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 11;
		match_pos = pos;
		break;

	case 39:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 17;
		match_pos = pos;
		break;

	case 40:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 70 ) || ( info.src.charCodeAt( pos ) >= 72 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 102 ) || ( info.src.charCodeAt( pos ) >= 104 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 71 || info.src.charCodeAt( pos ) == 103 ) state = 71;
		else state = -1;
		match = 18;
		match_pos = pos;
		break;

	case 41:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 6;
		match_pos = pos;
		break;

	case 42:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 43:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 12;
		match_pos = pos;
		break;

	case 44:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 20;
		match_pos = pos;
		break;

	case 45:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 15;
		match_pos = pos;
		break;

	case 46:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 13;
		match_pos = pos;
		break;

	case 47:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 8;
		match_pos = pos;
		break;

	case 48:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 14;
		match_pos = pos;
		break;

	case 49:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 4;
		match_pos = pos;
		break;

	case 50:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 51:
		if( info.src.charCodeAt( pos ) == 61 ) state = 23;
		else state = -1;
		break;

	case 52:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 32;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 59;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 53:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 32;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 59;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 54:
		if( info.src.charCodeAt( pos ) == 34 ) state = 24;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 33 ) || ( info.src.charCodeAt( pos ) >= 35 && info.src.charCodeAt( pos ) <= 254 ) ) state = 54;
		else state = -1;
		break;

	case 55:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 69 ) || ( info.src.charCodeAt( pos ) >= 71 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 101 ) || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 70 || info.src.charCodeAt( pos ) == 102 ) state = 33;
		else if( info.src.charCodeAt( pos ) == 78 || info.src.charCodeAt( pos ) == 110 ) state = 60;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 61;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 56:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 69 ) || ( info.src.charCodeAt( pos ) >= 71 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 101 ) || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 70 || info.src.charCodeAt( pos ) == 102 ) state = 33;
		else if( info.src.charCodeAt( pos ) == 78 || info.src.charCodeAt( pos ) == 110 ) state = 60;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 61;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 57:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 26;
		else state = -1;
		break;

	case 58:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 34;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 59:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 89 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 121 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 90 || info.src.charCodeAt( pos ) == 122 ) state = 35;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 60:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 36;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 61:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 89 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 121 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 90 || info.src.charCodeAt( pos ) == 122 ) state = 37;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 62:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 38;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 63:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 39;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 64:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 78 || info.src.charCodeAt( pos ) == 110 ) state = 40;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 65:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 88 ) || info.src.charCodeAt( pos ) == 90 || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 120 ) || info.src.charCodeAt( pos ) == 122 ) state = 20;
		else if( info.src.charCodeAt( pos ) == 89 || info.src.charCodeAt( pos ) == 121 ) state = 41;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 66:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 42;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 67:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 43;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 68:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 45;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 69:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 46;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 70:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 67 ) || ( info.src.charCodeAt( pos ) >= 69 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 99 ) || ( info.src.charCodeAt( pos ) >= 101 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 68 || info.src.charCodeAt( pos ) == 100 ) state = 47;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 71:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 48;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 72:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 49;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 73:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 50;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 74:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 58;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 75:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 58;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 76:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || info.src.charCodeAt( pos ) == 65 || ( info.src.charCodeAt( pos ) >= 67 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || info.src.charCodeAt( pos ) == 97 || ( info.src.charCodeAt( pos ) >= 99 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 66 || info.src.charCodeAt( pos ) == 98 ) state = 62;
		else if( info.src.charCodeAt( pos ) == 73 || info.src.charCodeAt( pos ) == 105 ) state = 86;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 77:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || info.src.charCodeAt( pos ) == 65 || ( info.src.charCodeAt( pos ) >= 67 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || info.src.charCodeAt( pos ) == 97 || ( info.src.charCodeAt( pos ) >= 99 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 66 || info.src.charCodeAt( pos ) == 98 ) state = 62;
		else if( info.src.charCodeAt( pos ) == 73 || info.src.charCodeAt( pos ) == 105 ) state = 86;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 78:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 66 ) || ( info.src.charCodeAt( pos ) >= 68 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 67 || info.src.charCodeAt( pos ) == 99 ) state = 63;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 79:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 66 ) || ( info.src.charCodeAt( pos ) >= 68 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 67 || info.src.charCodeAt( pos ) == 99 ) state = 63;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 80:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 64;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 88;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 81:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 64;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 88;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 82:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 65;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 83:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 65;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 84:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 66;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 85:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 67;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 86:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 78 || info.src.charCodeAt( pos ) == 110 ) state = 68;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 87:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 69;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 88:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 70;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 89:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 72;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 90:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 73;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 91:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 84;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 92:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 84;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 93:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 85;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 94:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 85;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 95:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 87;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 96:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 87;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 97:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 73 || info.src.charCodeAt( pos ) == 105 ) state = 89;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 98:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 73 || info.src.charCodeAt( pos ) == 105 ) state = 90;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 99:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 71 ) || ( info.src.charCodeAt( pos ) >= 73 && info.src.charCodeAt( pos ) <= 81 ) || ( info.src.charCodeAt( pos ) >= 83 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 72 || info.src.charCodeAt( pos ) == 104 ) state = 97;
		else if( info.src.charCodeAt( pos ) == 82 || info.src.charCodeAt( pos ) == 114 ) state = 98;
		else state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 100:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 71 ) || ( info.src.charCodeAt( pos ) >= 73 && info.src.charCodeAt( pos ) <= 81 ) || ( info.src.charCodeAt( pos ) >= 83 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 72 || info.src.charCodeAt( pos ) == 104 ) state = 97;
		else if( info.src.charCodeAt( pos ) == 82 || info.src.charCodeAt( pos ) == 114 ) state = 98;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

}


			pos++;

		}
		while( state > -1 );

	}
	while( 1 > -1 && match == 1 );

	if( match > -1 )
	{
		info.att = info.src.substr( start, match_pos - start );
		info.offset = match_pos;
		
switch( match )
{
	case 48:
		{
		 info.att = info.att.substr( 1, info.att.length - 2 );
								   info.att = info.att.replace( /''/g, "\'" );	
		}
		break;

}


	}
	else
	{
		info.att = new String();
		match = -1;
	}

	return match;
}


function __parse( src, err_off, err_la )
{
	var		sstack			= new Array();
	var		vstack			= new Array();
	var 	err_cnt			= 0;
	var		act;
	var		go;
	var		la;
	var		rval;
	var 	parseinfo		= new Function( "", "var offset; var src; var att;" );
	var		info			= new parseinfo();
	
/* Pop-Table */
var pop_tab = new Array(
	new Array( 0/* Program' */, 1 ),
	new Array( 51/* Program */, 2 ),
	new Array( 51/* Program */, 0 ),
	new Array( 53/* Stmt_List */, 2 ),
	new Array( 53/* Stmt_List */, 0 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 5 ),
	new Array( 52/* Stmt */, 4 ),
	new Array( 52/* Stmt */, 5 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 2 ),
	new Array( 52/* Stmt */, 5 ),
	new Array( 52/* Stmt */, 4 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 2 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 4 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 5 ),
	new Array( 52/* Stmt */, 13 ),
	new Array( 52/* Stmt */, 2 ),
	new Array( 52/* Stmt */, 2 ),
	new Array( 52/* Stmt */, 2 ),
	new Array( 52/* Stmt */, 3 ),
	new Array( 52/* Stmt */, 1 ),
	new Array( 54/* Expression */, 3 ),
	new Array( 54/* Expression */, 3 ),
	new Array( 54/* Expression */, 3 ),
	new Array( 54/* Expression */, 3 ),
	new Array( 54/* Expression */, 3 ),
	new Array( 54/* Expression */, 3 ),
	new Array( 54/* Expression */, 3 ),
	new Array( 54/* Expression */, 1 ),
	new Array( 56/* AddSubExp */, 3 ),
	new Array( 56/* AddSubExp */, 3 ),
	new Array( 56/* AddSubExp */, 1 ),
	new Array( 57/* MulDivExp */, 3 ),
	new Array( 57/* MulDivExp */, 3 ),
	new Array( 57/* MulDivExp */, 1 ),
	new Array( 58/* NegExp */, 2 ),
	new Array( 58/* NegExp */, 1 ),
	new Array( 58/* NegExp */, 2 ),
	new Array( 58/* NegExp */, 2 ),
	new Array( 59/* Value */, 1 ),
	new Array( 59/* Value */, 1 ),
	new Array( 59/* Value */, 1 ),
	new Array( 59/* Value */, 1 ),
	new Array( 59/* Value */, 3 ),
	new Array( 59/* Value */, 2 ),
	new Array( 55/* VariableCasio */, 4 ),
	new Array( 55/* VariableCasio */, 1 )
);

/* Action-Table */
var act_tab = new Array(
	/* State 0 */ new Array( 60/* "$" */,-2 , 2/* "IF" */,-2 , 4/* "WHILE" */,-2 , 5/* "DO" */,-2 , 6/* "SAY" */,-2 , 48/* "String" */,-2 , 30/* "?" */,-2 , 7/* "WRITE" */,-2 , 11/* "LBL" */,-2 , 12/* "GOTO" */,-2 , 8/* "READ" */,-2 , 9/* "ISZ" */,-2 , 10/* "DSZ" */,-2 , 13/* "PLOT" */,-2 , 14/* "RANGE" */,-2 , 15/* "LINE" */,-2 , 16/* "CLS" */,-2 , 17/* "MCL" */,-2 , 22/* "{" */,-2 , 27/* ":" */,-2 , 40/* "-" */,-2 , 19/* "INT" */,-2 , 20/* "INTG" */,-2 , 49/* "Integer" */,-2 , 50/* "Float" */,-2 , 47/* "Identifier" */,-2 , 46/* "Letter" */,-2 , 43/* "(" */,-2 , 18/* "RAN" */,-2 ),
	/* State 1 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 48/* "String" */,8 , 30/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 15/* "LINE" */,18 , 16/* "CLS" */,19 , 17/* "MCL" */,20 , 22/* "{" */,21 , 27/* ":" */,22 , 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 , 60/* "$" */,0 ),
	/* State 2 */ new Array( 60/* "$" */,-1 , 2/* "IF" */,-1 , 4/* "WHILE" */,-1 , 5/* "DO" */,-1 , 6/* "SAY" */,-1 , 48/* "String" */,-1 , 30/* "?" */,-1 , 7/* "WRITE" */,-1 , 11/* "LBL" */,-1 , 12/* "GOTO" */,-1 , 8/* "READ" */,-1 , 9/* "ISZ" */,-1 , 10/* "DSZ" */,-1 , 13/* "PLOT" */,-1 , 14/* "RANGE" */,-1 , 15/* "LINE" */,-1 , 16/* "CLS" */,-1 , 17/* "MCL" */,-1 , 22/* "{" */,-1 , 27/* ":" */,-1 , 40/* "-" */,-1 , 19/* "INT" */,-1 , 20/* "INTG" */,-1 , 49/* "Integer" */,-1 , 50/* "Float" */,-1 , 47/* "Identifier" */,-1 , 46/* "Letter" */,-1 , 43/* "(" */,-1 , 18/* "RAN" */,-1 ),
	/* State 3 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 4 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 29/* "->" */,45 , 27/* ":" */,46 , 31/* "=>" */,47 ),
	/* State 5 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 6 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 48/* "String" */,8 , 30/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 15/* "LINE" */,18 , 16/* "CLS" */,19 , 17/* "MCL" */,20 , 22/* "{" */,21 , 27/* ":" */,22 , 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 7 */ new Array( 48/* "String" */,50 ),
	/* State 8 */ new Array( 30/* "?" */,51 , 27/* ":" */,52 ),
	/* State 9 */ new Array( 29/* "->" */,53 ),
	/* State 10 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 11 */ new Array( 49/* "Integer" */,55 ),
	/* State 12 */ new Array( 49/* "Integer" */,56 ),
	/* State 13 */ new Array( 47/* "Identifier" */,57 ),
	/* State 14 */ new Array( 46/* "Letter" */,36 ),
	/* State 15 */ new Array( 46/* "Letter" */,36 ),
	/* State 16 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 17 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 18 */ new Array( 27/* ":" */,62 ),
	/* State 19 */ new Array( 27/* ":" */,63 ),
	/* State 20 */ new Array( 27/* ":" */,64 ),
	/* State 21 */ new Array( 23/* "}" */,-4 , 2/* "IF" */,-4 , 4/* "WHILE" */,-4 , 5/* "DO" */,-4 , 6/* "SAY" */,-4 , 48/* "String" */,-4 , 30/* "?" */,-4 , 7/* "WRITE" */,-4 , 11/* "LBL" */,-4 , 12/* "GOTO" */,-4 , 8/* "READ" */,-4 , 9/* "ISZ" */,-4 , 10/* "DSZ" */,-4 , 13/* "PLOT" */,-4 , 14/* "RANGE" */,-4 , 15/* "LINE" */,-4 , 16/* "CLS" */,-4 , 17/* "MCL" */,-4 , 22/* "{" */,-4 , 27/* ":" */,-4 , 40/* "-" */,-4 , 19/* "INT" */,-4 , 20/* "INTG" */,-4 , 49/* "Integer" */,-4 , 50/* "Float" */,-4 , 47/* "Identifier" */,-4 , 46/* "Letter" */,-4 , 43/* "(" */,-4 , 18/* "RAN" */,-4 ),
	/* State 22 */ new Array( 60/* "$" */,-28 , 2/* "IF" */,-28 , 4/* "WHILE" */,-28 , 5/* "DO" */,-28 , 6/* "SAY" */,-28 , 48/* "String" */,-28 , 30/* "?" */,-28 , 7/* "WRITE" */,-28 , 11/* "LBL" */,-28 , 12/* "GOTO" */,-28 , 8/* "READ" */,-28 , 9/* "ISZ" */,-28 , 10/* "DSZ" */,-28 , 13/* "PLOT" */,-28 , 14/* "RANGE" */,-28 , 15/* "LINE" */,-28 , 16/* "CLS" */,-28 , 17/* "MCL" */,-28 , 22/* "{" */,-28 , 27/* ":" */,-28 , 40/* "-" */,-28 , 19/* "INT" */,-28 , 20/* "INTG" */,-28 , 49/* "Integer" */,-28 , 50/* "Float" */,-28 , 47/* "Identifier" */,-28 , 46/* "Letter" */,-28 , 43/* "(" */,-28 , 18/* "RAN" */,-28 , 3/* "ELSE" */,-28 , 23/* "}" */,-28 ),
	/* State 23 */ new Array( 39/* "+" */,66 , 40/* "-" */,67 , 31/* "=>" */,-36 , 27/* ":" */,-36 , 29/* "->" */,-36 , 28/* "=" */,-36 , 38/* "<" */,-36 , 37/* ">" */,-36 , 35/* "<=" */,-36 , 36/* ">=" */,-36 , 33/* "!=" */,-36 , 34/* "<>" */,-36 , 2/* "IF" */,-36 , 4/* "WHILE" */,-36 , 5/* "DO" */,-36 , 6/* "SAY" */,-36 , 48/* "String" */,-36 , 30/* "?" */,-36 , 7/* "WRITE" */,-36 , 11/* "LBL" */,-36 , 12/* "GOTO" */,-36 , 8/* "READ" */,-36 , 9/* "ISZ" */,-36 , 10/* "DSZ" */,-36 , 13/* "PLOT" */,-36 , 14/* "RANGE" */,-36 , 15/* "LINE" */,-36 , 16/* "CLS" */,-36 , 17/* "MCL" */,-36 , 22/* "{" */,-36 , 19/* "INT" */,-36 , 20/* "INTG" */,-36 , 49/* "Integer" */,-36 , 50/* "Float" */,-36 , 47/* "Identifier" */,-36 , 46/* "Letter" */,-36 , 43/* "(" */,-36 , 18/* "RAN" */,-36 , 21/* "," */,-36 , 44/* ")" */,-36 , 25/* "]" */,-36 ),
	/* State 24 */ new Array( 41/* "/" */,68 , 42/* "*" */,69 , 31/* "=>" */,-39 , 27/* ":" */,-39 , 29/* "->" */,-39 , 28/* "=" */,-39 , 38/* "<" */,-39 , 37/* ">" */,-39 , 35/* "<=" */,-39 , 36/* ">=" */,-39 , 33/* "!=" */,-39 , 34/* "<>" */,-39 , 40/* "-" */,-39 , 39/* "+" */,-39 , 2/* "IF" */,-39 , 4/* "WHILE" */,-39 , 5/* "DO" */,-39 , 6/* "SAY" */,-39 , 48/* "String" */,-39 , 30/* "?" */,-39 , 7/* "WRITE" */,-39 , 11/* "LBL" */,-39 , 12/* "GOTO" */,-39 , 8/* "READ" */,-39 , 9/* "ISZ" */,-39 , 10/* "DSZ" */,-39 , 13/* "PLOT" */,-39 , 14/* "RANGE" */,-39 , 15/* "LINE" */,-39 , 16/* "CLS" */,-39 , 17/* "MCL" */,-39 , 22/* "{" */,-39 , 19/* "INT" */,-39 , 20/* "INTG" */,-39 , 49/* "Integer" */,-39 , 50/* "Float" */,-39 , 47/* "Identifier" */,-39 , 46/* "Letter" */,-39 , 43/* "(" */,-39 , 18/* "RAN" */,-39 , 21/* "," */,-39 , 44/* ")" */,-39 , 25/* "]" */,-39 ),
	/* State 25 */ new Array( 31/* "=>" */,-42 , 27/* ":" */,-42 , 29/* "->" */,-42 , 28/* "=" */,-42 , 38/* "<" */,-42 , 37/* ">" */,-42 , 35/* "<=" */,-42 , 36/* ">=" */,-42 , 33/* "!=" */,-42 , 34/* "<>" */,-42 , 40/* "-" */,-42 , 39/* "+" */,-42 , 42/* "*" */,-42 , 41/* "/" */,-42 , 2/* "IF" */,-42 , 4/* "WHILE" */,-42 , 5/* "DO" */,-42 , 6/* "SAY" */,-42 , 48/* "String" */,-42 , 30/* "?" */,-42 , 7/* "WRITE" */,-42 , 11/* "LBL" */,-42 , 12/* "GOTO" */,-42 , 8/* "READ" */,-42 , 9/* "ISZ" */,-42 , 10/* "DSZ" */,-42 , 13/* "PLOT" */,-42 , 14/* "RANGE" */,-42 , 15/* "LINE" */,-42 , 16/* "CLS" */,-42 , 17/* "MCL" */,-42 , 22/* "{" */,-42 , 19/* "INT" */,-42 , 20/* "INTG" */,-42 , 49/* "Integer" */,-42 , 50/* "Float" */,-42 , 47/* "Identifier" */,-42 , 46/* "Letter" */,-42 , 43/* "(" */,-42 , 18/* "RAN" */,-42 , 21/* "," */,-42 , 44/* ")" */,-42 , 25/* "]" */,-42 ),
	/* State 26 */ new Array( 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 27 */ new Array( 31/* "=>" */,-44 , 27/* ":" */,-44 , 29/* "->" */,-44 , 28/* "=" */,-44 , 38/* "<" */,-44 , 37/* ">" */,-44 , 35/* "<=" */,-44 , 36/* ">=" */,-44 , 33/* "!=" */,-44 , 34/* "<>" */,-44 , 40/* "-" */,-44 , 39/* "+" */,-44 , 42/* "*" */,-44 , 41/* "/" */,-44 , 2/* "IF" */,-44 , 4/* "WHILE" */,-44 , 5/* "DO" */,-44 , 6/* "SAY" */,-44 , 48/* "String" */,-44 , 30/* "?" */,-44 , 7/* "WRITE" */,-44 , 11/* "LBL" */,-44 , 12/* "GOTO" */,-44 , 8/* "READ" */,-44 , 9/* "ISZ" */,-44 , 10/* "DSZ" */,-44 , 13/* "PLOT" */,-44 , 14/* "RANGE" */,-44 , 15/* "LINE" */,-44 , 16/* "CLS" */,-44 , 17/* "MCL" */,-44 , 22/* "{" */,-44 , 19/* "INT" */,-44 , 20/* "INTG" */,-44 , 49/* "Integer" */,-44 , 50/* "Float" */,-44 , 47/* "Identifier" */,-44 , 46/* "Letter" */,-44 , 43/* "(" */,-44 , 18/* "RAN" */,-44 , 21/* "," */,-44 , 44/* ")" */,-44 , 25/* "]" */,-44 ),
	/* State 28 */ new Array( 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 29 */ new Array( 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 30 */ new Array( 31/* "=>" */,-47 , 27/* ":" */,-47 , 29/* "->" */,-47 , 28/* "=" */,-47 , 38/* "<" */,-47 , 37/* ">" */,-47 , 35/* "<=" */,-47 , 36/* ">=" */,-47 , 33/* "!=" */,-47 , 34/* "<>" */,-47 , 40/* "-" */,-47 , 39/* "+" */,-47 , 42/* "*" */,-47 , 41/* "/" */,-47 , 2/* "IF" */,-47 , 4/* "WHILE" */,-47 , 5/* "DO" */,-47 , 6/* "SAY" */,-47 , 48/* "String" */,-47 , 30/* "?" */,-47 , 7/* "WRITE" */,-47 , 11/* "LBL" */,-47 , 12/* "GOTO" */,-47 , 8/* "READ" */,-47 , 9/* "ISZ" */,-47 , 10/* "DSZ" */,-47 , 13/* "PLOT" */,-47 , 14/* "RANGE" */,-47 , 15/* "LINE" */,-47 , 16/* "CLS" */,-47 , 17/* "MCL" */,-47 , 22/* "{" */,-47 , 19/* "INT" */,-47 , 20/* "INTG" */,-47 , 49/* "Integer" */,-47 , 50/* "Float" */,-47 , 47/* "Identifier" */,-47 , 46/* "Letter" */,-47 , 43/* "(" */,-47 , 18/* "RAN" */,-47 , 21/* "," */,-47 , 44/* ")" */,-47 , 25/* "]" */,-47 ),
	/* State 31 */ new Array( 31/* "=>" */,-48 , 27/* ":" */,-48 , 29/* "->" */,-48 , 28/* "=" */,-48 , 38/* "<" */,-48 , 37/* ">" */,-48 , 35/* "<=" */,-48 , 36/* ">=" */,-48 , 33/* "!=" */,-48 , 34/* "<>" */,-48 , 40/* "-" */,-48 , 39/* "+" */,-48 , 42/* "*" */,-48 , 41/* "/" */,-48 , 2/* "IF" */,-48 , 4/* "WHILE" */,-48 , 5/* "DO" */,-48 , 6/* "SAY" */,-48 , 48/* "String" */,-48 , 30/* "?" */,-48 , 7/* "WRITE" */,-48 , 11/* "LBL" */,-48 , 12/* "GOTO" */,-48 , 8/* "READ" */,-48 , 9/* "ISZ" */,-48 , 10/* "DSZ" */,-48 , 13/* "PLOT" */,-48 , 14/* "RANGE" */,-48 , 15/* "LINE" */,-48 , 16/* "CLS" */,-48 , 17/* "MCL" */,-48 , 22/* "{" */,-48 , 19/* "INT" */,-48 , 20/* "INTG" */,-48 , 49/* "Integer" */,-48 , 50/* "Float" */,-48 , 47/* "Identifier" */,-48 , 46/* "Letter" */,-48 , 43/* "(" */,-48 , 18/* "RAN" */,-48 , 21/* "," */,-48 , 44/* ")" */,-48 , 25/* "]" */,-48 ),
	/* State 32 */ new Array( 31/* "=>" */,-49 , 27/* ":" */,-49 , 29/* "->" */,-49 , 28/* "=" */,-49 , 38/* "<" */,-49 , 37/* ">" */,-49 , 35/* "<=" */,-49 , 36/* ">=" */,-49 , 33/* "!=" */,-49 , 34/* "<>" */,-49 , 40/* "-" */,-49 , 39/* "+" */,-49 , 42/* "*" */,-49 , 41/* "/" */,-49 , 2/* "IF" */,-49 , 4/* "WHILE" */,-49 , 5/* "DO" */,-49 , 6/* "SAY" */,-49 , 48/* "String" */,-49 , 30/* "?" */,-49 , 7/* "WRITE" */,-49 , 11/* "LBL" */,-49 , 12/* "GOTO" */,-49 , 8/* "READ" */,-49 , 9/* "ISZ" */,-49 , 10/* "DSZ" */,-49 , 13/* "PLOT" */,-49 , 14/* "RANGE" */,-49 , 15/* "LINE" */,-49 , 16/* "CLS" */,-49 , 17/* "MCL" */,-49 , 22/* "{" */,-49 , 19/* "INT" */,-49 , 20/* "INTG" */,-49 , 49/* "Integer" */,-49 , 50/* "Float" */,-49 , 47/* "Identifier" */,-49 , 46/* "Letter" */,-49 , 43/* "(" */,-49 , 18/* "RAN" */,-49 , 21/* "," */,-49 , 44/* ")" */,-49 , 25/* "]" */,-49 ),
	/* State 33 */ new Array( 31/* "=>" */,-50 , 27/* ":" */,-50 , 29/* "->" */,-50 , 28/* "=" */,-50 , 38/* "<" */,-50 , 37/* ">" */,-50 , 35/* "<=" */,-50 , 36/* ">=" */,-50 , 33/* "!=" */,-50 , 34/* "<>" */,-50 , 40/* "-" */,-50 , 39/* "+" */,-50 , 42/* "*" */,-50 , 41/* "/" */,-50 , 2/* "IF" */,-50 , 4/* "WHILE" */,-50 , 5/* "DO" */,-50 , 6/* "SAY" */,-50 , 48/* "String" */,-50 , 30/* "?" */,-50 , 7/* "WRITE" */,-50 , 11/* "LBL" */,-50 , 12/* "GOTO" */,-50 , 8/* "READ" */,-50 , 9/* "ISZ" */,-50 , 10/* "DSZ" */,-50 , 13/* "PLOT" */,-50 , 14/* "RANGE" */,-50 , 15/* "LINE" */,-50 , 16/* "CLS" */,-50 , 17/* "MCL" */,-50 , 22/* "{" */,-50 , 19/* "INT" */,-50 , 20/* "INTG" */,-50 , 49/* "Integer" */,-50 , 50/* "Float" */,-50 , 47/* "Identifier" */,-50 , 46/* "Letter" */,-50 , 43/* "(" */,-50 , 18/* "RAN" */,-50 , 21/* "," */,-50 , 44/* ")" */,-50 , 25/* "]" */,-50 ),
	/* State 34 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 35 */ new Array( 45/* "#" */,74 ),
	/* State 36 */ new Array( 24/* "[" */,75 , 31/* "=>" */,-54 , 27/* ":" */,-54 , 29/* "->" */,-54 , 28/* "=" */,-54 , 38/* "<" */,-54 , 37/* ">" */,-54 , 35/* "<=" */,-54 , 36/* ">=" */,-54 , 33/* "!=" */,-54 , 34/* "<>" */,-54 , 40/* "-" */,-54 , 39/* "+" */,-54 , 42/* "*" */,-54 , 41/* "/" */,-54 , 2/* "IF" */,-54 , 4/* "WHILE" */,-54 , 5/* "DO" */,-54 , 6/* "SAY" */,-54 , 48/* "String" */,-54 , 30/* "?" */,-54 , 7/* "WRITE" */,-54 , 11/* "LBL" */,-54 , 12/* "GOTO" */,-54 , 8/* "READ" */,-54 , 9/* "ISZ" */,-54 , 10/* "DSZ" */,-54 , 13/* "PLOT" */,-54 , 14/* "RANGE" */,-54 , 15/* "LINE" */,-54 , 16/* "CLS" */,-54 , 17/* "MCL" */,-54 , 22/* "{" */,-54 , 19/* "INT" */,-54 , 20/* "INTG" */,-54 , 49/* "Integer" */,-54 , 50/* "Float" */,-54 , 47/* "Identifier" */,-54 , 46/* "Letter" */,-54 , 43/* "(" */,-54 , 18/* "RAN" */,-54 , 21/* "," */,-54 , 44/* ")" */,-54 , 25/* "]" */,-54 ),
	/* State 37 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 48/* "String" */,8 , 30/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 15/* "LINE" */,18 , 16/* "CLS" */,19 , 17/* "MCL" */,20 , 22/* "{" */,21 , 27/* ":" */,22 , 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 38 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 39 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 40 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 41 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 42 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 43 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 44 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 45 */ new Array( 46/* "Letter" */,36 ),
	/* State 46 */ new Array( 60/* "$" */,-15 , 2/* "IF" */,-15 , 4/* "WHILE" */,-15 , 5/* "DO" */,-15 , 6/* "SAY" */,-15 , 48/* "String" */,-15 , 30/* "?" */,-15 , 7/* "WRITE" */,-15 , 11/* "LBL" */,-15 , 12/* "GOTO" */,-15 , 8/* "READ" */,-15 , 9/* "ISZ" */,-15 , 10/* "DSZ" */,-15 , 13/* "PLOT" */,-15 , 14/* "RANGE" */,-15 , 15/* "LINE" */,-15 , 16/* "CLS" */,-15 , 17/* "MCL" */,-15 , 22/* "{" */,-15 , 27/* ":" */,-15 , 40/* "-" */,-15 , 19/* "INT" */,-15 , 20/* "INTG" */,-15 , 49/* "Integer" */,-15 , 50/* "Float" */,-15 , 47/* "Identifier" */,-15 , 46/* "Letter" */,-15 , 43/* "(" */,-15 , 18/* "RAN" */,-15 , 3/* "ELSE" */,-15 , 23/* "}" */,-15 ),
	/* State 47 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 48/* "String" */,8 , 30/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 15/* "LINE" */,18 , 16/* "CLS" */,19 , 17/* "MCL" */,20 , 22/* "{" */,21 , 27/* ":" */,22 , 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 48 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 5/* "DO" */,86 ),
	/* State 49 */ new Array( 4/* "WHILE" */,87 ),
	/* State 50 */ new Array( 27/* ":" */,88 ),
	/* State 51 */ new Array( 29/* "->" */,89 ),
	/* State 52 */ new Array( 60/* "$" */,-11 , 2/* "IF" */,-11 , 4/* "WHILE" */,-11 , 5/* "DO" */,-11 , 6/* "SAY" */,-11 , 48/* "String" */,-11 , 30/* "?" */,-11 , 7/* "WRITE" */,-11 , 11/* "LBL" */,-11 , 12/* "GOTO" */,-11 , 8/* "READ" */,-11 , 9/* "ISZ" */,-11 , 10/* "DSZ" */,-11 , 13/* "PLOT" */,-11 , 14/* "RANGE" */,-11 , 15/* "LINE" */,-11 , 16/* "CLS" */,-11 , 17/* "MCL" */,-11 , 22/* "{" */,-11 , 27/* ":" */,-11 , 40/* "-" */,-11 , 19/* "INT" */,-11 , 20/* "INTG" */,-11 , 49/* "Integer" */,-11 , 50/* "Float" */,-11 , 47/* "Identifier" */,-11 , 46/* "Letter" */,-11 , 43/* "(" */,-11 , 18/* "RAN" */,-11 , 3/* "ELSE" */,-11 , 23/* "}" */,-11 ),
	/* State 53 */ new Array( 46/* "Letter" */,36 ),
	/* State 54 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 27/* ":" */,91 ),
	/* State 55 */ new Array( 27/* ":" */,92 ),
	/* State 56 */ new Array( 27/* ":" */,93 ),
	/* State 57 */ new Array( 27/* ":" */,94 ),
	/* State 58 */ new Array( 27/* ":" */,95 ),
	/* State 59 */ new Array( 27/* ":" */,96 ),
	/* State 60 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 21/* "," */,97 ),
	/* State 61 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 21/* "," */,98 ),
	/* State 62 */ new Array( 60/* "$" */,-24 , 2/* "IF" */,-24 , 4/* "WHILE" */,-24 , 5/* "DO" */,-24 , 6/* "SAY" */,-24 , 48/* "String" */,-24 , 30/* "?" */,-24 , 7/* "WRITE" */,-24 , 11/* "LBL" */,-24 , 12/* "GOTO" */,-24 , 8/* "READ" */,-24 , 9/* "ISZ" */,-24 , 10/* "DSZ" */,-24 , 13/* "PLOT" */,-24 , 14/* "RANGE" */,-24 , 15/* "LINE" */,-24 , 16/* "CLS" */,-24 , 17/* "MCL" */,-24 , 22/* "{" */,-24 , 27/* ":" */,-24 , 40/* "-" */,-24 , 19/* "INT" */,-24 , 20/* "INTG" */,-24 , 49/* "Integer" */,-24 , 50/* "Float" */,-24 , 47/* "Identifier" */,-24 , 46/* "Letter" */,-24 , 43/* "(" */,-24 , 18/* "RAN" */,-24 , 3/* "ELSE" */,-24 , 23/* "}" */,-24 ),
	/* State 63 */ new Array( 60/* "$" */,-25 , 2/* "IF" */,-25 , 4/* "WHILE" */,-25 , 5/* "DO" */,-25 , 6/* "SAY" */,-25 , 48/* "String" */,-25 , 30/* "?" */,-25 , 7/* "WRITE" */,-25 , 11/* "LBL" */,-25 , 12/* "GOTO" */,-25 , 8/* "READ" */,-25 , 9/* "ISZ" */,-25 , 10/* "DSZ" */,-25 , 13/* "PLOT" */,-25 , 14/* "RANGE" */,-25 , 15/* "LINE" */,-25 , 16/* "CLS" */,-25 , 17/* "MCL" */,-25 , 22/* "{" */,-25 , 27/* ":" */,-25 , 40/* "-" */,-25 , 19/* "INT" */,-25 , 20/* "INTG" */,-25 , 49/* "Integer" */,-25 , 50/* "Float" */,-25 , 47/* "Identifier" */,-25 , 46/* "Letter" */,-25 , 43/* "(" */,-25 , 18/* "RAN" */,-25 , 3/* "ELSE" */,-25 , 23/* "}" */,-25 ),
	/* State 64 */ new Array( 60/* "$" */,-26 , 2/* "IF" */,-26 , 4/* "WHILE" */,-26 , 5/* "DO" */,-26 , 6/* "SAY" */,-26 , 48/* "String" */,-26 , 30/* "?" */,-26 , 7/* "WRITE" */,-26 , 11/* "LBL" */,-26 , 12/* "GOTO" */,-26 , 8/* "READ" */,-26 , 9/* "ISZ" */,-26 , 10/* "DSZ" */,-26 , 13/* "PLOT" */,-26 , 14/* "RANGE" */,-26 , 15/* "LINE" */,-26 , 16/* "CLS" */,-26 , 17/* "MCL" */,-26 , 22/* "{" */,-26 , 27/* ":" */,-26 , 40/* "-" */,-26 , 19/* "INT" */,-26 , 20/* "INTG" */,-26 , 49/* "Integer" */,-26 , 50/* "Float" */,-26 , 47/* "Identifier" */,-26 , 46/* "Letter" */,-26 , 43/* "(" */,-26 , 18/* "RAN" */,-26 , 3/* "ELSE" */,-26 , 23/* "}" */,-26 ),
	/* State 65 */ new Array( 23/* "}" */,100 , 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 48/* "String" */,8 , 30/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 15/* "LINE" */,18 , 16/* "CLS" */,19 , 17/* "MCL" */,20 , 22/* "{" */,21 , 27/* ":" */,22 , 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 66 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 67 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 68 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 69 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 70 */ new Array( 31/* "=>" */,-43 , 27/* ":" */,-43 , 29/* "->" */,-43 , 28/* "=" */,-43 , 38/* "<" */,-43 , 37/* ">" */,-43 , 35/* "<=" */,-43 , 36/* ">=" */,-43 , 33/* "!=" */,-43 , 34/* "<>" */,-43 , 40/* "-" */,-43 , 39/* "+" */,-43 , 42/* "*" */,-43 , 41/* "/" */,-43 , 2/* "IF" */,-43 , 4/* "WHILE" */,-43 , 5/* "DO" */,-43 , 6/* "SAY" */,-43 , 48/* "String" */,-43 , 30/* "?" */,-43 , 7/* "WRITE" */,-43 , 11/* "LBL" */,-43 , 12/* "GOTO" */,-43 , 8/* "READ" */,-43 , 9/* "ISZ" */,-43 , 10/* "DSZ" */,-43 , 13/* "PLOT" */,-43 , 14/* "RANGE" */,-43 , 15/* "LINE" */,-43 , 16/* "CLS" */,-43 , 17/* "MCL" */,-43 , 22/* "{" */,-43 , 19/* "INT" */,-43 , 20/* "INTG" */,-43 , 49/* "Integer" */,-43 , 50/* "Float" */,-43 , 47/* "Identifier" */,-43 , 46/* "Letter" */,-43 , 43/* "(" */,-43 , 18/* "RAN" */,-43 , 21/* "," */,-43 , 44/* ")" */,-43 , 25/* "]" */,-43 ),
	/* State 71 */ new Array( 31/* "=>" */,-45 , 27/* ":" */,-45 , 29/* "->" */,-45 , 28/* "=" */,-45 , 38/* "<" */,-45 , 37/* ">" */,-45 , 35/* "<=" */,-45 , 36/* ">=" */,-45 , 33/* "!=" */,-45 , 34/* "<>" */,-45 , 40/* "-" */,-45 , 39/* "+" */,-45 , 42/* "*" */,-45 , 41/* "/" */,-45 , 2/* "IF" */,-45 , 4/* "WHILE" */,-45 , 5/* "DO" */,-45 , 6/* "SAY" */,-45 , 48/* "String" */,-45 , 30/* "?" */,-45 , 7/* "WRITE" */,-45 , 11/* "LBL" */,-45 , 12/* "GOTO" */,-45 , 8/* "READ" */,-45 , 9/* "ISZ" */,-45 , 10/* "DSZ" */,-45 , 13/* "PLOT" */,-45 , 14/* "RANGE" */,-45 , 15/* "LINE" */,-45 , 16/* "CLS" */,-45 , 17/* "MCL" */,-45 , 22/* "{" */,-45 , 19/* "INT" */,-45 , 20/* "INTG" */,-45 , 49/* "Integer" */,-45 , 50/* "Float" */,-45 , 47/* "Identifier" */,-45 , 46/* "Letter" */,-45 , 43/* "(" */,-45 , 18/* "RAN" */,-45 , 21/* "," */,-45 , 44/* ")" */,-45 , 25/* "]" */,-45 ),
	/* State 72 */ new Array( 31/* "=>" */,-46 , 27/* ":" */,-46 , 29/* "->" */,-46 , 28/* "=" */,-46 , 38/* "<" */,-46 , 37/* ">" */,-46 , 35/* "<=" */,-46 , 36/* ">=" */,-46 , 33/* "!=" */,-46 , 34/* "<>" */,-46 , 40/* "-" */,-46 , 39/* "+" */,-46 , 42/* "*" */,-46 , 41/* "/" */,-46 , 2/* "IF" */,-46 , 4/* "WHILE" */,-46 , 5/* "DO" */,-46 , 6/* "SAY" */,-46 , 48/* "String" */,-46 , 30/* "?" */,-46 , 7/* "WRITE" */,-46 , 11/* "LBL" */,-46 , 12/* "GOTO" */,-46 , 8/* "READ" */,-46 , 9/* "ISZ" */,-46 , 10/* "DSZ" */,-46 , 13/* "PLOT" */,-46 , 14/* "RANGE" */,-46 , 15/* "LINE" */,-46 , 16/* "CLS" */,-46 , 17/* "MCL" */,-46 , 22/* "{" */,-46 , 19/* "INT" */,-46 , 20/* "INTG" */,-46 , 49/* "Integer" */,-46 , 50/* "Float" */,-46 , 47/* "Identifier" */,-46 , 46/* "Letter" */,-46 , 43/* "(" */,-46 , 18/* "RAN" */,-46 , 21/* "," */,-46 , 44/* ")" */,-46 , 25/* "]" */,-46 ),
	/* State 73 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 44/* ")" */,105 ),
	/* State 74 */ new Array( 31/* "=>" */,-52 , 27/* ":" */,-52 , 29/* "->" */,-52 , 28/* "=" */,-52 , 38/* "<" */,-52 , 37/* ">" */,-52 , 35/* "<=" */,-52 , 36/* ">=" */,-52 , 33/* "!=" */,-52 , 34/* "<>" */,-52 , 40/* "-" */,-52 , 39/* "+" */,-52 , 42/* "*" */,-52 , 41/* "/" */,-52 , 2/* "IF" */,-52 , 4/* "WHILE" */,-52 , 5/* "DO" */,-52 , 6/* "SAY" */,-52 , 48/* "String" */,-52 , 30/* "?" */,-52 , 7/* "WRITE" */,-52 , 11/* "LBL" */,-52 , 12/* "GOTO" */,-52 , 8/* "READ" */,-52 , 9/* "ISZ" */,-52 , 10/* "DSZ" */,-52 , 13/* "PLOT" */,-52 , 14/* "RANGE" */,-52 , 15/* "LINE" */,-52 , 16/* "CLS" */,-52 , 17/* "MCL" */,-52 , 22/* "{" */,-52 , 19/* "INT" */,-52 , 20/* "INTG" */,-52 , 49/* "Integer" */,-52 , 50/* "Float" */,-52 , 47/* "Identifier" */,-52 , 46/* "Letter" */,-52 , 43/* "(" */,-52 , 18/* "RAN" */,-52 , 21/* "," */,-52 , 44/* ")" */,-52 , 25/* "]" */,-52 ),
	/* State 75 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 76 */ new Array( 3/* "ELSE" */,107 , 60/* "$" */,-5 , 2/* "IF" */,-5 , 4/* "WHILE" */,-5 , 5/* "DO" */,-5 , 6/* "SAY" */,-5 , 48/* "String" */,-5 , 30/* "?" */,-5 , 7/* "WRITE" */,-5 , 11/* "LBL" */,-5 , 12/* "GOTO" */,-5 , 8/* "READ" */,-5 , 9/* "ISZ" */,-5 , 10/* "DSZ" */,-5 , 13/* "PLOT" */,-5 , 14/* "RANGE" */,-5 , 15/* "LINE" */,-5 , 16/* "CLS" */,-5 , 17/* "MCL" */,-5 , 22/* "{" */,-5 , 27/* ":" */,-5 , 40/* "-" */,-5 , 19/* "INT" */,-5 , 20/* "INTG" */,-5 , 49/* "Integer" */,-5 , 50/* "Float" */,-5 , 47/* "Identifier" */,-5 , 46/* "Letter" */,-5 , 43/* "(" */,-5 , 18/* "RAN" */,-5 , 23/* "}" */,-5 ),
	/* State 77 */ new Array( 39/* "+" */,66 , 40/* "-" */,67 , 31/* "=>" */,-35 , 27/* ":" */,-35 , 29/* "->" */,-35 , 28/* "=" */,-35 , 38/* "<" */,-35 , 37/* ">" */,-35 , 35/* "<=" */,-35 , 36/* ">=" */,-35 , 33/* "!=" */,-35 , 34/* "<>" */,-35 , 2/* "IF" */,-35 , 4/* "WHILE" */,-35 , 5/* "DO" */,-35 , 6/* "SAY" */,-35 , 48/* "String" */,-35 , 30/* "?" */,-35 , 7/* "WRITE" */,-35 , 11/* "LBL" */,-35 , 12/* "GOTO" */,-35 , 8/* "READ" */,-35 , 9/* "ISZ" */,-35 , 10/* "DSZ" */,-35 , 13/* "PLOT" */,-35 , 14/* "RANGE" */,-35 , 15/* "LINE" */,-35 , 16/* "CLS" */,-35 , 17/* "MCL" */,-35 , 22/* "{" */,-35 , 19/* "INT" */,-35 , 20/* "INTG" */,-35 , 49/* "Integer" */,-35 , 50/* "Float" */,-35 , 47/* "Identifier" */,-35 , 46/* "Letter" */,-35 , 43/* "(" */,-35 , 18/* "RAN" */,-35 , 21/* "," */,-35 , 44/* ")" */,-35 , 25/* "]" */,-35 ),
	/* State 78 */ new Array( 39/* "+" */,66 , 40/* "-" */,67 , 31/* "=>" */,-34 , 27/* ":" */,-34 , 29/* "->" */,-34 , 28/* "=" */,-34 , 38/* "<" */,-34 , 37/* ">" */,-34 , 35/* "<=" */,-34 , 36/* ">=" */,-34 , 33/* "!=" */,-34 , 34/* "<>" */,-34 , 2/* "IF" */,-34 , 4/* "WHILE" */,-34 , 5/* "DO" */,-34 , 6/* "SAY" */,-34 , 48/* "String" */,-34 , 30/* "?" */,-34 , 7/* "WRITE" */,-34 , 11/* "LBL" */,-34 , 12/* "GOTO" */,-34 , 8/* "READ" */,-34 , 9/* "ISZ" */,-34 , 10/* "DSZ" */,-34 , 13/* "PLOT" */,-34 , 14/* "RANGE" */,-34 , 15/* "LINE" */,-34 , 16/* "CLS" */,-34 , 17/* "MCL" */,-34 , 22/* "{" */,-34 , 19/* "INT" */,-34 , 20/* "INTG" */,-34 , 49/* "Integer" */,-34 , 50/* "Float" */,-34 , 47/* "Identifier" */,-34 , 46/* "Letter" */,-34 , 43/* "(" */,-34 , 18/* "RAN" */,-34 , 21/* "," */,-34 , 44/* ")" */,-34 , 25/* "]" */,-34 ),
	/* State 79 */ new Array( 39/* "+" */,66 , 40/* "-" */,67 , 31/* "=>" */,-33 , 27/* ":" */,-33 , 29/* "->" */,-33 , 28/* "=" */,-33 , 38/* "<" */,-33 , 37/* ">" */,-33 , 35/* "<=" */,-33 , 36/* ">=" */,-33 , 33/* "!=" */,-33 , 34/* "<>" */,-33 , 2/* "IF" */,-33 , 4/* "WHILE" */,-33 , 5/* "DO" */,-33 , 6/* "SAY" */,-33 , 48/* "String" */,-33 , 30/* "?" */,-33 , 7/* "WRITE" */,-33 , 11/* "LBL" */,-33 , 12/* "GOTO" */,-33 , 8/* "READ" */,-33 , 9/* "ISZ" */,-33 , 10/* "DSZ" */,-33 , 13/* "PLOT" */,-33 , 14/* "RANGE" */,-33 , 15/* "LINE" */,-33 , 16/* "CLS" */,-33 , 17/* "MCL" */,-33 , 22/* "{" */,-33 , 19/* "INT" */,-33 , 20/* "INTG" */,-33 , 49/* "Integer" */,-33 , 50/* "Float" */,-33 , 47/* "Identifier" */,-33 , 46/* "Letter" */,-33 , 43/* "(" */,-33 , 18/* "RAN" */,-33 , 21/* "," */,-33 , 44/* ")" */,-33 , 25/* "]" */,-33 ),
	/* State 80 */ new Array( 39/* "+" */,66 , 40/* "-" */,67 , 31/* "=>" */,-32 , 27/* ":" */,-32 , 29/* "->" */,-32 , 28/* "=" */,-32 , 38/* "<" */,-32 , 37/* ">" */,-32 , 35/* "<=" */,-32 , 36/* ">=" */,-32 , 33/* "!=" */,-32 , 34/* "<>" */,-32 , 2/* "IF" */,-32 , 4/* "WHILE" */,-32 , 5/* "DO" */,-32 , 6/* "SAY" */,-32 , 48/* "String" */,-32 , 30/* "?" */,-32 , 7/* "WRITE" */,-32 , 11/* "LBL" */,-32 , 12/* "GOTO" */,-32 , 8/* "READ" */,-32 , 9/* "ISZ" */,-32 , 10/* "DSZ" */,-32 , 13/* "PLOT" */,-32 , 14/* "RANGE" */,-32 , 15/* "LINE" */,-32 , 16/* "CLS" */,-32 , 17/* "MCL" */,-32 , 22/* "{" */,-32 , 19/* "INT" */,-32 , 20/* "INTG" */,-32 , 49/* "Integer" */,-32 , 50/* "Float" */,-32 , 47/* "Identifier" */,-32 , 46/* "Letter" */,-32 , 43/* "(" */,-32 , 18/* "RAN" */,-32 , 21/* "," */,-32 , 44/* ")" */,-32 , 25/* "]" */,-32 ),
	/* State 81 */ new Array( 39/* "+" */,66 , 40/* "-" */,67 , 31/* "=>" */,-31 , 27/* ":" */,-31 , 29/* "->" */,-31 , 28/* "=" */,-31 , 38/* "<" */,-31 , 37/* ">" */,-31 , 35/* "<=" */,-31 , 36/* ">=" */,-31 , 33/* "!=" */,-31 , 34/* "<>" */,-31 , 2/* "IF" */,-31 , 4/* "WHILE" */,-31 , 5/* "DO" */,-31 , 6/* "SAY" */,-31 , 48/* "String" */,-31 , 30/* "?" */,-31 , 7/* "WRITE" */,-31 , 11/* "LBL" */,-31 , 12/* "GOTO" */,-31 , 8/* "READ" */,-31 , 9/* "ISZ" */,-31 , 10/* "DSZ" */,-31 , 13/* "PLOT" */,-31 , 14/* "RANGE" */,-31 , 15/* "LINE" */,-31 , 16/* "CLS" */,-31 , 17/* "MCL" */,-31 , 22/* "{" */,-31 , 19/* "INT" */,-31 , 20/* "INTG" */,-31 , 49/* "Integer" */,-31 , 50/* "Float" */,-31 , 47/* "Identifier" */,-31 , 46/* "Letter" */,-31 , 43/* "(" */,-31 , 18/* "RAN" */,-31 , 21/* "," */,-31 , 44/* ")" */,-31 , 25/* "]" */,-31 ),
	/* State 82 */ new Array( 39/* "+" */,66 , 40/* "-" */,67 , 31/* "=>" */,-30 , 27/* ":" */,-30 , 29/* "->" */,-30 , 28/* "=" */,-30 , 38/* "<" */,-30 , 37/* ">" */,-30 , 35/* "<=" */,-30 , 36/* ">=" */,-30 , 33/* "!=" */,-30 , 34/* "<>" */,-30 , 2/* "IF" */,-30 , 4/* "WHILE" */,-30 , 5/* "DO" */,-30 , 6/* "SAY" */,-30 , 48/* "String" */,-30 , 30/* "?" */,-30 , 7/* "WRITE" */,-30 , 11/* "LBL" */,-30 , 12/* "GOTO" */,-30 , 8/* "READ" */,-30 , 9/* "ISZ" */,-30 , 10/* "DSZ" */,-30 , 13/* "PLOT" */,-30 , 14/* "RANGE" */,-30 , 15/* "LINE" */,-30 , 16/* "CLS" */,-30 , 17/* "MCL" */,-30 , 22/* "{" */,-30 , 19/* "INT" */,-30 , 20/* "INTG" */,-30 , 49/* "Integer" */,-30 , 50/* "Float" */,-30 , 47/* "Identifier" */,-30 , 46/* "Letter" */,-30 , 43/* "(" */,-30 , 18/* "RAN" */,-30 , 21/* "," */,-30 , 44/* ")" */,-30 , 25/* "]" */,-30 ),
	/* State 83 */ new Array( 39/* "+" */,66 , 40/* "-" */,67 , 31/* "=>" */,-29 , 27/* ":" */,-29 , 29/* "->" */,-29 , 28/* "=" */,-29 , 38/* "<" */,-29 , 37/* ">" */,-29 , 35/* "<=" */,-29 , 36/* ">=" */,-29 , 33/* "!=" */,-29 , 34/* "<>" */,-29 , 2/* "IF" */,-29 , 4/* "WHILE" */,-29 , 5/* "DO" */,-29 , 6/* "SAY" */,-29 , 48/* "String" */,-29 , 30/* "?" */,-29 , 7/* "WRITE" */,-29 , 11/* "LBL" */,-29 , 12/* "GOTO" */,-29 , 8/* "READ" */,-29 , 9/* "ISZ" */,-29 , 10/* "DSZ" */,-29 , 13/* "PLOT" */,-29 , 14/* "RANGE" */,-29 , 15/* "LINE" */,-29 , 16/* "CLS" */,-29 , 17/* "MCL" */,-29 , 22/* "{" */,-29 , 19/* "INT" */,-29 , 20/* "INTG" */,-29 , 49/* "Integer" */,-29 , 50/* "Float" */,-29 , 47/* "Identifier" */,-29 , 46/* "Letter" */,-29 , 43/* "(" */,-29 , 18/* "RAN" */,-29 , 21/* "," */,-29 , 44/* ")" */,-29 , 25/* "]" */,-29 ),
	/* State 84 */ new Array( 27/* ":" */,108 ),
	/* State 85 */ new Array( 60/* "$" */,-6 , 2/* "IF" */,-6 , 4/* "WHILE" */,-6 , 5/* "DO" */,-6 , 6/* "SAY" */,-6 , 48/* "String" */,-6 , 30/* "?" */,-6 , 7/* "WRITE" */,-6 , 11/* "LBL" */,-6 , 12/* "GOTO" */,-6 , 8/* "READ" */,-6 , 9/* "ISZ" */,-6 , 10/* "DSZ" */,-6 , 13/* "PLOT" */,-6 , 14/* "RANGE" */,-6 , 15/* "LINE" */,-6 , 16/* "CLS" */,-6 , 17/* "MCL" */,-6 , 22/* "{" */,-6 , 27/* ":" */,-6 , 40/* "-" */,-6 , 19/* "INT" */,-6 , 20/* "INTG" */,-6 , 49/* "Integer" */,-6 , 50/* "Float" */,-6 , 47/* "Identifier" */,-6 , 46/* "Letter" */,-6 , 43/* "(" */,-6 , 18/* "RAN" */,-6 , 3/* "ELSE" */,-6 , 23/* "}" */,-6 ),
	/* State 86 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 48/* "String" */,8 , 30/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 15/* "LINE" */,18 , 16/* "CLS" */,19 , 17/* "MCL" */,20 , 22/* "{" */,21 , 27/* ":" */,22 , 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 87 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 88 */ new Array( 60/* "$" */,-10 , 2/* "IF" */,-10 , 4/* "WHILE" */,-10 , 5/* "DO" */,-10 , 6/* "SAY" */,-10 , 48/* "String" */,-10 , 30/* "?" */,-10 , 7/* "WRITE" */,-10 , 11/* "LBL" */,-10 , 12/* "GOTO" */,-10 , 8/* "READ" */,-10 , 9/* "ISZ" */,-10 , 10/* "DSZ" */,-10 , 13/* "PLOT" */,-10 , 14/* "RANGE" */,-10 , 15/* "LINE" */,-10 , 16/* "CLS" */,-10 , 17/* "MCL" */,-10 , 22/* "{" */,-10 , 27/* ":" */,-10 , 40/* "-" */,-10 , 19/* "INT" */,-10 , 20/* "INTG" */,-10 , 49/* "Integer" */,-10 , 50/* "Float" */,-10 , 47/* "Identifier" */,-10 , 46/* "Letter" */,-10 , 43/* "(" */,-10 , 18/* "RAN" */,-10 , 3/* "ELSE" */,-10 , 23/* "}" */,-10 ),
	/* State 89 */ new Array( 46/* "Letter" */,36 ),
	/* State 90 */ new Array( 27/* ":" */,112 ),
	/* State 91 */ new Array( 60/* "$" */,-14 , 2/* "IF" */,-14 , 4/* "WHILE" */,-14 , 5/* "DO" */,-14 , 6/* "SAY" */,-14 , 48/* "String" */,-14 , 30/* "?" */,-14 , 7/* "WRITE" */,-14 , 11/* "LBL" */,-14 , 12/* "GOTO" */,-14 , 8/* "READ" */,-14 , 9/* "ISZ" */,-14 , 10/* "DSZ" */,-14 , 13/* "PLOT" */,-14 , 14/* "RANGE" */,-14 , 15/* "LINE" */,-14 , 16/* "CLS" */,-14 , 17/* "MCL" */,-14 , 22/* "{" */,-14 , 27/* ":" */,-14 , 40/* "-" */,-14 , 19/* "INT" */,-14 , 20/* "INTG" */,-14 , 49/* "Integer" */,-14 , 50/* "Float" */,-14 , 47/* "Identifier" */,-14 , 46/* "Letter" */,-14 , 43/* "(" */,-14 , 18/* "RAN" */,-14 , 3/* "ELSE" */,-14 , 23/* "}" */,-14 ),
	/* State 92 */ new Array( 60/* "$" */,-16 , 2/* "IF" */,-16 , 4/* "WHILE" */,-16 , 5/* "DO" */,-16 , 6/* "SAY" */,-16 , 48/* "String" */,-16 , 30/* "?" */,-16 , 7/* "WRITE" */,-16 , 11/* "LBL" */,-16 , 12/* "GOTO" */,-16 , 8/* "READ" */,-16 , 9/* "ISZ" */,-16 , 10/* "DSZ" */,-16 , 13/* "PLOT" */,-16 , 14/* "RANGE" */,-16 , 15/* "LINE" */,-16 , 16/* "CLS" */,-16 , 17/* "MCL" */,-16 , 22/* "{" */,-16 , 27/* ":" */,-16 , 40/* "-" */,-16 , 19/* "INT" */,-16 , 20/* "INTG" */,-16 , 49/* "Integer" */,-16 , 50/* "Float" */,-16 , 47/* "Identifier" */,-16 , 46/* "Letter" */,-16 , 43/* "(" */,-16 , 18/* "RAN" */,-16 , 3/* "ELSE" */,-16 , 23/* "}" */,-16 ),
	/* State 93 */ new Array( 60/* "$" */,-17 , 2/* "IF" */,-17 , 4/* "WHILE" */,-17 , 5/* "DO" */,-17 , 6/* "SAY" */,-17 , 48/* "String" */,-17 , 30/* "?" */,-17 , 7/* "WRITE" */,-17 , 11/* "LBL" */,-17 , 12/* "GOTO" */,-17 , 8/* "READ" */,-17 , 9/* "ISZ" */,-17 , 10/* "DSZ" */,-17 , 13/* "PLOT" */,-17 , 14/* "RANGE" */,-17 , 15/* "LINE" */,-17 , 16/* "CLS" */,-17 , 17/* "MCL" */,-17 , 22/* "{" */,-17 , 27/* ":" */,-17 , 40/* "-" */,-17 , 19/* "INT" */,-17 , 20/* "INTG" */,-17 , 49/* "Integer" */,-17 , 50/* "Float" */,-17 , 47/* "Identifier" */,-17 , 46/* "Letter" */,-17 , 43/* "(" */,-17 , 18/* "RAN" */,-17 , 3/* "ELSE" */,-17 , 23/* "}" */,-17 ),
	/* State 94 */ new Array( 60/* "$" */,-18 , 2/* "IF" */,-18 , 4/* "WHILE" */,-18 , 5/* "DO" */,-18 , 6/* "SAY" */,-18 , 48/* "String" */,-18 , 30/* "?" */,-18 , 7/* "WRITE" */,-18 , 11/* "LBL" */,-18 , 12/* "GOTO" */,-18 , 8/* "READ" */,-18 , 9/* "ISZ" */,-18 , 10/* "DSZ" */,-18 , 13/* "PLOT" */,-18 , 14/* "RANGE" */,-18 , 15/* "LINE" */,-18 , 16/* "CLS" */,-18 , 17/* "MCL" */,-18 , 22/* "{" */,-18 , 27/* ":" */,-18 , 40/* "-" */,-18 , 19/* "INT" */,-18 , 20/* "INTG" */,-18 , 49/* "Integer" */,-18 , 50/* "Float" */,-18 , 47/* "Identifier" */,-18 , 46/* "Letter" */,-18 , 43/* "(" */,-18 , 18/* "RAN" */,-18 , 3/* "ELSE" */,-18 , 23/* "}" */,-18 ),
	/* State 95 */ new Array( 60/* "$" */,-20 , 2/* "IF" */,-20 , 4/* "WHILE" */,-20 , 5/* "DO" */,-20 , 6/* "SAY" */,-20 , 48/* "String" */,-20 , 30/* "?" */,-20 , 7/* "WRITE" */,-20 , 11/* "LBL" */,-20 , 12/* "GOTO" */,-20 , 8/* "READ" */,-20 , 9/* "ISZ" */,-20 , 10/* "DSZ" */,-20 , 13/* "PLOT" */,-20 , 14/* "RANGE" */,-20 , 15/* "LINE" */,-20 , 16/* "CLS" */,-20 , 17/* "MCL" */,-20 , 22/* "{" */,-20 , 27/* ":" */,-20 , 40/* "-" */,-20 , 19/* "INT" */,-20 , 20/* "INTG" */,-20 , 49/* "Integer" */,-20 , 50/* "Float" */,-20 , 47/* "Identifier" */,-20 , 46/* "Letter" */,-20 , 43/* "(" */,-20 , 18/* "RAN" */,-20 , 3/* "ELSE" */,-20 , 23/* "}" */,-20 ),
	/* State 96 */ new Array( 60/* "$" */,-21 , 2/* "IF" */,-21 , 4/* "WHILE" */,-21 , 5/* "DO" */,-21 , 6/* "SAY" */,-21 , 48/* "String" */,-21 , 30/* "?" */,-21 , 7/* "WRITE" */,-21 , 11/* "LBL" */,-21 , 12/* "GOTO" */,-21 , 8/* "READ" */,-21 , 9/* "ISZ" */,-21 , 10/* "DSZ" */,-21 , 13/* "PLOT" */,-21 , 14/* "RANGE" */,-21 , 15/* "LINE" */,-21 , 16/* "CLS" */,-21 , 17/* "MCL" */,-21 , 22/* "{" */,-21 , 27/* ":" */,-21 , 40/* "-" */,-21 , 19/* "INT" */,-21 , 20/* "INTG" */,-21 , 49/* "Integer" */,-21 , 50/* "Float" */,-21 , 47/* "Identifier" */,-21 , 46/* "Letter" */,-21 , 43/* "(" */,-21 , 18/* "RAN" */,-21 , 3/* "ELSE" */,-21 , 23/* "}" */,-21 ),
	/* State 97 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 98 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 99 */ new Array( 23/* "}" */,-3 , 2/* "IF" */,-3 , 4/* "WHILE" */,-3 , 5/* "DO" */,-3 , 6/* "SAY" */,-3 , 48/* "String" */,-3 , 30/* "?" */,-3 , 7/* "WRITE" */,-3 , 11/* "LBL" */,-3 , 12/* "GOTO" */,-3 , 8/* "READ" */,-3 , 9/* "ISZ" */,-3 , 10/* "DSZ" */,-3 , 13/* "PLOT" */,-3 , 14/* "RANGE" */,-3 , 15/* "LINE" */,-3 , 16/* "CLS" */,-3 , 17/* "MCL" */,-3 , 22/* "{" */,-3 , 27/* ":" */,-3 , 40/* "-" */,-3 , 19/* "INT" */,-3 , 20/* "INTG" */,-3 , 49/* "Integer" */,-3 , 50/* "Float" */,-3 , 47/* "Identifier" */,-3 , 46/* "Letter" */,-3 , 43/* "(" */,-3 , 18/* "RAN" */,-3 ),
	/* State 100 */ new Array( 60/* "$" */,-27 , 2/* "IF" */,-27 , 4/* "WHILE" */,-27 , 5/* "DO" */,-27 , 6/* "SAY" */,-27 , 48/* "String" */,-27 , 30/* "?" */,-27 , 7/* "WRITE" */,-27 , 11/* "LBL" */,-27 , 12/* "GOTO" */,-27 , 8/* "READ" */,-27 , 9/* "ISZ" */,-27 , 10/* "DSZ" */,-27 , 13/* "PLOT" */,-27 , 14/* "RANGE" */,-27 , 15/* "LINE" */,-27 , 16/* "CLS" */,-27 , 17/* "MCL" */,-27 , 22/* "{" */,-27 , 27/* ":" */,-27 , 40/* "-" */,-27 , 19/* "INT" */,-27 , 20/* "INTG" */,-27 , 49/* "Integer" */,-27 , 50/* "Float" */,-27 , 47/* "Identifier" */,-27 , 46/* "Letter" */,-27 , 43/* "(" */,-27 , 18/* "RAN" */,-27 , 3/* "ELSE" */,-27 , 23/* "}" */,-27 ),
	/* State 101 */ new Array( 41/* "/" */,68 , 42/* "*" */,69 , 31/* "=>" */,-38 , 27/* ":" */,-38 , 29/* "->" */,-38 , 28/* "=" */,-38 , 38/* "<" */,-38 , 37/* ">" */,-38 , 35/* "<=" */,-38 , 36/* ">=" */,-38 , 33/* "!=" */,-38 , 34/* "<>" */,-38 , 40/* "-" */,-38 , 39/* "+" */,-38 , 2/* "IF" */,-38 , 4/* "WHILE" */,-38 , 5/* "DO" */,-38 , 6/* "SAY" */,-38 , 48/* "String" */,-38 , 30/* "?" */,-38 , 7/* "WRITE" */,-38 , 11/* "LBL" */,-38 , 12/* "GOTO" */,-38 , 8/* "READ" */,-38 , 9/* "ISZ" */,-38 , 10/* "DSZ" */,-38 , 13/* "PLOT" */,-38 , 14/* "RANGE" */,-38 , 15/* "LINE" */,-38 , 16/* "CLS" */,-38 , 17/* "MCL" */,-38 , 22/* "{" */,-38 , 19/* "INT" */,-38 , 20/* "INTG" */,-38 , 49/* "Integer" */,-38 , 50/* "Float" */,-38 , 47/* "Identifier" */,-38 , 46/* "Letter" */,-38 , 43/* "(" */,-38 , 18/* "RAN" */,-38 , 21/* "," */,-38 , 44/* ")" */,-38 , 25/* "]" */,-38 ),
	/* State 102 */ new Array( 41/* "/" */,68 , 42/* "*" */,69 , 31/* "=>" */,-37 , 27/* ":" */,-37 , 29/* "->" */,-37 , 28/* "=" */,-37 , 38/* "<" */,-37 , 37/* ">" */,-37 , 35/* "<=" */,-37 , 36/* ">=" */,-37 , 33/* "!=" */,-37 , 34/* "<>" */,-37 , 40/* "-" */,-37 , 39/* "+" */,-37 , 2/* "IF" */,-37 , 4/* "WHILE" */,-37 , 5/* "DO" */,-37 , 6/* "SAY" */,-37 , 48/* "String" */,-37 , 30/* "?" */,-37 , 7/* "WRITE" */,-37 , 11/* "LBL" */,-37 , 12/* "GOTO" */,-37 , 8/* "READ" */,-37 , 9/* "ISZ" */,-37 , 10/* "DSZ" */,-37 , 13/* "PLOT" */,-37 , 14/* "RANGE" */,-37 , 15/* "LINE" */,-37 , 16/* "CLS" */,-37 , 17/* "MCL" */,-37 , 22/* "{" */,-37 , 19/* "INT" */,-37 , 20/* "INTG" */,-37 , 49/* "Integer" */,-37 , 50/* "Float" */,-37 , 47/* "Identifier" */,-37 , 46/* "Letter" */,-37 , 43/* "(" */,-37 , 18/* "RAN" */,-37 , 21/* "," */,-37 , 44/* ")" */,-37 , 25/* "]" */,-37 ),
	/* State 103 */ new Array( 31/* "=>" */,-41 , 27/* ":" */,-41 , 29/* "->" */,-41 , 28/* "=" */,-41 , 38/* "<" */,-41 , 37/* ">" */,-41 , 35/* "<=" */,-41 , 36/* ">=" */,-41 , 33/* "!=" */,-41 , 34/* "<>" */,-41 , 40/* "-" */,-41 , 39/* "+" */,-41 , 42/* "*" */,-41 , 41/* "/" */,-41 , 2/* "IF" */,-41 , 4/* "WHILE" */,-41 , 5/* "DO" */,-41 , 6/* "SAY" */,-41 , 48/* "String" */,-41 , 30/* "?" */,-41 , 7/* "WRITE" */,-41 , 11/* "LBL" */,-41 , 12/* "GOTO" */,-41 , 8/* "READ" */,-41 , 9/* "ISZ" */,-41 , 10/* "DSZ" */,-41 , 13/* "PLOT" */,-41 , 14/* "RANGE" */,-41 , 15/* "LINE" */,-41 , 16/* "CLS" */,-41 , 17/* "MCL" */,-41 , 22/* "{" */,-41 , 19/* "INT" */,-41 , 20/* "INTG" */,-41 , 49/* "Integer" */,-41 , 50/* "Float" */,-41 , 47/* "Identifier" */,-41 , 46/* "Letter" */,-41 , 43/* "(" */,-41 , 18/* "RAN" */,-41 , 21/* "," */,-41 , 44/* ")" */,-41 , 25/* "]" */,-41 ),
	/* State 104 */ new Array( 31/* "=>" */,-40 , 27/* ":" */,-40 , 29/* "->" */,-40 , 28/* "=" */,-40 , 38/* "<" */,-40 , 37/* ">" */,-40 , 35/* "<=" */,-40 , 36/* ">=" */,-40 , 33/* "!=" */,-40 , 34/* "<>" */,-40 , 40/* "-" */,-40 , 39/* "+" */,-40 , 42/* "*" */,-40 , 41/* "/" */,-40 , 2/* "IF" */,-40 , 4/* "WHILE" */,-40 , 5/* "DO" */,-40 , 6/* "SAY" */,-40 , 48/* "String" */,-40 , 30/* "?" */,-40 , 7/* "WRITE" */,-40 , 11/* "LBL" */,-40 , 12/* "GOTO" */,-40 , 8/* "READ" */,-40 , 9/* "ISZ" */,-40 , 10/* "DSZ" */,-40 , 13/* "PLOT" */,-40 , 14/* "RANGE" */,-40 , 15/* "LINE" */,-40 , 16/* "CLS" */,-40 , 17/* "MCL" */,-40 , 22/* "{" */,-40 , 19/* "INT" */,-40 , 20/* "INTG" */,-40 , 49/* "Integer" */,-40 , 50/* "Float" */,-40 , 47/* "Identifier" */,-40 , 46/* "Letter" */,-40 , 43/* "(" */,-40 , 18/* "RAN" */,-40 , 21/* "," */,-40 , 44/* ")" */,-40 , 25/* "]" */,-40 ),
	/* State 105 */ new Array( 31/* "=>" */,-51 , 27/* ":" */,-51 , 29/* "->" */,-51 , 28/* "=" */,-51 , 38/* "<" */,-51 , 37/* ">" */,-51 , 35/* "<=" */,-51 , 36/* ">=" */,-51 , 33/* "!=" */,-51 , 34/* "<>" */,-51 , 40/* "-" */,-51 , 39/* "+" */,-51 , 42/* "*" */,-51 , 41/* "/" */,-51 , 2/* "IF" */,-51 , 4/* "WHILE" */,-51 , 5/* "DO" */,-51 , 6/* "SAY" */,-51 , 48/* "String" */,-51 , 30/* "?" */,-51 , 7/* "WRITE" */,-51 , 11/* "LBL" */,-51 , 12/* "GOTO" */,-51 , 8/* "READ" */,-51 , 9/* "ISZ" */,-51 , 10/* "DSZ" */,-51 , 13/* "PLOT" */,-51 , 14/* "RANGE" */,-51 , 15/* "LINE" */,-51 , 16/* "CLS" */,-51 , 17/* "MCL" */,-51 , 22/* "{" */,-51 , 19/* "INT" */,-51 , 20/* "INTG" */,-51 , 49/* "Integer" */,-51 , 50/* "Float" */,-51 , 47/* "Identifier" */,-51 , 46/* "Letter" */,-51 , 43/* "(" */,-51 , 18/* "RAN" */,-51 , 21/* "," */,-51 , 44/* ")" */,-51 , 25/* "]" */,-51 ),
	/* State 106 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 25/* "]" */,115 ),
	/* State 107 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 48/* "String" */,8 , 30/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 15/* "LINE" */,18 , 16/* "CLS" */,19 , 17/* "MCL" */,20 , 22/* "{" */,21 , 27/* ":" */,22 , 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 108 */ new Array( 60/* "$" */,-19 , 2/* "IF" */,-19 , 4/* "WHILE" */,-19 , 5/* "DO" */,-19 , 6/* "SAY" */,-19 , 48/* "String" */,-19 , 30/* "?" */,-19 , 7/* "WRITE" */,-19 , 11/* "LBL" */,-19 , 12/* "GOTO" */,-19 , 8/* "READ" */,-19 , 9/* "ISZ" */,-19 , 10/* "DSZ" */,-19 , 13/* "PLOT" */,-19 , 14/* "RANGE" */,-19 , 15/* "LINE" */,-19 , 16/* "CLS" */,-19 , 17/* "MCL" */,-19 , 22/* "{" */,-19 , 27/* ":" */,-19 , 40/* "-" */,-19 , 19/* "INT" */,-19 , 20/* "INTG" */,-19 , 49/* "Integer" */,-19 , 50/* "Float" */,-19 , 47/* "Identifier" */,-19 , 46/* "Letter" */,-19 , 43/* "(" */,-19 , 18/* "RAN" */,-19 , 3/* "ELSE" */,-19 , 23/* "}" */,-19 ),
	/* State 109 */ new Array( 60/* "$" */,-8 , 2/* "IF" */,-8 , 4/* "WHILE" */,-8 , 5/* "DO" */,-8 , 6/* "SAY" */,-8 , 48/* "String" */,-8 , 30/* "?" */,-8 , 7/* "WRITE" */,-8 , 11/* "LBL" */,-8 , 12/* "GOTO" */,-8 , 8/* "READ" */,-8 , 9/* "ISZ" */,-8 , 10/* "DSZ" */,-8 , 13/* "PLOT" */,-8 , 14/* "RANGE" */,-8 , 15/* "LINE" */,-8 , 16/* "CLS" */,-8 , 17/* "MCL" */,-8 , 22/* "{" */,-8 , 27/* ":" */,-8 , 40/* "-" */,-8 , 19/* "INT" */,-8 , 20/* "INTG" */,-8 , 49/* "Integer" */,-8 , 50/* "Float" */,-8 , 47/* "Identifier" */,-8 , 46/* "Letter" */,-8 , 43/* "(" */,-8 , 18/* "RAN" */,-8 , 3/* "ELSE" */,-8 , 23/* "}" */,-8 ),
	/* State 110 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 27/* ":" */,117 ),
	/* State 111 */ new Array( 27/* ":" */,118 ),
	/* State 112 */ new Array( 60/* "$" */,-13 , 2/* "IF" */,-13 , 4/* "WHILE" */,-13 , 5/* "DO" */,-13 , 6/* "SAY" */,-13 , 48/* "String" */,-13 , 30/* "?" */,-13 , 7/* "WRITE" */,-13 , 11/* "LBL" */,-13 , 12/* "GOTO" */,-13 , 8/* "READ" */,-13 , 9/* "ISZ" */,-13 , 10/* "DSZ" */,-13 , 13/* "PLOT" */,-13 , 14/* "RANGE" */,-13 , 15/* "LINE" */,-13 , 16/* "CLS" */,-13 , 17/* "MCL" */,-13 , 22/* "{" */,-13 , 27/* ":" */,-13 , 40/* "-" */,-13 , 19/* "INT" */,-13 , 20/* "INTG" */,-13 , 49/* "Integer" */,-13 , 50/* "Float" */,-13 , 47/* "Identifier" */,-13 , 46/* "Letter" */,-13 , 43/* "(" */,-13 , 18/* "RAN" */,-13 , 3/* "ELSE" */,-13 , 23/* "}" */,-13 ),
	/* State 113 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 27/* ":" */,119 ),
	/* State 114 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 21/* "," */,120 ),
	/* State 115 */ new Array( 31/* "=>" */,-53 , 27/* ":" */,-53 , 29/* "->" */,-53 , 28/* "=" */,-53 , 38/* "<" */,-53 , 37/* ">" */,-53 , 35/* "<=" */,-53 , 36/* ">=" */,-53 , 33/* "!=" */,-53 , 34/* "<>" */,-53 , 40/* "-" */,-53 , 39/* "+" */,-53 , 42/* "*" */,-53 , 41/* "/" */,-53 , 2/* "IF" */,-53 , 4/* "WHILE" */,-53 , 5/* "DO" */,-53 , 6/* "SAY" */,-53 , 48/* "String" */,-53 , 30/* "?" */,-53 , 7/* "WRITE" */,-53 , 11/* "LBL" */,-53 , 12/* "GOTO" */,-53 , 8/* "READ" */,-53 , 9/* "ISZ" */,-53 , 10/* "DSZ" */,-53 , 13/* "PLOT" */,-53 , 14/* "RANGE" */,-53 , 15/* "LINE" */,-53 , 16/* "CLS" */,-53 , 17/* "MCL" */,-53 , 22/* "{" */,-53 , 19/* "INT" */,-53 , 20/* "INTG" */,-53 , 49/* "Integer" */,-53 , 50/* "Float" */,-53 , 47/* "Identifier" */,-53 , 46/* "Letter" */,-53 , 43/* "(" */,-53 , 18/* "RAN" */,-53 , 21/* "," */,-53 , 44/* ")" */,-53 , 25/* "]" */,-53 ),
	/* State 116 */ new Array( 60/* "$" */,-7 , 2/* "IF" */,-7 , 4/* "WHILE" */,-7 , 5/* "DO" */,-7 , 6/* "SAY" */,-7 , 48/* "String" */,-7 , 30/* "?" */,-7 , 7/* "WRITE" */,-7 , 11/* "LBL" */,-7 , 12/* "GOTO" */,-7 , 8/* "READ" */,-7 , 9/* "ISZ" */,-7 , 10/* "DSZ" */,-7 , 13/* "PLOT" */,-7 , 14/* "RANGE" */,-7 , 15/* "LINE" */,-7 , 16/* "CLS" */,-7 , 17/* "MCL" */,-7 , 22/* "{" */,-7 , 27/* ":" */,-7 , 40/* "-" */,-7 , 19/* "INT" */,-7 , 20/* "INTG" */,-7 , 49/* "Integer" */,-7 , 50/* "Float" */,-7 , 47/* "Identifier" */,-7 , 46/* "Letter" */,-7 , 43/* "(" */,-7 , 18/* "RAN" */,-7 , 3/* "ELSE" */,-7 , 23/* "}" */,-7 ),
	/* State 117 */ new Array( 60/* "$" */,-9 , 2/* "IF" */,-9 , 4/* "WHILE" */,-9 , 5/* "DO" */,-9 , 6/* "SAY" */,-9 , 48/* "String" */,-9 , 30/* "?" */,-9 , 7/* "WRITE" */,-9 , 11/* "LBL" */,-9 , 12/* "GOTO" */,-9 , 8/* "READ" */,-9 , 9/* "ISZ" */,-9 , 10/* "DSZ" */,-9 , 13/* "PLOT" */,-9 , 14/* "RANGE" */,-9 , 15/* "LINE" */,-9 , 16/* "CLS" */,-9 , 17/* "MCL" */,-9 , 22/* "{" */,-9 , 27/* ":" */,-9 , 40/* "-" */,-9 , 19/* "INT" */,-9 , 20/* "INTG" */,-9 , 49/* "Integer" */,-9 , 50/* "Float" */,-9 , 47/* "Identifier" */,-9 , 46/* "Letter" */,-9 , 43/* "(" */,-9 , 18/* "RAN" */,-9 , 3/* "ELSE" */,-9 , 23/* "}" */,-9 ),
	/* State 118 */ new Array( 60/* "$" */,-12 , 2/* "IF" */,-12 , 4/* "WHILE" */,-12 , 5/* "DO" */,-12 , 6/* "SAY" */,-12 , 48/* "String" */,-12 , 30/* "?" */,-12 , 7/* "WRITE" */,-12 , 11/* "LBL" */,-12 , 12/* "GOTO" */,-12 , 8/* "READ" */,-12 , 9/* "ISZ" */,-12 , 10/* "DSZ" */,-12 , 13/* "PLOT" */,-12 , 14/* "RANGE" */,-12 , 15/* "LINE" */,-12 , 16/* "CLS" */,-12 , 17/* "MCL" */,-12 , 22/* "{" */,-12 , 27/* ":" */,-12 , 40/* "-" */,-12 , 19/* "INT" */,-12 , 20/* "INTG" */,-12 , 49/* "Integer" */,-12 , 50/* "Float" */,-12 , 47/* "Identifier" */,-12 , 46/* "Letter" */,-12 , 43/* "(" */,-12 , 18/* "RAN" */,-12 , 3/* "ELSE" */,-12 , 23/* "}" */,-12 ),
	/* State 119 */ new Array( 60/* "$" */,-22 , 2/* "IF" */,-22 , 4/* "WHILE" */,-22 , 5/* "DO" */,-22 , 6/* "SAY" */,-22 , 48/* "String" */,-22 , 30/* "?" */,-22 , 7/* "WRITE" */,-22 , 11/* "LBL" */,-22 , 12/* "GOTO" */,-22 , 8/* "READ" */,-22 , 9/* "ISZ" */,-22 , 10/* "DSZ" */,-22 , 13/* "PLOT" */,-22 , 14/* "RANGE" */,-22 , 15/* "LINE" */,-22 , 16/* "CLS" */,-22 , 17/* "MCL" */,-22 , 22/* "{" */,-22 , 27/* ":" */,-22 , 40/* "-" */,-22 , 19/* "INT" */,-22 , 20/* "INTG" */,-22 , 49/* "Integer" */,-22 , 50/* "Float" */,-22 , 47/* "Identifier" */,-22 , 46/* "Letter" */,-22 , 43/* "(" */,-22 , 18/* "RAN" */,-22 , 3/* "ELSE" */,-22 , 23/* "}" */,-22 ),
	/* State 120 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 121 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 21/* "," */,122 ),
	/* State 122 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 123 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 21/* "," */,124 ),
	/* State 124 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 125 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 21/* "," */,126 ),
	/* State 126 */ new Array( 40/* "-" */,26 , 19/* "INT" */,28 , 20/* "INTG" */,29 , 49/* "Integer" */,30 , 50/* "Float" */,31 , 47/* "Identifier" */,32 , 43/* "(" */,34 , 18/* "RAN" */,35 , 46/* "Letter" */,36 ),
	/* State 127 */ new Array( 34/* "<>" */,38 , 33/* "!=" */,39 , 36/* ">=" */,40 , 35/* "<=" */,41 , 37/* ">" */,42 , 38/* "<" */,43 , 28/* "=" */,44 , 27/* ":" */,128 ),
	/* State 128 */ new Array( 60/* "$" */,-23 , 2/* "IF" */,-23 , 4/* "WHILE" */,-23 , 5/* "DO" */,-23 , 6/* "SAY" */,-23 , 48/* "String" */,-23 , 30/* "?" */,-23 , 7/* "WRITE" */,-23 , 11/* "LBL" */,-23 , 12/* "GOTO" */,-23 , 8/* "READ" */,-23 , 9/* "ISZ" */,-23 , 10/* "DSZ" */,-23 , 13/* "PLOT" */,-23 , 14/* "RANGE" */,-23 , 15/* "LINE" */,-23 , 16/* "CLS" */,-23 , 17/* "MCL" */,-23 , 22/* "{" */,-23 , 27/* ":" */,-23 , 40/* "-" */,-23 , 19/* "INT" */,-23 , 20/* "INTG" */,-23 , 49/* "Integer" */,-23 , 50/* "Float" */,-23 , 47/* "Identifier" */,-23 , 46/* "Letter" */,-23 , 43/* "(" */,-23 , 18/* "RAN" */,-23 , 3/* "ELSE" */,-23 , 23/* "}" */,-23 )
);

/* Goto-Table */
var goto_tab = new Array(
	/* State 0 */ new Array( 51/* Program */,1 ),
	/* State 1 */ new Array( 52/* Stmt */,2 , 54/* Expression */,4 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 2 */ new Array(  ),
	/* State 3 */ new Array( 54/* Expression */,37 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 4 */ new Array(  ),
	/* State 5 */ new Array( 54/* Expression */,48 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 6 */ new Array( 52/* Stmt */,49 , 54/* Expression */,4 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 7 */ new Array(  ),
	/* State 8 */ new Array(  ),
	/* State 9 */ new Array(  ),
	/* State 10 */ new Array( 54/* Expression */,54 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 11 */ new Array(  ),
	/* State 12 */ new Array(  ),
	/* State 13 */ new Array(  ),
	/* State 14 */ new Array( 55/* VariableCasio */,58 ),
	/* State 15 */ new Array( 55/* VariableCasio */,59 ),
	/* State 16 */ new Array( 54/* Expression */,60 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 17 */ new Array( 54/* Expression */,61 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 18 */ new Array(  ),
	/* State 19 */ new Array(  ),
	/* State 20 */ new Array(  ),
	/* State 21 */ new Array( 53/* Stmt_List */,65 ),
	/* State 22 */ new Array(  ),
	/* State 23 */ new Array(  ),
	/* State 24 */ new Array(  ),
	/* State 25 */ new Array(  ),
	/* State 26 */ new Array( 59/* Value */,70 , 55/* VariableCasio */,33 ),
	/* State 27 */ new Array(  ),
	/* State 28 */ new Array( 59/* Value */,71 , 55/* VariableCasio */,33 ),
	/* State 29 */ new Array( 59/* Value */,72 , 55/* VariableCasio */,33 ),
	/* State 30 */ new Array(  ),
	/* State 31 */ new Array(  ),
	/* State 32 */ new Array(  ),
	/* State 33 */ new Array(  ),
	/* State 34 */ new Array( 54/* Expression */,73 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 35 */ new Array(  ),
	/* State 36 */ new Array(  ),
	/* State 37 */ new Array( 52/* Stmt */,76 , 54/* Expression */,4 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 38 */ new Array( 56/* AddSubExp */,77 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 39 */ new Array( 56/* AddSubExp */,78 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 40 */ new Array( 56/* AddSubExp */,79 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 41 */ new Array( 56/* AddSubExp */,80 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 42 */ new Array( 56/* AddSubExp */,81 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 43 */ new Array( 56/* AddSubExp */,82 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 44 */ new Array( 56/* AddSubExp */,83 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 45 */ new Array( 55/* VariableCasio */,84 ),
	/* State 46 */ new Array(  ),
	/* State 47 */ new Array( 52/* Stmt */,85 , 54/* Expression */,4 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 48 */ new Array(  ),
	/* State 49 */ new Array(  ),
	/* State 50 */ new Array(  ),
	/* State 51 */ new Array(  ),
	/* State 52 */ new Array(  ),
	/* State 53 */ new Array( 55/* VariableCasio */,90 ),
	/* State 54 */ new Array(  ),
	/* State 55 */ new Array(  ),
	/* State 56 */ new Array(  ),
	/* State 57 */ new Array(  ),
	/* State 58 */ new Array(  ),
	/* State 59 */ new Array(  ),
	/* State 60 */ new Array(  ),
	/* State 61 */ new Array(  ),
	/* State 62 */ new Array(  ),
	/* State 63 */ new Array(  ),
	/* State 64 */ new Array(  ),
	/* State 65 */ new Array( 52/* Stmt */,99 , 54/* Expression */,4 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 66 */ new Array( 57/* MulDivExp */,101 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 67 */ new Array( 57/* MulDivExp */,102 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 68 */ new Array( 58/* NegExp */,103 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 69 */ new Array( 58/* NegExp */,104 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 70 */ new Array(  ),
	/* State 71 */ new Array(  ),
	/* State 72 */ new Array(  ),
	/* State 73 */ new Array(  ),
	/* State 74 */ new Array(  ),
	/* State 75 */ new Array( 54/* Expression */,106 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 76 */ new Array(  ),
	/* State 77 */ new Array(  ),
	/* State 78 */ new Array(  ),
	/* State 79 */ new Array(  ),
	/* State 80 */ new Array(  ),
	/* State 81 */ new Array(  ),
	/* State 82 */ new Array(  ),
	/* State 83 */ new Array(  ),
	/* State 84 */ new Array(  ),
	/* State 85 */ new Array(  ),
	/* State 86 */ new Array( 52/* Stmt */,109 , 54/* Expression */,4 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 87 */ new Array( 54/* Expression */,110 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 88 */ new Array(  ),
	/* State 89 */ new Array( 55/* VariableCasio */,111 ),
	/* State 90 */ new Array(  ),
	/* State 91 */ new Array(  ),
	/* State 92 */ new Array(  ),
	/* State 93 */ new Array(  ),
	/* State 94 */ new Array(  ),
	/* State 95 */ new Array(  ),
	/* State 96 */ new Array(  ),
	/* State 97 */ new Array( 54/* Expression */,113 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 98 */ new Array( 54/* Expression */,114 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 99 */ new Array(  ),
	/* State 100 */ new Array(  ),
	/* State 101 */ new Array(  ),
	/* State 102 */ new Array(  ),
	/* State 103 */ new Array(  ),
	/* State 104 */ new Array(  ),
	/* State 105 */ new Array(  ),
	/* State 106 */ new Array(  ),
	/* State 107 */ new Array( 52/* Stmt */,116 , 54/* Expression */,4 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 108 */ new Array(  ),
	/* State 109 */ new Array(  ),
	/* State 110 */ new Array(  ),
	/* State 111 */ new Array(  ),
	/* State 112 */ new Array(  ),
	/* State 113 */ new Array(  ),
	/* State 114 */ new Array(  ),
	/* State 115 */ new Array(  ),
	/* State 116 */ new Array(  ),
	/* State 117 */ new Array(  ),
	/* State 118 */ new Array(  ),
	/* State 119 */ new Array(  ),
	/* State 120 */ new Array( 54/* Expression */,121 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 121 */ new Array(  ),
	/* State 122 */ new Array( 54/* Expression */,123 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 123 */ new Array(  ),
	/* State 124 */ new Array( 54/* Expression */,125 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 125 */ new Array(  ),
	/* State 126 */ new Array( 54/* Expression */,127 , 56/* AddSubExp */,23 , 57/* MulDivExp */,24 , 58/* NegExp */,25 , 59/* Value */,27 , 55/* VariableCasio */,33 ),
	/* State 127 */ new Array(  ),
	/* State 128 */ new Array(  )
);



/* Symbol labels */
var labels = new Array(
	"Program'" /* Non-terminal symbol */,
	"WHITESPACE" /* Terminal symbol */,
	"IF" /* Terminal symbol */,
	"ELSE" /* Terminal symbol */,
	"WHILE" /* Terminal symbol */,
	"DO" /* Terminal symbol */,
	"SAY" /* Terminal symbol */,
	"WRITE" /* Terminal symbol */,
	"READ" /* Terminal symbol */,
	"ISZ" /* Terminal symbol */,
	"DSZ" /* Terminal symbol */,
	"LBL" /* Terminal symbol */,
	"GOTO" /* Terminal symbol */,
	"PLOT" /* Terminal symbol */,
	"RANGE" /* Terminal symbol */,
	"LINE" /* Terminal symbol */,
	"CLS" /* Terminal symbol */,
	"MCL" /* Terminal symbol */,
	"RAN" /* Terminal symbol */,
	"INT" /* Terminal symbol */,
	"INTG" /* Terminal symbol */,
	"," /* Terminal symbol */,
	"{" /* Terminal symbol */,
	"}" /* Terminal symbol */,
	"[" /* Terminal symbol */,
	"]" /* Terminal symbol */,
	";" /* Terminal symbol */,
	":" /* Terminal symbol */,
	"=" /* Terminal symbol */,
	"->" /* Terminal symbol */,
	"?" /* Terminal symbol */,
	"=>" /* Terminal symbol */,
	"==" /* Terminal symbol */,
	"!=" /* Terminal symbol */,
	"<>" /* Terminal symbol */,
	"<=" /* Terminal symbol */,
	">=" /* Terminal symbol */,
	">" /* Terminal symbol */,
	"<" /* Terminal symbol */,
	"+" /* Terminal symbol */,
	"-" /* Terminal symbol */,
	"/" /* Terminal symbol */,
	"*" /* Terminal symbol */,
	"(" /* Terminal symbol */,
	")" /* Terminal symbol */,
	"#" /* Terminal symbol */,
	"Letter" /* Terminal symbol */,
	"Identifier" /* Terminal symbol */,
	"String" /* Terminal symbol */,
	"Integer" /* Terminal symbol */,
	"Float" /* Terminal symbol */,
	"Program" /* Non-terminal symbol */,
	"Stmt" /* Non-terminal symbol */,
	"Stmt_List" /* Non-terminal symbol */,
	"Expression" /* Non-terminal symbol */,
	"VariableCasio" /* Non-terminal symbol */,
	"AddSubExp" /* Non-terminal symbol */,
	"MulDivExp" /* Non-terminal symbol */,
	"NegExp" /* Non-terminal symbol */,
	"Value" /* Non-terminal symbol */,
	"$" /* Terminal symbol */
);


	
	info.offset = 0;
	info.src = src;
	info.att = new String();
	
	if( !err_off )
		err_off	= new Array();
	if( !err_la )
	err_la = new Array();
	
	sstack.push( 0 );
	vstack.push( 0 );
	
	la = __lex( info );

	while( true )
	{
		act = 130;
		for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
		{
			if( act_tab[sstack[sstack.length-1]][i] == la )
			{
				act = act_tab[sstack[sstack.length-1]][i+1];
				break;
			}
		}

		if( _dbg_withtrace && sstack.length > 0 )
		{
			__dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
							"\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
							"\tAction: " + act + "\n" + 
							"\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
									"..." : "" ) + "\"\n" +
							"\tStack: " + sstack.join() + "\n" +
							"\tValue stack: " + vstack.join() + "\n" );
		}
		
			
		//Panic-mode: Try recovery when parse-error occurs!
		if( act == 130 )
		{
			if( _dbg_withtrace )
				__dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
			
			err_cnt++;
			err_off.push( info.offset - info.att.length );			
			err_la.push( new Array() );
			for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
				err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
			
			//Remember the original stack!
			var rsstack = new Array();
			var rvstack = new Array();
			for( var i = 0; i < sstack.length; i++ )
			{
				rsstack[i] = sstack[i];
				rvstack[i] = vstack[i];
			}
			
			while( act == 130 && la != 60 )
			{
				if( _dbg_withtrace )
					__dbg_print( "\tError recovery\n" +
									"Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
									"Action: " + act + "\n\n" );
				if( la == -1 )
					info.offset++;
					
				while( act == 130 && sstack.length > 0 )
				{
					sstack.pop();
					vstack.pop();
					
					if( sstack.length == 0 )
						break;
						
					act = 130;
					for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
					{
						if( act_tab[sstack[sstack.length-1]][i] == la )
						{
							act = act_tab[sstack[sstack.length-1]][i+1];
							break;
						}
					}
				}
				
				if( act != 130 )
					break;
				
				for( var i = 0; i < rsstack.length; i++ )
				{
					sstack.push( rsstack[i] );
					vstack.push( rvstack[i] );
				}
				
				la = __lex( info );
			}
			
			if( act == 130 )
			{
				if( _dbg_withtrace )
					__dbg_print( "\tError recovery failed, terminating parse process..." );
				break;
			}


			if( _dbg_withtrace )
				__dbg_print( "\tError recovery succeeded, continuing" );
		}
		
		/*
		if( act == 130 )
			break;
		*/
		
		
		//Shift
		if( act > 0 )
		{			
			if( _dbg_withtrace )
				__dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
		
			sstack.push( act );
			vstack.push( info.att );
			
			la = __lex( info );
			
			if( _dbg_withtrace )
				__dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
		}
		//Reduce
		else
		{		
			act *= -1;
			
			if( _dbg_withtrace )
				__dbg_print( "Reducing by producution: " + act );
			
			rval = void(0);
			
			if( _dbg_withtrace )
				__dbg_print( "\tPerforming semantic action..." );
			
switch( act )
{
	case 0:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 1:
	{
		 programLines.push(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 2:
	{
		rval = vstack[ vstack.length - 0 ];
	}
	break;
	case 3:
	{
		 rval = createNode( NODE_OP, OP_NONE, vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 4:
	{
		rval = vstack[ vstack.length - 0 ];
	}
	break;
	case 5:
	{
		 rval = createNode( NODE_OP, OP_IF, vstack[ vstack.length - 2 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 6:
	{
		 rval = createNode( NODE_OP, OP_IF, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 7:
	{
		 rval = createNode( NODE_OP, OP_IF_ELSE, vstack[ vstack.length - 4 ], vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 8:
	{
		 rval = createNode( NODE_OP, OP_WHILE_DO, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 9:
	{
		 rval = createNode( NODE_OP, OP_DO_WHILE, vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 10:
	{
		 rval = createNode( NODE_OP, OP_SAY, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 11:
	{
		 rval = createNode( NODE_OP, OP_SAY, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 12:
	{
		 rval = createNode( NODE_OP, OP_INPUT, vstack[ vstack.length - 5 ], vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 13:
	{
		 rval = createNode( NODE_OP, OP_INPUT, "", vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 14:
	{
		 rval = createNode( NODE_OP, OP_WRITE, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 15:
	{
		 rval = createNode( NODE_OP, OP_WRITE, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 16:
	{
		 programLabels["_"+vstack[ vstack.length - 2 ]] = programLines.length + 1; rval = createNode( NODE_OP, OP_REG_LBL, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 17:
	{
		 rval = createNode( NODE_OP, OP_GOTO, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 18:
	{
		 rval = createNode( NODE_OP, OP_READ, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 19:
	{
		 rval = createNode( NODE_OP, OP_ASSIGN, vstack[ vstack.length - 2 ], vstack[ vstack.length - 4 ] ); 
	}
	break;
	case 20:
	{
		 rval = createNode( NODE_OP, OP_INCR, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 21:
	{
		 rval = createNode( NODE_OP, OP_DECR, vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 22:
	{
		 rval = createNode( NODE_OP, OP_PLOT, vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 23:
	{
		 rval = createNode( NODE_OP, OP_RANGE, vstack[ vstack.length - 12 ], vstack[ vstack.length - 10 ], vstack[ vstack.length - 8 ], vstack[ vstack.length - 6 ], vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 24:
	{
		 rval = createNode( NODE_OP, OP_LINE ); 
	}
	break;
	case 25:
	{
		 rval = createNode( NODE_OP, OP_CLS ); 
	}
	break;
	case 26:
	{
		 rval = createNode( NODE_OP, OP_MCL ); 
	}
	break;
	case 27:
	{
		 rval = vstack[ vstack.length - 2 ]; 
	}
	break;
	case 28:
	{
		 rval = createNode( NODE_OP, OP_NONE ); 
	}
	break;
	case 29:
	{
		 rval = createNode( NODE_OP, OP_EQU, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 30:
	{
		 rval = createNode( NODE_OP, OP_LOT, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 31:
	{
		 rval = createNode( NODE_OP, OP_GRT, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 32:
	{
		 rval = createNode( NODE_OP, OP_LOE, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 33:
	{
		 rval = createNode( NODE_OP, OP_GRE, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 34:
	{
		 rval = createNode( NODE_OP, OP_NEQ, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 35:
	{
		 rval = createNode( NODE_OP, OP_NEQ, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 36:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 37:
	{
		 rval = createNode( NODE_OP, OP_SUB, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 38:
	{
		 rval = createNode( NODE_OP, OP_ADD, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 39:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 40:
	{
		 rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 41:
	{
		 rval = createNode( NODE_OP, OP_DIV, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 42:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 43:
	{
		 rval = createNode( NODE_OP, OP_NEG, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 44:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 45:
	{
		 rval = createNode( NODE_OP, OP_INT, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 46:
	{
		 rval = createNode( NODE_OP, OP_INTG, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 47:
	{
		 rval = createNode( NODE_CONST, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 48:
	{
		 rval = createNode( NODE_CONST, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 49:
	{
		 rval = createNode( NODE_VAR, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 50:
	{
		 rval = vstack[ vstack.length - 1 ]; 
	}
	break;
	case 51:
	{
		 rval = vstack[ vstack.length - 2 ]; 
	}
	break;
	case 52:
	{
		 rval = createNode( NODE_OP, OP_RANDOM ); 
	}
	break;
	case 53:
	{
		 rval = createNode( NODE_OP, OP_READVAR, vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 54:
	{
		 rval = createNode( NODE_VAR, vstack[ vstack.length - 1 ] ); 
	}
	break;
}



			if( _dbg_withtrace )
				__dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
				
			for( var i = 0; i < pop_tab[act][1]; i++ )
			{
				sstack.pop();
				vstack.pop();
			}
									
			go = -1;
			for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
			{
				if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
				{
					go = goto_tab[sstack[sstack.length-1]][i+1];
					break;
				}
			}
			
			if( act == 0 )
				break;
				
			if( _dbg_withtrace )
				__dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
				
			sstack.push( go );
			vstack.push( rval );			
		}
		
		if( _dbg_withtrace )
		{		
			alert( _dbg_string );
			_dbg_string = new String();
		}
	}

	if( _dbg_withtrace )
	{
		__dbg_print( "\nParse complete." );
		alert( _dbg_string );
	}
	
	return err_cnt;
}



