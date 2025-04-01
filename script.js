/* menu */
var menu="click";
function menulistclick(){
    document.getElementById("menu-nav-list").style.marginLeft = "-201px";
    document.getElementById("menu-img").src="img/icon/menu.svg";
    document.getElementById("empty").hidden = true;
    menu="click";
}
let menuclick=document.getElementById("menu-img");
menuclick.addEventListener("click",()=>{
    console.log(menu);
if(menu=="click"){
document.getElementById("menu-nav-list").style.marginLeft = "0px";
document.getElementById("empty").hidden = false;
document.getElementById("menu-img").src="img/icon/close.svg";
menu="noclick";
}
else{
    document.getElementById("menu-nav-list").style.marginLeft = "-201px";
    document.getElementById("empty").hidden = true;
    document.getElementById("menu-img").src="img/icon/menu.svg";
    menu="click";
}
});

window.onresize = function(){ 
    if(window.innerWidth>=901){
    document.getElementById("menu-nav-list").style.marginLeft = "-201px";
    document.getElementById("empty").hidden = true;
    document.getElementById("menu-img").src="img/icon/menu.svg";
    menu="click";
    }
}
function removeain(){
    var mo=document.getElementById('ani');
    mo.classList.remove('ani');
    var mo=document.getElementById('dev');
    mo.classList.remove('devani');
}

function aboutmove(){
    var mo=document.getElementById('ani');
    mo.classList.add('ani');
    var mo=document.getElementById('dev');
    mo.classList.add('devani');
    setTimeout(removeain,3000);
}
function removepro(){
    var mw=document.getElementById('w1');
    mw.classList.remove('web1');

}

function projectmove(){
    var mw=document.getElementById('w1');
    mw.classList.add('web1');
    setTimeout(removepro,3000);
}

var txt = 'web developer';
var i=0;
var p=0;
function removesrt(str){
    let n=str.length
    var newstring='';
            for(var i=0;i<n-1;i++){
                newstring +=str.charAt(i);
            }
            return newstring;
}
  
  setInterval(function() {
    var g=1;
    g++;
        console.log( "roung"+g)
        if(p==0 ){
            document.getElementById("changepro").innerHTML += txt.charAt(i);
            i++;  
            if(i ==13){
                p=1;
               return;
            }
        }
    
    },250)