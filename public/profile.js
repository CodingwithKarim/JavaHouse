const checkMark = document.getElementsByClassName("fa-check-square");
Array.from(checkMark).forEach(function(element) {
    element.addEventListener('click', function(e){
      console.log(this.parentNode.parentNode.childNodes)
      const array = e.target.dataset.name.split(',')
      const barista = e.target.dataset.value
      console.log(barista)
      // const yellText =  `Sup ${name}, your order of ${order} is completed`
      // let yellThis = new SpeechSynthesisUtterance(yellText);
      // synth.speak(yellThis);
      fetch('messages', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        'array': array,
        'barista': barista
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
    });
});