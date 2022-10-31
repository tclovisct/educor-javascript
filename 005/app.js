let filmes = [
    "Star Wars VI - O retorno de Jedi",
    "Harry Potter e a pedra filosofal",
    "Rocky V",
    "Homem-aranha",
    "A bruxa",
    "Pantera negra",
    "Vingadores"
]

document.getElementById("titulo").innerHTML = "Filmes"

let conteudo = document.getElementById("conteudo")
conteudo.innerHTML = filmes
conteudo.innerHTML += "<h3>Número de posições do Array</h3>"
conteudo.innerHTML += filmes.length
conteudo.innerHTML += "<ul>"

/*
LAÇO WHILE
let i = 0
while(i < 5){
    //bloco de código
    conteudo.innerHTML += "<li>" + filmes[i] + "</li>"
    console.log(i)
    i++ //i = i + 1
}
*/

/*
LAÇO FOR
filmes.sort() //ordenação do array
for(let i = 0; i < filmes.length ; i++){
    conteudo.innerHTML += "<li>" + filmes[i] + "</li>"
}
*/

filmes.sort()
filmes.forEach(function(elemento){
    conteudo.innerHTML += "<li>" + elemento + "</li>"
})


// conteudo.innerHTML += "<li>" + filmes[1] + "</li>"
// conteudo.innerHTML += "<li>" + filmes[2] + "</li>"
// conteudo.innerHTML += "<li>" + filmes[3] + "</li>"
// conteudo.innerHTML += "<li>" + filmes[4] + "</li>"
conteudo.innerHTML += "</ul>"
