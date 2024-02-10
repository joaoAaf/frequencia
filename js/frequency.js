let dados = JSON.parse(localStorage.getItem('frequencyData'))

function criaDia(dia) {
    let tr = document.createElement('tr')
    let num = dia[2].getDay()
    for (j = 0; j < dia.length; j++) {
        let td = document.createElement('td')
        td.style = "border: 0.5px solid black"
        if (j == 2) {
            td.innerHTML = dia[2].getDate()
        }
        else {
            switch (num) {
                case 0:
                    let strong1 = document.createElement('strong')
                    strong1.innerHTML = "DOMINGO"
                    td.appendChild(strong1)
                    break
                case 6:
                    let strong2 = document.createElement('strong')
                    strong2.innerHTML = "SABADO"
                    td.appendChild(strong2)
                    break
                default:
                    td.innerHTML = defineHorario(dia[j])
                    break
            }
        }
        tr.appendChild(td)
    }
    return tr
}

function verificaAusencia(dataHora) {
    let indiceAusencia = -1
    if (dados.ausencia.nome.length > 0) {
        for (k = 0; k < dados.ausencia.nome.length; k++) {
            if (dataHora >= new Date(dados.ausencia.inicio[k] + "T00:00") && dataHora <= new Date(dados.ausencia.fim[k] + "T23:59")) {
                indiceAusencia = k
                break
            }
        }
    }
    return indiceAusencia
}

function defineHorario(dataHora) {
    let indiceAusencia = verificaAusencia(dataHora)
    if (indiceAusencia >= 0) {
        return dados.ausencia.nome[indiceAusencia]
    }
    else if (dados.repetir == true || (dados.aleatorio == true && dados.repetir == true)) {
        return dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
    else if (dados.aleatorio == true) {
        const horaAleatoria = new Date(dataHora)
        let num = Math.floor(Math.random() * 5) - 2
        horaAleatoria.setMinutes(dataHora.getMinutes() + num)
        return horaAleatoria.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
    else {
        return ""
    }
}

document.getElementById('servidor').innerHTML = dados.nome
document.getElementById('matricula').innerHTML = dados.matricula
document.getElementById('cargo').innerHTML = dados.cargo
document.getElementById('funcao').innerHTML = dados.funcao
document.getElementById('lotacao').innerHTML = dados.lotacao
document.getElementById('setor').innerHTML = dados.setor
document.getElementById('jornada').innerHTML = dados.jornada + " Horas Semanais"
document.getElementById('entrada').innerHTML = dados.entrada1
document.getElementById('saida').innerHTML = dados.saida2
document.getElementById('assServidor').innerHTML = dados.nome.toUpperCase()
document.getElementById('assCargo').innerHTML = dados.cargo
document.getElementById('chefia').innerHTML = dados.chefia.toUpperCase()
document.getElementById('cargoChefia').innerHTML = dados.cargoChefia

let tbody = document.getElementById('tboby_frequency')

const dia = [new Date(dados.ano + "-" + dados.mes + "-01T" + dados.entrada1), new Date(dados.ano + "-" + dados.mes + "-01T" + dados.saida1),
new Date(dados.ano + "-" + dados.mes + "-01T00:00"), new Date(dados.ano + "-" + dados.mes + "-01T" + dados.entrada2),
new Date(dados.ano + "-" + dados.mes + "-01T" + dados.saida2)]

const ultimoDia = new Date(dados.ano + "-" + dados.mes + "-01T00:00")
ultimoDia.setMonth(ultimoDia.getMonth() + 1)
ultimoDia.setDate(ultimoDia.getDate() - 1)

for (i = 1; i <= ultimoDia.getDate(); i++) {
    tbody.appendChild(criaDia(dia))
    // dia[2].setDate(dia[2].getDate() + 1)
    for (j = 0; j < 5; j++) {
        dia[j].setDate(dia[j].getDate() + 1)
    }
}

let tr = document.createElement('tr')
for (i = 0; i < 5; i++) {
    let td = document.createElement('td')
    td.style = "background-color:darkgray; height: 25px"
    tr.appendChild(td)
}
tbody.appendChild(tr)