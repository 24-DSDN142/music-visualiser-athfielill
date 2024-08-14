
//parameters
let backgroundX = 300
let backgroundY = 400

let road1X = 600
let road1Y = 820

let img;
let firstRun = true


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(25)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  if (firstRun) {
    img = loadImage('rock.png') //https://www.vecteezy.com/free-png/stone>Stone PNGs by Vecteezy
    firstRun = false
  }

  //Darneking sky
  let MyPurple = color(67, 41, 128) // purple
  let MyBlack = color(25, 13, 54) // black
  let CounterColour = map(counter, 0, 4000, 0, 1) // colour will change from purple to black over time
  let BlendColour = lerpColor(MyPurple, MyBlack, CounterColour)
  fill(BlendColour)
  strokeWeight(0)
  stroke(255) //white
  rect(backgroundX, backgroundY, canvasWidth, canvasHeight) // window frame

  //road
  fill(150)
  ellipse(road1X, road1Y, 700, 300)//road 1 (bottom)
  ellipse(600, 420, 700, 300)// road 2 (middle)
  ellipse(600, 150, 500, 200)// road 3 (top)

  fill(180)
  stroke(255)
  strokeWeight(0)
  ellipse(680, 400, 600, 200)//road 2 inside
  ellipse(650, 140, 400, 130)//road 3 inside

  image(img, 10, 10);
}


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

//discoball
// let discoSize = map(drum, 0, 100, 0.3, 0.36)
// push()
// scale(discoSize)
// image(img, 600, 10);
// pop()

// line(windowX, windowY - 123, windowX, windowY + 123) //vert window line
// line(windowX - 200, windowY, windowX + 200, windowY) // horizontal window line
