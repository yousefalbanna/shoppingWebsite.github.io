let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon')

search_icon.addEventListener('click',()=>{
  search.classList.toggle('search_input');
})

function gotoShop(){
    window.location='file:///D:/university/semester5/Introduction%20to%20Web%20Programing/shopping%20website/Shop.html';
}

function gotoFinalPage(){
  window.location='file:///D:/university/semester5/Introduction%20to%20Web%20Programing/shopping%20website/FinalPage.html';
}

function gotoCart(){
  window.location='file:///D:/university/semester5/Introduction%20to%20Web%20Programing/shopping%20website/cart.html';
}




var MainImg = document.getElementById("MainImg"); 
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
  MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
  MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
  MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
  MainImg.src = smallimg[3].src;
}
