
//Funções usando operadores
function soma(n1,n2){
    console.log(n1 + n2)
}
soma(10,10)

//Funçoes com condicionais

function maiorIdade(idade){
    if (idade >= 18){
        console.log(`Voçê tem ${idade}, é maior de idade`)
    }else{
        console.log('Você é um pirralho')
    }
}
maiorIdade(18)

// Area do Triangulo
function areaTriangulo(base,altura){
    console.log(`A área do trinangulo é: ${(base*altura)/2} `)
}
areaTriangulo(10,10)

// Idade em anos, meses e dias

function idade(idade){
    mes = idade*12
    dia = idade*365
    console.log(`Você tem ${idade} anos, que são ${mes} meses e ${dia} dias`)
}
idade(21)

//Quantidade de letras em seu nome

function qtdLetras(nome){
    var qtd = nome.length;
    console.log(`Seu nome é : ${nome} e tem ${qtd} letras`)
}

qtdLetras('Thalita')