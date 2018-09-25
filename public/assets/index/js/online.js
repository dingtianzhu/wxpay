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

	var innerheight = window.innerHeight;
	var innerwid = window.innerWidth;
	$(".camerabox").css({
		"height": innerheight - 70
	});
	$(".picshow").css({
		"height": innerheight - 70
	});
	$(".fourboxp").css({
		"height": innerheight - 70,
		"width": innerwid - 520
	});
	$(".sivideo").css({
		"width": (innerwid - 530)/2,
		"height": (innerheight - 115)/2
	});
	$(".picp").css({
		"height": innerheight - 110
	});
	
	

	window.onresize = function() {
		var innerheight = window.innerHeight;
		var innerwid = window.innerWidth;
		$(".camerabox").css({
			"height": innerheight - 70
		});
		$(".picshow").css({
			"height": innerheight - 70
		});
		$(".fourboxp").css({
			"height": innerheight - 70,
			"width": innerwid - 520
		});
		$(".sivideo").css({
		"width": (innerwid - 530)/2,
		"height": (innerheight - 115)/2
	});
		$(".picp").css({
			"height": innerheight - 110
		});
	}

	$(".clickbox").click(function() {
		var cla = $(this).children(".caret").attr("class");
		if(cla == "caret") {
			$(".caret").addClass("topjian");
			$(".listmenu").stop(true).show(300);
		} else {
			$(".caret").removeClass("topjian");
			$(".listmenu").stop(true).hide(300);
		}

	});
	$(".listmenu li a").click(function() {
		var wid=$(".sivideo").width();
	var hei=$(".sivideo").height();
		if($(this).attr("class") == "usevi") {
			var place = $(this).html();
			alert("当前使用中");
		} else {
			$(this).addClass("usevi");
			var place = $(this).html();
			var videocontent = document.getElementsByClassName("sivideo");
			for(var i = 0; i < videocontent.length; i++) {
				if(videocontent[i].getAttribute("class") == "sivideo" || videocontent[i].getAttribute("class") == "sivideo biaoji") {
					var apendval='<div class="title_close">'+
						'<span class="videoname">'+ place + '</span>'+
						'<span class="closex">X</span>'+
					'</div>'+
				'<object width="100%" height="100%" type="application/x-vlc-plugin" events="True"'+
       'classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" codebase="http://downloads.videolan.org/pub/videolan/vlc/latest/win32/axvlc.cab" data="rtsp://103.201.26.10/c_225.sdp">'+
          '<param name="autoplay" value="true" />'+
    '</object>'
				$(videocontent[i]).append(apendval);
	
					$(videocontent[i]).addClass("youvi");
					$(".closex").click(function() {
						var closena = $(this).siblings(".videoname").html();
						var alist = $(".listmenu").children("li").children("a");
						for(var i = 0; i < alist.length; i++) {
							if(closena == alist[i].innerHTML) {
								$(alist[i]).removeClass("usevi");
							}
						}
						$(this).parent(".title_close").parent(".sivideo").removeClass("youvi");
						$(this).parent(".title_close").parent(".sivideo").html("");
						return false;
					});

					$(".title_close").click(function() {
						return false;
					});
					return false;
				}

			}
		}

		$(".clickbox").html(place + '&nbsp;<span class="caret"></span>');
		$(".listmenu").stop(true).hide(300);

	});

	$(".sivideo").dblclick(function() {
		var claslist = $(this).attr("class");
		if(claslist == "sivideo" || claslist == "sivideo youvi") {
			$(this).stop(true).animate({
				"height": 94.5 + '%',
				"width": 99 + '%'
			}, 250);
			$(this).addClass("biaoji");
			$(this).siblings(".sivideo").stop(true).animate({
				"height": 0,
				"width": 0 + '%'
			}, 100);
			$(this).siblings(".sivideo").hide(200);
		} else {
			$(this).stop(true).animate({
				"height": 47 + '%',
				"width": 49.5 + '%'
			}, 250);
			$(this).removeClass("biaoji");
			$(this).siblings(".sivideo").stop(true).animate({
				"height": 47 + '%',
				"width": 49.5 + '%'
			}, 100);
			$(this).siblings(".sivideo").show(200);
		}

	});

	$(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
	
	  $(".inhuibtn").click(function(){
    	$(".inyuan").hide();
    	$(".inhui").show();
    });
    
    $(".inyuanbtn").click(function(){
    	$(".inyuan").show();
    	$(".inhui").hide();
    }); 

})