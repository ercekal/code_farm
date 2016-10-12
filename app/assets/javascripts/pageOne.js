function loadPageOne() {

    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    var width = 150;
    var height = 100;
    var x = 200;
    var y = 200;

    var $width=document.getElementById('width');
    var $height=document.getElementById('height');
    var $xPosition=document.getElementById('xPosition');
    var $yPosition=document.getElementById('yPosition');

    $width.value=width;
    $height.value=height;
    $xPosition.value=x;
    $yPosition.value=y;

    draw();

    $width.addEventListener("keyup", function(){
      if ((Number(x) + Number(this.value)) > 550) {
        $width.value = 0;
        distance1 = (550 - x);
        alert('Please enter a number larger than 0 smaller than ' + distance1);
      } else {
        width=this.value;
        draw();
    }
    });

    $height.addEventListener("keyup", function(){
      if ((Number(y) + Number(this.value)) > 500) {
        $height.value = 0;
        distance2 = (500 - y);
        alert('Please enter a number larger than 0 smaller than ' + distance2);
      } else {
      height=this.value;
      draw();
    }
    });

    $xPosition.addEventListener("keyup", function(){
      if ((Number(width) + Number(this.value)) > 550) {
        $xPosition.value = 0;
        distance3 = (550 - width);
        alert('Please enter a number smaller larger than 0 than ' + distance3);
      } else {
      x=this.value;
      draw();
    }
    });

    $yPosition.addEventListener("keyup", function(){
      if ((Number(height) + Number(this.value)) > 550) {
        $yPosition.value = 0;
        distance4 = (550 - height);
        alert('Please enter a number smaller larger than 0 than ' + distance4);
      } else {
      y=this.value;
      draw();
    }
    });

    function draw() {
      ctx.clearRect(0,0,550,500);
      ctx.fillRect(x, y, width, height);
    }

}
