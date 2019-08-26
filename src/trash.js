class Trash{
constructor(){
    this.x = Math.ceil(Math.random()*WIDTH);
    this.y = Math.ceil(Math.random()*HEIGHT);
  }


draw(){
image(trashImage,this.x, this.y,trashImage.width/25,trashImage.height/25)
}
}