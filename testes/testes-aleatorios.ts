import { somarBinarios } from "../operacoes/somar-binarios.ts";
import { subtrairBinarios } from "../operacoes/subtrair-binarios.ts";

const executarTestesSubtrairBinarios = () => {
  let falhou = false;

  for (let i = 0; i < 1000000; i++) {
    const valor1 = Math.floor(Math.random() * 2000) - 1000;
    const valor2 = Math.floor(Math.random() * 2000) - 1000;
    
    const valor1Binario = valor1.toString(2);
    const valor2Binario = valor2.toString(2);

    const resultadoEsperado = (valor1 - valor2).toString(2);
    const resultadoFuncao = subtrairBinarios(valor1Binario, valor2Binario);

    if (resultadoEsperado !== resultadoFuncao) {
      console.log(`Teste ${i + 1} falhou!`);
      console.log(`valor1: ${valor1}`);
      console.log(`valor2: ${valor2}`);
      console.log(`valor1Binario: ${valor1Binario}`);
      console.log(`valor2Binario: ${valor2Binario}`);
      console.log(`resultadoEsperado: ${resultadoEsperado}`);
      console.log(`resultadoFuncao: ${resultadoFuncao}`);
      console.log("----------------------");
      falhou = true;
    }
  }

  if (!falhou) {
    console.log("Todos os testes de subtrair passaram!");
  }
}

const executarTestesSomarBinarios = () => {
  let falhou = false;

  for (let i = 0; i < 1000000; i++) {
    const valor1 = Math.floor(Math.random() * 2000) - 1000;
    const valor2 = Math.floor(Math.random() * 2000) - 1000;

    const valor1Binario = valor1.toString(2);
    const valor2Binario = valor2.toString(2);

    const resultadoEsperado = (valor1 + valor2).toString(2);
    const resultadoFuncao = somarBinarios(valor1Binario, valor2Binario);

    if (resultadoEsperado !== resultadoFuncao) {
      console.log(`Teste ${i + 1} falhou!`);
      console.log(`valor1: ${valor1}`);
      console.log(`valor2: ${valor2}`);
      console.log(`valor1Binario: ${valor1Binario}`);
      console.log(`valor2Binario: ${valor2Binario}`);
      console.log(`resultadoEsperado: ${resultadoEsperado}`);
      console.log(`resultadoFuncao: ${resultadoFuncao}`);
      console.log("----------------------");
      falhou = true;
    }
  }

  if (!falhou) {
    console.log("Todos os testes de somar passaram!");
  }
}

executarTestesSubtrairBinarios();
executarTestesSomarBinarios();