let serverArray = [];
let submit = document.querySelector(".submitOrder");
let drinks = document.getElementsByName("drink");
let ice = document.getElementsByName("ice");
let sugar = document.getElementsByName("sugar");
let priceText = document.getElementById("price");
let priceArray = [];

Array.from(sugar).forEach(function (element) {
  element.addEventListener("click", function (e) {
    serverArray[2] = e.target.value;
    document.querySelector(".sugar").innerText = e.target.value;
    e.target.value === "No Sugar" ? (priceArray[1] = 0) : (priceArray[1] = 0.5);
    document.getElementById("price").innerText = priceArray.reduce(
      (a, b) => a + b,
      0
    );
  });
});

Array.from(ice).forEach(function (element) {
  element.addEventListener("click", function (e) {
    serverArray[1] = e.target.value;
    document.querySelector(".ice").innerText = e.target.value;
    e.target.value === "No Ice" ? (priceArray[2] = 0) : (priceArray[2] = 0.75);
    document.getElementById("price").innerText = priceArray.reduce(
      (a, b) => a + b,
      0
    );
  });
});

Array.from(drinks).forEach(function (element) {
  element.addEventListener("click", function (e) {
    serverArray[0] = e.target.value;
    document.querySelector(".drinkName").innerText = e.target.value;
    priceArray[0] = 12;
    document.getElementById("price").innerText = priceArray.reduce(
      (a, b) => a + b,
      0
    );
  });
});

function handleErrors() {
  if (document.querySelector("#name").value === "" || serverArray.length != 3) {
    alert("Please Finish Your Order");
   return false
  }
  return true
}

submit.addEventListener("click", function () {
 if(!handleErrors()) {return}
  let name = document.querySelector("#name").value;
  fetch("javahouse", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      serverArray: serverArray,
      name: name,
    }),
  }).then((data) => {
    window.location.reload(true);
  });
});
