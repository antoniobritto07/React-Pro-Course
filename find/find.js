const pessoas = [
  {
    name: "Ronaldo",
    idade: 23,
  },
  {
    name: "Antonio",
    idade: 21,
  },
  {
    name: "Enzo",
    idade: 45,
  },
];

//find basicamente vai retornar o primeiro documento de dentro do array que satisfaça o que foi procurado
//já o findIndex vai retornar o index do documento que satisfaz o que foi passado

const pessoaAntonio = pessoas.findIndex((pessoa) => pessoa.name === "Antonio");

console.log(pessoaAntonio);
