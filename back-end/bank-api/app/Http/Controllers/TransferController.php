<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Transfers;


class TransferController extends Controller
{
    function testing($id){
         $transfer =  Transfers::find($id);
         return $transfer->customer;

    }
    function addTrans(Request $req,$from_id,$to_id){
        if(self::tranfered_customer($from_id,$req->input('balance'))){
            $transfer = new Transfers;
            $transfer->customer_id = $from_id;
            $transfer->amount = $req->input('balance');
            $transfer->save();
            self::received_customer($to_id,$req->input('balance'));
            return "transfer success";
        }
        else
        {
            return 'low balance you can not tranfser this balance of money';
        }

    }
    //transfered customer
     function tranfered_customer($id,$val)
    {
        $transfered_customer = Transfers::find($id);

        $current_balance = $transfered_customer->customer->balance;
        if($current_balance <= 0 || $current_balance - $val <= 0 ){
            return 0;
        }
        else
        {
            $transfered_customer->customer->balance = $transfered_customer->customer->balance - $val;
            return $transfered_customer->customer->save();
        }

    }
    //received customer
     function received_customer ($id,$val){
          $received_customer = Transfers::find($id);
          $received_customer->customer->balance = $received_customer->customer->balance + $val;
          $received_customer->customer->save();

     }
 
}
