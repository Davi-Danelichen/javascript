let resultadoDado;
let lancamentos = 0;

while (resultadoDado !==6) {
    resultadoDado = Math.floor(Math.random() * 6) + 1;
    lancamento++;
    console.log(`Lançamento ${lancamentos}: Resultado do dado: ${resultadoDado}`);
}

console.log(`Finalmente! O numero 6 foi obtido após ${lancamento} lançamento.`);