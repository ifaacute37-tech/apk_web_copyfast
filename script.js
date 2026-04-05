document.getElementById("formPesan").addEventListener("submit",function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let pesan = document.getElementById("pesan").value;

    let nomorWA = "6282199231310"; // GANTI nomor kamu

    let text = `Halo COPYFAST!
Nama: ${nama}
Pesanan: ${pesan}`;

    let url =`https://wa.me/${nomorWA}?text=${text}`;

    window.open(url, "_blank");
});