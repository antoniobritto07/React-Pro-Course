const pessoa = {
  nome: "Antonio",
  sobrenome: "Britto",
  idade: 22,
};
/* 
const { nome, sobrenome, idade } = pessoa;

console.log(nome, sobrenome, idade);
 */
/* ----------- */

const piloto = {
  dadosPessoais: {
    nome: "Ayrton Senna",
    idade: 34,
  },
  dadosProfissionais: {
    categoria: "Formula 1",
    conquistas: "É o melhor de todos os tempos!",
  },
};

const dadosGeraisPiloto = {
  ...piloto.dadosPessoais,
  ...piloto.dadosProfissionais,
};

console.log(dadosGeraisPiloto);
