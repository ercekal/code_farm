// $(function() {
//
//   var c= document.getElementById("canvas");
//   var ctx = c.getContext("2d");
//
//   var width = 150;
//   var height = 100;
//   var x = 200;
//   var y = 200;
//
//   var $width=document.getElementById('width');
//   var $height=document.getElementById('height');
//   var $xPosition=document.getElementById('xPosition');
//   var $yPosition=document.getElementById('yPosition');
//
//   $width.value=width;
//   $height.value=height;
//   $xPosition.value=x;
//   $yPosition.value=y;
//
//   draw();
//
//   $width.addEventListener("keyup", function(){
//     width=this.value;
//     draw();
//   });
//
//   $height.addEventListener("keyup", function(){
//     height=this.value;
//     draw();
//   });
//
//   $xPosition.addEventListener("keyup", function(){
//     x=this.value;
//     draw();
//   });
//
//   $yPosition.addEventListener("keyup", function(){
//     y=this.value;
//     draw();
//   });
//
//   function draw() {
//     ctx.clearRect(0,0,550,500);
//     ctx.fillRect(x, y, width, height);
//   }
//
//
//
//
// });
