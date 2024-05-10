function calculate() {
  var nama = document.getElementById('nama').value;
  var totalBerlian = parseFloat(document.getElementById('totalBerlian').value);
  var hargaBerlian = 8.1; // Harga berlian tetap Rp. 8.1

  if (isNaN(totalBerlian)) {
    alert("Masukkan total berlian yang valid.");
    return;
  }

  var hasil = totalBerlian * hargaBerlian;

  var table = document.getElementById('result');
  var newRow = table.insertRow(-1);
  var cellNama = newRow.insertCell(0);
  var cellHasil = newRow.insertCell(1);
  cellNama.innerHTML = nama;
  cellHasil.innerHTML = formatCurrency(hasil);
}

function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString('id-ID', { maximumFractionDigits: 1 }); // Tetap menampilkan 1 digit di belakang koma
}
