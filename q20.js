import { getnumber, write } from "./utils/io_utils.js";
/*20. Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:
· Distância percorrida desde a última medição;
· Quantidade de litros consumidos para percorrer a distância indicada.
Escreva um algoritmo que leia estas informações e escreva:
· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
· o consumo em km/l do carro.*/

function main(){
    let distancia_percorrida = 0
    let litros_usados = 0
    let qtd_paradas = 0
    let consumo = 0
    let consumo_final = 0

    while (distancia_percorrida < 600 && litros_usados < 50){
        let distancia = getnumber('Quantos kms o carro andou? ')
        distancia_percorrida += distancia
        let litros = getnumber('Quantos litros o carro utilizou? ')
        litros_usados += litros
        consumo = (distancia/litros)
        consumo_final += (distancia/litros)
        qtd_paradas++
        
        if (distancia_percorrida < 600 && litros_usados < 50){
            write(`Parada ${qtd_paradas} || O carro parou antes do destino, mas não foi por falta de combustível (Restam ${(50-litros_usados).toFixed(1)}L)`)
            write(`O carro ja andou ${distancia_percorrida}km, faltam ${(600-distancia_percorrida)}km.`)
            write(`Consumo da parada anterior até essa parada: ${consumo}`)
        }else if (distancia_percorrida<600 && litros_usados >= 50){
            write(`Parada ${qtd_paradas} || O carro parou antes do destino pois a gasolina acabou (Restavam ${600 - distancia_percorrida}km)`)
            write(`Consumo da parada anterior até essa parada: ${consumo.toFixed(1)} km/l`)
        }
    }
    const media_consumo = consumo_final/qtd_paradas
    write(`
    ===== SITUACAO FINAL =====
    Kms rodados        >>> ${distancia_percorrida}km
    Litros consumidos  >>> ${litros_usados}L
    Média de consumo   >>> ${media_consumo.toFixed(1)}km/l`)
}

main()