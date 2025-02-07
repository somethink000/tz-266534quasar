<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Newsobj extends Model
{

    protected $fillable = [
        'title',
        'text',
        'views',
    ];
}
