$(function(){
	var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".zhe").css({"width":winwidth,"height":winheight});
	$(".formbox").css({"top":winheight/3+"px","left":winwidth/2.5+"px"});
	window.onresize=function(){
	var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".zhe").css({"width":winwidth,"height":winheight});
	$(".formbox").css({"top":winheight/3+"px","left":winwidth/2.5+"px"});
	}
	$("#name").blur(function(){
		var namev=$(this).val();
		if(namev==""){
			$(".userr").html("请输入会员号");
		}
		else{
			$(".userr").html("");
		}
	});
	$("#macid").blur(function(){
		var macidv=$(this).val();
		if(macidv==""){
			$(".robotiderr").html("请输入机器人ID");
		}
		else{
			$(".robotiderr").html("");
		}
	});
	$("#idbtn").click(function(){
		var nameva=$("#name").val();
		var macidva=$("#macid").val();
		var namerr=$(".userr").html();
		var roboriderr=$(".robotiderr").html();
		if(nameva!=""&&namerr==""&&macidva!=""&&roboriderr==""){
			return true;
		}
		else{
			return false;
		}
	});
	$(".closex").click(function(){
		$(".zhe").hide();
		$("#hideid").hide();
	});
	$(".adduser").click(function(){
		$(".zhe").show();
		$(".formtitle").html("新增用户");
		$("#formtip").attr("action","/index/mac/mac");
		$("#formtip")[0].reset();
		$("#formtip").children("div").html("");
		$("#idbtn").val("添加");
	});
	$(".changeinfo").click(function(){
		$(".zhe").show();
		$("#hideid").show();
		$(".formtitle").html("修改信息");
		$("#formtip").attr("action","/index/mac/editmac");
		var idtip=$(this).siblings("input").eq(0).val();
		var vipnum=$(this).siblings("li").eq(0).html();
		var vipname=$(this).siblings("li").eq(1).html();
		var rid=$(this).siblings("li").eq(2).html();
		var gid=$(this).siblings("li").eq(3).html();
		var sid=$(this).siblings("li").eq(4).html();
		var envid=$(this).siblings("li").eq(5).html();
		var redout=$(this).siblings("li").eq(6).html();
		var beizhu=$(this).siblings("li").eq(10).html();
		$("#name").val(vipnum);
		$("#macid").val(rid);
		$("#hideid").val(idtip);
		$("#guangid").val(gid);
		$(".fit").val(sid);
		$(".env").val(envid);
		$(".red").val(redout);
		$(".address").val(beizhu);
		$("#idbtn").val("修改");
		
		
	});
	$(".delinfo").click(function(){
		var uid=$(this).parent("form").siblings("input").eq(0).val();
		$(this).siblings(".delid").val(uid);
	});
	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
    
//  $(".equipdata li").hover(function(){
//  	$(this).css({"width":"15%"});
//  	$(this).siblings("li").css({"width":"8%"});
//  },function(){
//  	$(this).css({"width":"9%"});
//  	$(this).siblings("li").css({"width":"9%"});
//  });
})
