
$(function(){
	$(".section li").on({
		mouseenter:function(){
			var $this = $(this);
			var rsp = $this.find(".rsp");
			rsp.stop().animate({
				 opacity:'0.7'
			},300);
			var text = $this.find(".text");
			text.css("left","-380px");
			text.stop().animate(
				{left:"0"},300
			);
		},
		mouseleave:function(){
			var $this = $(this);
			var rsp = $this.find(".rsp");
			rsp.stop().animate({
				 opacity:'0'
			},300);
			var text = $this.find(".text");
			text.stop().animate({
			left:"380px"
			},150,function(){
				text.css("left","-380px")
			})
		}
	});
})