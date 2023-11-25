const dot = document.getElementById('cursor-dot');
const circle = document.getElementById('cursor-circle');
let isLightMode;

const updateCursorColor = () => {
  const theme = document.documentElement.getAttribute('data-theme');
  isLightMode = theme === 'light';

  if (isLightMode) {
    dot.style.background = '#000';
    circle.style.border = '1px solid #000';
  } else {
    dot.style.background = '#fff';
    circle.style.border = '1px solid #fff';
  }
};

updateCursorColor();

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
      updateCursorColor();
    }
  });
});

observer.observe(document.documentElement, { attributes: true });

let dotX = 0, dotY = 0, circleX = 0, circleY = 0;
document.addEventListener('mousemove', (e) => {
  dotX = e.pageX;
  dotY = e.pageY;
  dot.style.top = `${dotY}px`;
  dot.style.left = `${dotX}px`;
  
  if (!dot.style.opacity || !circle.style.opacity) {
    dot.style.opacity = circle.style.opacity = 1;
  }
});

const circleAnimation = () => {
  const parts = 6;
  circleX += (dotX - circleX) / parts;
  circleY += (dotY - circleY) / parts;
  
  circle.style.top = `${circleY}px`;
  circle.style.left = `${circleX}px`;
  
  window.requestAnimationFrame(circleAnimation);
};

window.requestAnimationFrame(circleAnimation);

const elements = document.querySelectorAll('a, img, button, .toggle-button, .copy-button, #article-container .highlight-tools .copy-button, #article-container .highlight-tools .expand, #nav .site-page, .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet, #pagination .page-number.current, #pagination .page-number');

elements.forEach(element => {
  element.addEventListener('mouseover', (e) => {
    circle.style.backgroundColor = isLightMode ? `rgba(0, 0, 0, 0.4)` : `rgba(255, 255, 255, 0.4)`;
    circle.style.border = `1px solid transparent`;
    circle.style.width = `80px`;
    circle.style.height = `80px`;
  });
  
  element.addEventListener('mouseleave', (e) => {
    circle.style.backgroundColor = `rgba(0, 0, 0, 0)`;
    circle.style.border = isLightMode ? '1px solid #000' : '1px solid #fff';
    circle.style.width = '50px';
    circle.style.height = '50px';
  });
});
document.addEventListener('pjax:end', function() {
  const elements = document.querySelectorAll('a, img, button, .toggle-button, .copy-button, #article-container .highlight-tools .copy-button, #article-container .highlight-tools .expand, #nav .site-page, .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet, #pagination .page-number.current, #pagination .page-number');

  elements.forEach(element => {
    element.addEventListener('mouseover', (e) => {
      circle.style.backgroundColor = isLightMode ? `rgba(0, 0, 0, 0.4)` : `rgba(255, 255, 255, 0.4)`;
      circle.style.border = `1px solid transparent`;
      circle.style.width = `80px`;
      circle.style.height = `80px`;
    });
    
    element.addEventListener('mouseleave', (e) => {
      circle.style.backgroundColor = `rgba(0, 0, 0, 0)`;
      circle.style.border = isLightMode ? '1px solid #000' : '1px solid #fff';
      circle.style.width = '50px';
      circle.style.height = '50px';
    });
  });
});

