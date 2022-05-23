var ProductArr = JSON.parse(localStorage.getItem("products"));
  displayData(ProductArr);

  function addMore(){
    window.location.href = "index.html"
  }

  function displayData(data){
    data.forEach(function (elem,index) {
      var box = document.createElement("div")
      var productType = document.createElement("h1")
      productType.innerText = elem.type;
      var productDesc = document.createElement("p")
      productDesc.innerText = elem.desc;
      var productPrice = document.createElement("h2")
      productPrice.innerText = elem.price;
      var productImage = document.createElement("img")
      productImage.setAttribute("src",elem.image);
      var productRemove = document.createElement("button")
      productRemove.innerText = "Remove";
      productRemove.setAttribute("id", "remove_product")
      productRemove.addEventListener("click", function(){
        deleteProd(elem, index);
      })
      box.append(productType,productDesc,productPrice,productImage,productRemove);
      document.querySelector("#all_products").append(box);
    });
  }

  function deleteProd(elem,index) {
    ProductArr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(ProductArr));
    window.location.reload();
  } 