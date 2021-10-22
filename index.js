
let count = 0;
var price = document.getElementById("price");
var newPrice = parseFloat(price.innerHTML);

function featured(e) {
    let current = document.getElementById("featured");
    current.src = e.src;
    
    console.log(e);
}


document.getElementById("plus").addEventListener("click", function(){
    var add = document.getElementById("value");
    add.innerHTML = ++count;
    
    price.innerHTML = count * newPrice;
    console.log(price.innerHTML);
});


document.getElementById("minus").addEventListener("click", function(){
    var add = document.getElementById("value");

    if(count >= 1){
    add.innerHTML = --count;
    price.innerHTML = count * newPrice;
    }
    
});

document.getElementById("toggle").addEventListener("click", function(){
      var bar = document.getElementById("nav-bar");

      if(bar.className === "nav"){
          bar.className += "responsive";

          console.log(bar);
      }

      else{
          bar.className = "nav";
      }
});


document.getElement