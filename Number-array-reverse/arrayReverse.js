function digitize(n) {
  // Variable smallFunc digunakan sebagai paramater kedua di method Array.from
  let smallFunc = num => Number(num)
  
  // Apabila nilai yang di input berupa 0, maka akan mengembalikan array 0
  if (n == 0) {
    return [0]
  // Else nya akan mengembalikan nilai yang di input oleh kita dalam bentuk array yang sudah di reverse
  } else {
    return Array.from(String(n).split('').reverse(), smallFunc)
  }
}

console.log(digitize(5656343))