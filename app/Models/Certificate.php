<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    protected $fillable = [
        'no_cert',
        'nama_perusahaan',
        'nama_direktur',
        'alamat',
        'telp',
        'fax',
        'email',
        'npwp',
        'jasa',
        'perdagangan',
        'klasifikasi',
        'berlaku',
        'dari_tanggal',
        'sampai_tanggal',
        'ketua',
        'sekretaris',
    ];
}
