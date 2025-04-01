var favfoodslist=[];
document.addEventListener("DOMContentLoaded",loadfile);
function loadfile(){
loadallfile();
}
function loadallfile(){
let ade=document.querySelectorAll(".food");
    ade.forEach((fe)=>{
      fe.addEventListener("click",cardview);
    });
      function cardview(){
        /*
       let v = this.childNodes;
       
      let foodprice=v.querySelector("#food-price").innerHTML;
      let foodname=v.querySelector("#food-name").innerHTML;
  let foodimg=v.querySelector(".fl").src;
      */
       const foodprice=this.childNodes[5].innerHTML;
      let foodname=this.childNodes[3].innerHTML;
  let foodimg=this.childNodes[1].src;
     
      const cartelement=cardfullview(foodname,foodprice,foodimg);
    
      const bd=document.querySelector("#bod");
      const element=document.createElement("div");
      element.innerHTML=cartelement;
      bd.appendChild(element);
      document.querySelector(".fullfull").hidden=true;
    if(favfoodslist.find((fd)=>fd== foodname)){
    document.querySelector("#heart2").hidden=false;
    document.querySelector("#heart").hidden=true;
  }
  else{
    document.querySelector("#heart").hidden=false;
  }
      }
      
    
}

function cardfullview(foodname,foodprice,foodimg){
  return `     
      
  <div class="card-add-view">
    <div id="taskbar">
  <img class="img1" onclick="back()" src="img/arrow.png">
  
    <img class="img" onclick="fav()" src="img/love.png">
        
            <img class="img3" onclick="cart()" src="img/shopping-cart.png">
    
  </div>
  <hr>
  
      <br>
      
      <br>

  
  <div class="ctext">
      <img class="cbir" src="${foodimg}">
        <h3>${foodname}</h3>
            <img id="heart" onclick="heart()" class="heart" src="img/heart.png">
       <img id="heart2" onclick="heart2()" class="heart" src="img/heart2.png" hidden="true">
        <h2 class="amountc">${foodprice}</h2>
          <div id="placeo" onclick="ooop()"> 
    Add to Cart
  </div>
  </div>

  `
}
let ade=document.querySelectorAll(".delete-cart");
    ade.forEach((del)=>{
      del.addEventListener("click",deletecart);
      
    });

    var validatestore=[];
     
  function ooop(){
    var v=document.getElementById("placeo");

   var foodname= v.parentElement.childNodes[3].innerHTML;
  var foodsrc= v.parentElement.childNodes[1].src;
   var foodprice= (v.parentElement.childNodes[9].innerHTML).replace("Rs-",'');
   
      const cartproductdetails=cartprodetails(foodsrc,foodname,foodprice);
      
     if(validatestore.find((ef)=> ef== foodname)){
       alert("This food already in cart");
       return;
     }
      else{
      
        validatestore.push(foodname);
  
      }
      var  store=document.querySelector(".cart-product-add");
      var element=document.createElement("div");
      element.innerHTML=cartproductdetails;
      store.appendChild(element);
      var nof = document.querySelector("#nooffoods").innerHTML;
      var nooffoodcount=parseInt(nof)+1;
      
      document.querySelector("#nooffoods").innerHTML=nooffoodcount;
      
      /*food total
          var nof = document.querySelector("#foodsprice").innerHTML;

      var foodpcount=parseInt(nof)+parseInt(foodprice);
      
      document.querySelector("#foodsprice").innerHTML=foodpcount;
      overall total
    var dic=0;
    if(foodpcount){
      if((foodpcount>=200)&( foodpcount<300)){
        dic=10;
      }
      else if((foodpcount>=300)&( foodpcount<400)){
        dic=20;
      }
      else if((foodpcount>=400)&( foodpcount<500)){
        dic=30;
      }
            else if(( foodpcount>=500)){
        dic=40
      }
    }
      document.querySelector("#totalfoodsprice").innerHTML=foodpcount - dic;
      document.querySelector("#foodsdiscount").innerHTML=dic;
      */
 var qe= document.querySelectorAll("#prdqunt");
 qe.forEach((q)=>{
       q.addEventListener("change",quntycountv);
       function quntycountv(){
         
         if(isNaN(this.value)|| this.value <1){
           this.value=1;
         }
         
         
   var foodqunty=(q.value)*( parseInt((this.parentElement.childNodes[3].innerHTML).replace("Rs-",'')));
      this.parentElement.parentElement.childNodes[5].innerHTML="Rs-"+foodqunty;
      updatetotal();
  }
 });
 updatetotal();
           var remove= document.querySelectorAll(".delete-cart");
          
         remove.forEach((re)=>{
   re.addEventListener("click",deletecart);
          
         });
  }
 function cartprodetails(foodsrc,foodname,foodprice){
   
        return `
        
    <div class="cart-product">
  <img class="cart-img"  src="${foodsrc}">
  <div id="qt">
  <p id="cart-name">${foodname}</p>
  <p id="cart-namep">${foodprice}</p>
  <lable id="prqunt" >Quantity</lable>

    <input  id="prdqunt" type="number" value="1" min=1  > 
  
  </div>
  <p id="cart-price">Rs-${foodprice}</p>
  <img class="delete-cart" src="img/delete.png">
</div>`
      
    }
  
    function deletecart(){
        
         /* no of foods */
      var nof = document.querySelector("#nooffoods").innerHTML;
      var nooffoodcount=parseInt(nof)-1;
      document.querySelector("#nooffoods").innerHTML=nooffoodcount;
      
       /*total delete*/
    
     var nof= this.parentElement.childNodes[5].innerHTML;
    var   filfood =this.parentElement.childNodes[3].childNodes[1].innerHTML;
   validatestore=validatestore.filter((fil)=>fil!=filfood);
     var fp=document.getElementById("foodsprice").innerHTML;
      document.getElementById("foodsprice").innerHTML=parseInt(fp)-(parseInt(nof.replace("Rs-",'')));
          this.parentElement.remove();
  var ms=parseInt(fp)-(parseInt(nof.replace("Rs-",'')));
     dic=0;
      if((ms>=200)&( ms<300)){
        dic=10;
      }
      else if((ms>=300)&( ms<400)){
        dic=20;
      }
      else if((ms>=400)&( ms<500)){
        dic=30;
      }
            else if(( ms>=500)){
        dic=40
      }
      document.querySelector("#totalfoodsprice").innerHTML=ms - dic;
      document.querySelector("#foodsdiscount").innerHTML=dic;

    }


function updatetotal(){
  document.querySelector("#foodsprice").innerHTML=0;
  var qt = document.querySelectorAll("#prdqunt");
 qt.forEach(ttt=>{
    var mm= parseInt(ttt.parentElement.childNodes[3].innerHTML)*ttt.value;
    var ms=parseInt(document.querySelector("#foodsprice").innerHTML)+mm;
    document.querySelector("#foodsprice").innerHTML= ms;
    dic=0;
      if((ms>=200)&( ms<300)){
        dic=10;
      }
      else if((ms>=300)&( ms<400)){
        dic=20;
      }
      else if((ms>=400)&( ms<500)){
        dic=30;
      }
            else if(( ms>=500)){
        dic=40
      }
     document.querySelector("#totalfoodsprice").innerHTML=ms - dic;
      
      document.querySelector("#foodsdiscount").innerHTML=dic;
});
}
function heart(){
    document.getElementById("heart").hidden=true;
  document.getElementById("heart2").hidden=false;
  
  var favimg=document.querySelector("#heart").parentElement.childNodes[1].src;
  var favname=document.querySelector("#heart").parentElement.childNodes[3].innerHTML;
  var favprice=document.querySelector("#heart").parentElement.childNodes[9].innerHTML;
  var favcreate= favfood(favname,favimg,favprice);
  if(favfoodslist.find((ffl)=>ffl==favname)){
    alert("Already add in Favourite List");
    return;
  }
  else{
    
    favfoodslist.push(favname);
  }
  var favelement=document.querySelector(".fav-food-add");
    var element=document.createElement("div");
    element.innerHTML=favcreate;
     favelement.appendChild(element);
     
     var favdel=document.querySelectorAll(".delete-fav");
favdel.forEach((fd)=>{
    fd.addEventListener("click",favdelf);
});
}
function favfood(favname,favimg,favprice){
  
  return `
    <div class="fav-product">
  <img onclick="favview()" class="fav-img"  src="${favimg}">
  <div>
  <p onclick="favview()"  id="fav-name">${favname}</p>
  <p onclick="favview()"  id="fav-namep">${favprice}</p>
  </div>
  <img class="delete-fav" src="img/delete.png">
  </div>
  `
  
}

function favdelf(){
  var favname1=this.parentElement.childNodes[3].childNodes[1].innerHTML;
     favfoodslist= favfoodslist.filter(fit=>fit!=favname1);
     this.parentElement.remove();
     document.querySelector("#heart").hidden=false;
     document.querySelector("#heart2").hidden=true;
}
function heart2(){
  document.getElementById("heart").hidden=false;
  document.getElementById("heart2").hidden=true;
  var favdel=document.querySelectorAll(".fav-product");
favdel.forEach((fd)=>{
 var clickname=document.querySelector(".ctext").childNodes[3].innerHTML;
 console.log(clickname);
   var favfoods=fd.childNodes[3].childNodes[1].innerHTML;
   console.log(favfoods);

     favfoodslist= favfoodslist.filter(fit=>fit!=clickname);
     
     
     if(clickname==favfoods){
     fd.parentElement.remove();
     }
});
}
function orderview(){
      document.querySelector(".orderv").hidden=false;
}
/*
    

*/