window.addEventListener('DOMContentLoaded', function() {
    
    let escolha = document.querySelector ("button");
    

    botao.addEventListener('click', function() {

      if (escolha.value == "2012"){
        escolha.style.background = "green";
      }
      else {
        escolha.style.background = "red";
      }

      });


  });


//   clicar na opção
//   armazenar valor
//   contar um "voto" para o herói
// o que tiver mais votos aparece na tela