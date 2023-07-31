var jogador, vencedor = null
var jogadorSelecionado = document.getElementById('jogador-selecionado')
var vencedorSelecionado = document.getElementById('vencedor-selecionado')
var quadrados = document.getElementsByClassName('quadrado')

mudarJogador('X')

function escolherQuardado(id) {
    console.log('clicou no quadrado' , + id)

    if(vencedor !== null){
        return
    }

    var quadrado = document.getElementById(id)
    if(quadrado.innerHTML !== '-'){
        return
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#fff'

    if(jogador === 'X') {
        jogador = 'O'
    }else{
        jogador = 'X'
    }

    mudarJogador(jogador)
    checaVencedor()
}

function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checaVencedor() {
    var quadrado1 = document.getElementById('1')
    var quadrado2 = document.getElementById('2')
    var quadrado3 = document.getElementById('3')
    var quadrado4 = document.getElementById('4')
    var quadrado5 = document.getElementById('5')
    var quadrado6 = document.getElementById('6')
    var quadrado7 = document.getElementById('7')
    var quadrado8 = document.getElementById('8')
    var quadrado9 = document.getElementById('9')

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudaBackground(quadrado1, quadrado2, quadrado3)
        mudaVencedor(quadrado1)
        return
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudaBackground(quadrado4, quadrado5, quadrado6)
        mudaVencedor(quadrado4)
        return
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudaBackground(quadrado7, quadrado8, quadrado9)
        mudaVencedor(quadrado7)
        return
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudaBackground(quadrado1, quadrado4, quadrado7)
        mudaVencedor(quadrado1)
        return
    }

    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaBackground(quadrado2, quadrado5, quadrado8)
        mudaVencedor(quadrado2)
        return
    }

    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaBackground(quadrado3, quadrado6, quadrado9)
        mudaVencedor(quadrado3)
        return
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaBackground(quadrado1, quadrado5, quadrado9)
        mudaVencedor(quadrado1)
        return
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudaBackground(quadrado3, quadrado5, quadrado7)
        mudaVencedor(quadrado3)
        return
    }
}

function mudaVencedor(quadrado) {
    vencedor = quadrado.innerHTML
    vencedorSelecionado.innerHTML = vencedor
}

function mudaBackground(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#007300'
    quadrado2.style.background = '#007300'
    quadrado3.style.background = '#007300'
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    var eigual = false
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true
    }

    return eigual
}

function restart(){
    vencedor = null
    vencedorSelecionado.innerHTML = ''

    for (var i = 1; i <= 9; i++){
        var quadrado = document.getElementById(i)

        quadrado.style.background = '#222'
        quadrado.style.color = '#222'
        quadrado.innerHTML= '-'
    }

    mudarJogador ('X')
}