document.addEventListener('DOMContentLoaded', () => {
  const contentItems = document.querySelectorAll('.content-item');

  const setImageBackgrounds = () => {
    contentItems.forEach(item => {
      const bgImage = item.getAttribute('data-bg');
      item.style.backgroundImage = `url(${bgImage})`;
    });
  };

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const viewportHeight = window.innerHeight;

    contentItems.forEach((item, index) => {
      const itemOffsetTop = item.offsetTop;

      if (scrollTop >= itemOffsetTop - viewportHeight / 2 &&
          scrollTop < itemOffsetTop + viewportHeight / 2) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  setImageBackgrounds();
  window.addEventListener('scroll', onScroll);
  onScroll();  // Initial call to set the correct active item on load
});
