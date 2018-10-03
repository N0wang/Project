var ctx = canvas.getContext("2d");
canvas.width = screen.width;
canvas.height = screen.height;
var i = 0;
var dropTopCount = 100;

blackground = function(){
    ctx.strokeStyle =  "rgb(0, 0, 0)"; 
    ctx.rect(0, 0, screen.width, screen.height); 
    ctx.fill();
}

var rD = [];

CreateRainDrop = function(){
    rD[i].y = 100;
    rD[i].x = canvas.width * Math.random();
    rD[i].xx = rD[i].x - 5;
    rD[i].yy = rD[i].y - 5;
    rD[i].vx = speed * Math.random();
    rD[i].vy = speed * Math.random();
    if(Math.random() > 0.5)
        rD[i].vx = -rD[i].vx;
}

UpdatoPotato = function(){
    rD[i].y = rD[i].y + rD[i].vy;
    rD[i].x = rD[i].x + rD[i].vy;
    rD[i].xx = rD[i].x - 5;
    rD[i].yy = rD[i].y - 5;
}

DrawWhore = function(ctx){
    ctx.strokeStyle =  "rgb(128,0,128)"; 
    ctx.beginPath();
    ctx.moveTo(rD[i].x, rD[i].y);
    ctx.lineTo(particles[i].x, particles[i].y);
    ctx.stroke();
}

CreateRainDrop();
function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    blackground();

    requestAnimationFrame(loop);
}

loop();
