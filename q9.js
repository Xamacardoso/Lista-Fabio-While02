import { classificacao, getnumber, getstring, write } from "./utils/io_utils.js";

/* 9. Confira o resultado de uma competição de natação entre dois clubes. O programa deve ler o número da
prova e a quantidade de nadadores. O fim dos dados é indicado pelo número da prova igual a 0 e
quantidade de nadadores igual a 0. A seguir, para cada nadador deverá ler nome, classificação, tempo,
clube (“a” ou “b”) e determinar os pontos obtidos por cada clube, de acordo com o seguinte critério:

Lugar Pontos
1       9
2       6
3       4
4       3

Ao final, o algoritmo deve escreva os totais de pontos de cada clube, indicando o clube vencedor. */

function main(){
    // ENTRADA
    let nprova = getnumber("Numero da prova: ")
    let qtd_nadadores = getnumber("Quantidade de nadadores: ")
    
    // PROCESSAMENTO
    let pts_a = 0
    let pts_b = 0
    let count
    while (nprova != 0 || qtd_nadadores != 0){
        count = 1
        while(count <= qtd_nadadores){
            write(`>>>> Nadador ${count} <<<<`)
            let nome = getstring(`Nome do nadador ${count}: `)
            let tempo = getnumber("Tempo de prova (seg): ")
            let classif = classificacao()
            let clube = getstring('Clube (A ou B): ')

            if (clube.toLowerCase() == 'a'){
                pts_a += classif
            }else{
                pts_b += classif
            }
            count++
        }
        nprova = getnumber("Numero da prova: ")
        qtd_nadadores = getnumber("Quantidade de nadadores: ")
    }

    let situacao = "EMPATE!!!"
    if (pts_a > pts_b){
        situacao = "A EQUIPE A VENCEU!"
    }else{
        situacao = "A EQUIPE B VENCEU"
    }

    // SAÍDA
    const resultado = `
======= RESULTADO =======
Equipe A >>> ${pts_a}pts.
Equipe B >>> ${pts_b}pts.

SITUAÇÃO: ${situacao}
`

write(resultado)
}



main()