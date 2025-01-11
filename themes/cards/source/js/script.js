document.addEventListener("DOMContentLoaded", () => {
  const postContent = document.querySelector(".post__content");

  if (postContent) {
    const children = postContent.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.classList.contains("katex-block")) {
        child.style.background = "#f4f4f496";
        child.style.borderRadius = "10px";
        child.style.padding = "1px";
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const isHomePage =
    currentUrl === window.location.origin + "/" ||
    currentUrl === window.location.origin + "/#" ||
    currentUrl.includes("/page");
  const cover = document.querySelector(".cover");
  const header = document.querySelector(".header");
  if (!isHomePage) return;
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
let temp_cnt = 0;
document.addEventListener("DOMContentLoaded", () => {
  // 监听滚轮事件
  window.addEventListener("wheel", (event) => {
    const main = document.querySelector(".main");
    const currentUrl = window.location.href;
    const isHomePage =
      currentUrl === window.location.origin + "/" ||
      currentUrl === window.location.origin + "/#" ||
      currentUrl.includes("/page");
    if (!isHomePage) return;
    const header = document.querySelector(".header");
    const windowHeight = window.innerHeight;
    const headerHeight = header.offsetHeight; // 使用 offsetHeight 获取元素的实际高度
    const targetPosition = windowHeight - headerHeight;
    const footer = document.querySelector(".footer");
    const app = document.querySelector("body");
    const cover_cover = document.querySelector(".cover_cover");
    const scrollTop = window.scrollY;
    // 判断是否滚动到顶部
    if (scrollTop === 0) {
      if(temp_cnt == 0) {
        setTimeout(() => {
          temp_cnt = 0;
        }, 500);
        temp_cnt++;
        return;
      }
      else {
        temp_cnt++;
        if(temp_cnt < 2) return
      }
      main.style.top = `${0}px`;
      footer.style.top = `${0}px`;
      cover_cover.style.backgroundColor = "transparent";
      cover_cover.style.backdropFilter = "blur(0px)"
      setTimeout(() => {
        if(footer.style.top === "0px"){
          cover_cover.style.display = "none";
        }
      }, 1000);
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
      temp_cnt = 0;
    }
    // 判断是否从顶部开始滚动
    if (lastScrollTop === 0 && scrollTop > 0) {
      cover_cover.style.display = "flex";
      setTimeout(() => {
        main.style.top = `-${targetPosition}px`;
        cover_cover.style.backgroundColor = "#f4f4f4";
        cover_cover.style.backdropFilter = "blur(20px)";
        footer.style.top = `-${targetPosition}px`;
        app.style.height = `${app.offsetHeight}px`;
      }, 10);
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
    lastScrollTop = scrollTop; // 更新上一次滚动的位置
  });
});
function lockScroll() {
  let widthBar = 17,
    root = document.documentElement;
  if (typeof window.innerWidth == "number") {
    widthBar = window.innerWidth - root.clientWidth;
  }
  root.style.overflow = "hidden";
  root.style.borderRight = widthBar + "px solid transparent";
}
function unlockScroll() {
  let root = document.documentElement;
  root.style.overflow = "";
  root.style.borderRight = "";
}
document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const isHomePage =
    currentUrl === window.location.origin + "/" ||
    currentUrl === window.location.origin + "/#" ||
    currentUrl.includes("/page");
  if (!isHomePage) return;
  window.addEventListener("wheel", (event) => {
    const header = document.querySelector(".header");
    const windowHeight = window.innerHeight;
    const headerHeight = header.offsetHeight; // 使用 offsetHeight 获取元素的实际高度
    const targetPosition = windowHeight - headerHeight;
    const scrollTop = window.scrollY;
    const doc_height = document.body.offsetHeight;
    const temp = doc_height - targetPosition * 2;
    if (scrollTop > temp) {
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
    if (window.scrollY > 100) {
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

document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const isArchivesPage =
    currentUrl === window.location.origin + "/archives" ||
    currentUrl === window.location.origin + "/archives/";
  const cover = document.querySelector(".cover");
  const footer = document.querySelector(".footer");
  if (!isArchivesPage) return;
  cover.style.display = "none";
  const main = document.querySelector(".main");
  main.style.top = "100px";
  footer.style.top = "80px";
      // 获取父元素
      var navbarMenus = document.querySelector(".navbar__menus");

      // 查找所有的a标签
      var links = navbarMenus.querySelectorAll("a");
  
      // 对每个a标签执行操作
      links.forEach(function (link) {
        // 获取当前a标签的href属性值
        var href = link.getAttribute("href");
        if(href == "/archives/"){
          link.style.backgroundColor = "white";
        }
  
        // 你可以在这里添加更多的操作，比如根据href做不同的事情
      });
});
document.addEventListener("DOMContentLoaded", () => {
  // 获取所有 .highlight 元素
  const highlights = document.querySelectorAll(".highlight");

  // 遍历每个 .highlight 元素
  highlights.forEach((highlight) => {
    // 获取 .highlight 元素的所有类名
    const classes = Array.from(highlight.classList).filter(
      (cls) => cls !== "highlight"
    );
    // 查找 .highlight 下的第一个 table 元素
    const table = highlight.querySelector("table");

    if (table) {
      if(table.offsetHeight > 500){
        table.style.height = '500px';
      }
      // 创建 div
      const div = document.createElement("div");
      div.classList.add("highlight_header"); // 添加类名以便后续样式
      const show = document.createElement("text");
      show.textContent = classes[0];
      show.classList.add("highlight_language"); // 添加类名以便后续样式
      div.appendChild(show);
      // 创建按钮
      const button = document.createElement("button");
      button.textContent = "复制";
      button.classList.add("highlight_copy_button"); // 添加类名以便后续样式
      div.appendChild(button);

      // 获取代码内容
      const codeContent = table.querySelector(".code").innerText;

      // 为按钮添加点击事件监听器
      button.addEventListener("click", () => {
        navigator.clipboard
          .writeText(codeContent)
          .then(() => {
            button.textContent = "✔";
            setTimeout(() => {
              button.textContent = "复制";
            }, 2000);
          })
          .catch((err) => {
            button.textContent = "Error";
            setTimeout(() => {
              button.textContent = "复制";
            }, 2000);
          });
      });
      // 将 div 插入到 table 元素的最上方
      highlight.insertBefore(div, highlight.firstChild);
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const currentUrl = window.location.href;
  const isHomePage =
    currentUrl === window.location.origin + "/" ||
    currentUrl === window.location.origin + "/#";
  if (!isHomePage) return;
  const content_card = document.querySelector(".post-list");
  if (content_card) {
    const firstChild = content_card.firstElementChild;
    if (firstChild) {
      //firstChild.style.display = 'none'
      firstChild.style.backgroundImage = "linear-gradient(to top,  white 30%,  #a8ede965 100%)";
    }
  }
});