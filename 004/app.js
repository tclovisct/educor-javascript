document.getElementById('frutas').innerHTML = '<h2>Frutas</h2>'

document.getElementById('filmes').innerHTML = '<h2>Filmes</h2>'

document.getElementById('tarefas').innerHTML = '<h2>Tarefas</h2>'

//Declarando um array
let frutas = new Array("Maçã","Morango","Pêra")

let filmes = []

let tarefas = [
    "Ir ao supermercado",
    "Estudar para a prova",
    "Ir para a academia"
]

//acessando um item do array
document.getElementById('frutas').innerHTML += frutas[1] + '<br>'
document.getElementById('frutas').innerHTML += frutas[2] + '<br>'
document.getElementById('frutas').innerHTML += frutas[0] + '<br>'

console.table(frutas)

//adicionar um item ao array
frutas[3] = "Banana" // adiciona manualmente em um indice que não existe (final)
console.table(frutas)

console.log(frutas.length)
frutas[frutas.length] = 'Pêssego' // adiciona a partir do tamanho do array 
console.table(frutas)

frutas.push("Mexirica") // Adiciona um valor ao final do array
console.table(frutas)

frutas.unshift("Abacaxi")// adiciona um novo valor na primeira posição do array
console.table(frutas)

//remover um item do array
frutas.pop() // remove um item do final do array
console.table(frutas)

frutas.shift() // remove um item do inicio do array
console.table(frutas)

let posicao = frutas.indexOf('Morango') // retorna o índice de um elemento no array
console.log(posicao)
frutas.splice(posicao,1) // remove 1 elemento do array a partir do índice
console.table(frutas)

