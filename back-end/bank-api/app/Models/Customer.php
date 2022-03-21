<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Transfers;

class Customer extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $primaryKey = 'customer_id';

     public function transfer()
     {
        return $this->hasMany(Transfers::class,'customer_id');
     }
}
