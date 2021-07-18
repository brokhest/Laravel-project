<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('id');
            $table->string('cathegory');
            $table->foreign('cathegory')->references('title')->on('cathegories');
            $table->string('image');
            $table->string('name')->unique();
            $table->integer('price');
            $table->boolean('available')->default(true);
            $table->string('description',2000)->default("...");
            
        });
   

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
