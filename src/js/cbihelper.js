var TEXT_SCREEN_WIDTH = 21;
var TEXT_SCREEN_HEIGHT = 7;

  var BLUE = [
    0x39, // red component
    0x43, // green component
    0xCE  // blue component
  ];

  var GREEN = [
    0xBD, // red component
    0xDE, // green component
    0xCE  // blue component
  ];

  var BLACK = [
    0x04, // red component
    0x04, // green component
    0x04  // blue component
  ];

  var WHITE = [
    0xFF, // red component
    0xFF, // green component
    0xFF  // blue component
  ];

var FOREGROUND_COLOR = BLUE;
var BACKGROUND_COLOR = GREEN;

var DEG = 1;
var RAD = 2;
var GRAD = 3;

var angleMode = DEG;

var casioFont = new Image();
casioFont.src = "data:image/gif;base64,R0lGODlhAAYIAKEBAAQEBP///////////yH5BAEKAAIALAAAAAAABggAAAL+DH6GoNi5WHxy0Tuz1Y7DDXbhJ5bkWZkpegXu6zKvNBuwDN95stf5DwwKd7zYjTfxJRUxS2NWHOqCuCbOYbVekUWPDHvNQmnGqq2s5HbV2++mFo7D4U4s0H6mmqdSo3Dv1yOY19RneIiYqAjlw/Q3suIm2SaGMcK4iLiHV0XzpRVpqdIC1kj1AHpX18biJdoKaej6RLo2Cch3hGezlKkZ6xq8SjeWKjx6DIvsRLTsrAwdmiwNXP1Mff2KHa2aPa2dR8Y7h1Y+bi6eHr4uh85Ofh6v3i7/7k4/D49LmF8sZwZwUKCBvuo5WmcKyQ9c/c5EiULoTqOGFB0SDOiOoMX+jYwg6LNXL0wgfCDVTel0ytzCIftWngLUMmWugjRj0pR58c/HOJ8U+iTzsNMnnDIxzgyIshxJnkxE9vTzgaUShIOAjixJVeo9UzozWh24KatElxFN3uyzdKdapYWmYk27NW7ItXPlVoRbN+9dunvtvuX79+pVvH31BjZM+HDhxYobJ378ESfQOmPFla1ssCZUkVV1TNIINXLQXL2GjutAd7DAy4JPivXkiDE9PonztgZtep/QnpQKSSKNeg0Rt+Gs2tIyhjdyWo+flmFmFKxfpryUY6pwJHv1sC1Yvzrag/M/j57IE78MW/hUpgqTq57uHDHXoghLbRb6HiVMOrD+b9v5X1xvkE1HjmnFOAbYgIado6BsCT5IYITySehgRp01iCCFGU7IYYUdbughY0SFp510WlXFBkzMkNVfRKwZ+NxDuriHliaulWdCTjF+tl133Mno2Wkh2bddb63lY5aOGnGnmU+CeHTfYLmxyM8c2H140H7vZdaFiQfpgYZsl3z5ExvLZUkZZ6SN5d1CSVXXFDEGlYLac2yJ4ZRRQ2HYlkW1uTmlmhOBVpdTbCKVBllbRodhbV1ipmGjEFIlaaSThghippUi9oalnn64KaahanopqRYq2gxEBra42khA9imLdoLu1wuXg56EX0IrvpnCYVsqaZahmeXXUJjx0Db+6D9+rjmTkot0eiw70OkSLIt6CnnPf0RWQilbSZK52rUc3WXdlW2ZSyZATE7mDZ2tdtVjekIKG1pgatJrYqCAXaTvqS5iRSUtzPFXpHhcVXugwNoKWOqfUjwKasOlMijxp6JWHLHFpv47ascYX6yxxyF/LJaNDN9JlLLOunnwrV4mRdKRtEX3b7MtRwjjtQbXu+eFqW3Us8yhuRGn0DZXmcmmNiM8LtLz/uzaoQw615+qzdKsW4Llxlb0aJh8LZ1NAuUa7YlIwjnnnXDde147/S5o9aKvSS3obfBaxq/LyHoJHrJvg1zzwySLnHHhgB++MeKjykz4PNZw803kj2/ZQzk4kreLOTcjBnl00fS9O99wjwi4ip7H6brFiZ0zOfCOBy4MJbX1qSdtnXO2l51JnMzoMtNJ7MI7oBC5B50tv6EumLZRu6s77i7tZnpWX0WVHNmpjw45b6fDjm5Qw28GDpsJJXK55vZByUXCHFTfZ/mTpZsNt+zXmgpa0M7MiopgnC6wq6RnXjn6yWJyliOg+7qRPQAWUIEHbKABH6hA4QUQgiw4iwUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IQxMWAAA7";
changeColorOnImage(casioFont);

var casioFontGfx = new Image();
casioFontGfx.src = "data:image/gif;base64,R0lGODlhAAYIAKECAAQEBP///v///////yH5BAEKAAIALAAAAAAABggAAAL+DH6GoNi5WHxy0Tuz1Y7DDXbhJ5bkWZkpegXuy7yuBBtyLN95stf5DwwKbwmBwBYwOpRFAY3JgCadzSU1ehzqgrgZr+FjuoyKKU+KPlZt6ZnZ7Xwpa7hYTDwFl/PVNfYZ5wY42Ne184UkhHgXmCeXhYVExqb29zhmBPmGeZYl5OmIKTMpV0bGOApKCrTaSuSzxzWyYsdj4VVbN/sAY6j1++PrAGtDg+RBi7GrV6e1govYO/yFrKxizTLxW818O9z9zQWkTXcLfC57Xb3u3Uxtu8uuHk9/HVyfjZ8snz/v3w9wnz5sAv/5IoiQ3z46DAU1LPbQGESHFCdalIgxUUb+dxE1euRYcWNHkBc9BjtJEgxHQyx7bCGGDiWlTnA0zbHE6dGgmZRi+Uwkzk1IiDc3vcFpdE7OSKh43sEh5oNDS0hpID219KhRq1onIRXq0uK4k0r5RHLKJ2vZOZlUNcJqxpgxNZxQ+YkC9UrXOFWJ8o0bBWbLoCXd2dlTQZDcLosOE1Yk+OTLih/BilRcptmxzZkPwjqsOaxcy5WHbhsJk3DGiaGBmoYs2fXqmLRJk7xcuGGtLY5zD71d2rdw3MSDFweOHPVv5cONO0++PLrJ58yPV6cu3Xp27M2hd7/uXXvJ2Lq9jRU72CVXsPc88+7JyIr8QoAd/aF/ijFjIuH+elslEVdOaumVBiFMiTITVHlxxWCCWSWWVoRFTfiXY3Bd2Ehq7j2G31sEfmiFKVQg2FZNgEhSYWZJ7ERVgGOgiCKLWln414WRTQYaeKDt+Eox+vWYgmTkpOfBZLJNtxIEEHVg0n46MKjLe4Yhxp9/3EEo3mxDAMeMD/1Z2ZtYn6mEJH/SRPQOmOCtyZmZV74Z3pussfnddnHeSWeWcObpXGx64mknn4DWSeifgh4a6Gu0SeSTk7CJBk84izKEYV41XYpWpT1tuiU6TjbY4lo1erhgpnTtNVepFCl5VSA5eiXhqDJypamAYbE3aaik8iRKU7piQSFN8S0JByG9fmX+06nBokWrsm954UyOf44AbS+KRZpLlNDkiCt7B7XmWo+2JTbleNOQidmcuJD2k2ZqblftZnGOY0tHfnYbnbvnHemuMKJN5y2izcXi2buF7plomQkbujDCBw/K8MMjbSBwxBY7fDHEGG+s8by30itpmOuR99ki4gKj330q1wdrgU3E2GGjjrYQ8LV+CXtfXa2KaGCsh4Fo77DHEotHpS/bJa/P9KWjSDSHuJifWVIbPSCwzvZc1GhXX8LrGDQleGBar5JaxI1jtnkcjz4CKfPJP5WmEC9ibvgvk6Ca+x52remLo1Aa41ovvKn1+a8eXdqcDLv8nr1u44Z/c27DHkf+O2bHFfc5muSXW6555xJ7rmXlm48OOsekf456xvbWhlHg6j5WGbgbUvOJW6nczjWCuofCe9RG0u2ee63YnnvvxO8+fA7HA5N87bgjv/wPze9eW23TG/889lyXWPz1rGTv/fLXryK9+Gbja9vE6WKpYtvWur0f3eT9SJkzqP1nGrcGZw4U3+mjLadohKY4RvpfuAD2KEYBboD72tu+AKeb04XuHJxLnelKV0HVYVCCFxxPmTL4nIHEbYQiLKFBEmLCgKDwhOTI1cdeMTsNdWpLwmuLDW+IwxzqcIc7fODgupUyTPBwiEQsohGPiMQkKlGJ1aPNEp8IxShKcYpLFJelttKhwnqZYxppksr7oBEUFfqwfzEh4QkPpyTE6GKNANpWvMyYRi+6kRuGq1LiDiEpLCrQMl38VjvWeKaXQA5bBcniMhaVwkIqcoUsaI8hWZhIRi4SjpOMJCUR4shKQtIeTeykJz8JylCKcpSkLKUpf0HFVOLwlFpQpStfCctY3pCVqZClLW+JSyPScpe87KUvfwnMYApzmMQspjGPicxkKnOZzCwAADs=";
changeColorOnImage(casioFontGfx);

var gfxFontSize = "4444444444444444444444444444444442444444444444444444444444444444444444444445466446444446444444444444444442444654445444464444444";

var nextLine = NaN; // index in the programLines array

var textScreenLines = new Array();
var idTimerMain = 0;
var currentLineBuffer = null;

var casioScreenW = 127;
var casioScreenH = 63;

var c1, c2, ctx1, ctx2, c, ctx;
var zoomW, zoomH, dx, dy;

function chooseColorScheme(colorSchemeName) {
  var oldForegroundColor = FOREGROUND_COLOR;
  var oldBackgroundColor = BACKGROUND_COLOR;
  if (colorSchemeName == "black&white") {
    FOREGROUND_COLOR = BLACK;
    BACKGROUND_COLOR = WHITE;
  } else if (colorSchemeName == "blue&green") {
    FOREGROUND_COLOR = BLUE;
    BACKGROUND_COLOR = GREEN;
  }
  swapColor(ctx1, oldForegroundColor, FOREGROUND_COLOR);
  swapColor(ctx2, oldForegroundColor, FOREGROUND_COLOR);
  swapColor(ctx1, oldBackgroundColor, BACKGROUND_COLOR);
  swapColor(ctx2, oldBackgroundColor, BACKGROUND_COLOR);
  changeColorOnImage(casioFont);
  changeColorOnImage(casioFontGfx);
}

function swapColor(context, fromColor, toColor) {
    var imageData = context.getImageData(0, 0, c.width, c.height);
    var data = imageData.data;

    for(var i = 0; i < data.length; i += 4) {

        if (data[i] == fromColor[0]
            && data[i+1] == fromColor[1]
            && data[i+2] == fromColor[2]) {
            data[i] = toColor[0];
            data[i + 1] = toColor[1];
            data[i + 2] = toColor[2];
        }
    }
    // overwrite original image
    context.putImageData(imageData, 0, 0);
}

function changeColorOnImage(img) {

  String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
  }

  var imageData = img.src;
  var binaryImageData = atob(imageData.replace(/^data:image\/(gif|png|jpeg|jpg);base64,/, ''));

  // Replace color #0
  binaryImageData = binaryImageData.replaceAt(13, String.fromCharCode(FOREGROUND_COLOR[0]));
  binaryImageData = binaryImageData.replaceAt(14, String.fromCharCode(FOREGROUND_COLOR[1]));
  binaryImageData = binaryImageData.replaceAt(15, String.fromCharCode(FOREGROUND_COLOR[2]));

  // Replace color #1
  binaryImageData = binaryImageData.replaceAt(16, String.fromCharCode(BACKGROUND_COLOR[0]));
  binaryImageData = binaryImageData.replaceAt(17, String.fromCharCode(BACKGROUND_COLOR[1]));
  binaryImageData = binaryImageData.replaceAt(18, String.fromCharCode(BACKGROUND_COLOR[2]));

  img.src = "data:image/gif;base64," + btoa(binaryImageData);
}

function cbiInit() {

    c1 = document.getElementById("canvas1");
    c2 = document.getElementById("canvas2");

    ctx1 = c1.getContext("2d");
    ctx2 = c2.getContext("2d");

    c = c1;
    ctx = ctx1;

    reverseKeyCode();

    if (window.addEventListener){
        window.addEventListener("keydown", calcHandleOnKeyDown, false);
        window.addEventListener("keyup", calcHandleOnKeyUp, false);
    } else if (window.attachEvent){ // IE sucks !
        window.attachEvent("keydown", calcHandleOnKeyDown, false);
        window.attachEvent("keyup", calcHandleOnKeyUp, false);
    }

    zoomW = c.width  / casioScreenW;
    zoomH = c.height / casioScreenH;

    dx = -1;
    dy = -1;

    prepareDisplay(ctx1);
    prepareDisplay(ctx2);

    // Efface ecran texte
    clrtext();

    // Efface ecran graphique
    cls();

}

function prepareDisplay(ctx) {
    // No anti-aliasing
    ctx.imageSmoothingEnabled = false
    ctx.webkitImageSmoothingEnabled = false
    ctx.mozImageSmoothingEnabled = false

    // We need to keep a var (called 'gtm') containing the current transformation applied to canvas (until ctx.currentTransform is fully supported)
    // that's why we avoid using ctx.scale() or ctx.translate();
    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    gtm = svgElement.createSVGMatrix();
    gtm = gtm.scaleNonUniform(zoomW,zoomH); // Apply zoom
    gtm = gtm.translate(dx,dy); // Translate so coords starts from (1,1) and go to (casioScreenW, casioScreenH);
    ctx.transform(gtm.a, gtm.b, gtm.c, gtm.d, gtm.e, gtm.f); // Apply transform to canvas
}

var casioKeyCode2PCKeyboard = {
    "79": "F1",
    "69": "F2",
    "59": "F3",
    "49": "F4",
    "39": "F5",
    "29": "F6",
    "38": "ArrowLeft",
    "28": "ArrowUp",
    "37": "ArrowDown",
    "27": "ArrowRight",
    "71": "0",
    "72": "1",
    "62": "2",
    "52": "3",
    "73": "4",
    "63": "5",
    "53": "6",
    "74": "7",
    "64": "8",
    "54": "9",
    "61": ".",
    "42": "+",
    "32": "-",
    "43": "*",
    "33": "/",
    "31": "Enter",
    "44": "Backspace"
};

var PCKeyBoard2CasioKey = {};

function reverseKeyCode() {
    for (var key in casioKeyCode2PCKeyboard) {
        if (casioKeyCode2PCKeyboard.hasOwnProperty(key)) {
            PCKeyBoard2CasioKey[casioKeyCode2PCKeyboard[key]] = key;
        }
    }
}

function calcKeyUp() {
    getkey = 0;
}

function calcKeyDown(keyCode) {
    getkey = keyCode;
    handleOnKeyDown({key: casioKeyCode2PCKeyboard[keyCode]});
}

function calcHandleOnKeyUp(e) {
    getkey = 0;
}

function calcHandleOnKeyDown(e) {
    if (typeof PCKeyBoard2CasioKey[e.key] !== 'undefined') {
        getkey = PCKeyBoard2CasioKey[e.key];
    }
    handleOnKeyDown(e);
}

function handleOnKeyDown(e) {
    var doPrevent = false;

    // Disable back button acting like history previous / back
    // ... and arrow down acting like moving page down 
    // ...
    if (e.key == "Backspace"
         || e.key == "Enter"
         || e.key == "ArrowUp"
         || e.key == "ArrowDown"
         || e.key == "ArrowLeft"
         || e.key == "ArrowRight") {
        var d = e.srcElement || e.target;
        if (d && ((d.tagName.toUpperCase() === 'INPUT' && (d.type.toUpperCase() === 'TEXT' || d.type.toUpperCase() === 'PASSWORD'))
            || d.tagName.toUpperCase() === 'TEXTAREA')) {
            doPrevent = d.readOnly || d.disabled;
        } else {
            doPrevent = true;
        }
    }
/*
    if (e.key == "Backspace"
         || e.key == "Enter"
         || e.key == "ArrowUp"
         || e.key == "ArrowDown"
         || e.key == "ArrowLeft"
         || e.key == "ArrowRight") {
        doPrevent = true;
    }
*/
    if (editMode) {
        if (e.key == '-' || e.key == '.' || (e.key >= '0' && e.key <= '9')) {
            var currentLineIndex = textScreenLines.length - 1;
            if (currentLineBuffer !== null && currentLineBuffer.length < 20) {
                currentLineBuffer += e.key;
                textScreenLines[currentLineIndex] = currentLineBuffer;
                drawTextLine(currentLineIndex + 1, currentLineBuffer);
                cursorCol += 1;
            }
        }
    }

    if ((e.key == "Backspace" || e.key === "Delete") && editMode && currentLineBuffer.length > 0) {
        currentLineBuffer = currentLineBuffer.substring(0, currentLineBuffer.length - 1);
        cursorMode = " ";
        clignoteCurseur(); // Clear old position
        drawTextLine(textScreenLines.length, currentLineBuffer + " ");
        cursorCol--;
        cursorMode = "_";
        clignoteCurseur(); // Cursor at new pos
    }

    if (e.key == "Enter" && editMode) {
        editModeOff();
        unpauseProgramExec();
    }

    if (e.key == "Enter" && dispMode) {
        dispModeOff();
        unpauseProgramExec();
    }

    if (doPrevent && e.preventDefault) {
        e.preventDefault();
    }

}

function unpauseProgramExec() {
    /* unpause program execution */
    paused = false;
    idTimerMain = setTimeout('executeNextLine()', 10);
}

function reset() {
    editMode = false;
    paused = false;
    getkey = 0;
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
    clearInterval(idTimerMain);
    idTimerMain = 0;
    clearInterval(idTimerCursor);
    idTimerCursor = 0;
}

var editMode = false;
var dispMode = false;
var paused = false;
var stockVarName = ""; // Destination of input
var cursorMode = "_";
var cursorCol = 1;
var cursorLine = 1;
var idTimerCursor;

function dispModeOn() {
    paused = true;
    dispMode = true;
    currentLineBuffer = "";
    print("            __Disp__");
}

function dispModeOff() {
    dispMode = false;
    textScreenLines.pop();
    redrawAllTextScreen();
}

function editModeOn() {
    debug("editModeOn");
    editMode = true;
    currentLineBuffer = "";
    print("");
    currentLineIndex = textScreenLines.length - 1;
    cursorLine = textScreenLines.length;
    cursorCol = 1;
    idTimerCursor = setInterval('clignoteCurseur()', 500);
}

function editModeOff() {
    editMode = false;
    if (currentLineBuffer == "") { // If line is empty when exit edit mode, remove line from textscreenline
        textScreenLines.pop();
    } else {

    }
    debug("editModeOff");
    letvar(stockVarName, parseFloat(currentLineBuffer));
    currentLineBuffer = null;
    clearInterval(idTimerCursor);
    cursorMode = " ";
    clignoteCurseur(); // Clear old position
}

function clignoteCurseurGraphOn() {
    swapToGraphicScreen();
    idTimerCursor = setInterval('clignoteCurseurGraph()', 500);
}

function clignoteCurseurGraph() {
    plotChg(plots[0][0], plots[0][1]);
}

function clignoteCurseur() {
    var charW = 6;
    var charH = 8;
    var y = (cursorLine - 1) * charH + 1;
    var x = (cursorCol - 1) * charW + 1;
    ctx1.drawImage(casioFont, cursorMode.charCodeAt(0) * 6, 0, charW, charH, x, y, charW, charH);
    if (cursorMode == "_") {
        cursorMode = " ";
    } else {
        cursorMode = "_";
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
    ctx.fillStyle = getFillStyleFromColor(BACKGROUND_COLOR)
    ctx.fillRect(1, 1, casioScreenW, casioScreenH);
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
    for (var i = 0; i < textScreenLines.length; i++) {
        lineNb = i + 1;
        drawTextLine(lineNb, textScreenLines[i]);
    }
}

function print(str) {
    swapToTextScreen();
    str += " ";
    while (str.length > TEXT_SCREEN_WIDTH) {
        textScreenLines.push(str.substring(0, TEXT_SCREEN_WIDTH));
        str = str.substring(TEXT_SCREEN_WIDTH);
    }
    textScreenLines.push(str);
    while (textScreenLines.length > TEXT_SCREEN_HEIGHT) {
        textScreenLines.shift();
    }
    redrawAllTextScreen();
}

function locate(col, ligne, str) {
    if (col < 1 || col > 21) return; // Should generate a runtimeError, do nothing for now !
    if (ligne < 1 || ligne > 7) return; // Should generate a runtimeError, do nothing for now !
    while (textScreenLines.length < ligne) {
        textScreenLines.push("                       ");
    }
    currentLine = textScreenLines[ligne - 1];
    if (currentLine.length < col - 1) {
        currentLine = currentLine + "                       ".substring(0, (col - 1) - currentLine.length);
    }
    newLine = currentLine.substring(0, col - 1) + str + currentLine.substring(col - 1 + str.length);
    textScreenLines[ligne - 1] = newLine;
    redrawAllTextScreen();
}

function cleartext() {
    textScreenLines = new Array();
    redrawAllTextScreen();
}

function drawTextLine(lineNb, str) {
    var charW = 6;
    var charH = 8;
    var y = (lineNb - 1) * charH + 1;
    var x = 0;
    str = str.substring(0, 21); // 21 first char
    for (var i = 0; i < str.length; i++) {
        x = i * 6 + 1;
        ctx.drawImage(casioFont, str.charCodeAt(i) * 6, 0, charW, charH, x, y, charW, charH);
    }
}

function drawTextGfx(y, x, str) {
    var srcCharW = 6;
    var charH = 8;
    swapToGraphicScreen();
    for (var i = 0; i < str.length; i++) {
        var charW = parseInt(gfxFontSize[str.charCodeAt(i)]);
        ctx.drawImage(casioFontGfx, 1 + str.charCodeAt(i) * srcCharW, 0, charW, charH, x, y, charW, charH);
        x += charW; // add witdh of char which has just been drawn (variable font width)
    }
}

var plots = Array();
var xmin = 1;
var xmax = casioScreenW;
var xscl = 0;
var ymin = 1;
var ymax = casioScreenH;
var yscl = 0;

function getPixelColor(x, y) {
    var imgd = ctx2.getImageData(x * gtm.a + gtm.e, y * gtm.d + gtm.f, 1, 1);
    return imgd.data;
}

function setPixelOn(x, y) {
    setPixel(x, y, FOREGROUND_COLOR);
}

function setPixelOff(x, y) {
    setPixel(x, y, BACKGROUND_COLOR);
}

function setPixel(x, y, color) {
    x = Math.round(x);
    y = Math.round(y);
    ctx.fillStyle = getFillStyleFromColor(color);
    ctx.fillRect(x, y, 1, 1);
}

function getFillStyleFromColor(color) {
    var pad = "00";
    return "#"
        + strPad(color[0].toString(16), pad)
        + strPad(color[1].toString(16), pad)
        + strPad(color[2].toString(16), pad);
}

function strPad(str, pad) {
    return pad.substring(0, pad.length - str.length) + str;
}

// draw a line using "Bresenham's line algorithm"
function bline(x0, y0, x1, y1) {
    swapToGraphicScreen();
    x0 = Math.round(x0);
    y0 = Math.round(y0);
    x1 = Math.round(x1);
    y1 = Math.round(y1);
    var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    var dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    var err = (dx > dy ? dx : -dy) / 2;

    while (true) {
        setPixelOn(x0, y0);
        if (x0 === x1 && y0 === y1) break;
        var e2 = err;
        if (e2 > -dx) {
            err -= dy;
            x0 += sx;
        }
        if (e2 < dy) {
            err += dx;
            y0 += sy;
        }
    }
}

function plotChg(x, y) {
    var color = getPixelColor(xtoR(x), ytoR(y));
    if (color[0] == FOREGROUND_COLOR[0]
        && color[1] == FOREGROUND_COLOR[1]
        && color[2] == FOREGROUND_COLOR[2]) {
        plotOff(x, y);
    } else {
        plotOn(x, y);
    }
}

function plotOn(x, y) {
    plot(x, y, true);
}

function plotOff(x, y) {
    plot(x, y, false);
}

function plot(x, y, mode) {
    swapToGraphicScreen();
    plots.push([x, y]);
    if (plots.length > 2) {
        plots.shift();
    }
    letvar("A_24", x);
    letvar("A_25", y);
    if (mode) {
        setPixelOn(xtoR(x), ytoR(y));
    } else {
        setPixelOff(xtoR(x), ytoR(y));
    }
}

function pixelTest(x, y) {
    var color = getPixelColor(x, y);
    if (color[0] == FOREGROUND_COLOR[0]
        && color[1] == FOREGROUND_COLOR[1]
        && color[2] == FOREGROUND_COLOR[2]) {
        return 1;
    } else {
        return 0;
    }
}

function pixelChg(x, y) {
    var color = getPixelColor(x, y);
    if (color[0] == FOREGROUND_COLOR[0]
        && color[1] == FOREGROUND_COLOR[1]
        && color[2] == FOREGROUND_COLOR[2]) {
        pixelOff(x, y);
    } else {
        pixelOn(x, y);
    }
}

function pixelOn(x, y) {
    pixel(x, y, true);
}

function pixelOff(x, y) {
    pixel(x, y, false);
}

function pixel(x, y, mode) {
    swapToGraphicScreen();
    plots.push([x, y]);
    if (plots.length > 2) {
        plots.shift();
    }
    letvar("A_24", x);
    letvar("A_25", y);
    if (mode) {
        setPixelOn(x, y);
    } else {
        setPixelOff(x, y);
    }
}

function range(xmin, xmax, xscl, ymin, ymax, yscl) {
    this.xmin = xmin;
    this.xmax = xmax;
    this.xscl = xscl;
    this.ymin = ymin;
    this.ymax = ymax;
    this.yscl = yscl;
}

function xtoR(x) {
    return ((x - this.xmin) * (this.casioScreenW - 1) / (this.xmax - this.xmin)) + 1;
}

function ytoR(y) {
    return ((this.casioScreenH - 1) - ((y - this.ymin) * (this.casioScreenH - 1) / (this.ymax - this.ymin)) + 1);
}

function fline(x1, y1, x2, y2) {
    plotOn(x1, y1);
    plotOn(x2, y2);
    line();
}

function horizontal(y) {
    bline(this.xmin, ytoR(y), this.xmax, ytoR(y));
}

function vertical(x) {
    bline(xtoR(x), this.ymin, xtoR(x), this.ymax);
}

function line() {
    bline(xtoR(plots[0][0]), ytoR(plots[0][1]), xtoR(plots[1][0]), ytoR(plots[1][1]));
}

// Reset all vars to 0
function mcl() {
    for (i = 0; i < v_values.length; i++) {
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

