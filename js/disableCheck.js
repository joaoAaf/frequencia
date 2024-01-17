let repetir = document.getElementById('checkRepetir')

let aleatorio = document.getElementById('checkAleatorio')

function desativar(elemento1, elemento2) {
    if (!elemento1.checked) {
        elemento2.disabled = false
    }
    else {
        elemento2.disabled = true
    }
}