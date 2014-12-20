var CBI_VERSION = "Casio Basic Interpreter 0.4";
var CBI_BUILD_DATE = "2014-12-18";

var TEXT_SCREEN_WIDTH = 21;
var TEXT_SCREEN_HEIGHT = 7;

var DEG = 1;
var RAD = 2;
var GRAD = 3;

var angleMode = DEG;

function cbiGetVersion(withBuildDate) {
  toReturn = CBI_VERSION;
  if (withBuildDate) {
    toReturn += ' (built: '+CBI_BUILD_DATE+')';
  }
  return toReturn;
}

var nextLine = NaN; // index in the programLines array

var textScreenLines = new Array();
var idTimerMain = 0;


var currentLineBuffer = null;

function calcHandleOnKeyDown(e) {

  // Disable back button acting like history previous / back
  var doPrevent = false;
  if (event.keyCode === 8) {
    var d = event.srcElement || event.target;
    if ((d.tagName.toUpperCase() === 'INPUT' && (d.type.toUpperCase() === 'TEXT' || d.type.toUpperCase() === 'PASSWORD')) 
         || d.tagName.toUpperCase() === 'TEXTAREA') {
        doPrevent = d.readOnly || d.disabled;
    } else {
      doPrevent = true;
    }
  }
  if (doPrevent) {
    event.preventDefault();
  }

  if ((e.keyCode==8 || e.keyCode==46) && editMode && currentLineBuffer.length>0) {
    currentLineBuffer = currentLineBuffer.substring(0,currentLineBuffer.length-1);
    cursorMode = " "; clignoteCurseur(); // Clear old position
    drawTextLine(textScreenLines.length,currentLineBuffer+" ");
    //if (cursorCol>1) { cursorCol--; } 
    cursorCol--;
    cursorMode = "_"; clignoteCurseur(); // Cursor at new pos
  }
  
  if (e.keyCode==13 && editMode) { // 13 is "ENTER / CARRIAGE RETURN"
    editModeOff();

    /* Un-pause programe execution */
    paused = false;
    idTimerMain = setTimeout('executeNextLine()',10); 
  }

}


function reset() {
  editMode = false;
  paused = false;
  stockVarName = ""; // Destination of input
  cursorMode = "_";
  cursorCol = 1;
  cursorLine = 1;
  currentLineBuffer = null;
  currentPrgName = "main";
  callStack = new Array();
  nextLine = NaN; // index in the programLines array
  textScreenLines = new Array();
  angleMode = DEG;
  clearInterval(idTimerMain); idTimerMain = 0;
  clearInterval(idTimerCursor); idTimerCursor = 0;
}

var editMode = false;
var paused = false;
var stockVarName = ""; // Destination of input
var cursorMode = "_";
var cursorCol = 1;
var cursorLine = 1;
var idTimerCursor;

function editModeOn() {
  console.log("editModeOn");
  editMode = true;
  currentLineBuffer = "";
  print("");
  currentLineIndex = textScreenLines.length - 1;
  cursorLine = textScreenLines.length;
  cursorCol = 1;
  idTimerCursor = setInterval('clignoteCurseur()',500);
}

function editModeOff() {
  console.log("editModeOff");
  editMode = false;
  if (currentLineBuffer=="") { // If line is empty when exit edit mode, remove line from textscreenline
    textScreenLines.pop();
  } else {

  }
  letvar(stockVarName, parseFloat(currentLineBuffer));
  currentLineBuffer = null;
  clearInterval(idTimerCursor);
  cursorMode = " "; clignoteCurseur(); // Clear old position
}

function clignoteCurseur() {
  var charW = 6;
  var charH = 8;
  var y = (cursorLine-1) * charH + 1;
  var x = (cursorCol-1) * charW + 1;
  ctx1.drawImage(imageObj, cursorMode.charCodeAt(0)*6, 0, charW, charH, x, y, charW, charH);
  if (cursorMode == "_") {
    cursorMode = " ";
  } else {
    cursorMode = "_";
  }
}

function calcHandleOnKeyPress(e) {
  if (editMode) {
    var charCode = e.charCode;
    if (charCode==46 || (charCode >= 48 && charCode <= 57)) {
      var currentLineIndex = textScreenLines.length - 1;
      if (currentLineBuffer!==null && currentLineBuffer.length<20) {
        currentLineBuffer += String.fromCharCode(charCode);
        textScreenLines[currentLineIndex] = currentLineBuffer;
        drawTextLine(currentLineIndex+1,currentLineBuffer);
        cursorCol+=1;
      }
    }
  }
}

function swap() {
  if (ctx == ctx2) {
    swapToTextScreen();
  } else {
    swapToGraphicScreen();
  }
}

function swapToGraphicScreen() {
  c1.style.display = "none";
  c2.style.display = "";
  ctx = ctx2;
}

function swapToTextScreen() {
  c1.style.display = "";
  c2.style.display = "none";
  ctx = ctx1;
}

// Clear the current display
function clearDisplay() {
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect(1,1,127,63);
}

//Interpreting functions

function cls() {
  swapToGraphicScreen();
  clearDisplay();
}

function clrtext() {
  swapToTextScreen();
  clearDisplay();
}

// Redraw all screen
function redrawAllTextScreen() {  
  clrtext();
  for (var i=0; i<textScreenLines.length; i++) {
    lineNb = i+1;
    drawTextLine(lineNb,textScreenLines[i]);
  }
}

function print(str) {
  swapToTextScreen();
  str += " ";
  while (str.length>TEXT_SCREEN_WIDTH) {
    textScreenLines.push(str.substring(0,TEXT_SCREEN_WIDTH));
    str = str.substring(TEXT_SCREEN_WIDTH);
  }
  textScreenLines.push(str);
  while (textScreenLines.length > TEXT_SCREEN_HEIGHT) {
    textScreenLines.shift();
  }
  redrawAllTextScreen();
}

function locate(col,ligne,str) {
  if (col<1 || col>21) return; // Should generate a runtimeError, do nothing for now !
  if (ligne<1 || ligne>7) return; // Should generate a runtimeError, do nothing for now !
  while (textScreenLines.length < ligne) {
    textScreenLines.push("                       ");
  }
  currentLine = textScreenLines[ligne-1];
  if (currentLine.length<col-1) {
    currentLine = currentLine + "                       ".substring(0,(col-1)-currentLine.length);
  }
  newLine = currentLine.substring(0,col-1) + str + currentLine.substring(col-1+str.length);
  textScreenLines[ligne-1] = newLine;
  redrawAllTextScreen();
}

function cleartext() {
  console.log("cleartext called !");
  textScreenLines = new Array();
  redrawAllTextScreen();
}

function drawTextLine(lineNb,str) {
  imageObj = document.getElementById('casioFont');
  var charW = 6;
  var charH = 8;
  var y = (lineNb-1) * charH + 1;
  var x = 0;
  str = str.substring(0,21); // 21 first char
  for (var i=0; i<str.length; i++) {
    x = i * 6 + 1;
    ctx.drawImage(imageObj, str.charCodeAt(i)*6, 0, charW, charH, x, y, charW, charH);
  }
}

var plots = Array();
var xmin = 1;
var xmax = 127;
var xscl = 0;
var ymin = 1;
var ymax = 63;
var yscl = 0;

function setPixel(x,y) {
  x = Math.round(x);
  y = Math.round(y);
  ctx.fillStyle = "black";
  ctx.fillRect(x,y,1,1);
}

// draw a line using "Bresenham's line algorithm"
function bline(x0, y0, x1, y1) {
  x0 = Math.round(x0);
  y0 = Math.round(y0);
  x1 = Math.round(x1);
  y1 = Math.round(y1);
  ctx.fillStyle = "black";
  var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
  var dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1; 
  var err = (dx>dy ? dx : -dy)/2;
 
  while (true) {
    setPixel(x0,y0);
    if (x0 === x1 && y0 === y1) break;
    var e2 = err;
    if (e2 > -dx) { err -= dy; x0 += sx; }
    if (e2 < dy) { err += dx; y0 += sy; }
  }
}

function plot(x, y) {
  swapToGraphicScreen();
  plots.push([x,y]);
  if (plots.length>2) {
    plots.shift();
  }
  letvar("A_24", x);
  letvar("A_25", y);
  setPixel(xtoR(x), ytoR(y));
}

function range(xmin,xmax,xscl,ymin,ymax,yscl) {
  this.xmin = xmin;
  this.xmax = xmax;
  this.xscl = xscl;
  this.ymin = ymin;
  this.ymax = ymax;
  this.yscl = yscl;
}

function xtoR(x) {
  return ((x-this.xmin)*(this.casioScreenW-1)/(this.xmax-this.xmin))+1;
}
	
function ytoR(y) {
  return ((this.casioScreenH-1)-((y-this.ymin)*(this.casioScreenH-1)/(this.ymax-this.ymin))+1);
}

function line() {
  bline(xtoR(plots[0][0]),ytoR(plots[0][1]),xtoR(plots[1][0]),ytoR(plots[1][1]));
}

// Reset all vars to 0
function mcl() {
	for(i=0;i<v_values.length;i++) {
  	v_values[i] = 0;
  }
}

// Convert angle unit from current mode (Deg, Rad or Grad) to radians
function angleToRadians(angle) {
  if (angleMode == DEG) {
    return Math.PI * angle / 180;
  } else if (angleMode == GRAD) {
    return Math.PI * angle / 200;
  }
  return angle;
}

// Convert from radians to current unit (Deg, Rad or Grad)
function radiansToAngle(radians) {
  if (angleMode == DEG) {
    return 180 * radians / Math.PI;
  } else if (angleMode == GRAD) {
    return 200 * radians / Math.PI;
  }
  return radians;
}

