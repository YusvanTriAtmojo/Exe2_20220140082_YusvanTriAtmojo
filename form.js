function kirimdata() {
    var nama = document.getElementById("nama").value;
    var jk = document.querySelector("input[name=jk]:checked").value;
    var tanggal = document.getElementById("tanggal").value;
    const pokemonFavorit = document.getElementById("pokemon-favorit").value;
    var alasan = document.getElementById("alasan").value;

    alert(
        "Nama: " + nama +
        "\nJenis Kelamin: " + jk +
        "\nTanggal Lahir: " + tanggal +
        "\nPokemon Favorit: " + pokemonFavorit +
        "\nAlasan: " + alasan
    );
}

var tanggalInput = document.getElementById('tanggal');
flatpickr(tanggalInput, {
    enableTime: false,
    dateFormat: 'd-m-Y', 
});