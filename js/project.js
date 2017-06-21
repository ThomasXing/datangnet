$(function(){
	var urll="http://115.182.107.203:8088";
			$.ajax({
				type:"post",
				url:"/ylkj-api/c/article/grid",
				data:{ //互联网民生的data
						typeCodes:[ "hlwms"],
						limit:2000
				},
				success:function(data){
					//清空页面project-box中的内容
					$('.project-box').html("");
					$.each(data.data, function(index,value) {
						var imgUrl=urll+value.smallImg;
						var dlBox=
								'<dl style="display: block;">'+
									'<dt>'+
										'<a target="_blank" class="target" href="javascript:void(0)"><img class="smallImg" src="'+imgUrl+'"></a>'+
					    			'</dt>'+
									'<dd class="line">'+
										'<h3>'+
					    					'项目名称：<span class="title">'+value.title+'</span><br>'+
					    					'公司名称：<span class="subTitle">'+value.subTitle+'</span>'+
					    				'</h3>'+
					    				'<i>'+
					    					'<b>项目简介：</b>'+
					    					'<p><span style="font-family: 宋体;"><span style="font-size: 16px;" class="intro">'+value.intro+'</span></span></p>'+
					    				'</i>'+
					    			'</dd>'+
					    		'</dl>'
					    	$('.project-box').append(dlBox);
					});
				}	
				})
})