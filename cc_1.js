//U68997808l
let cost = 275
let tip = cost <= 300 && cost >= 50 ? cost * 0.15 : cost * 0.2;
console.log (`The bill was ${cost}, the tip was ${tip}, and the total is ${cost + tip}.`);
function calcTip(cost){
    return cost <= 300 && cost >= 50 ? cost * 0.15 : cost * 0.2;
} 
//let test_values = [275, 40, 430]
//let tips = [calcTip(test_values[0]), calcTip(test_values[1]), calcTip(test_values[2])]
//let totals = [test_values[0] + (tips[0]), test_values[1] + (tips[1]), test_values[2] + (tips[2])];
//console.log(test_values, tips, totals)

let test_values2 = [125, 555, 44];
let tips = [calcTip(test_values2[0]), calcTip(test_values2[1]), calcTip(test_values2[2])];
let totals = [test_values2[0]+ tips[0], test_values2[1] + tips[1], test_values2[2] + tips[2]];
console.log(test_values2, tips, totals);