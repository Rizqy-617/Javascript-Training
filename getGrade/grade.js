function getGrade(s1, s2, s3) {
  let s = (s1+s2+s3) / 3
  if (s >= 90 ) {
    return 'A'
  } else if (s >= 80 ) {
    return 'B'
  } else if (s >= 70 ) {
    return 'C'
  } else if (s >= 60 ) {
    return 'D'
  } else if (s < 60 ) {
    return 'F'
  } else {
    return 'WHAT THE HECK?!'
  }
}

function inTernary(s1, s2, s3) {
  let s = (s1+s2+s3) / 3
  return s >= 90 ? 'A' : s >= 80 ? 'B' : s >= 70 ? 'C' : s >= 60 ? 'D' : s < 60 ? 'F' : 'What The Heck'
}

console.log(inTernary("adasd", 0.70, 0))