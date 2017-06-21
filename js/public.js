var btnTop=$(".btn-top");//获取返回顶部的div
window.onscroll = function(){
     var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
     if( t >= 300 ) { //当距离顶部超过300px时
        btnTop.slideDown(500);
     } else { //如果距离顶部小于300px
        btnTop.slideUp(500);
     } 
} 
btnTop.click(function(){
	$("html,body").animate(
		{
			scrollTop:"0"
		},400
	)
	
	//document.documentElement.scrollTop=0;
})
//btnTop.click(function(){$("html,body").animate({scrollTop: "0px"}, 800);});