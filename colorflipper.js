const generateColor = function () {
  let color = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + color.slice(0, 6);
};

const changeBackground = function (newColor) {
  document.querySelector("html").style.backgroundColor = newColor;
};
const changeBtnBackground = function (newColor) {
  document.querySelector(".change").style.backgroundColor = newColor;
};
const changeColorOfName = function (newColor) {
  document.querySelector(".colorName").style.color = newColor;
};
const changeColorName = function (newColor) {
  document.querySelector(".colorName").textContent = newColor;
};
document.querySelector(".change").addEventListener("click", function () {
  let newColor = generateColor();
  changeBackground(newColor);
  changeBtnBackground(newColor);
  changeColorOfName(newColor);
  changeColorName(newColor);
});
