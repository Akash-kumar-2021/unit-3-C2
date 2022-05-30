// Add the coffee to local storage with key "coffee"
// fetch Api here

// 
const url = "https://masai-mock-api.herokuapp.com/coffee/menu";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    console.log("res", res.menu);
    append(res.menu.data);
  })
  .catch(function (err) {
    console.log("error", err);
  });

//   append the data in Dom

      function append(data) {
          let menu = document.getElementById("menu");
      

    
        data.forEach(function (el) {
             let bucket = JSON.parse(localStorage.getItem("coffee")) || [];
            //    bucketData.innerHTML = null;
          let div = document.createElement("div");

          let title = document.createElement("h5");
          title.innerText = el.title ;

          let image = document.createElement("img");
          image.src = el.image;

          let price = document.createElement("p");
          price.innerText = el.price;

          let description = document.createElement("p");
          description.innerText =el.description ;

          let btn = document.createElement("button");
          btn.setAttribute("id","add_to_bucket");
          btn.innerText = "Add To Bucket"
          div.append(title,image,price,description , btn);
          menu.append(div);

        //   length count 


        var total = bucket.reduce(function (sum, elem, index, arr) {
          return sum + Number(elem.price);
        }, 0);

        var length = bucket.length;
        console.log(length);
        let count = document.getElementById("coffee_count");
        count.innerText = `${length}`

        console.log(total);
  


        //   Add to data in local Storage in bucket

          btn.addEventListener("click", function () {
            addToBucket(el);
          });

          function addToBucket(el) {
            data.push(el);
            console.log(data);
            localStorage.setItem("coffee", JSON.stringify(data));
            alert("Coffee , Add To Bucket");
          }
        });

       
    
    }

      