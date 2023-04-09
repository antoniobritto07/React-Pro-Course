const numeros = [5, 3, 2, 5];

const numerosIgualA5 = numeros.find((numero) => numero === 5);

//find retorna apenas o próprio valor logo quando achar ele
//já o filter vai retornar todos os valores que der match com o oque buscamos em forma de array

console.log(numerosIgualA5);
