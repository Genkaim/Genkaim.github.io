function show_star1() {
    document.querySelector("#stars .main").classList.add("show_star1");
  }
  function show_line() {
    var delay = 500; // 每行之间的延迟时间（以毫秒为单位）
    var paragraphs = document.querySelectorAll("p");
    for (var i = 0; i < paragraphs.length; i++) {
      (function (index) {
        setTimeout(function () {
          paragraphs[index].classList.add("slide-down");
        }, delay * index);
      })(i);
    }
  }
  function show_h2() {
    var delay = 500; // 每行之间的延迟时间（以毫秒为单位）
    var paragraphs = document.querySelectorAll("h2");
    for (var i = 0; i < paragraphs.length; i++) {
      (function (index) {
        setTimeout(function () {
          paragraphs[index].classList.add("slide-down");
        }, delay * index);
      })(i);
    }
  }
  function show_stats() {
    document.querySelector(".stats-img").classList.add("slide-down-img");
  }
  function show_icons() {
    document.querySelector(".icon").classList.add("slide-down-img");
  }
  function show_footer_icons() {
    document.querySelector(".footer-icons").classList.add("slide-down-img");
  }
  function show_img() {
    setTimeout(function () {
      show_stats();
      setTimeout(function () {
        show_icons();
        setTimeout(function () {
          show_footer_icons();
        }, 400);
      }, 400);
    }, 1700);
  }
  let numStars;
  function create_stars() {
    const smallStar = document.querySelector(".small-star");
    const screenWidth = window.innerWidth;
    numStars = screenWidth / 5;
    for (let i = 0; i < numStars; i++) {
      const span = document.createElement("span");
      smallStar.appendChild(span);
    }

    const min = 1;
    const max = 100;
    const mins = 0.5;
    const maxs = 3.5;
    const interval = 1;
    const factor = 1 / interval;
    const stars = document.querySelectorAll(".small-star span");
    stars.forEach((star) => {
      const x =
        Math.round((Math.random() * (max - min) + min) * factor) / factor;
      const y =
        Math.round((Math.random() * (max - min) + min) * factor) / factor;
      const size = Math.random() * (maxs - mins) + mins;
      star.style.left = x + "vw";
      star.style.top = y + "vw";
      star.style.height = size + "px";
      star.style.width = size + "px";
    });
    const _stars = document.querySelectorAll(".small-star span");
    _stars.forEach((star, index) => {
      setTimeout(() => {
        star.classList.add("move-stars");
      }, index * 10); // 每个元素之间的延迟时间（以毫秒为单位）
    });
  }
  function randomOpacity() {
    const min = 0.1;
    const max = 1;
    const stars = document.querySelectorAll(".small-star span");
    const numberOfStarsToChange = numStars / 2; // 每次更改透明度的元素数量
    for (let i = 0; i < numberOfStarsToChange; i++) {
      const randomIndex = Math.floor(Math.random() * stars.length);
      const star = stars[randomIndex];
      const opacity = Math.random() * (max - min) + min;
      star.style.opacity = opacity;
    }
  }
  function randomMain() {
    const min2 = 0.3;
    const max2 = 1;
    const maxs = 50;
    const mins = 10;
    var _stars = document.querySelector("#stars .main");
    var opacity = Math.random() * (max2 - min2) + min2;
    var size = Math.random() * (maxs - mins) + mins;
    _stars.style.boxShadow =
      "0 0 " + size + "vw rgba(122, 122, 122, " + opacity + ")";
  }
  function activeSmallStars() {
    //大小点透明度预处理
    const style = document.createElement("style");
    setTimeout(function () {
      const _stars = document.querySelectorAll("span");
      var __stars = document.querySelector("#stars .main");
      __stars.style.opacity = 1;
      __stars.style.boxShadow = "0 0 20vw rgba(122, 122, 122, 1)";
      document.querySelector("#stars .main").classList.remove("show_star1");
      _stars.forEach(function (_star) {
        _star.classList.remove("move-stars");
      });

      const stars = document.querySelectorAll(".small-star span");
      stars.forEach((star) => {
        star.style.opacity = 0.5;
      });
    }, 9000);
    setTimeout(function () {
      const _stars = document.querySelectorAll("span");
      _stars.forEach(function (_star) {
        _star.classList.add("active-star");
      });
      const min = 0.1;
      const max = 1;
      const stars = document.querySelectorAll(".small-star span");
      stars.forEach((star) => {
        const opacity = Math.random() * (max - min) + min;
        star.style.opacity = opacity;
      });
      setInterval(randomOpacity, 750);
      setInterval(randomMain, 3050);
    }, 9100);
    setTimeout(function () {
      const planets = document.querySelectorAll(".planet");
      planets.forEach((planet, index) => {
        setTimeout(() => {
          planet.classList.add("show-planet");
        }, index * 100); // 每个元素之间的延迟时间（以毫秒为单位）
      });
    }, 3000);

    // 每隔一定时间（以毫秒为单位）执行一次函数
  }
  function activeImage() {
    document.querySelector(".stats-img").classList.remove("slide-down-img");
    document.querySelector(".icon").classList.remove("slide-down-img");
    document
      .querySelector(".footer-icons")
      .classList.remove("slide-down-img");
    const imgs = document.querySelectorAll(".stats-img");
  }
  window.onload = function () {
    //提示开魔法
    const tips = document.querySelectorAll("h5");
    tips.forEach(function (tip) {
      setTimeout(function () {
        tip.classList.remove("slide-down-quick");
        tip.classList.add("disapear-down");
        setTimeout(function () {
          tip.style.display = "none";
        }, 400);
      }, 500);
    });

    show_img();
    create_stars();
    show_star1();
    setTimeout(function () {
      show_h2();
    }, 1500);
    setTimeout(function () {
      show_line();
    }, 3000);
    activeSmallStars();
    activeImage();
    setTimeout(function () {
      activeInner();
    }, 3000);
  };