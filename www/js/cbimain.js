//Structs
function NODE() {
    var type;
    var value;
    var children;
}

//Defines
var NODE_OP = 0;
var NODE_VAR = 1;
var NODE_CONST = 2;

var OP_NONE = -1;
var OP_ASSIGN = 0;
var OP_IF = 1;
var OP_IF_ELSE = 2;
var OP_WHILE_DO = 3;
var OP_DO_WHILE = 4;
var OP_WRITE = 5;
var OP_READ = 6;
var OP_SAY = 7;

var OP_EQU = 10;
var OP_NEQ = 11;
var OP_GRT = 12;
var OP_LOT = 13;
var OP_GRE = 14;
var OP_LOE = 15;
var OP_ADD = 16;
var OP_SUB = 17;
var OP_DIV = 18;
var OP_MUL = 19;
var OP_NEG = 20;

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
var OP_RETURN = 39;
var OP_DEG = 40;
var OP_RAD = 41;
var OP_GRAD = 42;
var OP_COS = 43;
var OP_SIN = 44;
var OP_TAN = 45;
var OP_REC = 46;
var OP_POL = 47;

var programs = new Array();
var currentPrgName = "main";
var nextLine = 0;
var callStack = new Array();

var v_names = new Array();
var v_values = new Array();

var DEBUG = 1;

function debug(msg) {
    if (DEBUG) {
        console.log(msg);
    }
}

function letvar(vname, value) {
    var i;
    for (i = 0; i < v_names.length; i++) {
        if( v_names[i].toString() == vname.toString() ) {
            break;
        }
    }

    if (i == v_names.length) {
        v_names.push(vname);
        v_values.push(0);
    }
    debug("letvar v_values["+i+"] => "+value);
    v_values[i] = value;
}

function getvar(vname) {
    var i;
    for (i = 0; i < v_names.length; i++) {
        if (v_names[i].toString() == vname.toString()) {
            debug("getvar "+vname+" => "+v_values[i]);
            return v_values[i];
        }
    }
    return 0;
}

// Sur Casio C[1] ~ A[3] donc cette fonction pour la lettre C renvoi 2, 
// à additionner à l'index demandé car : C[X] == A[X+2]
function letterToIndexSupp(letter) {
    diff = letter.charCodeAt(0)-"A".charCodeAt(0);
    return diff;
}

//Management functions
function createNode(type, value, childs) {
    var n = new NODE();
    n.type = type;
    n.value = value;
    n.children = new Array();
    
    for (var i = 2; i < arguments.length; i++) {
        n.children.push(arguments[i]);
    }
    
    return n;
}

function execute(node) {
    var ret = 0;
    
    if (!node) {
        return 0;
    }

    switch (node.type) {
        case NODE_OP:
            switch (node.value) {
                case OP_NONE:
                    if (node.children[0]) {
                        execute(node.children[0]);
                    }
                    if (node.children[1]) {
                        ret = execute(node.children[1]);
                    }
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
                    if (node.children[1].type == NODE_VAR) {
                        varTabIndexBegin = letterToIndexSupp(node.children[1].value)+1;
                    } else {
                        child0 = node.children[1];
                    varTabIndexBegin = letterToIndexSupp(child0.children[0])+execute(child0.children[1]);
                    }
          
                    if (node.children[2]!==undefined) {
                        if (node.children[2].type == NODE_VAR) {
                            varTabIndexEnd = letterToIndexSupp(node.children[2].value)+1;
                        } else {
                            child0 = node.children[2];
                            varTabIndexEnd = letterToIndexSupp(child0.children[0])+execute(child0.children[1]);
                        }
                    } else {
                        varTabIndexEnd = varTabIndexBegin;
                    }
                    debug("begin ="+varTabIndexBegin);
                    debug("end ="+varTabIndexEnd);
                    if (varTabIndexBegin <= varTabIndexEnd) {
                        for (i = varTabIndexBegin; i <= varTabIndexEnd; i++ ) {
                            letvar( "A_"+i, execute( node.children[0] ) );
                        }
                    } else {
                        // Throw syntax error !
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
                    nextLine = programs[currentPrgName]['labels']["_"+node.children[0]];
                    break;
                case OP_PROG_CALL:
                    debug("Call to subprogram '"+node.children[0]+"'");
                    debug("We stack a return labels to the next line of the current program --> ['"+currentPrgName+"':"+nextLine+"]");
                    callStack.push({ prgName: currentPrgName, line: nextLine });
                    debug(callStack);
                    // ATTTENTION voir le cas d'un prog inexistant !!!
                    currentPrgName = node.children[0];
                    nextLine = 0;
                    break;
                case OP_RETURN:
                    unstack();
                    break;
                case OP_DEG:
                    angleMode = DEG;
                    break;
                case OP_RAD:
                    angleMode = RAD;
                    break;
                case OP_GRAD:
                    angleMode = GRAD;
                    break;
                case OP_COS:
                    ret = Math.cos(angleToRadians(execute(node.children[0])));
                    break;
                case OP_SIN:
                    ret = Math.sin(angleToRadians(execute(node.children[0])));
                    break;
                case OP_TAN:
                    ret = Math.tan(angleToRadians(execute(node.children[0])));
                    break;
                case OP_POL:
                    // rectangular to polar coord
                    x = execute(node.children[0]);
                    y = execute(node.children[1]);
                    r = Math.sqrt(x*x+y*y);
                    a = radiansToAngle(Math.atan(y/x));
                    letvar("A_9", r); // I = r
                    letvar("A_10", a); // J = a
                    break;
                case OP_REC:
                  // polar to rectangular coord
                  r = execute(node.children[0]);
                  a = execute(node.children[1]);
                  x = r * Math.cos(angleToRadians(a));
                  y = r * Math.sin(angleToRadians(a));
                  letvar("A_9", x);  // I = x
                  letvar("A_10", y); // J = y
                  break;
                case OP_IF:
                    if (execute(node.children[0])) {
                        execute(node.children[1]);
                    }
                    break;
                case OP_IF_ELSE:
                    if (execute( node.children[0])) {
                        execute( node.children[1]);
                    } else {
                        execute( node.children[2]);
                    }
                    break;
                case OP_WHILE_DO:
                    while(execute(node.children[0])) {
                        execute(node.children[1]);
                    }
                    break;
                case OP_DO_WHILE:
                    do {
                        execute(node.children[0])
                    } while (execute(node.children[1]));
                    break;
                case OP_WRITE:
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
                    debug("stock Var is "+stockVarName);
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
                    debug(node.children[0]);
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
                    ret =  parseFloat((n % 1).toPrecision(15));
                    break;
                case OP_LINE:
                    line();
                    break;
                case OP_CLS:
                    cls();
                    break;
                case OP_CLEARTEXT:
                    debug("cleartext call");
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

function cut(name, arrayOfLines, startIndexIncluded, stopIndexExcluded) {
    debug("Prog "+name+" from line "+(startIndexIncluded+1)+" to line "+stopIndexExcluded);
    var prog = new Array();
    for (i = startIndexIncluded; i < stopIndexExcluded; i++) {
        if (arrayOfLines[i].substr(0,1)=="'" || arrayOfLines[i].substr(0,1)=="#" || arrayOfLines[i].substr(0,2)=="@@" || arrayOfLines[i].trim()=="") {
            continue;
        }
        prog.push(arrayOfLines[i]);
    }
    return prog;
}

function jsccRun(str) {
    programs = new Array();
    programsSrc = new Array();
    
    var arrayOfLines = str.split("\n");
    debug(arrayOfLines);
    var progName = "main"; // default prog name
    var currentBoundary = 0;
    for (i = 0; i < arrayOfLines.length; i++) {
        var line = arrayOfLines[i];
        var res = line.match(/@@\s?Prog(?:ram)?\s+"?([a-zA-Z0-9]*)"?\s?.?/);
        if (res!=null) {
            debug(res); // It matched and res[0] contain the all string, res[1] the sub-matched part ie the programe name or number
            // cut from old boundary to i, then i become new boundary
            programsSrc[progName] = cut(progName,arrayOfLines,currentBoundary,i);
            progName = res[1];
            currentBoundary = i;
        }
    }
    programsSrc[progName] = cut(progName,arrayOfLines,currentBoundary,arrayOfLines.length);
  
    reset();
    cls();
  
    // Bon, maintenant faut parser tout les elts de programSrc
    for (var progName in programsSrc){
        if (programsSrc.hasOwnProperty(progName)) {
            debug("parsing " + progName + " ...");
            parsedProg = parse(programsSrc[progName].join(":"),progName);
            programs[progName] = new Array();
            programs[progName]['nodes'] = parsedProg.nodes;
            programs[progName]['labels'] = parsedProg.labels;
            programs[progName]['error_cnt'] = parsedProg.error_cnt;
        }
    }
  
    debug(programs);

    // ... puis lancer le programme "main"
    currentPrgName = "main";
  
    textScreenLines = new Array();

    nextLine = 0;
  
    if (programs['main']['error_cnt'] == 0) {
        debug("nextLine = "+nextLine);
        idTimerMain = setTimeout('executeNextLine()',10);
        debug("timeout id = "+idTimerMain);
    } else {
        finish("Syntax error");
    }

}

function parse(str, name) {
  
    debug("Parsing "+name+" ...");
  
    var nodes = new Array();
    var labels = new Array();
  
    str = str + ":"; // Add a final ":" 
    str = str.replace(/(?:\r\n|\r|\n)/g, ':'); // Replace CR / LF with ":" (our instruction separator)

    var error_cnt     = 0;
    var error_off = new Array();
    var error_la  = new Array();
    
    debug("before parse");

    if ((error_cnt = __parse( str, error_off, error_la, nodes, labels)) > 0) {
        for (i = 0; i < error_cnt; i++) {
            alert( "SYNTAX ERROR Line "+nodes.length+" near "+str.substr(error_off[i], 30));
            break;
        }
    }
    debug(nodes);
    debug(labels);
    debug("after parse");

    return {
        nodes : nodes,
        labels : labels,
        error_cnt : error_cnt
    }
}

function unstack() {
    if (callStack.length>0) {
        var obj = callStack.pop(); // unstack
        currentPrgName = obj.prgName;
        nextLine = obj.line;
        return true;
    }
    return false;
}

function executeNextLine() {
    if (isNaN(nextLine) || nextLine>=programs[currentPrgName]['nodes'].length) {
        if (!unstack()) { // If nothing was on stack ... we have no parent to return.
            finish("End Of program.");
            return;
        }
    }
    debug("["+idTimerMain+"] prog "+currentPrgName+" - executeNextLine "+nextLine+" / "+programs[currentPrgName]['nodes'].length); 
    execute(programs[currentPrgName]['nodes'][nextLine++]);
    if (!paused) {
        idTimerMain = setTimeout('executeNextLine()',10);
    }
}

function finish(str) {
    debug(str);
    reset();
    document.getElementById("srcCode").disabled = false;
}
