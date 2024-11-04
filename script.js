
let ghost;
let mySound;

function preload() {
  mySound = loadSound("assets/thunder.mp3");
}

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("p5-container");
    x = width / 2;
    y = height / 2;
    ghost = new drawGhost();
}

function draw(){
    background(10, 10, 60);
    ghost.show();
    
    ghost.move();
    ghost.move2();
  }
  function mousePressed() {
    if (mySound.isPlaying() == false) {
      mySound.play();
    } 
  }
  
  class drawGhost {
    constructor(){
      this.x = width/2;
      this.y = height/2;
      this.c=255
      this.blushOffset = 0;
    }
    show(){
    fill(this.c);
    arc(width/2,this.y,width/4,this.y/2,PI, TWO_PI);
    //rectMode(CENTER);
    stroke(255);
    rect(width/2-width/4+width/8,this.y,100,100);
    circle(width/2+width/8-100+10,this.y*1.5,20);
    circle(width/2+width/8-100+30,this.y*1.5,20);
    circle(width/2+width/8-100+50,this.y*1.5,20);
    circle(width/2+width/8-100+70,this.y*1.5,20);
    circle(width/2+width/8-100+90,this.y*1.5,20);
    fill(0);
    circle(this.x*0.9,this.y,15);
    circle(this.x*0.9+50,this.y,15);
    ellipse(this.x+10,this.y+20,20,this.y*0.2);
    fill(255,0,0);
    ellipse(this.x-50 + this.blushOffset,this.y+20,25,20);//blush
    ellipse(this.x+50 + this.blushOffset,this.y+20,25,20);//blush
    noStroke();
    fill(110,110,120);
    ellipse(200,350,40+this.y*0.2,20+this.y*0.2);
  }
  
  move() {
        this.y = this.y = map(sin(frameCount * 0.05), -1, 1, 100, 200);

  }
  move2() {
    // 使用正弦函数来使红晕左右平移
    this.blushOffset = sin(frameCount * 0.05) * 5; // 控制左右平移的范围为 -5 到 5
  }
  
}
  