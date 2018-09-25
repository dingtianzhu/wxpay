$(function(){
	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
    
    $(".choselist li").click(function(){
    	var conten=$(this).html();
    	switch(conten){
    		case"个人信息":
    		$(".owninfor").show();
    		$(".owninfor").siblings().hide();
    		break;
    		case"订单信息":
    		$(".member_search").show();
    		$(".member_search").siblings().hide();
    		break;
    	}
    });
})
