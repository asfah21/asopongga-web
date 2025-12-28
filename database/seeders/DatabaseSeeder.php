<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Buat role admin & editor
        Role::firstOrCreate(['name' => 'admin']);
        Role::firstOrCreate(['name' => 'editor']);

        // Buat user admin
        $user = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@asopongga.com',
            'password' => bcrypt('admin200'),
        ]);

        $user->assignRole('admin');
    }
}
