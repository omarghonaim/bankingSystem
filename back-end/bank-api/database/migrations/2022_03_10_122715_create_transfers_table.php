<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransfersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
     Schema::create('transfers', function (Blueprint $table) {
        $table->increments('id');
        $table->integer('customer_id')->unsigned();
        $table->string("amount");    
        $table->foreign('customer_id')->references('customer_id')->on('customers')->onDelete('cascade');
    
    });
}
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transfers');
    }
}
