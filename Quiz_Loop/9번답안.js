var arr1 = []
for (i = 1; i <= 6; i++) {
  for (j = 1; j <= 6; j++) {
    if (i + j === 6) {
      arr1 = [i, j]
      console.log(arr1)
    }
  }
}