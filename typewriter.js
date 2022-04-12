const sentence = 'hello there from lighthouse labs';
let halt = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  }, halt)
  halt += 50;
}


