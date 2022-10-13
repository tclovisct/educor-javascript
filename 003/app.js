/* Operadores */

let n1, n2

n1 = 10
n2 = 2

document.write("N1 + N2 = " + n1+n2 + "<br>")
document.write("N1 - N2 = " + n1-n2 + "<br>")
document.write("N1 / N2 = " + n1/n2 + "<br>")
document.write("N1 * N2 = " + n1*n2 + "<br")

let nome, sobrenome
nome = "João"
sobrenome = "Paulo"

document.write(nome + sobrenome + "<br>")

document.write('N1 % N2 =' + n1%n2 + "<br>")

document.write('N1 ** N2 = ' + n1**n2 + "<br")

document.write(Math.sqrt(16))

function somar(){
    let v1,v2
    v1 = parseFloat(document.getElementById("valor1").value)
    console.log(v1)
}