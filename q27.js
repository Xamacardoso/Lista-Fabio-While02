import { getnumber, write, calcular_porcentagem } from "./utils/io_utils.js";

/*27. Escreva um algoritmo que leia um conjunto de dados de um grupo de 100 pessoas, sexo (1=Masculino,
2=Feminino), idade e estado civil (1=Casado, 2=Solteiro, 3=Divorciado, 4=Viúvo) e escreva:
· Média de idade das mulheres;
· Média de idade dos homens;
· O percentual de homens solteiros;
· O percentual de mulheres solteiras;
· A quantidade de mulheres divorciadas acima de 30 anos. */

function main(){
    let contador = 0
    let total_homens = 0
    let homens_solteiros = 0
    let total_mulheres = 0
    let mulheres_solteiras = 0
    let sum_idade_homens = 0
    let sum_idade_mulheres = 0
    let mulheres_div_30 = 0
    let sexo,estado,idade
    // Processamento
    while (contador < 5){
        contador++
        sexo = getnumber(`Sexo do ${contador}° participante (1 = Masc.  2 = Fem.): `)
        estado = getnumber(`Estado Civil (1= Casado 2= Solteiro 3= Divorciado 4= Viúvo): `)
        idade = getnumber('Idade: ')
        if (sexo == 1){
            total_homens++
            sum_idade_homens+=idade
            if (estado == 2){
                homens_solteiros++
            }
        }else{
            total_mulheres++
            sum_idade_mulheres+=idade
            if (estado == 2){
                mulheres_solteiras++
            }if (estado == 3 && idade > 30){
                mulheres_div_30++
            }
        }
    }
    // Saída
    write(`
    ======== RESULTADO ========
> Média da idade dos homens         :  ${(sum_idade_homens/total_homens).toFixed(1)}
> Média da idade das mulheres       :  ${(sum_idade_mulheres/total_mulheres).toFixed(1)}
> Percentual de homens solteiros    :  ${calcular_porcentagem(homens_solteiros,total_homens).toFixed(2)}%
> Percentual de mulheres solteiras  :  ${calcular_porcentagem(mulheres_solteiras,total_mulheres).toFixed(2)}%
> Qtd. mulheres divorciadas +30 anos:  ${mulheres_div_30} mulher(es)
> Total de Entrevistados            :  ${contador} pessoas

> Homens                            :  ${total_homens}
> Mulheres                          :  ${total_mulheres}
`)
}

main()