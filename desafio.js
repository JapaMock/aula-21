//calcular media 
function calcularMedia(numeros) {
    let soma = 0;
    for (letnumero of numeros)  {
        soma += numeros;
    }
    return soma / numeros.length
}
console.log(calcularMedia([5, 7, 9, 6]));
//função identificar se é par ou impar
function parOuImpar(numero) {
    if (numero % 2 === 0)  {
        return "Par";
  } else {
    return "Ímpar";
  }
}
console.log(parOuImpar(5));
console.log(parOuImpar(6));
//numeroa maior de 5 com filter
const numeros = [3, 8, 1, 9, 4, 7];
const numerosMaioresQue5 = numeros.filter(numero => numero > 5);
console.log(numerosMaioresQue5);