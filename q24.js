
import { getnumber, prog_aritmetica, write } from "./utils/io_utils.js";

/*23. Escreva um algoritmo que leia a razão de uma PG (Progressão Geométrica) e o seu primeiro termo e
escreva os N termos da PG. Ler o valor de N. */

function main(){
    let n = getnumber("Quantos numeros da progressão: ")
    let r = getnumber("Razão da progressão aritmetica: ")
    let primeiro = getnumber("Primeiro numero da PA: ")
    const resultado = prog_aritmetica(n,r,primeiro)
    write(`Progressao Aritmética: [ ${resultado}]`)
    
}

main()
