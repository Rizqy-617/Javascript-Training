function sortDescending(n) {
  return parseInt(String(n).split("").sort().reverse().join(""))
}

function sortAscending(n) {
  return parseInt(String(n).split("").sort().join(""))
}

console.log(sortDescending(123456789))
console.log(sortAscending(987654321))
