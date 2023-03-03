function simpleArraySum(arrN) {
  let ourArray = arrN
  let sum = 0

  for (let i = 0; i < ourArray.length; i++) {
    sum += ourArray[i]
  }

  console.log("array length", ourArray.length)
  console.log("our input", ourArray)
  console.log("our output", sum)

  return sum
}

simpleArraySum([1, 4, 7, 2, 3, 5, -1])