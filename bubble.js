function bubble(x, y, startNo) {
  this.x = x;
  this.y = y;
  this.r = 6;
  this.col = color(255, 10);
  this.startNumber = startNo;

  this.display = function () {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    text(this.startNumber, this.x, this.y);
  }

  this.changeColor = function () {
    this.col = color(255, random(50, 200));
  }

  this.update = function(stopMove) {
    if (stopMove == false) {
      this.x = this.x + random(0, 2);
      this.y = this.y;
    }
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  this.finished = function (trackLenght) {
    if (this.x + this.r >= trackLenght) {
      this.col = color('red');
      return true;
    } else {
      return false;
    }
  }
}
