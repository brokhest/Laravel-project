<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carts extends Model
{
    public $timestamps = false;
    protected $table = 'carts';
    protected $fillable = ['phone','street','house','room','email','phone','name','commentary'];
    use HasFactory;
}
