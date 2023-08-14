
var currentImage = 0;
var cup = 0;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function cumshot(){

    while (cup !=100){

        var images = ["images/photo1.jpg","images/photo2.jpg","images/photo3.jpg","images/photo4.jpg","images/photo5.jpg","images/photo6.jpg","images/photo7.jpg","images/photo8.jpg","images/photo9.jpg","images/photo10.jpg"];  
        var photo1 = document.getElementById("one")
    currentImage++;
    await sleep(200);
    if(currentImage >= 10){    
        currentImage = 0;
    }
    await sleep(200);
    photo1.src = images[currentImage];
    await sleep(200);
    cup++;
    
    
}
}
function playmusic(){
var auido = new Audio("music.mp3");
audio.play();
}