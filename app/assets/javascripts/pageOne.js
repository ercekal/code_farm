function loadPageOne() {
    init();
    var c;
    var ctx;
    var chicken;

    var width = 300;
    var height = 400;
    var x = 0;
    var y = 0;

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
      setTimeout(draw, 1000);
      console.log(chicken.width);
      console.log(chicken.height);
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
      if ((Number(x) + Number(this.value)) > 550) {
        $width.value = 0;
        distance1 = (550 - x);
        alert('Please enter a number larger than 0 and smaller than ' + distance1);
      } else {
        width=this.value;
        draw();
    }
    });

    $height.addEventListener("keyup", function(){
      if ((Number(y) + Number(this.value)) > 500) {
        $height.value = 0;
        distance2 = (500 - y);
        alert('Please enter a number larger than 0 and smaller than ' + distance2);
      } else {
      height=this.value;
      draw();
    }
    });

    $xPosition.addEventListener("keyup", function(){
      if ((Number(width) + Number(this.value)) > 550) {
        $xPosition.value = 0;
        distance3 = (550 - width);
        alert('Please enter a number smaller larger than 0 and smaller than ' + distance3);
      } else {
      x=this.value;
      draw();
    }
    });

    $yPosition.addEventListener("keyup", function(){
      if ((Number(height) + Number(this.value)) > 550) {
        $yPosition.value = 0;
        distance4 = (550 - height);
        alert('Please enter a number larger than 0 and smaller than ' + distance4);
      } else {
      y=this.value;
      draw();
    }
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
      ctx.clearRect(0,0,canvas.width,canvas.height);
      drawSprite(chicken, x, y, 0, 1);
    }

}
