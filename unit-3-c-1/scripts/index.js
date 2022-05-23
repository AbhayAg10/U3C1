//store the products array in localstorage as "products"

var ProductArr = JSON.parse(localStorage.getItem("products")) || [];

function addProduct(){
  var Product = {
      type: document.querySelector("#type").value,
      desc: document.querySelector("#desc").value,
      price: document.querySelector("#price").value,
      image: document.querySelector("#image").value,
  };
  ProductArr.push(Product);
  console.log(ProductArr);
  localStorage.setItem("products",JSON.stringify(ProductArr));
  document.querySelector("#type").value = null;
  document.querySelector("#desc").value = null; 
  document.querySelector("#price").value = null;
  document.querySelector("#image").value = null;
}

function showProduct(){
    window.location.href = "inventory.html"
}