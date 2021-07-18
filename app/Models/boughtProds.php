<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class boughtProds extends Model
{
    public $timestamps = false;
    protected $table = 'bought_prods';
    protected $fillable = ['prod_id','cart_id'];
    use HasFactory;
}
