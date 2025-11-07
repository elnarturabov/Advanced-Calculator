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
    } else if (value === "=") {
      
       try {
    
    if (screeninput.textContent.trim() === "") return;

    let result = eval(screeninput.textContent);
    
    screenoutput.textContent = result;

  } catch (err) {
    screenoutput.textContent = "Error";
  }
    } else {
      screeninput.textContent += value;
      operators.style.color = "blue";
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
function resizeFont() {
  const length = screeninput.textContent.length;

  if (length > 18) {
    screeninput.style.fontSize = "1.8rem";
  } else {
    screeninput.style.fontSize = "2.4rem"; // default
  }
}
