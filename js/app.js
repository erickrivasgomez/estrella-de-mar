validateNK = () => {
    let nk = document.getElementById("auth").value
    nk = nk.toLowerCase()
    nk = sha256(nk)
    if (nk == '1ea10ab4d457d691d4de496edf1cb3758795a28682250dc517dbf061f1994d6c') {
        let elemento = document.getElementById("secret")
        elemento.style.display = "block"
        elemento = document.getElementById("only-nk-allowed")
        elemento.style.display = "none"
        elemento = document.getElementById("estrella-de-mar-audio")
        elemento.play()
    }
    else {
        alert('¡Respuesta incorrecta!')
    }
}