var result = "";

for (i = 1; i < 6; i++) {
  for (var j = 1; j <= i; j++) {
    result += '*'
  }
  result += '\n'
}

console.log(result)