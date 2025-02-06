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
            DB::table('newsobjs')->insert([
                'title' => Str::random(100),
                'text' => Str::random(1000),
                'views' => rand(0,1000),
            ]);
        }
    }
}
