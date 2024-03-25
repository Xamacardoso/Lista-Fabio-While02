import { getnumber,write, decimal_to_roman } from "./utils/io_utils.js";

/*31. Escreva um algoritmo que leia um número decimal (até 3 dígitos) e escreva o seu equivalente em
numeração romana. Utilize funções para obter cada dígito do número decimal e para a transformação
de numeração decimal para romana (Dica: 1 = I, 5 = V, 10 = X, 50 = L, 100 = C, 500 = D, 1.000 = M).*/

function main(){
    // Entrada
    let decimal = getnumber('Número na forma decimal: ')

    // Processamento
    const romano = decimal_to_roman(decimal)

    // Saída
    write(`O número ${decimal} equivale a ${romano} em número romano`)
}


main()