<?php
namespace app\admin\controller;
use think\Db;
class Index extends Base{
	public function index(){
		//设置菜单
		$modules=$this->getModules();
		$this->assign("modules",$modules);
		if (!empty(input('content'))) {
			$content=input('content');
			$data=Db::name('enter_user')->where('id|enter_name|tel','like','%'.$content.'%')->order('id')->Paginate(6);
		}else{
			$data=Db::name('enter_user')->order('id')->Paginate(6);
		}
		$this->assign('data',$data);
		return $this->fetch();

	}
//	public function enter_user(){
//		if (!empty(input('content'))) {
//			$content=input('content');
//			$data=Db::name('enter_user')->where('TFID|Question|Answer','like','%'.$content.'%')->order('TFID')->Paginate(6);
//		}else{
//			$data=Db::name('enter_user')->order('TFID')->Paginate(6);
//		}
////渲染到模板的分页样式
//   		// $this->assign('page', $pages->pagelist());
//		$this->assign('data',$data);
//		return $this->fetch();
//	}
	public function del(){
		$id = input('id');
		if(!empty($id))
		Db::name("enter_user")->delete($id);
		$url=$_SERVER['HTTP_REFERER'];
		$this->redirect("$url");
	}
	public function edit(){
		$id = input('id');
		$data=Db::name("enter_user")->where('id',$id)->find();
		if(!empty($id)&&!empty($data)){
			$this->assign("data",$data);
		}
		return $this->fetch();
	}
	public function update(){
		$data = input('post.');
		$param = $data;
		unset($param['id']);
		$res=Db::name('enter_user')->where('id',$data['id'])->update($param);
		if(!empty($res)){
			$this->success("修改成功","index/index",2);
		}else{
			$this->success("fail","index/edit",2);
		}

	}
	public function add(){
		return view();
	}
	public function insert(){
		$data = input('post.');
		$data['enter_time']=time();
		$res=Db::name("enter_user")->insert($data);
		if(!empty($res)){
			$this->success("添加成功","index/index",2);
		}else{
			$this->success("fail","index/add",2);
		}	
		
	}

	public function _empty(){
		$this ->redirect('index/index');
	}
}


?>
