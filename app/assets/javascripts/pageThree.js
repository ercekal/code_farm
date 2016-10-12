window.onload= function(){
draw()}
var canvas = document.getElementById("canvas");
console.log(canvas);

var chicken = new Chicken(0, 20);
var ctx = canvas.getContext('2d');
var speed = 50
var loopTimer

function changeSpeed(newSpeed) {
    clearTimeout(loopTimer);
    speed = newSpeed;
    draw();
}

function Chicken(xPos, yPos)
    {
    this.x = xPos;
    this.y = yPos;

    this.state = 0;
    }

   Chicken.prototype.create = function(canvasContext) {
     canvasContext.clearRect(0,0,550,400);
     canvasContext.fillRect (this.x, this.y, 50, 50);
   };

     function draw() {
       ctx.save();
       chicken.create(ctx);
       ctx.restore();
       if (chicken.x > 550)
      {
         chicken.x = 0;
       }
       chicken.x += 3;

       loopTimer = setTimeout ('draw()', speed);
     }
   }
