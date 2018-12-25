const nav = document.querySelector('.header');
const navHeight = nav.offsetHeight;
const addClassNav = () => nav.classList.add('header-scroll');
const removeClassNav = () => nav.classList.remove('header-scroll');

function changeNav() {
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    if (scrollPos >= navHeight) {
      addClassNav();
    } else {
      removeClassNav();
    }
  });
}

export default changeNav;
