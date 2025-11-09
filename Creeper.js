var x = 1430;
var y = 10200;
var creeper = function (num1, num2){
    fill(0, 153, 3);
    rect(x,y,80,80);
    fill(0, 0, 0);
    rect(x+12,y+12,20,20);
    rect(x+47,y+12,20,20);
    rect(x+29,y+29,20,14);
    rect(x+18,y+40,42,18);
    rect(x+18,y+40,15,29);
    rect(x+49,y+40,15,29);
    fill(0, 153, 3);
    rect(x+5,y+80,70,116);
    quad(num1+3, num2+191, num1+83, num2+191, num1+92, num2+218, num1-1, num2+217);
    rect(num1+0,num2+217,91,39);
    fill(0, 0, 0);
    rect(x+0,y+225,15,15);
    rect(x+15,y+240,15,15);
    rect(x+29,y+225,15,15);
    rect(x+44,y+240,15,15);
    rect(x+59,y+225,15,15);
    rect(x+75,y+240,15,15);
    fill(102, 102, 102);
    rect(x+0,y+241,15,15);
    rect(x+15,y+225,15,15);
    rect(x+29,y+241,15,15);
    rect(x+44,y+225,15,15);
    rect(x+59,y+240,15,15);
    rect(x+75,y+225,15,15);
};
draw= function() {
    background(255, 255, 255);
   
    mousePressed = function() {
    x=mouseX;
    y=mouseY;
};

    if (keyIsPressed && keyCode === RIGHT) {
         x=x+5;
    }
    if (keyIsPressed && keyCode === LEFT) {
         x=x-5;
    }
    if (keyIsPressed && keyCode === UP) {
         y=y-5;
    }
    if (keyIsPressed && keyCode === DOWN) {
         y=y+5;
    }
    var distX = x-mouseX;
var distY = y-mouseY;
    if(distX<150 && distY<270 && distX>-150 && distY>-270){
    background(255, 255, 255);
        fill(0, 247, 255);
        text("SSSSssss...",x+100,y+-26);
    }
    creeper(x,y);
   
};