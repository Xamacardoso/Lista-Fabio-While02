import { getnumber, write, lista_consecutivos } from "./utils/io_utils.js";

// 8. Leia um numero X e, a seguir, leia e escreva uma lista de números com o término da lista ocorrendo quando a soma de dois números consecutivos da lista for igual a X.

function main(){
    // Entrada
    const x = getnumber("Digite um número: ")

    // Processamento
    const lista = lista_consecutivos(x)
    
    // Saída
    write(`[${lista}]`)
}

main()

