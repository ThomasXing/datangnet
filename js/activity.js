$(function() {
	var urll = 'http://115.182.107.203:8088';
	$("#activityTitle").selectmenu();
	$.ajax({
		type: "post",
		url:'/ylkj-api/c/article/grid',
		data: {
			typeCodes: ["activity"],
			limit: 2000
		},
		dataType: "json",
		success: function(data) {
			function addActivity(value) {
				$.each(data.data, function(index, val) {
					if(val.attr.activityStatus == value || value == "all") { //可以根据option不同的内容添加对应的活动
						var imgUrl=val.smallImg
						if(imgUrl.search('http')==-1){
							imgUrl=urll+imgUrl;
						}
						var activityBox = 
							$('<a target = "_blank" class = "target" href = "javascript:void(0)" >'+
								'<dl>'+
									'<dt>'+
										'<img class = "smallImg" src = "'+imgUrl+'" >'+
										'<span><p class = "activityStatus" >'+val.attr.activityStatus+'</p></span>'+
									'</dt>'+
									'<dd>'+
										'<h3 class = "title" >'+val.title+'</h3>'+
										'<h4>活动时间： <b class = "subTitle" >'+val.subTitle+'</b></h4>'+
										'<h4>活动地点： <b class = "intro" >'+val.intro+'</b> </h4>'+
									'</dd>'+
								'</dl>'+
							'</a>');
							$(".activity_box").append(activityBox);
							activityBox.click(function(){
								location.href="wenzhang.html?id="+value.id+"&hongse=huodong";
							})
					}
				});
			}
			addActivity("all");//页面加载执行默认所有活动的展示
			$("select").on('selectmenuchange',function(e,ui) {
				$(".activity_box").html("");
				addActivity(ui.item.value);//根据option value不同展示不同内容
			})
		}
	});
})
