let data = new Date()

let resposta = document.getElementById("resposta")
resposta.innerHTML = data
resposta.innerHTML += `<br>Dia da semana: <b>${data.getDay()}`

if (data.getDay() == 0) {
    resposta.innerHTML += "<br>Domingo"
} else if (data.getDay() == 1) {
    resposta.innerHTML += "<br>Segunda"
} else if (data.getDay() == 2) {
    resposta.innerHTML += "<br>Terça"
} else if (data.getDay() == 3) {
    resposta.innerHTML += "<br>Quarta"
} else if (data.getDay() == 4) {
    resposta.innerHTML += "<br>Quinta"
} else if (data.getDay() == 5) {
    resposta.innerHTML += "<br>Sexta"
} else {
    resposta.innerHTML += "<br>Sábado"
}

switch (data.getDay()) {
    case 0:
        resposta.innerHTML += "<b>Domingo</b>"
        break
    case 1:
        resposta.innerHTMl += "<b>Segunda</b>"
        break
    case 2:
        resposta.innerHTML += "<b>Terça</b>"
        break
    case 3:
        resposta.innerHTML += "<b>Quarta</b>"
        break
    case 4:
        resposta.innerHTML += "<b>Quinta</b>"
        break
    case 5:
        resposta.innerHTML += "<b>Sexta</b>"
        break
    case 6:
        resposta.innerHTML += "<b>Sábado</b>"
        break
    default:
        resposta.innerHTML += "<b>Outro dia</b>"
        break
}

let diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

resposta.innerHTML = `<br> ${diasDaSemana[data.getDay()]}`