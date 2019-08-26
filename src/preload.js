let trashImage;
let waveImage;
let oceanImage;
let algaeAnimation;
let fishImage;
let submarineImage;
let submarineAnimation;

function preload() {
  trashImage = loadImage("assets/soda-bottle.png");
  waveImage = loadImage("assets/waves.png");
  oceanImage = loadImage("assets/ocean.png");
  fishImage = loadImage("assets/clown-fish-alive.png");
  submarineImage = loadImage("assets/submarine.png");
  submarineAnimation = loadAnimation(
    "assets/submarine.png"
  );
  algaeAnimation = loadAnimation(
    "assets/algae/algae1.png",
    "assets/algae/algae2.png",
    "assets/algae/algae1.png",
    "assets/algae/algae3.png",
    "assets/algae/algae4.png",
    "assets/algae/algae5.png"
  );
}
