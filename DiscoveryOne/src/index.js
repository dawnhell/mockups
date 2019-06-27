import './styles/main.scss';

document.addEventListener('DOMContentLoaded', function() {
  const elems = document.querySelectorAll('.scrollspy');
  const instances = M.ScrollSpy.init(elems, {});

  const headerRef = document.querySelector('.Banner .navbar-fixed');

  document.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 0) {
      headerRef.classList.add('black-background')
    } else if (headerRef.classList.contains('black-background')) {
      headerRef.classList.remove('black-background')
    }
  })
});
