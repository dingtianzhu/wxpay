$(function(){
	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
    var winwidth=window.innerWidth;
    var winheight=window.innerHeight;
    $(".centerbox").css({"width":winwidth,"height":winheight-180+"px"});
    $(".centerhead").css({"margin-top":winheight/5.5+"px"});
    
    
    window.onresize=function(){
    	var winwidth=window.innerWidth;
    var winheight=window.innerHeight;
    $(".centerbox").css({"width":winwidth+"px","height":winheight-180+"px"});
    $(".centerhead").css({"margin-top":winheight/5.5+"px"});
    
    }
    $(".pictou").hover(function(){
    $(".zhebai").animate({"top":290+"px"},600);
    });
})
