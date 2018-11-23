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
var OP_TEXT = 48;
var OP_DISP = 49;
var OP_PLOT_ON = 50;
var OP_PLOT_OFF = 51;
var OP_PLOT_CHG = 52;
var OP_PXL_ON = 53;
var OP_PXL_OFF = 54;
var OP_PXL_CHG = 55;
var OP_PXL_TEST = 56;
var OP_FLINE = 57;
var OP_HORIZONTAL = 58;
var OP_VERTICAL = 59;
var OP_GETKEY = 60;

var programs = new Array();
var currentPrgName = "main";
var nextLine = 0;
var callStack = new Array();

var v_names = new Array();
var v_values = new Array();
var getKey = 0;

var DEBUG = 1;

var EXIT_SUCCESS = 0;
var EXIT_STOPPED = 14;
var EXIT_SYNTAX_ERROR = 15;

function debug(msg) {
    if (DEBUG) {
        console.log(msg);
    }
}

function letvar(vname, value) {
    var i;
    for (i = 0; i < v_names.length; i++) {
        if (v_names[i].toString() == vname.toString()) {
            break;
        }
    }

    if (i == v_names.length) {
        v_names.push(vname);
        v_values.push(0);
    }
    debug("letvar v_values[" + i + "] => " + value);
    v_values[i] = value;
}

function getvar(vname) {
    var i;
    for (i = 0; i < v_names.length; i++) {
        if (v_names[i].toString() == vname.toString()) {
            debug("getvar " + vname + " => " + v_values[i]);
            return v_values[i];
        }
    }
    return 0;
}

// Sur Casio C[1] ~ A[3] donc cette fonction pour la lettre C renvoi 2, 
// à additionner à l'index demandé car : C[X] == A[X+2]
function letterToIndexSupp(letter) {
    diff = letter.charCodeAt(0) - "A".charCodeAt(0);
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
                        varTabIndex = letterToIndexSupp(node.children[0].value) + 1;
                    } else {
                        child0 = node.children[0];
                        varTabIndex = letterToIndexSupp(child0.children[0]) + execute(child0.children[1]);
                    }
                    newValue = getvar("A_" + varTabIndex) + 1;
                    letvar("A_" + varTabIndex, newValue);
                    if (newValue == 0) {
                        nextLine++; // Isz and Dsz have a special meaning when value reach 0, next line/instruction is ignored
                    }
                    break;
                case OP_RANDOM:
                    ret = Math.random();
                    break;
                case OP_DECR:
                    if (node.children[0].type == NODE_VAR) {
                        varTabIndex = letterToIndexSupp(node.children[0].value) + 1;
                    } else {
                        child0 = node.children[0];
                        varTabIndex = letterToIndexSupp(child0.children[0]) + execute(child0.children[1]);
                    }
                    newValue = getvar("A_" + varTabIndex) - 1;
                    letvar("A_" + varTabIndex, newValue);
                    if (newValue == 0) {
                        nextLine++; // Isz and Dsz have a special meaning when value reach 0, next line/instruction is ignored
                    }
                    break;
                case OP_ASSIGN:
                    if (node.children[1].type == NODE_VAR) {
                        varTabIndexBegin = letterToIndexSupp(node.children[1].value) + 1;
                    } else {
                        child0 = node.children[1];
                        varTabIndexBegin = letterToIndexSupp(child0.children[0]) + execute(child0.children[1]);
                    }

                    if (node.children[2] !== undefined) {
                        if (node.children[2].type == NODE_VAR) {
                            varTabIndexEnd = letterToIndexSupp(node.children[2].value) + 1;
                        } else {
                            child0 = node.children[2];
                            varTabIndexEnd = letterToIndexSupp(child0.children[0]) + execute(child0.children[1]);
                        }
                    } else {
                        varTabIndexEnd = varTabIndexBegin;
                    }
                    debug("begin =" + varTabIndexBegin);
                    debug("end =" + varTabIndexEnd);
                    if (varTabIndexBegin <= varTabIndexEnd) {
                        for (i = varTabIndexBegin; i <= varTabIndexEnd; i++) {
                            letvar("A_" + i, execute(node.children[0]));
                        }
                    } else {
                        // Throw syntax error !
                    }
                    break;
                case OP_READVAR: // Read a Casio array var like A[Expr]
                    varTabIndex = letterToIndexSupp(node.children[0]) + execute(node.children[1]);
                    ret = Number(getvar("A_" + varTabIndex));
                    break;
                case OP_REG_LBL:
                    // do nothing during exec phase, label is already defined when parsing is done
                    break;
                case OP_GOTO:
                    nextLine = programs[currentPrgName]['labels']["_" + node.children[0]];
                    break;
                case OP_PROG_CALL:
                    debug("Call to subprogram '" + node.children[0] + "'");
                    debug("We stack a return labels to the next line of the current program --> ['" + currentPrgName + "':" + nextLine + "]");
                    callStack.push({prgName: currentPrgName, line: nextLine});
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
                    n = Math.cos(angleToRadians(execute(node.children[0])));
                    ret = parseFloat((n % 1).toPrecision(15));
                    break;
                case OP_SIN:
                    n = Math.sin(angleToRadians(execute(node.children[0])));
                    ret = parseFloat((n % 1).toPrecision(15));
                    break;
                case OP_TAN:
                    n = Math.tan(angleToRadians(execute(node.children[0])));
                    ret = parseFloat((n % 1).toPrecision(15));
                    break;
                case OP_POL:
                    // rectangular to polar coord
                    x = execute(node.children[0]);
                    y = execute(node.children[1]);
                    r = Math.sqrt(x * x + y * y);
                    a = radiansToAngle(Math.atan(y / x));
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
                    if (execute(node.children[0])) {
                        execute(node.children[1]);
                    } else {
                        execute(node.children[2]);
                    }
                    break;
                case OP_WHILE_DO:
                    while (execute(node.children[0])) {
                        execute(node.children[1]);
                    }
                    break;
                case OP_DO_WHILE:
                    do {
                        execute(node.children[0])
                    } while (execute(node.children[1]));
                    break;
                case OP_WRITE:
                    ret = execute(node.children[0]);
                    print("" + ret);
                    break;
                case OP_READ:
                    letvar(node.children[0].toString(), prompt("Please enter a value:", "0"));
                    break;
                case OP_SAY:
                    print(node.children[0]);
                    break;
                case OP_LOCATE: // Efface l'écran texte puis affiche le texte demandé à la position demandée
                    if (typeof node.children[2].type != 'undefined') {
                        str = "" + execute(node.children[2]); // 3rd arg is an expression to evaluate
                    } else {
                        str = node.children[2]; // 3rd arg is a string
                    }
                    locate(execute(node.children[0]), execute(node.children[1]), str);
                    break;
                case OP_TEXT: // Efface l'écran texte puis affiche le texte demandé à la position demandée
                    if (typeof node.children[2].type != 'undefined') {
                        str = "" + execute(node.children[2]); // 3rd arg is an expression to evaluate
                    } else {
                        str = node.children[2]; // 3rd arg is a string
                    }
                    drawTextGfx(execute(node.children[0]), execute(node.children[1]), str);
                    break;
                case OP_INPUT:
                    paused = true; // pause program execution
                    print(node.children[0] + "?");
                    if (node.children[1].type == NODE_VAR) {
                        varTabIndex = letterToIndexSupp(node.children[1].value) + 1;
                    } else {
                        child1 = node.children[1];
                        varTabIndex = letterToIndexSupp(child1.children[0]) + execute(child1.children[1]);
                    }
                    stockVarName = "A_" + varTabIndex;
                    debug("stock Var is " + stockVarName);
                    editModeOn();
                    break;
                case OP_DISP:
                    dispModeOn();
                    break;
                case OP_EQU:
                    ret = execute(node.children[0]) == execute(node.children[1]);
                    break;
                case OP_NEQ:
                    ret = execute(node.children[0]) != execute(node.children[1]);
                    break;
                case OP_GRT:
                    ret = execute(node.children[0]) > execute(node.children[1]);
                    break;
                case OP_LOT:
                    ret = execute(node.children[0]) < execute(node.children[1]);
                    break;
                case OP_GRE:
                    ret = execute(node.children[0]) >= execute(node.children[1]);
                    break;
                case OP_LOE:
                    ret = execute(node.children[0]) <= execute(node.children[1]);
                    break;
                case OP_ADD:
                    ret = execute(node.children[0]) + execute(node.children[1]);
                    break;
                case OP_SUB:
                    ret = execute(node.children[0]) - execute(node.children[1]);
                    break;
                case OP_DIV:
                    ret = execute(node.children[0]) / execute(node.children[1]);
                    break;
                case OP_MUL:
                    ret = execute(node.children[0]) * execute(node.children[1]);
                    break;
                case OP_NEG:
                    debug(node.children[0]);
                    ret = execute(node.children[0]) * -1;
                    break;
                case OP_PLOT_ON:
                case OP_PLOT:
                    plotOn(execute(node.children[0]), execute(node.children[1]));
                    break;
                case OP_PLOT_OFF:
                    plotOff(execute(node.children[0]), execute(node.children[1]));
                    break;
                case OP_PLOT_CHG:
                    plotChg(execute(node.children[0]), execute(node.children[1]));
                    break;
                case OP_PXL_ON:
                    pixelOn(execute(node.children[1]), execute(node.children[0]));
                    break;
                case OP_PXL_OFF:
                    pixelOff(execute(node.children[1]), execute(node.children[0]));
                    break;
                case OP_PXL_CHG:
                    pixelChg(execute(node.children[1]), execute(node.children[0]));
                    break;
                case OP_PXL_TEST:
                    // nothing for now ...
                    ret = pixelTest(execute(node.children[1]), execute(node.children[0]));
                    break;
                case OP_RANGE:
                    range(execute(node.children[0]), execute(node.children[1]), execute(node.children[2]), execute(node.children[3]), execute(node.children[4]), execute(node.children[5]));
                    break;
                case OP_INT:
                    num = execute(node.children[0]);
                    if (num > 0) {
                        ret = Math.floor(num);
                    } else {
                        ret = Math.ceil(num);
                    }
                    break;
                case OP_INTG:
                    ret = Math.floor(execute(node.children[0]));
                case OP_FRAC:
                    n = execute(node.children[0]);
                    ret = parseFloat((n % 1).toPrecision(15));
                    break;
                case OP_LINE:
                    line();
                    break;
                case OP_FLINE:
                    fline(execute(node.children[0]), execute(node.children[1]), execute(node.children[2]), execute(node.children[3]));
                    break;
                case OP_HORIZONTAL:
                    horizontal(execute(node.children[0]));
                    break;
                case OP_VERTICAL:
                    vertical(execute(node.children[0]));
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
                case OP_GETKEY:
                    if (node.children.length == 1) {
                        ret = (getkey == execute(node.children[0]));
                    } else {
                        ret = getkey;
                    }
                    break;
            }
            break;
        case NODE_VAR:
            varTabIndex = letterToIndexSupp(node.value) + 1; // C est en fait C[1] donc, C[1] ~ A[2+1]
            ret = Number(getvar("A_" + varTabIndex));
            break;
        case NODE_CONST:
            ret = Number(node.value);
            break;
    }

    return ret;
}

function cut(name, arrayOfLines, startIndexIncluded, stopIndexExcluded) {
    debug("Prog " + name + " from line " + (startIndexIncluded + 1) + " to line " + stopIndexExcluded);
    var prog = new Array();
    for (i = startIndexIncluded; i < stopIndexExcluded; i++) {
        if (arrayOfLines[i].substr(0, 1) == "'" || arrayOfLines[i].substr(0, 1) == "#" || arrayOfLines[i].substr(0, 2) == "@@" || arrayOfLines[i].trim() == "") {
            continue;
        }
        prog.push((i+1) + "|" + arrayOfLines[i]);
    }
    return prog;
}

var finishCallBack = null;

function jsccRun(str, finishCallBack) {

    if (ctx1 == undefined) {
        cbiInit();
    }

    cls();
    cleartext();

    programs = new Array();
    programsSrc = new Array();

    this.finishCallBack = finishCallBack;
    
    str = str.replace(/(?:\r\n|\r|\n)/g, "\n");

    var arrayOfLines = str.split("\n");
    debug(arrayOfLines);
    var progName = "main"; // default prog name
    var currentBoundary = 0;
    for (i = 0; i < arrayOfLines.length; i++) {
        var line = arrayOfLines[i];
        var res = line.match(/@@\s?Prog(?:ram)?\s+"?([a-zA-Z0-9]*)"?\s?.?/);
        if (res != null) {
            debug(res); // It matched and res[0] contain the all string, res[1] the sub-matched part ie the programe name or number
            // cut from old boundary to i, then i become new boundary
            programsSrc[progName] = cut(progName, arrayOfLines, currentBoundary, i);
            progName = res[1];
            currentBoundary = i;
        }
    }
    programsSrc[progName] = cut(progName, arrayOfLines, currentBoundary, arrayOfLines.length);

    reset();
    cls();

    var nbErrors = 0;
    var where = "";

    // Bon, maintenant faut parser tout les elts de programSrc
    for (var progName in programsSrc) {
        if (programsSrc.hasOwnProperty(progName)) {
            debug("parsing " + progName + " ...");
            parsedProg = parse(programsSrc, progName);
            programs[progName] = new Array();
            programs[progName]['nodes'] = parsedProg.nodes;
            programs[progName]['labels'] = parsedProg.labels;
            programs[progName]['error_cnt'] = parsedProg.error_cnt;
            programs[progName]['error_off'] = parsedProg.error_off;
            nbErrors += parsedProg.error_cnt;
            if (where == "") { where = parsedProg.where; } // first error
            if (parsedProg.error_cnt > 0) { break; } // Stop parsing onfirst error !
        }
    }

    debug(programs);

    // ... puis lancer le programme "main"
    currentPrgName = "main";

    textScreenLines = new Array();

    nextLine = 0;

    //if (programs['main']['error_cnt'] == 0) {
    if (nbErrors == 0) {
        debug("nextLine = " + nextLine);
        idTimerMain = setTimeout('executeNextLine()', 10);
        debug("timeout id = " + idTimerMain);
    } else {
        finish(EXIT_SYNTAX_ERROR, "Syntax error " + where, programs);
    }

}

// Calculate begin /end offset of each line
function calculateLinesOffset(linesOfSourceCode) {
    var lineOffsets = new Array();
    var baseOffset = 0;
    for (var i = 0; i<linesOfSourceCode.length; i++) {
        var currentLineNum = linesOfSourceCode[i].substr(0, linesOfSourceCode[i].indexOf('|'));
        linesOfSourceCode[i] = linesOfSourceCode[i].substr(linesOfSourceCode[i].indexOf('|') + 1); // Remove line number indicator at the start
        lineOffsets[currentLineNum] = [baseOffset, baseOffset + linesOfSourceCode[i].length]; // .. not linesOfSourceCode[i].length - 1 because a ':' will be append to it
        baseOffset += linesOfSourceCode[i].length + 1;
    }
    return lineOffsets;
}

function giveLineFromOffset(lineOffsets, offset) {
    for (var key in lineOffsets) {
        if (key === 'length' || !lineOffsets.hasOwnProperty(key)) continue;
        if (offset >= lineOffsets[key][0] && offset <= lineOffsets[key][1]) {
        return key; // Line num found from offset !!
        }
    }
    return -1; // unknown line (should never append)
}

function giveLineFromSourceCode(lineNum, lines) {
    for (i = 0; i < lines.length; i++) {
        if (lines[i].startsWith(lineNum+"|")) {
            return lines[i].substr((lineNum+"|").length);
        }
    }
    return "";
}

function parse(programsSrc, progName) {

    var linesOfSourceCode = programsSrc[progName].map(cbiReplace);
    var lineOffsets = calculateLinesOffset(linesOfSourceCode); // Calculate offsets and remove line number indicator (ie "xx|" at the beginning)
    var str = linesOfSourceCode.join(":");
    str = str + ":"; // Add a final ":" 

    debug("Parsing " + progName + " ...");
    var nodes = new Array();
    var labels = new Array();
    var where = "";

    var error_cnt = 0;
    var error_off = new Array();
    var error_la = new Array();

    debug("before parse");

    if ((error_cnt = __parse(str, error_off, error_la, nodes, labels)) > 0) {
        for (i = 0; i < error_cnt; i++) {
            var lineNum = giveLineFromOffset(lineOffsets, error_off[i]);
            if (lineNum != -1) { where = " line " + lineNum + " ( " + giveLineFromSourceCode(lineNum, programsSrc[progName]) + " )"; }
            break;
        }
    }
    debug(nodes);
    debug(labels);
    debug("after parse");

    return {
        nodes: nodes,
        labels: labels,
        error_cnt: error_cnt,
        error_off: error_off,
        where: where
    }
}

function cbiReplace(str) {
    str = str.replace(/(\u00A0)/g, ' '); // Replace "non breakable space" by space
    str = str.replace(/(\u2192)/g, '->'); // Replace "right arrow" by "->"
    str = str.replace(/(\u21D2)/g, '=>'); // Replace "rightwards double arrow" by "=>"
    str = str.replace(/(\u2260)/g, '<>'); // Replace "not equal to" by "<>"
    str = str.replace(/(\u2264)/g, '<='); // Replace "lower or equal" by "<="
    str = str.replace(/(\u2265)/g, '>='); // Replace "greater or equal" by ">="
    str = str.replace(/(\u25E2:|_:)/g, ':_Disp_:'); // Replace "black lower right triangle" or "_" by "_Disp_"
    //str = str.replace(/(?:\r\n|\r|\n)/g, ':'); // Replace CR / LF with ":" (our instruction separator)
    return str;
}

function unstack() {
    if (callStack.length > 0) {
        var obj = callStack.pop(); // unstack
        currentPrgName = obj.prgName;
        nextLine = obj.line;
        return true;
    }
    return false;
}

var Ans = null;

function getLastAnswer() {
    return this.Ans;
}

function executeNextLine() {
    if (isNaN(nextLine) || nextLine >= programs[currentPrgName]['nodes'].length) {
        if (!unstack()) { // If nothing was on stack ... we have no parent to return.
            finish(EXIT_SUCCESS, "End Of program.", programs);
            return;
        }
    }
    debug("[" + idTimerMain + "] prog " + currentPrgName + " - executeNextLine " + nextLine + " / " + programs[currentPrgName]['nodes'].length);
    this.Ans = execute(programs[currentPrgName]['nodes'][nextLine++]);
    if (!paused) {
        idTimerMain = setTimeout('executeNextLine()', 10);
    }
}

function finish(errorCode, str, programs) {
    debug(str);
    reset();
    if (finishCallBack) {
      debug("call the finish callBack");
      finishCallBack(errorCode, str, programs); // call the finish callback
    }
}
