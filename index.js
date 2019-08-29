// function start() {
//   startGame();
//   setup()
//   document.getElementsByClassName("instructions").style.visibility = "hidden";
// }

// document.getElementsByClassName("btn-start").onclick = start();


const startButton=document.querySelector(".btn-start");
startButton.onclick=function(){
    document.querySelector(".instructions").style.display="none";
    startGame=true;
  
}