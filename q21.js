import { write, getnumber, multiplicar } from "./utils/io_utils.js";

/*21. Leia 2 números inteiros e escreva a multiplicação dos mesmos, sem que o operador de multiplicação (*)
seja utilizado. */

function main(){
    let n1 = getnumber('Digite um número: ')
    let n2 = getnumber('Quer multiplicar ele por quanto?: ')
    const resultado = multiplicar(n1,n2)
}
