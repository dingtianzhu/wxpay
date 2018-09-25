$(function(){
	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
    $("#ztitle").blur(function(){
    	var tval=$(this).val();
    	if(tval==""){
    		$(".titlerr").html("请输入点什么");
    	}
    	else{
    		$(".titlerr").html("");
    	}
    });
    $("#title").blur(function(){
    	var uval=$(this).val();
    	if(uval==""){
    		$(".urlerr").html("请输入网址");
    	}
//     	else if(uval!="http://renfu.zeroioe.com/video/renfushipin.mp4"){
//     		$(".urlerr").html("请输入网址http://renfu.zeroioe.com/video/renfushipin.mp4");
//     	}
    	else{
    		$(".urlerr").html("");
    	}
    	
    });
    $(".urljiao").click(function(){
    	var tva=$("#ztitle").val();
    	var terr=$(".titlerr").html();
    	var uva=$("#title").val();
    	var uerr=$(".urlerr").html();
    	if(tva!=""&&terr==""&&uva!=""&&uerr==""){
    		return true
    	}
    	else{
    		return false
    	}
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
