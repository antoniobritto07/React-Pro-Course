const numeros = [3, 6, 8, 2];
const numerosMaioresQue5 = numeros.filter((numero) => numero > 5);
console.log(numerosMaioresQue5);

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros2.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

const pessoas = [
  {
    nome: "Angelina Jolie",
    idade: 80,
  },
  {
    nome: "Eric Jones",
    idade: 2,
  },
  {
    nome: "Paris Hilton",
    idade: 5,
  },
  {
    nome: "Antonio",
    idade: 22,
  },
  {
    nome: "Bob Marley",
    idade: 100,
  },
];

const pessoasMaioresDe18 = pessoas.filter((pessoa) => pessoa.idade > 18);

console.log(pessoasMaioresDe18);
