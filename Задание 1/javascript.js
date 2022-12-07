// В <svg> добавляем сразу код двух кнопок svg-arrow1 и svg-arrow2, через CSS изначально скрываем svg-arrow2.
//При нажатии на кнопку добавляем класс btn--toggle, и через CSS скрываем svg-arrow1 и отображаем svg-arrow2.
//При повторном нажатии удаляем класс.

document.querySelector('.btn').addEventListener('click', function(e) {
    e.target.closest('.btn').classList.toggle('btn--toggle');
  })