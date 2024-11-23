
var randomnuber=Math.random();
randomnuber=Math.floor(randomnuber*7);
console.log(randomnuber);
if(randomnuber===1){
    document.querySelector("img ").setAttribute("src","/images/dice1.png");
}
if(randomnuber===2){
    document.querySelector("img ").setAttribute("src","/images/dice2.png");
}
if(randomnuber===3){
    document.querySelector("img ").setAttribute("src","/images/dice3.png");
}
if(randomnuber===4){
    document.querySelector("img ").setAttribute("src","/images/dice4.png");
}
if(randomnuber===5){
    document.querySelector("img ").setAttribute("src","/images/dice5.png");
}
var randomnuber1=Math.random();
randomnuber1=Math.floor(randomnuber1*7);
console.log(randomnuber1);
if(randomnuber1===1){
    document.querySelector(".img2 " ).setAttribute("src","/images/dice1.png");
}
if(randomnuber1===2){
    document.querySelector(".img2 ").setAttribute("src","/images/dice2.png");
}
if(randomnuber1===3){
    document.querySelector(".img2").setAttribute("src","/images/dice3.png");
}
if(randomnuber1===4){
    document.querySelector(".img2").setAttribute("src","/images/dice4.png");
}
if(randomnuber1===5){
    document.querySelector(".img2 ").setAttribute("src","/images/dice5.png");
}
if(randomnuber===randomnuber1){
    document.querySelector("h1").innerHTML="Draw";
}
if(randomnuber>randomnuber1){
    document.querySelector("h1").innerHTML="Player1 WinS";
}
if(randomnuber<randomnuber1){
    document.querySelector("h1").innerHTML="Player2 WinS";
}