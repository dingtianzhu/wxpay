$(function() {

    //nav-mini切换
    $('#mini').on('click', function() {
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
            var wid = window.innerWidth;
            $(".rightload").animate({
                "left": 60 + "px",
                "width": wid - 80 + "px"
            }, 150);
            $(".rightload").css({
                "min-width": 1140 + "px"
            });
        } else {
            $('.nav').removeClass('nav-mini');
            var wid = window.innerWidth;
            $(".rightload").animate({
                "left": 220 + "px",
                "width": wid - 240 + "px"
            }, 250);
        }
    });


    var wid = window.innerWidth;
    var heigt = window.innerHeight;
    $(".rightload").css({
        "width": wid - 240 + "px",
        "height": heigt
    });
    $(".nav").css({
        "height": heigt
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

  $(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
    
//  点击条目获取信息放在右边框
    $(".staff_list").click(function(){
    	var idnum=$(this).children("li").eq(0).html();
    	var imtu=$(this).children("li").eq(1).children("img").attr("src");
    	var name=$(this).children("li").eq(2).html();
    	var sex=$(this).children("li").eq(3).html();
    	var birth=$(this).children("li").eq(4).html();
    	var tel=$(this).children("li").eq(5).html();
    	var job=$(this).children("li").eq(6).html();
    	var addr=$(this).children("li").eq(7).html();
    	var welcom=$(this).children("li").eq(8).html();
    	var pid=$(this).children(".pid").val();
    	$(".avatar").children("img").attr("src",imtu);
    	$("#id").val($.trim(idnum))
    	$("#delid").val($.trim(idnum));
    	$("#delid1").val($.trim(idnum));
			$("#delid2").val($.trim(idnum));
    	$("#pidid").val($.trim(pid));
    	$("#file").val("");
    	$(".member_det").children("p").eq(0).children("input").val($.trim(name));
    	$(".member_det").children("p").eq(1).children("input").val($.trim(sex));
    	$(".member_det").children("p").eq(2).children("input").val($.trim(birth));
    	$(".member_det").children("p").eq(3).children("input").val($.trim(tel));
    	$(".member_det").children("p").eq(4).children("input").val($.trim(addr));
    	$(".member_det").children("p").eq(5).children("input").val($.trim(welcom));
    	$(".member_det1").children("p").eq(0).children("input").val($.trim(name));
    	$(".member_det1").children("p").eq(1).children("input").val($.trim(sex));
    	$(".member_det1").children("p").eq(2).children("input").val($.trim(birth));
    	$(".member_det1").children("p").eq(3).children("input").val($.trim(tel));
    	$(".member_det1").children("p").eq(4).children("input").val($.trim(job));
    	$(".member_det1").children("p").eq(5).children("input").val($.trim(addr));
    	$(".member_det1").children("p").eq(6).children("input").val($.trim(welcom));
    });
    
    $(".staff_right a").click(function(){
    	$(".member_det").children("p").children("input").attr("disabled",false);
    	$(this).hide();
    	$(".inforchange").show();
    	$(".piclabel").show();
    });
    $(".member_right a").click(function(){
    	$(".member_det1").children("p").children("input").attr("disabled",false);
    	$(this).hide();
    	$(".inforchange").show();
    	$(".piclabel").show();
    });
    
    

    window.onresize = function() {
        var wid = window.innerWidth;
        var heigt = window.innerHeight;
        var rightwid = $(".nav").width();
        if (rightwid == 60) {
            $(".rightload").css({
                "width": wid - 80 + "px",
                "height": heigt,
                "min-width": 1140 + "px"
            });
        } else {
            $(".rightload").css({
                "width": wid - 240 + "px",
                "height": heigt,
                "min-width": 980 + "px"
            });
        }

        $(".nav").css({
            "height": heigt
        });
   
    }
})