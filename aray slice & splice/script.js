// manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = "nico";
// arr[1] = "cahya";
// arr[2] = "karin";
// arr[6] = "nayanda";

// console.log(arr);

// 2. menghapus isi array
// var arr = ['nico', 'cahya', 'karin'];
// arr[1] = undefined;
// console.log(arr);

// 3.menampilkan isi array
// var arr = ['nico', 'cahya', 'karina', 'nayanda'];

// for (var i = 0; i < arr.length; i++) {
//   console.log('Mahasiswa ke-' + (i + 1) + ': ' + arr[i]);
// }

// method pada array
var arr = ['nico', 'cahya', 'karin'];
// 1.join
// console.log(arr.join('-'));

// 2.push & pop
// arr.push('nayanda', 'alok');
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 3. unshift & sift
// arr.unshift('nayanda');
// arr.shift();
// console.log(arr.join(' - '));

var arr = ['nico', 'cahya', 'karin'];
// 4. splice
// splice(indexawal, maudihapusberapa,elemenbaru1,elemenbaru2,..)
// arr.splice(1, 2, 'nayanda', 'alok');
// console.log(arr.join(' - '));

// 5. slice
// slice(awal,akhir);
var arr = ['nico', 'cahya', 'karina', 'nayanda', 'alok'];
var arr2 = arr.slice(1, 3);
console.log(arr.join(' - '));
console.log(arr2.join(' - '));
