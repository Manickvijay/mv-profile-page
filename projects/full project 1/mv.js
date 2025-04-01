function menu() {
  
var open=document.getElementById("tlist")
open.hidden=false;
}
function closem() {
var open=document.getElementById("tlist")
open.hidden=true;
}
function cart() {
  document.getElementById("cart-click").hidden=false;
}
function fav() {
  document.getElementById("favourite").hidden=false;
  
}
function not() {
  window.open("not.html");
}
function search(){
  window.open("search.html");
}
var myIndex = 0;


function autoslide() {
  var i;
  var x = document.getElementsByClassName("b1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}   
  x[myIndex-1].style.display = "block";  
  setTimeout(autoslide, 2000);
}
/*
function addtocart(){
  window.open("Cartadd.html")
}


function heart2(){
  document.getElementById("heart").hidden=false;
  document.getElementById("heart2").hidden=true;
}
*/
function cartback(){
  document.getElementById("cart-click").hidden= true;
}
function back(){
  document.querySelector(".fullfull").hidden=false;
document.querySelector(".card-add-view").remove();
}
function favback(){
document.getElementById("favourite").hidden=true;
}
function orderback(){
      document.querySelector(".orderv").hidden=true;
}