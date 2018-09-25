$(function(){
	var winheight = window.innerHeight;
	$(".centerbox").css({"height":winheight-120});
	$(".loadbox").css({"height":winheight-120});
	window.onresize=function(){
		var winheight = window.innerHeight;
	$(".centerbox").css({"height":winheight-120});
	$(".loadbox").css({"height":winheight-120});
	}
	
		$(".inputuser input").blur(function(){
			var telv = $(this).val();
		if(telv == "") {
			$(".usererr").html("请输入账号");

		}
		else if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(telv))) {
			$(".usererr").html("请输入正确账号");

		}
else {
			$(".usererr").html("");

		}
	});
	
		$(".inputpass input").blur(function(){
			var passva = $(this).val();
		if(passva == "") {
			$(".passerr").html("密码不能为空");
		}
		else if(passva.length<6){
			$(".passerr").html("密码长度至少六位");
		}
		else{
			$(".passerr").html("");
		}
	});
		$(".zaiinputpass input").blur(function(){
			var passva = $(".inputpass input").val();
			var zpval=$(this).val();
		if(zpval==""){
			$(".zaipasserr").html("密码不能为空");
		}
		else if(zpval!=passva){
			$(".zaipasserr").html("两次输入密码不一致");
		}
		else{
			$(".zaipasserr").html("");
		}
	});
		$(".check input").blur(function(){
		var ckval=$(this).val();
		if(ckval==""){
			$(".checkerr").html("验证码不能为空");
		}
		else{
		$(".checkerr").html("");	
		}
	});
	// $('.getCheck').click(function(){
	// 	var tel=$('#tel').val();
	// 	$.ajax({
	// 		url:'/index/sends/send',
	// 		data:{
	// 			tel:tel
	// 		}
	// 		dataType:'json';
	// 		type:'POST',
	// 		success:function(dt){
	// 			code = $.parseJSON(dt).Code;
 //                if ($.isNumeric(code)) {
 //                    $(".getCheck").attr("disabled", true);
 //                    $('#getCheck').focus();
 //                    ting = setInterval(clock, 1000);
 //                } else {
 //                    alert('您今天的短信接收次数已达到上限!');
 //                }
	// 		}
	// 	})
	// });
	// var code;
    var timem = 61;
	$(".getcheck").click(function() {
        var tel = $("#tel").val();
        if (tel == "" ) {
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
                    $(".getcheck").css({ "background": "deepskyblue" });
                } else {
                    $(".getcheck").css({ "background": "lightgrey" });
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
                    code = $.parseJSON(dt).Message;
                    if (code=='OK') {
                        $(".getcheck").attr("disabled", true);
                        $('#getCheck').focus();
                        ting = setInterval(clock, 1000);
                    } else {
                        alert('您今天的短信接收次数已达到上限!或手机号错误');
                    }
                },
                // error: function(e) {
                //     console.log(e);
                // }
            });
            
            return false;
        }
    });

})
