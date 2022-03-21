<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\TransferController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::get('list',[CustomerController::class,'customerList']);
Route::get('show/{id}',[CustomerController::class,'showCustomers']);

//Route::post('transfer/{id}',[CustomerController::class,'transfer']);


//Route::get('show/transfer/{id}',[CustomerController::class,'test']);


Route::post('show/{from_id}/transfer/{to_id}',[TransferController::class,'addTrans']);


//Route::get('show/transfers/{id}',[TransferController::class,'testing']);





