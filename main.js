const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    console.log("Kliklənən buton:", this.value);
  });
});

function changeDisplayStyle() {
  const changerButtons = document.querySelectorAll(".changer");
  const changeGrid = document.getElementById("keyboard");
  
  changerButtons.forEach((btn) => {
    if (btn.style.display === "none" || btn.style.display === "") {
      btn.style.display = "block";
      changeGrid.style.gridTemplateColumns = "repeat(5,1fr)";  
    }
      else {
      btn.style.display = "none";
      changeGrid.style.gridTemplateColumns = "repeat(4,1fr)";
    }
})};
