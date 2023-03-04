function makeNegative(num) {
  // Jika bilangan yang di input lebih dari 0, maka akan mengembalikan nilai yang ditambahkan tanda negative "-"
  if (num > 0) {
    return -num
  // Jika bilangan yang di input kurang dari 0, maka akan mengembalikan nilai yang di inputkan
  } else if (num < 0) {
    return num
  // Jika bilangan yang di input sama dengan 0, maka akan mengembalikan 0
  } else if (num == 0) {
    return 0
  }
}

console.log(makeNegative(0))

function makePlus(num) {
  // Jika nilai yang di input lebih dari 0 maka akan mengembalikan nilai yang di input
  if (num > 0) {
    return num
  // Jika nilai yang di input kurang dari 0, maka di hilangkan negatifnya dan mengembalikan nilai tanpa negative
  } else if (num < 0) {
    return parseInt(String(num).slice(1))
  // Jika nilai yang di input sama dengan 0, maka akan mengembalikan 0
  } else if (num == 0) {
    return 0
  }
}

console.log(makePlus(-76))
