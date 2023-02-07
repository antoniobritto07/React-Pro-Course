class Guerreiro {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  lutar() {
    console.log(
      `O guerreiro ${this.nome}, de ${this.idade} anos está lutando!`
    );
  }
}

class Viking extends Guerreiro {
  constructor(nome, idade) {
    super(nome, idade);
  }

  lutar() {
    console.log(
      `O viking ${this.nome}, de ${this.idade} anos está lutando em nome de Odin!`
    );
  }

  lutarComMachado() {
    console.log(
      `O viking ${this.nome}, de ${this.idade} anos está lutando com seu machado em nome de Thor!`
    );
  }
}

const guerreiroAntonio = new Guerreiro("Antônio", 22);
const vikingEnzo = new Viking("Enzo", 23);

vikingEnzo.lutarComMachado();
