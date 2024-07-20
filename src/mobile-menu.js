import scroll from './smoothScroll.js';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLinks = document.querySelectorAll('.mob-menu-link');
  const shopNowBtnHeader = document.querySelector('.header-btn');
  const shopNowBtnMobile = document.querySelector('.mob-menu-btn');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true';
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    //блокировка и разблокировка скролла
    document.body.classList.toggle(
      'no-scroll',
      mobileMenu.classList.contains('is-open')
    );
  };

  const closeMenu = () => {
    openMenuBtn.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('is-open');

    document.body.classList.remove('no-scroll'); //разблокировка скролла
  };

  const scrollToOrder = event => {
    event.preventDefault(); // Предотвращаем стандартное действие кнопки
    const orderSection = document.querySelector('#your-order'); // Находим секцию "Your Order"
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' }); // Плавно скроллим к секции
      if (mobileMenu.classList.contains('is-open')) {
        closeMenu(); // Закрываем мобильное меню
      }
    }
  };

  // Добавляем обработчики событий
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
    link.addEventListener('click', scroll);
  });

  // Обработчики для кнопок "Shop now"
  shopNowBtnHeader.addEventListener('click', scrollToOrder);
  shopNowBtnMobile.addEventListener('click', scrollToOrder);

  // Закрытие мобильного меню при смене ориентации устройства
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  mediaQuery.addEventListener('change', e => {
    if (e.matches) {
      closeMenu();
    }
  });
})();
