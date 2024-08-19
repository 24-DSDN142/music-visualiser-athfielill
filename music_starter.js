
//parameters
let backgroundX = 500
let backgroundY = 300


let img;
let firstRun = true



let Xmove = 500;
let roadY = 520

let carX = 20
let carY = 450

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(205, 50, 50)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  if (firstRun) {
    img = loadImage('yellow car.jpg') //https://www.vecteezy.com/free-png/stone>Stone PNGs by Vecteezy
    firstRun = false
  }


  //Darneking sky
  let MyPurple = color(27, 41, 128) // purple
  let MyBlack = color(25, 13, 54) // black
  let CounterColour = map(counter, 0, 400, 0, 1) // colour will change from purple to black over time
  let BlendColour = lerpColor(MyPurple, MyBlack, CounterColour)
  fill(BlendColour)
  strokeWeight(0)
  rect(backgroundX, backgroundY, canvasWidth, canvasHeight) // window frame


  fill(150);
  strokeWeight(0);
  rect(Xmove, roadY, 2000, 160)//road

  //white lines
  fill(255)
  rect(Xmove - 500, roadY, 40, 10)
  rect(Xmove - 400, roadY, 40, 10)
  rect(Xmove - 300, roadY, 40, 10)
  rect(Xmove - 200, roadY, 40, 10)
  rect(Xmove - 100, roadY, 40, 10)
  rect(Xmove, roadY, 40, 10)
  rect(Xmove + 100, roadY, 40, 10)
  rect(Xmove + 200, roadY, 40, 10)
  rect(Xmove + 300, roadY, 40, 10)
  rect(Xmove + 400, roadY, 40, 10)
  rect(Xmove + 500, roadY, 40, 10)
  rect(Xmove + 600, roadY, 40, 10)
  rect(Xmove + 700, roadY, 40, 10)
  rect(Xmove + 800, roadY, 40, 10)
  rect(Xmove + 900, roadY, 40, 10)

  if (Xmove < 1) {
    Xmove = 500
  }
  Xmove = Xmove - 2


  fill(100)
  strokeWeight(5)
  stroke(0)
  ellipse(375, 450, 80, 80)
  ellipse(675, 450, 80, 80)


  fill(235, 200, 47) // yellow
  stroke(235, 200, 47)
  strokeWeight(4)
  beginShape(); // Shape or car
  vertex(420, carY - 3);
  bezierVertex(425, carY + 12, 424, carY + 15, 456, carY + 16);
  bezierVertex(496, carY + 14, 540, carY + 14, 604, carY + 16);
  bezierVertex(621, carY + 15, 624, carY + 11, 632, carY - 9);
  bezierVertex(652, carY - 54, 700, carY - 58, 724, carY - 2);
  bezierVertex(732, carY + 17, 745, carY + 17, 740, carY - 6);
  bezierVertex(733, carY - 45, 732, carY - 75, 599, carY - 90);
  bezierVertex(596, carY - 86, 573, carY - 128, 570, carY - 128);
  bezierVertex(494, carY - 148, 376, carY - 162, 300, carY - 16);
  bezierVertex(289, carY, 315, carY + 19, 331, carY - 12);
  bezierVertex(361, carY - 57, 398, carY - 53, 419, carY - 2);
  endShape();



  fill(237, 230, 206)// cream colour
  stroke(237, 230, 206)
  // surfboard
  beginShape();
  vertex(323, 327);
  bezierVertex(432, 289, 560, 292, 636, 314);
  bezierVertex(536, 308, 464, 300, 323, 327);
  endShape();
  // surfboard fin
  beginShape();
  vertex(572, 302);
  bezierVertex(574, 284, 585, 277, 607, 276);
  bezierVertex(592, 286, 590, 293, 596, 303);
  endShape();

  // image(img, 140, 50);
}



  //discoball
  // let discoSize = map(drum, 0, 100, 0.3, 0.36)
  // push()
  // scale(discoSize);
  // image(img, 600, 10);
  // pop()

//road
  // line(100, 100, 300, 100)

  // //road
  // fill(150)
  // ellipse(road1X, road1Y, 700, 300)//road 1 (bottom)
  // ellipse(600, 420, 700, 300)// road 2 (middle)
  // ellipse(600, 150, 500, 200)// road 3 (top)

  // fill(180)
  // stroke(255)
  // strokeWeight(0)
  // ellipse(680, 400, 600, 200)//road 2 inside
  // ellipse(650, 140, 400, 130)//road 3 inside


//ORIGINAL BARS
// let bar_spacing = height / 10;
  // let bar_height = width / 12;
  // let bar_pos_x = width / 2;


  // // vocal bar is red
  // fill(200, 0, 0);
  // rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  // fill(0);
  // text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);

  // // drum bar is green
  // fill(0, 200, 0);
  // rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  // fill(0);
  // text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);

  // // bass bar is blue
  // fill(50, 50, 240);
  // rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  // fill(0);
  // text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);

  // // other bar is white
  // fill(200, 200, 200);
  // rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  // fill(0);
  // text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  // fill(255, 255, 0);

  // // display "words"
  // textAlign(CENTER);
  // textSize(vocal);
  // text(words, width / 2, height / 3);





//PULSING GLITTER SPARKLES
    // let ellipseLength = map(other, 0, 100, 10, 400)
  // let circleSize = map(bass, 0, 100, 20, 200);
  // fill(232, 180, 37)

  // strokeWeight(2);
  // stroke(255)
  // ellipse(canvasWidth / 2, canvasHeight / 2, 5, ellipseLength)
  // ellipse(canvasWidth / 2, canvasHeight / 2, ellipseLength, 5)
  // ellipse(canvasWidth / 2, canvasHeight / 2, circleSize, circleSize);



  // strokeWeight(2);
  // ellipse(canvasWidth / 4, canvasHeight / 4, 5, ellipseLength)
  // ellipse(canvasWidth / 4, canvasHeight / 4, ellipseLength, 5)
  // ellipse(canvasWidth / 4, canvasHeight / 4, circleSize, circleSize);


  // strokeWeight(2);
  // ellipse(canvasWidth / 1.3, canvasHeight / 1.3, 5, ellipseLength)
  // ellipse(canvasWidth / 1.3, canvasHeight / 1.3, ellipseLength, 5)
  // ellipse(canvasWidth / 1.3, canvasHeight / 1.3, circleSize, circleSize);



// line(windowX, windowY - 123, windowX, windowY + 123) //vert window line
// line(windowX - 200, windowY, windowX + 200, windowY) // horizontal window line

//loop function
  // let length = 300;
  // let start = 100;
  // let end = start + length;
  // let drumMap = map(vocal, 0, 100, 30, 90)
  // strokeWeight(5)
  // for (let i = 1; i <= drumMap; i++) {
  //   let lineStep = i * 10;
  //   stroke(255)
  //   line(start, lineStep, end, lineStep)