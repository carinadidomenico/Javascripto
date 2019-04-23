    do {
        senha = prompt ("Digite sua senha.");
        if (senha == "1234"){
            alert ("Você está no sistema!");
        } else {
            alert ("Senha errada, tente novamente.")
        }
    } while (senha != "1234");