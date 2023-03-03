## Tujuan
  Tujuan dari kode ini adalah untuk menghitung jumlah seluruh elemen dalam array yang diberikan.

## Input
  Fungsi simpleArraySum menerima satu parameter yaitu arrN, sebuah array.

## Output
  Fungsi simpleArraySum akan mencetak tiga output yaitu:

  - Panjang array yang diberikan.
  - Array yang diberikan sebagai input.
  - Hasil penjumlahan elemen-elemen array.
  - Fungsi simpleArraySum akan mengembalikan hasil penjumlahan elemen-elemen array sebagai nilai kembali (return value).

## Cara Kerja
  Fungsi simpleArraySum bekerja sebagai berikut:

  - Inisialisasi variabel ourArray dengan nilai dari arrN.
  - Inisialisasi variabel sum dengan 0.
  - Melakukan iterasi pada seluruh elemen array dengan menggunakan perulangan for.
  - Pada setiap iterasi, nilai sum akan ditambahkan dengan nilai elemen pada indeks ke-i dari ourArray.
  - Setelah selesai melakukan iterasi, fungsi akan mencetak panjang array, array yang diberikan sebagai input, dan hasil penjumlahan elemen-elemen array.
  - Hasil penjumlahan elemen-elemen array akan dikembalikan sebagai nilai kembali.

  Contoh Penggunaan

  `simpleArraySum([1, 4, 7, 2, 3, 5, -1])`
  
  Output yang diharapkan

  `array length 7`
  `our input [1, 4, 7, 2, 3, 5, -1]`
  `our output 21`

## Catatan
  Variabel ourArray sebenarnya tidak perlu digunakan karena tidak menambahkan fungsionalitas pada kode. Variabel ini dapat dihapus dan langsung menggunakan arrN pada perulangan for.
  Penggunaan console.log pada kode hanya digunakan untuk keperluan debugging dan dapat dihapus pada penggunaan kode di aplikasi yang sebenarnya.