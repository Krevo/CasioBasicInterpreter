
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
			return 61;

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
		else if( info.src.charCodeAt( pos ) == 33 ) state = 52;
		else if( info.src.charCodeAt( pos ) == 68 ) state = 53;
		else if( info.src.charCodeAt( pos ) == 100 ) state = 54;
		else if( info.src.charCodeAt( pos ) == 34 ) state = 55;
		else if( info.src.charCodeAt( pos ) == 73 ) state = 56;
		else if( info.src.charCodeAt( pos ) == 105 ) state = 57;
		else if( info.src.charCodeAt( pos ) == 46 ) state = 58;
		else if( info.src.charCodeAt( pos ) == 67 ) state = 76;
		else if( info.src.charCodeAt( pos ) == 99 ) state = 77;
		else if( info.src.charCodeAt( pos ) == 76 ) state = 78;
		else if( info.src.charCodeAt( pos ) == 108 ) state = 79;
		else if( info.src.charCodeAt( pos ) == 77 ) state = 80;
		else if( info.src.charCodeAt( pos ) == 109 ) state = 81;
		else if( info.src.charCodeAt( pos ) == 82 ) state = 82;
		else if( info.src.charCodeAt( pos ) == 114 ) state = 83;
		else if( info.src.charCodeAt( pos ) == 83 ) state = 84;
		else if( info.src.charCodeAt( pos ) == 115 ) state = 85;
		else if( info.src.charCodeAt( pos ) == 69 ) state = 94;
		else if( info.src.charCodeAt( pos ) == 101 ) state = 95;
		else if( info.src.charCodeAt( pos ) == 71 ) state = 96;
		else if( info.src.charCodeAt( pos ) == 103 ) state = 97;
		else if( info.src.charCodeAt( pos ) == 80 ) state = 98;
		else if( info.src.charCodeAt( pos ) == 112 ) state = 99;
		else if( info.src.charCodeAt( pos ) == 87 ) state = 103;
		else if( info.src.charCodeAt( pos ) == 119 ) state = 104;
		else state = -1;
		break;

	case 1:
		state = -1;
		match = 1;
		match_pos = pos;
		break;

	case 2:
		state = -1;
		match = 46;
		match_pos = pos;
		break;

	case 3:
		state = -1;
		match = 44;
		match_pos = pos;
		break;

	case 4:
		state = -1;
		match = 45;
		match_pos = pos;
		break;

	case 5:
		state = -1;
		match = 43;
		match_pos = pos;
		break;

	case 6:
		state = -1;
		match = 40;
		match_pos = pos;
		break;

	case 7:
		state = -1;
		match = 22;
		match_pos = pos;
		break;

	case 8:
		if( info.src.charCodeAt( pos ) == 62 ) state = 25;
		else state = -1;
		match = 41;
		match_pos = pos;
		break;

	case 9:
		state = -1;
		match = 42;
		match_pos = pos;
		break;

	case 10:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 10;
		else if( info.src.charCodeAt( pos ) == 46 ) state = 26;
		else state = -1;
		match = 50;
		match_pos = pos;
		break;

	case 11:
		state = -1;
		match = 28;
		match_pos = pos;
		break;

	case 12:
		state = -1;
		match = 27;
		match_pos = pos;
		break;

	case 13:
		if( info.src.charCodeAt( pos ) == 61 ) state = 27;
		else if( info.src.charCodeAt( pos ) == 62 ) state = 28;
		else state = -1;
		match = 39;
		match_pos = pos;
		break;

	case 14:
		if( info.src.charCodeAt( pos ) == 61 ) state = 29;
		else if( info.src.charCodeAt( pos ) == 62 ) state = 30;
		else state = -1;
		match = 29;
		match_pos = pos;
		break;

	case 15:
		if( info.src.charCodeAt( pos ) == 61 ) state = 31;
		else state = -1;
		match = 38;
		match_pos = pos;
		break;

	case 16:
		state = -1;
		match = 31;
		match_pos = pos;
		break;

	case 17:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 18:
		state = -1;
		match = 25;
		match_pos = pos;
		break;

	case 19:
		state = -1;
		match = 26;
		match_pos = pos;
		break;

	case 20:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 21:
		state = -1;
		match = 23;
		match_pos = pos;
		break;

	case 22:
		state = -1;
		match = 24;
		match_pos = pos;
		break;

	case 23:
		state = -1;
		match = 34;
		match_pos = pos;
		break;

	case 24:
		if( info.src.charCodeAt( pos ) == 34 ) state = 55;
		else state = -1;
		match = 49;
		match_pos = pos;
		break;

	case 25:
		state = -1;
		match = 30;
		match_pos = pos;
		break;

	case 26:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 26;
		else state = -1;
		match = 51;
		match_pos = pos;
		break;

	case 27:
		state = -1;
		match = 36;
		match_pos = pos;
		break;

	case 28:
		state = -1;
		match = 35;
		match_pos = pos;
		break;

	case 29:
		state = -1;
		match = 33;
		match_pos = pos;
		break;

	case 30:
		state = -1;
		match = 32;
		match_pos = pos;
		break;

	case 31:
		state = -1;
		match = 37;
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
		else if( info.src.charCodeAt( pos ) == 71 || info.src.charCodeAt( pos ) == 103 ) state = 72;
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
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else state = -1;
		match = 21;
		match_pos = pos;
		break;

	case 52:
		if( info.src.charCodeAt( pos ) == 61 ) state = 23;
		else state = -1;
		break;

	case 53:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 32;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 60;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 54:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 32;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 60;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 55:
		if( info.src.charCodeAt( pos ) == 34 ) state = 24;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 33 ) || ( info.src.charCodeAt( pos ) >= 35 && info.src.charCodeAt( pos ) <= 254 ) ) state = 55;
		else state = -1;
		break;

	case 56:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 69 ) || ( info.src.charCodeAt( pos ) >= 71 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 101 ) || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 70 || info.src.charCodeAt( pos ) == 102 ) state = 33;
		else if( info.src.charCodeAt( pos ) == 78 || info.src.charCodeAt( pos ) == 110 ) state = 61;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 62;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 57:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 69 ) || ( info.src.charCodeAt( pos ) >= 71 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 101 ) || ( info.src.charCodeAt( pos ) >= 103 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 70 || info.src.charCodeAt( pos ) == 102 ) state = 33;
		else if( info.src.charCodeAt( pos ) == 78 || info.src.charCodeAt( pos ) == 110 ) state = 61;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 62;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 58:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 26;
		else state = -1;
		break;

	case 59:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 34;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 60:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 89 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 121 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 90 || info.src.charCodeAt( pos ) == 122 ) state = 35;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 61:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 36;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 62:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 89 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 121 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 90 || info.src.charCodeAt( pos ) == 122 ) state = 37;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 63:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 38;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 64:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 39;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 65:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 78 || info.src.charCodeAt( pos ) == 110 ) state = 40;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 66:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 88 ) || info.src.charCodeAt( pos ) == 90 || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 120 ) || info.src.charCodeAt( pos ) == 122 ) state = 20;
		else if( info.src.charCodeAt( pos ) == 89 || info.src.charCodeAt( pos ) == 121 ) state = 41;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 67:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 42;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 68:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 43;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 69:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 45;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 70:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 46;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 71:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 67 ) || ( info.src.charCodeAt( pos ) >= 69 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 99 ) || ( info.src.charCodeAt( pos ) >= 101 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 68 || info.src.charCodeAt( pos ) == 100 ) state = 47;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 72:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 48;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 73:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 49;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 74:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 50;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 75:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 51;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 76:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 59;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 77:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 59;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 78:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || info.src.charCodeAt( pos ) == 65 || ( info.src.charCodeAt( pos ) >= 67 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || info.src.charCodeAt( pos ) == 97 || ( info.src.charCodeAt( pos ) >= 99 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 66 || info.src.charCodeAt( pos ) == 98 ) state = 63;
		else if( info.src.charCodeAt( pos ) == 73 || info.src.charCodeAt( pos ) == 105 ) state = 88;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 105;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 79:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || info.src.charCodeAt( pos ) == 65 || ( info.src.charCodeAt( pos ) >= 67 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || info.src.charCodeAt( pos ) == 97 || ( info.src.charCodeAt( pos ) >= 99 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 66 || info.src.charCodeAt( pos ) == 98 ) state = 63;
		else if( info.src.charCodeAt( pos ) == 73 || info.src.charCodeAt( pos ) == 105 ) state = 88;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 105;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 80:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 66 ) || ( info.src.charCodeAt( pos ) >= 68 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 67 || info.src.charCodeAt( pos ) == 99 ) state = 64;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 81:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 66 ) || ( info.src.charCodeAt( pos ) >= 68 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 67 || info.src.charCodeAt( pos ) == 99 ) state = 64;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 82:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 65;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 90;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 83:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 68 ) || ( info.src.charCodeAt( pos ) >= 70 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 100 ) || ( info.src.charCodeAt( pos ) >= 102 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 65;
		else if( info.src.charCodeAt( pos ) == 69 || info.src.charCodeAt( pos ) == 101 ) state = 90;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 84:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 66;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 85:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 66;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 86:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 82 ) || ( info.src.charCodeAt( pos ) >= 84 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 114 ) || ( info.src.charCodeAt( pos ) >= 116 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 83 || info.src.charCodeAt( pos ) == 115 ) state = 67;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 87:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 68;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 88:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 77 ) || ( info.src.charCodeAt( pos ) >= 79 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 109 ) || ( info.src.charCodeAt( pos ) >= 111 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 78 || info.src.charCodeAt( pos ) == 110 ) state = 69;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 89:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 70;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 90:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 71;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 91:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 73;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 92:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 74;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 93:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 83 ) || ( info.src.charCodeAt( pos ) >= 85 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 115 ) || ( info.src.charCodeAt( pos ) >= 117 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 84 || info.src.charCodeAt( pos ) == 116 ) state = 75;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 94:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 86;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 95:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 86;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 96:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 87;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 97:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 78 ) || ( info.src.charCodeAt( pos ) >= 80 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 110 ) || ( info.src.charCodeAt( pos ) >= 112 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 79 || info.src.charCodeAt( pos ) == 111 ) state = 87;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 98:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 89;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 99:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 75 ) || ( info.src.charCodeAt( pos ) >= 77 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 107 ) || ( info.src.charCodeAt( pos ) >= 109 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 76 || info.src.charCodeAt( pos ) == 108 ) state = 89;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 100:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 73 || info.src.charCodeAt( pos ) == 105 ) state = 91;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 101:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 72 ) || ( info.src.charCodeAt( pos ) >= 74 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 104 ) || ( info.src.charCodeAt( pos ) >= 106 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 73 || info.src.charCodeAt( pos ) == 105 ) state = 92;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 102:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 66 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 98 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 65 || info.src.charCodeAt( pos ) == 97 ) state = 93;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 103:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 71 ) || ( info.src.charCodeAt( pos ) >= 73 && info.src.charCodeAt( pos ) <= 81 ) || ( info.src.charCodeAt( pos ) >= 83 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 72 || info.src.charCodeAt( pos ) == 104 ) state = 100;
		else if( info.src.charCodeAt( pos ) == 82 || info.src.charCodeAt( pos ) == 114 ) state = 101;
		else state = -1;
		match = 47;
		match_pos = pos;
		break;

	case 104:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 71 ) || ( info.src.charCodeAt( pos ) >= 73 && info.src.charCodeAt( pos ) <= 81 ) || ( info.src.charCodeAt( pos ) >= 83 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 103 ) || ( info.src.charCodeAt( pos ) >= 105 && info.src.charCodeAt( pos ) <= 113 ) || ( info.src.charCodeAt( pos ) >= 115 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 72 || info.src.charCodeAt( pos ) == 104 ) state = 100;
		else if( info.src.charCodeAt( pos ) == 82 || info.src.charCodeAt( pos ) == 114 ) state = 101;
		else state = -1;
		match = 48;
		match_pos = pos;
		break;

	case 105:
		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 66 ) || ( info.src.charCodeAt( pos ) >= 68 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 98 ) || ( info.src.charCodeAt( pos ) >= 100 && info.src.charCodeAt( pos ) <= 122 ) ) state = 20;
		else if( info.src.charCodeAt( pos ) == 67 || info.src.charCodeAt( pos ) == 99 ) state = 102;
		else state = -1;
		match = 48;
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
	case 49:
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
	new Array( 52/* Program */, 2 ),
	new Array( 52/* Program */, 0 ),
	new Array( 54/* Stmt_List */, 2 ),
	new Array( 54/* Stmt_List */, 0 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 5 ),
	new Array( 53/* Stmt */, 4 ),
	new Array( 53/* Stmt */, 5 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 2 ),
	new Array( 53/* Stmt */, 5 ),
	new Array( 53/* Stmt */, 4 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 2 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 4 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 5 ),
	new Array( 53/* Stmt */, 13 ),
	new Array( 53/* Stmt */, 7 ),
	new Array( 53/* Stmt */, 7 ),
	new Array( 53/* Stmt */, 2 ),
	new Array( 53/* Stmt */, 2 ),
	new Array( 53/* Stmt */, 2 ),
	new Array( 53/* Stmt */, 3 ),
	new Array( 53/* Stmt */, 1 ),
	new Array( 55/* Expression */, 3 ),
	new Array( 55/* Expression */, 3 ),
	new Array( 55/* Expression */, 3 ),
	new Array( 55/* Expression */, 3 ),
	new Array( 55/* Expression */, 3 ),
	new Array( 55/* Expression */, 3 ),
	new Array( 55/* Expression */, 3 ),
	new Array( 55/* Expression */, 1 ),
	new Array( 57/* AddSubExp */, 3 ),
	new Array( 57/* AddSubExp */, 3 ),
	new Array( 57/* AddSubExp */, 1 ),
	new Array( 58/* MulDivExp */, 3 ),
	new Array( 58/* MulDivExp */, 3 ),
	new Array( 58/* MulDivExp */, 1 ),
	new Array( 59/* NegExp */, 2 ),
	new Array( 59/* NegExp */, 1 ),
	new Array( 59/* NegExp */, 2 ),
	new Array( 59/* NegExp */, 2 ),
	new Array( 60/* Value */, 1 ),
	new Array( 60/* Value */, 1 ),
	new Array( 60/* Value */, 1 ),
	new Array( 60/* Value */, 1 ),
	new Array( 60/* Value */, 3 ),
	new Array( 60/* Value */, 2 ),
	new Array( 56/* VariableCasio */, 4 ),
	new Array( 56/* VariableCasio */, 1 )
);

/* Action-Table */
var act_tab = new Array(
	/* State 0 */ new Array( 61/* "$" */,-2 , 2/* "IF" */,-2 , 4/* "WHILE" */,-2 , 5/* "DO" */,-2 , 6/* "SAY" */,-2 , 49/* "String" */,-2 , 31/* "?" */,-2 , 7/* "WRITE" */,-2 , 11/* "LBL" */,-2 , 12/* "GOTO" */,-2 , 8/* "READ" */,-2 , 9/* "ISZ" */,-2 , 10/* "DSZ" */,-2 , 13/* "PLOT" */,-2 , 14/* "RANGE" */,-2 , 21/* "LOCATE" */,-2 , 15/* "LINE" */,-2 , 16/* "CLS" */,-2 , 17/* "MCL" */,-2 , 23/* "{" */,-2 , 28/* ":" */,-2 , 41/* "-" */,-2 , 19/* "INT" */,-2 , 20/* "INTG" */,-2 , 50/* "Integer" */,-2 , 51/* "Float" */,-2 , 48/* "Identifier" */,-2 , 47/* "Letter" */,-2 , 44/* "(" */,-2 , 18/* "RAN" */,-2 ),
	/* State 1 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 49/* "String" */,8 , 31/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 21/* "LOCATE" */,18 , 15/* "LINE" */,19 , 16/* "CLS" */,20 , 17/* "MCL" */,21 , 23/* "{" */,22 , 28/* ":" */,23 , 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 , 61/* "$" */,0 ),
	/* State 2 */ new Array( 61/* "$" */,-1 , 2/* "IF" */,-1 , 4/* "WHILE" */,-1 , 5/* "DO" */,-1 , 6/* "SAY" */,-1 , 49/* "String" */,-1 , 31/* "?" */,-1 , 7/* "WRITE" */,-1 , 11/* "LBL" */,-1 , 12/* "GOTO" */,-1 , 8/* "READ" */,-1 , 9/* "ISZ" */,-1 , 10/* "DSZ" */,-1 , 13/* "PLOT" */,-1 , 14/* "RANGE" */,-1 , 21/* "LOCATE" */,-1 , 15/* "LINE" */,-1 , 16/* "CLS" */,-1 , 17/* "MCL" */,-1 , 23/* "{" */,-1 , 28/* ":" */,-1 , 41/* "-" */,-1 , 19/* "INT" */,-1 , 20/* "INTG" */,-1 , 50/* "Integer" */,-1 , 51/* "Float" */,-1 , 48/* "Identifier" */,-1 , 47/* "Letter" */,-1 , 44/* "(" */,-1 , 18/* "RAN" */,-1 ),
	/* State 3 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 4 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 30/* "->" */,46 , 28/* ":" */,47 , 32/* "=>" */,48 ),
	/* State 5 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 6 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 49/* "String" */,8 , 31/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 21/* "LOCATE" */,18 , 15/* "LINE" */,19 , 16/* "CLS" */,20 , 17/* "MCL" */,21 , 23/* "{" */,22 , 28/* ":" */,23 , 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 7 */ new Array( 49/* "String" */,51 ),
	/* State 8 */ new Array( 31/* "?" */,52 , 28/* ":" */,53 ),
	/* State 9 */ new Array( 30/* "->" */,54 ),
	/* State 10 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 11 */ new Array( 50/* "Integer" */,56 ),
	/* State 12 */ new Array( 50/* "Integer" */,57 ),
	/* State 13 */ new Array( 48/* "Identifier" */,58 ),
	/* State 14 */ new Array( 47/* "Letter" */,37 ),
	/* State 15 */ new Array( 47/* "Letter" */,37 ),
	/* State 16 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 17 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 18 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 19 */ new Array( 28/* ":" */,64 ),
	/* State 20 */ new Array( 28/* ":" */,65 ),
	/* State 21 */ new Array( 28/* ":" */,66 ),
	/* State 22 */ new Array( 24/* "}" */,-4 , 2/* "IF" */,-4 , 4/* "WHILE" */,-4 , 5/* "DO" */,-4 , 6/* "SAY" */,-4 , 49/* "String" */,-4 , 31/* "?" */,-4 , 7/* "WRITE" */,-4 , 11/* "LBL" */,-4 , 12/* "GOTO" */,-4 , 8/* "READ" */,-4 , 9/* "ISZ" */,-4 , 10/* "DSZ" */,-4 , 13/* "PLOT" */,-4 , 14/* "RANGE" */,-4 , 21/* "LOCATE" */,-4 , 15/* "LINE" */,-4 , 16/* "CLS" */,-4 , 17/* "MCL" */,-4 , 23/* "{" */,-4 , 28/* ":" */,-4 , 41/* "-" */,-4 , 19/* "INT" */,-4 , 20/* "INTG" */,-4 , 50/* "Integer" */,-4 , 51/* "Float" */,-4 , 48/* "Identifier" */,-4 , 47/* "Letter" */,-4 , 44/* "(" */,-4 , 18/* "RAN" */,-4 ),
	/* State 23 */ new Array( 61/* "$" */,-30 , 2/* "IF" */,-30 , 4/* "WHILE" */,-30 , 5/* "DO" */,-30 , 6/* "SAY" */,-30 , 49/* "String" */,-30 , 31/* "?" */,-30 , 7/* "WRITE" */,-30 , 11/* "LBL" */,-30 , 12/* "GOTO" */,-30 , 8/* "READ" */,-30 , 9/* "ISZ" */,-30 , 10/* "DSZ" */,-30 , 13/* "PLOT" */,-30 , 14/* "RANGE" */,-30 , 21/* "LOCATE" */,-30 , 15/* "LINE" */,-30 , 16/* "CLS" */,-30 , 17/* "MCL" */,-30 , 23/* "{" */,-30 , 28/* ":" */,-30 , 41/* "-" */,-30 , 19/* "INT" */,-30 , 20/* "INTG" */,-30 , 50/* "Integer" */,-30 , 51/* "Float" */,-30 , 48/* "Identifier" */,-30 , 47/* "Letter" */,-30 , 44/* "(" */,-30 , 18/* "RAN" */,-30 , 3/* "ELSE" */,-30 , 24/* "}" */,-30 ),
	/* State 24 */ new Array( 40/* "+" */,68 , 41/* "-" */,69 , 32/* "=>" */,-38 , 28/* ":" */,-38 , 30/* "->" */,-38 , 29/* "=" */,-38 , 39/* "<" */,-38 , 38/* ">" */,-38 , 36/* "<=" */,-38 , 37/* ">=" */,-38 , 34/* "!=" */,-38 , 35/* "<>" */,-38 , 2/* "IF" */,-38 , 4/* "WHILE" */,-38 , 5/* "DO" */,-38 , 6/* "SAY" */,-38 , 49/* "String" */,-38 , 31/* "?" */,-38 , 7/* "WRITE" */,-38 , 11/* "LBL" */,-38 , 12/* "GOTO" */,-38 , 8/* "READ" */,-38 , 9/* "ISZ" */,-38 , 10/* "DSZ" */,-38 , 13/* "PLOT" */,-38 , 14/* "RANGE" */,-38 , 21/* "LOCATE" */,-38 , 15/* "LINE" */,-38 , 16/* "CLS" */,-38 , 17/* "MCL" */,-38 , 23/* "{" */,-38 , 19/* "INT" */,-38 , 20/* "INTG" */,-38 , 50/* "Integer" */,-38 , 51/* "Float" */,-38 , 48/* "Identifier" */,-38 , 47/* "Letter" */,-38 , 44/* "(" */,-38 , 18/* "RAN" */,-38 , 22/* "," */,-38 , 45/* ")" */,-38 , 26/* "]" */,-38 ),
	/* State 25 */ new Array( 42/* "/" */,70 , 43/* "*" */,71 , 32/* "=>" */,-41 , 28/* ":" */,-41 , 30/* "->" */,-41 , 29/* "=" */,-41 , 39/* "<" */,-41 , 38/* ">" */,-41 , 36/* "<=" */,-41 , 37/* ">=" */,-41 , 34/* "!=" */,-41 , 35/* "<>" */,-41 , 41/* "-" */,-41 , 40/* "+" */,-41 , 2/* "IF" */,-41 , 4/* "WHILE" */,-41 , 5/* "DO" */,-41 , 6/* "SAY" */,-41 , 49/* "String" */,-41 , 31/* "?" */,-41 , 7/* "WRITE" */,-41 , 11/* "LBL" */,-41 , 12/* "GOTO" */,-41 , 8/* "READ" */,-41 , 9/* "ISZ" */,-41 , 10/* "DSZ" */,-41 , 13/* "PLOT" */,-41 , 14/* "RANGE" */,-41 , 21/* "LOCATE" */,-41 , 15/* "LINE" */,-41 , 16/* "CLS" */,-41 , 17/* "MCL" */,-41 , 23/* "{" */,-41 , 19/* "INT" */,-41 , 20/* "INTG" */,-41 , 50/* "Integer" */,-41 , 51/* "Float" */,-41 , 48/* "Identifier" */,-41 , 47/* "Letter" */,-41 , 44/* "(" */,-41 , 18/* "RAN" */,-41 , 22/* "," */,-41 , 45/* ")" */,-41 , 26/* "]" */,-41 ),
	/* State 26 */ new Array( 32/* "=>" */,-44 , 28/* ":" */,-44 , 30/* "->" */,-44 , 29/* "=" */,-44 , 39/* "<" */,-44 , 38/* ">" */,-44 , 36/* "<=" */,-44 , 37/* ">=" */,-44 , 34/* "!=" */,-44 , 35/* "<>" */,-44 , 41/* "-" */,-44 , 40/* "+" */,-44 , 43/* "*" */,-44 , 42/* "/" */,-44 , 2/* "IF" */,-44 , 4/* "WHILE" */,-44 , 5/* "DO" */,-44 , 6/* "SAY" */,-44 , 49/* "String" */,-44 , 31/* "?" */,-44 , 7/* "WRITE" */,-44 , 11/* "LBL" */,-44 , 12/* "GOTO" */,-44 , 8/* "READ" */,-44 , 9/* "ISZ" */,-44 , 10/* "DSZ" */,-44 , 13/* "PLOT" */,-44 , 14/* "RANGE" */,-44 , 21/* "LOCATE" */,-44 , 15/* "LINE" */,-44 , 16/* "CLS" */,-44 , 17/* "MCL" */,-44 , 23/* "{" */,-44 , 19/* "INT" */,-44 , 20/* "INTG" */,-44 , 50/* "Integer" */,-44 , 51/* "Float" */,-44 , 48/* "Identifier" */,-44 , 47/* "Letter" */,-44 , 44/* "(" */,-44 , 18/* "RAN" */,-44 , 22/* "," */,-44 , 45/* ")" */,-44 , 26/* "]" */,-44 ),
	/* State 27 */ new Array( 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 28 */ new Array( 32/* "=>" */,-46 , 28/* ":" */,-46 , 30/* "->" */,-46 , 29/* "=" */,-46 , 39/* "<" */,-46 , 38/* ">" */,-46 , 36/* "<=" */,-46 , 37/* ">=" */,-46 , 34/* "!=" */,-46 , 35/* "<>" */,-46 , 41/* "-" */,-46 , 40/* "+" */,-46 , 43/* "*" */,-46 , 42/* "/" */,-46 , 2/* "IF" */,-46 , 4/* "WHILE" */,-46 , 5/* "DO" */,-46 , 6/* "SAY" */,-46 , 49/* "String" */,-46 , 31/* "?" */,-46 , 7/* "WRITE" */,-46 , 11/* "LBL" */,-46 , 12/* "GOTO" */,-46 , 8/* "READ" */,-46 , 9/* "ISZ" */,-46 , 10/* "DSZ" */,-46 , 13/* "PLOT" */,-46 , 14/* "RANGE" */,-46 , 21/* "LOCATE" */,-46 , 15/* "LINE" */,-46 , 16/* "CLS" */,-46 , 17/* "MCL" */,-46 , 23/* "{" */,-46 , 19/* "INT" */,-46 , 20/* "INTG" */,-46 , 50/* "Integer" */,-46 , 51/* "Float" */,-46 , 48/* "Identifier" */,-46 , 47/* "Letter" */,-46 , 44/* "(" */,-46 , 18/* "RAN" */,-46 , 22/* "," */,-46 , 45/* ")" */,-46 , 26/* "]" */,-46 ),
	/* State 29 */ new Array( 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 30 */ new Array( 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 31 */ new Array( 32/* "=>" */,-49 , 28/* ":" */,-49 , 30/* "->" */,-49 , 29/* "=" */,-49 , 39/* "<" */,-49 , 38/* ">" */,-49 , 36/* "<=" */,-49 , 37/* ">=" */,-49 , 34/* "!=" */,-49 , 35/* "<>" */,-49 , 41/* "-" */,-49 , 40/* "+" */,-49 , 43/* "*" */,-49 , 42/* "/" */,-49 , 2/* "IF" */,-49 , 4/* "WHILE" */,-49 , 5/* "DO" */,-49 , 6/* "SAY" */,-49 , 49/* "String" */,-49 , 31/* "?" */,-49 , 7/* "WRITE" */,-49 , 11/* "LBL" */,-49 , 12/* "GOTO" */,-49 , 8/* "READ" */,-49 , 9/* "ISZ" */,-49 , 10/* "DSZ" */,-49 , 13/* "PLOT" */,-49 , 14/* "RANGE" */,-49 , 21/* "LOCATE" */,-49 , 15/* "LINE" */,-49 , 16/* "CLS" */,-49 , 17/* "MCL" */,-49 , 23/* "{" */,-49 , 19/* "INT" */,-49 , 20/* "INTG" */,-49 , 50/* "Integer" */,-49 , 51/* "Float" */,-49 , 48/* "Identifier" */,-49 , 47/* "Letter" */,-49 , 44/* "(" */,-49 , 18/* "RAN" */,-49 , 22/* "," */,-49 , 45/* ")" */,-49 , 26/* "]" */,-49 ),
	/* State 32 */ new Array( 32/* "=>" */,-50 , 28/* ":" */,-50 , 30/* "->" */,-50 , 29/* "=" */,-50 , 39/* "<" */,-50 , 38/* ">" */,-50 , 36/* "<=" */,-50 , 37/* ">=" */,-50 , 34/* "!=" */,-50 , 35/* "<>" */,-50 , 41/* "-" */,-50 , 40/* "+" */,-50 , 43/* "*" */,-50 , 42/* "/" */,-50 , 2/* "IF" */,-50 , 4/* "WHILE" */,-50 , 5/* "DO" */,-50 , 6/* "SAY" */,-50 , 49/* "String" */,-50 , 31/* "?" */,-50 , 7/* "WRITE" */,-50 , 11/* "LBL" */,-50 , 12/* "GOTO" */,-50 , 8/* "READ" */,-50 , 9/* "ISZ" */,-50 , 10/* "DSZ" */,-50 , 13/* "PLOT" */,-50 , 14/* "RANGE" */,-50 , 21/* "LOCATE" */,-50 , 15/* "LINE" */,-50 , 16/* "CLS" */,-50 , 17/* "MCL" */,-50 , 23/* "{" */,-50 , 19/* "INT" */,-50 , 20/* "INTG" */,-50 , 50/* "Integer" */,-50 , 51/* "Float" */,-50 , 48/* "Identifier" */,-50 , 47/* "Letter" */,-50 , 44/* "(" */,-50 , 18/* "RAN" */,-50 , 22/* "," */,-50 , 45/* ")" */,-50 , 26/* "]" */,-50 ),
	/* State 33 */ new Array( 32/* "=>" */,-51 , 28/* ":" */,-51 , 30/* "->" */,-51 , 29/* "=" */,-51 , 39/* "<" */,-51 , 38/* ">" */,-51 , 36/* "<=" */,-51 , 37/* ">=" */,-51 , 34/* "!=" */,-51 , 35/* "<>" */,-51 , 41/* "-" */,-51 , 40/* "+" */,-51 , 43/* "*" */,-51 , 42/* "/" */,-51 , 2/* "IF" */,-51 , 4/* "WHILE" */,-51 , 5/* "DO" */,-51 , 6/* "SAY" */,-51 , 49/* "String" */,-51 , 31/* "?" */,-51 , 7/* "WRITE" */,-51 , 11/* "LBL" */,-51 , 12/* "GOTO" */,-51 , 8/* "READ" */,-51 , 9/* "ISZ" */,-51 , 10/* "DSZ" */,-51 , 13/* "PLOT" */,-51 , 14/* "RANGE" */,-51 , 21/* "LOCATE" */,-51 , 15/* "LINE" */,-51 , 16/* "CLS" */,-51 , 17/* "MCL" */,-51 , 23/* "{" */,-51 , 19/* "INT" */,-51 , 20/* "INTG" */,-51 , 50/* "Integer" */,-51 , 51/* "Float" */,-51 , 48/* "Identifier" */,-51 , 47/* "Letter" */,-51 , 44/* "(" */,-51 , 18/* "RAN" */,-51 , 22/* "," */,-51 , 45/* ")" */,-51 , 26/* "]" */,-51 ),
	/* State 34 */ new Array( 32/* "=>" */,-52 , 28/* ":" */,-52 , 30/* "->" */,-52 , 29/* "=" */,-52 , 39/* "<" */,-52 , 38/* ">" */,-52 , 36/* "<=" */,-52 , 37/* ">=" */,-52 , 34/* "!=" */,-52 , 35/* "<>" */,-52 , 41/* "-" */,-52 , 40/* "+" */,-52 , 43/* "*" */,-52 , 42/* "/" */,-52 , 2/* "IF" */,-52 , 4/* "WHILE" */,-52 , 5/* "DO" */,-52 , 6/* "SAY" */,-52 , 49/* "String" */,-52 , 31/* "?" */,-52 , 7/* "WRITE" */,-52 , 11/* "LBL" */,-52 , 12/* "GOTO" */,-52 , 8/* "READ" */,-52 , 9/* "ISZ" */,-52 , 10/* "DSZ" */,-52 , 13/* "PLOT" */,-52 , 14/* "RANGE" */,-52 , 21/* "LOCATE" */,-52 , 15/* "LINE" */,-52 , 16/* "CLS" */,-52 , 17/* "MCL" */,-52 , 23/* "{" */,-52 , 19/* "INT" */,-52 , 20/* "INTG" */,-52 , 50/* "Integer" */,-52 , 51/* "Float" */,-52 , 48/* "Identifier" */,-52 , 47/* "Letter" */,-52 , 44/* "(" */,-52 , 18/* "RAN" */,-52 , 22/* "," */,-52 , 45/* ")" */,-52 , 26/* "]" */,-52 ),
	/* State 35 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 36 */ new Array( 46/* "#" */,76 ),
	/* State 37 */ new Array( 25/* "[" */,77 , 32/* "=>" */,-56 , 28/* ":" */,-56 , 30/* "->" */,-56 , 29/* "=" */,-56 , 39/* "<" */,-56 , 38/* ">" */,-56 , 36/* "<=" */,-56 , 37/* ">=" */,-56 , 34/* "!=" */,-56 , 35/* "<>" */,-56 , 41/* "-" */,-56 , 40/* "+" */,-56 , 43/* "*" */,-56 , 42/* "/" */,-56 , 2/* "IF" */,-56 , 4/* "WHILE" */,-56 , 5/* "DO" */,-56 , 6/* "SAY" */,-56 , 49/* "String" */,-56 , 31/* "?" */,-56 , 7/* "WRITE" */,-56 , 11/* "LBL" */,-56 , 12/* "GOTO" */,-56 , 8/* "READ" */,-56 , 9/* "ISZ" */,-56 , 10/* "DSZ" */,-56 , 13/* "PLOT" */,-56 , 14/* "RANGE" */,-56 , 21/* "LOCATE" */,-56 , 15/* "LINE" */,-56 , 16/* "CLS" */,-56 , 17/* "MCL" */,-56 , 23/* "{" */,-56 , 19/* "INT" */,-56 , 20/* "INTG" */,-56 , 50/* "Integer" */,-56 , 51/* "Float" */,-56 , 48/* "Identifier" */,-56 , 47/* "Letter" */,-56 , 44/* "(" */,-56 , 18/* "RAN" */,-56 , 22/* "," */,-56 , 45/* ")" */,-56 , 26/* "]" */,-56 ),
	/* State 38 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 49/* "String" */,8 , 31/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 21/* "LOCATE" */,18 , 15/* "LINE" */,19 , 16/* "CLS" */,20 , 17/* "MCL" */,21 , 23/* "{" */,22 , 28/* ":" */,23 , 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 39 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 40 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 41 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 42 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 43 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 44 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 45 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 46 */ new Array( 47/* "Letter" */,37 ),
	/* State 47 */ new Array( 61/* "$" */,-15 , 2/* "IF" */,-15 , 4/* "WHILE" */,-15 , 5/* "DO" */,-15 , 6/* "SAY" */,-15 , 49/* "String" */,-15 , 31/* "?" */,-15 , 7/* "WRITE" */,-15 , 11/* "LBL" */,-15 , 12/* "GOTO" */,-15 , 8/* "READ" */,-15 , 9/* "ISZ" */,-15 , 10/* "DSZ" */,-15 , 13/* "PLOT" */,-15 , 14/* "RANGE" */,-15 , 21/* "LOCATE" */,-15 , 15/* "LINE" */,-15 , 16/* "CLS" */,-15 , 17/* "MCL" */,-15 , 23/* "{" */,-15 , 28/* ":" */,-15 , 41/* "-" */,-15 , 19/* "INT" */,-15 , 20/* "INTG" */,-15 , 50/* "Integer" */,-15 , 51/* "Float" */,-15 , 48/* "Identifier" */,-15 , 47/* "Letter" */,-15 , 44/* "(" */,-15 , 18/* "RAN" */,-15 , 3/* "ELSE" */,-15 , 24/* "}" */,-15 ),
	/* State 48 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 49/* "String" */,8 , 31/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 21/* "LOCATE" */,18 , 15/* "LINE" */,19 , 16/* "CLS" */,20 , 17/* "MCL" */,21 , 23/* "{" */,22 , 28/* ":" */,23 , 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 49 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 5/* "DO" */,88 ),
	/* State 50 */ new Array( 4/* "WHILE" */,89 ),
	/* State 51 */ new Array( 28/* ":" */,90 ),
	/* State 52 */ new Array( 30/* "->" */,91 ),
	/* State 53 */ new Array( 61/* "$" */,-11 , 2/* "IF" */,-11 , 4/* "WHILE" */,-11 , 5/* "DO" */,-11 , 6/* "SAY" */,-11 , 49/* "String" */,-11 , 31/* "?" */,-11 , 7/* "WRITE" */,-11 , 11/* "LBL" */,-11 , 12/* "GOTO" */,-11 , 8/* "READ" */,-11 , 9/* "ISZ" */,-11 , 10/* "DSZ" */,-11 , 13/* "PLOT" */,-11 , 14/* "RANGE" */,-11 , 21/* "LOCATE" */,-11 , 15/* "LINE" */,-11 , 16/* "CLS" */,-11 , 17/* "MCL" */,-11 , 23/* "{" */,-11 , 28/* ":" */,-11 , 41/* "-" */,-11 , 19/* "INT" */,-11 , 20/* "INTG" */,-11 , 50/* "Integer" */,-11 , 51/* "Float" */,-11 , 48/* "Identifier" */,-11 , 47/* "Letter" */,-11 , 44/* "(" */,-11 , 18/* "RAN" */,-11 , 3/* "ELSE" */,-11 , 24/* "}" */,-11 ),
	/* State 54 */ new Array( 47/* "Letter" */,37 ),
	/* State 55 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 28/* ":" */,93 ),
	/* State 56 */ new Array( 28/* ":" */,94 ),
	/* State 57 */ new Array( 28/* ":" */,95 ),
	/* State 58 */ new Array( 28/* ":" */,96 ),
	/* State 59 */ new Array( 28/* ":" */,97 ),
	/* State 60 */ new Array( 28/* ":" */,98 ),
	/* State 61 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 22/* "," */,99 ),
	/* State 62 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 22/* "," */,100 ),
	/* State 63 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 22/* "," */,101 ),
	/* State 64 */ new Array( 61/* "$" */,-26 , 2/* "IF" */,-26 , 4/* "WHILE" */,-26 , 5/* "DO" */,-26 , 6/* "SAY" */,-26 , 49/* "String" */,-26 , 31/* "?" */,-26 , 7/* "WRITE" */,-26 , 11/* "LBL" */,-26 , 12/* "GOTO" */,-26 , 8/* "READ" */,-26 , 9/* "ISZ" */,-26 , 10/* "DSZ" */,-26 , 13/* "PLOT" */,-26 , 14/* "RANGE" */,-26 , 21/* "LOCATE" */,-26 , 15/* "LINE" */,-26 , 16/* "CLS" */,-26 , 17/* "MCL" */,-26 , 23/* "{" */,-26 , 28/* ":" */,-26 , 41/* "-" */,-26 , 19/* "INT" */,-26 , 20/* "INTG" */,-26 , 50/* "Integer" */,-26 , 51/* "Float" */,-26 , 48/* "Identifier" */,-26 , 47/* "Letter" */,-26 , 44/* "(" */,-26 , 18/* "RAN" */,-26 , 3/* "ELSE" */,-26 , 24/* "}" */,-26 ),
	/* State 65 */ new Array( 61/* "$" */,-27 , 2/* "IF" */,-27 , 4/* "WHILE" */,-27 , 5/* "DO" */,-27 , 6/* "SAY" */,-27 , 49/* "String" */,-27 , 31/* "?" */,-27 , 7/* "WRITE" */,-27 , 11/* "LBL" */,-27 , 12/* "GOTO" */,-27 , 8/* "READ" */,-27 , 9/* "ISZ" */,-27 , 10/* "DSZ" */,-27 , 13/* "PLOT" */,-27 , 14/* "RANGE" */,-27 , 21/* "LOCATE" */,-27 , 15/* "LINE" */,-27 , 16/* "CLS" */,-27 , 17/* "MCL" */,-27 , 23/* "{" */,-27 , 28/* ":" */,-27 , 41/* "-" */,-27 , 19/* "INT" */,-27 , 20/* "INTG" */,-27 , 50/* "Integer" */,-27 , 51/* "Float" */,-27 , 48/* "Identifier" */,-27 , 47/* "Letter" */,-27 , 44/* "(" */,-27 , 18/* "RAN" */,-27 , 3/* "ELSE" */,-27 , 24/* "}" */,-27 ),
	/* State 66 */ new Array( 61/* "$" */,-28 , 2/* "IF" */,-28 , 4/* "WHILE" */,-28 , 5/* "DO" */,-28 , 6/* "SAY" */,-28 , 49/* "String" */,-28 , 31/* "?" */,-28 , 7/* "WRITE" */,-28 , 11/* "LBL" */,-28 , 12/* "GOTO" */,-28 , 8/* "READ" */,-28 , 9/* "ISZ" */,-28 , 10/* "DSZ" */,-28 , 13/* "PLOT" */,-28 , 14/* "RANGE" */,-28 , 21/* "LOCATE" */,-28 , 15/* "LINE" */,-28 , 16/* "CLS" */,-28 , 17/* "MCL" */,-28 , 23/* "{" */,-28 , 28/* ":" */,-28 , 41/* "-" */,-28 , 19/* "INT" */,-28 , 20/* "INTG" */,-28 , 50/* "Integer" */,-28 , 51/* "Float" */,-28 , 48/* "Identifier" */,-28 , 47/* "Letter" */,-28 , 44/* "(" */,-28 , 18/* "RAN" */,-28 , 3/* "ELSE" */,-28 , 24/* "}" */,-28 ),
	/* State 67 */ new Array( 24/* "}" */,103 , 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 49/* "String" */,8 , 31/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 21/* "LOCATE" */,18 , 15/* "LINE" */,19 , 16/* "CLS" */,20 , 17/* "MCL" */,21 , 23/* "{" */,22 , 28/* ":" */,23 , 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 68 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 69 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 70 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 71 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 72 */ new Array( 32/* "=>" */,-45 , 28/* ":" */,-45 , 30/* "->" */,-45 , 29/* "=" */,-45 , 39/* "<" */,-45 , 38/* ">" */,-45 , 36/* "<=" */,-45 , 37/* ">=" */,-45 , 34/* "!=" */,-45 , 35/* "<>" */,-45 , 41/* "-" */,-45 , 40/* "+" */,-45 , 43/* "*" */,-45 , 42/* "/" */,-45 , 2/* "IF" */,-45 , 4/* "WHILE" */,-45 , 5/* "DO" */,-45 , 6/* "SAY" */,-45 , 49/* "String" */,-45 , 31/* "?" */,-45 , 7/* "WRITE" */,-45 , 11/* "LBL" */,-45 , 12/* "GOTO" */,-45 , 8/* "READ" */,-45 , 9/* "ISZ" */,-45 , 10/* "DSZ" */,-45 , 13/* "PLOT" */,-45 , 14/* "RANGE" */,-45 , 21/* "LOCATE" */,-45 , 15/* "LINE" */,-45 , 16/* "CLS" */,-45 , 17/* "MCL" */,-45 , 23/* "{" */,-45 , 19/* "INT" */,-45 , 20/* "INTG" */,-45 , 50/* "Integer" */,-45 , 51/* "Float" */,-45 , 48/* "Identifier" */,-45 , 47/* "Letter" */,-45 , 44/* "(" */,-45 , 18/* "RAN" */,-45 , 22/* "," */,-45 , 45/* ")" */,-45 , 26/* "]" */,-45 ),
	/* State 73 */ new Array( 32/* "=>" */,-47 , 28/* ":" */,-47 , 30/* "->" */,-47 , 29/* "=" */,-47 , 39/* "<" */,-47 , 38/* ">" */,-47 , 36/* "<=" */,-47 , 37/* ">=" */,-47 , 34/* "!=" */,-47 , 35/* "<>" */,-47 , 41/* "-" */,-47 , 40/* "+" */,-47 , 43/* "*" */,-47 , 42/* "/" */,-47 , 2/* "IF" */,-47 , 4/* "WHILE" */,-47 , 5/* "DO" */,-47 , 6/* "SAY" */,-47 , 49/* "String" */,-47 , 31/* "?" */,-47 , 7/* "WRITE" */,-47 , 11/* "LBL" */,-47 , 12/* "GOTO" */,-47 , 8/* "READ" */,-47 , 9/* "ISZ" */,-47 , 10/* "DSZ" */,-47 , 13/* "PLOT" */,-47 , 14/* "RANGE" */,-47 , 21/* "LOCATE" */,-47 , 15/* "LINE" */,-47 , 16/* "CLS" */,-47 , 17/* "MCL" */,-47 , 23/* "{" */,-47 , 19/* "INT" */,-47 , 20/* "INTG" */,-47 , 50/* "Integer" */,-47 , 51/* "Float" */,-47 , 48/* "Identifier" */,-47 , 47/* "Letter" */,-47 , 44/* "(" */,-47 , 18/* "RAN" */,-47 , 22/* "," */,-47 , 45/* ")" */,-47 , 26/* "]" */,-47 ),
	/* State 74 */ new Array( 32/* "=>" */,-48 , 28/* ":" */,-48 , 30/* "->" */,-48 , 29/* "=" */,-48 , 39/* "<" */,-48 , 38/* ">" */,-48 , 36/* "<=" */,-48 , 37/* ">=" */,-48 , 34/* "!=" */,-48 , 35/* "<>" */,-48 , 41/* "-" */,-48 , 40/* "+" */,-48 , 43/* "*" */,-48 , 42/* "/" */,-48 , 2/* "IF" */,-48 , 4/* "WHILE" */,-48 , 5/* "DO" */,-48 , 6/* "SAY" */,-48 , 49/* "String" */,-48 , 31/* "?" */,-48 , 7/* "WRITE" */,-48 , 11/* "LBL" */,-48 , 12/* "GOTO" */,-48 , 8/* "READ" */,-48 , 9/* "ISZ" */,-48 , 10/* "DSZ" */,-48 , 13/* "PLOT" */,-48 , 14/* "RANGE" */,-48 , 21/* "LOCATE" */,-48 , 15/* "LINE" */,-48 , 16/* "CLS" */,-48 , 17/* "MCL" */,-48 , 23/* "{" */,-48 , 19/* "INT" */,-48 , 20/* "INTG" */,-48 , 50/* "Integer" */,-48 , 51/* "Float" */,-48 , 48/* "Identifier" */,-48 , 47/* "Letter" */,-48 , 44/* "(" */,-48 , 18/* "RAN" */,-48 , 22/* "," */,-48 , 45/* ")" */,-48 , 26/* "]" */,-48 ),
	/* State 75 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 45/* ")" */,108 ),
	/* State 76 */ new Array( 32/* "=>" */,-54 , 28/* ":" */,-54 , 30/* "->" */,-54 , 29/* "=" */,-54 , 39/* "<" */,-54 , 38/* ">" */,-54 , 36/* "<=" */,-54 , 37/* ">=" */,-54 , 34/* "!=" */,-54 , 35/* "<>" */,-54 , 41/* "-" */,-54 , 40/* "+" */,-54 , 43/* "*" */,-54 , 42/* "/" */,-54 , 2/* "IF" */,-54 , 4/* "WHILE" */,-54 , 5/* "DO" */,-54 , 6/* "SAY" */,-54 , 49/* "String" */,-54 , 31/* "?" */,-54 , 7/* "WRITE" */,-54 , 11/* "LBL" */,-54 , 12/* "GOTO" */,-54 , 8/* "READ" */,-54 , 9/* "ISZ" */,-54 , 10/* "DSZ" */,-54 , 13/* "PLOT" */,-54 , 14/* "RANGE" */,-54 , 21/* "LOCATE" */,-54 , 15/* "LINE" */,-54 , 16/* "CLS" */,-54 , 17/* "MCL" */,-54 , 23/* "{" */,-54 , 19/* "INT" */,-54 , 20/* "INTG" */,-54 , 50/* "Integer" */,-54 , 51/* "Float" */,-54 , 48/* "Identifier" */,-54 , 47/* "Letter" */,-54 , 44/* "(" */,-54 , 18/* "RAN" */,-54 , 22/* "," */,-54 , 45/* ")" */,-54 , 26/* "]" */,-54 ),
	/* State 77 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 78 */ new Array( 3/* "ELSE" */,110 , 61/* "$" */,-5 , 2/* "IF" */,-5 , 4/* "WHILE" */,-5 , 5/* "DO" */,-5 , 6/* "SAY" */,-5 , 49/* "String" */,-5 , 31/* "?" */,-5 , 7/* "WRITE" */,-5 , 11/* "LBL" */,-5 , 12/* "GOTO" */,-5 , 8/* "READ" */,-5 , 9/* "ISZ" */,-5 , 10/* "DSZ" */,-5 , 13/* "PLOT" */,-5 , 14/* "RANGE" */,-5 , 21/* "LOCATE" */,-5 , 15/* "LINE" */,-5 , 16/* "CLS" */,-5 , 17/* "MCL" */,-5 , 23/* "{" */,-5 , 28/* ":" */,-5 , 41/* "-" */,-5 , 19/* "INT" */,-5 , 20/* "INTG" */,-5 , 50/* "Integer" */,-5 , 51/* "Float" */,-5 , 48/* "Identifier" */,-5 , 47/* "Letter" */,-5 , 44/* "(" */,-5 , 18/* "RAN" */,-5 , 24/* "}" */,-5 ),
	/* State 79 */ new Array( 40/* "+" */,68 , 41/* "-" */,69 , 32/* "=>" */,-37 , 28/* ":" */,-37 , 30/* "->" */,-37 , 29/* "=" */,-37 , 39/* "<" */,-37 , 38/* ">" */,-37 , 36/* "<=" */,-37 , 37/* ">=" */,-37 , 34/* "!=" */,-37 , 35/* "<>" */,-37 , 2/* "IF" */,-37 , 4/* "WHILE" */,-37 , 5/* "DO" */,-37 , 6/* "SAY" */,-37 , 49/* "String" */,-37 , 31/* "?" */,-37 , 7/* "WRITE" */,-37 , 11/* "LBL" */,-37 , 12/* "GOTO" */,-37 , 8/* "READ" */,-37 , 9/* "ISZ" */,-37 , 10/* "DSZ" */,-37 , 13/* "PLOT" */,-37 , 14/* "RANGE" */,-37 , 21/* "LOCATE" */,-37 , 15/* "LINE" */,-37 , 16/* "CLS" */,-37 , 17/* "MCL" */,-37 , 23/* "{" */,-37 , 19/* "INT" */,-37 , 20/* "INTG" */,-37 , 50/* "Integer" */,-37 , 51/* "Float" */,-37 , 48/* "Identifier" */,-37 , 47/* "Letter" */,-37 , 44/* "(" */,-37 , 18/* "RAN" */,-37 , 22/* "," */,-37 , 45/* ")" */,-37 , 26/* "]" */,-37 ),
	/* State 80 */ new Array( 40/* "+" */,68 , 41/* "-" */,69 , 32/* "=>" */,-36 , 28/* ":" */,-36 , 30/* "->" */,-36 , 29/* "=" */,-36 , 39/* "<" */,-36 , 38/* ">" */,-36 , 36/* "<=" */,-36 , 37/* ">=" */,-36 , 34/* "!=" */,-36 , 35/* "<>" */,-36 , 2/* "IF" */,-36 , 4/* "WHILE" */,-36 , 5/* "DO" */,-36 , 6/* "SAY" */,-36 , 49/* "String" */,-36 , 31/* "?" */,-36 , 7/* "WRITE" */,-36 , 11/* "LBL" */,-36 , 12/* "GOTO" */,-36 , 8/* "READ" */,-36 , 9/* "ISZ" */,-36 , 10/* "DSZ" */,-36 , 13/* "PLOT" */,-36 , 14/* "RANGE" */,-36 , 21/* "LOCATE" */,-36 , 15/* "LINE" */,-36 , 16/* "CLS" */,-36 , 17/* "MCL" */,-36 , 23/* "{" */,-36 , 19/* "INT" */,-36 , 20/* "INTG" */,-36 , 50/* "Integer" */,-36 , 51/* "Float" */,-36 , 48/* "Identifier" */,-36 , 47/* "Letter" */,-36 , 44/* "(" */,-36 , 18/* "RAN" */,-36 , 22/* "," */,-36 , 45/* ")" */,-36 , 26/* "]" */,-36 ),
	/* State 81 */ new Array( 40/* "+" */,68 , 41/* "-" */,69 , 32/* "=>" */,-35 , 28/* ":" */,-35 , 30/* "->" */,-35 , 29/* "=" */,-35 , 39/* "<" */,-35 , 38/* ">" */,-35 , 36/* "<=" */,-35 , 37/* ">=" */,-35 , 34/* "!=" */,-35 , 35/* "<>" */,-35 , 2/* "IF" */,-35 , 4/* "WHILE" */,-35 , 5/* "DO" */,-35 , 6/* "SAY" */,-35 , 49/* "String" */,-35 , 31/* "?" */,-35 , 7/* "WRITE" */,-35 , 11/* "LBL" */,-35 , 12/* "GOTO" */,-35 , 8/* "READ" */,-35 , 9/* "ISZ" */,-35 , 10/* "DSZ" */,-35 , 13/* "PLOT" */,-35 , 14/* "RANGE" */,-35 , 21/* "LOCATE" */,-35 , 15/* "LINE" */,-35 , 16/* "CLS" */,-35 , 17/* "MCL" */,-35 , 23/* "{" */,-35 , 19/* "INT" */,-35 , 20/* "INTG" */,-35 , 50/* "Integer" */,-35 , 51/* "Float" */,-35 , 48/* "Identifier" */,-35 , 47/* "Letter" */,-35 , 44/* "(" */,-35 , 18/* "RAN" */,-35 , 22/* "," */,-35 , 45/* ")" */,-35 , 26/* "]" */,-35 ),
	/* State 82 */ new Array( 40/* "+" */,68 , 41/* "-" */,69 , 32/* "=>" */,-34 , 28/* ":" */,-34 , 30/* "->" */,-34 , 29/* "=" */,-34 , 39/* "<" */,-34 , 38/* ">" */,-34 , 36/* "<=" */,-34 , 37/* ">=" */,-34 , 34/* "!=" */,-34 , 35/* "<>" */,-34 , 2/* "IF" */,-34 , 4/* "WHILE" */,-34 , 5/* "DO" */,-34 , 6/* "SAY" */,-34 , 49/* "String" */,-34 , 31/* "?" */,-34 , 7/* "WRITE" */,-34 , 11/* "LBL" */,-34 , 12/* "GOTO" */,-34 , 8/* "READ" */,-34 , 9/* "ISZ" */,-34 , 10/* "DSZ" */,-34 , 13/* "PLOT" */,-34 , 14/* "RANGE" */,-34 , 21/* "LOCATE" */,-34 , 15/* "LINE" */,-34 , 16/* "CLS" */,-34 , 17/* "MCL" */,-34 , 23/* "{" */,-34 , 19/* "INT" */,-34 , 20/* "INTG" */,-34 , 50/* "Integer" */,-34 , 51/* "Float" */,-34 , 48/* "Identifier" */,-34 , 47/* "Letter" */,-34 , 44/* "(" */,-34 , 18/* "RAN" */,-34 , 22/* "," */,-34 , 45/* ")" */,-34 , 26/* "]" */,-34 ),
	/* State 83 */ new Array( 40/* "+" */,68 , 41/* "-" */,69 , 32/* "=>" */,-33 , 28/* ":" */,-33 , 30/* "->" */,-33 , 29/* "=" */,-33 , 39/* "<" */,-33 , 38/* ">" */,-33 , 36/* "<=" */,-33 , 37/* ">=" */,-33 , 34/* "!=" */,-33 , 35/* "<>" */,-33 , 2/* "IF" */,-33 , 4/* "WHILE" */,-33 , 5/* "DO" */,-33 , 6/* "SAY" */,-33 , 49/* "String" */,-33 , 31/* "?" */,-33 , 7/* "WRITE" */,-33 , 11/* "LBL" */,-33 , 12/* "GOTO" */,-33 , 8/* "READ" */,-33 , 9/* "ISZ" */,-33 , 10/* "DSZ" */,-33 , 13/* "PLOT" */,-33 , 14/* "RANGE" */,-33 , 21/* "LOCATE" */,-33 , 15/* "LINE" */,-33 , 16/* "CLS" */,-33 , 17/* "MCL" */,-33 , 23/* "{" */,-33 , 19/* "INT" */,-33 , 20/* "INTG" */,-33 , 50/* "Integer" */,-33 , 51/* "Float" */,-33 , 48/* "Identifier" */,-33 , 47/* "Letter" */,-33 , 44/* "(" */,-33 , 18/* "RAN" */,-33 , 22/* "," */,-33 , 45/* ")" */,-33 , 26/* "]" */,-33 ),
	/* State 84 */ new Array( 40/* "+" */,68 , 41/* "-" */,69 , 32/* "=>" */,-32 , 28/* ":" */,-32 , 30/* "->" */,-32 , 29/* "=" */,-32 , 39/* "<" */,-32 , 38/* ">" */,-32 , 36/* "<=" */,-32 , 37/* ">=" */,-32 , 34/* "!=" */,-32 , 35/* "<>" */,-32 , 2/* "IF" */,-32 , 4/* "WHILE" */,-32 , 5/* "DO" */,-32 , 6/* "SAY" */,-32 , 49/* "String" */,-32 , 31/* "?" */,-32 , 7/* "WRITE" */,-32 , 11/* "LBL" */,-32 , 12/* "GOTO" */,-32 , 8/* "READ" */,-32 , 9/* "ISZ" */,-32 , 10/* "DSZ" */,-32 , 13/* "PLOT" */,-32 , 14/* "RANGE" */,-32 , 21/* "LOCATE" */,-32 , 15/* "LINE" */,-32 , 16/* "CLS" */,-32 , 17/* "MCL" */,-32 , 23/* "{" */,-32 , 19/* "INT" */,-32 , 20/* "INTG" */,-32 , 50/* "Integer" */,-32 , 51/* "Float" */,-32 , 48/* "Identifier" */,-32 , 47/* "Letter" */,-32 , 44/* "(" */,-32 , 18/* "RAN" */,-32 , 22/* "," */,-32 , 45/* ")" */,-32 , 26/* "]" */,-32 ),
	/* State 85 */ new Array( 40/* "+" */,68 , 41/* "-" */,69 , 32/* "=>" */,-31 , 28/* ":" */,-31 , 30/* "->" */,-31 , 29/* "=" */,-31 , 39/* "<" */,-31 , 38/* ">" */,-31 , 36/* "<=" */,-31 , 37/* ">=" */,-31 , 34/* "!=" */,-31 , 35/* "<>" */,-31 , 2/* "IF" */,-31 , 4/* "WHILE" */,-31 , 5/* "DO" */,-31 , 6/* "SAY" */,-31 , 49/* "String" */,-31 , 31/* "?" */,-31 , 7/* "WRITE" */,-31 , 11/* "LBL" */,-31 , 12/* "GOTO" */,-31 , 8/* "READ" */,-31 , 9/* "ISZ" */,-31 , 10/* "DSZ" */,-31 , 13/* "PLOT" */,-31 , 14/* "RANGE" */,-31 , 21/* "LOCATE" */,-31 , 15/* "LINE" */,-31 , 16/* "CLS" */,-31 , 17/* "MCL" */,-31 , 23/* "{" */,-31 , 19/* "INT" */,-31 , 20/* "INTG" */,-31 , 50/* "Integer" */,-31 , 51/* "Float" */,-31 , 48/* "Identifier" */,-31 , 47/* "Letter" */,-31 , 44/* "(" */,-31 , 18/* "RAN" */,-31 , 22/* "," */,-31 , 45/* ")" */,-31 , 26/* "]" */,-31 ),
	/* State 86 */ new Array( 28/* ":" */,111 ),
	/* State 87 */ new Array( 61/* "$" */,-6 , 2/* "IF" */,-6 , 4/* "WHILE" */,-6 , 5/* "DO" */,-6 , 6/* "SAY" */,-6 , 49/* "String" */,-6 , 31/* "?" */,-6 , 7/* "WRITE" */,-6 , 11/* "LBL" */,-6 , 12/* "GOTO" */,-6 , 8/* "READ" */,-6 , 9/* "ISZ" */,-6 , 10/* "DSZ" */,-6 , 13/* "PLOT" */,-6 , 14/* "RANGE" */,-6 , 21/* "LOCATE" */,-6 , 15/* "LINE" */,-6 , 16/* "CLS" */,-6 , 17/* "MCL" */,-6 , 23/* "{" */,-6 , 28/* ":" */,-6 , 41/* "-" */,-6 , 19/* "INT" */,-6 , 20/* "INTG" */,-6 , 50/* "Integer" */,-6 , 51/* "Float" */,-6 , 48/* "Identifier" */,-6 , 47/* "Letter" */,-6 , 44/* "(" */,-6 , 18/* "RAN" */,-6 , 3/* "ELSE" */,-6 , 24/* "}" */,-6 ),
	/* State 88 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 49/* "String" */,8 , 31/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 21/* "LOCATE" */,18 , 15/* "LINE" */,19 , 16/* "CLS" */,20 , 17/* "MCL" */,21 , 23/* "{" */,22 , 28/* ":" */,23 , 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 89 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 90 */ new Array( 61/* "$" */,-10 , 2/* "IF" */,-10 , 4/* "WHILE" */,-10 , 5/* "DO" */,-10 , 6/* "SAY" */,-10 , 49/* "String" */,-10 , 31/* "?" */,-10 , 7/* "WRITE" */,-10 , 11/* "LBL" */,-10 , 12/* "GOTO" */,-10 , 8/* "READ" */,-10 , 9/* "ISZ" */,-10 , 10/* "DSZ" */,-10 , 13/* "PLOT" */,-10 , 14/* "RANGE" */,-10 , 21/* "LOCATE" */,-10 , 15/* "LINE" */,-10 , 16/* "CLS" */,-10 , 17/* "MCL" */,-10 , 23/* "{" */,-10 , 28/* ":" */,-10 , 41/* "-" */,-10 , 19/* "INT" */,-10 , 20/* "INTG" */,-10 , 50/* "Integer" */,-10 , 51/* "Float" */,-10 , 48/* "Identifier" */,-10 , 47/* "Letter" */,-10 , 44/* "(" */,-10 , 18/* "RAN" */,-10 , 3/* "ELSE" */,-10 , 24/* "}" */,-10 ),
	/* State 91 */ new Array( 47/* "Letter" */,37 ),
	/* State 92 */ new Array( 28/* ":" */,115 ),
	/* State 93 */ new Array( 61/* "$" */,-14 , 2/* "IF" */,-14 , 4/* "WHILE" */,-14 , 5/* "DO" */,-14 , 6/* "SAY" */,-14 , 49/* "String" */,-14 , 31/* "?" */,-14 , 7/* "WRITE" */,-14 , 11/* "LBL" */,-14 , 12/* "GOTO" */,-14 , 8/* "READ" */,-14 , 9/* "ISZ" */,-14 , 10/* "DSZ" */,-14 , 13/* "PLOT" */,-14 , 14/* "RANGE" */,-14 , 21/* "LOCATE" */,-14 , 15/* "LINE" */,-14 , 16/* "CLS" */,-14 , 17/* "MCL" */,-14 , 23/* "{" */,-14 , 28/* ":" */,-14 , 41/* "-" */,-14 , 19/* "INT" */,-14 , 20/* "INTG" */,-14 , 50/* "Integer" */,-14 , 51/* "Float" */,-14 , 48/* "Identifier" */,-14 , 47/* "Letter" */,-14 , 44/* "(" */,-14 , 18/* "RAN" */,-14 , 3/* "ELSE" */,-14 , 24/* "}" */,-14 ),
	/* State 94 */ new Array( 61/* "$" */,-16 , 2/* "IF" */,-16 , 4/* "WHILE" */,-16 , 5/* "DO" */,-16 , 6/* "SAY" */,-16 , 49/* "String" */,-16 , 31/* "?" */,-16 , 7/* "WRITE" */,-16 , 11/* "LBL" */,-16 , 12/* "GOTO" */,-16 , 8/* "READ" */,-16 , 9/* "ISZ" */,-16 , 10/* "DSZ" */,-16 , 13/* "PLOT" */,-16 , 14/* "RANGE" */,-16 , 21/* "LOCATE" */,-16 , 15/* "LINE" */,-16 , 16/* "CLS" */,-16 , 17/* "MCL" */,-16 , 23/* "{" */,-16 , 28/* ":" */,-16 , 41/* "-" */,-16 , 19/* "INT" */,-16 , 20/* "INTG" */,-16 , 50/* "Integer" */,-16 , 51/* "Float" */,-16 , 48/* "Identifier" */,-16 , 47/* "Letter" */,-16 , 44/* "(" */,-16 , 18/* "RAN" */,-16 , 3/* "ELSE" */,-16 , 24/* "}" */,-16 ),
	/* State 95 */ new Array( 61/* "$" */,-17 , 2/* "IF" */,-17 , 4/* "WHILE" */,-17 , 5/* "DO" */,-17 , 6/* "SAY" */,-17 , 49/* "String" */,-17 , 31/* "?" */,-17 , 7/* "WRITE" */,-17 , 11/* "LBL" */,-17 , 12/* "GOTO" */,-17 , 8/* "READ" */,-17 , 9/* "ISZ" */,-17 , 10/* "DSZ" */,-17 , 13/* "PLOT" */,-17 , 14/* "RANGE" */,-17 , 21/* "LOCATE" */,-17 , 15/* "LINE" */,-17 , 16/* "CLS" */,-17 , 17/* "MCL" */,-17 , 23/* "{" */,-17 , 28/* ":" */,-17 , 41/* "-" */,-17 , 19/* "INT" */,-17 , 20/* "INTG" */,-17 , 50/* "Integer" */,-17 , 51/* "Float" */,-17 , 48/* "Identifier" */,-17 , 47/* "Letter" */,-17 , 44/* "(" */,-17 , 18/* "RAN" */,-17 , 3/* "ELSE" */,-17 , 24/* "}" */,-17 ),
	/* State 96 */ new Array( 61/* "$" */,-18 , 2/* "IF" */,-18 , 4/* "WHILE" */,-18 , 5/* "DO" */,-18 , 6/* "SAY" */,-18 , 49/* "String" */,-18 , 31/* "?" */,-18 , 7/* "WRITE" */,-18 , 11/* "LBL" */,-18 , 12/* "GOTO" */,-18 , 8/* "READ" */,-18 , 9/* "ISZ" */,-18 , 10/* "DSZ" */,-18 , 13/* "PLOT" */,-18 , 14/* "RANGE" */,-18 , 21/* "LOCATE" */,-18 , 15/* "LINE" */,-18 , 16/* "CLS" */,-18 , 17/* "MCL" */,-18 , 23/* "{" */,-18 , 28/* ":" */,-18 , 41/* "-" */,-18 , 19/* "INT" */,-18 , 20/* "INTG" */,-18 , 50/* "Integer" */,-18 , 51/* "Float" */,-18 , 48/* "Identifier" */,-18 , 47/* "Letter" */,-18 , 44/* "(" */,-18 , 18/* "RAN" */,-18 , 3/* "ELSE" */,-18 , 24/* "}" */,-18 ),
	/* State 97 */ new Array( 61/* "$" */,-20 , 2/* "IF" */,-20 , 4/* "WHILE" */,-20 , 5/* "DO" */,-20 , 6/* "SAY" */,-20 , 49/* "String" */,-20 , 31/* "?" */,-20 , 7/* "WRITE" */,-20 , 11/* "LBL" */,-20 , 12/* "GOTO" */,-20 , 8/* "READ" */,-20 , 9/* "ISZ" */,-20 , 10/* "DSZ" */,-20 , 13/* "PLOT" */,-20 , 14/* "RANGE" */,-20 , 21/* "LOCATE" */,-20 , 15/* "LINE" */,-20 , 16/* "CLS" */,-20 , 17/* "MCL" */,-20 , 23/* "{" */,-20 , 28/* ":" */,-20 , 41/* "-" */,-20 , 19/* "INT" */,-20 , 20/* "INTG" */,-20 , 50/* "Integer" */,-20 , 51/* "Float" */,-20 , 48/* "Identifier" */,-20 , 47/* "Letter" */,-20 , 44/* "(" */,-20 , 18/* "RAN" */,-20 , 3/* "ELSE" */,-20 , 24/* "}" */,-20 ),
	/* State 98 */ new Array( 61/* "$" */,-21 , 2/* "IF" */,-21 , 4/* "WHILE" */,-21 , 5/* "DO" */,-21 , 6/* "SAY" */,-21 , 49/* "String" */,-21 , 31/* "?" */,-21 , 7/* "WRITE" */,-21 , 11/* "LBL" */,-21 , 12/* "GOTO" */,-21 , 8/* "READ" */,-21 , 9/* "ISZ" */,-21 , 10/* "DSZ" */,-21 , 13/* "PLOT" */,-21 , 14/* "RANGE" */,-21 , 21/* "LOCATE" */,-21 , 15/* "LINE" */,-21 , 16/* "CLS" */,-21 , 17/* "MCL" */,-21 , 23/* "{" */,-21 , 28/* ":" */,-21 , 41/* "-" */,-21 , 19/* "INT" */,-21 , 20/* "INTG" */,-21 , 50/* "Integer" */,-21 , 51/* "Float" */,-21 , 48/* "Identifier" */,-21 , 47/* "Letter" */,-21 , 44/* "(" */,-21 , 18/* "RAN" */,-21 , 3/* "ELSE" */,-21 , 24/* "}" */,-21 ),
	/* State 99 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 100 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 101 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 102 */ new Array( 24/* "}" */,-3 , 2/* "IF" */,-3 , 4/* "WHILE" */,-3 , 5/* "DO" */,-3 , 6/* "SAY" */,-3 , 49/* "String" */,-3 , 31/* "?" */,-3 , 7/* "WRITE" */,-3 , 11/* "LBL" */,-3 , 12/* "GOTO" */,-3 , 8/* "READ" */,-3 , 9/* "ISZ" */,-3 , 10/* "DSZ" */,-3 , 13/* "PLOT" */,-3 , 14/* "RANGE" */,-3 , 21/* "LOCATE" */,-3 , 15/* "LINE" */,-3 , 16/* "CLS" */,-3 , 17/* "MCL" */,-3 , 23/* "{" */,-3 , 28/* ":" */,-3 , 41/* "-" */,-3 , 19/* "INT" */,-3 , 20/* "INTG" */,-3 , 50/* "Integer" */,-3 , 51/* "Float" */,-3 , 48/* "Identifier" */,-3 , 47/* "Letter" */,-3 , 44/* "(" */,-3 , 18/* "RAN" */,-3 ),
	/* State 103 */ new Array( 61/* "$" */,-29 , 2/* "IF" */,-29 , 4/* "WHILE" */,-29 , 5/* "DO" */,-29 , 6/* "SAY" */,-29 , 49/* "String" */,-29 , 31/* "?" */,-29 , 7/* "WRITE" */,-29 , 11/* "LBL" */,-29 , 12/* "GOTO" */,-29 , 8/* "READ" */,-29 , 9/* "ISZ" */,-29 , 10/* "DSZ" */,-29 , 13/* "PLOT" */,-29 , 14/* "RANGE" */,-29 , 21/* "LOCATE" */,-29 , 15/* "LINE" */,-29 , 16/* "CLS" */,-29 , 17/* "MCL" */,-29 , 23/* "{" */,-29 , 28/* ":" */,-29 , 41/* "-" */,-29 , 19/* "INT" */,-29 , 20/* "INTG" */,-29 , 50/* "Integer" */,-29 , 51/* "Float" */,-29 , 48/* "Identifier" */,-29 , 47/* "Letter" */,-29 , 44/* "(" */,-29 , 18/* "RAN" */,-29 , 3/* "ELSE" */,-29 , 24/* "}" */,-29 ),
	/* State 104 */ new Array( 42/* "/" */,70 , 43/* "*" */,71 , 32/* "=>" */,-40 , 28/* ":" */,-40 , 30/* "->" */,-40 , 29/* "=" */,-40 , 39/* "<" */,-40 , 38/* ">" */,-40 , 36/* "<=" */,-40 , 37/* ">=" */,-40 , 34/* "!=" */,-40 , 35/* "<>" */,-40 , 41/* "-" */,-40 , 40/* "+" */,-40 , 2/* "IF" */,-40 , 4/* "WHILE" */,-40 , 5/* "DO" */,-40 , 6/* "SAY" */,-40 , 49/* "String" */,-40 , 31/* "?" */,-40 , 7/* "WRITE" */,-40 , 11/* "LBL" */,-40 , 12/* "GOTO" */,-40 , 8/* "READ" */,-40 , 9/* "ISZ" */,-40 , 10/* "DSZ" */,-40 , 13/* "PLOT" */,-40 , 14/* "RANGE" */,-40 , 21/* "LOCATE" */,-40 , 15/* "LINE" */,-40 , 16/* "CLS" */,-40 , 17/* "MCL" */,-40 , 23/* "{" */,-40 , 19/* "INT" */,-40 , 20/* "INTG" */,-40 , 50/* "Integer" */,-40 , 51/* "Float" */,-40 , 48/* "Identifier" */,-40 , 47/* "Letter" */,-40 , 44/* "(" */,-40 , 18/* "RAN" */,-40 , 22/* "," */,-40 , 45/* ")" */,-40 , 26/* "]" */,-40 ),
	/* State 105 */ new Array( 42/* "/" */,70 , 43/* "*" */,71 , 32/* "=>" */,-39 , 28/* ":" */,-39 , 30/* "->" */,-39 , 29/* "=" */,-39 , 39/* "<" */,-39 , 38/* ">" */,-39 , 36/* "<=" */,-39 , 37/* ">=" */,-39 , 34/* "!=" */,-39 , 35/* "<>" */,-39 , 41/* "-" */,-39 , 40/* "+" */,-39 , 2/* "IF" */,-39 , 4/* "WHILE" */,-39 , 5/* "DO" */,-39 , 6/* "SAY" */,-39 , 49/* "String" */,-39 , 31/* "?" */,-39 , 7/* "WRITE" */,-39 , 11/* "LBL" */,-39 , 12/* "GOTO" */,-39 , 8/* "READ" */,-39 , 9/* "ISZ" */,-39 , 10/* "DSZ" */,-39 , 13/* "PLOT" */,-39 , 14/* "RANGE" */,-39 , 21/* "LOCATE" */,-39 , 15/* "LINE" */,-39 , 16/* "CLS" */,-39 , 17/* "MCL" */,-39 , 23/* "{" */,-39 , 19/* "INT" */,-39 , 20/* "INTG" */,-39 , 50/* "Integer" */,-39 , 51/* "Float" */,-39 , 48/* "Identifier" */,-39 , 47/* "Letter" */,-39 , 44/* "(" */,-39 , 18/* "RAN" */,-39 , 22/* "," */,-39 , 45/* ")" */,-39 , 26/* "]" */,-39 ),
	/* State 106 */ new Array( 32/* "=>" */,-43 , 28/* ":" */,-43 , 30/* "->" */,-43 , 29/* "=" */,-43 , 39/* "<" */,-43 , 38/* ">" */,-43 , 36/* "<=" */,-43 , 37/* ">=" */,-43 , 34/* "!=" */,-43 , 35/* "<>" */,-43 , 41/* "-" */,-43 , 40/* "+" */,-43 , 43/* "*" */,-43 , 42/* "/" */,-43 , 2/* "IF" */,-43 , 4/* "WHILE" */,-43 , 5/* "DO" */,-43 , 6/* "SAY" */,-43 , 49/* "String" */,-43 , 31/* "?" */,-43 , 7/* "WRITE" */,-43 , 11/* "LBL" */,-43 , 12/* "GOTO" */,-43 , 8/* "READ" */,-43 , 9/* "ISZ" */,-43 , 10/* "DSZ" */,-43 , 13/* "PLOT" */,-43 , 14/* "RANGE" */,-43 , 21/* "LOCATE" */,-43 , 15/* "LINE" */,-43 , 16/* "CLS" */,-43 , 17/* "MCL" */,-43 , 23/* "{" */,-43 , 19/* "INT" */,-43 , 20/* "INTG" */,-43 , 50/* "Integer" */,-43 , 51/* "Float" */,-43 , 48/* "Identifier" */,-43 , 47/* "Letter" */,-43 , 44/* "(" */,-43 , 18/* "RAN" */,-43 , 22/* "," */,-43 , 45/* ")" */,-43 , 26/* "]" */,-43 ),
	/* State 107 */ new Array( 32/* "=>" */,-42 , 28/* ":" */,-42 , 30/* "->" */,-42 , 29/* "=" */,-42 , 39/* "<" */,-42 , 38/* ">" */,-42 , 36/* "<=" */,-42 , 37/* ">=" */,-42 , 34/* "!=" */,-42 , 35/* "<>" */,-42 , 41/* "-" */,-42 , 40/* "+" */,-42 , 43/* "*" */,-42 , 42/* "/" */,-42 , 2/* "IF" */,-42 , 4/* "WHILE" */,-42 , 5/* "DO" */,-42 , 6/* "SAY" */,-42 , 49/* "String" */,-42 , 31/* "?" */,-42 , 7/* "WRITE" */,-42 , 11/* "LBL" */,-42 , 12/* "GOTO" */,-42 , 8/* "READ" */,-42 , 9/* "ISZ" */,-42 , 10/* "DSZ" */,-42 , 13/* "PLOT" */,-42 , 14/* "RANGE" */,-42 , 21/* "LOCATE" */,-42 , 15/* "LINE" */,-42 , 16/* "CLS" */,-42 , 17/* "MCL" */,-42 , 23/* "{" */,-42 , 19/* "INT" */,-42 , 20/* "INTG" */,-42 , 50/* "Integer" */,-42 , 51/* "Float" */,-42 , 48/* "Identifier" */,-42 , 47/* "Letter" */,-42 , 44/* "(" */,-42 , 18/* "RAN" */,-42 , 22/* "," */,-42 , 45/* ")" */,-42 , 26/* "]" */,-42 ),
	/* State 108 */ new Array( 32/* "=>" */,-53 , 28/* ":" */,-53 , 30/* "->" */,-53 , 29/* "=" */,-53 , 39/* "<" */,-53 , 38/* ">" */,-53 , 36/* "<=" */,-53 , 37/* ">=" */,-53 , 34/* "!=" */,-53 , 35/* "<>" */,-53 , 41/* "-" */,-53 , 40/* "+" */,-53 , 43/* "*" */,-53 , 42/* "/" */,-53 , 2/* "IF" */,-53 , 4/* "WHILE" */,-53 , 5/* "DO" */,-53 , 6/* "SAY" */,-53 , 49/* "String" */,-53 , 31/* "?" */,-53 , 7/* "WRITE" */,-53 , 11/* "LBL" */,-53 , 12/* "GOTO" */,-53 , 8/* "READ" */,-53 , 9/* "ISZ" */,-53 , 10/* "DSZ" */,-53 , 13/* "PLOT" */,-53 , 14/* "RANGE" */,-53 , 21/* "LOCATE" */,-53 , 15/* "LINE" */,-53 , 16/* "CLS" */,-53 , 17/* "MCL" */,-53 , 23/* "{" */,-53 , 19/* "INT" */,-53 , 20/* "INTG" */,-53 , 50/* "Integer" */,-53 , 51/* "Float" */,-53 , 48/* "Identifier" */,-53 , 47/* "Letter" */,-53 , 44/* "(" */,-53 , 18/* "RAN" */,-53 , 22/* "," */,-53 , 45/* ")" */,-53 , 26/* "]" */,-53 ),
	/* State 109 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 26/* "]" */,119 ),
	/* State 110 */ new Array( 2/* "IF" */,3 , 4/* "WHILE" */,5 , 5/* "DO" */,6 , 6/* "SAY" */,7 , 49/* "String" */,8 , 31/* "?" */,9 , 7/* "WRITE" */,10 , 11/* "LBL" */,11 , 12/* "GOTO" */,12 , 8/* "READ" */,13 , 9/* "ISZ" */,14 , 10/* "DSZ" */,15 , 13/* "PLOT" */,16 , 14/* "RANGE" */,17 , 21/* "LOCATE" */,18 , 15/* "LINE" */,19 , 16/* "CLS" */,20 , 17/* "MCL" */,21 , 23/* "{" */,22 , 28/* ":" */,23 , 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 111 */ new Array( 61/* "$" */,-19 , 2/* "IF" */,-19 , 4/* "WHILE" */,-19 , 5/* "DO" */,-19 , 6/* "SAY" */,-19 , 49/* "String" */,-19 , 31/* "?" */,-19 , 7/* "WRITE" */,-19 , 11/* "LBL" */,-19 , 12/* "GOTO" */,-19 , 8/* "READ" */,-19 , 9/* "ISZ" */,-19 , 10/* "DSZ" */,-19 , 13/* "PLOT" */,-19 , 14/* "RANGE" */,-19 , 21/* "LOCATE" */,-19 , 15/* "LINE" */,-19 , 16/* "CLS" */,-19 , 17/* "MCL" */,-19 , 23/* "{" */,-19 , 28/* ":" */,-19 , 41/* "-" */,-19 , 19/* "INT" */,-19 , 20/* "INTG" */,-19 , 50/* "Integer" */,-19 , 51/* "Float" */,-19 , 48/* "Identifier" */,-19 , 47/* "Letter" */,-19 , 44/* "(" */,-19 , 18/* "RAN" */,-19 , 3/* "ELSE" */,-19 , 24/* "}" */,-19 ),
	/* State 112 */ new Array( 61/* "$" */,-8 , 2/* "IF" */,-8 , 4/* "WHILE" */,-8 , 5/* "DO" */,-8 , 6/* "SAY" */,-8 , 49/* "String" */,-8 , 31/* "?" */,-8 , 7/* "WRITE" */,-8 , 11/* "LBL" */,-8 , 12/* "GOTO" */,-8 , 8/* "READ" */,-8 , 9/* "ISZ" */,-8 , 10/* "DSZ" */,-8 , 13/* "PLOT" */,-8 , 14/* "RANGE" */,-8 , 21/* "LOCATE" */,-8 , 15/* "LINE" */,-8 , 16/* "CLS" */,-8 , 17/* "MCL" */,-8 , 23/* "{" */,-8 , 28/* ":" */,-8 , 41/* "-" */,-8 , 19/* "INT" */,-8 , 20/* "INTG" */,-8 , 50/* "Integer" */,-8 , 51/* "Float" */,-8 , 48/* "Identifier" */,-8 , 47/* "Letter" */,-8 , 44/* "(" */,-8 , 18/* "RAN" */,-8 , 3/* "ELSE" */,-8 , 24/* "}" */,-8 ),
	/* State 113 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 28/* ":" */,121 ),
	/* State 114 */ new Array( 28/* ":" */,122 ),
	/* State 115 */ new Array( 61/* "$" */,-13 , 2/* "IF" */,-13 , 4/* "WHILE" */,-13 , 5/* "DO" */,-13 , 6/* "SAY" */,-13 , 49/* "String" */,-13 , 31/* "?" */,-13 , 7/* "WRITE" */,-13 , 11/* "LBL" */,-13 , 12/* "GOTO" */,-13 , 8/* "READ" */,-13 , 9/* "ISZ" */,-13 , 10/* "DSZ" */,-13 , 13/* "PLOT" */,-13 , 14/* "RANGE" */,-13 , 21/* "LOCATE" */,-13 , 15/* "LINE" */,-13 , 16/* "CLS" */,-13 , 17/* "MCL" */,-13 , 23/* "{" */,-13 , 28/* ":" */,-13 , 41/* "-" */,-13 , 19/* "INT" */,-13 , 20/* "INTG" */,-13 , 50/* "Integer" */,-13 , 51/* "Float" */,-13 , 48/* "Identifier" */,-13 , 47/* "Letter" */,-13 , 44/* "(" */,-13 , 18/* "RAN" */,-13 , 3/* "ELSE" */,-13 , 24/* "}" */,-13 ),
	/* State 116 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 28/* ":" */,123 ),
	/* State 117 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 22/* "," */,124 ),
	/* State 118 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 22/* "," */,125 ),
	/* State 119 */ new Array( 32/* "=>" */,-55 , 28/* ":" */,-55 , 30/* "->" */,-55 , 29/* "=" */,-55 , 39/* "<" */,-55 , 38/* ">" */,-55 , 36/* "<=" */,-55 , 37/* ">=" */,-55 , 34/* "!=" */,-55 , 35/* "<>" */,-55 , 41/* "-" */,-55 , 40/* "+" */,-55 , 43/* "*" */,-55 , 42/* "/" */,-55 , 2/* "IF" */,-55 , 4/* "WHILE" */,-55 , 5/* "DO" */,-55 , 6/* "SAY" */,-55 , 49/* "String" */,-55 , 31/* "?" */,-55 , 7/* "WRITE" */,-55 , 11/* "LBL" */,-55 , 12/* "GOTO" */,-55 , 8/* "READ" */,-55 , 9/* "ISZ" */,-55 , 10/* "DSZ" */,-55 , 13/* "PLOT" */,-55 , 14/* "RANGE" */,-55 , 21/* "LOCATE" */,-55 , 15/* "LINE" */,-55 , 16/* "CLS" */,-55 , 17/* "MCL" */,-55 , 23/* "{" */,-55 , 19/* "INT" */,-55 , 20/* "INTG" */,-55 , 50/* "Integer" */,-55 , 51/* "Float" */,-55 , 48/* "Identifier" */,-55 , 47/* "Letter" */,-55 , 44/* "(" */,-55 , 18/* "RAN" */,-55 , 22/* "," */,-55 , 45/* ")" */,-55 , 26/* "]" */,-55 ),
	/* State 120 */ new Array( 61/* "$" */,-7 , 2/* "IF" */,-7 , 4/* "WHILE" */,-7 , 5/* "DO" */,-7 , 6/* "SAY" */,-7 , 49/* "String" */,-7 , 31/* "?" */,-7 , 7/* "WRITE" */,-7 , 11/* "LBL" */,-7 , 12/* "GOTO" */,-7 , 8/* "READ" */,-7 , 9/* "ISZ" */,-7 , 10/* "DSZ" */,-7 , 13/* "PLOT" */,-7 , 14/* "RANGE" */,-7 , 21/* "LOCATE" */,-7 , 15/* "LINE" */,-7 , 16/* "CLS" */,-7 , 17/* "MCL" */,-7 , 23/* "{" */,-7 , 28/* ":" */,-7 , 41/* "-" */,-7 , 19/* "INT" */,-7 , 20/* "INTG" */,-7 , 50/* "Integer" */,-7 , 51/* "Float" */,-7 , 48/* "Identifier" */,-7 , 47/* "Letter" */,-7 , 44/* "(" */,-7 , 18/* "RAN" */,-7 , 3/* "ELSE" */,-7 , 24/* "}" */,-7 ),
	/* State 121 */ new Array( 61/* "$" */,-9 , 2/* "IF" */,-9 , 4/* "WHILE" */,-9 , 5/* "DO" */,-9 , 6/* "SAY" */,-9 , 49/* "String" */,-9 , 31/* "?" */,-9 , 7/* "WRITE" */,-9 , 11/* "LBL" */,-9 , 12/* "GOTO" */,-9 , 8/* "READ" */,-9 , 9/* "ISZ" */,-9 , 10/* "DSZ" */,-9 , 13/* "PLOT" */,-9 , 14/* "RANGE" */,-9 , 21/* "LOCATE" */,-9 , 15/* "LINE" */,-9 , 16/* "CLS" */,-9 , 17/* "MCL" */,-9 , 23/* "{" */,-9 , 28/* ":" */,-9 , 41/* "-" */,-9 , 19/* "INT" */,-9 , 20/* "INTG" */,-9 , 50/* "Integer" */,-9 , 51/* "Float" */,-9 , 48/* "Identifier" */,-9 , 47/* "Letter" */,-9 , 44/* "(" */,-9 , 18/* "RAN" */,-9 , 3/* "ELSE" */,-9 , 24/* "}" */,-9 ),
	/* State 122 */ new Array( 61/* "$" */,-12 , 2/* "IF" */,-12 , 4/* "WHILE" */,-12 , 5/* "DO" */,-12 , 6/* "SAY" */,-12 , 49/* "String" */,-12 , 31/* "?" */,-12 , 7/* "WRITE" */,-12 , 11/* "LBL" */,-12 , 12/* "GOTO" */,-12 , 8/* "READ" */,-12 , 9/* "ISZ" */,-12 , 10/* "DSZ" */,-12 , 13/* "PLOT" */,-12 , 14/* "RANGE" */,-12 , 21/* "LOCATE" */,-12 , 15/* "LINE" */,-12 , 16/* "CLS" */,-12 , 17/* "MCL" */,-12 , 23/* "{" */,-12 , 28/* ":" */,-12 , 41/* "-" */,-12 , 19/* "INT" */,-12 , 20/* "INTG" */,-12 , 50/* "Integer" */,-12 , 51/* "Float" */,-12 , 48/* "Identifier" */,-12 , 47/* "Letter" */,-12 , 44/* "(" */,-12 , 18/* "RAN" */,-12 , 3/* "ELSE" */,-12 , 24/* "}" */,-12 ),
	/* State 123 */ new Array( 61/* "$" */,-22 , 2/* "IF" */,-22 , 4/* "WHILE" */,-22 , 5/* "DO" */,-22 , 6/* "SAY" */,-22 , 49/* "String" */,-22 , 31/* "?" */,-22 , 7/* "WRITE" */,-22 , 11/* "LBL" */,-22 , 12/* "GOTO" */,-22 , 8/* "READ" */,-22 , 9/* "ISZ" */,-22 , 10/* "DSZ" */,-22 , 13/* "PLOT" */,-22 , 14/* "RANGE" */,-22 , 21/* "LOCATE" */,-22 , 15/* "LINE" */,-22 , 16/* "CLS" */,-22 , 17/* "MCL" */,-22 , 23/* "{" */,-22 , 28/* ":" */,-22 , 41/* "-" */,-22 , 19/* "INT" */,-22 , 20/* "INTG" */,-22 , 50/* "Integer" */,-22 , 51/* "Float" */,-22 , 48/* "Identifier" */,-22 , 47/* "Letter" */,-22 , 44/* "(" */,-22 , 18/* "RAN" */,-22 , 3/* "ELSE" */,-22 , 24/* "}" */,-22 ),
	/* State 124 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 125 */ new Array( 49/* "String" */,127 , 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 126 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 22/* "," */,129 ),
	/* State 127 */ new Array( 28/* ":" */,130 ),
	/* State 128 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 28/* ":" */,131 ),
	/* State 129 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 130 */ new Array( 61/* "$" */,-25 , 2/* "IF" */,-25 , 4/* "WHILE" */,-25 , 5/* "DO" */,-25 , 6/* "SAY" */,-25 , 49/* "String" */,-25 , 31/* "?" */,-25 , 7/* "WRITE" */,-25 , 11/* "LBL" */,-25 , 12/* "GOTO" */,-25 , 8/* "READ" */,-25 , 9/* "ISZ" */,-25 , 10/* "DSZ" */,-25 , 13/* "PLOT" */,-25 , 14/* "RANGE" */,-25 , 21/* "LOCATE" */,-25 , 15/* "LINE" */,-25 , 16/* "CLS" */,-25 , 17/* "MCL" */,-25 , 23/* "{" */,-25 , 28/* ":" */,-25 , 41/* "-" */,-25 , 19/* "INT" */,-25 , 20/* "INTG" */,-25 , 50/* "Integer" */,-25 , 51/* "Float" */,-25 , 48/* "Identifier" */,-25 , 47/* "Letter" */,-25 , 44/* "(" */,-25 , 18/* "RAN" */,-25 , 3/* "ELSE" */,-25 , 24/* "}" */,-25 ),
	/* State 131 */ new Array( 61/* "$" */,-24 , 2/* "IF" */,-24 , 4/* "WHILE" */,-24 , 5/* "DO" */,-24 , 6/* "SAY" */,-24 , 49/* "String" */,-24 , 31/* "?" */,-24 , 7/* "WRITE" */,-24 , 11/* "LBL" */,-24 , 12/* "GOTO" */,-24 , 8/* "READ" */,-24 , 9/* "ISZ" */,-24 , 10/* "DSZ" */,-24 , 13/* "PLOT" */,-24 , 14/* "RANGE" */,-24 , 21/* "LOCATE" */,-24 , 15/* "LINE" */,-24 , 16/* "CLS" */,-24 , 17/* "MCL" */,-24 , 23/* "{" */,-24 , 28/* ":" */,-24 , 41/* "-" */,-24 , 19/* "INT" */,-24 , 20/* "INTG" */,-24 , 50/* "Integer" */,-24 , 51/* "Float" */,-24 , 48/* "Identifier" */,-24 , 47/* "Letter" */,-24 , 44/* "(" */,-24 , 18/* "RAN" */,-24 , 3/* "ELSE" */,-24 , 24/* "}" */,-24 ),
	/* State 132 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 22/* "," */,133 ),
	/* State 133 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 134 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 22/* "," */,135 ),
	/* State 135 */ new Array( 41/* "-" */,27 , 19/* "INT" */,29 , 20/* "INTG" */,30 , 50/* "Integer" */,31 , 51/* "Float" */,32 , 48/* "Identifier" */,33 , 44/* "(" */,35 , 18/* "RAN" */,36 , 47/* "Letter" */,37 ),
	/* State 136 */ new Array( 35/* "<>" */,39 , 34/* "!=" */,40 , 37/* ">=" */,41 , 36/* "<=" */,42 , 38/* ">" */,43 , 39/* "<" */,44 , 29/* "=" */,45 , 28/* ":" */,137 ),
	/* State 137 */ new Array( 61/* "$" */,-23 , 2/* "IF" */,-23 , 4/* "WHILE" */,-23 , 5/* "DO" */,-23 , 6/* "SAY" */,-23 , 49/* "String" */,-23 , 31/* "?" */,-23 , 7/* "WRITE" */,-23 , 11/* "LBL" */,-23 , 12/* "GOTO" */,-23 , 8/* "READ" */,-23 , 9/* "ISZ" */,-23 , 10/* "DSZ" */,-23 , 13/* "PLOT" */,-23 , 14/* "RANGE" */,-23 , 21/* "LOCATE" */,-23 , 15/* "LINE" */,-23 , 16/* "CLS" */,-23 , 17/* "MCL" */,-23 , 23/* "{" */,-23 , 28/* ":" */,-23 , 41/* "-" */,-23 , 19/* "INT" */,-23 , 20/* "INTG" */,-23 , 50/* "Integer" */,-23 , 51/* "Float" */,-23 , 48/* "Identifier" */,-23 , 47/* "Letter" */,-23 , 44/* "(" */,-23 , 18/* "RAN" */,-23 , 3/* "ELSE" */,-23 , 24/* "}" */,-23 )
);

/* Goto-Table */
var goto_tab = new Array(
	/* State 0 */ new Array( 52/* Program */,1 ),
	/* State 1 */ new Array( 53/* Stmt */,2 , 55/* Expression */,4 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 2 */ new Array(  ),
	/* State 3 */ new Array( 55/* Expression */,38 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 4 */ new Array(  ),
	/* State 5 */ new Array( 55/* Expression */,49 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 6 */ new Array( 53/* Stmt */,50 , 55/* Expression */,4 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 7 */ new Array(  ),
	/* State 8 */ new Array(  ),
	/* State 9 */ new Array(  ),
	/* State 10 */ new Array( 55/* Expression */,55 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 11 */ new Array(  ),
	/* State 12 */ new Array(  ),
	/* State 13 */ new Array(  ),
	/* State 14 */ new Array( 56/* VariableCasio */,59 ),
	/* State 15 */ new Array( 56/* VariableCasio */,60 ),
	/* State 16 */ new Array( 55/* Expression */,61 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 17 */ new Array( 55/* Expression */,62 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 18 */ new Array( 55/* Expression */,63 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 19 */ new Array(  ),
	/* State 20 */ new Array(  ),
	/* State 21 */ new Array(  ),
	/* State 22 */ new Array( 54/* Stmt_List */,67 ),
	/* State 23 */ new Array(  ),
	/* State 24 */ new Array(  ),
	/* State 25 */ new Array(  ),
	/* State 26 */ new Array(  ),
	/* State 27 */ new Array( 60/* Value */,72 , 56/* VariableCasio */,34 ),
	/* State 28 */ new Array(  ),
	/* State 29 */ new Array( 60/* Value */,73 , 56/* VariableCasio */,34 ),
	/* State 30 */ new Array( 60/* Value */,74 , 56/* VariableCasio */,34 ),
	/* State 31 */ new Array(  ),
	/* State 32 */ new Array(  ),
	/* State 33 */ new Array(  ),
	/* State 34 */ new Array(  ),
	/* State 35 */ new Array( 55/* Expression */,75 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 36 */ new Array(  ),
	/* State 37 */ new Array(  ),
	/* State 38 */ new Array( 53/* Stmt */,78 , 55/* Expression */,4 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 39 */ new Array( 57/* AddSubExp */,79 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 40 */ new Array( 57/* AddSubExp */,80 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 41 */ new Array( 57/* AddSubExp */,81 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 42 */ new Array( 57/* AddSubExp */,82 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 43 */ new Array( 57/* AddSubExp */,83 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 44 */ new Array( 57/* AddSubExp */,84 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 45 */ new Array( 57/* AddSubExp */,85 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 46 */ new Array( 56/* VariableCasio */,86 ),
	/* State 47 */ new Array(  ),
	/* State 48 */ new Array( 53/* Stmt */,87 , 55/* Expression */,4 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 49 */ new Array(  ),
	/* State 50 */ new Array(  ),
	/* State 51 */ new Array(  ),
	/* State 52 */ new Array(  ),
	/* State 53 */ new Array(  ),
	/* State 54 */ new Array( 56/* VariableCasio */,92 ),
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
	/* State 65 */ new Array(  ),
	/* State 66 */ new Array(  ),
	/* State 67 */ new Array( 53/* Stmt */,102 , 55/* Expression */,4 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 68 */ new Array( 58/* MulDivExp */,104 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 69 */ new Array( 58/* MulDivExp */,105 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 70 */ new Array( 59/* NegExp */,106 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 71 */ new Array( 59/* NegExp */,107 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 72 */ new Array(  ),
	/* State 73 */ new Array(  ),
	/* State 74 */ new Array(  ),
	/* State 75 */ new Array(  ),
	/* State 76 */ new Array(  ),
	/* State 77 */ new Array( 55/* Expression */,109 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 78 */ new Array(  ),
	/* State 79 */ new Array(  ),
	/* State 80 */ new Array(  ),
	/* State 81 */ new Array(  ),
	/* State 82 */ new Array(  ),
	/* State 83 */ new Array(  ),
	/* State 84 */ new Array(  ),
	/* State 85 */ new Array(  ),
	/* State 86 */ new Array(  ),
	/* State 87 */ new Array(  ),
	/* State 88 */ new Array( 53/* Stmt */,112 , 55/* Expression */,4 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 89 */ new Array( 55/* Expression */,113 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 90 */ new Array(  ),
	/* State 91 */ new Array( 56/* VariableCasio */,114 ),
	/* State 92 */ new Array(  ),
	/* State 93 */ new Array(  ),
	/* State 94 */ new Array(  ),
	/* State 95 */ new Array(  ),
	/* State 96 */ new Array(  ),
	/* State 97 */ new Array(  ),
	/* State 98 */ new Array(  ),
	/* State 99 */ new Array( 55/* Expression */,116 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 100 */ new Array( 55/* Expression */,117 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 101 */ new Array( 55/* Expression */,118 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 102 */ new Array(  ),
	/* State 103 */ new Array(  ),
	/* State 104 */ new Array(  ),
	/* State 105 */ new Array(  ),
	/* State 106 */ new Array(  ),
	/* State 107 */ new Array(  ),
	/* State 108 */ new Array(  ),
	/* State 109 */ new Array(  ),
	/* State 110 */ new Array( 53/* Stmt */,120 , 55/* Expression */,4 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 111 */ new Array(  ),
	/* State 112 */ new Array(  ),
	/* State 113 */ new Array(  ),
	/* State 114 */ new Array(  ),
	/* State 115 */ new Array(  ),
	/* State 116 */ new Array(  ),
	/* State 117 */ new Array(  ),
	/* State 118 */ new Array(  ),
	/* State 119 */ new Array(  ),
	/* State 120 */ new Array(  ),
	/* State 121 */ new Array(  ),
	/* State 122 */ new Array(  ),
	/* State 123 */ new Array(  ),
	/* State 124 */ new Array( 55/* Expression */,126 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 125 */ new Array( 55/* Expression */,128 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 126 */ new Array(  ),
	/* State 127 */ new Array(  ),
	/* State 128 */ new Array(  ),
	/* State 129 */ new Array( 55/* Expression */,132 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 130 */ new Array(  ),
	/* State 131 */ new Array(  ),
	/* State 132 */ new Array(  ),
	/* State 133 */ new Array( 55/* Expression */,134 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 134 */ new Array(  ),
	/* State 135 */ new Array( 55/* Expression */,136 , 57/* AddSubExp */,24 , 58/* MulDivExp */,25 , 59/* NegExp */,26 , 60/* Value */,28 , 56/* VariableCasio */,34 ),
	/* State 136 */ new Array(  ),
	/* State 137 */ new Array(  )
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
	"LOCATE" /* Terminal symbol */,
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
		act = 139;
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
		if( act == 139 )
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
			
			while( act == 139 && la != 61 )
			{
				if( _dbg_withtrace )
					__dbg_print( "\tError recovery\n" +
									"Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
									"Action: " + act + "\n\n" );
				if( la == -1 )
					info.offset++;
					
				while( act == 139 && sstack.length > 0 )
				{
					sstack.pop();
					vstack.pop();
					
					if( sstack.length == 0 )
						break;
						
					act = 139;
					for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
					{
						if( act_tab[sstack[sstack.length-1]][i] == la )
						{
							act = act_tab[sstack[sstack.length-1]][i+1];
							break;
						}
					}
				}
				
				if( act != 139 )
					break;
				
				for( var i = 0; i < rsstack.length; i++ )
				{
					sstack.push( rsstack[i] );
					vstack.push( rvstack[i] );
				}
				
				la = __lex( info );
			}
			
			if( act == 139 )
			{
				if( _dbg_withtrace )
					__dbg_print( "\tError recovery failed, terminating parse process..." );
				break;
			}


			if( _dbg_withtrace )
				__dbg_print( "\tError recovery succeeded, continuing" );
		}
		
		/*
		if( act == 139 )
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
		 rval = createNode( NODE_OP, OP_LOCATE, vstack[ vstack.length - 6 ], vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ]); 
	}
	break;
	case 25:
	{
		 rval = createNode( NODE_OP, OP_LOCATE, vstack[ vstack.length - 6 ], vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ]); 
	}
	break;
	case 26:
	{
		 rval = createNode( NODE_OP, OP_LINE ); 
	}
	break;
	case 27:
	{
		 rval = createNode( NODE_OP, OP_CLS ); 
	}
	break;
	case 28:
	{
		 rval = createNode( NODE_OP, OP_MCL ); 
	}
	break;
	case 29:
	{
		 rval = vstack[ vstack.length - 2 ]; 
	}
	break;
	case 30:
	{
		 rval = createNode( NODE_OP, OP_NONE ); 
	}
	break;
	case 31:
	{
		 rval = createNode( NODE_OP, OP_EQU, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 32:
	{
		 rval = createNode( NODE_OP, OP_LOT, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 33:
	{
		 rval = createNode( NODE_OP, OP_GRT, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 34:
	{
		 rval = createNode( NODE_OP, OP_LOE, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 35:
	{
		 rval = createNode( NODE_OP, OP_GRE, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 36:
	{
		 rval = createNode( NODE_OP, OP_NEQ, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 37:
	{
		 rval = createNode( NODE_OP, OP_NEQ, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 38:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 39:
	{
		 rval = createNode( NODE_OP, OP_SUB, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 40:
	{
		 rval = createNode( NODE_OP, OP_ADD, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 41:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 42:
	{
		 rval = createNode( NODE_OP, OP_MUL, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 43:
	{
		 rval = createNode( NODE_OP, OP_DIV, vstack[ vstack.length - 3 ], vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 44:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 45:
	{
		 rval = createNode( NODE_OP, OP_NEG, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 46:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 47:
	{
		 rval = createNode( NODE_OP, OP_INT, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 48:
	{
		 rval = createNode( NODE_OP, OP_INTG, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 49:
	{
		 rval = createNode( NODE_CONST, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 50:
	{
		 rval = createNode( NODE_CONST, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 51:
	{
		 rval = createNode( NODE_VAR, vstack[ vstack.length - 1 ] ); 
	}
	break;
	case 52:
	{
		 rval = vstack[ vstack.length - 1 ]; 
	}
	break;
	case 53:
	{
		 rval = vstack[ vstack.length - 2 ]; 
	}
	break;
	case 54:
	{
		 rval = createNode( NODE_OP, OP_RANDOM ); 
	}
	break;
	case 55:
	{
		 rval = createNode( NODE_OP, OP_READVAR, vstack[ vstack.length - 4 ], vstack[ vstack.length - 2 ] ); 
	}
	break;
	case 56:
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



