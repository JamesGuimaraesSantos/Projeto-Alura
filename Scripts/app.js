// INICIO - Logica - CALCULADORA - 
function multiplicacao(){
    var primeiroValor = parseInt(document.getElementById('primeiroValor').value)
    var segundoValor = parseInt(document.getElementById('segundoValor').value)
    var resultadoMultiplicacao = primeiroValor * segundoValor
    document.getElementById('resultadoCalculadora').innerHTML = resultadoMultiplicacao
}
function divisao(){
    var primeiroValor = parseInt(document.getElementById('primeiroValor').value)
    var segundoValor = parseInt(document.getElementById('segundoValor').value)
    var resultadoDivisao = primeiroValor / segundoValor
    document.getElementById('resultadoCalculadora').innerHTML = resultadoDivisao
}
function adicao(){
    var primeiroValor = parseInt(document.getElementById('primeiroValor').value)
    var segundoValor = parseInt(document.getElementById('segundoValor').value)
    var resultadoAdicao = primeiroValor + segundoValor 
    document.getElementById('resultadoCalculadora').innerHTML= resultadoAdicao
}
function subtracao(){
    var primeiroValor = parseInt(document.getElementById('primeiroValor').value)
    var segundoValor = parseInt(document.getElementById('segundoValor').value)
    var resultadoSubtracao = primeiroValor - segundoValor
    document.getElementById('resultadoCalculadora').innerHTML = resultadoSubtracao
}
// FIM - INICIO - GALERIA - 
function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    listarFilmesNaTela(filmeFavorito)
}

function listarFilmesNaTela(filme) {
    var listaFilmes = document.querySelector('#listaFilmes')
    var elementoFilme = "<img id='imagemFilme' src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}

// FIM - Logica - GALERIA - 
// INICIO - Logica - conversor -

function calcularTemperaturaK(){
    var temperaturaC = parseFloat(document.getElementById('temperaturaC').value)
    var resultadoCk = temperaturaC + 273
    document.getElementById('resultadoTemperatura').innerHTML = resultadoCk
}


function calcularTemperaturaC(){
    var temperaturaK = document.getElementById('temperaturaK').value
    var resultadoKc = temperaturaK - 273
    document.getElementById('resultadoTemperatura').innerHTML = resultadoKc
}
// FIM - Logica - conversor -
// INICIO - Logica - conversor -
var capturado =""
var chute = parseInt(Math.random() *10)
var tentativas = 3 
function capturar () 
{
     capturado = parseInt(document.getElementById("valor").value)   
  
        while( tentativas > 0) 
            { 
                if (capturado == chute) {
                    document.getElementById("resultadoAdivinhacao").innerHTML = "Acertô, Mizeraviii. Aperte F5 para jogar novamente!!!"
                    document.getElementById("chancesRestantes").innerHTML = "Número restante de tentativas: 0 "
                    break
                } 
                else if (capturado < chute) {
                    document.getElementById("resultadoAdivinhacao").innerHTML = "ERRRRROU, O número correto é maior" 
                    tentativas = tentativas - 1  
                    document.getElementById("chancesRestantes").innerHTML = "Número restante de tentativas: " + tentativas                 
                    break        
                }
                else if (capturado > chute) {
                    document.getElementById("resultadoAdivinhacao").innerHTML = "ERRRRROU, O número correto é menor" 
                    tentativas = tentativas - 1 
                    document.getElementById("chancesRestantes").innerHTML = "Número restante de tentativas: " + tentativas
                    break
                
                }

            }   
                if ( tentativas == 0) {
                document.getElementById("resultadoAdivinhacao").innerHTML = "Número de tentativas esgotado. Pressione F5 para tentar novamente"    
                document.getElementById("chancesRestantes").innerHTML = "Número restante de tentativas: " + tentativas
                }               
}

// FIM - Logica - conversor -
// INICIO - Logica - TABELA DE CLASSIFICAÇÃO -
var james = {
    nome: "James",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}
var jessica = {
    nome: "Jessica",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

james.pontos = calculaPontos(james)
jessica.pontos = calculaPontos(jessica)

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

var jogadores = [james, jessica]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores) {
    var html = ""
    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr id='tabelaPeloJava' ><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button class='botaoTabela' onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button class='botaoTabela' onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button class='botaoTabela' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
}