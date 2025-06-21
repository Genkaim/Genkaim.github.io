function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

let rmf = {};
rmf.showRightMenu = function (isTrue, x = 0, y = 0) {
  let $rightMenu = $("#rightMenu");
  $rightMenu.css("top", x + "px").css("left", y + "px");

  if (isTrue && !isMobileDevice()) {
    $rightMenu.show();
  } else {
    $rightMenu.hide();
  }
};
rmf.switchDarkMode = function () {
  const nowMode =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  if (nowMode === "light") {
    activateDarkMode();
    saveToLocal.set("theme", "dark", 2);
    GLOBAL_CONFIG.Snackbar !== undefined &&
      btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night);
  } else {
    activateLightMode();
    saveToLocal.set("theme", "light", 2);
    GLOBAL_CONFIG.Snackbar !== undefined &&
      btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day);
  }
  // handle some cases
  typeof utterancesTheme === "function" && utterancesTheme();
  typeof FB === "object" && window.loadFBComment();
  window.DISQUS &&
    document.getElementById("disqus_thread").children.length &&
    setTimeout(() => window.disqusReset(), 200);
};
rmf.switchReadMode = function () {
  const $body = document.body;
  $body.classList.add("read-mode");
  const newEle = document.createElement("button");
  newEle.type = "button";
  newEle.className = "fas fa-sign-out-alt exit-readmode";
  $body.appendChild(newEle);

  function clickFn() {
    $body.classList.remove("read-mode");
    newEle.remove();
    newEle.removeEventListener("click", clickFn);
  }

  newEle.addEventListener("click", clickFn);
};
GLOBAL_CONFIG.Snackbar.copy_success = '复制成功';
//复制选中文字
rmf.copySelect = function () {
  document.execCommand("Copy", false, null);
  btf.snackbarShow(GLOBAL_CONFIG.Snackbar.copy_success);
  //这里可以写点东西提示一下 已复制
};
rmf.searchWithBing = function(){
    let selectedText = document.getSelection().toString();
    let url = "https://www.bing.com/search?q=" + encodeURIComponent(selectedText);
    window.open(url, '_blank');
}


//回到顶部
rmf.scrollToTop = function () {
  btf.scrollToDest(0, 500);
};

// 右键菜单事件
if (
  !navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
) {
  window.oncontextmenu = function (event) {
    $(".rightMenu-group.hide").hide();
    //如果有文字选中，则显示 文字选中相关的菜单项
    if (document.getSelection().toString()) {
      $("#menu-text").show();
    }

    let pageX = event.clientX + 10;
    let pageY = event.clientY;
    let rmWidth = $("#rightMenu").width();
    let rmHeight = $("#rightMenu").height();
    if (pageX + rmWidth > window.innerWidth) {
      pageX -= rmWidth + 10;
    }
    if (pageY + rmHeight > window.innerHeight) {
      pageY -= pageY + rmHeight - window.innerHeight;
    }

    rmf.showRightMenu(true, pageY, pageX);
    return false;
  };

  window.addEventListener("click", function () {
    rmf.showRightMenu(false);
  });
}
// 获取按钮元素
var button = document.getElementById("your-button-id");

// 添加点击事件监听器
button.addEventListener("click", function () {
  // 修改data-theme的值为'dark'
  document.body.setAttribute("data-theme", "dark");
});
// 在新标签页中使用 Bing 搜索选中的文字
