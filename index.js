
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",clickhandler);

}

function clickhandler(){
  var innerhtml= this.innerHTML;
  makeSound(innerhtml);
  showAnimation(innerhtml);
}
document.addEventListener("keydown",
  function(event1){
    makeSound(event1.key);
    showAnimation(event1.key);
  })
function makeSound(key){
  switch (key) {
    case "w":
      var tom1=new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare=new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash=new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const kick=new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(character);
  }
}
function showAnimation(currentkey){
  activeKey=document.querySelector("."+currentkey);
  activeKey.classList.add("pressed");
  setTimeout(function(){
    activeKey.classList.remove("pressed");
  },100);
}
