<?php

namespace app\api\controller;

class Example extends \think\Controller
{
    // 扫码支付
    public function index()
    {
        $params = [
            'body' => '支付测试',
            'out_trade_no' => mt_rand().time(),
            'total_fee' => 1,
            'product_id' => time(),
        ];
        db('order')->insert($params);
        $result = \wxpay\NativePay::getPayImage($params);
        echo $result;
    }
    public function test(){
        $params = [
            'body' => '支付测试',
            'out_trade_no' => mt_rand().time(),
            'total_fee' => 1,
            'product_id' => time(),
        ];
        $result = \wxpay\WapPay::getPayUrl($params);
        halt($result);
    }
    // 公众号支付
    public function jspay()
    {
        $params = [
            'body' => '支付测试',
            'out_trade_no' => mt_rand().time(),
            'total_fee' => 1,
        ];
        $result = \wxpay\JsapiPay::getPayParams($params);
        halt($result);
    }

    // 小程序支付

    public function smallapp()
    {
        $params=input('post.');

        $code = $params['code'];
        unset($params['code']);
        $params['total_fee']=$params['total_fee']*100;

        $openId = \wxpay\JsapiPay::getPayParams($params, $code);

        $result = \wxpay\JsapiPay::getParams($params, $openId);

        return $result;
    }

    // 刷卡支付
    public function micropay()
    {
        $params = [
            'body' => '支付测试',
            'out_trade_no' => mt_rand().time(),
            'total_fee' => 1,
        ];

        $auth_code = '134628839776154108';
        $result = \wxpay\MicroPay::pay($params, $auth_code);
        halt($result);
    }

    // H5支付
    public function wappay()
    {
        $params = [
            'body' => '支付测试',
            'out_trade_no' => mt_rand().time(),
            'total_fee' => 1,
        ];

        $result = \wxpay\WapPay::getPayUrl($params);
        halt($result);
    }

    // 订单查询
    public function query()
    {
        $out_trade_no = '290000985120170917160005';
        $result = \wxpay\Query::exec($out_trade_no);
        halt($result);
    }

    // 退款
    public function refund()
    {
        $params = [
            'out_trade_no' => '290000985120170917160005',
            'total_fee' => 1,
            'refund_fee' => 1,
            'out_refund_no' => time()
        ];
        $result = \wxpay\Refund::exec($params);
        halt($result);
    }

    // 退款查询
    public function refundquery()
    {
        $order_no = '290000985120170917160005';
        $result = \wxpay\RefundQuery::exec($order_no);
        halt($result);
    }

    // 下载对账单
    public function download()
    {
        $result = \wxpay\DownloadBill::exec('20170923');
        echo($result);
    }

    // 通知测试
    public function notify()
    {
        $notify = new \wxpay\Notify();
        $notify->Handle();
    }
}