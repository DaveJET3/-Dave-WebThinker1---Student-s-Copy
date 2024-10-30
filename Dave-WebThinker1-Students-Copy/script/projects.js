let x, y, dx, dy, canvas, ctx, ballRadius;

window.onload = () => {
    canvas = document.getElementById('canvasBoard');
    ctx = canvas.getContext('2d');

    ballRadius = 10;

    x = canvas.width / 2 - ballRadius / 2;
    y = canvas.height / 2 - ballRadius / 2;
    dx = 2;
    dy = 2;

    updateCanvas();
}

// Erase previous frame and draw new frame
const updateCanvas = () => {
    // Erase canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the ball
    ctx.beginPath();
    ctx.fillStyle = "rgb(255,0,0)";
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    x = x + dx;
    y = y + dy;

    requestAnimationFrame(updateCanvas);
}



  // ctx.beginPath();
  // ctx.moveTo(0,0);
  // ctx.lineTo(100,100);
  // ctx.stroke();

// fill the shape's colour
// ctx.fillStyle = "rgb(200,0,0)";

// Draw a rectangle 
// ctx.fillRect(10,10,100,100);


// ctx.fillStyle = "rgb(225,0,0)";
// ctx.fillRect(10,10,300,300);

ctx.arc(120,120,100,0,2 * Math.PI)

