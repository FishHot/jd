setHtmlFontSize();
window.addEventListener('resize',setHtmlFontSize);
function setHtmlFontSize(){
    //获取当前页面的宽度
    var windowWidth = document.documentElement.offsetWidth;
    if(windowWidth <= 320 ){
        windowWidth = 320;
    }else if(windowWidth>750){
        windowWidth = 750;
    }

    var htmlSize = windowWidth/375 * 100;
    document.querySelector('html').style.fontSize = htmlSize + 'px';
}