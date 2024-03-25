import {write, getnumber} from './utils/io_utils.js'

/**  16. Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo. **/

function main(){
    let emprestimo = 3000
    let taxa_juros = 0.85/100
    let dias = 0
    while (emprestimo > 0){
        emprestimo -= 200
        emprestimo += emprestimo * taxa_juros
        dias ++
        if (emprestimo>0){
            write(`Dia ${dias}, falta pagar R$${emprestimo.toFixed(2)}`)
        }else{
            write(`Dia ${dias}, o empréstimo foi pago completamente.`)
        }
    }

write(`
===== EMPRESTIMO =====
Emprestimo inicial   : R$ 3000,00
Taxa de juros por dia: 0,85%
Dias necessarios para pagar: ${dias}`)

}

main()