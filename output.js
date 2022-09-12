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
      output.textContent = output.textContent + ".";
      break;
    }
    case "=": {
      let str = output.textContent;
      if (str.length <= 20) {
        output.textContent = calculate(str);
      } else {
        output.textContent = "Exceeding allowed limit of calculation length";
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
    case "delete": {
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

function evaluate(arr, s) {
  const reg = /[*/]/gi;
  const resultArray = [];
  for (let k = 0; k < arr.length; k++) {
    const values = arr[k].split(/[*/]/);
    const operations = arr[k].match(reg);
    let sum = values[0];

    for (let i = 0; i < operations.length; i++) {
      switch (operations[i]) {
        case "*":
          sum = sum * values[i + 1];
          break;
        case "/":
          sum = sum / values[i + 1];
          break;
      }
    }
    resultArray.push(sum);
  }

  return resultArray;
}

function calculate(s) {
  if (/(\/(?=0))|(0(?=\/))/g.test(s)) {
    return "Cannot divide by zero";
  }
  const arr = s.match(/(\d+[/*]\d+([/*]\d+)*)/gi);
  let priorityOperations;
  let finalString = s;
  if (arr) {
    priorityOperations = evaluate(arr, s);

    for (let i = 0; i < priorityOperations.length; i++) {
      finalString = finalString.replace(arr[i], priorityOperations[i]);
    }
  }

  if (arr.join("") === s) {
    return finalString;
  }

  const operations = finalString.match(/[+-]/g);
  const operands = finalString.match(/\d+/g);
  let result = Number(operands[0]);

  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        result = result + Number(operands[i + 1]);
        break;
      case "-":
        result = result - operands[i + 1];
        break;
    }
  }

  return result;
}

//TODOS:
//Fix calculate function to output a more precise integer
//Fix calculate function to not output undefined/NaN if given 0 with / operator <-- Done
//Properly validate calculate function input to give an error if it is not correct <-- Done
//Fix calculate function to not throw an error if no + - operation was provided <-- Done !
