<?php

namespace app\api\controller;

use think\Db;

header('Access-Control-Allow-Origin: *');
 
header('Access-Control-Allow-Methods:  POST');
 
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept");
class Publics extends \think\Controller{
    public function enter(){
        $data = input('post.');
        if($data['key']=='d36d63463eb88194190ab98a8e618ab2'){
            unset($data['key']);
            $filename = "./assets/index/passfile/".$data['tel'].".txt";
    		$handle = fopen($filename, "r");

    		$check = fread($handle, filesize ($filename));

            fclose($handle);
            $check=intval ($check);
            if($data['check']==$check){
                unset($data['check']);
                $data['enter_time']=time();
                $sql = db('enter_user')->insert($data);
                if($sql){
                    return json(['code'=>'1','msg'=>'success']);
                }else{
                    return json(['code'=>'0','msg'=>'fail,sql not dose']);
                }
            }else{
                return json(['code'=>'2','msg'=>'check is wrong']);
            }    
        }else{
            return json(['code'=>'3','msg'=>'fail,param key is not defined']);
        }  
    }
    public function addr(){
        $data = input('post.');
        if($data['key']=='d36d63463eb88194190ab98a8e618ab2'){
            unset($data['key']);
            $sql = db('release_info')->insert($data);
            if($sql){
                return json(['code'=>'1','msg'=>'success']);
            }else{
                return json(['code'=>'0','msg'=>'fail,sql not dose']);
            }    
        }else{
            return json(['code'=>'2','msg'=>'fail,param key is not defined']);
        }  
    }
    public function code(){
        $data = input('post.');
        if($data['key']=='d36d63463eb88194190ab98a8e618ab2'){

            if($data['code']=='KOUJS'){
                return json(['code'=>'1','msg'=>'success']);
            }else{
                return json(['code'=>'0','msg'=>'fail,sql not dose']);
            }    
        }else{
            return json(['code'=>'2','msg'=>'fail,param key is not defined']);
        }  
    }

    public function orders(){
        $openid = input('post.openid');
        $data = Db::name('orders')
            ->alias('order')
            ->join('product pro','order.product_id=pro.id')
            ->join('release_info info','info.id=order.id')
            ->where('openid',$openid)
            ->select();
        return $data;
    }

    public function register(){
        $data = input('post.');
        if($data['key']=='d36d63463eb88194190ab98a8e618ab2'){

            if($data['username']&&$data['password']){
                $find = db('user')->where('username',$data['username'])->find();
                if($find){
                    return json(['code'=>'3','msg'=>'user is already exists']);
                }
                $data['password'] = md5($data['password']);
                unset($data['key']);
                db('user')->insert($data);
                return json(['code'=>'1','msg'=>'success']);
            }else{
                return json(['code'=>'0','msg'=>'username or password is not null']);
            }
        }else{
            return json(['code'=>'2','msg'=>'fail,param key is not defined']);
        }
    }

    public function login(){
        $data = input('post.');
        if($data['key']=='d36d63463eb88194190ab98a8e618ab2'){

            if($data['username']&&$data['password']){
                $find= db('user')->where(array('username'=>$data['username'],'password'=>$data['password']))->find();
                if ($find){
                    return json(['code'=>'1','msg'=>'success']);
                }else{
                    return json(['code'=>"3",'msg'=>"fail,username or password error"]);
                }

            }else{
                return json(['code'=>'0','msg'=>'username or password is not null']);
            }
        }else{
            return json(['code'=>'2','msg'=>'fail,param key is undefined']);
        }
    }

    public function send(){

		$demo = new SmsDemo(
		    "LTAIn0g2N0HU7sCQ",
		    "uEBfc3NF52nDvU1gmurRfbIuVW7Xwx"
		);
		$str = mt_rand(100000, 999999);
		$tel = $_POST['tel'];
		//echo "SmsDemo::sendSms\n";
		$response = $demo->sendSms(
		    "泽优云", // 短信签名
		    "SMS_105650022", // 短信模板编号
		    $tel, // 短信接收者
		    Array(  // 短信模板中字段的值
		        "code"=>$str,

		    ),
		    "123"
		);
        if($response->Message == 'OK'){
        $response->Code=$str;
        $myfile = fopen("./assets/index/passfile/".$tel.".txt","w") or die("Unable to open file!");
        $txt = $str."\n";
        fwrite($myfile, $txt);
        fclose($myfile);
        return json_encode($response);

        }else{

        return json_encode($response);
        }
	}
}