window.addEventListener('DOMContentLoaded', function() {
    
    let gatos = [" Tigresa", " Nina", " Rabicho", " Salem", " Tom", " Frajola", " Miolo", " Chaplin"];
    let quantidade = document.querySelector("#quantidade");
    let lista = document.querySelector ("#gatos");

    gatos.forEach(function(gato) {
        console.log(gato);
        quantidade.innerHTML = ("Minha lista tem: " + gatos.length + " gatos");
      });

  });




