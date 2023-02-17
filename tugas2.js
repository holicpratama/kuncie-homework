checkNumber = (integer) => {
  if (integer < 0 || integer >= 100000) {
    return "Input Tidak Valid";
  } else if (integer < 10) {
    return "SATUAN";
  } else if (integer < 100) {
    return "PULUHAN";
  } else if (integer < 1000) {
    return "RATUSAN";
  } else if (integer >= 1000 && integer < 10000) {
    return "RIBUAN";
  } else if (integer >= 10000) {
    return "PULUHAN RIBU";
  }
};
console.log(checkNumber(-1000));
console.log(checkNumber(5));
console.log(checkNumber(10));
console.log(checkNumber(100));
console.log(checkNumber(1000));
console.log(checkNumber(10000));
console.log(checkNumber(100000));
console.log(checkNumber(1000000));
