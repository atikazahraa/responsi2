<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];

$id = $data['id'];
$jenis_pengeluaran = $data['jenis_pengeluaran'];
$jumlah_pengeluaran = $data['jumlah_pengeluaran'];
$keterangan = $data['keterangan'];

$query = mysqli_query($koneksi, "update pengeluaran set id='$id', jenis_pengeluaran='$jenis_pengeluaran', jumlah_pengeluaran='$jumlah_pengeluaran', keterangan='$keterangan' where id = '$id'");

// if ($query) {
//     http_response_code(201);
//     $pesan['status'] = 'sukses';
// } else {
//     http_response_code(422);
//     $pesan['status'] = 'gagal';
// }

echo json_encode($pesan);
echo mysqli_error($koneksi);
