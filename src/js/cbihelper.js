var TEXT_SCREEN_WIDTH = 21;
var TEXT_SCREEN_HEIGHT = 7;

var currentTextLineIdx = 0;

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
var currentTextColorIdx;

var currentSketchMode;
var angleMode;

var DEG = 1;
var RAD = 2;
var GRAD = 3;

var casioFontSrc = "data:image/gif;base64,R0lGODlhAAYIAKEBAAQEBP///////////yH5BAEKAAIALAAAAAAABggAAAL+DH6GoNi5WHxy0Tuz1Y7DDXbhJ5bkWZkpegXu6zKvNBuwDN95stf5DwwKd7zYjTfxJRUxS2NWHOqCuCbOYbVekUWPDHvNQmnGqq2s5HbV2++mFo7D4U4s0H6mmqdSo3Dv1yOY19RneIiYqAjlw/Q3suIm2SaGMcK4iLiHV0XzpRVpqdIC1kj1AHpX18biJdoKaej6RLo2Cch3hGezlKkZ6xq8SjeWKjx6DIvsRLTsrAwdmiwNXP1Mff2KHa2aPa2dR8Y7h1Y+bi6eHr4uh85Ofh6v3i7/7k4/D49LmF8sZwZwUKCBvuo5WmcKyQ9c/c5EiULoTqOGFB0SDOiOoMX+jYwg6LNXL0wgfCDVTel0ytzCIftWngLUMmWugjRj0pR58c/HOJ8U+iTzsNMnnDIxzgyIshxJnkxE9vTzgaUShIOAjixJVeo9UzozWh24KatElxFN3uyzdKdapYWmYk27NW7ItXPlVoRbN+9dunvtvuX79+pVvH31BjZM+HDhxYobJ378ESfQOmPFla1ssCZUkVV1TNIINXLQXL2GjutAd7DAy4JPivXkiDE9PonztgZtep/QnpQKSSKNeg0Rt+Gs2tIyhjdyWo+flmFmFKxfpryUY6pwJHv1sC1Yvzrag/M/j57IE78MW/hUpgqTq57uHDHXoghLbRb6HiVMOrD+b9v5X1xvkE1HjmnFOAbYgIado6BsCT5IYITySehgRp01iCCFGU7IYYUdbughY0SFp510WlXFBkzMkNVfRKwZ+NxDuriHliaulWdCTjF+tl133Mno2Wkh2bddb63lY5aOGnGnmU+CeHTfYLmxyM8c2H140H7vZdaFiQfpgYZsl3z5ExvLZUkZZ6SN5d1CSVXXFDEGlYLac2yJ4ZRRQ2HYlkW1uTmlmhOBVpdTbCKVBllbRodhbV1ipmGjEFIlaaSThghippUi9oalnn64KaahanopqRYq2gxEBra42khA9imLdoLu1wuXg56EX0IrvpnCYVsqaZahmeXXUJjx0Db+6D9+rjmTkot0eiw70OkSLIt6CnnPf0RWQilbSZK52rUc3WXdlW2ZSyZATE7mDZ2tdtVjekIKG1pgatJrYqCAXaTvqS5iRSUtzPFXpHhcVXugwNoKWOqfUjwKasOlMijxp6JWHLHFpv47ascYX6yxxyF/LJaNDN9JlLLOunnwrV4mRdKRtEX3b7MtRwjjtQbXu+eFqW3Us8yhuRGn0DZXmcmmNiM8LtLz/uzaoQw615+qzdKsW4Llxlb0aJh8LZ1NAuUa7YlIwjnnnXDde147/S5o9aKvSS3obfBaxq/LyHoJHrJvg1zzwySLnHHhgB++MeKjykz4PNZw803kj2/ZQzk4kreLOTcjBnl00fS9O99wjwi4ip7H6brFiZ0zOfCOBy4MJbX1qSdtnXO2l51JnMzoMtNJ7MI7oBC5B50tv6EumLZRu6s77i7tZnpWX0WVHNmpjw45b6fDjm5Qw28GDpsJJXK55vZByUXCHFTfZ/mTpZsNt+zXmgpa0M7MiopgnC6wq6RnXjn6yWJyliOg+7qRPQAWUIEHbKABH6hA4QUQgiw4iwUviMEManCDHOygBz8IwhCKcIQkLKEJT4jCFKpwhSxsoQtfCMMYynCGNKyhDW+IQxMWAAA7";
var casioFontHiSrc = "data:image/gif;base64,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";
var casioFontGfxSrc = "data:image/gif;base64,R0lGODlhAAYIAKECAAQEBP///v///////yH5BAEKAAIALAAAAAAABggAAAL+DH6GoNi5WHxy0Tuz1Y7DDXbhJ5bkWZkpegXuy7yuBBtyLN95stf5DwwKbwmBwBYwOpRFAY3JgCadzSU1ehzqgrgZr+FjuoyKKU+KPlZt6ZnZ7Xwpa7hYTDwFl/PVNfYZ5wY42Ne184UkhHgXmCeXhYVExqb29zhmBPmGeZYl5OmIKTMpV0bGOApKCrTaSuSzxzWyYsdj4VVbN/sAY6j1++PrAGtDg+RBi7GrV6e1govYO/yFrKxizTLxW818O9z9zQWkTXcLfC57Xb3u3Uxtu8uuHk9/HVyfjZ8snz/v3w9wnz5sAv/5IoiQ3z46DAU1LPbQGESHFCdalIgxUUb+dxE1euRYcWNHkBc9BjtJEgxHQyx7bCGGDiWlTnA0zbHE6dGgmZRi+Uwkzk1IiDc3vcFpdE7OSKh43sEh5oNDS0hpID219KhRq1onIRXq0uK4k0r5RHLKJ2vZOZlUNcJqxpgxNZxQ+YkC9UrXOFWJ8o0bBWbLoCXd2dlTQZDcLosOE1Yk+OTLih/BilRcptmxzZkPwjqsOaxcy5WHbhsJk3DGiaGBmoYs2fXqmLRJk7xcuGGtLY5zD71d2rdw3MSDFweOHPVv5cONO0++PLrJ58yPV6cu3Xp27M2hd7/uXXvJ2Lq9jRU72CVXsPc88+7JyIr8QoAd/aF/ijFjIuH+elslEVdOaumVBiFMiTITVHlxxWCCWSWWVoRFTfiXY3Bd2Ehq7j2G31sEfmiFKVQg2FZNgEhSYWZJ7ERVgGOgiCKLWln414WRTQYaeKDt+Eox+vWYgmTkpOfBZLJNtxIEEHVg0n46MKjLe4Yhxp9/3EEo3mxDAMeMD/1Z2ZtYn6mEJH/SRPQOmOCtyZmZV74Z3pussfnddnHeSWeWcObpXGx64mknn4DWSeifgh4a6Gu0SeSTk7CJBk84izKEYV41XYpWpT1tuiU6TjbY4lo1erhgpnTtNVepFCl5VSA5eiXhqDJypamAYbE3aaik8iRKU7piQSFN8S0JByG9fmX+06nBokWrsm954UyOf44AbS+KRZpLlNDkiCt7B7XmWo+2JTbleNOQidmcuJD2k2ZqblftZnGOY0tHfnYbnbvnHemuMKJN5y2izcXi2buF7plomQkbujDCBw/K8MMjbSBwxBY7fDHEGG+s8by30itpmOuR99ki4gKj330q1wdrgU3E2GGjjrYQ8LV+CXtfXa2KaGCsh4Fo77DHEotHpS/bJa/P9KWjSDSHuJifWVIbPSCwzvZc1GhXX8LrGDQleGBar5JaxI1jtnkcjz4CKfPJP5WmEC9ibvgvk6Ca+x52remLo1Aa41ovvKn1+a8eXdqcDLv8nr1u44Z/c27DHkf+O2bHFfc5muSXW6555xJ7rmXlm48OOsekf456xvbWhlHg6j5WGbgbUvOJW6nczjWCuofCe9RG0u2ee63YnnvvxO8+fA7HA5N87bgjv/wPze9eW23TG/889lyXWPz1rGTv/fLXryK9+Gbja9vE6WKpYtvWur0f3eT9SJkzqP1nGrcGZw4U3+mjLadohKY4RvpfuAD2KEYBboD72tu+AKeb04XuHJxLnelKV0HVYVCCFxxPmTL4nIHEbYQiLKFBEmLCgKDwhOTI1cdeMTsNdWpLwmuLDW+IwxzqcIc7fODgupUyTPBwiEQsohGPiMQkKlGJ1aPNEp8IxShKcYpLFJelttKhwnqZYxppksr7oBEUFfqwfzEh4QkPpyTE6GKNANpWvMyYRi+6kRuGq1LiDiEpLCrQMl38VjvWeKaXQA5bBcniMhaVwkIqcoUsaI8hWZhIRi4SjpOMJCUR4shKQtIeTeykJz8JylCKcpSkLKUpf0HFVOLwlFpQpStfCctY3pCVqZClLW+JSyPScpe87KUvfwnMYApzmMQspjGPicxkKnOZzCwAADs=";
var casioFontGfxHiSrc = "data:image/gif;base64,R0lGODdhoA8OAIAAAAQCBPz+/CwAAAAAoA8OAAAC/oyPqcvtD6OctNqLs968+w+GByCW5omm6sq27gvH8kzXHEDauoPz+Q4MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE5Df4peb/FmI+SjdwNHn0PsiXxfyVfnF4DHgOd3+BBIeIhY2NdI1wj3uFZZcSmYqdmW2Dk5F0m5aBcYmecZWtd592PqirrImAoZSxtqe1sqt6vqa9ArKKy5OSs5CFycjKzI3PohG3G758zoQ+kTrbbN3e39DR4uPk5ebn6Onq6+zt7u/g4fLz9PX68+6OZoXfu6j014p9kzOMAKGonlT48sWG2GfWJ1jdqxZJAoPslRbNqy/n8JLQL0RQqZNo+8GD6MCDJkKxKZHqlU6XEVzJbOMppcFbMfzo7BRnFsSM2QRgnVfm4YufIC0pgQKwpUs9Se1KlUq1q9ijWr1q1cu3r9Cjas2LFky5r9ho+lPlIfnabd89QoLm1FUcDsuHOg0FET9TYrmddfVA11DRKVFHhZX7x0bzJ1KvTt41lxZS5Mq7YkRsBMe5LkzLPm5cCedVp+qIxy09V7sQ0G8Tqohdi/SiylrQX32d28e/v+DTy48OHEixs/jjy58uXMvb0NKUqma8k8ULb+RNfG3WhIU3NnLLLo6LY7L2P+y49mNbZ6Km7XrNe03NpNzVemyP28erWQ/k37B/0KMzaR5lgc/M2FUGP6XOdXeYUdtkl02PFl3jGgIKiZTfmNh1eHxuy3IYW5QBehhro4Jhgb8nmWYnq6NQdjjDLOSGONNt6IY4467shjjz7+qFQG+Uzok2EOKSUgKgYhUsNoB7J2Ui17kTjiedgtZl9kkVFJZYNLlggegSjJByV9/dly34cM/lFIhqGJ2RmKLF4Y5S8BdkYZdFtaWWZikM1wZ5hG7qPeZCEWqsxI4+VnCH5SIhqoTiXiM8KaDp5JXz/vJQVkp55+Cmqooo5KaqmmnopqqqqG9aAqFVJKoYfWzVfplUOl4KSHiu4KEa9S6rpWXxpy+utRWbqK/hErXPb5mYsZ0pSNRqk9RqeZlbbp3ptxwqntq1rWNxFb2NZZLLnW+nmuC/+Vi6mdCHG0Lq2G3vrdRwDe2+6lf7Lb55wFJhvapJOptmrBBh+McMIKL8xwww4/DHHE9bR62pZ/bITTkJgkOdspD1Y7AaMD+zqrgfex6CfKEnowbcgculqrMNBuGx9o8hIaL7/7fvguQfa6N3PAYMZJ77DgKmshwbgQy4+XO6eLa7X+jvnsy+7m+3TKRTf689Ve6ws2uoo53SLQDY2rszUhSsx2226/DXfccs9Nd9123+0bxR43ml0wIMtGNlFC3ppms/JGFSDhOS99dOCDTzrN3x26/hGzYkEHCq/NzJYd9pFymcwsL24tLivnFu2KZuPIotZlkeZCXfqLxnJLJtaljywnimJPvrXPAHc+Nc2CrmR152ojhjbjV36Ld/POPw999NJPT3311l9vfRzViXxTy5ZmLTjTG8Oa+fdKB94dvv3qbq136VcNH5JtqW98Y9ze7BL9yltq4GJAVY4z/cUudxj73oCoFbl8hMsRqXPcwG5nguAFrGbgQ5cERWbAzZgPYAK8oAAhOK/rtG5pkGNgA7GHwhSqcIUsbKELXwjDGMrwIhjQWLYYxYf+yW9WmMjG48yHH+rs72LnMxP7QAc+BZLNfevpIeBWRx7TSVEwo9tc/vqEd6z2DO8u/xuUDs1WweN1sH0cyqLMSFfAIW7ugbIjzGbit53RxS+KuMuM7XZXxp5d7HeGOyMcOTM0n4XQJ0Z71EvMmMYZKnKRjGykIx8JyUhKcpI/otjx9uRDZ+3wZjewZCIB6DoMwY9ITita8dJmSvGpi0nG2F8OJZdAEwWNeB1c2djAVTUievGIp2zamZ7FvPQEM2yVEJit9BgQIEbtREOR1t+aiZnLwQ+ZffRlrfg4xSLyTERWNKWFCklCNGrzFJQspznPic50qnOd7GynO6HSJCGKoI08FAs9T3DPT+UTDYhb0Dz2ucYivAagTfDeOw+K0IQqdKEMbahDLh/6SE9Cg5X4BBJBQ1AKhkl0G4QjHj0MusmC1uWiSyApRE+K0pSqdKUsbek7CwAAOw==";

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
  recalculateXdot();

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
    currentTextColorIdx = 1;
    fonts = MONO_NB_COLOR_fonts;
  } else if (colorSchemeName == "blue&green") {
    currentPalette = MONO_BLUEGREEN_COLOR;
    currentDrawColorIdx = 1;
    currentTextColorIdx = 1;
    fonts = MONO_BLUEGREEN_COLOR_fonts;
  } else if (colorSchemeName == "multicolor") {
    currentPalette = POLY_COLOR;
    currentDrawColorIdx = getColorIndexFromColorName("Blue");
    currentTextColorIdx = getColorIndexFromColorName("Black");
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
            if (currentLineBuffer !== null && currentLineBuffer.length < (TEXT_SCREEN_WIDTH - 1)) {
                currentLineBuffer += e.key;
                textScreenLines[currentTextLineIdx] = currentLineBuffer;
                drawTextLine(currentTextLineIdx + 1, currentLineBuffer);
                cursorCol += 1;
            }
        }
    }

    if ((e.key == "Backspace" || e.key === "Delete") && editMode && currentLineBuffer.length > 0) {
        currentLineBuffer = currentLineBuffer.substring(0, currentLineBuffer.length - 1);
        cursorMode = " ";
        clignoteCurseur(); // Clear old position
        drawTextLine(currentTextLineIdx + 1, currentLineBuffer + " ");
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
    currentTextColorIdx = getColorIndexFromColorName("Black");
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
    drawTextLine(currentTextLineIdx + 1, "".padStart(TEXT_SCREEN_WIDTH, " "));
    cursorLine = currentTextLineIdx + 1;
    cursorCol = 1;
    idTimerCursor = setInterval('clignoteCurseur()', 500);
}

function editModeOff() {
    debug("editModeOff");
    editMode = false;
    letvar(stockVarName, parseFloat(currentLineBuffer));
    clearInterval(idTimerCursor);
    cursorMode = " ";
    clignoteCurseur(); // Clear old position
    print(currentLineBuffer);
    currentLineBuffer = null;
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
    drawGrid();
    drawAxes();
}

function clrtext() {
    swapToTextScreen();
    clearDisplay();
}

function drawAxes() {
    if (!showAxes) return;
    if (this.xscl == 0 || this.yscl == 0) return;
    var prevDrawColor = currentDrawColorIdx;
    var prevSketchMode = currentSketchMode;
    currentDrawColorIdx = getColorIndexFromColorName("Black");
    currentSketchMode = "SketchThin";
    horizontal(0);
    vertical(0);

    for (var x=0; Math.abs(x) < Math.abs(this.xmax); x += Math.sign(this.xmax) * this.xscl) {
        for (var i=1; i <= plotSize; i++) {
           setPixelOn(xtoR(x), ytoR(0)-i, 1);
        }
    }

    for (var x=0; Math.abs(x) < Math.abs(this.xmin); x += Math.sign(this.xmin) * this.xscl) {
        for (var i=1; i <= plotSize; i++) {
           setPixelOn(xtoR(x), ytoR(0)-i, 1);
        }
    }

    for (var y=0; Math.abs(y) < Math.abs(this.ymax); y += Math.sign(this.ymax) * this.yscl) {
        for (var i=1; i <= plotSize; i++) {
           setPixelOn(xtoR(0)+i, ytoR(y), 1);
        }
    }

    for (var y=0; Math.abs(y) < Math.abs(this.ymin); y += Math.sign(this.ymin) * this.yscl) {
        for (var i=1; i <= plotSize; i++) {
           setPixelOn(xtoR(0)+i, ytoR(y), 1);
        }
    }

    currentDrawColorIdx = prevDrawColor;
    currentSketchMode = prevSketchMode;
}

function drawGrid() {
    if (showGrid == GRID_OFF) return;
    if (this.xscl == 0 || this.yscl == 0) return;
    var prevDrawColor = currentDrawColorIdx;
    var prevSketchMode = currentSketchMode;
    currentSketchMode = "SketchNormal";
    currentDrawColorIdx = getColorIndexFromColorName("Cyan");
    if (showGrid == GRID_ON || (showGrid == GRID_LINE && currentRes == "low")) {
        for (var x=0; Math.abs(x) < Math.abs(this.xmax); x += Math.sign(this.xmax) * this.xscl) {
            for (var y=0; Math.abs(y) < Math.abs(this.ymax); y += Math.sign(this.ymax) * this.yscl) {
                plotOn(x, y);
            }
            for (var y=0; Math.abs(y) < Math.abs(this.ymin); y += Math.sign(this.ymin) * this.yscl) {
                plotOn(x, y);
            }
        }
        for (var x=0; Math.abs(x) < Math.abs(this.xmin); x += Math.sign(this.xmin) * this.xscl) {
            for (var y=0; Math.abs(y) < Math.abs(this.ymax); y += Math.sign(this.ymax) * this.yscl) {
                plotOn(x, y);
            }
            for (var y=0; Math.abs(y) < Math.abs(this.ymin); y += Math.sign(this.ymin) * this.yscl) {
                plotOn(x, y);
            }
        }
    } else if (showGrid == GRID_LINE) {
        for (var x=0; Math.abs(x) < Math.abs(this.xmax); x += Math.sign(this.xmax) * this.xscl) {
            vertical(x);
        }
        for (var x=0; Math.abs(x) < Math.abs(this.xmin); x += Math.sign(this.xmin) * this.xscl) {
            vertical(x);
        }
        for (var y=0; Math.abs(y) < Math.abs(this.ymax); y += Math.sign(this.ymax) * this.yscl) {
            horizontal(y);
        }
        for (var y=0; Math.abs(y) < Math.abs(this.ymin); y += Math.sign(this.ymin) * this.yscl) {
            horizontal(y);
        }
    }
    currentDrawColorIdx = prevDrawColor;
    currentSketchMode = prevSketchMode;
}

// Redraw all screen
function redrawAllTextScreen() {
    clrtext();
    for (var i = 0; i < textScreenLines.length; i++) {
        lineNb = i + 1;
        drawTextLine(lineNb, textScreenLines[i]);
    }
}

function txtScrollVertical() {
    textScreenLines.shift();
    textScreenLines.push("".padStart(TEXT_SCREEN_WIDTH, " "));
    txtColorScreenLines.shift();
    txtColorScreenLines.push("".padStart(TEXT_SCREEN_WIDTH, "1"));
}

// Si c'est après le locate, ça rempli la ligne avec des blancs après le texte à imprimer.
// A partir de 20 caracteres, ça créé une ligne supplémentaire.
function print(str) {
    var newLine = "";
    swapToTextScreen();
    str += " ";

    do {
        textScreenLines[currentTextLineIdx] = str.padEnd(TEXT_SCREEN_WIDTH, " ");
        txtColorScreenLines[currentTextLineIdx] = "".padStart(TEXT_SCREEN_WIDTH, "1");
        str = str.substring(TEXT_SCREEN_WIDTH);
        currentTextLineIdx++;
        if (currentTextLineIdx == TEXT_SCREEN_HEIGHT) {
             txtScrollVertical();
        }
    } while (str.length > TEXT_SCREEN_WIDTH)

    // Scroll ...
    redrawAllTextScreen();
}

// 1. Locate doesn't change the 'currentLine'.
// 2. Locate set the text at the exact wanted position
// 3. If lines are scrolled vertically, text that was printed with locate will scroll too !

function locate(col, ligne, str, colorIdx) {
    var newLine = "";
    if (col < 1 || col > TEXT_SCREEN_WIDTH
      || ligne < 1 || ligne > TEXT_SCREEN_HEIGHT) {
      throw {errorCode: EXIT_DOMAIN_ERROR, offset: node.offsetDbg};
    }

    newLine = textScreenLines[ligne - 1].substring(0, col - 1) + str + textScreenLines[ligne - 1].substring(col - 1 + str.length);
    textScreenLines[ligne - 1] = newLine.substring(0, TEXT_SCREEN_WIDTH);

    newLine = txtColorScreenLines[ligne - 1].substring(0, col - 1) + "".padStart(str.length, colorIdx) + txtColorScreenLines[ligne - 1].substring(col - 1 + str.length);
    txtColorScreenLines[ligne - 1] = newLine.substring(0, TEXT_SCREEN_WIDTH);

    redrawAllTextScreen();
}

function cleartext() {
    currentTextLineIdx = 0;
    textScreenLines = [];
    for (var i=0; i< TEXT_SCREEN_HEIGHT; i++) {
        textScreenLines.push("".padStart(TEXT_SCREEN_WIDTH, " "));
    }
    txtColorScreenLines = [];
    for (var i=0; i< TEXT_SCREEN_HEIGHT; i++) {
        txtColorScreenLines.push("".padStart(TEXT_SCREEN_WIDTH, "1"));
    }
    redrawAllTextScreen();
}

function drawTextLine(lineNb, str, deltaCol) {
    if (deltaCol == undefined) { deltaCol = 0 }
    var charW = txtCharW; //6;
    var charH = txtCharH; //8;
    var y = (lineNb - 1) * charH + 1;
    var x = 0;
    var colorIdx = 1;
    str = str.substring(0, TEXT_SCREEN_WIDTH);
    for (var i = 0; i < str.length; i++) {
        x = (i + deltaCol) * charW + 1;
        colorIdx = txtColorScreenLines[lineNb -1][i];
        ctx.drawImage(fonts[currentFontDeltaIndx][colorIdx-1], 1 + str.charCodeAt(i) * charW, 0, charW, charH, x, y, charW, charH);
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
var _TMIN_ = 0;
var _TMAX_ = 2 * Math.PI;
var _TPITCH_ = (2 * Math.PI) / 100;

var GRPHVAR_XMIN = 0;
var GRPHVAR_XMAX = 1;
var GRPHVAR_XSCL = 2;
var GRPHVAR_XDOT = 3;
var GRPHVAR_YMIN = 4;
var GRPHVAR_YMAX = 5;
var GRPHVAR_YSCL = 6;
var GRPHVAR_TTMIN = 7;
var GRPHVAR_TTMAX = 8;
var GRPHVAR_TTPTCH = 9;

var GRID_OFF = 0;
var GRID_ON = 1;
var GRID_LINE = 2;

var G_CONNECT = 0;
var G_PLOT = 1;

var xmin = _XMIN_;
var xmax = _XMAX_;
var xscl = _XSCL_;
var ymin = _YMIN_;
var ymax = _YMAX_;
var yscl = _YSCL_;
var tmin = _TMIN_;
var tmax = _TMAX_;
var tptch = _TPITCH_;

var showAxes = false; // false by default but should be a configurable option
var showLabel = false; // false by default but should be a configurable option
var showGrid = GRID_OFF; // 'Off' by default but should be a configurable option
var graphMode = G_CONNECT; // 'G-Connect' by default but should be a configurable option

function setShowAxes(show) {
    showAxes = show;
    debug("showAxes = "+(showAxes?'true':'false'));
}

function setShowLabel(show) {
    showLabel = show;
    debug("showLabel = "+(showLabel?'true':'false'));
}

function setShowGrid(show) {
    showGrid = show;
    debug("showGrid = "+showGrid);
}

function setGraphMode(gmode) {
    graphMode = gmode;
    debug("graphMode = "+gmode);
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

function readGraphVar(index) {
    switch (index) {
        case GRPHVAR_XMIN:
            return this.xmin;
        case GRPHVAR_XMAX:
            return this.xmax;
        case GRPHVAR_XSCL:
            return this.xscl;
        case GRPHVAR_XDOT:
            return this.xdot;
        case GRPHVAR_YMIN:
            return this.ymin;
        case GRPHVAR_YMAX:
            return this.ymax;
        case GRPHVAR_YSCL:
            return this.yscl;
        case GRPHVAR_TTMIN:
            return this.tmin;
        case GRPHVAR_TTMAX:
            return this.tmax;
        case GRPHVAR_TTPTCH:
            return this.tptch;
    }
    return 0;
}

function setGraphVar(value, index) {
    switch (index) {
        case GRPHVAR_XMIN:
            this.xmin = value;
            recalculateXdot(); // Setting Xmin, modify Xdot !
            break;
        case GRPHVAR_XMAX:
            this.xmax = value;
            recalculateXdot(); // Setting Xmin, modify Xdot !
            break;
        case GRPHVAR_XSCL:
            this.xscl = value;
            break;
        case GRPHVAR_XDOT:
            this.xdot = value;
            recalculateXmax(); // Setting Xdot, modify Xmax !
            break;
        case GRPHVAR_YMIN:
            this.ymin = value;
            break;
        case GRPHVAR_YMAX:
            this.ymax = value;
            break;
        case GRPHVAR_YSCL:
            this.yscl = value;
            break;
        case GRPHVAR_TTMIN:
            this.tmin = value;
            break;
        case GRPHVAR_TTMAX:
            this.tmax = value;
            break;
        case GRPHVAR_TTPTCH:
            this.tptch = value;
            break;
    }
}

function recalculateXdot() {
    this.xdot = (this.xmax - this.xmin) / (this.casioScreenW - 1); 
}

function recalculateXmax() {
    this.xmax = (this.casioScreenW - 1) * this.xdot + this.xmin; 
}

function range(xmin, xmax, xscl, ymin, ymax, yscl, tmin, tmax, tptch) {
    if (xmin !== undefined) { this.xmin = xmin; }
    if (xmax !== undefined) { this.xmax = xmax; }
    if (xscl !== undefined) { this.xscl = xscl; }
    if (ymin !== undefined) { this.ymin = ymin; }
    if (ymax !== undefined) { this.ymax = ymax; }
    if (yscl !== undefined) { this.yscl = yscl; }
    if (tmin !== undefined) { this.tmin = tmin; } // useless for now
    if (tmax !== undefined) { this.tmax = tmax; } // useless for now
    if (tptch !== undefined) { this.tptch = tptch; } // useless for now
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

