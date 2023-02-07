// métodos normais precisam que a classe seja instanciada(seja chamada com aquela palavrinha 'NEW'), enquanto que métodos estáticos não precisam
// super pega as propriedades do constructor() da classe pai e herda => temos que passar o super para pegar o constructor da classe base

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} fez algum barulho`);
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  falar() {
    console.log(`${this.nome} latiu!`);
  }
}

const cachorro = new Cachorro("Simba");
cachorro.falar();
