var b1;
var b2;
var numberOfBubbles = 20;
var bArray = [];
var completed = false;

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < numberOfBubbles; i++) {
    bArray[i] = new bubble(0, i * height / numberOfBubbles + (height / numberOfBubbles / 2), i + 1);
  }
  textFont("Helvetica");
  textSize(7);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  for (var i = 0; i < numberOfBubbles; i++) {
    if (bArray[i].finished(width) == true) {
      completed = true;
      //check maybe there is a draw
      for (var j = 0; j < numberOfBubbles; j++) {
        bArray[j].finished(width);
      }
    }
    bArray[i].update(completed);
    bArray[i].display();
  }
  if (completed == true) {
    noLoop();
  }
}
