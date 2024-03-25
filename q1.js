import { getnumber } from "./utils/io_utils.js";

// 1. Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus divisores. (flag número = 0).

function main() {
    // Entrada, processamento e saída
    let numero = getnumber("Digite um numero: ")
    let divisores = ''
    let contador = 1
    while (numero != 0) {
        while (contador <= numero) {
            if (numero % contador == 0) {
                divisores = divisores + `${contador}  `
            }
            contador ++
        }
        console.log(`O numero ${numero} possui os divisores: [${divisores}]`)
        numero = getnumber("Digite um numero: ")
        divisores = ''
        contador = 1
    }
}

main()