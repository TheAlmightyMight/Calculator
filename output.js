const output = document.querySelector(".output__input");
const keyboard = document.getElementById("keyboard");

keyboard.addEventListener("click", function (e) {
  switch (e.target.textContent) {
    case "1": {
      console.log(e.target);
      break;
    }
    case "2": {
      console.log(e.target);
      break;
    }
    case "3": {
      console.log(e.target);
      break;
    }
    case "4": {
      console.log(e.target);
      break;
    }
    case "5": {
      console.log(e.target);
      break;
    }
    case "6": {
      console.log(e.target);
      break;
    }
    case "7": {
      console.log(e.target);
      break;
    }
    case "8": {
      console.log(e.target);
      break;
    }
    case "9": {
      console.log(e.target);
      break;
    }
    case "0": {
      console.log(e.target);
      break;
    }
    case ".": {
      console.log(e.target);
      break;
    }
    case "=": {
      console.log(e.target);
      break;
    }
    case "+": {
      console.log(e.target);
      break;
    }
    case "-": {
      console.log(e.target);
      break;
    }
    case "*": {
      console.log(e.target);
      break;
    }
    case "/": {
      console.log(e.target);
      break;
    }
    case "delete": {
      console.log(e.target);
      break;
    }
    case "x^2": {
      console.log(e.target);
      break;
    }
    case "C": {
      console.log(e.target);
      break;
    }
    default:
      return;
  }
});
