<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\models\carts;
use App\models\boughtprods;
use App\models\products;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $last_id = Carts::all()->count();
        $sum = 0;
        foreach(boughtprods::where('cart_id',$last_id)->get() as $bprod){
            $sum+=(products::find($bprod->prod_id)->price)*$bprod->quantity;
            
        }
        
       
        $answer = boughtprods::where('cart_id',$last_id)->get();
        
        return [$answer,['sum'=>$sum]];
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $last_id = Carts::all()->count();
        

        $cart=carts::find($last_id);
        
        if(!($last_id>0)){
            $cart = Carts::create();
           
        }
        if($cart->status=="approved"){
            $cart = Carts::create();
        }
        
        $prod = products::find($request->prod_id);
        
        $bprod = boughtprods::firstOrCreate([
            'prod_id'=> $prod->id,
            'cart_id'=>$cart->id,
        ]);
       
        return $this->index();
    

    }
       
    

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $last_id = Carts::all()->count();
        boughtprods::where('prod_id',$id)->where('cart_id',$last_id)->update(['quantity'=>$request->quantity]);
        //$bprod->quantity=$request->quantity;
       
        //$bprod->save();
        //$bprod->quantity = $request->quantity;
        return $this->index();
       
    }
    public function delete($id){
        $last_id = Carts::all()->count();
        boughtprods::where('prod_id',$id)->where('cart_id',$last_id)->delete();
        return $this->index();
    }
    public function submit($id, Request $request){
        $cart = carts::find(carts::all()->count());
        $cart->commentary = $request->commentary;
        $cart->city = $request->city;
        $cart->street = $request->street;
        $cart->house = $request->house;
        $cart->room = $request->room;
        $cart->email = $request->email;
        $cart->phone = $request->phone;
        $cart->name = $request->name;
        $cart->status = "approved";
        $cart->save();
        return "Успешно";
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
