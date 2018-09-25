$(function(){
	var wid=window.document.width;
	var hei=window.document.height;
	$("body").css({"width":wid,"height":hei});
	
	window.onresize=function(){
		var wid=window.innerWidth;
	var hei=window.innerHeight;
	$("body").css({"width":wid,"height":hei});
	}
	
	$(".join").click(function(){
		$(".erwei").show();
		$(this).hide();
	});
})