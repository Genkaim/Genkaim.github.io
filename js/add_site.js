function addFavorite() {/*
    var title = document.title;
    var url = document.URL;
    try {
        window.external.addFavorite(url, title);
    } catch (e) {
        try {
            if (window.sidebar && window.sidebar.addPanel) {
                window.sidebar.addPanel(title, url, "");
            } else if ((window.sidebar && (typeof window.sidebar.addPanel == "undefined")) || (window.opera && window.print)) {
                var bookmarkURL = url;
                var bookmarkTitle = title;
                var triggerDefault = false;

                if (window.navigator.userAgent.indexOf("Gecko") > -1) {
                    window.sidebar.addPanel(bookmarkTitle, bookmarkURL, "");
                } else {
                    triggerDefault = true;
                }

                if (triggerDefault) {
                    alert("加入收藏失败，请使用Ctrl+D进行添加");
                }
            } else {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }*/
}

document.getElementById("card-info-btn").onclick = addFavorite;

