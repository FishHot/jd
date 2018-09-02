
window.addEventListener('load',function(){
    var jd = new JD();
    jd.categoryLeftSwiper();
    jd.categoryLeftClick();
    jd.categoryRightSwiper();
})


var JD = function(){

}
//获取ul
var ul = document.querySelector('.categoryLeft .swiper-slide');
//获取分类里面所有的li
var as = document.querySelectorAll('.categoryLeft .swiper-slide a');

var lis = document.querySelectorAll('.categoryLeft .swiper-slide li');
//获取swiper-wrapper
var leftWrapper = document.querySelector('.categoryLeft .swiper-wrapper');
//添加索引
for(var i = 0;i<as.length;i++){
    as[i].setAttribute('index',i);
    as[i].getAttribute
}
JD.prototype = {
    categoryLeftSwiper:function(){
        var swiper = new Swiper('.categoryLeft .swiper-container', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            mousewheel: true
          });
    },
    categoryLeftClick:function(){
        touchClick('.categoryLeft .swiper-slide',function(e){
            //拿到点击事件源的a的索引
            // console.log(e.target);
            //拿到li
            for(var i =0;i<lis.length;i++){
                lis[i].classList.remove('active');
                // console.log(lis[i]);
            }
            e.target.parentNode.classList.add('active');
           var index = e.target.getAttribute('index');
        //    console.log(index);
        //获取单个a的高度
        var liHeight = e.target.offsetHeight;
        // console.log(liHeight);
        //获取ul的高度
        var ulHeight = ul.offsetHeight;
        // console.log(ulHeight);
        
        //获取leftWrapper的高度
        var leftWrapperHeight = leftWrapper.offsetHeight;
        // console.log(leftWrapperHeight);
        //位移最大高度
        var maxHeight = leftWrapperHeight - ulHeight;
        // console.log(maxHeight);
        
        //获取位移距离
        var moveHeight = -index * liHeight ;
        // console.log(moveHeight);
        
        if (moveHeight <= maxHeight) {
            moveHeight = maxHeight;
        }
        leftWrapper.style.transform = 'translate3d(0,'+ moveHeight+ 'px' +',0)';
        leftWrapper.style.transition = 'all 0.3s';
        })
    },
    categoryRightSwiper:function(){
        var swiper = new Swiper('.categoryRight .swiper-container ', {
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            mousewheel: true
          });
    }
}


function touchClick(ele, callback) {
    var btn = true;
    var sel = document.querySelector(ele);
    sel.addEventListener('touchmove', function () {
        btn = false;
        // console.log('move');
        
    })
    sel.addEventListener('touchend', function (e) {
        if (btn) {
            callback && callback(e);
        }
        btn = true;
    })

}

