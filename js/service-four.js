var baidumap=new BMap.Map("ditu");
	baidumap.centerAndZoom("青岛动漫产业园",19)
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
	geocoder.getPoint("动漫产业园",function(point){
		var marker=new BMap.Marker(point);
		baidumap.addOverlay(marker);
		var opts={
		width:100,
		height:30,
		title:"青岛实训基地",
		backgroundColor:"#fffffb",
		lineHeight:30,
		position:point,
		offset:new BMap.Size(20,-40)
	};
	    marker.addEventListener("click",function(){
	    	var info=new BMap.InfoWindow("详细地址：银川西路",opts);
			baidumap.openInfoWindow(info,point)
	    });
	},"青岛市");
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