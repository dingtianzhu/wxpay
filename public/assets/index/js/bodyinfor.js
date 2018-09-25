$(function(){
	  var winwidth=window.innerWidth;
    var winheight=window.innerHeight;
//  $(".mainbody").css({"width":winwidth,"height":winheight-180+"px"});
//  $(".bodypic").css({"margin-top":winheight/14+"px"});
    $(".mainbody").css({"width":winwidth+"px"});
    
    
    window.onresize=function(){
    	var winwidth=window.innerWidth;
    var winheight=window.innerHeight;
    $(".mainbody").css({"width":winwidth+"px"});
//  $(".mainbody").css({"width":winwidth+"px","height":winheight-180+"px"});
//  $(".bodypic").css({"margin-top":winheight/14+"px"});
    
    }
    $(".userzhang").hover(function(){
    	$(".outb").slideDown();
    },function(){
    	$(".outb").slideUp();
    });
    
    $(".mainpic").fadeIn(1000);
    $(".redce").fadeIn(1000);
    setTimeout(function(){
    	$(".zs1").fadeIn(600);
    	setTimeout(function(){
    	$(".zs2").fadeIn(600);
    	setTimeout(function(){
    	$(".zs3").fadeIn(600);
    	setTimeout(function(){
    	$(".ys1").fadeIn(600);
    	setTimeout(function(){
    	$(".ys2").fadeIn(600);
    	setTimeout(function(){
    	$(".ys3").fadeIn(600);
    		setTimeout(function(){
    	$(".environmentbox").fadeIn(600);
    },600);
    },600);
    },600);
    },600);
    },600);
    },600);
    },600);

		var envid=$(".envid").val();
    $.ajax({			
    	url:"http://renfu.zeroioe.com/index/publics/getData",
    	type:"POST",
    	dataType:"json",
    	data:{
    		macid:6,
    		type:100
    	},
    	success:function(dt){
			for(var i=0;i<3;i++){
				if(dt.data[i].type=="1"){
					$(".pm2").html(dt.data[i].data+"μg/m3");
				}
				if(dt.data[i].type=="2"){
					$(".sheshi").html(dt.data[i].data+"℃");
				};
				if(dt.data[i].type=="2"){
					$(".shidu").html(dt.data[i].data+"%");
				};
			}
    	}
    });

  function myFun(result){
		var city = result.name;
				$.ajax({
				url: "http://api.map.baidu.com/telematics/v3/weather?location=" + city + "&output=json&ak=EGgzZ22dsboWQEcPQ6KDQLknQd3YkkkP",
				type: "get",
				dataType: "jsonp",
				scriptCharset: "gbk",
				success: function(baiduTQ) {
					try {
						if(baiduTQ == null || baiduTQ.error != 0 || baiduTQ.status != "success" || baiduTQ.results.count == 0) {
							document.getElementById("lblTemperature").innerHTML = "--";
							document.getElementById("lblWeather").innerHTML = "--";
							document.getElementById("lblCurTemp").innerHTML = "--";
							return;
						}
						if(baiduTQ.results[0].weather_data.length > 0) {
							var data = baiduTQ.results[0].weather_data[0];
							var split = data.date.split("：");
							document.getElementById("lblTemperature").innerHTML = city + "[" + data.temperature + "]";
							document.getElementById("lblWeather").innerHTML = data.weather;
							var curTemp = split.pop();
							document.getElementById("lblCurTemp").innerHTML = curTemp.substring(0, curTemp.length - 1);

							var imgPath = data.dayPictureUrl;
							document.getElementById("cvsToday").src = imgPath;
						}
					} catch(err) {
						alert(err)
					}
				}
			});
	}
	var myCity = new BMap.LocalCity();
	myCity.get(myFun);
    
    
})
