'use strict'

const hambBtn = document.querySelector('.hamb-btn');
const topBar = document.querySelector('.top-bar');
const middleBar = document.querySelector('.middle-bar');
const bottomBar = document.querySelector('.bottom-bar');
const hambOverlay = document.querySelector('.hamb-overlay');
const hambMenu = document.querySelector('.hamb-menu');

hambBtn.addEventListener('click', () => {
  topBar.classList.toggle('active');
  middleBar.classList.toggle('active');
  bottomBar.classList.toggle('active');
  hambOverlay.classList.toggle('active');
  hambMenu.classList.toggle('active');
});

hambOverlay.addEventListener('click', () => {
  topBar.classList.toggle('active');
  middleBar.classList.toggle('active');
  bottomBar.classList.toggle('active');
  hambOverlay.classList.toggle('active');
  hambMenu.classList.toggle('active');
});