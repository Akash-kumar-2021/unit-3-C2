let akash = document.getElementById("confirm");
akash.addEventListener("click",myFunc);
let id ;
function myFunc(event)
{
    event.preventDefault();
    // console.log("hell");
   id = setInterval(function () {
     alert("Your order is being prepare")
   }, 3000);

     id = setInterval(function () {
       alert("Your order is being prepare");
     }, 4000);

       id = setInterval(function () {
         alert("Your order is being prepare");
       }, 5000);

}

