<?php
namespace app\admin\controller;
use app\common\controller\Common;
use think\Db;
use think\Cache;
class Base extends Common{
	protected function _initialize(){
		parent::_initialize();
		//获取用户信息

		$userinfo=session('userinfo');
		//如果session中未储存用户信息，转去登录
		//后台管理系统简单编写，不设置url记录及登陆后转向
		//前台设置读取用户信息，统一使用thinkphp的session方法
		if($userinfo==null){
			$this->redirect("login/index");
		}
		
		//权限验证部分
	}

	public function getModules(){
		return [
			/*模型管理，对于每个分类，分配一个模型，传递参数，每个模型可以有多个模板，调用指定模板。*/
			['title'=>'内容管理','childs'=>[
					['title'=>'分类信息','url'=>url('Category/index')]
				]
			],
			['title'=>'配置管理','childs'=>[
					['title'=>'控制器模型','url'=>url('Model/index')],
					['title'=>'表格模型','url'=>url('Table/index')]
				]
			]
		];
	}
	public function _empty(){
		$this->redirect('login/index');
	}
}
	
//uid,是登陆者的id号码
?>