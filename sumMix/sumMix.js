function sumMix(x){
  let sum = 0
  let unString = x.map((item) => parseInt(item))
  
  for (let i = 0; i < unString.length; i++){
    sum += unString[i]
  }
  
  return parseInt(sum)
}