$(function(){
    var img_length = $('.banner_img').length; //图片的张数
    var i  = 1;

    function banner(){ //轮播函数
        if(i < 0){
            i = img_length - 1;
        }
        if(i > img_length-1){
            i = 0;
        }
        $('.banner_images').animate({'left': (-i*100)+'%'});
        $('.points li').eq(i).addClass('point_on').siblings().removeClass();
        i++;
    }
    var banner_timer = setInterval(banner, 3000);

    $('.switcher p').hover(function(){	//鼠标移入左右切换箭头清除定时器使轮播停止
        clearInterval(banner_timer);
    },function(){	//鼠标移出切换箭头还原定时器，这里为避免定时器重复 还将定时器赋值给上边定义的banner_timer变量
        banner_timer = setInterval(banner, 3000);
    });

    $('.switcher p').click(function(){	//点击左右箭头使图片左右切换
        if($(this).attr('class') == 'prev'){
            i-=1;
            banner();
        }else{
            i+=1;
            banner();
        }
    })

    $('.points li').click(function(){	//点击相应的焦点跳转到对应图片
        i = $(this).index();
        banner();
    });
});