//Dice game 
var mover = 0;
var draw = function() {
noStroke();
background(187, 232, 99);
// Road (Optional)
fill(150, 150, 150);
rect(0,212,width,200);
//speed thing
fill(0, 0, 0);
rect(256, 94, 82, 58);
fill(156, 156, 156);
rect(285, 153, 13, 62);
fill(255, 255, 255);
text("SPEED LIMIT:", 255, 98, 212, 200);
text("5 MPH", 271, 122, 200, 200);
//car body with color based on mouse position
fill(mouseX, mouseY, 157);
rect(mover,175,100,25,5);
rect(mover+20,150,60,30,5);
//car wheels
fill(0, 0, 0);
ellipse(mover +20,200,25,25); // automatic moving car
ellipse(mover + 70,200,25,25);
text("Speeding", 185, 62, 400, 400);
    mover = mover + 10;
     if (mover === 400){
     mover =0;
 }
};