var count = 1

function criaAusencia() {
    let div = document.getElementById('ausencias')
    let br0 = document.createElement('br')
    let select = document.createElement('select')
    select.className = "form-control"
    select.id = "inputAusencia" + count
    let option0 = document.createElement('option')
    option0.value = ""
    option0.innerHTML = "Selecione o Tipo de Ausencia"
    select.appendChild(option0)
    let option1 = document.createElement('option')
    option1.value = "Férias"
    option1.innerHTML = "Férias"
    select.appendChild(option1)
    let option2 = document.createElement('option')
    option2.value = "Licença Trat. Saúde"
    option2.innerHTML = "Licença Trat. Saúde"
    select.appendChild(option2)
    let option3 = document.createElement('option')
    option3.value = "Licença"
    option3.innerHTML = "Licença"
    select.appendChild(option3)
    div.appendChild(br0)
    div.appendChild(select)
    div = document.getElementById('ausenciasInicio')
    let br1 = document.createElement('br')
    let inputInicio = document.createElement('input')
    inputInicio.className = "form-control"
    inputInicio.type = "date"
    inputInicio.id = "inputInicio" + count
    div.appendChild(br1)
    div.appendChild(inputInicio)
    div = document.getElementById('ausenciasFim')
    let br2 = document.createElement('br')
    let inputFim = document.createElement('input')
    inputFim.className = "form-control"
    inputFim.type = "date"
    inputFim.id = "inputFim" + count
    div.appendChild(br2)
    div.appendChild(inputFim)
    count += 1
}