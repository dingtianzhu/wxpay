<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
  // 应用公共文件
 
/**
 * 向所有设备推送消息-广播
 * @param array $regid 特定设备的设备标识
 * @param string $message 需要推送的消息
 * return array
 */
    function notifyAllUser($alert, $message, $app_key, $master_secret,$content)
    {
        $client = new \JPush\Client($app_key, $master_secret);
     
        $result = $client->push()
        ->addAllAudience() // 推送所有观众
        ->setPlatform('all')
        ->message($content, $message)
        ->send();
        return json_array($result);
    }
     
    /**
     * 将数据先转换成json,然后转成array
     */
    function json_array($result)
    {
        $result_json = json_encode($result);
        return json_decode($result_json, true);
    }
     
    /**
     * 向特定设备推送消息
     * @param array $regid 接收推送的设备标识
     * @param string $message 需要推送的消息体
     * return array
     */
    function sendNotifySpecial($regid, $alert, $message, $app_key, $master_secret)
    {
        $client = new \JPush\Client($app_key, $master_secret);
     
        $result = $client->push()
        ->addAllAudience() // 推送所有观众
        ->setPlatform('all')
        // ->message($message, $msg) // 应用内消息
        ->addAlias($regid) // 给别名推送
        ->iosNotification($alert, $message)
        ->androidNotification($alert, $message)
        ->send();
        return json_array($result);
    }