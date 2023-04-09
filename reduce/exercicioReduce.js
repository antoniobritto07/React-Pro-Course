const numeros = [1, 2, 3, 4, 5];
const somaNumeros = numeros.reduce((acc, numero) => acc + numero, 0);
console.log(somaNumeros);

const letras = ["a", "b", "c", "d", "e", "f"];
const letrasMerged = letras.reduce((acc, letra) => acc.concat(letra), "");
console.log(letrasMerged);

const pessoas = [
  { nome: "Bob", idade: 40, votou: true },
  { nome: "Tico", idade: 65, votou: false },
  { nome: "Enzo", idade: 70, votou: false },
  { nome: "Antonio", idade: 12, votou: true },
  { nome: "Breno", idade: 33, votou: true },
];

const somaIdadeQuemVotouTrue = pessoas.reduce(
  (acc, pessoa) => (pessoa.votou ? acc + pessoa.idade : acc),
  0
);

console.log(somaIdadeQuemVotouTrue);
