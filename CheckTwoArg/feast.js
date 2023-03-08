function feast(beast, dish) {
  let decision = null
  if (beast.charAt(beast.length - 1 ) == dish.charAt(dish.length - 1) && beast[0] == dish[0]) {
    decision = true
    return decision
  } else if (beast.charAt(beast.length - 1 ) !== dish.charAt(dish.length - 1) || beast[0] !== dish[0]) {
    decision = false
    return decision
  }
}