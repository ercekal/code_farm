function loadPageTwo() {
init();
var canvas;
var chicken;
var spriteRotation = 0;
var posX = 200;
var posY = 250;
var sign = 1;
var interval;

var $velocity=document.getElementById('velocity');



$velocity.addEventListener("keyup", function(){
  clearInterval(interval);
  speed = (1/this.value)*100;
  draw();
  interval = setInterval(draw, speed);
});

function init() {
  canvas = document.getElementById("canvas");
  interval = setInterval(draw, 100);
  ctx = canvas.getContext('2d');
  loadGraphics();
}

function loadGraphics() {
  chicken = loadSprite('../images/flatChicken.png');
}

function loadSprite(imageName) {
  var image = new Image();
  image.src = imageName;
  return image;
}

function draw() {
  updateScene();
  renderScene();
}

function renderScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSprite(chicken, posX, posY, spriteRotation, 0.6);
}

function updateScene() {
  spriteRotation += 0.2;
  updatePositions();
}

function drawSprite(imageObject, x, y, rotation, scale) {
  var w = imageObject.width;
  var h = imageObject.height;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);
  // draw image to screen drawImage(imageObject, sourceX, sourceY, sourceWidth, sourceHeight, rotateX, rotateY, destinationWidth, destinationHeight)
  ctx.drawImage(imageObject, 0, 0, w, h , -w/2, -h/2, w, h);
  ctx.restore();
}

function updatePositions() {
  if (posX > canvas.width) {
    sign = -1;
  } else if (posX < 0) {
    sign = 1;
  }
  posX = posX + (3 * sign);
}
}
