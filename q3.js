import { getnumber, write, mdc } from "./utils/io_utils.js";

// 3. Leia 2 (dois) números, calcule e escreva o mdc (máximo divisor comum) entre os números lidos.

function main() {
    // Entrada
    const n1 = getnumber("Digite o primeiro numero: ")
    const n2 = getnumber("Digite o segundo numero: ")

    // Processamento
    const mdc_numeros = mdc(n1, n2)
    
    // Saída
    write(`O mdc de ${n1} e ${n2} é >>> ${mdc_numeros}`)
}

main()