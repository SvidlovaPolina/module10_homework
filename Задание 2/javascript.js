// Размер экрана — это ширина и высота всего экрана: монитора или мобильного дисплея.

const btn1 = document.querySelector('.j-btn-test1');

const screenWidth = window.screen.width
const screenHeight = window.screen.height

btn1.addEventListener('click', () => {
  alert('Ширина экрана: ' + screenWidth + ', высота экрана: ' + screenHeight);
  });

// Доступный размер экрана — это ширина и высота активного экрана без панели инструментов операционной системы.

const btn2 = document.querySelector('.j-btn-test2');

const availableScreenWidth = window.screen.availWidth
const availableScreenHeight = window.screen.availHeight

btn2.addEventListener('click', () => {
  alert('Ширина активного экрана: ' + availableScreenWidth + ', высота активного экрана: ' + availableScreenHeight);
  });

// Размер внешнего окна — это ширина и высота текущего окна браузера, включая адресную строку, панель вкладок и другие панели браузера.

const btn3 = document.querySelector('.j-btn-test3');

const windowOuterWidth = window.outerWidth
const windowOuterHeight = window.outerHeight

btn3.addEventListener('click', () => {
  alert('Ширина текущего окна браузера: ' + windowOuterWidth + ', высота текущего окна браузера: ' + windowOuterHeight);
  });

// Внутренний размер окна — это ширина и высота области просмотра (вьюпорта).

const btn4 = document.querySelector('.j-btn-test4');

const windowInnerWidth1 = window.innerWidth
const windowInnerHeight1 = window.innerHeight

const windowInnerWidth2 = document.documentElement.clientWidth
const windowInnerHeight2 = document.documentElement.clientHeight

btn4.addEventListener('click', () => {
  alert('С полосой прокрутки:\nширина вьюпорта: ' + windowInnerWidth1 + ', высота вьюпорта: ' + windowInnerHeight1);
  alert('Без полосы прокрутки:\nширина вьюпорта: ' + windowInnerWidth2 + ', высота вьюпорта: ' + windowInnerHeight2);
  });

// Размер веб-страницы — это ширина и высота отображаемого содержимого (отрендеренного контента).
// Включает в себя внутренние отступы страницы, но не включает границы, внешние отступы и полосы прокрутки
// Если pageHeight больше, чем внутренняя высота окна, значит, присутствует вертикальная полоса прокрутки.

const btn5 = document.querySelector('.j-btn-test5');

const pageWidth = document.documentElement.scrollWidth
const pageHeight = document.documentElement.scrollHeight

btn5.addEventListener('click', () => {
  alert('Ширина контента: ' + windowOuterWidth + ', высота контента: ' + windowOuterHeight);
  });