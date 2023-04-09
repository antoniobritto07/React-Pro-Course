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

const informacoesSobrePessoas = pessoas.map(({ nome, idade }) =>
  idade >= 18 ? `${nome} pode ir para Matrix` : `${nome} não tem a idade mínina`
);

console.log(informacoesSobrePessoas);
