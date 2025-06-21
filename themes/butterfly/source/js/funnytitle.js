var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "https://cdn.luogu.com.cn/upload/image_hosting/q76pwzv5.png");
        document.title = '(っ °Д °;)っ不要走啦';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "https://cdn.luogu.com.cn/upload/image_hosting/q76pwzv5.png");
        document.title = '(ฅ>ω<*ฅ)                   ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});