function alerta() {
    const toastLive = document.getElementById('liveToast')
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive)
    toastBootstrap.show()
}

function geraHtml() {
    let frequency = document.getElementById('frequency')
    let stringHtml = frequency.innerHTML
    navigator.clipboard.writeText(stringHtml)
    alerta()
}