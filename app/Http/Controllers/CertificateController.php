<?php

namespace App\Http\Controllers;

use App\Models\Certificate;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CertificateController extends Controller
{
    public function index()
    {
        $certificates = Certificate::orderBy('created_at', 'desc')
            ->paginate(10);

        return Inertia::render('Certificates/Index', [
            'certificates' => $certificates
        ]);
    }

    public function create()
    {
        return Inertia::render('Certificates/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'no_cert' => 'required|unique:certificates,no_cert',
            'nama_perusahaan' => 'required|string',
            'nama_direktur' => 'required|string',
            'alamat' => 'required|string',
            'kabupaten' => 'nullable|string',
            'provinsi' => 'nullable|string',
            'telp' => 'required|string',
            'fax' => 'nullable|string',
            'email' => 'nullable|email',
            'npwp' => 'required|string',
            'jasa' => 'nullable|string',
            'perdagangan' => 'nullable|string',
            'klasifikasi' => 'nullable|string',
            'berlaku' => 'nullable|string',
            'dari_tanggal' => 'nullable|date',
            'sampai_tanggal' => 'nullable|date',
            'ketua' => 'nullable|string',
            'sekretaris' => 'nullable|string',
        ]);

        Certificate::create($validated);

        return redirect()->route('certificates.index')->with('success', 'Certificate created successfully.');
    }

    public function show(Certificate $certificate)
    {
        return Inertia::render('Certificates/Show', [
            'certificate' => $certificate
        ]);
    }

    public function edit(Certificate $certificate)
    {
        return Inertia::render('Certificates/Edit', [
            'certificate' => $certificate
        ]);
    }

    public function update(Request $request, Certificate $certificate)
    {
        $validated = $request->validate([
            'no_cert' => 'required|unique:certificates,no_cert,' . $certificate->id,
            'nama_perusahaan' => 'required|string',
            'nama_direktur' => 'required|string',
            'alamat' => 'required|string',
            'kabupaten' => 'nullable|string',
            'provinsi' => 'nullable|string',
            'telp' => 'required|string',
            'fax' => 'nullable|string',
            'email' => 'nullable|email',
            'npwp' => 'required|string',
            'jasa' => 'nullable|string',
            'perdagangan' => 'nullable|string',
            'klasifikasi' => 'nullable|string',
            'berlaku' => 'nullable|string',
            'dari_tanggal' => 'nullable|date',
            'sampai_tanggal' => 'nullable|date',
            'ketua' => 'nullable|string',
            'sekretaris' => 'nullable|string',
        ]);

        $certificate->update($validated);

        return redirect()->route('certificates.index')->with('success', 'Certificate updated successfully.');
    }

    public function destroy(Certificate $certificate)
    {
        $certificate->delete();

        return redirect()->route('certificates.index')->with('success', 'Certificate deleted successfully.');
    }
}
