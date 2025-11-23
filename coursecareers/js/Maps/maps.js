// flexible
// const m = new Map();
// m.set("a",3);
// m.set("b",2);
// m.set("a",4);
// console.log(m);
// console.log(m.get("a"));
// console.log(m.has("a"));
// console.log(m.get(4));
// // console.log(m.delete("a"));
// // console.log(m);
// console.log(m.size)

const str = "hello world my name is Ryan"
const freq = new Map();

for (const char of str) {
    if (freq.has(char)) {
        freq.set(char, freq.get(char) + 1);
    } else {
        freq.set(char,1)
    }
}

console.log(freq.get(" "))
freq.delete(" ")












