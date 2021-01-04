document.getElementById("tom1").addEventListener("click", function(){
  playAudio("sounds/tom-1.mp3");
});
document.getElementById("tom2").addEventListener("click", function(){
  playAudio("sounds/tom-2.mp3");
});
document.getElementById("tom3").addEventListener("click", function(){
  playAudio("sounds/tom-3.mp3");
});
document.getElementById("tom4").addEventListener("click", function(){
  playAudio("sounds/tom-4.mp3");
});
document.getElementById("snare").addEventListener("click", function(){
  playAudio("sounds/snare.mp3");
});
document.getElementById("crash").addEventListener("click", function(){
  playAudio("sounds/crash.mp3");
});
document.getElementById("kick").addEventListener("click", function(){
  playAudio("sounds/kick-bass.mp3");
});

function playAudio(sound){
    var audio = new Audio(sound);
    console.log(audio);
    audio.play()
}
