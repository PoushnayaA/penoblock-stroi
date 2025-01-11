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
  const headers = document.querySelectorAll('.price__title-wrapper');

  function changeHeight(items, adaptive) {
    items.forEach((item) => {
      item.style.height = 'auto';
    });
    if (adaptive) {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        return
      } else {
        let maxHeight = 0;

        items.forEach((item) => {
          const itemHeight = item.offsetHeight;
          if (itemHeight > maxHeight) {
            maxHeight = itemHeight;
          }
        });

        items.forEach((item) => {
          item.style.height = `${maxHeight}px`;
        });
      }

    } else {
      let maxHeight = 0;

      items.forEach((item) => {
        const itemHeight = item.offsetHeight;
        if (itemHeight > maxHeight) {
          maxHeight = itemHeight;
        }
      });


      items.forEach((item) => {
        item.style.height = `${maxHeight}px`;
      });
    }
  }

  window.addEventListener('load', () => {
    changeHeight(advantagesItems, false);
    changeHeight(headers, true);
});

window.addEventListener('resize', () => {
    changeHeight(advantagesItems, false);
    changeHeight(headers, true);
});



  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

