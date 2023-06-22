function pesanMieAyam(){
    var nama = document.getElementById("nama").value;
    var alamat = document.getElementById("alamat").value;
    var no_hp = document.getElementById("no_hp").value;
    var hargaMie = document.getElementById("pilihan_mie").value;
    var pilihanMie =
      document.getElementById("pilihan_mie").options[
        document.getElementById("pilihan_mie").selectedIndex
      ].text;
    var jumlahPorsi = document.getElementById("jumlah_porsi").value;
    var keterangan = document.getElementById("keterangan").value;
    var totalPembayaran = parseInt(hargaMie) * parseInt(jumlahPorsi);

    var konfirmasi = confirm("Atas nama " + nama + " alamat " + alamat + " dengan pesanan " + jumlahPorsi + " porsi " + pilihanMie +  " dengan keterangan " +keterangan+ " dengan total pembayaran sebesar Rp. " + totalPembayaran + " ,Apakah Anda yakin ingin memesan?");

    if (konfirmasi == true) {
        window.alert("Pesanan Anda akan segera diproses. Terima kasih atas pesanan Anda.");
    } else {
        window.alert("Pesanan Anda dibatalkan.");
    }
}