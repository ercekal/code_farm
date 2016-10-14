function loadPageFour(){
init();

var chicken;
var $chickenGenerate=document.getElementById("chickenGenerate");
var $getChickens=document.getElementById('getChickens');
var $farm = document.getElementById('farm');
var $full = document.getElementById('full');
var $empty = document.getElementById('empty');
var $if_button = document.getElementById('if_button');
var $feedback = document.getElementById('feedback');

function init() {
  canvas = document.getElementById("canvas");
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

function drawSprite(imageObject, x, y, rotation, scale) {
  var w = imageObject.width;
  var h = imageObject.height;

  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.scale(scale, scale);
  // draw image to screen drawImage(imageObject, sourceX, sourceY, sourceWidth, sourceHeight, rotateX, rotateY, destinationWidth, destinationHeight)
  ctx.drawImage(imageObject, 0, 0, w, h , -w/1.2, -h/2, w, h);
  ctx.restore();

}

$getChickens.addEventListener("click", function(){
  if($chickenGenerate.value === "1") {
    $farm.style.display = "block";
    renderScene1();
  } else if ($chickenGenerate.value === "2") {
    $farm.style.display = "block";
    renderScene2();
  } else if ($chickenGenerate.value === "3") {
    $farm.style.display = "block";
    renderScene3();
  } else if ($chickenGenerate.value === "4") {
    $farm.style.display = "block";
    renderScene4();
  } else {
    alert('Please enter a number between 1 and 4');}
});

function renderScene1() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSprite(chicken, 150, 225, 0, 0.4);
}

function renderScene2() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSprite(chicken, 150, 225, 0, 0.4);
    drawSprite(chicken, 250, 225, 0, 0.4);
}

function renderScene3() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSprite(chicken, 150, 225, 0, 0.4);
    drawSprite(chicken, 250, 225, 0, 0.4);
    drawSprite(chicken, 350, 225, 0, 0.4);
}

function renderScene4() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSprite(chicken, 150, 225, 0, 0.4);
    drawSprite(chicken, 250, 225, 0, 0.4);
    drawSprite(chicken, 350, 225, 0, 0.4);
    drawSprite(chicken, 450, 225, 0, 0.4);
}

$if_button.addEventListener("click", function() {
  var audio = new Audio('http://www.wavsource.com/snds_2016-10-09_1797402624934163/animals/chicken.wav');
  audio.play();
  $feedback.style.display = "block";
  if ($chickenGenerate.value == "4"){
    $full.style.display = "block";
  } else {
    $empty.style.display = "block";
  }
});
}
