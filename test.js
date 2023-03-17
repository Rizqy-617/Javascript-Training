// function removeEveryOther(arr){
//   //your code here
//   let store = []
//   for (let i = 0; i < arr.length; i += 2){
//     return arr[i]++
//   }
  
// }

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'Hello Two', 'hello three']))

// function check(a, x) {
//   // your code here
//   if (a.includes(x)) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(check([66, 101], 78))



function getMiddle(s) {
  const middleIndex = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return s.charAt(middleIndex);
  }
}



