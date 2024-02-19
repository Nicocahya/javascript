// membuat object
//object literal
var siswa1 = {
  nama: 'karina nayanda',
  umur: '16',
  jurusan: 'Desain komunikasi visual',
  email: '..',
  alamat: {
    jalan: 'Jl. umbulrejo RT1 RW3',
    kota: 'jember selatan',
    provinsi: 'Jatim',
  },
};

var siswa2 = {
  nama: 'Nico cahya',
  umur: '17',
  jurusan: 'Teknik komputer dan jaringan',
  email: '--',
  alamat: {
    jalan: 'Jl. Pansela RT1 RW2',
    kota: 'jember',
    provinsi: 'Jatim',
  },
};

// function declaration
function buatObjectsiswa(nama, umur, jurusan, email, alamat) {
  var siswa = {};
  siswa.nama = nama;
  siswa.umur = umur;
  siswa.jurusan = jurusan;
  siswa.email = email;
  siswa.alamat = alamat;
  return siswa;
}

var siswa3 = buatObjectsiswa('Naya', '16', 'DesainKomunikasiVisual', ',,', 'Jl. umbulrejo RT1 RW3', 'Jember selatan', 'Jatim');

//constructor
function Siswa(nama, umur, jurusan, email, alamat) {
  //var this = {};
  this.nama = nama;
  this.umur = umur;
  this.jurusan = jurusan;
  this.email = email;
  this.alamat = alamat;
  //return this =;
}

var siswa4 = new Siswa('LiuFei', '17', 'MPLB', '--', 'Jember');
