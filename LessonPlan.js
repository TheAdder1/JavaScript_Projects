const overlay = document.querySelector('.overlay');
const btnsCloseModals = document.querySelectorAll('.close-modal');
const btnsOpenModals = document.querySelectorAll('.day-problem');

//Open Day 1
const openE1D1 = function () {
  document.querySelector('.e1d1').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openE2D1 = function () {
  document.querySelector('.e2d1').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openM1D1 = function () {
  document.querySelector('.m1d1').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openM2D1 = function () {
  document.querySelector('.m2d1').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openHD1 = function () {
  document.querySelector('.hd1').classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Open Day 2
const openE1D2 = function () {
  document.querySelector('.e1d2').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openE2D2 = function () {
  document.querySelector('.e2d2').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openM1D2 = function () {
  document.querySelector('.m1d2').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openM2D2 = function () {
  document.querySelector('.m2d2').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openHD2 = function () {
  document.querySelector('.hd2').classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Open Day 3
const openE1D3 = function () {
  document.querySelector('.e1d3').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openE2D3 = function () {
  document.querySelector('.e2d3').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openM1D3 = function () {
  document.querySelector('.m1d3').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openM2D3 = function () {
  document.querySelector('.m2d3').classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const openHD3 = function () {
  document.querySelector('.hd3').classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Close Day 1
const closeE1D1 = function () {
  document.querySelector('.e1d1').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeE2D1 = function () {
  document.querySelector('.e2d1').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeM1D1 = function () {
  document.querySelector('.m1d1').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeM2D1 = function () {
  document.querySelector('.m2d1').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeHD1 = function () {
  document.querySelector('.hd1').classList.add('hidden');
  overlay.classList.add('hidden');
};

//Close Day 2
const closeE1D2 = function () {
  document.querySelector('.e1d2').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeE2D2 = function () {
  document.querySelector('.e2d2').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeM1D2 = function () {
  document.querySelector('.m1d2').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeM2D2 = function () {
  document.querySelector('.m2d2').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeHD2 = function () {
  document.querySelector('.hd2').classList.add('hidden');
  overlay.classList.add('hidden');
};

//Close Day 3
const closeE1D3 = function () {
  document.querySelector('.e1d3').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeE2D3 = function () {
  document.querySelector('.e2d3').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeM1D3 = function () {
  document.querySelector('.m1d3').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeM2D3 = function () {
  document.querySelector('.m2d3').classList.add('hidden');
  overlay.classList.add('hidden');
};
const closeHD3 = function () {
  document.querySelector('.hd3').classList.add('hidden');
  overlay.classList.add('hidden');
};

const btnOpenArray = [
  openE1D1,
  openE2D1,
  openM1D1,
  openM2D1,
  openHD1,
  openE1D2,
  openE2D2,
  openM1D2,
  openM2D2,
  openHD2,
  openE1D3,
  openE2D3,
  openM1D3,
  openM2D3,
  openHD3,
];
const btnCloseArray = [
  closeE1D1,
  closeE2D1,
  closeM1D1,
  closeM2D1,
  closeHD1,
  closeE1D2,
  closeE2D2,
  closeM1D2,
  closeM2D2,
  closeHD2,
  closeE1D3,
  closeE2D3,
  closeM1D3,
  closeM2D3,
  closeHD3,
];

for (let i = 0; i < btnsOpenModals.length; i++)
  btnsOpenModals[i].addEventListener('click', btnOpenArray[i]);
for (let i = 0; i < btnsCloseModals.length; i++) {
  btnsCloseModals[i].addEventListener('click', btnCloseArray[i]);
  overlay.addEventListener('click', btnCloseArray[i]);
}
