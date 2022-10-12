function randompickerbtn() {
  let textout = document.querySelector("#randomValuePara");
  let res = randcolorhex();
  textout.textContent = res;
  textout.style.color = "orange";
  textout.parentElement.style.background = res;
}
function randcolorhex() {
  let hexVal = "1234567890ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexVal[Math.ceil(Math.random() * hexVal.length - 1)];
  }
  return hex;
}

function hexFindbtn() {
  let input = document.querySelector("#hexInput").value;
  let output = document.querySelector("#color-box");
  if (input.length === 7) {
    if (input.charAt(0) === "#") {
      output.style.background = input;
    } else {
      alert("the first character should be # followed by 6 digits 0-9...A-F");
    }
  } else {
    alert("Enter in this pattern #xxyyzz");
  }
}

function RGBFindbtn() {
  let output = document.querySelector("#rgb-color-box");
  let r = document.querySelector("#RInput").value;
  let g = document.querySelector("#GInput").value;
  let b = document.querySelector("#BInput").value;
  if (r.length >= 2 && g.length >= 2 && b.length >= 2) {
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      let res =
        "#" +
        parseInt(r).toString(16).padStart(2, "0") +
        parseInt(g).toString(16).padStart(2, "0") +
        parseInt(b).toString(16).padStart(2, "0");
      output.style.background = res;
    } else {
      alert("Please select or enter value from 0 to 255");
    }
  } else {
    alert("enter atleast 2-digits in each input r g b ex.for 1 enter 01");
  }
}

function RangeSelector() {
  let r = document.querySelector("#RrInput").value;
  let g = document.querySelector("#GrInput").value;
  let b = document.querySelector("#BrInput").value;
  let rangeOutput = document.querySelector("#range-color-box");
  let rgb = `rgb(${r}, ${g}, ${b})`;
  rangeOutput.style.background = rgb;
  rangeOutput.textContent = rgb;
}

// hex to rgb converter
let inp;
String.prototype.convertToRGB = function () {
  let r = parseInt(inp.substr(0, 2), 16);
  let g = parseInt(inp.substr(2, 2), 16);
  let b = parseInt(inp.substr(4, 2), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

function hexConvbtn() {
  inp = document.querySelector("#hexCInp").value;
  if (inp.length === 6) {
    let regex = /[0-9 a-f]{6}/gi;
    if (inp.match(regex)) {
      let hexToRgbOut = document.querySelector("#hexCOut");
      let res = inp.convertToRGB();
      hexToRgbOut.textContent = res;
      hexToRgbOut.parentElement.style.background = res;
    } else {
      alert("input combination of 0-9 and a-f");
    }
  } else {
    alert("Enter 6 digit hex Code");
  }
}

function rgbConvbtn() {
  let rgbToHexOut = document.querySelector("#rgbCOut");
  let r = document.querySelector("#RCInput").value;
  let g = document.querySelector("#GCInput").value;
  let b = document.querySelector("#BCInput").value;
  if (r.length >= 2 && g.length >= 2 && b.length >= 2) {
    if (r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255) {
      let res =
        "#" +
        parseInt(r).toString(16).padStart(2, "0") +
        parseInt(g).toString(16).padStart(2, "0") +
        parseInt(b).toString(16).padStart(2, "0");
      rgbToHexOut.textContent = res;
      rgbToHexOut.parentElement.style.background = res;
    } else {
      alert("Please select or enter value from 0 to 255");
    }
  } else {
    alert("enter atleast 2-digits in each input r g b ex.for 1 enter 01");
  }
}
