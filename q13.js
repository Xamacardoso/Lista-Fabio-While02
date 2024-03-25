import { getnumber, getstring, reajuste_salarial, write } from "./utils/io_utils.js";

/* 13. Leia o salário de funcionários de uma empresa, calcule e escreva o novo salário (segundo os critérios
descritos abaixo), a soma dos salários atuais, a soma dos salários reajustados e a diferença entre as 2
somas. (Flag: salário=0)

De                Até                    Acréscimo
R$ 0,00      R$ 2.999,99                    25 %
R$ 3.000,00  R$ 5.999,99                    20 %
R$ 6.000,00  R$ 9.999,99                    15 %
Acima de     R$ 10.000,00                   10 %
*/

function main(){
    // ENTRADAS
    let salario  
    let somasalarios = 0
    let somasalarios_reaj = 0
    let salario_reaj = 0
    // PROCESSAMENTO
    while (salario != 0){
        salario = getnumber('Digite o salário do funcionário: ')
        if (salario == 0){
            break
        }
        salario_reaj = reajuste_salarial(salario)
        somasalarios += salario
        somasalarios_reaj += salario_reaj
    }
    // SAÍDA
    write(`
    ===== SITUACAO =====
    Soma de todos os salarios (ANTES): R$ ${somasalarios.toFixed(2)}
    Soma de todos os salarios (DEPOIS): R$ ${somasalarios_reaj.toFixed(2)}

    Investimento salarial da empresa: R$ ${(somasalarios_reaj - somasalarios).toFixed(2)}`)

}

main()