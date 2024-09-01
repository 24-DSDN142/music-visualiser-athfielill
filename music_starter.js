
//parameters
let backgroundX = 500
let backgroundY = 300
let img;
let title;
let firstRun = true
let Xmove = 500;
let roadY = 520;
let carX = 20
let carY = 450
let boardY = 300
let titleX = 600
let mountainX = 1500
let XstarArray = [20, 480, 90, 190, 300, 530, 700, 880, 890, 700, 340, 210, 650, 940, 60, 980];
let YstarArray = [20, 230, 310, 100, 210, 30, 280, 120, 340, 60, 50, 280, 150, 30, 170, 260]
let starSize = 2
let treeX = 3000

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(205, 50, 50)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let carY = map(drum, 0, 100, 445, 455)
  let boardY = map(bass, 0, 100, 285, 320)
  let wheelSize = map(other, 0, 100, 60, 80)
  let starSize = map(drum, 0, 100, 1, 5)

  if (firstRun) {

    title = loadImage('upside down.png') //i made this on adobe illustrator
    mountains = loadImage('mountains.png') //i made this on adobe illustrator
    trees = loadImage('trees.png') //i made this on adobe illustrator
    firstRun = false
  }

  //Darneking sky
  let MyBlue = color(128, 183, 232) // light blue
  let MyNavy = color(43, 54, 94) // Navy blue
  let CounterColour = map(counter, 0, 1000, 0, 1) // colour will change from purple to black over time
  let BlendColour = lerpColor(MyBlue, MyNavy, CounterColour)
  fill(BlendColour)
  strokeWeight(0)
  rect(backgroundX, backgroundY, canvasWidth, canvasHeight) // window frame

  //stars
  fill(194, 234, 240)
  ellipse(XstarArray[0], YstarArray[0], starSize)
  ellipse(XstarArray[1], YstarArray[1], starSize)
  ellipse(XstarArray[2], YstarArray[2], starSize)
  ellipse(XstarArray[3], YstarArray[3], starSize)
  ellipse(XstarArray[4], YstarArray[4], starSize)
  ellipse(XstarArray[5], YstarArray[5], starSize)
  ellipse(XstarArray[6], YstarArray[6], starSize)
  ellipse(XstarArray[7], YstarArray[7], starSize)
  ellipse(XstarArray[8], YstarArray[8], starSize)
  ellipse(XstarArray[9], YstarArray[9], starSize)
  ellipse(XstarArray[10], YstarArray[10], starSize)
  ellipse(XstarArray[11], YstarArray[11], starSize)
  ellipse(XstarArray[12], YstarArray[12], starSize)
  ellipse(XstarArray[13], YstarArray[13], starSize)
  ellipse(XstarArray[14], YstarArray[14], starSize)
  ellipse(XstarArray[15], YstarArray[15], starSize)

  //mountain background



  image(mountains, mountainX, 0);
  mountainX = mountainX - 0.5


  // tree background
  image(trees, treeX, 200);
  treeX = treeX - 0.5

  //road
  fill(150);
  strokeWeight(0);
  rect(Xmove, roadY, 2000, 160)

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

  //makes the road move and reset when off the page
  if (Xmove < 1) {
    Xmove = 500
  }
  Xmove = Xmove - 2

  //wheel
  fill(171, 183, 194)
  strokeWeight(10)
  stroke(0)
  ellipse(375, 450, wheelSize, wheelSize) // back wheel
  ellipse(675, 450, wheelSize, wheelSize) // front wheel


  fill(235, 200, 47) // yellow
  stroke(235, 200, 47)
  strokeWeight(4)
  beginShape(); // Shape of car
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

  //car window
  fill(183, 223, 235)
  strokeWeight(0)
  beginShape();
  vertex(557, 322);
  bezierVertex(559, carY - 129, 581, carY - 93, 579, carY - 92);
  bezierVertex(564, carY - 88, 433, carY - 98, 426, carY - 97);
  bezierVertex(427, carY - 98, 445, carY - 120, 456, carY - 135);
  bezierVertex(482, carY - 142, 541, carY - 135, 555, carY - 130);
  endShape();

  // surfboard
  fill(237, 230, 206)// cream colour
  stroke(237, 230, 206)
  strokeWeight(4);
  beginShape();
  vertex(323, boardY + 27);
  bezierVertex(432, boardY - 11, 560, boardY - 8, 636, boardY + 14);
  bezierVertex(536, boardY + 8, 464, boardY, 323, boardY + 27);
  endShape();
  // surfboard fin
  beginShape();
  vertex(572, boardY + 2);
  bezierVertex(574, boardY - 16, 585, boardY - 23, 607, boardY - 24);
  bezierVertex(592, boardY - 14, 590, boardY - 7, 596, boardY + 3);
  endShape();



  //headlights
  strokeWeight(0)
  fill(237, 230, 206, 70);
  beginShape();
  vertex(727, 401);
  bezierVertex(725, 396, 939, 363, 1009, 352);
  bezierVertex(1064, 379, 1060, 399, 1023, 518);
  bezierVertex(992, 502, 725, 406, 727, 406);
  bezierVertex(726, 397, 726, 397, 726, 397);
  endShape();


  //text saying 'upside down' slides across the page once
  if (counter < 1) {
    titleX = 1000
  }
  image(title, titleX, 50);
  titleX = titleX - 1


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