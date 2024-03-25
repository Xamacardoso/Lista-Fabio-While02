import { getnumber, getstring, write } from "./utils/io_utils.js";

/*
12. Leia vários códigos do jogador (1 ou 2) que ganhou o ponto, em uma partida de pingue-pongue, e
responda quem ganha a partida. A partida chega ao final se:
· Um dos jogadores chega a 21 pontos e a diferença de pontos entre os jogadores é maior ou igual a 2.
· Se a primeira não for atendida, ganha aquele que, com mais de 21 pontos, consiga colocar uma
diferença de 2 pontos sobre o adversário.
*/

function main(){
    // ENTRADA
    write('===== PING PONG =====')
    const jogadora = getstring('Nome do Jogador A: ')
    const jogadorb = getstring('Nome do Jogador B: ')
    let pts_a = 0
    let pts_b = 0
    let pontuador = ''

    // PROCESSAMENTO
    while(pts_a != 21 && pts_b != 21 ){
        pontuador = getstring(`Quem marcou? ${jogadora} (A) ou ${jogadorb} (B)? `)
        if (pontuador.toLowerCase()=='a'){
            pts_a++
        }else{
            pts_b++
        }
        write(`PLACAR: ${pts_a} a ${pts_b}`)
    }
    
    // PROCESSAMENTO (de novo, mas dessa vez para o caso da diferença de pontos)
    while(pts_a - pts_b < 2 && pts_b - pts_a < 2){
        pontuador = getstring(`Quem marcou? ${jogadora} (A) ou ${jogadorb} (B)? `)
        if (pontuador.toLowerCase()=='a'){
            pts_a++
        }else{
            pts_b++
        }
        write(`PLACAR: ${pts_a} a ${pts_b}`)
    }

    // Constatando o resultado
    let situacao = 'A PARTIDA TERMINOU EM EMPATE!!!'

    if (pts_a>pts_b){
        situacao = `O JOGADOR ${jogadora} GANHOU!!! `
    }else{
        situacao = `O JOGADOR ${jogadorb} GANHOU!!!`
    }

    // SAÍDA
    write(`
    ===== RESULTADO =====

    ${jogadora} >>> ${pts_a}pts
    ${jogadorb} >>> ${pts_b}pts

    ${situacao}
    `)

}