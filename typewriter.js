const sentence = 'hello there from lighthouse labs';
const i = 500;
for (const char of sentence) {
   setTimeout((i) => {
    process.stdout.write(char);
   },100);
};
  
