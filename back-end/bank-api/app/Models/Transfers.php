<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Customer;

class Transfers extends Model
{

  
    public $timestamps = false;
    use HasFactory;
    protected $fillable = ['customer_id'];
    protected $primaryKey = 'customer_id';

    
     public function customer()
      {
         return $this->belongsTo(Customer::class,'customer_id');
      }
}
