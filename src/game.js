class Game {
  constructor() {
    this.background = new Background();
    this.fish = new Fish();
    this.submarine = new Submarine();
    this.fishAlive=true;
  }

  setup() {
    this.trashes = new Group();
    this.background.setup();
    this.submarine.setup();
    this.fish.setup();
  }

  draw() {
    this.background.draw();
    if (frameCount >= 60 && frameCount % 60 === 0) {
      this.createTrash();
    }

    this.fish.draw();
    this.submarine.draw();

    if (this.submarine.missiles) {
      this.trashes.collide(this.submarine.missiles, this.hitMissile);
    }

    this.trashes.collide(this.fish.fishSprite, this.eatTrash);

    // this.submarine.bounce(this.trashes);
    // this.fish.bounce(this.trashes);

    // if(this.submarine.missiles.length > 0){
    //   this.trashes.forEach((trash, index)=> {
    //     this.submarine.missiles.forEach((missile)=> {
    //       if (missile.sprite.collide(trash.sprite,(a,b)=>{
    //         console.log(a,b)
    //       })) {
    //         // this.trashes.splice(index, 1);
    //       }
    //     });
    //   });

    // }
  }

  createTrash() {
    let trashSprite = createSprite(
      random(50, WIDTH - 50),
      random(50, HEIGHT - 50)
    );
    trashSprite.addImage(trashImage);
    trashSprite.scale = 0.035;
    this.trashes.add(trashSprite);
  }

  hitMissile(missile, trash) {
    trash.remove();
    missile.remove();
  }

  eatTrash(trash, fish) {
    trash.remove();

    if (fish.scale < 0.17) {
      fish.scale += 0.07;
    } else {
      
      fish.remove();
      console.log(this)
      createDeadFish();
      noLoop()
    }
  }

  /* createDeadFish() {
  
    let fishDeadSprite = createSprite(
      this.fish.fishSprite.position.x,
      this.fish.fishSprite.position.y
    );
    fishDeadSprite.addImage(fishDeadImage);
    fishDeadSprite.scale = 0.45;
    this.fishAlive=false;
  } */
}
function createDeadFish(){
  console.log("dead")
  let fishDeadSprite = createSprite(
    game.fish.fishSprite.position.x,
    game.fish.fishSprite.position.y
  );
  fishDeadSprite.addImage(fishDeadImage);
  fishDeadSprite.scale = 0.45;
  
  // this.fishAlive=false;
}