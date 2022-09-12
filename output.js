import calculateWrapper from "./calculateWrapper.js";

const output = document.querySelector(".output__input");
const keyboard = document.getElementById("keyboard");
const sqrt = document.getElementById("sqrt");

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
      if (/(\d+\.)$/g.test(output.textContent)) {
        return;
      } else if (
        output.textContent.length === 0 ||
        /\.$/g.test(output.textContent)
      ) {
        return;
      } else if (/[+-/*](\d+\.\d+)$/g.test(output.textContent)) {
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
      output.textContent = output.textContent + "+";
      break;
    }
    case "-": {
      output.textContent = output.textContent + "-";
      break;
    }
    case "*": {
      output.textContent = output.textContent + "*";
      break;
    }
    case "/": {
      output.textContent = output.textContent + "/";
      break;
    }
    case "DEL": {
      let s = output.textContent;
      output.textContent = s.slice(0, s.length - 1);
      break;
    }
    case "x^2": {
      output.textContent = Math.sqrt(Number(output.textContent));
      break;
    }
    case "C": {
      output.textContent = "";
      break;
    }
    default:
      return;
  }
  if (!/^\d*$/g.test(output.textContent)) {
    sqrt.setAttribute("disabled", true);
  } else {
    sqrt.removeAttribute("disabled");
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
  if (/[+-/*]0\//g.test(s)) {
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
  const operands = finalString.match(/\d+(\.\d+)?/g);
  console.log(operands);
  let result = parseFloat(operands[0]);

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        result = result + parseFloat(operands[i + 1]);
        break;
      case "-":
        result = result - parseFloat(operands[i + 1]);
        break;
    }
  }

  return result;
}

//Floats with +- don't work
//Truncate output
//limit length of the input per integer
