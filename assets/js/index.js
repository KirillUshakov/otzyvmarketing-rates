function initSmoothAnchor (anchor, doScrollNow = false) {
  const doScroll = () => {
    const headerHeight = document.querySelector('#header_block').offsetHeight;
    const additionalOffset = 20;
    const offsetTop = document.querySelector(anchor.getAttribute('href')).offsetTop || 0;
    window.scrollTo({
      left: 0,
      top: offsetTop - headerHeight - additionalOffset,
      behavior: 'smooth'
    });
  }

  if (anchor.getAttribute('href') == '#') return;

  if (doScrollNow) {
    doScroll();
    return;
  }

  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    doScroll();
  });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => initSmoothAnchor(anchor));
document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.hasAttribute('href')) {
    if (!target.href.includes('#')) return;

    e.preventDefault();
    initSmoothAnchor(target, true);
  }
})
