$(function(){
	$("#jidi").selectmenu();
	var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";"); 
	var trim_Version=version[1].replace(/[ ]/g,""); 
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") {
		function addValue(data) {
			data.val(data.attr("message"));
			data.css("color","#adadad");
		}
		$("input").each(function(){
			addValue($(this));
			$(this).focus(function(){
				if(this.value==$(this).attr("message")) {
					this.value="";
					this.style.color="#000";
				}
			})
			$(this).blur(function(){
				if(this.value.replace(/\s/g,"")==""){
					addValue($(this));
				}
			})
		})
	}
	function error(data){
			if(data.val().replace(/\s/g,"")==""||data.val()==data.attr("message")){
				if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") {
					addValue(data);
				}
				data.parent().find(".error").remove();//清空上一次错误框
				$('<span class="error">'+data.attr("message")+'</span>').appendTo(data.parent());
			}
		}
	$(".Settled-button").click(function(){
		error($("#shijian"));
		error($("#yuyueren"));
		error($("#telphone"));
		error($("#name"));
		error($("#count"));
	})
	$("input").focus(function(){
		$(this).parent().find(".error").remove();
	})
});
	
