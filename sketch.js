
  var hr, mn, sc, scAngle, hrAngle, mnAngle, h;

  function setup(){
      createCanvas(800, 400);
      angleMode(DEGREES);
  }
  
  function draw(){
    background("red")
      hr = hour();
      mn = minute();
      sc = second();
  
      fill("white");
      textSize(30);
      text(h + ":" + mn + ":" + sc, 400, 200);
      translate(200, 200);
      
  
      if(hr > 12){
        h = hr - 12;
      }
  
      scAngle = map(sc, 0, 60, 0, 360);
  
      push();
      rotate(scAngle);
      stroke(0, 170, 238);
      strokeWeight(7);
      line(0, 0, 100, 0)
      pop();
  
      mnAngle = map(mn, 0, 60, 0, 360);
      push();
      rotate(mnAngle);
      stroke(0, 191, 255);
      strokeWeight(7);
      line(0, 0, 75, 0)
      pop();
  
      hrAngle = map(hr % 12, 0, 60, 0, 360);
      push();
      rotate(hrAngle);
      stroke(0, 255, 255);
      strokeWeight(7);
      line(0, 0, 100, 0)
      pop();
  }
  