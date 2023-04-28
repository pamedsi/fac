import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";
import { subtrairBinarios } from "./subtrair-binarios.ts";
import { somarBinarios } from "./somar-binarios.ts";

// comando a ser executado no terminal: $ deno test url_test.ts
// Testes personalizados:
{
  Deno.test("subtrairBinarios('0', '0') deve retornar '0'", () => {
    const resultado = subtrairBinarios("0", "0")
    assertEquals(resultado, "0");
  });

  Deno.test("subtrairBinarios('1', '0') deve retornar '1'", () => {
    const resultado = subtrairBinarios("1", "0")
    assertEquals(resultado, "1");
  });

  Deno.test("subtrairBinarios('101', '1') deve retornar '100'", () => {
    const resultado = subtrairBinarios("101", "1")
    assertEquals(resultado, "100");
  });

  Deno.test("subtrairBinarios('111', '10') deve retornar '101'", () => {
    const resultado = subtrairBinarios("111", "10")
    assertEquals(resultado, "101");
  });

  Deno.test("subtrairBinarios('101', '11') deve retornar '10'", () => {
    const resultado = subtrairBinarios("101", "11")
    assertEquals(resultado, "10");
  });

  Deno.test("subtrairBinarios('110', '101') deve retornar '1'", () => {
    const resultado = subtrairBinarios("110", "101")
    assertEquals(resultado, "1");
  });

  Deno.test("subtrairBinarios('111', '100') deve retornar '11'", () => {
    const resultado = subtrairBinarios("111", "100")
    assertEquals(resultado, "11");
  });

  Deno.test("subtrairBinarios('110', '100') deve retornar '10'", () => {
    const resultado = subtrairBinarios("110", "100")
    assertEquals(resultado, "10");
  });
    
  Deno.test("subtrairBinarios('111', '101') deve retornar '10'", () => {
    const resultado = subtrairBinarios("111", "101")
    assertEquals(resultado, "10");
  });

  Deno.test("subtrairBinarios('1010', '110') deve retornar '100'", () => {
    const resultado = subtrairBinarios("1010", "110")
    assertEquals(resultado, "100");
  });
    
  Deno.test("subtrairBinarios('1011', '1100') deve retornar '-1'", () => {
    const resultado = subtrairBinarios("1011", "1100")
    assertEquals(resultado, "-1");
  });

  Deno.test("subtrairBinarios('1100', '1011') deve retornar '1'", () => {
    const resultado = subtrairBinarios("1100", "1011")
    assertEquals(resultado, "1");
  });

  Deno.test("subtrairBinarios('10101', '10100') deve retornar '1'", () => {
    const resultado = subtrairBinarios("10101", "10100")
    assertEquals(resultado, "1");
  });

  Deno.test("subtrairBinarios('10101', '1111') deve retornar '110'", () => {
    const resultado = subtrairBinarios("10101", "1111")
    assertEquals(resultado, "110");
  });

  Deno.test("subtrairBinarios('-110', '101') deve retornar '-1011'", () => {
    const resultado = subtrairBinarios("-110", "101");
    assertEquals(resultado, "-1011");
  });

  Deno.test("subtrairBinarios('101', '-111') deve retornar '1100'", () => {
    const resultado = subtrairBinarios("101", "-111");
    assertEquals(resultado, "1100");
  });

  Deno.test("subtrairBinarios('-110', '-101') deve retornar '-1'", () => {
    const resultado = subtrairBinarios("-110", "-101");
    assertEquals(resultado, "-1");
  });

  Deno.test("subtrairBinarios('-1011', '111') deve retornar '-10010'", () => {
    const resultado = subtrairBinarios("-1011", "111");
    assertEquals(resultado, "-10010");
  });

  Deno.test("subtrairBinarios('10101', '-1111') deve retornar '100100'", () => {
    const resultado = subtrairBinarios("10101", "-1111");
    assertEquals(resultado, "100100");
  });

  Deno.test("subtrairBinarios('-101010', '101010') deve retornar '-1010100'", () => {
    const resultado = subtrairBinarios("-101010", "101010");
    assertEquals(resultado, "-1010100");
  });

  Deno.test("subtrairBinarios('111111', '-101010') deve retornar '1101001'", () => {
    const resultado = subtrairBinarios("111111", "-101010");
    assertEquals(resultado, "1101001");
  });
    
  Deno.test("subtrairBinarios('-1100101', '-11001') deve retornar '-1001100'", () => {
    const resultado = subtrairBinarios("-1100101", "-11001");
    assertEquals(resultado, "-1001100");
  });

  Deno.test("subtrairBinarios('1100101', '-100') deve retornar '1101001'", () => {
    const resultado = subtrairBinarios("1100101", "-100");
    assertEquals(resultado, "1101001");
  });

  Deno.test("subtrairBinarios('-101010101', '11111111') deve retornar '-1001010100'", () => {
    const resultado = subtrairBinarios("-101010101", "11111111");
    assertEquals(resultado, "-1001010100");
  });

  Deno.test("subtrairBinarios('-1100101', '-1100100101') deve retornar '1011000000'", () => {
    const resultado = subtrairBinarios("-1100101", "-1100100101");
    assertEquals(resultado, "1011000000");
  });

  Deno.test("subtrairBinarios('-101', '111') deve retornar '-1100'", () => {
    const resultado = subtrairBinarios("-101", "111");
    assertEquals(resultado, "-1100");
  });

  Deno.test("subtrairBinarios('-1001', '11010') deve retornar '-100011'", () => {
    const resultado = subtrairBinarios("-1001", "11010");
    assertEquals(resultado, "-100011");
  });

  Deno.test("subtrairBinarios('-11', '100') deve retornar '-111'", () => {
    const resultado = subtrairBinarios("-11", "100");
    assertEquals(resultado, "-111");
  });

  Deno.test("subtrairBinarios('-11001', '111111') deve retornar '-1011000'", () => {
    const resultado = subtrairBinarios("-11001", "111111");
    assertEquals(resultado, "-1011000");
  });

  Deno.test("subtrairBinarios('-101010', '110011') deve retornar '-1011101'", () => {
    const resultado = subtrairBinarios("-101010", "110011");
    assertEquals(resultado, "-1011101");
  });

  Deno.test("subtrairBinarios('-1011', '-111001') deve retornar '-1000100'", () => {
    const resultado = subtrairBinarios("-1011", "111001");
    console.log(resultado)
    assertEquals(resultado, "-1000100");
  });
}

// Testes aleatórios:

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