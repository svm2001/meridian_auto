export function scrollTop () {
  const scrollToTopButton = document.querySelector('.scrollToTop')
  document.addEventListener('scroll', (e) => {
    if(scrollToTopButton) {
      if(window.pageYOffset >= 1000) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    }
  })

  function scroll(target, duration) {
    let targetElement = document.querySelector(target);
    let targetPosition = targetElement.offsetTop;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    scrollToTopButton.classList.remove('show');
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }

  if(scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
      scroll('body', 1000);
    })
  }
}
