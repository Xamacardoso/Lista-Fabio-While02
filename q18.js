import { write } from "./utils/io_utils.js"

/*18. Supondo-se que a população de uma cidade A seja de 200.000 habitantes, com uma taxa anual de
crescimento na ordem de 3.5%, e que a população de uma cidade B seja de 800.000 habitantes,
crescendo a uma taxa anual de 1.35%, Escreva um algoritmo que determine quantos anos serão
necessários, para que a população da cidade A ultrapasse a população da cidade B. */

function main(){
    let popA = 200_000
    let popB = 800_000
    let anos = 0
    while (popA <= popB){
        popA += popA * (3.5/100)
        popB += popB * (1.35/100)
        anos ++
        write(`População A: ${popA.toFixed(0)} || População B: ${popB.toFixed(0)} || Anos passados ${anos}`)
    }
    write(`Demorariam ${anos} anos para a pop. da cidade A ultrapassar a pop. da cidade B.`)
}

main()