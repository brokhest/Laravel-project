<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBoughtProdsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bought_prods', function (Blueprint $table) {

            $table->BigInteger('prod_id')->unsigned();
            $table->BigInteger('cart_id')->unsigned();

            //$table->foreignid('products_id')->constained();
            $table->integer('quantity')->unsigned()->default(1);
            //$table->foreignid('carts_id')->constained();
        });
        Schema::table('bought_prods', function (Blueprint $table) {
            $table->foreign('prod_id')->references('id')->on('products');
            $table->foreign('cart_id')->references('id')->on('carts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bought_prods');
    }
}
