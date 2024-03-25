import { getnumber, write, casas } from "./utils/io_utils.js";

// 6. Escreva um algoritmo para determinar o número de dígitos de um número informado.

function main(){
    // Entrada
    const num = getnumber('Digite um numero: ')

    // Processamento
    const casas_decimais = casas(num)
    
    // Saída
    write(casas_decimais)

}

main()