function loadPageThree(){
init();

var chicken;
var spriteRotation = 0;
var interval;
var $newArray=document.getElementById('newArray');
var $arrayIndex=document.getElementById('arrayIndex');
var $arrayPop=document.getElementById('arrayPop');
var $arrayNewBtn=document.getElementById('arrayNewBtn');
var $arrayIndexBtn=document.getElementById('arrayIndexBtn');
var $arrayPopBtn=document.getElementById('arrayPopBtn');
var ctx;


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

// user initiated functions

$arrayNewBtn.addEventListener("click", function(){
  var newArray = $newArray;
    if (newArray.checkValidity() === false) {
        document.getElementById("demo").innerHTML = "Sorry, that's not the right method!";
    } else {
        document.getElementById("demo").innerHTML = "";
        renderScene();
    }
});

function renderScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if ($newArray.value === "new") {
    drawSprite(chicken, 150, 225, 0, 0.4);
    drawSprite(chicken, 250, 225, 0, 0.4);
    drawSprite(chicken, 350, 225, 0, 0.4);
    drawSprite(chicken, 450, 225, 0, 0.4);
  }
}

$arrayIndexBtn.addEventListener("click", function(){
  var index = $arrayIndex;
    if (index.checkValidity() === false) {
        document.getElementById("demo2").innerHTML = "Sorry, no chicken has that index!";
    } else {
        document.getElementById("demo2").innerHTML = "";
        changeIndex(index);
    }
});

function changeIndex(index) {
  if (index.value == "0") {update0();}
  if (index.value == "1") {update1();}
  if (index.value == "2") {update2();}
  if (index.value == "3") {update3();}
}

$arrayPopBtn.addEventListener("click", function(){
  var arrayPop = $arrayPop;
    if (arrayPop.checkValidity() === false) {
        document.getElementById("demo3").innerHTML = "Sorry, that's not the right method!";
    } else {
        document.getElementById("demo3").innerHTML = "";
        interval = setInterval(chickenPop, 20);
    }
});

function chickenPop() {
  updateScene();
  renderPop();
}

function updateScene() {
  if (spriteRotation < Math.PI) {
    spriteRotation += 0.05;
  }
}

function renderPop() {
  ctx.clearRect(0,0,550,500);
  drawSprite(chicken, 150, 225, 0, 0.4);
  drawSprite(chicken, 250, 225, 0, 0.4);
  drawSprite(chicken, 350, 225, 0, 0.4);
  drawSprite(chicken, 450, 225, spriteRotation, 0.4);
}

function update0() {
  ctx.clearRect(0,0,550,500);
  drawSprite(chicken, 150, 225, 0, 0.6);
  drawSprite(chicken, 250, 225, 0, 0.4);
  drawSprite(chicken, 350, 225, 0, 0.4);
  drawSprite(chicken, 450, 225, 0, 0.4);
}

function update1() {
  ctx.clearRect(0,0,550,500);
  drawSprite(chicken, 150, 225, 0, 0.4);
  drawSprite(chicken, 250, 225, 0, 0.6);
  drawSprite(chicken, 350, 225, 0, 0.4);
  drawSprite(chicken, 450, 225, 0, 0.4);
}

function update2() {
  ctx.clearRect(0,0,550,500);
  drawSprite(chicken, 150, 225, 0, 0.4);
  drawSprite(chicken, 250, 225, 0, 0.4);
  drawSprite(chicken, 350, 225, 0, 0.6);
  drawSprite(chicken, 450, 225, 0, 0.4);
}

function update3() {
  ctx.clearRect(0,0,550,500);
  drawSprite(chicken, 150, 225, 0, 0.4);
  drawSprite(chicken, 250, 225, 0, 0.4);
  drawSprite(chicken, 350, 225, 0, 0.4);
  drawSprite(chicken, 450, 225, 0, 0.6
);
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
}
