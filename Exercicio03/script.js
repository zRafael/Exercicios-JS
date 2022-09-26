function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')

    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)


    if (inicio.value == 0 || fim.value == 0 || passo.value == 0) {
        alert('Está faltando dados!')
    }
    else if (inicio.value < fim.value) {

        for (var contador = i; contador <= f; contador += p) {
            resultado.style.display = 'block'
            resultado.innerHTML += `${contador} \u{1F449} <br>`
        }
    }
    else if (inicio.value > fim.value) {

        for (var contador = i; contador >= f; contador -= p) {
            resultado.style.display = 'block'
            resultado.innerHTML += `${contador} \u{1F449} <br>`
        }
    }

    resultado.innerHTML += `\u{1F3C1}`

}


