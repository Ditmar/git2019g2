function converTo(numers, base) {
  return numers.toString(base);
}
function primos(numbers) {
  for (var i = 2; i < numbers/2; i++) {
    if (numbers % i == 0) {
      return false;
    }
  }
  return true;
}
function redondear (numbers) {
  return Math.round(numbers);
}
function convertToRadianes(angulo) {
  return (angulo/180) * Math.PI;
}
