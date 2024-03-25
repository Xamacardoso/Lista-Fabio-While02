import {getnumber, getstring, write} from './utils/io_utils.js'

/*
14. Emita o resultado de uma pesquisa de opinião pública a respeito das eleições presidenciais. O
entrevistado deverá escolher entre 3 candidatos (Serra=45, Dilma=13 ou Ciro Gomes=23), ou então
responder: indeciso=99, outros=98, nulo/branco=0. O algoritmo deve ler a opinião de voto de cada
entrevistado, encerrando-se a pesquisa com a opinião sendo igual a –1. Ao final, devem ser mostrados:
· a porcentagem de cada candidato;
· a porcentagem dos outros candidatos;
· a porcentagem de eleitores indecisos;
· a porcentagem de votos nulos/brancos;
· o total de entrevistados;
· uma mensagem indicando a possibilidade ou não de haver 2o turno.
*/

function main(){
    write(`
===== ELEIÇÕES =====

>>> CANDIDATOS

- João Kleber (45)
- Xamã Pereira (69)
- Petisco Freitas (24)

>>> OUTROS

> Outros (98)
> Indeciso (99) 
`)
    //ENTRADA
    let resposta = getnumber('Qual representante você possui interesse em votar? ')
    
    //PROCESSAMENTO
    let n_entrevistados = 0
    let votos_a = 0
    let votos_b = 0
    let votos_c = 0
    let votos_outros = 0
    let votos_indeciso = 0

    // Esse bloco de while computa em qual variavel adicionar o voto
    while (resposta != -1){
        n_entrevistados++
        if (resposta == 45){
            votos_a++
        }else if (resposta == 69){
            votos_b++
        }else if (resposta == 24){
            votos_c++
        }else if (resposta == 98){
            votos_outros++
        }else{
            votos_indeciso++
        }
        resposta = getnumber('Qual representante você possui interesse em votar? ')
    } 
    // Cálculos de porcentagem:
    const porcentagem_a = (votos_a/n_entrevistados)*100
    const porcentagem_b = (votos_b/n_entrevistados)*100
    const porcentagem_c = (votos_c/n_entrevistados)*100
    const porcentagem_indeciso = (votos_indeciso/n_entrevistados)*100
    const porcentagem_outros = (votos_outros/n_entrevistados)*100

    // SAÍDA
    write(`
===== RESULTADOS =====

JOAO KLEBER (45): ${votos_a} votos (${porcentagem_a.toFixed(2)}%)
XAMA PEREIRA (69): ${votos_b} votos (${porcentagem_b.toFixed(2)}%)
PETISCO FREITAS (24): ${votos_c} votos (${porcentagem_c.toFixed(2)}%)
INDECISOS: ${votos_indeciso} votos (${porcentagem_indeciso.toFixed(2)}%)
OUTROS: ${votos_outros} votos (${porcentagem_outros.toFixed(2)}%)

TOTAL DE VOTOS: ${n_entrevistados} votos
`)
}

main()

