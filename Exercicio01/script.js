function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = 22

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'IMGS/manha.jpg'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'IMGS/tarde.jpg'
        document.body.style.background = '#b9846f'

    } else {
        //BOA NOITE!
        img.src = 'IMGS/noite.jpg'
        document.body.style.background = '#515154'
    }
}


