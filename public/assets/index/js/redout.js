$(function(){
	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
    
    var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".allbox").css({"width":winwidth+"px"});
//	$(".allbox").css({"width":winwidth+"px","height":winheight-180+"px"});
	
	window.onresize=function(){
		var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".allbox").css({"width":winwidth+"px"});
//	$(".allbox").css({"width":winwidth+"px","height":winheight-180+"px"});
		}
	
	setTimeout(function(){
		$(".shangtiao").fadeIn(1000);
		setTimeout(function(){
			$(".saotitle").fadeIn(1000);
		$(".xiatiao").fadeIn(1000);
	},1000);
	},1000);
	$(".picseven img").click(function(){
		var imgurl=$(this).attr("src");
		$(".dingkuang img").attr("src",imgurl);
		$(".dingkuang").show();
	});
	$(".dingkuang span").click(function(){
		$(".dingkuang").hide();
	});
})
