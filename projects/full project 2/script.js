var display=document.querySelector(".display");
    var input=document.querySelectorAll(".input");
    
    
       var opcheck=document.querySelectorAll(".operator");
       opcheck.forEach(opche=>{
   opche.addEventListener("click",()=>{
        
        var check =display.value.at(-1);
        
      if((display.value.charAt(0)=='%')||(display.value.charAt(0)=='*')||(display.value.charAt(0)=='/')){
        var er=document.querySelector(".error").value="error";
      }
        if ((check=='+')||(check=='-')||(check=='*')||(check=='%')||(check=='/')){
       display.value=display.value.slice(0,-1);
               }

   });
       });
  
    input.forEach((allinput)=>{
    allinput.addEventListener("click",()=>{
       display.value += allinput.innerHTML;
     if ((display.value.charAt(0) == '%') || (display.value.charAt(0) == '*') || (display.value.charAt(0) == '/')) {
         var er = document.querySelector(".error").value = "error";
       }
     else  if(display.value.length == 2) {
        var er = document.querySelector(".error").value = "";
      }
       display.focus();

    });
    });
  var anwser=document.querySelector(".equal");
  
       anwser.addEventListener("click",()=>{
         if(display.value.length==0){
           return;
         }
         display.value=eval(display.value);
       display.focus();
    
       });
   var clear=document.querySelector(".clear");
     clear.addEventListener("click", () => {
      display.value = "";
        var er = document.querySelector(".error").value= "";
     });
     var delet=document.querySelector(".delete");
     delet.addEventListener("click", () => {
       
      display.value = display.value.slice(0,-1);
      if ((display.value.charAt(0) == '%') || (display.value.charAt(0) == '*') || (display.value.charAt(0) == '/')) {
        var er = document.querySelector(".error").value = "error";
      }
      else{
        var er = document.querySelector(".error").value= "";
      }
     });

    var op=document.querySelectorAll(".operator");
   op.forEach((opsym) => {
          opsym.addEventListener("click", () => {
            
   if(display.value.length==1){
         var er=document.querySelector(".error").value="error";
}
});
});
   


