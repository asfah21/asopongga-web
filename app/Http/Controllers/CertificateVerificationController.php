<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateVerificationController extends Controller
{
    public function index(Request $request)
    {
        $no_cert = $request->input('no_cert');
        $certificate = null;
        $searched = false;

        if ($no_cert) {
            $certificate = Certificate::where('no_cert', $no_cert)->first();
            $searched = true;
        }

        return Inertia::render('Certificates/Verify', [
            'certificate' => $certificate,
            'searched' => $searched,
            'filters' => $request->only(['no_cert'])
        ]);
    }
}
