function isMobile() {
    var ua = window.navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}
function loadWeatherWidget() {
    var c = document.createElement('link')
    c.rel = 'stylesheet'
    c.href = 'https://widget.qweather.net/simple/static/css/he-simple.css?v=1.4.0'
    var s = document.createElement('script')
    s.src = 'https://widget.qweather.net/simple/static/js/he-simple.js?v=1.4.0'
    var sn = document.getElementsByTagName('script')[0]
    sn.parentNode.insertBefore(c, sn)
    sn.parentNode.insertBefore(s, sn)
}

if (!isMobile()) {
    loadWeatherWidget();
}
document.addEventListener('pjax:send', function () {
    if (!isMobile()) {
        loadWeatherWidget();
    }
});
