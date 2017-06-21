$(function(){
//定义url
urll='http://115.182.107.203:8088';
//头部轮播	
var	mySwiper = new Swiper('.banner .swiper-container', {
		autoplay: 3000,//可选选项，自动滑动
		loop: true,
		effect : 'fade',
		pagination: '.pagination',
		paginationClickable: true,
		autoplayDisableOnInteraction: false,
	})
$(".swiper-container img").on({
		mouseenter:function(){
			mySwiper.stopAutoplay();
		},
		mouseleave:function(){
			mySwiper.startAutoplay();
		},
	});
$(".swiper-pagination-switch").append("<span class='fenye'></span>")	
$(".fenye").click(function(){
	$(this).parent()[0].click();
})
//资讯接口
$.ajax({
	type:"post",
	url:"/ylkj-api/c/article/grid",
	data:{typeCodes:[ "information","mediaReport"],limit:3},
	dataType:"json",
	success:function(data,textStatus){
	$.each(data.data,function(index,value){
		var imgUrl=urll+value.smallImg;
		var divBox=
			$('<div class="wire-left">'+
				'<div class="wire_line_'+index+'"></div>'+
					'<dl>'+
						'<a href="javascript:void(0)" target="_blank">'+
							'<dt><img src="'+imgUrl+'"></dt>'+
							'<dd><p>'+value.title+'</p><span><span class="ban"></span></span></dd>'+
						'</a>'+
					'</dl>'+
				'<div class="lefttext">'+
					'<a href="javascript:void(0)" target="_blank">'+value.intro+'</a>'+
				'</div>'+
			'</div>');
		$('.index-wire2').append(divBox);
		divBox.find("a").click(function(){
			location.href="wenzhang.html?id="+value.id+"&hongse=zixun";
		})
		
	})
	}
	})
//项目接口
$.ajax({
	type:"post",
	url:"/ylkj-api/c/article/grid",
	data:{
		typeCodes:[ "hlwms","hlwcy"], //互联网-民生 互联网-产业
		limit:5  //显示5条
	},
	dataType:"json",
	success:function(data){
		$.each(data.data,function(index,value){
			var img=
				'<div class="swiper-slide img">'+
					'<a href="project.html"><img src="'+urll+value.middleImg+'"></a>'+
				'</div>';
				$('.object .swiper-wrapper').append(img);
		})
		//项目四图轮播
var objectCarousel = new Swiper('.object .swiper-container', {
		autoplay: 2000,//可选选项，自动滑动
		loop: true,//循环
		slidesPerView : 4,//轮播区域需要显示的slide数量
		spaceBetween : 20,//每个slide之间的空隙px
		autoplayDisableOnInteraction: false,//交互（拖拽）之后是否停止轮播
	})
		$(".arrow-left").on("click",function(){
			objectCarousel.swipePrev();
		});
		$(".arrow-right").on("click",function(){
			objectCarousel.swipeNext();
		});
	$(".object").on({
		mouseenter:function(){
			objectCarousel.stopAutoplay();
		},
		mouseleave:function(){
			objectCarousel.startAutoplay();
		},
	});
	}
})
//活动内容
$.ajax({
	type:"post",
	url:"/ylkj-api/c/article/grid",
	data:{
		typeCodes:[ "activity"],//活动
		limit:4  //显示4条
	},
	success:function(data){
		$.each(data.data,function(index,value){
				var imgSrc=value.smallImg;
				var actBox=
					$('<a href="javascript:void(0)" target="_blank">'+
	  					'<dl>'+
	  						'<dt>'+
	  							'<img src="'+imgSrc+'">'+
	  							'<span><p>'+value.attr.activityStatus+'</p></span>'+
	  						'</dt>'+
	  						'<dd>'+
	  							'<h3>'+value.title+'</h3>'+
	  							'<h4>活动时间：<b>'+value.subTitle+'</b></h4>'+
	  							'<h4>活动地点：<b>'+value.intro+'</b></h4>'+
	  						'</dd>' +
	  					'</dl>'+
  					'</a>');
  					$('.actright').append(actBox);
  					actBox.click(function(){
						location.href="wenzhang.html?id="+value.id+"&hongse=huodong";
  					})
		})
	}
});
})