class Background {
  constructor(ctx, url, speed) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = url;
    this.x = 0;
    this.width = height*this.img.width/this.img.height;
    this.height = this.ctx.canvas.height;
    this.speed = speed;
  }
  update(){
    this.x -= this.speed;
    console.log('width',this.width)
    console.log(this.x)
    if (this.x < -this.width){
      this.x += this.width
      
    }
    
  }
  draw() {
    this.ctx.drawImage(this.img,this.x,0,this.width,this.ctx.canvas.height)
    this.ctx.drawImage(this.img,this.x+this.width,0,this.width,this.ctx.canvas.height)
  }
      
}