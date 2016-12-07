function bubble(x, y) {
  this.x = x;
  this.y = y;
  this.r = 40;
  this.col = color(255, 100);

  this.display = function () {
    stroke(255);
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  this.changeColor = function () {
    this.col = color(255, random(50, 200));
  }

  this.update = function() {
    var rx = random(-2, 2);
    var ry = random(-2, 2);
    this.x = this.x + rx;
    this.y = this.y + ry;
    text(ry, this.x, this.y);
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}
