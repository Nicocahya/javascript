var tanya = true;
while (tanya) {
  // PILIHAN PLAYER
  var p = prompt('pilih : orang, semut, gajah');
  // PILIHAN COMP
  // COMP MEMILIH RANDOM
  var comp = Math.random();

  if (comp < 0.34) {
    comp = 'semut';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
  } else {
    comp = 'gajah';
  }

  var hasil = '';
  // MENENTUKAN RULES
  if (p == comp) {
    hasil = 'SERI';
  } else if (p == 'gajah') {
    // if( comp == 'gajah' ) {
    //     hasil = 'KALAH!';
    // } else {
    //     hasil = 'MENANG!';
    // }
    hasil = comp == 'orang' ? 'MENANG!' : 'KALAH!';
  } else if (p == 'gajah') {
    hasil = (comp = 'orang') ? 'KALAH!' : 'MENANG!';
  } else if (p == 'semut') {
    hasil = (comp = 'semut') ? 'KALAH!' : 'MENANG!';
  } else {
    hasil = 'memasukkan pilihan yang salah';
  }
  // MENAMPILKAN HASIL
  alert('kamu memilih : ' + p + ' computer memilih : ' + comp + '\nkamu ' + hasil);

  tanya = confirm('main lagi?');
}

alert('terimakasih sudah bermain');
