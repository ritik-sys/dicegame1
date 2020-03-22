var randomNumber1=Math.random();
randomNumber1=Math.floor((6*randomNumber1)+1);
var imagenumber="dice"+randomNumber1+".png";
var randomsource1="images/" + imagenumber;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource1);
var image2=document.querySelectorAll("img")[1];
var randomNumber2=Math.random();
randomNumber2=Math.floor((6*randomNumber2)+1);
var imagenumber="dice"+randomNumber2+".png";
var randomsource2="images/" + imagenumber;
image2.setAttribute("src",randomsource2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="player 1 wins!";

}
else
{
  document.querySelector("h1").innerHTML="player 2 wins!";
}
