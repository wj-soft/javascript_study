// for (i = 0; i < 5; i++) {
//   var result = '';
//   for (j = 0; j < i; j++) {
//     result += ' ';
//   }
//   for (k = 9; k > i * 2; k--) {
//     result += '*';
//   }
//   console.log(result)
// }

var makeTriangle = function(x) {
  for (i = 0; i < x; i++) {
    var result = '';
    for (j = 0; j < i; j++) {
      result += ' ';
    }
    for (k = x * 2 - 1; k > i * 2; k--) {
      result += '*';
    }
    console.log(result)
  }
}
makeTriangle(1)