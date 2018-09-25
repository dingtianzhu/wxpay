$(function() {
	var winheight = window.innerHeight;
	$(".centerbox").css({
		"height": winheight - 120
	});
	$(".loadbox").css({
		"height": winheight - 120
	});
	window.onresize = function() {
		var winheight = window.innerHeight;
		$(".centerbox").css({
			"height": winheight - 120
		});
		$(".loadbox").css({
			"height": winheight - 120
		});
	}
	$(".inputuser input").blur(function() {
		var telv = $(this).val();
		if(telv == "") {
			$(".usererr").html("请输入账号");

		}
		else if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(telv))&&telv!="admin") {
			$(".usererr").html("请输入正确账号");

		}
		else {
			$(".usererr").html("");

		}
	});
	$(".inputpass input").blur(function() {
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
	$(".loadbtn").click(function(){
	    var uval=$(".inputuser input").val();
		var pasval=$(".inputpass input").val();
		if(uval==""){
			$(".usererr").html("请输入正确账号");
			return false;
		}
		else if(pasval==""){
			$(".passerr").html("请输入正确密码");
			return false;
		}
		else{
			return true;
		}
	});
})