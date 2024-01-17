let data = JSON.parse(localStorage.getItem('frequencyData'))

if (data != null) {
    let nome = document.getElementById("inputNome")
    nome.value = data.nome
    let matricula = document.getElementById("inputMatricula")
    matricula.value = data.matricula
    let cargo = document.getElementById("inputCargo")
    cargo.value = data.cargo
    let funcao = document.getElementById("inputFuncao")
    funcao.value = data.funcao
    let lotacao = document.getElementById("inputLotacao")
    lotacao.value = data.lotacao
    let setor = document.getElementById("inputSetor")
    setor.value = data.setor
    let chefia = document.getElementById("inputChefia")
    chefia.value = data.chefia
    let cargoChefia = document.getElementById("inputcargoChefia")
    cargoChefia.value = data.cargoChefia
    let mes = document.getElementById("inputMes")
    mes.value = data.mes
    let ano = document.getElementById("inputAno")
    ano.value = data.ano
    let jornada = document.getElementById("inputJornada")
    jornada.value = data.jornada
    let entrada1 = document.getElementById("inputEntrada1")
    entrada1.value = data.horarios[0]
    let saida1 = document.getElementById("inputSaida1")
    saida1.value = data.horarios[1]
    let entrada2 = document.getElementById("inputEntrada2")
    entrada2.value = data.horarios[2]
    let saida2 = document.getElementById("inputSaida2")
    saida2.value = data.horarios[3]
}

function limparDados() {
    localStorage.clear()
}
