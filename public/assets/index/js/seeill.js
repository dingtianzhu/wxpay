$(function(){
	var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".cludebody").css({"height":winheight-180+"px"});
	$(".rightdiv").css({"height":winheight-180+"px"});
	window.onresize=function(){
		var winwidth=window.innerWidth;
		var winheight=window.innerHeight;
		$(".cludebody").css({"height":winheight-180+"px"});
		$(".rightdiv").css({"height":winheight-180+"px"});
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
	var urlval=Number(window.location.href.split("?")[1].split("=")[1]);
	$.ajax({
		type:"post",
		url:"/index/doctor/getInfo",
		dataType:"json",
		data:{
			code:urlval,
		},
		success:function(e){
			$(".name").html(e.username);
			$(".vipnumber").html(e.code);
			$(".sex").html(e.sex);
			$(".tel").html(e.tel);
			$(".addr").html(e.addr);
			$(".imgbox img").attr("src",e.img);
		}
	});
	$("#code").val(urlval);
	$(".change").click(function(){
		$(this).hide();
		$(".areabtn").show();
		$(".textpart").attr("readonly",false);
	});
	$(".areabtn").click(function(){
		var textval=$(".textpart").val();
		if(textval==""){
			return false;
		}
		else{
			return true;
		}
	});
})