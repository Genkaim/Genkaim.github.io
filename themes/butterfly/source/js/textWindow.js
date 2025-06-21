var popup = document.createElement("div");
var button = document.createElement("button");


button.id = "close";
button.textContent = "X";

popup.id = "popup";
popup.className = "popup";
var title = document.createElement("h1");
title.textContent = "提醒";
var content = document.createElement("p");
content.textContent = "检测到您的浏览器使用了深色模式，建议您开启网站自带的深色模式。";
popup.appendChild(title);
popup.appendChild(content);
document.body.insertAdjacentHTML("afterbegin", '<div id="popup" class="popup"><h1>提醒</h1><p>检测到您的浏览器使用了深色模式，建议您开启网站自带的深色模式。</p></div>');
document.body.insertAdjacentElement("afterbegin", button);

var popup = document.getElementById("popup");
var close = document.getElementById("close");


function show() {
    popup.style.opacity = 1;
    popup.animate([
      { transform: 'translateX(110%)' }, 
      { transform: 'translateX(0)' }
    ], {
      duration: 1000,
      fill: 'forwards', 
      easing: 'ease-in-out'
    }); 
}

function hide() {
    popup.animate([
        { transform: 'translateX(0)' }, 
        { transform: 'translateX(110%)' }
      ], {
        duration: 1000, 
        fill: 'forwards', 
        easing: 'ease-in-out'
      });
  }

window.onload = function() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    show()
  }
}//这里选择触发方式，默认是加载完成出现弹窗
//要让弹窗出现调用show()，隐藏调用hide()即可



popup.insertBefore(close, popup.firstChild);

close.onclick = function() {
     hide();
  };

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('type');
if (myParam == "read_mode"){
  document.body.classList.toggle('read-mode');
}