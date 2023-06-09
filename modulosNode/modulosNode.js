const fs = require("fs");

fs.writeFileSync(
  "mensagem.txt",
  "está mensagem está sendo escrita através de um módulo do node"
);

fs.appendFileSync(
  "mensagem.txt",
  "\n está é uma mensagem anexada na imagem original"
);
