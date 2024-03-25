import { getnumber, write, media3 } from "./utils/io_utils.js";

/*11. Leia informações de alunos (matrícula, nota1, nota2, nota3) com o fim das informações indicado por
matrícula = 0. Para cada aluno deve ser calculada a média final de acordo com a seguinte fórmula:

Média Final = (2 * nota1) + (3 * nota2) + (5 * nota3)
---
10

Se a média final for igual ou superior a 7, o aluno está aprovado; se a média final for inferior a 7, o
aluno está reprovado. Ao final devem ser mostrados o total de aprovados, o total de reprovados e o total
de alunos da turma.*/

function main(){
    // ENTRADAS
    let matricula
    let media
    let qtd_reprovados = 0
    let qtd_aprovados = 0

    // PROCESSAMENTO
    while (matricula != 0){
        matricula = getnumber('Matrícula: ')
        if (matricula == 0){
            break
        }
        media = media3()
        if (media < 7.0){
            write('Aluno Reprovado!')
            qtd_reprovados++
        }else{
            write('Aluno Aprovado!')
            qtd_aprovados++
        }
    }

    const qtd_alunos = qtd_aprovados + qtd_reprovados

    // SAÍDA
    write(`
    ======= SITUAÇÃO DA TURMA =======

    Quantidade total de alunos: ${qtd_alunos}
    Alunos aprovados: ${qtd_aprovados}
    Alunos reprovados ${qtd_reprovados}`)

}


main()