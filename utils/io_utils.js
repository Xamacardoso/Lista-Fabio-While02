import { question } from "readline-sync";

export function getnumber(message) {
    return Number(question(message))
}

export function getstring(message) {
    return String(question(message))
}

export function write(message) {
    console.log(message)
}

export function mmc(n1, n2) {
    let resto
    let x
    let y
    x = n1
    y = n2
    while(resto != 0){
       resto = x % y
       x = y
       y = resto
    }
      return (n1*n2)/x
}

export function mdc(n1, n2) {
    let resto
    let x = n1
    let y = n2
    while (resto != 0) {
        resto = x % y
        x = y
        y = resto
    }
    return x
}

export function casas(num) {
    let casas = 1
    let ordem = 10
    while (ordem <= Math.abs(num)){
        casas += 1
        ordem *= 10
    }
    return casas
}

export function lista_numeros_ate(num){
    let lista = ''
    let elemento = getnumber("Digite um numero para fazer uma lista: ")
    lista += `${elemento}`
    while (elemento != num){
        elemento = getnumber("Digite outro numero: ")
        if (elemento != num){
            lista += ` ${elemento}`
        }
    }
    return lista
}

export function lista_consecutivos(num){
    let aux = 0
    let num_lista = getnumber("Digite um numero da lista: ")
    let lista = `${num_lista}`
    while ((num_lista + aux) != num){
        aux = num_lista
        num_lista = getnumber('Digite outro numero da lista: ')
        lista += ` ${num_lista}`
    }
    
    return lista
}

export function media3(){
    let nota1 = getnumber('Nota 1: ')
    while (nota1 > 10 || nota1 < 0){
        write('Valor inválido! Digite um valor entre 0 e 10.')
        nota1 = getnumber('Nota 1: ')
    }

    let nota2 = getnumber('Nota 2: ')
    while (nota2 > 10 || nota2 < 0){
        write('Valor inválido! Digite um valor entre 0 e 10.')
        nota2 = getnumber('Nota 2: ')
    }

    let nota3 = getnumber('Nota 3: ')
    while (nota3 > 10 || nota3 < 0){
        write('Valor inválido! Digite um valor entre 0 e 10.')
        nota3 = getnumber('Nota 3: ')
    }
    const media = ((2*nota1) + (3*nota2) + (5*nota3))/10

    return media.toFixed(1)
}

export function computar_binario(decimal){
    let x = decimal
    let binario = ''

    if (x==0){
        binario = '0'
        return binario
    }

    while(x>=1){
        binario = `${x%2}` + binario
        x = parseInt(x/2)
    }

    

    return binario
}

export function computar_hexadecimal(decimal){
    let x = decimal
    let hexadecimal = ''
    let resto = 0
    if (x==0){
        hexadecimal = '0'
        return hexadecimal
    }

    while(x>=1){
        resto = x%16
        resto = computar_resto_hex(resto)
        hexadecimal = `${resto}` + hexadecimal
        x = parseInt(x/16)
    }

    

    return hexadecimal 
}

export function computar_resto_hex(resto){
    if (resto == 10){
        return 'A'
    }else if (resto == 11){
        return 'B'
    }else if (resto == 12){
        return 'C'
    }else if (resto == 13){
        return 'D'
    }else if (resto == 14){
        return 'E'
    }else if (resto == 15){
        return 'F'
    }

    return resto
}

export function reajuste_salarial(salario){
    if (salario >= 10000){
        return salario * 1.1
    }else if (salario >= 6000){
        return salario * 1.15
    }else if (salario >= 3000){
        return salario * 1.2
    }else{
        return salario * 1.25
    }
}

export function classificacao(){
    let classif = getnumber("Digite uma classificação para o atleta (1, 2, 3 ou 4): ")
    if (classif == 1){
        return 9
    }else if (classif == 2){
        return 6
    }else if (classif == 3){
        return 4
    }else if (classif == 4){
        return 3
    }else{
        write("Valor inválido, digite novamente (1, 2, 3 ou 4)")
        classificacao()
    }
}

export function prog_geometrica(n,r,primeiro){
    let lista = ''
    let count = 1
    let termo = primeiro
    while (count <= n){
        lista += `${termo} `
        termo = r*termo
        count ++
    }
    return lista
}


export function prog_aritmetica(n,r,primeiro){
    let lista = ''
    let count = 1
    let termo = primeiro
    while (count <= n){
        lista += `${termo} `
        termo = r+termo
        count ++
    }
    return lista
}

export function calcular_porcentagem(parte, total){
    return (parte/total *100)
}


export function quociente_int(num, divisor){
    return Math.floor(num * (Math.pow(divisor, -1)))
}

export function resto_int(num, divisor, quociente){
    return num - (quociente*divisor)
}

export function get_random_number(min, max){
    return Math.floor(Math.random() * (max - min)) + min
} 

export function calc_juros_composto_parcelado(capital, taxa, tempo){
    let saldo = capital
    let count = 1
    while(count < tempo){
        saldo += capital + (saldo*taxa/100)
        count ++
    }
    write(`Montante final: R$ ${saldo.toFixed(2)}`)
}