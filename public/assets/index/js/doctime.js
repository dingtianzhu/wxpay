$(function(){
	var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".cludebody").css({"height":winheight-180+"px"});
	$(".zhe").css({"width":winwidth,"height":winheight});
	$(".adddoctime").css({"margin-top":winheight/2.8+"px"});
	$(".leftdiv").css({"height":winheight-180+"px"});
	$(".rightdiv").css({"height":winheight-180+"px"});
	window.onresize=function(){
		var winwidth=window.innerWidth;
		var winheight=window.innerHeight;
		$(".cludebody").css({"height":winheight-180+"px"});
		$(".zhe").css({"width":winwidth,"height":winheight});
		$(".adddoctime").css({"margin-top":winheight/2.8+"px"});
		$(".leftdiv").css({"height":winheight-180+"px"});
		$(".rightdiv").css({"height":winheight-180+"px"});
	}
	$("#file").change(function(){
		 document.getElementById("docinfo").submit();
	});
	
	var len=$(".everyslim2").length;
	for (var i =0; i<len; i++){
			if($(".everyslim2").eq(i).children(".yuyueren2")[0].innerHTML!="预约人"){
				$(".everyslim2").eq(i).css({"background":"url(/assets/index/image/darkquan.png)","background-repeat":"no-repeat","background-position":"3% 18px"});
			}
		
	}
	for (var i=0; i<14;i++){
		$(".rightdiv").append('<li class="everyslim1">'+
				'<span class="timetitle1">预约时间</span>'+
				'<span class="time1">0000年00月00日00:00-00:00</span>'+
				'<span class="paytitle1">费用</span>'+
				'<span class="pay1">900.00</span>'+
				'<span class="yuyueren1">预约人</span>'+
				'<i class="addtime1 glyphicon glyphicon-plus-sign"></i>'+
				'</li>')
	}
	
	$(".userzhang").hover(function(){
		$(".outb").slideDown();
	},function(){
		$(".outb").slideUp();
	});
	laydate.render({
		elem: '#begin'
		,type: 'datetime'
	});
	laydate.render({
		elem: '#end'
		,type: 'datetime'
	});
	
	$(".adddoctime h3 span").click(function(){
		$(".zhe").hide();
	});
	$(".addtime ").click(function(){
		$(".zhe").show();
	});
	
	var length=$(".everyslim2").length; 
	if(length==0){
		
	}
	else{
		for(var i=0;i<length; i++){
			if(i>12){
				
			}else{
				$(".everyslim1")[0].remove(".rightdiv");
			}
			
		}
	}
	$(".timesub").click(function(){
		var begin=$("#begin").val();
		var end=$("#end").val();
		if(begin!=""&&end!=""){
			var time=String(begin)+"--"+String(end);
			var f=time.split("--");
			var year=String(Number(f[0].split(" ")[0].split("-")[0]))+"年"
			var month=String(Number(f[0].split(" ")[0].split("-")[1]))+"月"
			var day=String(Number(f[0].split(" ")[0].split("-")[2]))+"日"
			var ftime=String(Number(f[0].split(" ")[1].split(":")[0]))+":00"
			var stime=String(Number(f[1].split(" ")[1].split(":")[0]))+":00"
			$("#betime").val(year+" "+month+" "+day+ftime+"-"+stime);
			return true;
		}
		else{
			return false;
		}
	});
	$('.rightdiv').animate({scrollTop: $(".everyslim2").height()*length}, 50);
	
	
	$(".jiantime").click(function(){
		$(this).parent(".everyslim2").parent("form").submit();
	});
})