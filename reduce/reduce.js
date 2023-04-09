const foguetes = [
  { pais: "Russia", lancamentos: 32 },
  { pais: "EUA", lancamentos: 23 },
  { pais: "China", lancamentos: 16 },
  { pais: "Europe", lancamentos: 7 },
  { pais: "BR", lancamentos: 21 },
  { pais: "Japao", lancamentos: 3 },
];

//primeiro parametro = acumulador
//item que ele percorre do array passado
const totalDeLancamentos = foguetes.reduce(
  (acc, item) => (acc = acc + item.lancamentos),
  0
);

console.log(totalDeLancamentos);
