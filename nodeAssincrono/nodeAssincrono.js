/* const myPromise = new Promise((resolve, reject) => {
  if (1 + 1 === 2) {
    reject("Falhou");
  }
});

myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
 */

const iniciarBancoDeDados = (senha) => {
  return new Promise((resolve, reject) => {
    console.log(`Iniciando o banco de dados... (senha inserida: ${senha})`);
    if (senha === "12345") {
      resolve("O banco de dados foi criado com sucesso!");
    } else {
      reject("Senha incorreta");
    }
  });
};

const prepararBancoDeDados = () => {
  return new Promise((resolve, reject) => {
    console.log("Preparando o banco de dados...");
    resolve("Banco de dados preparado com sucesso!");
  });
};

/* iniciarBancoDeDados("12345")
  .then((value) => {
    console.log(value);
    return prepararBancoDeDados();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  }); */

const prepararEIniciarBancoDeDados = async () => {
  try {
    await iniciarBancoDeDados("12345");
    await prepararBancoDeDados();
  } catch (err) {
    console.log(err);
  }
};

prepararEIniciarBancoDeDados();
