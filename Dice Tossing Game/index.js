var  randomDiceNo1=Math.floor(Math.random()*6)+1;
var imgNo1 = "images/dice"+randomDiceNo1+".png";
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", imgNo1);
document.querySelector(".img1").setAttribute("src",imgNo1);


var  randomDiceNo2=Math.floor(Math.random()*6)+1;  
var imgNo2 = "images/dice"+randomDiceNo2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imgNo2);

if(randomDiceNo1>randomDiceNo2){
    document.querySelector("h1").innerHTML="🚩 Player 1 wins"
}
else if(randomDiceNo1<randomDiceNo2){
    document.querySelector("h1").innerHTML="🚩 Player 2 wins"
}
else {
    document.querySelector("h1").innerHTML="Draw Refresh Again"
}





// document.querySelector(".img1").setAttribute("src",imgNo1);


