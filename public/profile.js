const checkMark = document.getElementsByClassName("fa-check-square");
const synth = window.speechSynthesis
Array.from(checkMark).forEach(function(element) {
    element.addEventListener('click', function(e){
      let init = e.target.dataset.name
      let order = e.target.dataset.array
      let barista = e.target.dataset.barista
      const yellText =  `Hi, the order of a ${order} was completed by ${barista}`
      let yellThis = new SpeechSynthesisUtterance(yellText);
      synth.speak(yellThis);
      fetch('messages', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
        'init': init,
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