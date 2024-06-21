let btnChiffre = document.querySelectorAll("button.btn-type-1");
let screen = document.querySelector(".calc-screen");
let coma = document.querySelector("#btn-coma");
let clear = document.querySelector("#btn-clear");
let signNumber = document.querySelector("#btn-sign");
let operators = document.querySelectorAll(".operator");

let firstNumber = 0;
let secondNumber = 0;
let answer = 0;
let operator = "";
let calcTest = false;
let screenNum = "";
let virgule = "";

//Add minus sign
signNumber.addEventListener("click", function () {
  screenNum = screen.value;

  if (screenNum.includes("-")) {
    screen.value = screenNum * -1;
  } else {
    if (screen.value === "") {
      screen.value;
    } else {
      screen.value = screenNum * -1;
      // screen.value += parseFloat(screenNum) * -1;
      console.log("Signnnnnn");
    }
  }
});

//coma btn
coma.addEventListener("click", function (e) {
  screenNum = screen.value;
  virgule = e.target.value;

  console.log("screen recuperer: " + screenNum);
  console.log("virgule recup: " + virgule);

  if (screenNum.includes(virgule)) {
    screen.value = screen.value;
    console.log("le point existe");
  } else {
    if (screen.value !== "") {
      screen.value += virgule;
    } else {
      screen.value = "0" + virgule;
    }

    console.log("le point n'existe pas");
  }
});

btnChiffre.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (answer === 0) {
      //read number
      if (operator === "") {
        screen.value += parseFloat(e.target.value);
        // putSign();
        firstNumber = parseFloat(screen.value);

        console.log("Nombre1: " + firstNumber);
      } else {
        secondNumber += parseFloat(e.target.value);
        screen.value = parseFloat(secondNumber);
        // putSign();
        console.log("Nombre2: " + secondNumber);
      }
    } else {
      // answer = 0;
      // firstNumber = 0;
      firstNumber = answer;
      screen.value = "";
      screen.value += parseFloat(e.target.value);
      secondNumber = screen.value;
    }
  });
});

//operator Sign
operators.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.value !== "=") {
      operator = e.target.value;
      putSign();
    } else {
      switch (operator) {
        case "+":
          add();
          break;

        case "-":
          subtract();
          break;
        case "x":
          multiply();
          break;
        case "÷":
          divide();
          break;

        default:
          break;
      }
    }
  });
});

clear.addEventListener("click", function () {
  screen.value = "";
  firstNumber = answer;
  answer = 0;
  secondNumber = 0;
  operator = "";
  screenNum = "";
  virgule = "";
});

function add() {
  answer = parseFloat(firstNumber) + parseFloat(secondNumber);
  console.log("Somme : " + answer);
  screen.value = answer;
  firstNumber = answer;
  secondNumber = answer;
  screenNum = "";
  virgule = "";
}
function subtract() {
  answer = parseFloat(firstNumber) - parseFloat(secondNumber);
  console.log("Soustraction : " + answer);
  screen.value = answer;
  firstNumber = answer;
  secondNumber = answer;
  screenNum = "";
  virgule = "";
}
function multiply() {
  answer = parseFloat(firstNumber) * parseFloat(secondNumber);
  console.log("Produit : " + answer);
  screen.value = answer;
  firstNumber = answer;
  secondNumber = answer;
  screenNum = "";
  virgule = "";
}
function divide() {
  answer = parseFloat(firstNumber) / parseFloat(secondNumber);
  console.log("quotiant : " + answer);
  screen.value = answer;
  firstNumber = answer;
  secondNumber = answer;
  screenNum = "";
  virgule = "";
}
function percentage() {
  screen.value = parseFloat(screen.value) / 100;
  firstNumber = answer;
  secondNumber = answer;
  screenNum = "";
  virgule = "";

  console.log("percentage : " + answer);
}

function putSign() {
  if (firstNumber.includes("-")) {
    firstNumber = parseFloat(firstNumber) * -1;
    secondNumber = parseFloat(secondNumber);
  } else if (secondNumber.includes("-")) {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber) * -1;
  } else if (firstNumber.includes("-") && secondNumber.includes("-")) {
    firstNumber = parseFloat(firstNumber) * -1;
    secondNumber = parseFloat(secondNumber) * -1;
  } else {
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
  }
}
