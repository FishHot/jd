window.addEventListener('load',function(){
    var jd = new JD();
    jd.searchGradient();
    jd.timedown();
    jd.slide();


})





var JD = function(){

}
JD.prototype = {
    searchGradient:function(){
         window.addEventListener('scroll',function(){
             var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
             var slideHeight = document.querySelector('#slider').offsetHeight;
             var opacity;
             if (scrollTop < slideHeight) {
                 opacity = scrollTop/slideHeight;
             } else {
                 opacity = 1;
             }
             document.querySelector('#header').style.backgroundColor='rgba(222,24,27,'+ opacity +')';
             
         })

    },
    timedown:function(){
        var futureTime = new Date(2018,7,30,15,0,0).getTime();
        var nowTime = new Date().getTime();
        var time = (futureTime - nowTime)/1000;
        
        var span = document.querySelectorAll('.seckill-time span');
        var timeId = setInterval(function(){
            time--;
            if(time<=0){
                time = 0;
                clearInterval(timeId);
            }
            var hour = Math.floor(time/3600);
            var min = Math.floor(time/60)%60;
            var sec = Math.floor(time % 60);
            span[0].innerHTML = Math.floor(hour / 10)%24 ;
            span[1].innerHTML = hour % 10;
            span[3].innerHTML =  Math.floor(min / 10);
            span[4].innerHTML = min % 10;
            span[6].innerHTML =  Math.floor(sec / 10);
            span[7].innerHTML = sec % 10;

        },1000)
        
    },
    slide:function(){
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true,
            autoplay:true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })        
    }
}