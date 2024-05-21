//U68997808l
let cost = 275
let tip = cost <= 300 && cost >= 50 ? cost * 0.15 : cost * 0.2;
console.log (`The bill was ${cost}, the tip was ${tip}, and the total is ${cost + tip}.`);
