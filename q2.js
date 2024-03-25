import { getnumber, write, mmc } from "./utils/io_utils.js";

// 2. Leia 2 (dois) números, calcule e escreva o mmc (mínimo múltiplo comum) entre os números lidos.

function main() {
    // Entrada
    const n1 = getnumber("Digite o primeiro numero: ")
    const n2 = getnumber("Digite o segundo numero: ")

    // Processamento
    const mmc_numeros = mmc(n1, n2)

    // Saída
    write(`O mmc de ${n1} e ${n2} é >>> ${mmc_numeros}`)
}

main()