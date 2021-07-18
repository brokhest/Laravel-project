<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProductController;
use App\Http\Controllers\API\CartsController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Route::get('carts',[CartsController::class, 'index']);
 Route::get('products/product/{id}',[ProductController::class, 'get_product']);
 Route::put('carts/update/{id}',[CartsController::class,'update']);
 Route::put('carts/submit/{id}',[CartsController::class,'submit']);
 Route::delete('carts/delete/{id}',[CartsController::class,'delete']);
 //Route::patch('carts/submit,',[[CartsController::class,'submit']]);
 Route::apiResources([
    
     'products'=>ProductController::class,
     'carts'=>CartsController::class,
 ]);

//Route::patch('carts/{id}',[ProductController::class,'update']);
/*Route::patch([
    'carts'=>CartsController::class,
]);*/
// Route::patch('/carts/{id}', [ProductController::class, 'update']);
/*Route::apiResources([
    'carts'=>CartsController::class,
]);*/