const size = document.querySelectorAll('.size')
const coffee = document.querySelectorAll('.coffee')
const diary = document.querySelectorAll('.diary')
const flavor = document.querySelectorAll('.flavor')
const submit = document.querySelector('#submit')
let array = ['', '', '', '']

Array.from(size).forEach(function(element) {
element.addEventListener('click', function(e){
array[0] = e.target.innerText
console.log(array)
})
})

Array.from(coffee).forEach(function(element) {
element.addEventListener('click', function(e){
array[1] = e.target.innerText
console.log(array)
})
})

Array.from(diary).forEach(function(element) {
  element.addEventListener('click', function(e){
  array[2] = e.target.innerText
  console.log(array)
  })
  })

Array.from(flavor).forEach(function(element) {
    element.addEventListener('click', function(e){
    array[3] = e.target.innerText
    console.log(array)
    })
    })

submit.addEventListener('click', function(){
let name = document.querySelector('.input').value
  fetch('javahouse', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'array': array,
      'name': name,
    })
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
});


