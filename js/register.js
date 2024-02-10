let register = document.getElementById("register")

register.addEventListener("submit", async function (event) {
    event.preventDefault()

    let ausencia = {
        "nome": [],
        "inicio": [],
        "fim": []
    }

    if (document.getElementById("inputAusencia0").value != "") {
        for (i = 0; i < count; i++) {
            ausencia.nome.push(document.getElementById("inputAusencia" + i).value)
            ausencia.inicio.push(document.getElementById("inputInicio" + i).value)
            ausencia.fim.push(document.getElementById("inputFim" + i).value)
        }
    }

    let dados = {
        "nome": document.getElementById("inputNome").value,
        "matricula": document.getElementById("inputMatricula").value,
        "cargo": document.getElementById("inputCargo").value,
        "funcao": document.getElementById("inputFuncao").value,
        "lotacao": document.getElementById("inputLotacao").value,
        "setor": document.getElementById("inputSetor").value,
        "chefia": document.getElementById("inputChefia").value,
        "cargoChefia": document.getElementById("inputcargoChefia").value,
        "mes": document.getElementById("inputMes").value,
        "ano": document.getElementById("inputAno").value,
        "jornada": document.getElementById("inputJornada").value,
        "entrada1": document.getElementById("inputEntrada1").value,
        "saida1": document.getElementById("inputSaida1").value,
        "entrada2": document.getElementById("inputEntrada2").value,
        "saida2": document.getElementById("inputSaida2").value,
        "ausencia": ausencia,
        // "ausenciaInicio": document.getElementById("inputInicio").value,
        // "ausenciaFim": document.getElementById("inputFim").value,
        "repetir": document.getElementById("checkRepetir").checked,
        "aleatorio": document.getElementById("checkAleatorio").checked
    }
    localStorage.setItem('frequencyData', JSON.stringify(dados))
    window.location.href = "/html/frequency.html"
})
