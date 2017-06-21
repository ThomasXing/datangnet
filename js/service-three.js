$(function() {
	var urll = 'http://115.182.107.203:8088';
	$.ajax({
		type: "post",
		url:'/ylkj-api/c/article/grid',
		data: {
			typeCodes:[ "cyfw"],
			limit:2000
		},
		dataType: "json",
		success: function(data) {
			$.each(data.data, function(index,value) {
				var imgUrl=value.smallImg
				if(imgUrl.search('http')==-1){
					imgUrl=urll+imgUrl;
					}
				var serviceBox=	
					$('<a href="javascript:void(0)">'+
						'<dl>'+
							'<dt><img src="'+imgUrl+'"></dt>'+
							'<dd>'+
								'<h3>'+value.title+'</h3>'+
								'<h4>'+value.subTitle+'</h4>'+
							'</dd>'+
						'</dl>'+
					'</a>')
				$(".service-box").append(serviceBox);
				serviceBox.click(function(){
					location.href="wenzhang.html?id="+value.id+"&hongse=fuwu";
				})
				
			});
		}
	});
})