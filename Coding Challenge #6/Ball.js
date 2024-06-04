//U6899-7808

// Step 2 Ball Constructor
let canvas = document.querySelector("#bounce");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

class Ball {
    constructor(x, y, radius, color, dx, dy){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.dx = dx
        this.dy = dy
 
    } // Step 3 Draw Function
    drawCircle(x, y){
        ctx.clearRect(0, 0, width, height)
        ctx.fillStyle = `${this.color}`
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI *2, false);
        ctx.fill()
        this.x += this.dx
        this.y += this. dy
    }
    // Step 4 Update Function
    update() {
        if (this.x < 0 || this.x > width){
            this.dx *=-1
        }
        if (this.y < 0 || this.y > height) {
            this.dy *=-1
        }
    }
}
    // Step 5 Animation Logic
setInterval(() =>{
    ball1.drawCircle();
    ball1.update();
}, 10);

    
const ball1 = new Ball(200, 160, 20, "red", 2, 2)