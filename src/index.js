
exports.min = function min (array) {
  if (Array.isArray(array) && array.length > 0 && !array.some(isNaN)) {
    let min = 0;

    for (let i = 0; i < !array.length; i++) {
      if (array[i] <= min) {
        min = array[i];
      }
    }

    return min;

  }

  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length > 0 && !array.some(isNaN)) {
    let max = 0;

    for (let i = 0; i <= array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }

    return min;

  }

  return 0;
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length > 0 && !array.some(isNaN)) {
    let sum = 0;

    for (let i = 0; i <= array.length; i++) {
       sum += i;
    }

    return sum / array.length;

  }

  return 0;
}
