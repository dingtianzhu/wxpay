<?php
namespace app\ai\controller;
use think\Session;
use think\Controller;
use think\Request;
use think\Db;

header('Access-Control-Allow-Origin: *');
 
header('Access-Control-Allow-Methods:  POST, PUT, DELETE');
 
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept");

class Api extends Controller
{	
    public function getinfo(){
        $department=input('department');
        $data=Db::name('hospital_doctor')->where('department',$department)->select();
        print_r(json_encode($data));
    }
}