function setHtmlFontSize(){var e=document.documentElement.offsetWidth;e<=320?e=320:750<e&&(e=750);var t=e/375*100;document.querySelector("html").style.fontSize=t+"px"}setHtmlFontSize(),window.addEventListener("resize",setHtmlFontSize);