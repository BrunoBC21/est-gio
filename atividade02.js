let array = [0, 1];
const numero = 8;

for (let i=2; i < numero; i++){
    array.push(array[i -1] + array[i- 2]);
}

console.log(array)
if (array.includes(numero)){
    console.log(`Número ${numero} pertence a Fibonacci`);
}
else{
    console.log(`Número ${numero} não pertence a sequência de Fibonacci`)
}
