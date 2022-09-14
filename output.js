import calculateWrapper from "./calculateWrapper.js";

const output = document.querySelector(".output__input");
const keyboard = document.getElementById("keyboard");
const sqrt = document.getElementById("sqrt");

const validateOperator = (str, symbol) => {
  const reg = /(^[+\/*-])|\.[+\/*-]$/g;
  if (reg.test(str + symbol) || /[+\-*/]$/g.test(str[str.length - 1])) {
    return;
  } else {
    output.textContent = str + symbol;
  }
};

// const validateNumber = (str) => {
//   const reg = //
// }

keyboard.addEventListener("click", function (e) {
  switch (e.target.textContent) {
    case "1": {
      output.textContent = output.textContent + "1";
      break;
    }
    case "2": {
      output.textContent = output.textContent + "2";
      break;
    }
    case "3": {
      output.textContent = output.textContent + "3";
      break;
    }
    case "4": {
      output.textContent = output.textContent + "4";
      break;
    }
    case "5": {
      output.textContent = output.textContent + "5";
      break;
    }
    case "6": {
      output.textContent = output.textContent + "6";
      break;
    }
    case "7": {
      output.textContent = output.textContent + "7";
      break;
    }
    case "8": {
      output.textContent = output.textContent + "8";
      break;
    }
    case "9": {
      output.textContent = output.textContent + "9";
      break;
    }
    case "0": {
      output.textContent = output.textContent + "0";
      break;
    }
    case ".": {
      if (output.textContent.length === 0) {
        return;
      } else if (/\.$/g.test(output.textContent)) {
        return;
      } else if (/^(\d+\.\d+?)$/g.test(output.textContent)) {
        return;
      } else if (/(\d*[+-/*])$|[+-/*](\d+\.\d+)$/g.test(output.textContent)) {
        return;
      } else {
        output.textContent = output.textContent + ".";
      }
      break;
    }
    case "=": {
      let str = output.textContent;
      if (str.length <= 30) {
        output.textContent = calculateWrapper(calculate, str);
      } else {
        output.textContent = "Allowed limit of calculation length is exceeded";
      }
      break;
    }
    case "+": {
      let temp = output.textContent;
      validateOperator(temp, "+");
      break;
    }
    case "-": {
      let temp = output.textContent;
      validateOperator(temp, "-");
      break;
    }
    case "x": {
      let temp = output.textContent;
      validateOperator(temp, "*");
      break;
    }
    case "/": {
      let temp = output.textContent;
      validateOperator(temp, "/");
      break;
    }
    case "DEL": {
      let s = output.textContent;
      output.textContent = s.slice(0, s.length - 1);
      break;
    }
    case "x^2": {
      if (output.textContent === "") {
        return;
      } else if (output.textContent === "0") {
        output.textContent = "Cannot do that";
        return;
      }
      output.textContent = Math.sqrt(parseFloat(output.textContent)); //should floats spit out an error?
      break;
    }
    case "%": {
      let str = output.textContent + "%";
      console.log("yay");
      if (/([+-/*](\d+(\.\d+)?))$/g.test(output.textContent)) {
        output.textContent = str;
      }
      break;
    }
    case "C": {
      output.textContent = "";
      break;
    }
    default:
      return;
  }
});

function evaluate(arr) {
  const reg = /[*/]/gi;
  const resultArray = [];
  for (let k = 0; k < arr.length; k++) {
    const values = arr[k].split(/[*/]/);
    const operations = arr[k].match(reg);
    let sum = parseFloat(values[0]);

    for (let i = 0; i < operations.length; i++) {
      switch (operations[i]) {
        case "*":
          sum = sum * parseFloat(values[i + 1]);
          break;
        case "/":
          sum = sum / parseFloat(values[i + 1]);
          break;
      }
    }
    resultArray.push(sum);
  }

  return resultArray;
}

function calculate(s) {
  if (s.length === 0) return;
  if (/(0\/)|(\/0)/g.test(s)) {
    return "Cannot divide by zero";
  }
  const arr = s.match(/(\d+(\.\d+)?[/*]\d+(\.\d+)?([/*]\d+(\.\d+)?)*)/g);
  let priorityOperations;
  let finalString = s;
  if (arr) {
    priorityOperations = evaluate(arr, s);

    for (let i = 0; i < priorityOperations.length; i++) {
      finalString = finalString.replace(arr[i], priorityOperations[i]);
    }
    if (arr.join("") === s) {
      return finalString;
    }
  }

  const operations = finalString.match(/[+-]/g);
  const operands = finalString.match(/\d+(\.\d+)?%?/g);
  console.log(operands);
  let result = parseFloat(operands[0]);

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        if (operands[i + 1].includes("%")) {
          result = result + (result / 100) * parseFloat(operands[i + 1]);
        } else {
          result = result + parseFloat(operands[i + 1]);
        }
        break;
      case "-":
        if (operands[i + 1].includes("%")) {
          result = result - (result / 100) * parseFloat(operands[i + 1]);
        } else {
          result = result - parseFloat(operands[i + 1]);
        }
        break;
    }
  }

  return result;
}

//Floats with +- don't work
//Truncate output
//limit length of the input per integer
