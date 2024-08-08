
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(46, 42, 117)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

  let ellipseLength = map(other, 0, 100, 10, 400)
  let circleSize = map(bass, 0, 100, 20, 200);
  fill(232, 180, 37)

  strokeWeight(2);
  stroke(255)
  ellipse(canvasWidth / 2, canvasHeight / 2, 5, ellipseLength)
  ellipse(canvasWidth / 2, canvasHeight / 2, ellipseLength, 5)
  ellipse(canvasWidth / 2, canvasHeight / 2, circleSize, circleSize);



  strokeWeight(2);
  ellipse(canvasWidth / 4, canvasHeight / 4, 5, ellipseLength)
  ellipse(canvasWidth / 4, canvasHeight / 4, ellipseLength, 5)
  ellipse(canvasWidth / 4, canvasHeight / 4, circleSize, circleSize);


  strokeWeight(2);
  ellipse(canvasWidth / 1.3, canvasHeight / 1.3, 5, ellipseLength)
  ellipse(canvasWidth / 1.3, canvasHeight / 1.3, ellipseLength, 5)
  ellipse(canvasWidth / 1.3, canvasHeight / 1.3, circleSize, circleSize);

}



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