<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        for ($i = 1; $i <= 4; $i++) {
            DB::table('articles')->insert([
                'title' => Str::random(rand(30,100)),
                'text' => Str::random(rand(500,1000)),
                'views' => rand(0,1000),
            ]);
        }
    }
}
