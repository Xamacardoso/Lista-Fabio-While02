import { getnumber, write } from "./utils/io_utils.js";

// 4. Leia um número e divida-o por dois (sucessivamente) até que o resultado seja menor que 1. Escreva o resultado da última divisão efetuada.

function main() {
    // Entrada
    const numero = getnumber("Digite um numero: ")

    // Processamento
    let divisao = numero
    while (divisao >= 1) {
        divisao = divisao / 2
    }
    
    // Saída
    write(`A ultima divisao do numero ${numero} deu ${divisao}`)
}
main()