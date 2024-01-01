// 监听 pjax:complete 事件
document.addEventListener('pjax:complete', function () {
    if (!/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        if (window.location.pathname === '/') {
            var script = document.createElement('script');
            script.src = '/js/sakura2.js';
            document.body.appendChild(script);
        }
    }
    document.addEventListener('pjax:send', function () {
        var canvasSakura = document.getElementById('canvas_sakura');
        if (canvasSakura) {
            canvasSakura.parentNode.removeChild(canvasSakura);
        }
    });
});
