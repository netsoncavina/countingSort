function countingSort(array) {
  let counts = [];

  for (n of array) {
    if (counts[n]) {
      counts[n]++;
    } else {
      counts[n] = 1;
    }
  }

  let result = [];

  //   Metodo lento para numeros grandes
  for (let i = 0; i < counts.length; i++) {
    for (let j = 0; j < counts[i]; j++) {
      result.push(i);
    }
  }

  //   Metodo rapido para numeros grandes
  // for (key of Object.keys(counts)) {
  //   for (let j = 0; j < counts[key]; j++) {
  //     result.push(Number(key));
  //   }
  // }

  return result;
}

let array = [1, 4, 1, 2, 99999999];
console.log(countingSort(array));
