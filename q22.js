import { getnumber, write } from "./utils/io_utils.js";

function main(){
    const num = getnumber('Numero a ser dividido: ')
    const divisor = getnumber(`Vai dividir ${num} por: `) 
    
    let n1 = num
    let n2 = divisor
    let qtd_sub = 0
    let aux = 0
    while (n2 * qtd_sub < num && aux < 1){
            n1 = n1-n2
            if(n1>0){
                qtd_sub++
            }else{
                aux += 1
            }
    }
    const quociente = qtd_sub
    const resto = num - (quociente*divisor)
    write(`Resultado de ${num} / ${divisor} >>> Quociente: ${quociente}  ||  Resto: ${resto}`)
}
main()
