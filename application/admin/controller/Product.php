<?php
namespace app\admin\controller;
use think\Controller;
use think\Request;
use think\Db;
class Product extends Base{
	public function index(){
		$data=Db::name('product')->order('id')->Paginate(10);
		$this->assign('data',$data);
		return $this->fetch();
	}
	
	public function del(){
		$id = input('id');
		if(!empty($id))
		Db::name("product")->delete($id);
		$url=$_SERVER['HTTP_REFERER'];
		$this->redirect("$url");
	}

	public function edit(){
		$id = input('id');
		$data=Db::name("product")->where('id',$id)->find();
		if(!empty($id)&&!empty($data)){
			$this->assign("data",$data);
		}
		return $this->fetch();
	}

	public function update(Request $request){
		$data = input('post.');
		$param = $data;
        $file=$request->file('file');
        $filename='product';
        $param['product_img'] = $this->upload($file,$filename);
		unset($param['id']);
		unset($param['file']);

		$res=Db::name('product')->where('id',$data['id'])->update($param);
		if(!empty($res)){
			$this->success("修改成功","product/index",2);
		}else{
			$this->success("fail","product/edit/id/".$data['id'],2);
		}
	}

	public function add(){
		return view();
	}
	public function insert(Request $request){
		$data = input('post.');

        $file=$request->file('file');
        $filename='product';
        $data['product_img'] = $this->upload($file,$filename);
		unset($data['file']);
        $res=Db::name("product")->insert($data);
		if(!empty($res)){
			$this->success("添加成功","product/index",2);
		}else{
			$this->success("fail","product/add",2);
		}	
		
	}

	public function upload($file,$filename){

        if(!empty($file)){
        	$path="/upload/".$filename."/";
            if ($info=$file->move(".".$path)) {

                $data['img']=$path.$info->getsaveName();
               	return $data['img'];

            }else{
                return 0;
            }
        }
	}
	public function _empty(){
		$this ->redirect('index/index');
	}
}


?>
