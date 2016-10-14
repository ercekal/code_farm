function loadPageTwo() {

var canvas;
var chicken;
var spriteRotation = 0;
var posX = 200;
var posY = 250;
var sign = 1;
var interval;
var chickenSpeed = 1;
var $velocity=document.getElementById('velocity');

init();

function updateSpeed(chickenSpeed) {
  $("#current_speed").html(chickenSpeed);
}

$velocity.addEventListener("keyup", function(){
  clearInterval(interval);
  draw();
  calculateSpeed(this.value);
  document.getElementById('progressBarContainer').innerHTML = "";
  progressBar();
});

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext('2d');
  calculateSpeed(1);
  loadGraphics();
  progressBar();
}

function progressBar() {
  var bar = new ProgressBar.SemiCircle(progressBarContainer, {
  strokeWidth: 6,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value/10);
    }

    bar.text.style.color = state.color;
  }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';

  bar.animate((1/chickenSpeed)*10);  // Number from 0.0 to 1.0
}

function calculateSpeed(inputSpeed) {
  chickenSpeed = (1/inputSpeed)*100;
  interval = setInterval(draw, chickenSpeed);
  updateSpeed(inputSpeed);
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
