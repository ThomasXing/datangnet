$(function(){
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

	var mylunbo = new Swiper('.index-body .swiper-container', {
		autoplay: 3000,//可选选项，自动滑动
		loop: true,//循环
		slidesPerView : 6,//轮播区域需要显示的slide数量
		spaceBetween : 20,//每个slide之间的空隙px
		autoplayDisableOnInteraction: false,//交互（拖拽）之后是否停止轮播
	})
	//鼠标移入与移除时暂停与开始轮播
	$(".logobox .swiper-container").on({
		mouseenter:function(){
			mylunbo.stopAutoplay();
		},
		mouseleave:function(){
			mylunbo.startAutoplay();
		},
	});
	$(".arrow-left").on("click",function(){
			mylunbo.swipePrev();
		});
		$(".arrow-right").on("click",function(){
			mylunbo.swipeNext();
		});
	var baidumap=new BMap.Map("ditu");
	baidumap.centerAndZoom("北京市海淀区北太平庄路18号城建大厦C座3层 ",19)
	baidumap.enableScrollWheelZoom("true");
	setTimeout(function(){
		baidumap.setZoom(14)
	},2000)
	var scale=new BMap.ScaleControl({
		anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
		
	});
	baidumap.addControl(scale)
	var nav=new BMap.NavigationControl({
		anchor:BMAP_ANCHOR_BOTTOM_RIGHT,
		type:BMAP_NAVIGATION_CONTROL_SMALL
	})
	baidumap.addControl(nav);
	var type=new BMap.MapTypeControl()
	baidumap.addControl(type);
	var geocoder=new BMap.Geocoder();
	geocoder.getPoint("北京市海淀区北太平庄路18号城建大厦C座3层 ",function(point){
		var marker=new BMap.Marker(point);
		baidumap.addOverlay(marker);
		var opts={
		width:100,
		height:30,
		title:"",
		backgroundColor:"#fffffb",
		lineHeight:30,
		position:point,
		offset:new BMap.Size(20,-40)
	};
	    marker.addEventListener("click",function(){
	    	var info=new BMap.InfoWindow("详细地址：太平庄路18号城建大厦C座3层",opts);
			baidumap.openInfoWindow(info,point)
	    });
	},"北京市");
	var menu=new BMap.ContextMenu();
	var menuItem1=new BMap.MenuItem("放大",function(){
		baidumap.zoomIn();
	});
	menu.addItem(menuItem1);
	var menuItem2=new BMap.MenuItem("缩小",function(){
		baidumap.zoomOut();
	});
	menu.addItem(menuItem2);
	baidumap.addContextMenu(menu);
})