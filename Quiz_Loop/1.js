var result = "";

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i + 1; j++) {
    result += '*'
  }
  result += '\n'
}
console.log(result)

function triangle(t) {
  for (var x = 0; x < t; x++) {
    for (var y = 0; y < x + 1; y++) {
      result += 'O'
    }
    result += '\n'
  }
  console.log(result)
}

triangle(1)
triangle(2)
triangle(3)
triangle(10)