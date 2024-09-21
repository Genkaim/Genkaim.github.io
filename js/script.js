document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const isHomePage = currentUrl === window.location.origin + "/" ||  currentUrl === window.location.origin + "/#" ;
  const cover = document.querySelector(".cover");
  const header = document.querySelector(".header");
  if (!isHomePage)return;
  const _cover_height = header.style.height;
  if (cover) {
    function adjustCoverHeight() {
      const windowHeight = window.innerHeight;
      cover.style.height = `${windowHeight - _cover_height}px`;
    }
    window.addEventListener("resize", adjustCoverHeight);
    adjustCoverHeight();
  }
});
let lastScrollTop = 0; // 记录上一次滚动的位置

document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector(".main");
  const currentUrl = window.location.href;
  const isHomePage = currentUrl === window.location.origin + "/" ||  currentUrl === window.location.origin + "/#";
  if (!isHomePage) return;
  const header = document.querySelector(".header");
  const windowHeight = window.innerHeight;
  const headerHeight = header.offsetHeight; // 使用 offsetHeight 获取元素的实际高度
  const targetPosition = windowHeight - headerHeight;
  const footer = document.querySelector(".footer");
  const app = document.querySelector("body");
  // 监听滚轮事件
  window.addEventListener("wheel", (event) => {
    const scrollTop = window.scrollY;
    // 判断是否滚动到顶部
    if (scrollTop === 0) {
      main.style.top = `${0}px`;
      footer.style.top = `${0}px`;
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
    // 判断是否从顶部开始滚动
    if (lastScrollTop === 0 && scrollTop > 0) {
      main.style.top = `-${targetPosition}px`;
      footer.style.top = `-${targetPosition}px`;
      app.style.height = `${app.offsetHeight}px`;
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
    lastScrollTop = scrollTop; // 更新上一次滚动的位置
  });
});
function lockScroll() {
  let widthBar = 17, root = document.documentElement;
  if (typeof window.innerWidth == 'number') {
      widthBar = window.innerWidth - root.clientWidth;
  }
  root.style.overflow = 'hidden';
  root.style.borderRight = widthBar + 'px solid transparent';
}
function unlockScroll() {
  let root = document.documentElement;
  root.style.overflow = '';
  root.style.borderRight = '';
}
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("wheel", (event) => {
    const header = document.querySelector(".header");
    const windowHeight = window.innerHeight;
    const headerHeight = header.offsetHeight; // 使用 offsetHeight 获取元素的实际高度
    const targetPosition = windowHeight - headerHeight;
    const scrollTop = window.scrollY;
    const doc_height = document.body.offsetHeight;
    const temp = doc_height - targetPosition*2
    if(scrollTop > temp) {
      window.scrollTo({
        top: temp,
        behavior: "smooth",
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#b2t");
  window.addEventListener("wheel", (event) => {
    if (window.scrollY > window.innerHeight) {
      button.style.opacity = "1";
    } else {
      button.style.opacity = "0";
    }
  });
  button.addEventListener("click", function () {
    button.style.opacity = "0";
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
//defined animation timeline options

