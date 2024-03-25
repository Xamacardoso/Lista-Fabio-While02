import { getnumber, write, calc_juros_composto_parcelado,getstring } from "./utils/io_utils.js";

/*29. Escreva um algoritmo que calcula o retorno de um investimento financeiro. O usuário deve informar
quanto será investido por mês e qual será a taxa de juros mensal. O algoritmo deve informar o saldo do
investimento após um ano (soma das aplicações mensais + juros compostos), e perguntar ao usuário se
deseja calcular o ano seguinte, sucessivamente. Por exemplo, caso o usuário deseje investir R$ 100,00
por mês, e tenha uma taxa de juros de 1% ao mês, o algoritmo forneceria a seguinte saída:
Saldo do investimento após 1 ano: 1268.25
Deseja processar mais um ano (S/N) ? */

function main(){
    let capital = getnumber('Digite quanto deseja calcular: ')
    let taxa = getnumber('Agora digite a taxa de juros compostos (em %): ')
    let continuar = 's'
    while (continuar.toLowerCase() == 's'){
        calc_juros_composto_parcelado(capital, taxa, 12)
        continuar = getstring('Deseja continuar?? (S/N): ')
    }
}

main()

