window.addEventListener('DOMContentLoaded', function(event){

    let pais = document.querySelector('#pais');
    let resultado = document.querySelector('#resultado');
    
    pais.addEventListener('click', function(){
        resultado.innerHTML = ''
        let divCidade = document.querySelector('.cidade')
        if(pais.value == 'brasil'){            
            let cidade = document.querySelector ('#cidade')
            
            divCidade.style.display = "block"

        
            cidade.addEventListener('click', function(){

                if(cidade.value == 'caxias-sul'){
                    resultado.innerHTML = ('Um ovo de chocolate ao leite e um ovo de chocolate branco');

                } else if (cidade.value == 'porto-alegre'){
                    resultado.innerHTML = ('Um ovo de chocolate ao amargo e um ovo de chocolate ao leite');

                } else if (cidade.value == 'sao-paulo'){
                    resultado.innerHTML = ('Duas caixas de bombons');

                } else {
                    resultado.innerHTML = ''
                    
                }

            });

        } else if(pais.value == 'australia') {
            resultado.innerHTML = ('Dois ovos de chocolate branco')
            divCidade.style.display = "none"
        } else if(pais.value == 'eua') {
            resultado.innerHTML = ('Dois ovos de chocolate ao leite')
            divCidade.style.display = "none"
        } else if (pais.value == 'londres'){
            resultado.innerHTML = ('Dois ovos de chocolate amargo')
            divCidade.style.display = "none"
        } else {
            resultado.innerHTML = ''
            divCidade.style.display = "none"
        }

    });

    
});