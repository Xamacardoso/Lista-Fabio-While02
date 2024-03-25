import { write, getnumber, getstring, calcular_porcentagem } from "./utils/io_utils.js";
/*
Foi feita uma pesquisa de audiência de canal de TV em várias casas em Teresina, num certo dia. Para
cada casa visitada, o entrevistado informou o número do canal (2, 4, 5, 7, 10) e o número de pessoas que
estavam assistindo TV. Escreva um algoritmo que leia um número indeterminado de dados (terminando
quando for lido um canal igual a zero) e calcule o percentual de audiência para cada emissora,
mostrando ao final, o número de cada canal e sua respectiva audiência.
*/
function main(){
    
    write(`
    ===== CANAIS DE TERESINA =====
    > Canal 2
    > Canal 4
    > Canal 5
    > Canal 7
    > Canal 10`)

    // Entrada
    let count_entrevistado = 1
    write(`>>> Entrevistado n° ${count_entrevistado} <<<`)
    let canal = getnumber('Canal: ')
    let freq_total = 0
    let freq_2 = 0
    let freq_4 = 0
    let freq_5 = 0
    let freq_7 = 0
    let freq_10 = 0
    let audiencia_casa
    // Processamento
    while (canal != 0){
        count_entrevistado++
        audiencia_casa = getnumber(`Quantas pessoas assistiam o canal ${canal}: `)
        freq_total += audiencia_casa
       
            if (canal == 2){
                freq_2 += audiencia_casa
            }else if (canal == 4){
                freq_4 += audiencia_casa
            }else if (canal == 5){
                freq_5 += audiencia_casa
            }else if (canal == 7){
                freq_7 += audiencia_casa
            }else if (canal == 10){
                freq_10 += audiencia_casa
            }

        write(`>>> Entrevistado n° ${count_entrevistado} <<<`)
        canal = getnumber('Canal: ')
    }

    //Saída
    write(`
    ===================== RESULTADO DA PESQUISA =========================
    -> Canal 2 : ${calcular_porcentagem(freq_2, freq_total).toFixed(2)}%
    -> Canal 4 : ${calcular_porcentagem(freq_4, freq_total).toFixed(2)}%
    -> Canal 5 : ${calcular_porcentagem(freq_5, freq_total).toFixed(2)}%
    -> Canal 7 : ${calcular_porcentagem(freq_7, freq_total).toFixed(2)}%
    -> Canal 10: ${calcular_porcentagem(freq_10, freq_total).toFixed(2)}%
    
    -> Audiência total: ${freq_total} pessoas`)
}

main()