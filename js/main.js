'use strict'

// ハンバーガーメニュー
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

// スムーススクロール
// headerの高さ
const headerHeight = 80;
// aタグのうち、href属性が#から始まるものを全て取得
const links = document.querySelectorAll('a[href^="#"]');
console.log(links);

// linksの要素それぞれにクリックイベントを指定
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (e) => {
    // デフォルトの動作をキャンセル
    e.preventDefault();
    // href属性の値を取得（#～）
    const href = links[i].getAttribute('href');
    // hrefを使ってリンク先の要素を取得
    const target = document.getElementById(href.replace('#', ''));
    // リンク先の要素のブラウザの上端からの距離、スクロール量、headerの高さを使ってスクロール先の位置を取得
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
    console.log(target.getBoundingClientRect().top);
    console.log(window.scrollY);
    console.log(headerHeight);

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  });
}


// PICK UP のカルーセルスライダー
$('.pickup-items').slick({
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '8%',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// FEATURE の画像フェードイン
document.addEventListener('scroll', () => {
  const featureImg = document.querySelectorAll('.feature-img');
  const margin = 200;

  for (let i = 0; i < featureImg.length; i++) {
    if (window.innerHeight > featureImg[i].getBoundingClientRect().top + margin) {
      featureImg[i].classList.add('on');
    }
  }
});