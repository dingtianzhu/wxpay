$(function(){
	var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".cludebody").css({"height":winheight-180+"px"});
	$(".leftdiv").css({"height":winheight-180+"px"});
	$(".rightdiv").css({"height":winheight-180+"px"});
	$(".viplist").css({"height":winheight-180+"px"});
	$(".vipshowbox").css({"height":winheight-255+"px"});
	window.onresize=function(){
		var winwidth=window.innerWidth;
		var winheight=window.innerHeight;
		$(".cludebody").css({"height":winheight-180+"px"});
		$(".leftdiv").css({"height":winheight-180+"px"});
		$(".rightdiv").css({"height":winheight-180+"px"});
		$(".viplist").css({"height":winheight-180+"px"});
		$(".vipshowbox").css({"height":winheight-255+"px"});
	}

	
	$(".userzhang").hover(function(){
		$(".outb").slideDown();
	},function(){
		$(".outb").slideUp();
	});
	
	var len=$(".panel").length;
	for (var i=0;i<len;i++){
		if(i%2==0){
			$(".panel").eq(i).css({"background":"#E4F4F5"});
		}
		else{
			$(".panel").eq(i).css({"background":"#D1E9EB"});
		}
	}
	
	$.ajax({
		type:"post",
		url:"/index/doctor/getInfos",
		dataType:"json",
		success:function(e){
			var index=e.length;
			for(var i=0;i<index;i++){
				$(".vipshowbox").append('<div class="vipli">'+
							'<div class="leftimg">'+
								'<img src="'+e[i].img+'">'+
							'</div>'+
							'<div class="rightinfo">'+
								'<h3>'+e[i].username+'</h3>'+
								'<div class="vipnum">'+e[i].code+'</div>'+
							'</div>'+
						'</div>');
			}
			$(".vipli").click(function(){
		var code=$(this).children(".rightinfo").children(".vipnum").html();
		$.ajax({
			type:"post",
			url:"/index/doctor/getInfo",
			dataType:"json",
			data:{
				code:code,
			},
		success:function(e){
			$(".imgbox").children("img").attr("src",e.img);
			$(".name").html(e.username);
			$(".vipnumber").html(e.code);
			$(".vipnumber").html(e.code);
			$(".sex").html(e.sex);
			$(".tel").html(e.tel);
			$(".addr").html(e.addr);
		}
		});
	});
		}
	});
	
	
	$(".sanpicl").click(function(){
		var imgurl=$(this).children("img").attr("src");
		var spantext=$(this).children("span").html();
		$(".centerpicbox").children("span").html(spantext);
		$(".centerpicbox").children("img").attr("src",imgurl);
	});
	$(".sanpicr").click(function(){
		var imgurl=$(this).children("img").attr("src");
		var spantext=$(this).children("span").html();
		$(".centerpicbox").children("span").html(spantext);
		$(".centerpicbox").children("img").attr("src",imgurl);
	});
	
})