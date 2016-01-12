var TEXT_SCREEN_WIDTH = 21;
var TEXT_SCREEN_HEIGHT = 7;

var DEG = 1;
var RAD = 2;
var GRAD = 3;

var angleMode = DEG;

var casioFont = new Image();
casioFont.src = "data:image/gif;base64,R0lGODlhAAYIAKEBAAQEBP///////////yH5BAEKAAIALAAAAAAABggAAAL+DH6GoNi5WHxy0Tuz1Y7DDXbhJ5bkWZkpegXu6zKvNBuwDN95stf5DwwKd7zYjTfxJRUxS2NWHOqCuCbOYbVekUWPDHvNQmnGqq2s5HbV2++mFo7D4U4s0H6mmqdSo3Dv1yOY19RneIiYqAjlw/Q3suIm2SaGMcK4iLiHV0XzpRVpqdIC1kj1AHpX18biJdoKaej6RLo2Cch3hGezlKkZ6xq8SjeWKjx6DIvsRLTsrAwdmiwNXP1Mff2KHa2aPa2dR8Y7h1Y+bi6eHr4uh85Ofh6v3i7/7k4/D49LmF8sZwZwUKCBvuo5WmcKyQ9c/c5EiULoTqOGFB0SDOiOoMX+jYwg6LNXL0wgfCDVTel0ytzCIftWngLUMmWugjRj0pR58c/HOJ8U+iTzsNMnnDIxzgyIshxJnkxE9vTzgaUShIOAjixJVeo9UzozWh24KatElxFN3uyzdKdapYWmYk27NW7ItXPlVoRbN+9dunvtvuX79+pVvH31BjZM+HDhxYobJ378ESfQOmPFla1ssCZUkVV1TNIINXLQXL2GjutAd7DAy4JPivXkiDE9PonztgZtep/QnpQKSSKNeg0Rt+Gs2tIyhjdyWo+flmFmFKxfpryUY6pwJHv1sC1Yvzrag/M/j57IE78MW/hUpgqTq57uHDHXoghLbRb6HiVMOrD+b9v5X1xvkE1HjmnFOAbYgIado6BsCT5IYITySehgRp01iCCFGU7IYYUdbughY0SFp510WlXFBkzMkNVfRKwZ+NxDuriHliaulWdCTjF+tl133Mno2Wkh2bddb63lY5aOGnGnmU+CeHTfYLmxyM8c2H140H7vZdaFiQfpgYZsl3z5ExvLZUkZZ6SN5d1CSVXXFDEGlYLac2yJ4ZRRQ2HYlkW1uTmlmhOBVpdTbCKVBllbRodhbV1ipmGjEFIlaaSThghippUi9oalnn64KaahanopqRYq2gxEBra42khA9imLdoLu1wuXg56EX0IrvpnCYVsqaZahmeXXUJjx0Db+6D9+rjmTkot0eiw70OkSLIt6CnnPf0RWQilbSZK52rUc3WXdlW2ZSyZATE7mDZ2tdtVjekIKG1pgatJrYqCAXaTvqS5iRSUtzPFXpHhcVXugwNoKWOqfUjwKasOlMijxp6JWHLHFpv47ascYX6yxxyF/LJaNDN9JlLLOunnwrV4mRdKRtEX3b7MtRwjjtQbXu+eFqW3Us8yhuRGn0DZXmcmmNiM8LtLz/uzaoQw615+qzdKsW4Llxlb0aJh8LZ1NAuUa7YlIwjnnnXDde147/S5o9aKvSS3obfBaxq/LyHoJHrJvg1zzwySLnHHhgB++MeKjykz4PNZw803kj2/ZQzk4kreLOTcjBnl00fS9O99wjwi4ip7H6brFiZ0zOfCOBy4MJbX1qSdtnXO2l51JnMzoMtNJ7MI7oBC5B50tv6EumLZRu6s77i7tZnpWX0WVHNmpjw45b6fDjm5Qw28GDpsJJXK55vZByUXCHFTfZ/mTpZsNt+zXmgpa0M7MiopgnC6wq6RnXjn6yWJyliOg+7qRPQAWUIEHbKABH6hA4QUQgiw4iwUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IQxMWAAA7";

var casioFontGfx = new Image();
casioFontGfx.src = "data:image/gif;base64,R0lGODlhAAYIAIABAAQEBP///yH5BAEKAAEALAAAAAAABggAAAL+DH6GoNi5WHxy0Tuz1Y7DDXbhJ5bkWZkpegXuy7yuBBtyLN95stf5DwwKb7wZEecwIovJBoxZHPaCuBkUSdwtj88q02atgsExMRY7VmjL5uW5hrbRlN06NSr+4XXSdN4bNxSo1ldoSGh0qCj1ZSU4ssIm6RbWxWLhuKj4twdHFnYJiYGZNKj3AJrXchWqMurqoaon6rR6lcoINKGzq7kY+9rKglhhB3wsigxLuyYcGfys7AxNLR2djL2sPT27fe2N4Uk3LideTj53rp7OPtb+hu4uD78+b/5+bx9/2kPv9GZmio+BiXzxcvdHYDs++fzhCShoID56AQdBNJem4ML+J2p40KDoyZQXffb8yWPIMJ0ufhkRafRzsKDMlQI7kvPTBk6ZNQ0l1qOEMqMsku92eiRUjE0Wji0JUnGaMKhKeCDPJPVhNNGHiFpPKvxENGyfqk6f7psTKKGpmj5jNjXI9WfPeFQzdQ1Llu5cuXr78v2Lz29gwHj3Dj5cWHBir3kJN0b8eDFkw5IrR75MGfPMzWhJ0ZzKtuvGbmNvAgJaK3UTjbeY2sW5eiedEq6FIkTNrlPKkQc/ltsS0qXtzGChBm051KzdJm1wP6ytHHRwCIqBGycu2zTLmbwnKzEKfmmx2kdXa8U0PJjUfm1/U//4Hut631D4FEV6JLt3OVn+q5elWU8taMSmX3HqpPQPY1xUgk5rmjkmTnbGEOdfhYSd8+B+GlpGIYQWbpihVwiGSGKHIJrI4Ycpesjihr5Mxdtmod2Gi0EOHZfeSzEe+BaApclHXz5uXeQXTCCN6MhoYKkEE3YH7tgUkb+IJeRxR95DZJCfWLecjyOR5RtBnDCSFYgjvFZeKWrWV6OSMqlikRC6JXVfgKUk+N04QA14kWwhdtniHQWuNeBTdd311ZCvcVflmyhGRoxZJar4p4KTBnrpiZQ+yildG3SKKaiahrppqaSe6uKM+UH05Vtw2vFmctsx11pqrKEGG6wu6daCo9+FKRybDCJHEa9+NmL+p5VaBrsgo/3FiitPgj4C3XPkLbUPSrkBVByUL2ErEa8YimhrjicN2lB4/Im3KyBasNQZOJ5JGVcKv927UHc6RiimfNoimmpOleF4JYKqHfUrf8y1l+1psNK6p6hUkulTpisiNq6po258cccWWwyvxxJ/PHLJGot88lqFbLtvj+kBSy+2ssJF81hSyjrUzDXvzHPPPv8MdNBCD0100ebmnJm6413VLrjMYrSytibVW9K6yWacV1r+toyuYk8P/F/BDMsJtVBxvPqtjDfzm3Kjh5Dcdtyoojw33HVLnDbHl2UzjTXV8P1N34D/Le/gfvcyZcxJUq2qjE4bDTnaPkKCC3nlll+Oeeaab145slF0I/ive7IyHprmYRW4LFE5Lqjg4Ai4OFLO0damG65T19Fp3JSLC+KW6JwBgBB/XvvsCjloePKnr6z87akTTjz0zx/e/PTVS4899YUvr73zvXIOfvjij09++eafj3766q/Pfvvuvw9//PLPT3/99t+P//wFAAA7";

var gfxFontSize = "4444444444444444444444444444444442444444444444444444444444444444444444444445466446444446444444444444444442444654445444464444444";

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

    if ((e.keyCode == 8 || e.keyCode == 46) && editMode && currentLineBuffer.length > 0) {
        currentLineBuffer = currentLineBuffer.substring(0, currentLineBuffer.length - 1);
        cursorMode = " ";
        clignoteCurseur(); // Clear old position
        drawTextLine(textScreenLines.length, currentLineBuffer + " ");
        cursorCol--;
        cursorMode = "_";
        clignoteCurseur(); // Cursor at new pos
    }

    if (e.keyCode == 13 && editMode) { // 13 is "ENTER / CARRIAGE RETURN"
        doPrevent = true;
        editModeOff();
        unpauseProgramExec();
    }

    if (e.keyCode == 13 && dispMode) { // 13 is "ENTER / CARRIAGE RETURN"
        doPrevent = true;
        dispModeOff();
        unpauseProgramExec();
    }

    if (doPrevent) {
        event.preventDefault();
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
    console.log("dispModeOn");
    paused = true;
    dispMode = true;
    currentLineBuffer = "";
    print("            __Disp__");
}

function dispModeOff() {
    console.log("dispModeOff");
    dispMode = false;
    textScreenLines.pop();
    redrawAllTextScreen();
}

function editModeOn() {
    console.log("editModeOn");
    editMode = true;
    currentLineBuffer = "";
    print("");
    currentLineIndex = textScreenLines.length - 1;
    cursorLine = textScreenLines.length;
    cursorCol = 1;
    idTimerCursor = setInterval('clignoteCurseur()', 500);
}

function editModeOff() {
    console.log("editModeOff");
    editMode = false;
    if (currentLineBuffer == "") { // If line is empty when exit edit mode, remove line from textscreenline
        textScreenLines.pop();
    } else {

    }
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

function calcHandleOnKeyPress(e) {
    if (editMode) {
        var charCode = e.charCode;
        if (charCode == 46 || (charCode >= 48 && charCode <= 57)) {
            var currentLineIndex = textScreenLines.length - 1;
            if (currentLineBuffer !== null && currentLineBuffer.length < 20) {
                currentLineBuffer += String.fromCharCode(charCode);
                textScreenLines[currentLineIndex] = currentLineBuffer;
                drawTextLine(currentLineIndex + 1, currentLineBuffer);
                cursorCol += 1;
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
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(1, 1, 127, 63);
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
    console.log("cleartext called !");
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
    var charW = 6;
    var charH = 8;
    swapToGraphicScreen();
    for (var i = 0; i < str.length; i++) {
        ctx.drawImage(casioFontGfx, str.charCodeAt(i) * charW, 0, charW, charH, x, y, charW, charH);
        x += parseInt(gfxFontSize[str.charCodeAt(i)]); // add witdh of char which has just been drawn (variable font width)
    }
}

var plots = Array();
var xmin = 1;
var xmax = 127;
var xscl = 0;
var ymin = 1;
var ymax = 63;
var yscl = 0;

function getPixelColor(x, y) {
    console.log("getPixelColor " + x + " " + y);
    var imgd = ctx.getImageData(x * gtm.a + gtm.e, y * gtm.d + gtm.f, 1, 1);
    var pix = imgd.data;

    if (pix[0] == 255 && pix[1] == 255 && pix[2] == 255) {
        return "white";
    }

    if (pix[0] == 0 && pix[1] == 0 && pix[2] == 0) {
        return "black";
    }

    return ""; // undefined
}

function setPixelOn(x, y) {
    setPixel(x, y, "black");
}

function setPixelOff(x, y) {
    setPixel(x, y, "white");
}

function setPixel(x, y, color) {
    x = Math.round(x);
    y = Math.round(y);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
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
    if (color == "black") {
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
    if (color == "black") {
        return 1;
    } else {
        return 0;
    }
}

function pixelChg(x, y) {
    var color = getPixelColor(x, y);
    if (color == "black") {
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
