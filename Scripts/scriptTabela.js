var cartaJames = {
    nome: "Reno Jackson",
    imagem: "https://i.pinimg.com/originals/7c/40/c0/7c40c004b142508c894d37014214f597.jpg",
    atributos: {
        ataque: 60,
        defesa: 40,
        magia: 90
    }
}

var cartaLeticia = {
    nome: "Rei Mó",
    imagem: "https://hearthstone-wiki-thumb.s3.amazonaws.com/Rei_M%C3%B3_Arte.jpg/550px-Rei_M%C3%B3_Arte.jpg",
    atributos: {
        ataque: 100,
        defesa: 80,
        magia: 0
    }
}

var cartaArnaldo = {
    nome: "Maui",
    imagem: "http://pm1.narvii.com/6366/dfb08a31625acc2350ac2f76ff076a77955757a3_00.jpg",
    atributos: {
        ataque: 90,
        defesa: 72,
        magia: 95
    }
}

var cartaBeatriz = {
    nome: "Moana",
    imagem: "https://i.pinimg.com/originals/92/2e/f7/922ef70461fc6ebf42e65c6de4da53ae.jpg",
    atributos: {
        ataque: 20,
        defesa: 42,
        magia: 10
    }
}

var cartaGabriella = {
    nome: "Madara",
    imagem: "http://pm1.narvii.com/6395/6b5bec12637d3f8809178d6ed4236490e0a7df3b_00.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 70
    }
}

var cartaPedro = {
    nome: "Monkey d. Luffy",
    imagem: "https://i.pinimg.com/564x/e9/52/53/e9525328d19b1b917fd1dc25351e37d2.jpg",
    atributos: {
        ataque: 70,
        defesa: 88,
        magia: 30
    }
}

var cartaFernanda = {
    nome: "Louis Armstrong",
    imagem: "https://i.pinimg.com/originals/85/fb/66/85fb660296da669f3a11bb5d88f20abc.jpg",
    atributos: {
        ataque: 100,
        defesa: 78,
        magia: 60
    }
}

var cartaMatheus = {
    nome: "l",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/74/Lawliet.jpg",
    atributos: {
        ataque: 30,
        defesa: 60,
        magia: 0
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaJames, cartaLeticia, cartaArnaldo, cartaBeatriz, cartaGabriella, cartaPedro, cartaFernanda, cartaMatheus]
//            0           1           2          3         4            5            6           7          

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if (cartas.length == 0) {
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina) {
            htmlResultado = '<p class="resultado-final">Venceu</p>'
        } else if (pontosMaquina > pontosJogador) {
            htmlResultado = '<p class="resultado-final">Perdeu</p>'
        } else {
            htmlResultado = '<p class="resultado-final">Empatou</p>'
        }
    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        console.log(atributo)
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true

    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
}