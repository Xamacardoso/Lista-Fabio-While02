import {computar_binario, computar_hexadecimal, getnumber, write} from './utils/io_utils.js'

/*
15. Leia um número (entre 0 e 255) na base decimal, calcule e escreva este número na base binária
e na base hexadecimal.
*/
function main(){
    //ENTRADA
    let decimal = getnumber("Digite um número na base decimal: ")
    
    //PROCESSAMENTO
    const binario = computar_binario(decimal)
    const hexadecimal = computar_hexadecimal(decimal)

    //SAÍDA
    write(`
    DECIMAL     >>> ${decimal}
    BINARIO     >>> ${binario}
    HEXADECIMAL >>> ${hexadecimal}`)
}

main()