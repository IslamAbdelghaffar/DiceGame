
var i1=Math.floor(Math.random()*6)+1;
var i2=Math.floor(Math.random()*6)+1;
document.querySelector(".dice .img1").setAttribute("src","images/dice"+i1+".png");
document.querySelector(".dice .img2").setAttribute("src","images/dice"+i2+".png");

if(i1>i2){
document.querySelector("h1").textContent="🚩Player 1 is the Winner";
}else if(i2>i1){
  document.querySelector("h1").textContent="Player 2 is the Winner🚩";
}
else
document.querySelector("h1").textContent="Equal 🏁";
