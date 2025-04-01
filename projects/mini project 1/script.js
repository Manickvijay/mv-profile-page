var ac=document.createElement('div');
var  c=document.querySelectorAll("#img");
c.forEach(ck=>{
  ck.addEventListener("click",()=>{
    
ac.id='add1';
var i=document.createElement('img');
i.src=ck.src;
i.id="img2";
ac.append(i);
document.body.appendChild(ac);

  });
});
ac.addEventListener('click',()=>{
  ac.firstChild.remove();
  ac.remove();
});