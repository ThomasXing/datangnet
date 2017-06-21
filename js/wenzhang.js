$(function(){
	var href = location.href;
		var paramStr = href.substr(href.indexOf("?")+1);
		var paramArr = paramStr.split("&");
		var param = {};
		for(var i=0;i<paramArr.length;i++){
			var paramA = paramArr[i].split("=");
			param[paramA[0]] = paramA[1];
		}
	var id=param.id;
	var hongse=param.hongse;
	$("li."+hongse).html($("li."+hongse).text()).addClass("active");
	$.ajax({
	type:"post",
	url:"/ylkj-api/c/article/detail",
	data:{id:id},
	dataType:"json",
	success:function(data){
		var detail = data.data;
		$(".information-box .news_title").html(detail.title);
		if(hongse="fuwu") {
			$(".information-box .news_time").html(detail.subTitle);
		} else {
			var time = new Date(detail.publishTime);//获得发布时间戳对应的时间
					//获取对应的年月日
					var year=time.getFullYear();
					var month=time.getMonth()+1;
					var ri=time.getDate();
					//若月日份小于十前面加零
					month<10&&(month="0"+month);
					ri<10&&(ri="0"+ri);
					$(".information-box .news_time").html("发布日期："+year+'-'+month+'-'+ri);
		}
		$(".information-box .news_text").html(detail.content);
	}
});
})