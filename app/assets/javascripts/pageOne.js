function loadPageOne() {
    if (currentUserName !== undefined){
    $("#user_name").html("Signed in as " + currentUserName); }
    if (loopTimer) { clearTimeout(loopTimer); }

    init();
    var c;
    var chicken;
    var loopTimer;

    var width = 129;
    var height = 240;
    var x = 410;
    var y = 340;

    var $width=document.getElementById('width');
    var $height=document.getElementById('height');
    var $xPosition=document.getElementById('xPosition');
    var $yPosition=document.getElementById('yPosition');

    $width.value=width;
    $height.value=height;
    $xPosition.value=x;
    $yPosition.value=y;

    function init(){
      c = document.getElementById("canvas");
      ctx = c.getContext("2d");
      loadGraphics();
      loopTimer = setTimeout(draw, 500);
    }

    function loadGraphics() {
      chicken = loadSprite('../images/flatChicken.png');
    }

    function loadSprite(imageName) {
      var image = new Image();
      image.src = imageName;
      return image;
    }

    $width.addEventListener("keyup", function(){
      ctx.clearRect(0,0,750,700);
        width=this.value;
        draw();
    });

    $height.addEventListener("keyup", function(){
      ctx.clearRect(0,0,750,700);
      height=this.value;
      draw();
    });

    $xPosition.addEventListener("keyup", function(){
      ctx.clearRect(0,0,750,700);
      x=this.value;
      draw();
    });

    $yPosition.addEventListener("keyup", function(){
      ctx.clearRect(0,0,750,700);
      y=this.value;
      draw();
    });

    function drawSprite(imageObject, x, y, rotation, scale) {
      var w = imageObject.width;
      var h = imageObject.height;

      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);
      // draw image to screen drawImage(imageObject, sourceX, sourceY, sourceWidth, sourceHeight, rotateX, rotateY, destinationWidth, destinationHeight)
      ctx.drawImage(imageObject, 0, 0, w, h , -w/1.2, -h/2, width, height);
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0,0,750,700);
      drawSprite(chicken, x, y, 0, 1);
    }

}
