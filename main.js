//  Callenge 26 JavaScript with Elzero

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;


// Find Smallet Number in all Variables and Return to Integer
console.log(Math.trunc(Math.min(a, b, c, d)));


// Use Variables a + d One Time to get this Output (10000)
console.log(Math.pow(a, Math.trunc(d)));

// Get Integer "2" from d Variable with 4 different Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To get this Values
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(+(Math.round(Math.trunc(b) / Math.ceil(d)).toFixed(2))); // 67 => Number