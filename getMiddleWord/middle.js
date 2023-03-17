function getMiddle(s) {
  const middleIndex = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return s.charAt(middleIndex);
  }
}