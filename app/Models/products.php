<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    public $timestamps = false;
    protected $table = 'products';
    protected $fillable = ['name','image','price','description','cathegory'];
    use HasFactory;
}
