function summation(num) {
  let number = 0

  for (let i = 0; i <= num; i++) {
    if (i == 0) {
      return 1
    } else {
      number += i
    }
  }
  return number
}

console.log(summation(1))