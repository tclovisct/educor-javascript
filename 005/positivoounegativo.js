function VerificarNumero(){
    let n1 = document.getElementById("numero").value
    n1 = parseInt(n1)

    // Estrutura de decisão if
    if(n1 >= 1){
        //bloco de código executado se a condição for verdadeira
        document.getElementById("resultado").innerHTML = "Número <b>positivo</b>"
    }else if(n1 == 0){
        document.getElementById("resultado").innerHTML = "Número <b>neutro</b>"
    }else{
        //bloco de código executado se a condição for falsa
        document.getElementById("resultado").innerHTML = "Número <strong>negativo</strong>"
    }
}