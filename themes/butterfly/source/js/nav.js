function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
document.addEventListener("pjax:complete", tonav);
document.addEventListener("DOMContentLoaded", tonav);
//响应pjax
var container = document.getElementById("name-container");
var menus_items_width = parseFloat(
  getComputedStyle(document.getElementsByClassName("menus_items")[1]).width
);
function tonav() {
  document
    .getElementById("name-container")
    .setAttribute("style", "display:none");

  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var window_width = $(window).width();

    if (window_width > 900) {
      if (scroll > position) {
        document
          .getElementById("name-container")
          .setAttribute(
            "style",
            `width: ${menus_items_width}px;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;`
          );
        document
          .getElementsByClassName("menus_items")[1]
          .setAttribute("style", "display:none!important");
      } else {
        document
          .getElementsByClassName("menus_items")[1]
          .setAttribute("style", "");
        document
          .getElementById("name-container")
          .setAttribute("style", "display:none");
      }
      position = scroll;
    }
    else {
      document
      .getElementById("name-container")
      .setAttribute("style", "display:none");
    }
  });
  function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document
      .getElementById("name-container")
      .setAttribute("style", "display:none");
    btf.scrollToDest(0, 500);
  }
  //修复没有弄右键菜单的童鞋无法回顶部的问题
  document.getElementById("page-name").innerText =
    document.title.split("Genkaim的博客")[0];
  document.getElementById("page-name").removeAttribute("href"); // 添加这行代码来移除超链接
}
