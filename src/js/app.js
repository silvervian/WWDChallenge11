import changeNav from './navScroll';
import menuMobile from './menuMobile';
import scrollSpyMenu from './scrollSpyMenu';

changeNav();
menuMobile();
scrollSpyMenu();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
