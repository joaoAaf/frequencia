function criaDia(dia) {
    let tr = document.createElement('tr')
    let num = dia[2].getDay()
    for (j = 0; j < dia.length; j++) {
        let td = document.createElement('td')
        td.className = "td_horarios"
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
                    td.innerHTML = opcaoHorario(dia[j])
                    break
            }
        }
        tr.appendChild(td)
    }
    return tr
}

function opcaoHorario(hora) {
    if (repetir == true || (aleatorio == true && repetir == true)) {
        return hora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
    else if (aleatorio == true) {
        const horaAleatoria = new Date(hora)
        let num = Math.floor(Math.random() * 19) - 9
        horaAleatoria.setMinutes(hora.getMinutes() + num)
        return horaAleatoria.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
    else {
        return ""
    }
}

let tbody = document.getElementById('tboby_frequency')

const ultimoDia = new Date(dia[0])
ultimoDia.setMonth(ultimoDia.getMonth() + 1)
ultimoDia.setDate(ultimoDia.getDate() - 1)

dia.splice(2, 0, dia[0])
const horasDia = []

for (i = 0; i < 5; i++) {
    horasDia.push(new Date(dia[i]))
}

for (i = 1; i <= ultimoDia.getDate(); i++) {
    tbody.appendChild(criaDia(horasDia))
    horasDia[2].setDate(horasDia[2].getDate() + 1)
}

let tr = document.createElement('tr')
for (i = 0; i < 5; i++) {
    let td = document.createElement('td')
    td.style = "background-color:darkgray; height: 25px"
    tr.appendChild(td)
}
tbody.appendChild(tr)



