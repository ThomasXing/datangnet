$(function(){
	var urll="http://115.182.107.203:8088";
			$.ajax({
				type:"post",
				url:"/ylkj-api/c/article/grid",
				data:{ //公司资讯的data
					typeCodes:[ "information"],
					limit:2000
					},
				success:function(data){
					//定义一个检测这个信息的月份是不是与上一个月份相同的参数
					var monthTest=0;
					//清空information中的内容
					$('.information-box').html("");
					$.each(data.data, function(index,value) {
						var time = new Date(value.publishTime);//获得发布时间戳对应的时间
						//获取对应的年月日
						var year=time.getFullYear();
						var month=time.getMonth()+1;
						var ri=time.getDate();
						//若月日份小于十前面加零
						month<10&&(month="0"+month);
						ri<10&&(ri="0"+ri);
						//定义一个月份对应月份的字母标题
						var yuefen={
							"01":"JAN",
							"02":"FEB",
							"03":"MAR",
							"04":"APR",
							"05":"MAY",
							"06":"JUN",
							"07":"JUL",
							"08":"AUG",
							"09":"SEP",
							"10":"OCT",
							"11":"NOV",
							"12":"DEC"
						}
						var divMonth=$("<div class='Month'></div>");
						if(month!=monthTest){//判断是不是与上一个月份相同若相同则不添加月份的标题字母
							$('<div class="Month_title">'+yuefen[month]+'</div>').appendTo(divMonth);
							monthTest=month;
						}
						var imgUrl=urll+value.smallImg;
						var monthTime=
							$('<div class="Month_time">'+
								'<div class="month_day">'+year+'-'+month+'-'+ri+'</div>'+
								'<div class="month_center">'+
									'<dl>'+
										'<dt>'+
											'<a href="javascript:void(0)" target="_blank">'+
												'<img src="'+imgUrl+'">'+
											'</a>'+
										'</dt>'+
										'<dd>'+
											'<h3><a href="javascript:void(0)" target="_blank">'+value.title+'</a></h3>'+
											'<p>'+value.intro+'<a href="javascript:void(0)" target="_blank">[阅读全文]</a></p>'+
										'</dd>'+
									'</dl>'+
								'</div>'+
							'</div>');
							divMonth.append(monthTime);
							$('.information-box').append(divMonth);
							monthTime.find("a").click(function(){
								location.href="wenzhang.html?id="+value.id+"&hongse=zixun";
							})
					});
				}	
				})
})
