<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];
$id = trim($data['id']);
$jenis_pengeluaran = trim($data['jenis_pengeluaran']);
$jumlah_pengeluaran = trim($data['jumlah_pengeluaran']);
$keterangan = trim($data['keterangan']);

$query = mysqli_query($koneksi, "insert into pengeluaran(id, jenis_pengeluaran, jumlah_pengeluaran, keterangan) values('$id', '$jenis_pengeluaran', '$jumlah_pengeluaran', '$keterangan')");

if ($query) {
    http_response_code(201);
    $pesan['status'] = 'sukses';
} else {
    http_response_code(422);
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);
