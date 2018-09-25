<?php
namespace app\common\taglib;
use think\template\TagLib;
class formatarticle extends TagLib{
	/***	定义标签列表	*/
	protected $tags=[
	//标签定义：	attr	属性列表	close	是否闭合（0	或者1	默认1）	alias	标签别名	level	嵌套层 次						
		'close'=>['attr'=>'time,format','close'=>0],	//闭合标签，默认为不闭合								
		'open'=>['attr'=>'name,type','close'=>1]
	];
	
}

?>