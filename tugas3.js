checkString = (pattern) => {
  let text = "KUNCIEKUNCIEKUNCIE";
  result = "";
  for (let i = 0; i < pattern; i++) {
    result = result + text[i];
    console.log(result);
  }
};
console.log("=== 3 Output ===");
checkString(3);
console.log("=== 6 Output ===");
checkString(6);
console.log("=== 8 Output ===");
checkString(8);
console.log("=== 12 Output ===");
checkString(12);