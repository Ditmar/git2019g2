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
function mulMatrix (matrix1, matrix2) {
  var matrixresult = [];
  for (var i = 0; i < matrix1.length; i ++) {
    var auxarr = [];
    for (var j = 0; j < matrix1.length; j ++) {
      var mul = 0;
      for (var k = 0; k < matrix1.length; k ++) {
        mul += matrix1[j][k] * matrix2[k][j];
      }
      auxarr.push(mul);
    }
    matrixresult.push(auxarr);
  }
  return matrixresult;
}
function solveEcuation(a, b, c) {
  var dist = b*b - 4 * a * c;
  if (dist == 0) {
    return  {result: -b / 2 * a, "msn" : "Sol iguales"};
  } else if (dist < 0)  {
    return  {"msn" : "Sol Compleja"};
  } else {
    return  {x1: (-b + Math.sqrt(dist)) / 2 * a, x2: (-b - Math.sqrt(dist)) / 2 * a,  "msn" : "Sol Compleja"};
  }
}
