# Penjelasan
  Untuk mengembalikan number dari terbesar ke terkecil, Kita harus mengkonvert dulu number yang di input menjadi sebuah string, dari string ke array agar kita bisa menggunakan method array, dan kita balikan lagi ke string dan convert menjadi number lagi

  - String(n) digunakan untuk mengconvert inputan yang kita masukan di console.log menjadi string, agar kita bisa menggunakan method split
  - .split('') digunakan untuk mengconvert string tadi menjadi sebuah array dengan karakter yang terpisah satu-satu, contoh: 12345 -> ['1', '2', '3', '4', '5']
  - .sort() untuk mengurutkan karakter string di array dari kecil ke terbesar
  - .reverse() untuk membalikan nilai array yang telah di sortir tadi menjadi dari terbesar ke kecil
  - .join('') untuk mengkonversi array yang telah di sortir menjadi string kembali agar bisa menggunaka parseInt
  - parseInt() diluar digunakan untuk mengkonvert kembali string yang telah di join tadi menjadi sebuah number