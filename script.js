window.addEventListener('DOMContentLoaded', function(event) {
    
    const getNumber = document.querySelector('#getNumber');

    getNumber.addEventListener('click', function() {
        const numberValue = document.querySelector('#number').value;
        const resultado = document.querySelector ('#resultado');
        
        if (isNaN(numberValue) || numberValue == "" || numberValue == " ") {
            resultado.innerHTML = ("Por favor digite um número.");
        }
        else if (numberValue == 0){
            resultado.innerHTML = (`${numberValue} é neutro`);
        }
        else if (numberValue > 0){
            resultado.innerHTML = (`${numberValue} é positivo`)
        }
        else {
            resultado.innerHTML = (`${numberValue} é neutro`);
        }

    })

  });