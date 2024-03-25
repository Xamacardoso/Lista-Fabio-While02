import { getnumber, write, lista_numeros_ate } from "./utils/io_utils.js";

// 7. Leia um número e, a seguir, leia uma lista de números até achar um igual ao primeiro número lido.

function main(){
    // Entrada
    const num = getnumber("Digite um numero: ")

    // Processamento
    const lista = lista_numeros_ate(num)

    // Saída
    write(`[${lista}]`)

}

main()