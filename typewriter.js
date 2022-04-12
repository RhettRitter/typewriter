//const sentence = 'hello there from lighthouse labs';
print = (str) => {
    let halt = 0;
    for (const char of str) {
        setTimeout(() => {
            process.stdout.write(char)
        }, halt)
        halt += 50;
    }
}
print('hello there from lighthouse labs\n');
