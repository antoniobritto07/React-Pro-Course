const numeros = [1, 2, 3, 4, 5];
const numeroMultiplicadosPor2 = numeros.map((numero) => numero * 2);

//map sempre vai retornar uma lista
//map vai fazer uma iteração com o index do array
console.log(numeroMultiplicadosPor2);

const usuarios = [
  {
    nome: "antonio",
    idade: 22,
  },
  {
    nome: "tico",
    idade: 23,
  },
];

const usuariosComIdadeVezes2 = usuarios.map((usuario) => ({
  ...usuario,
  idade: usuario.idade * 2,
}));

console.log(usuariosComIdadeVezes2);
