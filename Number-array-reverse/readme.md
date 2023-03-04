## Penjelasan Syntax
  - `Array.from()` adalah sebuah metode bawaan pada objek `Array`, digunakan untuk mengembalikan sebuah objek array baru dari nilai yang kita input
  - Method `Array.from()` menerima dua argumen yaitu `arrayLike` dan `mapFn`
    - `arrayLike` adalah sebuah objek yang akan dikonversi menjadi objek array. Pada kode ini, objek tersebut adalah hasil dari pemanggilan metode `split()` pada sebuah objek `String`
    - `mapFn` adalah sebuah fungsi yang akan di panggil pada setiap elemen objek `arrayLike`. Pada kode ini, fungsi tersebut adalah variable `smallFunc`
  - Arrow Function adalah sebuah bentuk penulisan function yang lebih ringkas dibandingkan dengan function biasanya, dan ditulis tanpa keyword `function`
    - Contoh penulisan arrow function `() => fungsimu`
    - Dalam kode ini, arrow function digunakan untuk mengubah setiap element dari objek array hasil pemanggilan methode `split()` menjadi sebuah bilangan dengan menggunakan fungsi `Number()`