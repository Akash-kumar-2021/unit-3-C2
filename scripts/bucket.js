// On clicking remove button the item should be removed from DOM as well as localstorage.
var bucketData = JSON.parse(localStorage.getItem("coffee"));
console.log(bucketData);

let total = bucketData.reduce(function (sum, elem) {
  return sum + Number(elem.price);
}, 0);

let total_amount = document.getElementById("total_amount");
total_amount.innerText = `${total}`

console.log(total);
// total is Rs 16365
//`` - template literals
// document.querySelector(
//   "total_amount"
// ).innerText = ` you have ${length} items in cart and  total is Rs ${total}`;

let menu = document.getElementById("menu");
bucketData.map(function (elem, index) {
  var box = document.createElement("div");
    var title = document.createElement("p");
    title.innerText = elem.title;

    var img = document.createElement("img");
     img.src = elem.image;



  var price = document.createElement("p");
  price.innerText = elem.price;

  var btn = document.createElement("button");
  btn.innerText = "Remove";
  btn.addEventListener("click", function () {
    removeItem(elem, index);
  });

  box.append(img, title, price, btn);
  menu.append(box);
   
});

function removeItem(elem, index) {
  console.log(elem, index);
  bucketData.splice(index, 1);
  console.log(bucketData);
  localStorage.setItem("coffee", JSON.stringify(bucketData));
  window.location.reload();
}