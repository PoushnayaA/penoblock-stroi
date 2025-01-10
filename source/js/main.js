import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';
import Swiper from './vendor/swiper';
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  new Swiper('.swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  const advantagesItems = document.querySelectorAll('.advantages__item');

  function changeHeight() {
    advantagesItems.forEach((item) => {
      item.style.height = 'auto';
  });
    let maxHeight = 0;

    advantagesItems.forEach((item) => {
      const itemHeight = item.offsetHeight;
      if (itemHeight > maxHeight) {
          maxHeight = itemHeight;
      }
  });


  advantagesItems.forEach((item) => {
      item.style.height = `${maxHeight}px`;
  });
}

window.addEventListener('load', changeHeight);

window.addEventListener('resize', changeHeight);



  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

