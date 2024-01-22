let dados = JSON.parse(localStorage.getItem('frequencyData'))

if (dados != null) {
    document.getElementById("inputNome").value = dados.nome
    document.getElementById("inputMatricula").value = dados.matricula
    document.getElementById("inputCargo").value = dados.cargo
    document.getElementById("inputFuncao").value = dados.funcao
    document.getElementById("inputLotacao").value = dados.lotacao
    document.getElementById("inputSetor").value = dados.setor
    document.getElementById("inputChefia").value = dados.chefia
    document.getElementById("inputcargoChefia").value = dados.cargoChefia
    document.getElementById("inputMes").value = dados.mes
    document.getElementById("inputAno").value = dados.ano
    document.getElementById("inputJornada").value = dados.jornada
    document.getElementById("inputEntrada1").value = dados.entrada1
    document.getElementById("inputSaida1").value = dados.saida1
    document.getElementById("inputEntrada2").value = dados.entrada2
    document.getElementById("inputSaida2").value = dados.saida2
}

function limparDados() {
    localStorage.clear()
}
