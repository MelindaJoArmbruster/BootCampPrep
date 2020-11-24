function random(num) {
  for (let i = 0; i <= 200; i++) {
    console.log(Math.floor(Math.random() * Math.floor(num + 1)));
  }
}
random(7);
