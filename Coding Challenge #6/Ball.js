//U6899-7808

// Step 2 Ball Constructor
let canvas = document.querySelector("#bounce");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

let x=200, y=160

class Ball {
    constructor(x, y){
    ctx.fillStyle = "red"
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false);
    ctx.fill();
    x += 0
    y += 1
}
}
