var chicken;
var canvas;
var codeRuns = 0

function loadHomePage() {
  pageLoadRefresh();
  chicken = new Chicken(0,0);
  canvas = document.getElementById("homeCanvas");
  ctx = canvas.getContext('2d');
  drawChicken();
}

function pageLoadRefresh() {
  if (window.location.href === "http://localhost:3000/") {
  codeRuns += 1
  }
  if (codeRuns > 1) {
    window.location.reload();
  }
}




function Chicken(xPos, yPos) {
  this.x = xPos;
  this.y = yPos;
  this.state = 0;
  this.image = new Image();
  this.image.src = '../images/4chickens.png';
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
  var loopTimer = setTimeout ('drawChicken();', 100)
}
