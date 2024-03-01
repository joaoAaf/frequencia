var count = 1

function inputAusencia() {
    let select = document.createElement('select')
    select.className = "form-control"
    select.id = "inputAusencia" + count
    select.onchange = () => inputOutra(select)
    let option0 = document.createElement('option')
    option0.value = ""
    option0.innerHTML = "Selecione o Tipo de Ausencia"
    select.appendChild(option0)
    let option1 = document.createElement('option')
    option1.value = "Férias"
    option1.innerHTML = "Férias"
    select.appendChild(option1)
    let option2 = document.createElement('option')
    option2.value = "Licença"
    option2.innerHTML = "Licença"
    select.appendChild(option2)
    let option3 = document.createElement('option')
    option3.value = "Licença Trat. Saúde"
    option3.innerHTML = "Licença Trat. Saúde"
    select.appendChild(option3)
    let option4 = document.createElement('option')
    option4.value = "Recesso"
    option4.innerHTML = "Recesso"
    select.appendChild(option4)
    let option5 = document.createElement('option')
    option5.value = "Feriado"
    option5.innerHTML = "Feriado"
    select.appendChild(option5)
    let option6 = document.createElement('option')
    option6.value = "Trabalho Remoto"
    option6.innerHTML = "Trabalho Remoto"
    select.appendChild(option6)
    let option7 = document.createElement('option')
    option7.value = "Outra"
    option7.innerHTML = "Outra"
    select.appendChild(option7)
    return select
}

function inputInicioFim(prefixId, numId) {
    let input = document.createElement('input')
    input.className = "form-control"
    input.type = "date"
    input.id = prefixId + numId
    return input
}


function criaAusencia() {
    let div = document.getElementById('ausencias')
    let br0 = document.createElement('br')
    let select = inputAusencia()
    div.appendChild(br0)
    div.appendChild(select)
    div = document.getElementById('ausenciasInicio')
    let br1 = document.createElement('br')
    let inputInicio = inputInicioFim("inputInicio", count)
    div.appendChild(br1)
    div.appendChild(inputInicio)
    div = document.getElementById('ausenciasFim')
    let br2 = document.createElement('br')
    let inputFim = inputInicioFim("inputFim", count)
    div.appendChild(br2)
    div.appendChild(inputFim)
    count += 1
}

function inputOutra(select) {
    if (select.value == "Outra") {
        numId = select.id[select.id.length - 1]
        let inputOutro = document.createElement('input')
        inputOutro.className = "form-control"
        inputOutro.id = select.id
        inputOutro.type = "text"
        let div = document.getElementById('ausencias')
        div.removeChild(select)
        div = document.getElementById('ausenciasInicio')
        let inputInicio = document.getElementById('inputInicio' + numId)
        div.removeChild(inputInicio)
        div = document.getElementById('ausenciasFim')
        let inputFim = document.getElementById('inputFim' + numId)
        div.removeChild(inputFim)
        div = document.getElementById('ausencias')
        div.appendChild(inputOutro)
        div = document.getElementById('ausenciasInicio')
        inputInicio = inputInicioFim("inputInicio", numId)
        div.appendChild(inputInicio)
        div = document.getElementById('ausenciasFim')
        inputFim = inputInicioFim("inputFim", numId)
        div.appendChild(inputFim)
    }
}