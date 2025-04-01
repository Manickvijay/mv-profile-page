var show=document.querySelector(".show");
   show.addEventListener("click",()=>{
      var menu=document.querySelectorAll(".menu");
      
      show.hidden=true;
      menu.forEach(sh=>{
       sh.classList.add("act");
       });
      
   });

var close=document.querySelector(".close");
   close.addEventListener("click",()=>{
   show.hidden=false;
   var menu=document.querySelectorAll(".menu");
       menu.forEach(sh=>{
            sh.classList.remove("act");
    
       });
    });
