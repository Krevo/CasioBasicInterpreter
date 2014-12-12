//Structs
function NODE()
{
	var type;
	var value;
	var children;
}

//Defines
var NODE_OP	= 0;
var NODE_VAR	= 1;
var NODE_CONST	= 2;

var OP_NONE	= -1;
var OP_ASSIGN	= 0;
var OP_IF	= 1;
var OP_IF_ELSE	= 2;
var OP_WHILE_DO	= 3;
var OP_DO_WHILE	= 4;
var OP_WRITE	= 5;
var OP_READ	= 6;
var OP_SAY	= 7;

var OP_EQU	= 10;
var OP_NEQ	= 11;
var OP_GRT	= 12;
var OP_LOT	= 13;
var OP_GRE	= 14;
var OP_LOE	= 15;
var OP_ADD	= 16;
var OP_SUB	= 17;
var OP_DIV	= 18;
var OP_MUL	= 19;
var OP_NEG	= 20;

var OP_READVAR = 21;
var OP_INCR = 22;
var OP_DECR = 23;
var OP_REG_LBL = 24;
var OP_GOTO = 25;
var OP_PLOT = 26;
var OP_LINE = 27;
var OP_RANDOM = 28;
var OP_CLS = 29;
var OP_MCL = 30;
var OP_RANGE = 31;
var OP_INPUT = 32;
var OP_INT = 33;
var OP_INTG = 34;
var OP_LOCATE = 35;
var OP_CLEARTEXT = 36;
var OP_FRAC = 37;
var OP_PROG_CALL = 38;

var programs = new Array();
var programLines = new Array();
var programLabels = new Array();
var nextLine = 0;

var v_names = new Array();
var v_values = new Array();

function letvar( vname, value )
{
	var i;
	for( i = 0; i < v_names.length; i++ )
		if( v_names[i].toString() == vname.toString() )
			break;
		
	if( i == v_names.length )
	{
		v_names.push( vname );
		v_values.push( 0 );
	}
  console.log("letvar v_values["+i+"] => "+value);	
	v_values[i] = value;
}

function getvar( vname )
{
	var i;
	for( i = 0; i < v_names.length; i++ ) {
		if( v_names[i].toString() == vname.toString() ) {
      console.log("getvar "+vname+" => "+v_values[i]);
			return v_values[i];
    }
  }
	return 0;
}

// Sur Casio C[1] ~ A[3] donc cette fonction pour la lettre C renvoi 2, 
// à additionner à l'index demandé car : C[X] == A[X+2]
function letterToIndexSupp(letter)
{
  diff = letter.charCodeAt(0)-"A".charCodeAt(0);
  return diff;
}

//Management functions
function createNode( type, value, childs )
{
	var n = new NODE();
	n.type = type;
	n.value = value;	
	n.children = new Array();
	
	for( var i = 2; i < arguments.length; i++ )
		n.children.push( arguments[i] );
		
	return n;
}

function execute( node )
{
	var ret = 0;
	
	if( !node )
		return 0;

	switch( node.type )
	{
		case NODE_OP:
			switch( node.value )
			{
				case OP_NONE:
					if( node.children[0] )
						execute( node.children[0] );					
					if( node.children[1] )
						ret = execute( node.children[1] );
					break;
				case OP_INCR:
					if (node.children[0].type == NODE_VAR) {
  			    varTabIndex = letterToIndexSupp(node.children[0].value)+1;
          } else {
            child0 = node.children[0];
            varTabIndex = letterToIndexSupp(child0.children[0])+execute(child0.children[1]);
          }
          newValue = getvar("A_"+varTabIndex) + 1;
          letvar( "A_"+varTabIndex, newValue);
          if (newValue == 0) {
            nextLine++; // Isz and Dsz have a special meaning when value reach 0, next line/instruction is ignored
          }
          break;
				case OP_RANDOM:
          ret = Math.random();
          break;
				case OP_DECR:
					if (node.children[0].type == NODE_VAR) {
  			    varTabIndex = letterToIndexSupp(node.children[0].value)+1;
          } else {
            child0 = node.children[0];
            varTabIndex = letterToIndexSupp(child0.children[0])+execute(child0.children[1]);
          }
          newValue = getvar("A_"+varTabIndex) - 1;
			    letvar( "A_"+varTabIndex, newValue);
          if (newValue == 0) {
            nextLine++; // Isz and Dsz have a special meaning when value reach 0, next line/instruction is ignored
          }
          break;
				case OP_ASSIGN:
          if (node.children[0].type == NODE_VAR) {
            varTabIndex = letterToIndexSupp(node.children[0].value)+1;
					  letvar( "A_"+varTabIndex, execute( node.children[1] ) );
          } else {
            child0 = node.children[0];
            varTabIndex = letterToIndexSupp(child0.children[0])+execute(child0.children[1]);
            letvar("A_"+varTabIndex, execute( node.children[1] ) );
          }
					break;
				case OP_READVAR: // Read a Casio array var like A[Expr]
          varTabIndex = letterToIndexSupp(node.children[0])+execute(node.children[1]);
    			ret = Number(getvar("A_"+varTabIndex));
    			break;
        case OP_REG_LBL:
          // do nothing during exec phase, label is already defined when parsing is done
          break;
        case OP_GOTO:
          nextLine = programLabels["_"+node.children[0]];
          break;
        case OP_PROG_CALL:
          console.log("Requested a call to subprogram '"+node.children[0]+"'"); // Here we should stack a return labels of the current program
          console.log("Here we should stack a return labels to the next line of the current program --> ["+"main"+":"+nextLine+"]");
          break;
				case OP_IF:
					if (execute(node.children[0])) {
					  execute(node.children[1]);
          }
					break;
				case OP_IF_ELSE:
					if( execute( node.children[0] ) )
						execute( node.children[1] );
					else
						execute( node.children[2] );
					break;
				case OP_WHILE_DO:
					while( execute( node.children[0] ) )
						execute( node.children[1] );
					break;
				case OP_DO_WHILE:
					do
						execute( node.children[0] )
					while( execute( node.children[1] ) );
					break;
				case OP_WRITE:
					//alert( execute( node.children[0] ) );
					print(""+execute( node.children[0] ) );
					break;
				case OP_READ:
					letvar( node.children[0].toString(), prompt( "Please enter a value:", "0"  ) );
					break;
				case OP_SAY:
          print( node.children[0] );
					break;
                case OP_LOCATE: // Efface l'écran texte puis affiche le texte demandé à la position demandée
                  if (typeof node.children[2].type != 'undefined') {
                    str = ""+execute(node.children[2]); // 3rd arg is an expression to evaluate
                  } else {
                    str = node.children[2]; // 3rd arg is a string
                  }
                  locate(execute(node.children[0]),execute(node.children[1]),str);
                  break;
				case OP_INPUT:
          paused = true; // pause program execution
          print(node.children[0]+"?");
          if (node.children[1].type == NODE_VAR) {
            varTabIndex = letterToIndexSupp(node.children[1].value)+1;
          } else {
            child1 = node.children[1];
            varTabIndex = letterToIndexSupp(child1.children[0])+execute(child1.children[1]);
          }
          stockVarName = "A_"+varTabIndex;
          console.log("stock Var is "+stockVarName);
          editModeOn();
					break;
				case OP_EQU:
					ret = execute( node.children[0] ) == execute( node.children[1] );
					break;
				case OP_NEQ:
					ret = execute( node.children[0] ) != execute( node.children[1] );
					break;
				case OP_GRT:
					ret = execute( node.children[0] ) > execute( node.children[1] );
					break;
				case OP_LOT:
					ret = execute( node.children[0] ) < execute( node.children[1] );
					break;
				case OP_GRE:
					ret = execute( node.children[0] ) >= execute( node.children[1] );
					break;
				case OP_LOE:
					ret = execute( node.children[0] ) <= execute( node.children[1] );
					break;
				case OP_ADD:
					ret = execute( node.children[0] ) + execute( node.children[1] );
					break;
				case OP_SUB:
					ret = execute( node.children[0] ) - execute( node.children[1] );
					break;
				case OP_DIV:
					ret = execute( node.children[0] ) / execute( node.children[1] );
					break;
				case OP_MUL:
					ret = execute( node.children[0] ) * execute( node.children[1] );
					break;
				case OP_NEG:
          console.log(node.children[0]);
					ret = execute( node.children[0] ) * -1;
					break;
				case OP_PLOT:
					plot(execute( node.children[0] ), execute( node.children[1] ));
					break;
				case OP_RANGE:
					range(execute( node.children[0] ), execute( node.children[1] ), execute( node.children[2] ), execute( node.children[3] ), execute( node.children[4] ), execute( node.children[5] ));
					break;
				case OP_INT:
          num = execute(node.children[0]);
          if (num>0) {
            ret = Math.floor(num);
          } else {
            ret = Math.ceil(num);
          }
					break;
				case OP_INTG:
                  ret = Math.floor(execute(node.children[0]));
                case OP_FRAC:
                  n = execute(node.children[0]);
                  ret =  n % 1;
                  break;
				case OP_LINE:
					line();
					break;
				case OP_CLS:
					cls();
					break;
                case OP_CLEARTEXT:
                    console.log("cleartext call");
                    cleartext();
                    break;
				case OP_MCL:
					mcl();
					break;
			}
			break;
			
		case NODE_VAR:
      varTabIndex = letterToIndexSupp(node.value)+1; // C est en fait C[1] donc, C[1] ~ A[2+1]
 			ret = Number(getvar("A_"+varTabIndex));
			break;
			
		case NODE_CONST:
			ret = Number( node.value );
			break;
	}

	return ret;
}

function cut(name,arrayOfLines,startIndexIncluded,stopIndexExcluded) {
  console.log("Prog "+name+" from line "+(startIndexIncluded+1)+" to line "+stopIndexExcluded);
  var prog = new Array();
  for( i = startIndexIncluded; i < stopIndexExcluded; i++ ) {
    if (arrayOfLines[i].substr(0,1)=="#" || arrayOfLines[i].substr(0,2)=="@@" || arrayOfLines[i].trim()=="") {
      continue;
    }
    prog.push(arrayOfLines[i]);
  }
  return prog;
}

function jsccRun(str) {

  // WORK IN PROGRESS
  programs = new Array();
  programsSrc = new Array();
  
  //arrayOfLines = str.match(/[\r\n]/g);
  var arrayOfLines = str.split("\n");
  console.log(arrayOfLines);
  var progName = "main"; // default prog name
  var currentBoundary = 0;
  //console.log(arrayOfLines);
  for( i = 0; i < arrayOfLines.length; i++ ) {
    var line = arrayOfLines[i];
    //console.log(line);
    //if (line.substr(0,7)=='@@ Prog' || line.substr(0,6)=='@@Prog') {
      //console.log("here is a program header :"+line);
      var res = line.match(/@@\s?Prog(?:ram)?\s+"?([a-zA-Z0-9]*)"?\s?.?/);
      if (res!=null) {
        console.log(res); // It matched and res[0] contain the all string, res[1] the sub-matched part ie the programe name or number
        // cut from old boundary to i, then i become new boundary
        programsSrc[progName] = cut(progName,arrayOfLines,currentBoundary,i);
        progName = res[1];
        currentBoundary = i;
      }
    //}
  }
  console.log("last cut");
  programsSrc[progName] = cut(progName,arrayOfLines,currentBoundary,arrayOfLines.length);
  console.log("last cut after");
  
  console.log(programsSrc);
  
  // end of WORK IN PROGRESS

  reset();
  cls();
  
  // Bon, maintenant faut parser tout les elts de programSrc
  for (var progName in programsSrc){
      if (programsSrc.hasOwnProperty(progName)) {
          console.log("parsing " + progName + " ...");
          parsedProg = parse(programsSrc[progName].join(":"),progName);
          programs[progName] = new Array();
          programs[progName]['nodes'] = parsedProg.nodes;
          programs[progName]['labels'] = parsedProg.labels;
          programs[progName]['error_cnt'] = parsedProg.error_cnt;
      }
  }
  
  console.log(programs);

  // ... puis lancer le programme "main"
  programLines = programs['main']['nodes'];
  programLabels = programs['main']['labels'];
  
  textScreenLines = new Array();

  nextLine = 0;
  
  if (programs['main']['error_cnt'] == 0) {
    console.log("nextLine = "+nextLine);
    idTimerMain = setTimeout('executeNextLine()',10);
    console.log("timeout id = "+idTimerMain);
  } else {
    finish("Syntax error");
  }

  
}

function parse(str, name) {
  
  console.log("Parsing "+name+" ...");
  
  var nodes = new Array();
  var labels = new Array();
  
  str = str + ":"; // Add a final ":" 
  str = str.replace(/(?:\r\n|\r|\n)/g, ':'); // Replace CR / LF with ":" (our instruction separator)

  var error_cnt 	= 0;
  var error_off	= new Array();
  var error_la	= new Array();

  console.log("before parse");

  if( ( error_cnt = __parse( str, error_off, error_la, nodes, labels ) ) > 0 )
  {
	  for( i = 0; i < error_cnt; i++ ) {
		  alert( "SYNTAX ERROR Line "+nodes.length+" near "
			  + str.substr( error_off[i], 30 ));
      break;
    }
  }
  console.log(nodes);
  console.log(labels);
  console.log("after parse");

  return {
    nodes : nodes,
    labels : labels,
    error_cnt : error_cnt
  }
  
}

function executeNextLine() {
  console.log("["+idTimerMain+"] executeNextLine "+nextLine+" / "+programLines.length);
  if (isNaN(nextLine) || nextLine>=programLines.length) {
    finish("End Of program.");
    return;
  }
  execute(programLines[nextLine++]);
  if (!paused) {
    idTimerMain = setTimeout('executeNextLine()',10);
  }
}

function finish(str) {
  console.log(str);
  reset();
  document.getElementById("srcCode").disabled = false;
}


