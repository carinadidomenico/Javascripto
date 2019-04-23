window.addEventListener('DOMContentLoaded', function() {
    let botao = document.querySelector ("#botao");
    let resultado = document.querySelector ("#resultado");
    let resposta = document.querySelector ("#resposta");
    let nota1 = document.querySelector("#nota1");
    let nota2 = document.querySelector("#nota2");
    
    botao.addEventListener('click', function() {
        let media = (parseFloat(nota1.value) + parseFloat(nota2.value))/2;
        resultado.innerHTML = media;

        if(media >=5) {
            resposta.innerHTML = ("Parabéns! Você foi aprovado.");
        } 
        else if (media < 5){
            resposta.innerHTML = ("Você foi reprovado.");
        }

        else {
            resultado.innerHTML = (" ")
            resposta.innerHTML = ("Digite um número válido.")
        }
    });
});