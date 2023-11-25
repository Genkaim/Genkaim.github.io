document.onreadystatechange = function () {
    if (document.readyState === "loading") {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            const root = document.documentElement;
            const theme = root.getAttribute('data-theme');
            if(theme === 'light'){
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        }
        else {
            const root = document.documentElement;
            const theme = root.getAttribute('data-theme');
            if(theme === 'dark'){
                document.documentElement.setAttribute('data-theme', 'light');
            }
        }
    }
}

