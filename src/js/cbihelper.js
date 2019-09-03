var TEXT_SCREEN_WIDTH = 21;
var TEXT_SCREEN_HEIGHT = 7;

var MONO_BLUE = [0x39, 0x43, 0xCE];
var MONO_GREEN = [0xBD, 0xDE, 0xCE];

var BLACK = [0x04, 0x04, 0x04];
var WHITE = [0xFF, 0xFF, 0xFF];

var BLUE    = [0x2C, 0x00, 0xFF];
var RED     = [0xFE, 0x00, 0x00];
var CYAN    = [0x00, 0xFF, 0xFE];
var YELLOW  = [0xFD, 0xFE, 0x00];
var MAGENTA = [0xFF, 0x00, 0xFD];
var GREEN   = [0x00, 0xFF, 0x00];  

var MONO_NB_COLOR = [WHITE, BLACK];
var MONO_BLUEGREEN_COLOR = [MONO_GREEN, MONO_BLUE];
var POLY_COLOR = [WHITE, BLACK, BLUE, RED, MAGENTA, GREEN, CYAN, YELLOW];

var COLOR_NAMES = {
  "White" : 0,
  "Black" : 1,
  "Blue" : 2,
  "Red" : 3,
  "Magenta" : 4,
  "Green" : 5,
  "Cyan" : 6,
  "Yellow" : 7
  // 8: White
  // 9: Auto
  // A: Clear
}

var currentMenu;
var menuActive = false; // At start non menu is currently active

// plotDefsXXXX[0] - first array, giving size of the plot
// plotDefsXXXX[1][0] - give integers where we should plot when doing a : 'pxlIndex % (size plotDefsXXXX[1][0] + size plotDefsXXXX[1][1])'
var plotDefsLowRes = {
  "SketchThin" : [1, [[0], []]],
  "SketchNormal" : [1, [[0], []]],
  "SketchThick" : [2, [[0], []]],
  "SketchDot" : [1, [[0], [1]]],
  "SketchBroken" : [2, [[0], [1,2]]],
}

var plotDefsHiRes = {
  "SketchThin" : [1, [[0], []]],
  "SketchNormal" : [3, [[0], []]],
  "SketchThick" : [5, [[0], []]],
  "SketchDot" : [3, [[0], [1,2,3,4,5]]],
  "SketchBroken" : [3, [[0,1,2,3], [4,5,6,7,8]]],
}

var plotDefs;

var currentPalette = POLY_COLOR;
var currentDrawColorIdx;
var currentSketchMode;
var angleMode;

var DEG = 1;
var RAD = 2;
var GRAD = 3;

var casioFontSrc = "data:image/gif;base64,R0lGODlhAAYIAKEBAAQEBP///////////yH5BAEKAAIALAAAAAAABggAAAL+DH6GoNi5WHxy0Tuz1Y7DDXbhJ5bkWZkpegXu6zKvNBuwDN95stf5DwwKd7zYjTfxJRUxS2NWHOqCuCbOYbVekUWPDHvNQmnGqq2s5HbV2++mFo7D4U4s0H6mmqdSo3Dv1yOY19RneIiYqAjlw/Q3suIm2SaGMcK4iLiHV0XzpRVpqdIC1kj1AHpX18biJdoKaej6RLo2Cch3hGezlKkZ6xq8SjeWKjx6DIvsRLTsrAwdmiwNXP1Mff2KHa2aPa2dR8Y7h1Y+bi6eHr4uh85Ofh6v3i7/7k4/D49LmF8sZwZwUKCBvuo5WmcKyQ9c/c5EiULoTqOGFB0SDOiOoMX+jYwg6LNXL0wgfCDVTel0ytzCIftWngLUMmWugjRj0pR58c/HOJ8U+iTzsNMnnDIxzgyIshxJnkxE9vTzgaUShIOAjixJVeo9UzozWh24KatElxFN3uyzdKdapYWmYk27NW7ItXPlVoRbN+9dunvtvuX79+pVvH31BjZM+HDhxYobJ378ESfQOmPFla1ssCZUkVV1TNIINXLQXL2GjutAd7DAy4JPivXkiDE9PonztgZtep/QnpQKSSKNeg0Rt+Gs2tIyhjdyWo+flmFmFKxfpryUY6pwJHv1sC1Yvzrag/M/j57IE78MW/hUpgqTq57uHDHXoghLbRb6HiVMOrD+b9v5X1xvkE1HjmnFOAbYgIado6BsCT5IYITySehgRp01iCCFGU7IYYUdbughY0SFp510WlXFBkzMkNVfRKwZ+NxDuriHliaulWdCTjF+tl133Mno2Wkh2bddb63lY5aOGnGnmU+CeHTfYLmxyM8c2H140H7vZdaFiQfpgYZsl3z5ExvLZUkZZ6SN5d1CSVXXFDEGlYLac2yJ4ZRRQ2HYlkW1uTmlmhOBVpdTbCKVBllbRodhbV1ipmGjEFIlaaSThghippUi9oalnn64KaahanopqRYq2gxEBra42khA9imLdoLu1wuXg56EX0IrvpnCYVsqaZahmeXXUJjx0Db+6D9+rjmTkot0eiw70OkSLIt6CnnPf0RWQilbSZK52rUc3WXdlW2ZSyZATE7mDZ2tdtVjekIKG1pgatJrYqCAXaTvqS5iRSUtzPFXpHhcVXugwNoKWOqfUjwKasOlMijxp6JWHLHFpv47ascYX6yxxyF/LJaNDN9JlLLOunnwrV4mRdKRtEX3b7MtRwjjtQbXu+eFqW3Us8yhuRGn0DZXmcmmNiM8LtLz/uzaoQw615+qzdKsW4Llxlb0aJh8LZ1NAuUa7YlIwjnnnXDde147/S5o9aKvSS3obfBaxq/LyHoJHrJvg1zzwySLnHHhgB++MeKjykz4PNZw803kj2/ZQzk4kreLOTcjBnl00fS9O99wjwi4ip7H6brFiZ0zOfCOBy4MJbX1qSdtnXO2l51JnMzoMtNJ7MI7oBC5B50tv6EumLZRu6s77i7tZnpWX0WVHNmpjw45b6fDjm5Qw28GDpsJJXK55vZByUXCHFTfZ/mTpZsNt+zXmgpa0M7MiopgnC6wq6RnXjn6yWJyliOg+7qRPQAWUIEHbKABH6hA4QUQgiw4iwUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IQxMWAAA7";
var casioFontHiSrc = "data:image/gif;base64,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";
var casioFontGfxSrc = "data:image/gif;base64,R0lGODlhAAYIAKECAAQEBP///v///////yH5BAEKAAIALAAAAAAABggAAAL+DH6GoNi5WHxy0Tuz1Y7DDXbhJ5bkWZkpegXuy7yuBBtyLN95stf5DwwKbwmBwBYwOpRFAY3JgCadzSU1ehzqgrgZr+FjuoyKKU+KPlZt6ZnZ7Xwpa7hYTDwFl/PVNfYZ5wY42Ne184UkhHgXmCeXhYVExqb29zhmBPmGeZYl5OmIKTMpV0bGOApKCrTaSuSzxzWyYsdj4VVbN/sAY6j1++PrAGtDg+RBi7GrV6e1govYO/yFrKxizTLxW818O9z9zQWkTXcLfC57Xb3u3Uxtu8uuHk9/HVyfjZ8snz/v3w9wnz5sAv/5IoiQ3z46DAU1LPbQGESHFCdalIgxUUb+dxE1euRYcWNHkBc9BjtJEgxHQyx7bCGGDiWlTnA0zbHE6dGgmZRi+Uwkzk1IiDc3vcFpdE7OSKh43sEh5oNDS0hpID219KhRq1onIRXq0uK4k0r5RHLKJ2vZOZlUNcJqxpgxNZxQ+YkC9UrXOFWJ8o0bBWbLoCXd2dlTQZDcLosOE1Yk+OTLih/BilRcptmxzZkPwjqsOaxcy5WHbhsJk3DGiaGBmoYs2fXqmLRJk7xcuGGtLY5zD71d2rdw3MSDFweOHPVv5cONO0++PLrJ58yPV6cu3Xp27M2hd7/uXXvJ2Lq9jRU72CVXsPc88+7JyIr8QoAd/aF/ijFjIuH+elslEVdOaumVBiFMiTITVHlxxWCCWSWWVoRFTfiXY3Bd2Ehq7j2G31sEfmiFKVQg2FZNgEhSYWZJ7ERVgGOgiCKLWln414WRTQYaeKDt+Eox+vWYgmTkpOfBZLJNtxIEEHVg0n46MKjLe4Yhxp9/3EEo3mxDAMeMD/1Z2ZtYn6mEJH/SRPQOmOCtyZmZV74Z3pussfnddnHeSWeWcObpXGx64mknn4DWSeifgh4a6Gu0SeSTk7CJBk84izKEYV41XYpWpT1tuiU6TjbY4lo1erhgpnTtNVepFCl5VSA5eiXhqDJypamAYbE3aaik8iRKU7piQSFN8S0JByG9fmX+06nBokWrsm954UyOf44AbS+KRZpLlNDkiCt7B7XmWo+2JTbleNOQidmcuJD2k2ZqblftZnGOY0tHfnYbnbvnHemuMKJN5y2izcXi2buF7plomQkbujDCBw/K8MMjbSBwxBY7fDHEGG+s8by30itpmOuR99ki4gKj330q1wdrgU3E2GGjjrYQ8LV+CXtfXa2KaGCsh4Fo77DHEotHpS/bJa/P9KWjSDSHuJifWVIbPSCwzvZc1GhXX8LrGDQleGBar5JaxI1jtnkcjz4CKfPJP5WmEC9ibvgvk6Ca+x52remLo1Aa41ovvKn1+a8eXdqcDLv8nr1u44Z/c27DHkf+O2bHFfc5muSXW6555xJ7rmXlm48OOsekf456xvbWhlHg6j5WGbgbUvOJW6nczjWCuofCe9RG0u2ee63YnnvvxO8+fA7HA5N87bgjv/wPze9eW23TG/889lyXWPz1rGTv/fLXryK9+Gbja9vE6WKpYtvWur0f3eT9SJkzqP1nGrcGZw4U3+mjLadohKY4RvpfuAD2KEYBboD72tu+AKeb04XuHJxLnelKV0HVYVCCFxxPmTL4nIHEbYQiLKFBEmLCgKDwhOTI1cdeMTsNdWpLwmuLDW+IwxzqcIc7fODgupUyTPBwiEQsohGPiMQkKlGJ1aPNEp8IxShKcYpLFJelttKhwnqZYxppksr7oBEUFfqwfzEh4QkPpyTE6GKNANpWvMyYRi+6kRuGq1LiDiEpLCrQMl38VjvWeKaXQA5bBcniMhaVwkIqcoUsaI8hWZhIRi4SjpOMJCUR4shKQtIeTeykJz8JylCKcpSkLKUpf0HFVOLwlFpQpStfCctY3pCVqZClLW+JSyPScpe87KUvfwnMYApzmMQspjGPicxkKnOZzCwAADs=";
var casioFontGfxHiSrc = "data:image/gif;base64,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";

var txtCharW, txtCharH;
var picts = [];

/*
Pour chaque palette, creer les 4 fonts pour chaque couleurs
*/
function makeFonts(palette) {
  var fontsForThePalette;

  var casioFontByColor = [];
  var casioFontHiByColor = [];
  var casioFontGfxByColor = [];
  var casioFontGfxHiByColor = [];

  for (var i=1; i<palette.length; i++) {
    casioFontByColor.push(getNewImage(casioFontSrc, palette[i], palette[0]));
    casioFontHiByColor.push(getNewImage(casioFontHiSrc, palette[i], palette[0]));
    casioFontGfxByColor.push(getNewImage(casioFontGfxSrc, palette[i], palette[0]));
    casioFontGfxHiByColor.push(getNewImage(casioFontGfxHiSrc, palette[i], palette[0]));
  }

  fontsForThePalette = [casioFontByColor, casioFontHiByColor, casioFontGfxByColor, casioFontGfxHiByColor];
  return fontsForThePalette;
}

var MONO_NB_COLOR_fonts = makeFonts(MONO_NB_COLOR);
var MONO_BLUEGREEN_COLOR_fonts = makeFonts(MONO_BLUEGREEN_COLOR);
var POLY_COLOR_fonts = makeFonts(POLY_COLOR);

var fonts = POLY_COLOR_fonts; // default
var currentFontDeltaIndx;

var gfxCharW, gfxCharH;

var gfxFontSize = "4444444444444444444444444444444442444444444444444444444444444444444444444445466446444446444444444444444442444654445444464444444";
var gfxFontSizeHi = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
var currentGfxFontSize;

var nextLine = NaN; // index in the programLines array

var textScreenLines = new Array();
var idTimerMain = 0;
var currentLineBuffer = null;

var casioScreenW, casioScreenH, plotSize; 
var c1, c2, c3, ctx1, ctx2, ctx3, c, ctx;
var zoomW, zoomH, dx, dy;
var currentRes, currentColorSchemeName;

function selectResolution(res) {
  setRes(res);
}

function setRes(res) {
  currentRes = res;

  c1 = document.getElementById("canvas1");
  c2 = document.getElementById("canvas2");
  c3 = document.getElementById("canvas3");

  
  ctx1 = c1.getContext("2d");
  ctx2 = c2.getContext("2d");
  ctx3 = c3.getContext("2d");

  c = c1;
  ctx = ctx1;

  if (res == "low") {
    //currentFont = casioFont;
    //currentFontGfx = casioFontGfx;
    currentFontDeltaIndx = 0;
    casioScreenW = 127;
    casioScreenH = 63;
    plotSize = 1;
    txtCharW = 6;
    txtCharH = 8;
    gfxCharW = 6;
    gfxCharH = 8;
    currentGfxFontSize = gfxFontSize;
    plotDefs = plotDefsLowRes;
  } else if (res == "hi") {
    //currentFont = casioFontHi;
    //currentFontGfx = casioFontGfxHi;
    currentFontDeltaIndx = 1;
    casioScreenW = 379;
    casioScreenH = 187;
    plotSize = 3;
    txtCharW = 16;
    txtCharH = 22;
    gfxCharW = 12;
    gfxCharH = 14;
    currentGfxFontSize = gfxFontSizeHi;
    plotDefs = plotDefsHiRes;
}

  zoomW = Math.round(c.width  / casioScreenW);
  zoomH = Math.round(c.height / casioScreenH);

  c1.width = zoomW * casioScreenW;
  c1.height = zoomH * casioScreenH;
  c2.width = zoomW * casioScreenW;
  c2.height = zoomH * casioScreenH;
  c3.width = zoomW * casioScreenW;
  c3.height = zoomH * casioScreenH;

  dx = -1;
  dy = -1;

  prepareDisplay(ctx1);
  prepareDisplay(ctx2);
  prepareDisplay(ctx3);

  // Efface ecran texte
  clrtext();

  // Efface ecran graphique
  cls();
}

function chooseColorScheme(colorSchemeName) {
  currentColorSchemeName = colorSchemeName;
  var oldPalette = currentPalette;
  if (colorSchemeName == "black&white") {
    currentPalette = MONO_NB_COLOR;
    currentDrawColorIdx = 1;
    fonts = MONO_NB_COLOR_fonts;
  } else if (colorSchemeName == "blue&green") {
    currentPalette = MONO_BLUEGREEN_COLOR;
    currentDrawColorIdx = 1;
    fonts = MONO_BLUEGREEN_COLOR_fonts;
  } else if (colorSchemeName == "multicolor") {
    currentPalette = POLY_COLOR;
    currentDrawColorIdx = getColorIndexFromColorName("Blue");
    fonts = POLY_COLOR_fonts;
  }

  for (var i = 0; i < oldPalette.length; i++) {
    var destColor = (i < currentPalette.length) ? currentPalette[i] : currentPalette[currentPalette.length - 1]; // new palette may have fewer colors
    swapColor(ctx1, oldPalette[i], destColor);
    swapColor(ctx2, oldPalette[i], destColor);
  }

  c3.style.backgroundColor = "rgb("+currentPalette[0][0]+","+currentPalette[0][1]+","+currentPalette[0][2]+")";

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


function merge(imgDataForeground, imgDataBackground) {
    var returnImageData = ctx.createImageData(imgDataForeground.width, imgDataForeground.height);
    for(var i = 0; i < imgDataForeground.data.length; i += 4) {
        if (imgDataForeground.data[i+3] == 255) { // 1er plan opaque
            returnImageData.data[i] = imgDataForeground.data[i];
            returnImageData.data[i+1] = imgDataForeground.data[i+1];
            returnImageData.data[i+2] = imgDataForeground.data[i+2];
            returnImageData.data[i+3] = imgDataForeground.data[i+3];
        } else {
            returnImageData.data[i] = imgDataBackground.data[i];
            returnImageData.data[i+1] = imgDataBackground.data[i+1];
            returnImageData.data[i+2] = imgDataBackground.data[i+2];
            returnImageData.data[i+3] = imgDataBackground.data[i+3];
        }
    }
    return returnImageData;
}

function getNewImage(imgSrc, fgColor, bgColor) {
  String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
  }

  var imageData = imgSrc;
  var binaryImageData = atob(imageData.replace(/^data:image\/(gif|png|jpeg|jpg);base64,/, ''));

  // Replace color #0
  binaryImageData = binaryImageData.replaceAt(13, String.fromCharCode(fgColor[0]));
  binaryImageData = binaryImageData.replaceAt(14, String.fromCharCode(fgColor[1]));
  binaryImageData = binaryImageData.replaceAt(15, String.fromCharCode(fgColor[2]));

  // Replace color #1
  binaryImageData = binaryImageData.replaceAt(16, String.fromCharCode(bgColor[0]));
  binaryImageData = binaryImageData.replaceAt(17, String.fromCharCode(bgColor[1]));
  binaryImageData = binaryImageData.replaceAt(18, String.fromCharCode(bgColor[2]));

  var newImg = new Image();
  newImg.src = "data:image/gif;base64," + btoa(binaryImageData);
  return newImg;
}

function getColorIndexFromColorName(colorName) {
  var colorIndex = COLOR_NAMES[colorName];
  return (colorIndex < currentPalette.length) ? colorIndex : currentPalette.length - 1;
}

function cbiInit() {

    reverseKeyCode();

    if (window.addEventListener){
        window.addEventListener("keydown", calcHandleOnKeyDown, false);
        window.addEventListener("keyup", calcHandleOnKeyUp, false);
    } else if (window.attachEvent){ // IE sucks !
        window.attachEvent("keydown", calcHandleOnKeyDown, false);
        window.attachEvent("keyup", calcHandleOnKeyUp, false);
    }

    setRes('hi');

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

    if (menuActive) {
        if (e.key == 'ArrowDown') {
            menuScrollDown(); redrawMenu();
        }
        if (e.key == 'ArrowUp') {
            menuScrollUp(); redrawMenu();
        }
        if (e.key == "Enter") {
            MenuOff();
        }
    }

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
    idTimerMain = setTimeout('executeNextStmt()', currentExecutionTimeout);
}

function MenuOn(titre, options, labels, currentSelection) {
    menuActive = true;
    paused = true;

    currentMenu = {
        "titre": titre,
        "options": options,
        "labels": labels,
        "currentSelection": currentSelection,
        "currentFirstLine": 1,
    }

    // 1 sauve l'image
    swapToTextScreen();
    var imgData = ctx1.getImageData(0, 0, c1.width, c1.height);
    currentMenu.imgData = imgData;
    redrawMenu(currentMenu);
}

function MenuOff() {
    ctx.putImageData(currentMenu.imgData, 0 , 0);
    menuActive = false;
    nextLine = programs[currentPrgName]['labels'].get("LBL_" + currentMenu.labels[currentMenu.currentSelection-1]);
    unpauseProgramExec();
}

function menuScrollUp() {
    if (currentMenu.currentSelection > 1) {
        currentMenu.currentSelection--;
    }
    // Scroll up if necessary ...
    if (currentMenu.currentSelection < currentMenu.currentFirstLine) {
        currentMenu.currentFirstLine--;
    }
}

function menuScrollDown() {
    if (currentMenu.currentSelection < currentMenu.options.length) {
        currentMenu.currentSelection++;
    }
    // Scroll down if necessary ...
    if (currentMenu.currentSelection > currentMenu.currentFirstLine + (getMaxNbOfMenuLine()-1)) {
        currentMenu.currentFirstLine++;
    }
}

function getMaxNbOfMenuLine() {
    return (currentRes == "hi") ? 6 : 5;
}

function redrawMenu() {
    var titleFirstLine = 1.6;
    var optionsFirstLine = 2.8;
    var maxNbOfLine = getMaxNbOfMenuLine();
    var widthInNbOfChar = (currentRes == "hi") ? 20 : 18;
    var nbLine = Math.min(maxNbOfLine, currentMenu.options.length);

    // Draw a frame
    ctx.clearRect(txtCharW*2 - 2, txtCharH*0.6 - 2, txtCharW*widthInNbOfChar+4, txtCharH*(nbLine+1)+9); // x,y, largeur, hauteur
    ctx.beginPath();
    ctx.rect(txtCharW*2 - 2 , txtCharH*0.6 -2, txtCharW*widthInNbOfChar+4, txtCharH*(nbLine+1)+9); // x,y, largeur, hauteur
    ctx.stroke();

    // Title
    var titre = currentMenu.titre.substring(0,widthInNbOfChar);
    var padLeft = Math.floor((widthInNbOfChar-titre.length)/2);
    drawTextLine(titleFirstLine, titre.substring(0,widthInNbOfChar), 2 + padLeft);

    // Options
    for (i = 0; i < nbLine; i++) {
       drawTextLine(optionsFirstLine + i, ("  "+currentMenu.options[i + currentMenu.currentFirstLine - 1]),2);
    }

    // Draw a ">" on current selected option
    drawTextLine(optionsFirstLine + (currentMenu.currentSelection - currentMenu.currentFirstLine), ">", 2);

    // Draw an arrow down or up
    if (currentMenu.currentFirstLine > 1) { drawTextLine(optionsFirstLine + 0, "^", 2 + widthInNbOfChar-1); }
    if (currentMenu.currentFirstLine + (getMaxNbOfMenuLine()-1) < currentMenu.options.length) { drawTextLine(optionsFirstLine + nbLine - 1, "v", 2 + widthInNbOfChar-1); }

}


function clearBackground() {
    ctx3.clearRect(1, 1, casioScreenW, casioScreenH);
}

function preset() {
    Ans = 0;
    ListAns = [];
    MatAns = [];
    currentDrawColorIdx = getColorIndexFromColorName("Blue");
    currentSketchMode = "SketchNormal";
    angleMode = DEG;
    cls();
    clearBackground();
}

function reset() {
    editMode = false;
    paused = false;
    menuActive = false;
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
    var charW = txtCharW; //6;
    var charH = txtCharH; //8;
    var y = (cursorLine - 1) * charH + 1;
    var x = (cursorCol - 1) * charW + 1;
    ctx1.drawImage(fonts[currentFontDeltaIndx][0], 1 + cursorMode.charCodeAt(0) * charW, 0, charW, charH, x, y, charW, charH);
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
function clearDisplay(isGraphicScreen) {
    if (isGraphicScreen) {
        ctx.clearRect(1, 1, casioScreenW, casioScreenH);
    } else {
        ctx.fillStyle = getFillStyleFromColor(currentPalette[0]);
        ctx.fillRect(1, 1, casioScreenW, casioScreenH);
    }
}

//Interpreting functions

function cls() {
    swapToGraphicScreen();
    clearDisplay(true);
    drawAxes();
}

function clrtext() {
    swapToTextScreen();
    clearDisplay();
}

function drawAxes() {
    if (!showAxes) return;
    var prevDrawColor = currentDrawColorIdx;
    var oldPlotSize = plotSize;
    plotSize = 1;
    currentDrawColorIdx = getColorIndexFromColorName("Black");
    horizontal(0);
    vertical(0);
    plotSize = oldPlotSize;
    currentDrawColorIdx = prevDrawColor;
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

function drawTextLine(lineNb, str, deltaCol) {
    if (deltaCol == undefined) { deltaCol = 0 }
    var charW = txtCharW; //6;
    var charH = txtCharH; //8;
    var y = (lineNb - 1) * charH + 1;
    var x = 0;
    str = str.substring(0, 21); // 21 first char
    for (var i = 0; i < str.length; i++) {
        x = (i + deltaCol) * charW + 1;
        ctx.drawImage(fonts[currentFontDeltaIndx][0], 1 + str.charCodeAt(i) * charW, 0, charW, charH, x, y, charW, charH);
    }
}

function imgLoaded(imgElement) {
  return imgElement.complete && imgElement.naturalHeight !== 0;
}

function addLoadEvent(obj, func) {
  var oldonload = obj.onload;
  if (typeof obj.onload != 'function') {
    obj.onload = func;
  } else {
    obj.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function drawTextGfx(y, x, str, color) {
    var srcCharW = gfxCharW; //6;
    var charH = gfxCharH; //8;
    swapToGraphicScreen();
    for (var i = 0; i < str.length; i++) {
        var charW = parseInt(currentGfxFontSize[str.charCodeAt(i)], 16);
        ctx.drawImage(fonts[2+currentFontDeltaIndx][currentDrawColorIdx-1], 1 + str.charCodeAt(i) * srcCharW, 0, charW, charH, x, y, charW, charH);
        x += charW; // add witdh of char which has just been drawn (variable font width)
    }
}

var plots = Array();

var _XMIN_ = -6.3;
var _XMAX_ = 6.3;
var _XSCL_ = 1;
var _YMIN_ = -3.1;
var _YMAX_ = 3.1;
var _YSCL_ = 1;

var xmin = _XMIN_;
var xmax = _XMAX_;
var xscl = _XSCL_;
var ymin = _YMIN_;
var ymax = _YMAX_;
var yscl = _YSCL_;

var showAxes = false; // false by default but should be a configurable option
var showLabel = false; // false by default but should be a configurable option

function setShowAxes(show) {
    showAxes = show;
    debug("showAxes = "+(showAxes?'true':'false'));
}

function setShowLabel(show) {
    showLabel = show;
    debug("showLabel = "+(showLabel?'true':'false'));
}

function getPixelColor(x, y) {
    var imgd = ctx2.getImageData(x * gtm.a + gtm.e, y * gtm.d + gtm.f, 1, 1);
    return imgd.data;
}

function setPixelOn(x, y, plotSize) {
    setPixel(x, y, currentPalette[currentDrawColorIdx], plotSize);
}

function setPixelOff(x, y, plotSize) {
    setPixel(x, y, BACKGROUND_COLOR, plotSize);
}

function setPixel(x, y, color, plotSize) {
    x = Math.round(x);
    y = Math.round(y);
    ctx.fillStyle = getFillStyleFromColor(color);
    var delta = (plotSize - 1) / 2; // If plotSize = 1 => delta =0, if ploutSize = 3 => delta = 1
    ctx.fillRect(x - delta, y - delta, plotSize, plotSize);
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

// Draw a line using "Bresenham's line algorithm"
function bline(x0, y0, x1, y1) {
    var pxlIndex = 0;
    swapToGraphicScreen();
    x0 = Math.round(x0);
    y0 = Math.round(y0);
    x1 = Math.round(x1);
    y1 = Math.round(y1);
    var dx = Math.abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
    var dy = Math.abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
    var err = (dx > dy ? dx : -dy) / 2;
    var moduloTest = plotDefs[currentSketchMode][1][0].length + plotDefs[currentSketchMode][1][1].length;
    while (true) {
        pxlIndex++;
        if (plotDefs[currentSketchMode][1][0].indexOf(pxlIndex % moduloTest) >= 0) { // generique 
            setPixelOn(x0, y0, plotDefs[currentSketchMode][0]);
        }
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

// draw a point of the circle ... and 7 others by symmetry
function drawPointOfCircle(xc, yc, x, y) {
/*
    plotOn(xc+x, yc+y);
    plotOn(xc-x, yc+y);
    plotOn(xc+x, yc-y);
    plotOn(xc-x, yc-y);
    plotOn(xc+y, yc+x);
    plotOn(xc-y, yc+x);
    plotOn(xc+y, yc-x);
    plotOn(xc-y, yc-x);

*/
    setPixelOn(xtoR(xc+x), ytoR(yc+y), plotDefs[currentSketchMode][0]);
    setPixelOn(xtoR(xc-x), ytoR(yc+y), plotDefs[currentSketchMode][0]);
    setPixelOn(xtoR(xc+x), ytoR(yc-y), plotDefs[currentSketchMode][0]);
    setPixelOn(xtoR(xc-x), ytoR(yc-y), plotDefs[currentSketchMode][0]);
    setPixelOn(xtoR(xc+y), ytoR(yc+x), plotDefs[currentSketchMode][0]);
    setPixelOn(xtoR(xc-y), ytoR(yc+x), plotDefs[currentSketchMode][0]);
    setPixelOn(xtoR(xc+y), ytoR(yc-x), plotDefs[currentSketchMode][0]);
    setPixelOn(xtoR(xc-y), ytoR(yc-x), plotDefs[currentSketchMode][0]);

}

// draw a circle using "Bresenham's circle algorithm"
function circleBres(xc, yc, r) {
    swapToGraphicScreen();
    var pxlIndex = 0;
    var moduloTest = plotDefs[currentSketchMode][1][0].length + plotDefs[currentSketchMode][1][1].length;
    debug("moduleTest = "+moduloTest);
    debug(plotDefs[currentSketchMode]);
    debug(plotDefs[currentSketchMode][1][0]);
    var x = 0, y = r;
    var d = 3 - 2 * r;
    drawPointOfCircle(xc, yc, x, y);
    while (y >= x) {
        x++;
        if (d > 0) {
            y--;
            d = d + 4 * (x - y) + 10;
        } else {
            d = d + 4 * x + 6;
        }
        debug(pxlIndex % moduloTest);
        if (plotDefs[currentSketchMode][1][0].indexOf(pxlIndex % moduloTest) >= 0) { // generique 
            debug("draw point");
            drawPointOfCircle(xc, yc, x, y);
        }
        pxlIndex++;
    }
}

function plotChg(x, y) {
    var color = getPixelColor(xtoR(x), ytoR(y));
    if (color[0] != currentPalette[0][0]
        && color[1] == currentPalette[0][1]
        && color[2] == currentPalette[0][2]) {
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
    var realX = xtoR(x);
    var realY = ytoR(y);
    if (mode) {
        setPixelOn(realX, realY, plotSize);
    } else {
        setPixelOff(realX, realY, plotSize);
    }
}

function pixelTest(x, y) {
    var color = getPixelColor(x, y);
    // Tester toutes les couleurs de la palette
    // en partant de 0, s'arrête en indiquant l'index de la couleur trouvée (si trouvée)
    for (var i = 0; i < currentPalette.length; i++) {
        var elemColor = currentPalette[i];
        if (color[0] == elemColor[0]
          && color[1] == elemColor[1]
          && color[2] == elemColor[2]) {
           return i;
        }
    }
    return 0;
}

function pixelChg(x, y) {
    var color = getPixelColor(x, y);
/*    if (color[0] == FOREGROUND_COLOR[0]
        && color[1] == FOREGROUND_COLOR[1]
        && color[2] == FOREGROUND_COLOR[2]) {
*/
    if (pixelTest(x, y)) {
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
        setPixelOn(x, y, 1);
    } else {
        setPixelOff(x, y, 1);
    }
}

function range(xmin, xmax, xscl, ymin, ymax, yscl, tmin, tmax, tptch) {
    this.xmin = xmin;
    this.xmax = xmax;
    this.xscl = xscl;
    this.ymin = ymin;
    this.ymax = ymax;
    this.yscl = yscl;
    this.tmin = tmin; // useless for now
    this.tmax = tmax; // useless for now
    this.tptch = tptch; // useless for now
    cls();
}

function xtoR(x) {
    return ((x - this.xmin) * (this.casioScreenW - 1) / (this.xmax - this.xmin)) + 1;
}

function ytoR(y) {
    return ((this.casioScreenH - 1) - ((y - this.ymin) * (this.casioScreenH - 1) / (this.ymax - this.ymin)) + 1);
}

function fline(x1, y1, x2, y2) {
    //plotOn(x1, y1);
    //plotOn(x2, y2);
    //line();
    bline(xtoR(x1), ytoR(y1), xtoR(x2), ytoR(y2));
}

function horizontal(y) {
    bline(xtoR(this.xmin), ytoR(y), xtoR(this.xmax), ytoR(y));
}

function vertical(x) {
    bline(xtoR(x), ytoR(this.ymin), xtoR(x), ytoR(this.ymax));
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

