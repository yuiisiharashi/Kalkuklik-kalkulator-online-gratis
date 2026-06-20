function diskon(){
  let harga = document.getElementById("harga").value;
  let d = document.getElementById("diskon").value;

  let hasil = harga - (harga*d/100);

  document.getElementById("hasil").innerHTML =
  "Harga akhir: " + hasil;
}

function persen(){
  let angka = document.getElementById("angka").value;
  let p = document.getElementById("persen").value;

  let hasil = angka*p/100;

  document.getElementById("hasil2").innerHTML =
  "Hasil: " + hasil;
}
