import {getnumber, getstring, write} from './utils/io_utils.js'
/*10. Calcule a quantidade de combustível que pode ser colocada em uma aeronave e verifique se a aeronave
pode levantar vôo ou não. Considere os seguintes critérios:
· O peso de decolagem da aeronave é sempre igual a 500.000 kg;
· O peso de decolagem é composto pela soma do peso do combustível, do peso da carga, do peso dos
passageiros;
· O peso do combustível é a quantidade do combustível (em litros) multiplicada pelo fator 1.5kg/l;
· A quantidade mínima de combustível para que a aeronave decole é de 10000 l;
· O peso da carga é o somatório do peso dos “containers” de cargas em quilogramas.
· O peso dos passageiros é o somatório do peso de cada passageiro e de todos os volumes da sua
bagagem; cada passageiro tem o peso estimado de 70kg e cada volume de bagagem tem o peso
estimado de 10kg.
O algoritmo deve ler o números de containers e a seguir ler o peso de cada container. A seguir devem
ser lidos os dados dos passageiros (número do bilhete, quantidade de bagagens) até que o número do
bilhete seja igual a 0. Devem ser mostrados, a quantidade de passageiros, a quantidade total de volume
de bagagem, o peso dos passageiros, o peso da carga, a quantidade possível de combustível, e uma
mensagem indicando a liberação da decolagem ou não.*/

function main(){
    // ENTRADA
    let n_containers = getnumber("Digite um número de containers que o avião transportará: ")
    let cont_containers = 1
    let qtd_passageiros = 0
    let somapeso_ctnrs = 0
    let somapeso_passag = 0
    let somapeso_bagag = 0
    let somapeso_combustivel = 0
    let situacao_decolagem = ''

    // PROCESSAMENTO
    while(cont_containers <= n_containers){
        write(`>>> Container n° ${cont_containers} <<<`)
        let peso_container = getnumber('Peso do container: ')
        somapeso_ctnrs += peso_container
        cont_containers += 1
    }

    let n_bilhete
    while (n_bilhete != 0){
        write('>>> Passageiro <<<')
        n_bilhete = getnumber('N° do Bilhete: ')
        if (n_bilhete == 0){
            break
        }
        qtd_passageiros ++
        somapeso_passag += 70
        let qtd_bagagens = getnumber('Quantidade de bagagens: ')
        somapeso_bagag += (qtd_bagagens*10)

    }

    const pesos_externos = somapeso_bagag+somapeso_ctnrs+somapeso_passag
    situacao_decolagem = 'OK!!! O AVIÃO PODE DECOLAR COM SEGURANÇA!!'
    let litros = 0

    if (pesos_externos>500000){
        situacao_decolagem = "IMPOSSÍVEL DECOLAR!! O AVIÃO ESTÁ MUITO PESADO PARA DECOLAR."
        somapeso_combustivel = 0
    }else{
        somapeso_combustivel = (500000-pesos_externos)
        litros = somapeso_combustivel/(1.5)
    }

    if (litros<10000){
        situacao_decolagem = "IMPOSSÍVEL DECOLAR!! O AVIÃO NÃO POSSUI COMBUSTÍVEL SUFICIENTE PARA DECOLAR."
    }

    const somapeso_todos = pesos_externos + somapeso_combustivel

    // SAÍDA
    const resultado = `
    >>>>> SITUACAO DE DECOLAGEM <<<<<

    Quantidade de passageiros: ${qtd_passageiros}
    Peso total dos passageiros: ${somapeso_passag}kg
    Peso total de bagagens: ${somapeso_bagag}kg
    Peso total de containers: ${somapeso_ctnrs}kg
    Combustível Possível do Avião: ${litros.toFixed(2)}L
    Peso de combustível: ${somapeso_combustivel}kg

    PESO TOTAL DO AVIAO: ${somapeso_todos}kg

    ==> ${situacao_decolagem}
    `

    write(resultado)
}


main()
