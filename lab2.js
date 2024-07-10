let p = Math.floor(Math.random() * (19 - 2 + 1) + 2);
let arr = [];
let big;


console.log(p + " ");
for (let i = 0; i < p; i++) {
    arr.push(Math.floor(Math.random() * (8 - 2 + 1) + 2));
}
console.log(arr.join(' '));


function gcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}


big = arr[0];


for (let i = 1; i < p; i++) {
    let num = arr[i];
    big = (big * num) / gcd(big, num);
}

console.log(big);
