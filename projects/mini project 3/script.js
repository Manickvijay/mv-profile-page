var bar=document.querySelector(".bar");
bar.addEventListener("click",()=>{
  bar.childNodes[1].classList.add("active");
  bar.childNodes[3].classList.add("active");

  bar.childNodes[5].classList.add("active");

  var tr=document.querySelector(".sidebg").hidden==false ? true:false;
if(tr==true){
    bar.childNodes[1].classList.remove("active");
  bar.childNodes[3].classList.remove("active");

  bar.childNodes[5].classList.remove("active");

}
  console.log("false"+tr);

    document.querySelector(".sidebg").hidden=tr;
});
var show=document.querySelector(".show");
show.addEventListener("click",()=>{
  var pass=document.querySelector("#inp");
  var pv=pass.getAttribute("type");
  console.log(pv);
    if(pv=="password"){
    pass.setAttribute("type","text");
    }
    else{
      pass.setAttribute("type","password");
    }
})