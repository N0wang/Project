var ctx = canvas.getContext("2d");
canvas.width = screen.width;
canvas.height = screen.height;
var d = new Date();
var ms = 0;
var s = 0;
var m = 0;
var h = 0;
var o = -(0.5 * Math.PI);
var y = screen.height / 2;
var x = screen.width / 2;
var b = 100;
time = function(){
    var d = new Date();
    ms= d.getMilliseconds();
    s = d.getSeconds();
    m = d.getMinutes();
    h = d.getHours();
    s = s + (ms/1000);
    m = m + (s/60);
    h = h + (m/60);
};

blackground = function(){
    ctx.strokeStyle =  "rgb(0, 0, 0)"; 
    ctx.rect(0, 0, screen.width, screen.height); 
    ctx.fill();
}

HC = function(){
    ctx.strokeStyle =  "rgb(255, 0, 0)"; 
    var p = ((h/60) * 360);
    var r = (p *  Math.PI) / 180;
    ctx.beginPath();
    ctx.arc(x, y, (b * 5), o, r + o);
    ctx.strokeText("H: " + Math.round(h), (x - 20),(y - 90));
    ctx.stroke();
};


MC = function(){
    ctx.strokeStyle =  "rgb(255, 255, 0)"; 
    var p = ((m/60) * 360);
    var r = (p * Math.PI) / 180;
    ctx.beginPath();
    ctx.arc(x, y, (b * 4), o, r + o);
    ctx.strokeText("M: " + Math.round(m), x - 20, (y - 50));
    ctx.stroke();
};

SC = function(){
    ctx.strokeStyle =  "rgb(0, 255, 255)"; 
    var p = ((s/60) * 360);
    var r = (p * Math.PI) / 180;
    ctx.beginPath();
    ctx.arc(x, y, (b*3), o, r + o);
    ctx.strokeText("S: " + Math.round(s), x - 20, (y - 10));
    ctx.stroke();
};

mSC = function(){
    ctx.strokeStyle =  "rgb(0, 0, 255)"; 
    var p = ((ms/1000) * 360);
    var r = (p * Math.PI) / 180;
    ctx.beginPath();
    ctx.arc(x, y, (b*2), o, r + o);
    ctx.strokeText("Ms: " + Math.round(ms), x - 20, (y + 30));
    ctx.stroke();
};


function loop() {
    time();
    ctx.strokeStyle =  "rgb(255, 0, 0)"; 
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    blackground();
    ctx.strokeStyle = "rgb(255, 255, 255)"; 
    ctx.font="30px Arial";
    HC();
    MC();
    SC();
    mSC();
    requestAnimationFrame(loop);
}

loop();
