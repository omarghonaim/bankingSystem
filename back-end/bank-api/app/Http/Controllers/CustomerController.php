<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Models\Transfers;

class CustomerController extends Controller
{
    function customerList(){
        return Customer::all();
    }
    function showCustomers($id){
        return Customer::where('customer_id','!=',$id)->get();
        
    }
    // function transfer(Request $req ,$id){
    //      $customer =  Customer::find($id);
    //      $current_balance =  $customer->balance;
    //      $customer->balance = $current_balance + $req->input('amount');
    //      $customer->save();
    //      return $customer;
        
    // }
    // function test($id){
    //     $customer = Customer::find($id);

    //     return $transfer =  $customer->transfer;
    // }
}
