let register = document.getElementById("register")

register.addEventListener("submit", async function (event) {
    event.preventDefault()

    let data = {
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
        "saida2": document.getElementById("inputSaida2").value
    }
    localStorage.setItem('frequencyData', JSON.stringify(data))
    window.location.href = "/html/frequency.html"
})