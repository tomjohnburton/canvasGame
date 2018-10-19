var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width;
var height = canvas.height;

var bg = new Background(ctx,'/images/bg (1).png',2)

var bgImg = new Image()
bgImg.src = '/images/bg (1).png'

var bgCloud = new Background(ctx,'/images/image (1) (1).png',3)

setInterval(function(){
  update()
  drawEverything()
},1000/60)

function update(){
  ctx.clearRect(0,0,width,height)
  bg.update()
  bgCloud.update()


}


// take note on how to get the ratio for the width
function drawEverything(){
  bg.draw()
  bgCloud.draw()
}

