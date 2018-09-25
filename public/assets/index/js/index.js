$(function(){
	var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
//	$(".logobody").css({"width":winwidth+"px","height":winheight-180+"px"});
	$(".logoimgcenter").css({"margin-top":winheight/6+"px"});
	$(".threemaindiv").css({"top":winheight/6+"px"});
	
	window.onresize=function(){
		var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
//	$(".logobody").css({"width":winwidth+"px","height":winheight-180+"px"});
	$(".logoimgcenter").css({"margin-top":winheight/6+"px"});
	$(".threemaindiv").css({"top":winheight/6+"px"});
		}
	
//	点击中间图片旋转隐藏显示登录选项
	$(".logoimgcenter").click(function(){
		$(this).addClass("rotate");
		setTimeout(function(){
			$(".threemaindiv").addClass("scale");
				$(".logoimg").fadeIn(1500);
				$(".threeperson").fadeIn(1500);
		},500);
		
	});
//	划过图片旋转边
	$(".cimg").hover(function(){
		$(this).addClass("hoverrotate");
	},function(){
		$(this).removeClass("hoverrotate");
	});
//	点击显示对应登录框
	$(".cimg").click(function(){
		$(this).siblings(".formdiv").children("form")[0].reset();
		$(this).siblings(".formdiv").children("form").children("div").html("");
		$(this).siblings(".formdiv").fadeIn();
		$(this).parents(".threeperson").siblings(".threeperson").children(".formdiv").fadeOut();
	});
	
//	管理员表单验证

$("#tela").blur(function(){
	var azval=$(this).val();
	if(azval==""){
		$(".telerra").html("请输入管理员账号");
	}
	else{
		$(".telerra").html("");
	}
});
$("#passwda").blur(function(){
	var apval=$(this).val();
	if(apval==""){
		$(".passerra").html("请输入管理员密码");
	}
	else if(apval.length<6){
		$(".passerra").html("密码长度不小于6位");
	}
	else{
		$(".passerra").html("");
	}
	
});
$("#subma").click(function(){
	var azva=$("#tela").val();
	var azerr=$(".telerra").html();
	var apva=$("#passwda").val();
	var aperr=$(".passerra").html();
	if(azva!=""&&azerr==""&&apva!=""&&aperr==""){
		return true;
	}
	else{
		return false;
	}
});

//vip表单验证
$("#telv").blur(function(){
	var vzval=$(this).val();
	var reg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
	if(vzval==""){
		$(".telerrv").html("请输入电话号码");
	}
	else if(!reg.test(vzval)){
		$(".telerrv").html("请输入正确电话号码");
	}
	else{
		$(".telerrv").html("");
	}
});
$("#checkv").blur(function(){
	var vcval=$(this).val();
	if(vcval==""){
		$(".checkerrv").html("请输入验证码");
	}
	else{
		$(".checkerrv").html("");
	}
});
	var timem = 61;
	$(".getcheck").click(function() {
        var tel = $("#telv").val();
        if (tel == "" ) {
        	$(".telerrv").html("请输入电话号码");
            return false;
        } else {
            var ting = null;
            function clock() {
                timem -= 1;
                if (timem == 0) {
                    $(".getcheck").attr("disabled", false);
                    timem = 61;
                    $(".getcheck").html("获取验证码");
                    clearInterval(ting);
                    $(".getcheck").css({ "background": "white" });
                } else {
                    $(".getcheck").css({ "background": "white" });
                    $(".getcheck").html(timem + "s");
                }
            }
            $.ajax({
                url:"/index/sends/send",
                dataType:"json",
                type:'POST',
                data:{
                    tel:tel
                },
                success:function(dt){
                    code = $.parseJSON(dt).Code;
                 if ($.isNumeric(code)) {
                        $(".getcheck").attr("disabled", true);
                        $('#getCheck').focus();
                        ting = setInterval(clock, 1000);
                  } else {
                      alert('您今天的短信接收次数已达到上限!');
                 }
                },
            });
            
            return false;
        }
    });
    
    $("#submv").click(function(){
    	var vzva=$("#telv").val();
    	var vzerr=$(".telerrv").html();
    	var vcva=$("#checkv").val();
    	var vcerr=$(".checkerrv").html();
    	if(vzva!=""&&vzerr==""&&vcva!=""&&vcerr==""){
    		return true;
    	}
    	else{
    		return false;
    	}
    });
    
    
    
    
    $("#teld").blur(function(){
	var vzval=$(this).val();
	var reg=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
	if(vzval==""){
		$(".telerrd").html("请输入电话号码");
	}
	else if(!reg.test(vzval)){
		$(".telerrd").html("请输入正确电话号码");
	}
	else{
		$(".telerrd").html("");
	}
});
$("#checkd").blur(function(){
	var vcval=$(this).val();
	if(vcval==""){
		$(".checkerrd").html("请输入验证码");
	}
	else{
		$(".checkerrd").html("");
	}
});
	var timem = 61;
	$(".getcheckd").click(function() {
        var tel = $("#teld").val();
        if (tel == "" ) {
        	$(".telerrd").html("请输入电话号码");
            return false;
        } else {
            var ting = null;
            function clock() {
                timem -= 1;
                if (timem == 0) {
                    $(".getcheckd").attr("disabled", false);
                    timem = 61;
                    $(".getcheckd").html("获取验证码");
                    clearInterval(ting);
                    $(".getcheckd").css({ "background": "white" });
                } else {
                    $(".getcheckd").css({ "background": "white" });
                    $(".getcheckd").html(timem + "s");
                }
            }
            $.ajax({
                url:"/index/sends/send",
                dataType:"json",
                type:'POST',
                data:{
                    tel:tel
                },
                success:function(dt){
                    code = $.parseJSON(dt).Code;
                 if ($.isNumeric(code)) {
                        $(".getcheckd").attr("disabled", true);
                        $('#getcheckd').focus();
                        ting = setInterval(clock, 1000);
                  } else {
                      alert('您今天的短信接收次数已达到上限!');
                 }
                },
            });
            
            return false;
        }
    });
    
    $("#submd").click(function(){
    	var vzva=$("#teld").val();
    	var vzerr=$(".telerrd").html();
    	var vcva=$("#checkd").val();
    	var vcerr=$(".checkerrd").html();
    	if(vzva!=""&&vzerr==""&&vcva!=""&&vcerr==""){
    		return true;
    	}
    	else{
    		return false;
    	}
    });
})
