$(function(){
	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
//	for(var i =0; i<$(".listdata").length;i++){
//		$(".listdata").eq(i).children("li").eq(3).html(new Date(parseInt($(".listdata").children("li").eq(3).html()) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ') )
//	}
})
