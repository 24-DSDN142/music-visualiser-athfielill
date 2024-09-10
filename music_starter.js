
//parameters
let backgroundX = 500 //background x
let backgroundY = 300 //background y
let img;
let title;
let firstRun = true
let Xmove = 500; //road x coordinate
let roadY = 520; //road y coordinate
let carX = 20 //car X coordinate
let carY = 450 //car Y coordinate
let boardY = 300 //surfboard y cordinate
let titleX = 600 //'Upside Down' title Y coordinate
let mountainX = 1500 // mountain X coordinate
let XstarArray = [20, 480, 90, 190, 300, 530, 700, 880, 890, 700, 340, 210, 650, 940, 60, 980];
let YstarArray = [20, 230, 310, 100, 210, 30, 280, 120, 340, 60, 50, 280, 150, 30, 170, 260]
let starSize = 2 //background star ellipse size
let treeX = 3000 //pine tree x coords
let tree = []
let cloudFrontX = 5500 //clouds X coords
let cloudBackX = 4000
let length = 20; //car exhaust lines
let start = 420;
let end = start + length;
let flowerX = 4000 //flower x coords
let flower = []
let snowY = 200 //snow Y coords
let moonSize = 1 //Moon and star size

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(205, 50, 50)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  //maps 
  let carY = map(drum, 0, 100, 445, 455) // controls car bouncing up and down
  let boardY = map(bass, 0, 100, 285, 320) // controls surfboard bouncing
  let wheelSize = map(other, 0, 100, 60, 80)// wheel size
  let starSize = map(drum, 0, 100, 1, 10) // stars pulsing
  let vocalMap = map(vocal, 0, 100, 3, 13) //exhaust from car
  let flowerMove = int(map(bass, 0, 100, 0, 2)) // controls which flower image is displayed
  let treeMove = int(map(other, 0, 100, 0, 2)) // controls which tree image is displayed
  let snowY = map(vocal, 0, 100, 120, 105) //snow bouncing to music

  //load in images
  if (firstRun) {
    //all images were drawn by me in adobe illustrator
    title = loadImage('upside down.png')
    mountain = loadImage('mountain.png')
    snow = loadImage('mountainSnow.png')
    moon = loadImage('moon.png')
    cloudFront = loadImage('cloudFront.png')
    cloudBack = loadImage('cloudBack.png')
    tree.push(loadImage('tree.png'))
    tree.push(loadImage('tree2.png'))
    tree.push(loadImage('tree3.png'))
    flower.push(loadImage('flower1.png'));
    flower.push(loadImage('flower3.png'));
    flower.push(loadImage('flower2.png'));
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

  //stars and moon background
  image(moon, 10, 10)

  //white dots that are far away stars
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
  image(mountain, mountainX, 14);
  //snow
  image(snow, mountainX + 145, snowY)
  mountainX = mountainX - 0.6

  // pine tree background
  console.log(treeMove);
  push();
  image(tree[treeMove], treeX, 200) // which image in array is displayed depends on volume channel
  pop();
  treeX = treeX - 0.5 // trees move to the left

  // cloud back
  image(cloudBack, cloudBackX, 10);
  cloudBackX = cloudBackX - 0.4 // clouds move to the left

  // cloud front
  image(cloudFront, cloudFrontX, 10);
  cloudFrontX = cloudFrontX - 0.6 //clouds move to the left

  //flower
  console.log(flowerMove);
  push();
  image(flower[flowerMove], flowerX, 360)
  pop();
  if (flowerX < -2000) { //flower will repeat when off page
    flowerX = 2000
  }
  flowerX = flowerX - 1 //flowers move to the left

  //road
  fill(150);
  strokeWeight(0);
  rect(Xmove, roadY, 2000, 160)

  //white lines in the middle of the road
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
  Xmove = Xmove - 2 //road lines mov to the left

  //wheel
  fill(171, 183, 194) // grey
  strokeWeight(10)
  stroke(0) //black
  ellipse(375, 450, wheelSize, wheelSize) // back wheel
  ellipse(675, 450, wheelSize, wheelSize) // front wheel

  //exhaust
  for (let i = 1; i <= vocalMap; i++) {
    let lineStep = i * -5;
    stroke(255);//white
    strokeWeight(3);
    line(lineStep + 310, start, lineStep + 310, end)
  }

  //car
  fill(235, 200, 47) // yellow
  stroke(235, 200, 47) //yellow
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
  fill(183, 223, 235) // light blue
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
  stroke(237, 230, 206) //cream colour
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
  fill(237, 230, 206, 70); // yellow colour with 70% opacity
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

