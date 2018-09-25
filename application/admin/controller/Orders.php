<?php
namespace app\admin\controller;
use think\Db;
class Orders extends Base{
	public function index(){
		$data=Db::name('orders')
			->alias('a')
			->join('product b','b.id=a.product_id')
			->join('release_info c','a.re_id=c.id')
			->order('orders.id')->Paginate(10);
//		echo '<pre>';
//		print_r($data);
//		exit;
		$this->assign('data',$data);
		return $this->fetch();
	}
	
	public function del(){
		$id = input('id');
		if(!empty($id))
		Db::name("orders")->delete($id);
		$url=$_SERVER['HTTP_REFERER'];
		$this->redirect("$url");
	}
	public function edit(){
		$id = input('id');
		$data=Db::name("orders")->where('id',$id)->find();
		if(!empty($id)&&!empty($data)){
			$this->assign("data",$data);
		}
		return $this->fetch();
	}
	public function update(){
		$data = input('post.');
		$param = $data;
		unset($param['id']);
		$res=Db::name('orders')->where('id',$data['id'])->update($param);
		if(!empty($res)){
			$this->success("修改成功","orders/index",2);
		}else{
			$this->success("fail","orders/edit",2);
		}

	}
	public function add(){
		return view();
	}
	public function insert(){
		$data = input('post.');
		
		$res=Db::name("hospital_orders")->insert($data);
		if(!empty($res)){
			$this->success("添加成功","orders/index",2);
		}else{
			$this->success("fail","orders/add",2);
		}	
		
	}

// 	public function adds(){
// 		return view();
// 	}
// 	public function impExcel()  
//     {  
//         vendor("PHPExcel.PHPExcel"); //下载PHPExcel类  
//         //获取表单上传文件  
//         $file = request()->file('excel');   
//         $info = $file->validate(['ext' => 'xlsx,xls,csv'])->move(ROOT_PATH . 'public' . DS . 'uploads' . DS . 'excel');  
//         if ($info) {  
//              //echo $info->getFilename();die;  
//             $exclePath = $info->getSaveName();  //获取文件名  
//             $file_name = ROOT_PATH . 'public' . DS . 'uploads' . DS . 'excel'.DS.$exclePath;   //上传文件的地址  
//             $objReader = \PHPExcel_IOFactory::createReader('Excel2007');  
//             $obj_PHPExcel = $objReader->load($file_name, $encode = 'utf-8');  //加载文件内容,编码utf-8  
//             echo "<pre>";  
//             $excel_array = $obj_PHPExcel->getsheet(0)->toArray();   //转换为数组格式  
//             //array_shift($excel_array);  //删除第一个数组(标题);  
//             $city = [];  
//             foreach ($excel_array as $k => $v) {  
//             	$city[$k]['CreateDt']=time();
// 				$city[$k]['CreateBy']=session('adminfo');
// 				$city[$k]['UpdateBy']='';
// 				$city[$k]['UpdateDt']='';
// 				$city[$k]['DeleteFlag']=0;
//                 $city[$k]['Question'] = $v[0];  
//                 $city[$k]['Answer'] = $v[1];  
//             }  
// //            var_dump($city);die;  
//             $add=Db::name('knowledge_base_info')->insertAll($city); //批量插入数据  
//             //var_dump($add);die;  
//             if($add){  
//                 $this->success('添加成功',"index/index",2);  
//             }else{  
//                 $this->error('失败');  
//             }  
//         } else {  
//             echo $file->getError();  
//         }  
//     }  
	public function _empty(){
		$this ->redirect('index/index');
	}
}


?>
