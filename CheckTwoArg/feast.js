function feast(beast, dish) {
  if (beast.charAt(beast.length - 1 ) == dish.charAt(dish.length - 1) && beast[0] == dish[0]) {
    return true
  } else if (beast.charAt(beast.length - 1 ) !== dish.charAt(dish.length - 1) || beast[0] !== dish[0]) {
    return false
  }
}

console.log(feast('Beast', 'Bist'))