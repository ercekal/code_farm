function loadHomePage() {
  chicken = new Chicken(0,0);
  canvas = document.getElementById("homeCanvas");
  ctx = canvas.getContext('2d');
  if (loopTimer) { clearTimeout(loopTimer); }
  drawChicken();
}

var chicken;
var canvas;
var loopTimer;

function Chicken(xPos, yPos) {
  this.x = xPos;
  this.y = yPos;
  this.state = 0;
  this.image = new Image();
  this.image.src = '../images/HeadWobbleandFlap.png';
  this.width = 400;
  this.height= 600;
  this.frameIndex = 0;
  this.cheatPosition = [
    [0, 0],
    [400, 0],
    [800, 0],
    [1200, 0]
  ];
}

Chicken.prototype.draw = function (canvasContext) {
  this.update();
  canvasContext.clearRect(0, 0, this.width, this.height);
  canvasContext.drawImage(  //all these are drawimage elements
    this.image,
    //this.frameIndex * this.width,
    this.cheatPosition[this.frameIndex][0], //this current frame position x coorrd
    this.cheatPosition[this.frameIndex][1], // y coord
    this.width, //the width cat frame
    this.height,
    0,  // for modifying in some crazy way / angles maybe?? skewing image??
    0,  //
    this.width,
    this.height);
};

Chicken.prototype.update = function () {
  this.frameIndex += 1;
  if (this.frameIndex > 3)
  {
      this.frameIndex = 0;
  }

};

function drawChicken() {
  chicken.draw(ctx);
   loopTimer = setTimeout ('drawChicken();', 400)
}
