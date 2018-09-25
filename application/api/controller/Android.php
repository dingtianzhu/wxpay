<?php
namespace app\api\controller;
use think\Session;
use think\Controller;
use think\Request;
use think\Db;

header('Access-Control-Allow-Origin: *');
 
header('Access-Control-Allow-Methods:  POST');
 
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept");

class Android extends Controller
{		
	//图片上传
	public function uploads(){
		$image=input('post.file');
        $data['addr']=input('post.addr');
        if(!empty(input('post.username'))) {
        	
        	$insert['time']=time();
        	$dateymd=date('Ymd',$insert['time']);
        	$select=Db::name('dateflow')->where('dates',$dateymd)->find();
        	if($select){
        		$insert['date_id']=$select['id'];
        	}else{
        		Db::name('dateflow')->insert(array('dates'=>$dateymd,'count'=>0));
        		$select=Db::name('dateflow')->where('dates',$dateymd)->find();
        		$insert['date_id']=$select['id'];
        	}
        	$sql=Db::name('timeflow')->insert($insert);
        	if($sql){
        		$se=Db::name('timeflow')->where('date_id',$select['id'])->count();
        		if($se){
        			$up=Db::name('dateflow')->where('id',$select['id'])->update(array('count'=>$se));
        			if($up){
        				return json(['msg'=>'ok']);
        			}else{
        				return json(['msg'=>'fail']);
        			}       			
        		}else{
        			return json(['msg'=>'fail1']);
        		}
        	}else{
        		return json(['msg'=>'fail2']);
        	}
        	return json(['msg'=>'fail3']);
        } else{
        	$imageName = "25220_".date("His",time())."_".rand(1111,9999).'.png';
	        if (strstr($image,",")){
	            $image = explode(',',$image);
	            $image = $image[1];
	        }

	        $path = "./upload/picture/".date("Ymd",time());
	        if (!is_dir($path)){ //判断目录是否存在 不存在就创建
	            mkdir($path,0777,true);
	        }
	        $imageSrc=  $path."/". $imageName;  //图片名字

	        $r = file_put_contents(ROOT_PATH ."public/".$imageSrc, base64_decode($image));//返回的是字节数
	        if (!$r) {
	            return json(['data'=>null,"code"=>1,"msg"=>"图片生成失败","image"=>$image]);

	        }else{
	        	$data['img']="/upload/picture/".date("Ymd",time())."/". $imageName;
	        	$data['time']=time();
	        	$res=Db::name("picture")->insert($data);
	        	if(!empty($res)){
					return json(['data'=>1,"code"=>0,"msg"=>"图片生成成功"]);
				}else{
					return json(['data'=>null,"code"=>1,"msg"=>"图片生成失败","image"=>$image]);
				}
	            
	        }
        }
        
	}
	//设备id
	public function tomac(){
		$param=input('post.check');
		$user=input('mac');
		if($param=="e10adc3949ba59abbe56e057f20f883e"){
			$data=Db::name('mac')->where('mac',$user)->select();
			if($data){
				return json_encode($data);
			}else{
				return json(['msg'=>"no datas"]);
			}
		}else{
			return json(['msg'=>"illegal request"]);
		}
	}
	//设备绑定
	 public function addmac(){
		$param=input('post.');
		if($param['key']=="e10adc3949ba59abbe56e057f20f883e"){
			unset($param['key']);
			$find=Db::name('mac')->where('mac',$param['mac'])->find();
			if(empty($find)){
				return json(['msg'=>"not exsist"]);
			}else{
                $success=Db::name('mac')->where('mac',$param['mac'])->update($param);
                if($success){
                    return json(['msg'=>"success"]);
                }else{
                    return json(['msg'=>"add error"]);
                }
				
			}
		}else{
			return json(['msg'=>"illegal request"]);
		}
		
	}
	//map
	public function map(){
		$param=input('post.');
		if($param['key']=="e10adc3949ba59abbe56e057f20f883e"){
			unset($param['key']);
			$find=Db::name('map')->where('mac_id',$param['mac_id'])->find();
			if(empty($find)){
				$success=Db::name('map')->insert($param);
				if($success){
					return json(['msg'=>"success"]);
				}else{
					return json(['msg'=>"add error"]);
				}
			}else{
				$success=Db::name('map')->where('mac_id',$param['mac_id'])->update($param);
			}		
		}else{
			return json(['msg'=>"illegal request"]);
		}
	}
	//下载图片
	public function tosend(){
		$data=Db::name('picture,person')->field('person.id id,person.username username,picture.time time,picture.img img')->where('picture.id=person.p_id')->order('time','desc')->select();
		return json($data);
	}

	//欢迎语
	public function welcome(){
        $id=input('post.id');
        if($id){
        	$data=Db::name('person')->field('welcome')->where('id',$id)->find();

			return json($data);
        }else{
        	return json(["msg"=>"缺少参数"]);
        }
		
	}

	public function getData() {
        $param=input('post.');
        $res['code']=0;
        if(empty($param)){
            $res['msg']="内容不能为空";
        }else{
            $url = 'http://www.zeroioe.com/kkbot/api/apiForWeb.php?model=robot&act=getdatalist';
           
            $postDataArr = $param;

            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_HEADER, 0);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $postDataArr);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
            curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
            $data = curl_exec($ch);
            $res=$data;    
        }	
        $res=json_decode($res);
        print_r($res);
    }

    public function appoint(){
        $param=input('post.');
        if($param['key']=='3949ba59abbe56e057f20f883e'){
            if($param['time']){
                $data=Db::name('appoint')->where('doc_id',$param['docid'])->where('time','like','%'.$param['time'].'%')->order('id','desc')->limit(0,10)->select();
            }else{
                $data=Db::name('appoint')->where('doc_id',$param['docid'])->order('id','desc')->limit(0,10)->select();
            }
            if($data){
                return json($data);
            }else{

                return json(['msg'=>'no datas']);
            }     
        }else{
            return json(['msg'=>"illegal request"]);
        }
        
    	
    }
    public function doctor(){
        if(input('post.key')=='3949ba59abbe56e057f20f883e'){
            if(input('post.docname')){
                $data=Db::name('doctor,picture')->field('doctor.*,picture.img')->where('doctor.p_id=picture.id')->where('doctor.username','like','%'.input('post.docname').'%')->select();
            }else{
                $data=Db::name('doctor,picture')->field('doctor.*,picture.img')->where('doctor.p_id=picture.id')->select();
            }
            if($data){
                return json($data);
            }else{

                return json(['msg'=>'no datas']);
            }
        }else{
            return json(['msg'=>"illegal request"]);
        }
    }

    public function payfor(){
        $param=input('post.');
        if($param['key']=='3949ba59abbe56e057f20f883e'){
            if($param['status']==1){
                $up=Db::name('appoint')->where('id',$param['id'])->update(array('status'=>0,'per_id'=>0));
            }else{
                $up=Db::name('appoint')->where('id',$param['id'])->update(array('status'=>1,'per_id'=>$param['per_id']));
            }
            if($up){ 
                return json(['msg'=>'success']);
            }else{
                return json(['msg'=>'no datas']);
            }
        }else{
            return json(['msg'=>"illegal request"]);
        }
    }

    public function userinfo(){
        $param=input('post.');
        if($param['key']=='3949ba59abbe56e057f20f883e'){
            if($param['mac_id']){
                $find=Db::name('mac')->where('mac',$param['mac_id'])->find();
                if($find){
                    $person=Db::name('person,picture')->field('person.*,picture.img')->where('picture.id=person.p_id')->where('person.id',$find['owner_id'])->find();
                    if($person){
                        return json($person);
                    }else{
                        return json(['msg'=>'no datas']);
                    }
                }else{
                    return json(['msg'=>'mac_id maybe is not ture']);
                }
            }else{
                return json(['msg'=>'param is not mac_id']);
            }
           
        }else{
            return json(['msg'=>"illegal request"]);
        }
    }

    public function ok(){
        $mac_id=input('post.mac_id');
        if($mac_id){
            $up=Db::name('mac')->where('mac',$mac_id)->update(array('sign'=>1));
            if($up){
                return json(['msg'=>'success']);
            }else{
                return json(['msg'=>'database not this mac_id']);
            }
        }else{
            return json(['msg'=>'no param']);
        }
    }

    public function shui(){
        $param=input('post.');
        if(!empty($param)){
            $su=Db::name('shui')->insert($param);

            if($su){
                return json(['msg'=>'success']);
            }else{
                return json(['msg'=>'fail']);
            }
        }else{
            return json(['msg'=>'no param']);
        }
    }
    public function status(){
        $param=input('post.');
        if($param['key']=='3949ba59abbe56e057f20f883ef'){
            if($param['mac_id']){
                $find=Db::name('mac')->where('mac',$param['mac_id'])->find();
                if($find['open']!=$param['open']){
                    $up=Db::name('mac')->where('mac',$find['mac'])->update(array('open'=>$param['open']));
                    if($up){
                        return json(['msg'=>'success']);
                    }else{
                        return json(['msg'=>'mac_id maybe is not ture']);
                    }
                }else{
                    return json(['msg'=>'open is not reset']);
                }
            }else{
                return json(['msg'=>'param mac_id is not exsist']);
            }
           
        }else{
            return json(['msg'=>"illegal request"]);
        }
    }
    
    public function version(){
        $param=input('post.');
        if($param['key']=='3949ba59abbe56e057f20f883ef'){
            if($param['mac_id']){
                $find=Db::name('mac')->where('mac',$param['mac_id'])->find();
                if($find['version']!=$param['version']){
                    $up=Db::name('mac')->where('mac',$find['mac'])->update(array('version'=>$param['version']));
                    if($up){
                        return json(['msg'=>'success']);
                    }else{
                        return json(['msg'=>'mac_id maybe is not ture']);
                    }
                }else{
                    return json(['msg'=>'version is not reset']);
                }
            }else{
                return json(['msg'=>'param mac_id is not exsist']);
            }
           
        }else{
            return json(['msg'=>"illegal request"]);
        }
    }

    public function getRed(){
        $code=input('code');
        if ($code) {
            //->where('code',$code)
            $data=Db::name('redout')->find();
            if ($data) {
               return json($data); # code...
            }else{
                return json(['msg'=>'Db error']);   
            } # code...
        }else{
            return json(['msg'=>'no code']);
        }
    }

    public function getTV(){
        $id=input('post.id');
        /* demo */
        try{
            $sdkappid = 1400117147;  //腾讯云云通信sdkappid
            $roomid = 1234;          //音视频房间号roomid
            $userid = $id;    //用户名userid
            
            $api = new WebRTCSigApi();
            //设置在腾讯云申请的sdkappid
            $api->setSdkAppid($sdkappid);
            //读取私钥的内容
            //PS:不要把私钥文件暴露到外网直接下载了哦
            $private = file_get_contents(dirname(__FILE__).DIRECTORY_SEPARATOR.'private_key');
            //设置私钥(签发usersig需要用到）
            $api->SetPrivateKey($private);
            //读取公钥的内容
            $public = file_get_contents(dirname(__FILE__).DIRECTORY_SEPARATOR.'public_key');
            //设置公钥(校验userSig和privateMapKey需要用到，校验只是为了验证，实际业务中不需要校验）
            $api->SetPublicKey($public);
     
            //生成privateMapKey
            $privateMapKey = $api->genPrivateMapKey($userid, $roomid);
            //生成userSig
            $userSig = $api->genUserSig($userid);
            //校验
            $result = $api->verifyUserSig($userSig, $userid, $init_time, $expire_time, $error_msg);
            $result = $api->verifyPrivateMapKey($privateMapKey, $userid, $init_time, $expire_time, $userbuf, $error_msg);
            //打印结果
            $ret =  array(
                'privateMapKey' => $privateMapKey,
                'userSig' => $userSig,
                'code'=>0,
                'message'=>"请求成功",
                'userID'=>$id,
                'sdkAppID'=> 1400117147,
                'accType'=> "32137"
            );
            echo json_encode($ret);
            echo "\n";
            
        }catch(Exception $e){
            echo $e->getMessage();
        }

    }
}