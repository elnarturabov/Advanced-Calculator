const screeninput = document.getElementById("input-num");
const screenoutput = document.getElementById("output-num");
const changerButtons = document.querySelectorAll(".changer");
const changeGrid = document.querySelector(".keyboard");
const buttons = document.querySelectorAll(".button");
const operators = document.getElementsByClassName("operator");

let input = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const value = btn.value;
    if (value === "Clear") {
      screeninput.textContent = "";
      screenoutput.textContent = "";
    } else if (value === "backspace") {
      input = screeninput.textContent.slice(0, -1);
      screeninput.textContent = input;
      resizeFont();
    } else if (value === "=") {
      try {
        if (screeninput.textContent.trim() === "") return;
        let expression = screeninput.textContent;
        // √
        expression = expression.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");
        // factorial
        expression = expression.replace(/(\d+)!/g, "factorialCalculate($1)");
        // lg
        expression = expression.replace(/lg(\d+(\.\d+)?)/g, "Math.log10($1)");
        // ln
        expression = expression.replace(/ln(\d+(\.\d+)?)/g, "Math.log($1)");

        let result = eval(expression);
        // Outputa daha əlavə etməsin
        if (screenoutput.textContent.length > 9 ) return; 
        screenoutput.textContent = result;
      } catch (err) {
        screenoutput.textContent = "Error";
      }
    } else if (value === "!") {
      screeninput.textContent += "!";
      resizeFont();
    } else if (value === "√") {
      screeninput.textContent += "√";
      resizeFont();
    } else if (value === "lg") {
      screeninput.textContent += "lg";
      resizeFont();
    } else if (value === "ln") {
      screeninput.textContent += "ln";
      resizeFont();
    } else {
      // inputa daha əlavə etməsin
      if (screeninput.textContent.length >= 26) return; 
      screeninput.textContent += value;
      resizeFont();
    }
  });
});
function changeDisplayStyle() {
  changerButtons.forEach((btn) => {
    if (btn.style.display === "none" || btn.style.display === "") {
      btn.style.display = "block";
      changeGrid.style.gridTemplateColumns = "repeat(5,1fr)";
    } else {
      btn.style.display = "none";
      changeGrid.style.gridTemplateColumns = "repeat(4,1fr)";
    }
  });
}
function factorialCalculate(n) {
  if (n < 0) {
    return "Error";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function resizeFont() {
  const length = screeninput.textContent.length;

  if (length > 12) {
    screeninput.style.fontSize = "2.8rem";
  } else {
    screeninput.style.fontSize = "3.3rem";
  }
}
