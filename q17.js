import { getnumber, getstring,write } from "./utils/io_utils.js";

/**17. Em um concurso de beleza, cada candidata tem um cartão contendo nome, altura e peso. Escreva um
algoritmo que leia um conjunto de cartões e escreva o nome e a altura da candidata mais alta e da mais
baixa; o nome e o peso da candidata mais magra e da mais gorda. (Flag: nome = 'FIM'). */

let nome = getstring("Nome da Candidata            : ")
let altura = getnumber("Altura da candidata (em cm)  : ")
let peso = getnumber("Peso da candidata (kgs)      : ")

let mais_alta = `${nome}`
let altura_mais_alta = altura
let mais_magra = `${nome}`
let peso_mais_magra = peso
let mais_baixa = `${nome}`
let altura_mais_baixa = altura
let mais_gorda = `${nome}`
let peso_mais_gorda = peso

while (nome!='fim'){
    nome = getstring("Nome da Candidata            : ")
    altura = getnumber("Altura da candidata (em cm)  : ")
    peso = getnumber("Peso da candidata (kgs)      : ")
    if (nome != 'fim'){
        
        if (altura > altura_mais_alta){
            mais_alta = `${nome}`
            altura_mais_alta = altura
        }if (altura < altura_mais_baixa){
            mais_baixa = `${nome}`
            altura_mais_baixa = altura
        }if (peso > peso_mais_gorda){
            mais_gorda = `${nome}`
            peso_mais_gorda = peso
        }if (peso < peso_mais_magra){
            mais_magra = `${nome}`
            peso_mais_magra = peso
        }
        
    }
}
const resultado = `
========= RESULTADO =========

Candidata mais alta : ${mais_alta}  >>> ${altura_mais_alta} cm
Candidata mais magra: ${mais_magra} >>> ${peso_mais_magra.toFixed(1)} kgs
Candidata mais baixa: ${mais_baixa} >>> ${altura_mais_baixa} cm
Candidata mais gorda: ${mais_gorda} >>> ${peso_mais_gorda.toFixed(1)} kgs
`
write(resultado)