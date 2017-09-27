var for_sum = 0

for (i = 1; i <= 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    for_sum = for_sum + i;
  }

}
console.log(for_sum)