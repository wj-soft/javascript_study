// for (i = 0; i < 5; i++) {
//   var result = "";
//   for (j = i; j < 4; j++) {
//     result += ' ';
//   }
//   for (k = 0; k < i * 2 + 1; k++) {

//     result += '*';
//   }
//   console.log(result);
// }


function makeTriangle(x) {
  for (i = 0; i < x; i++) {
    var result = "";
    for (j = i; j < x - 1; j++) {
      result += ' ';
    }
    for (k = 0; k < i * 2 + 1; k++) {

      result += '*';
    }
    console.log(result);
  }
}
a = makeTriangle(10);