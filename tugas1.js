function count(huruf) {
  for (let i = 0; i < huruf.length; i++) {
    let count = 0;
    for (let j = 0; j < huruf.length; j++) {
      if (huruf[i] == huruf[j] && i > j) {
        break;
      }
      if (huruf[i] == huruf[j]) {
        count++;
      }
    }
    if (count > 0) console.log(`${huruf[i]} = ${count}`);
  }
}
let kata = "hello world!";
count(kata);
