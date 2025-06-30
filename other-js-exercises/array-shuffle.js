let arr = [1, 2, 3];
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
for (let i = 0; i < 10; i++) {
  console.log(shuffle(arr));
}
