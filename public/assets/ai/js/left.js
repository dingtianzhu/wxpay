$(function(){
	$('.list-group').find('a:gt(0)').hide();
	$('.active').click(function(){
		$(this).nextAll().toggle();
		$('.active').not($(this)).nextAll().hide();
	});
});