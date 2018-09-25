<?php
// +----------------------------------------------------------------------
// | SYTMCL [ I CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) www.ziranyutang.com
// +----------------------------------------------------------------------
// | Author: JackieChan <1071727873@qq.com>
// +----------------------------------------------------------------------
namespace app\common\controller;
use think\Controller;
use think\Request;
use think\Lang;
class Common extends Controller{
    // Request实例
    protected $request;
	protected $lang;
	protected function _initialize(){
        if (!defined('__ROOT__')) {
            $_root = rtrim(dirname(rtrim($_SERVER['SCRIPT_NAME'], '/')), '/');
            define('__ROOT__', (('/' == $_root || '\\' == $_root) ? '' : $_root));
        }

        
        if(!defined("__BASEURL__")){
            $baseUrl = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
            $baseUrl=str_replace("index.php/", "", $baseUrl);
            define('__BASEURL__',$baseUrl);
        }

		/*if (!file_exists(ROOT_PATH.'data/install.lock')) {
            //不存在，则进入安装
            header('Location: ' . url('install/index/index'));
            exit();
        }*/
		if (null === $this->request) {
            $this->request = Request::instance();
        }
        if (!defined('MODULE_NAME')){define('MODULE_NAME', $this->request->module());}
        if (!defined('CONTROLLER_NAME')){define('CONTROLLER_NAME', $this->request->controller());}
        if (!defined('ACTION_NAME')){define('ACTION_NAME', $this->request->action());}

	}
    //空操作
    public function _empty(){
        //$this->error(lang('operation not valid'));
        $this->error(CONTROLLER_NAME."/".ACTION_NAME);
    }
    public function check_get($keys){
        $darr=[];
        foreach ($keys as $value) {
            if(input($value)!=null){
                $darr[$value]=input($value);
            }else if(isset($_POST[$value])){
                $darr[$value]="";
            }else{
                return false;
            }
        }
        return $darr;
    }
  
}