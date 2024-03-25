import { getnumber, write } from "./utils/io_utils.js";

// 5. Leia dois números X e N. A seguir, escreva o resultado das divisões de X por N onde, após cada divisão, X passa a ter como conteúdo o resultado da divisão anterior e N é decrementado de 1 em 1, até chegar a 2.

function main() {
    // Entrada
    let x = getnumber("Digite um valor para X: ")
    let n = getnumber("Digite um valor para n: ")

    // Processamento e Saída
        let divisao
    while (n >= 2) {
        divisao = x / n
        write(`${x} / ${n} = ${divisao}`)
        x = divisao
        n -= 1
    }
}

main()