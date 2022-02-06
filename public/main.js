let serverArray = []
let submit = document.querySelector('.submitOrder')
let drinks = document.getElementsByName('drink')
let ice = document.getElementsByName('ice')
let sugar = document.getElementsByName('sugar')
let priceText = document.getElementById('price')
let priceArray = []

Array.from(sugar).forEach(function(element){
  element.addEventListener('click', function(e){
  serverArray[2] = e.target.value
  document.querySelector('.sugar').innerText = e.target.value
  priceArray[1] = .50
  document.getElementById('price').innerText = priceArray.
  reduce((a,b)=> a + b,0)
  
  })
})

Array.from(ice).forEach(function(element){
  element.addEventListener('click', function(e){
  serverArray[1] = e.target.value
  document.querySelector('.ice').innerText = e.target.value
  priceArray[2] = .75
  document.getElementById('price').innerText = priceArray.
  reduce((a,b)=> a + b,0)
  })
})


Array.from(drinks).forEach(function(element){
  element.addEventListener('click', function(e){
  serverArray[0] = e.target.value
  document.querySelector('.drinkName').innerText = e.target.value
  priceArray[0] = 12
  document.getElementById('price').innerText = priceArray.
  reduce((a,b)=> a + b,0)
  })
})

function handleErrors(){
  console.log(document.querySelector('#name'))
  if(document.querySelector('#name').value === ''){
    alert('Input Name Please!')
    return
  }
  if(serverArray != 3){
    alert('Please Finish Your Order!')
    return
  }
}

// Array.from(size).forEach(function(element) {
// element.addEventListener('click', function(e){
// array[0] = e.target.innerText
// console.log(array)
// })
// })

// Array.from(coffee).forEach(function(element) {
// element.addEventListener('click', function(e){
// array[1] = e.target.innerText
// console.log(array)
// })
// })

// Array.from(diary).forEach(function(element) {
//   element.addEventListener('click', function(e){
//   array[2] = e.target.innerText
//   console.log(array)
//   })
//   })

// Array.from(flavor).forEach(function(element) {
//     element.addEventListener('click', function(e){
//     array[3] = e.target.innerText
//     console.log(array)
//     })
//     })

 

submit.addEventListener('click', function(){
  let name = document.querySelector('#name').value
  fetch('javahouse', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'serverArray': serverArray,
      'name': name,
    })
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
})


