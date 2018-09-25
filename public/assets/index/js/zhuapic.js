$(function() {
	for(i=0;i<$(".sign").length;i++){
		if ($('.sign').eq(i).val()==0) {
			$('.sign').eq(i).siblings('.nbs').append('<div class="inforreg">注册</div>');				
		}else{
			$('.sign').eq(i).siblings('.nbs').append('<div class="infor">已注册</div>');
		}
	}
	$(".navhang li").hover(function() {
		var liclass = $(this).attr('class');
		$(this).addClass("bor-bottom");
		if(liclass == "shopli") {
			$(".slidebox").stop(true).animate({
				"height": 100 + "px"
			}, 300);
		} else {
			$(".slidebox").stop(true).animate({
				"height": 0 + "px"
			}, 300);
		}
	}, function() {
		$(this).removeClass("bor-bottom");
		$(".slidebox").stop(true).animate({
			"height": 0 + "px"
		}, 300);
		$(".slidebox").hover(function() {
			$(this).stop(true).animate({
				"height": 100 + "px"
			}, 300);
		}, function() {
			$(this).stop(true).animate({
				"height": 0 + "px"
			}, 300);
		});
	});

	var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".zhuaregp").css({"width":winwidth,"height":winheight});
	window.onresize = function() {
	var winwidth=window.innerWidth;
	var winheight=window.innerHeight;
	$(".zhuaregp").css({"width":winwidth,"height":winheight});
	}
 laydate.render({
     elem: '#J-xl',
      theme: '#393D49'
    });
     laydate.render({
      elem: '#J-x2',
      theme: '#393D49'
    });
     laydate.render({
      elem: '#J-x3',
      theme: '#393D49'
    });
     laydate.render({
      elem: '#J-x4',
      theme: '#393D49'
    });
	
	 laydate.render({
      elem: '#J-x5',
      theme: '#393D49'
    });
	
	


	$(".inforreg").click(function() {
		var id=$(this).parent('.nbs').siblings('.hide_id').val();
		$('.p_id').attr('value',id);
		var beiurl=$(this).parents(".showpicinfor").siblings("img").attr("src");
		$(".piankuang").attr("src",beiurl);
		$(".zhuaregp").show();
	});
	$(".backguai").click(function() {
		$(".zhuaregp").hide();
	});
	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
	
	$(".threechoice li").click(function(){
		var con=$(this).index();
		$(this).css({"background":"#d1e9eb","color":"#1f7c82"});
		$(this).siblings("li").css({"background":"#1f7c82","color":"white"});
		if(con==0){
			$(".ygformbox").show();
			$(".vipformbox").hide();
			$(".docformbox").hide();
		}
		else if(con==1){
			$(".ygformbox").hide();
			$(".vipformbox").show();
			$(".docformbox").hide();
		}
		else{
			$(".ygformbox").hide();
			$(".vipformbox").hide();
			$(".docformbox").show();
		}
	});
	
	
	
	 $(".ygformbox .renname input").blur(function(){
    	var nameval=$(this).val();
    	if(nameval==""){
    		$(".ygformbox .namerr").html("请输入姓名");
    	}
    	else{
    		$(".ygformbox .namerr").html("");
    	}
    });
    
      $(".ygformbox .rentel input").blur(function(){
    	var telval=$(this).val();
    	if(telval==""){
    		$(".ygformbox .telerr").html("请输入正确电话号码");
    	}
    	else if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(telval))) {
			$(".ygformbox .telerr").html("请输入正确电话号码");

		}
    	else{
    		$(".ygformbox .telerr").html("");
    	}
    });
    
    
      $(".ygformbox .homepla input").blur(function(){
    	var plaval=$(this).val();
    	if(plaval==""){
    		$(".ygformbox .placerr").html("请输入家庭住址");
    	}
    	else{
    		$(".ygformbox .placerr").html("");
    	}
    });
    $(".ygformbox #welcom").blur(function(){
    	var welval=$(this).val();
    	if(welval==""){
    		$(".ygformbox .welcomerr").html("请输入欢迎语句");
    	}
    	else{
    		$(".ygformbox .welcomerr").html("");
    	}
    });
    
     $('.ygformbox .shijian input').bind('blur', function() { 
	var birthval=$(this).val();
    	console.log(birthval);
    	if(birthval==""){
    		$(".ygformbox .birtherr").html("请输入出生日期");
    	}
    	else{
    		$(".ygformbox .birtherr").html("");
    	}
})
    
      $(".ygformbox .regbtn").click(function(){
    	var nameva=$(".ygformbox .renname input[type='text']").val();
    	var telva=$(".ygformbox .rentel input").val();
    	var shiva=$(".ygformbox .shijian input").val();
    	var placeva=$(".ygformbox .homepla input").val();
    	if(nameva==""||$(".ygformbox .namerr").html()!=""){
    		$(".ygformbox .namerr").html("请输入姓名")
    		return false;
    	}
    	else if(telva==""||$(".ygformbox .telerr").html()!=""){
    		$(".ygformbox .telerr").html("请输入正确电话号码")
    		return false;
    	}
    	else if(shiva==""||$(".ygformbox .birtherr").html()!=""){
    		$(".ygformbox .birtherr").html("请输入出生日期");
    		return false;
    	}
    	else if(placeva==""||$(".ygformbox .placerr").html()!=""){
    		$(".ygformbox .placerr").html("请输入家庭地址")
    		return false;
    	}
    	else{
    		$(".ygformbox .birtherr").html("");
    		return true;
    	}
    	
    });





 $(".vipformbox .renname input").blur(function(){
    	var nameval=$(this).val();
    	if(nameval==""){
    		$(".vipformbox .namerr").html("请输入姓名");
    	}
    	else{
    		$(".vipformbox .namerr").html("");
    	}
    });
    
      $(".vipformbox .rentel input").blur(function(){
    	var telval=$(this).val();
    	if(telval==""){
    		$(".vipformbox .telerr").html("请输入正确电话号码");
    	}
    	else if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(telval))) {
			$(".vipformbox .telerr").html("请输入正确电话号码");

		}
    	else{
    		$(".vipformbox .telerr").html("");
    	}
    });
    
    
      $(".vipformbox .homepla input").blur(function(){
    	var plaval=$(this).val();
    	if(plaval==""){
    		$(".vipformbox .placerr").html("请输入家庭住址");
    	}
    	else{
    		$(".vipformbox .placerr").html("");
    	}
    });
    $(".vipformbox #welcom").blur(function(){
    	var welval=$(this).val();
    	if(welval==""){
    		$(".vipformbox .welcomerr").html("请输入欢迎语句");
    	}
    	else{
    		$(".vipformbox .welcomerr").html("");
    	}
    });
    
     $('.vipformbox .shijian input').bind('blur', function() { 
	var birthval=$(this).val();
    	console.log(birthval);
    	if(birthval==""){
    		$(".vipformbox .birtherr").html("请输入出生日期");
    	}
    	else{
    		$(".vipformbox .birtherr").html("");
    	}
})
    
      $(".vipformbox .regbtn").click(function(){
    	var nameva=$(".vipformbox .renname input[type='text']").val();
    	var telva=$(".vipformbox .rentel input").val();
    	var shiva=$(".vipformbox .shijian input").val();
    	var placeva=$(".vipformbox .homepla input").val();
    	if(nameva==""||$(".vipformbox .namerr").html()!=""){
    		$(".vipformbox .namerr").html("请输入姓名")
    		return false;
    	}
    	else if(telva==""||$(".vipformbox .telerr").html()!=""){
    		$(".vipformbox .telerr").html("请输入正确电话号码")
    		return false;
    	}
    	else if(shiva==""||$(".vipformbox .birtherr").html()!=""){
    		$(".vipformbox .birtherr").html("请输入出生日期");
    		return false;
    	}
    	else if(placeva==""||$(".vipformbox .placerr").html()!=""){
    		$(".vipformbox .placerr").html("请输入家庭地址")
    		return false;
    	}
    	else{
    		$(".vipformbox .birtherr").html("");
    		return true;
    	}
    	
    });

  
  
  
  
 $(".docformbox .renname input").blur(function(){
    	var nameval=$(this).val();
    	if(nameval==""){
    		$(".docformbox .namerr").html("请输入姓名");
    	}
    	else{
    		$(".docformbox .namerr").html("");
    	}
    });
    
      $(".docformbox .rentel input").blur(function(){
    	var telval=$(this).val();
    	if(telval==""){
    		$(".docformbox .telerr").html("请输入正确电话号码");
    	}
    	else if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(telval))) {
			$(".docformbox .telerr").html("请输入正确电话号码");

		}
    	else{
    		$(".docformbox .telerr").html("");
    	}
    });
    
    
      $(".docformbox .homepla input").blur(function(){
    	var plaval=$(this).val();
    	if(plaval==""){
    		$(".docformbox .placerr").html("请输入家庭住址");
    	}
    	else{
    		$(".docformbox .placerr").html("");
    	}
    });
    $(".docformbox #welcom").blur(function(){
    	var welval=$(this).val();
    	if(welval==""){
    		$(".docformbox .welcomerr").html("请输入欢迎语句");
    	}
    	else{
    		$(".docformbox .welcomerr").html("");
    	}
    });
    
     $('.docformbox .shijian input').bind('blur', function() { 
	var birthval=$(this).val();
    	console.log(birthval);
    	if(birthval==""){
    		$(".docformbox .birtherr").html("请输入出生日期");
    	}
    	else{
    		$(".docformbox .birtherr").html("");
    	}
})
    
      $(".docformbox .regbtn").click(function(){
    	var nameva=$(".docformbox .renname input[type='text']").val();
    	var telva=$(".docformbox .rentel input").val();
    	var shiva=$(".docformbox .shijian input").val();
    	var placeva=$(".docformbox .homepla input").val();
    	if(nameva==""||$(".docformbox .namerr").html()!=""){
    		$(".docformbox .namerr").html("请输入姓名")
    		return false;
    	}
    	else if(telva==""||$(".docformbox .telerr").html()!=""){
    		$(".docformbox .telerr").html("请输入正确电话号码")
    		return false;
    	}
    	else if(shiva==""||$(".docformbox .birtherr").html()!=""){
    		$(".docformbox .birtherr").html("请输入出生日期");
    		return false;
    	}
    	else if(placeva==""||$(".docformbox .placerr").html()!=""){
    		$(".docformbox .placerr").html("请输入家庭地址")
    		return false;
    	}
    	else{
    		$(".docformbox .birtherr").html("");
    		return true;
    	}
    	
    });
    
    
    $(".jumpniu").click(function(){
    	var pageqian=Number($(".pagenum").val());
    	var lilength=$(".pagination").children("li:last-child").index();  	
    	var allpage=Number($(".pagination").children("li")[lilength-1].children[0].innerHTML);
    	var uurl=window.location.href;
    	if(pageqian==0){
    		alert("请输入页码");
    	}
    	else if(pageqian>allpage){
		var picpage="?page="+allpage;
		window.location.href=uurl.replace(window.location.search,picpage);
    	}
    	else if(pageqian<0){
    	var pipage="?page="+1;
		window.location.href=uurl.replace(window.location.search,pipage);
    	}
    	else{
    		if(window.location.search==""){
    			window.location.search="?page="+pageqian;
    		}
    		else{
    			var picpage="?page="+pageqian;
		window.location.href=uurl.replace(window.location.search,picpage);
    		}
    		
    		}
    });

})