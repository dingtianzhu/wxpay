<?php
namespace app\admin\controller;
use think\Controller;
use think\Cache;
use think\Db;
class Login extends Controller{
	public function index(){
		return view();
	}
	public function login(){
		if(request()->isPost()){
			$userName=input("username");
			$password=input("password");
			$userinfo=Db::name("admin")->where(array("username"=>$userName,"passwd"=>md5($password)))->find();
			if($userinfo){
				session('userinfo',$userinfo);
				Db::name("admin")->where("id",$userinfo["id"])->update(
					array('lastime'=>time(),'lastIp'=>$_SERVER['REMOTE_ADDR'],'count'=>['exp','count+1']));
				$this->redirect("Index/index");
			}else{
				$this->error("用户名或者密码错误");
			}
		}else{
			return $this->fetch('admin/index/index');
		}
	}
	public function logout(){
		session("userinfo",null);
		$this->redirect("Login/login");
	}
	public function _empty(){
		$this->redirect('login/index');
	}
}


?>