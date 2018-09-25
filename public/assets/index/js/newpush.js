$(function(){
	$("#title").blur(function(){
		var titleval=$(this).val();
		if(titleval==""){
			$(".titleerr").html("请输入新闻标题");
		}
		else{
			$(".titleerr").html("");
		}
	});
	$("#enterarea").blur(function(){
		var areaval=$(this).val();
		if(areaval==""){
			$(".areaerr").html("请输入新闻内容");
		}else{
		$(".areaerr").html("");	
		}
	});
	$(".upjiao").click(function(){
		var title=$("#title").val();
		var titlerr=$(".titleerr").html();
		var conten=$("#enterarea").val();
		var contenerr=$(".areaerr").html();
		if(title!=""&&titlerr==""&&conten!=""&&contenerr==""){
			return true;
		}else{
			return false;
		}
	});
	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
    $(".navhang li").hover(function() {
//      var liclass = $(this).attr('class');
        $(this).addClass("bor-bottom");
//      if (liclass == "shopli") {
//          $(".slidebox").stop(true).animate({ "height": 100 + "px" }, 300);
//      } else {
//          $(".slidebox").stop(true).animate({ "height": 0 + "px" }, 300);
//      }
    }, function() {
        $(this).removeClass("bor-bottom");
//      $(".slidebox").stop(true).animate({ "height": 0 + "px" }, 300);
//      $(".slidebox").hover(function() {
//          $(this).stop(true).animate({ "height": 100 + "px" }, 300);
//      }, function() {
//          $(this).stop(true).animate({ "height": 0 + "px" }, 300);
//      });
    });
})
