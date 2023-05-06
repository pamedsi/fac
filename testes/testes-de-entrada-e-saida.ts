import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";
import { main } from "../gerar-saida.ts";
// import { walkSync } from "https://deno.land/std@0.186.0/fs/mod.ts";

// deno test --allow-read testes/testes-de-entrada-e-saida.ts

const saidaEsperada1 = (await Deno.readTextFile(`./saidas/saida1.txt`)).replace(/\r\n/g, "\n")
const entrada1 = await Deno.readTextFile(`./entradas/entrada1.txt`)
Deno.test(`Para 10000000000000000000000000001011 e 00000000000000000000000000001010 deve retornar:\n\n${saidaEsperada1}`, () => {
  const saidaDoPrograma = main(entrada1)
  assertEquals(saidaDoPrograma, saidaEsperada1);
});

const saidaEsperada2 = (await Deno.readTextFile(`./saidas/saida2.txt`)).replace(/\r\n/g, "\n")
const entrada2 = await Deno.readTextFile(`./entradas/entrada2.txt`)
Deno.test(`Para 10000000000000000000000000000000 e 00000000000000000000000000000001 deve retornar:\n\n${saidaEsperada2}`, () => {
  const saidaDoPrograma = main(entrada2)
  assertEquals(saidaDoPrograma, saidaEsperada2);
});

const saidaEsperada3 = (await Deno.readTextFile(`./saidas/saida3.txt`)).replace(/\r\n/g, "\n")
const entrada3 = await Deno.readTextFile(`./entradas/entrada3.txt`)
Deno.test(`Para 01111111111111111111111111111111 e 00000000000000000000000000000010 deve retornar:\n\n${saidaEsperada3}`, () => {
  const saidaDoPrograma = main(entrada3)
  assertEquals(saidaDoPrograma, saidaEsperada3);
});

const saidaEsperada4 = (await Deno.readTextFile(`./saidas/saida4.txt`)).replace(/\r\n/g, "\n")
const entrada4 = await Deno.readTextFile(`./entradas/entrada4.txt`)
Deno.test(`Para 11000000000000000000000000000000 e 10101010101010101010101010101010 deve retornar:\n\n${saidaEsperada4}`, () => {
  const saidaDoPrograma = main(entrada4)
  assertEquals(saidaDoPrograma, saidaEsperada4);
});

const saidaEsperada5 = (await Deno.readTextFile(`./saidas/saida5.txt`)).replace(/\r\n/g, "\n")
const entrada5 = await Deno.readTextFile(`./entradas/entrada5.txt`)
Deno.test(`Para 00000000000000000000000000000100 e 11111111111111111111111111111100 deve retornar:\n\n${saidaEsperada5}`, () => {
  const saidaDoPrograma = main(entrada5)
  assertEquals(saidaDoPrograma, saidaEsperada5);
});

const saidaEsperada6 = (await Deno.readTextFile(`./saidas/saida6.txt`)).replace(/\r\n/g, "\n")
const entrada6 = await Deno.readTextFile(`./entradas/entrada6.txt`)
Deno.test(`Para 10101010101010101010101010101010 e 01010101010101010101010101010101 deve retornar:\n\n${saidaEsperada6}`, () => {
  const saidaDoPrograma = main(entrada6)
  assertEquals(saidaDoPrograma, saidaEsperada6);
});

const saidaEsperada7 = (await Deno.readTextFile(`./saidas/saida7.txt`)).replace(/\r\n/g, "\n")
const entrada7 = await Deno.readTextFile(`./entradas/entrada7.txt`)
Deno.test(`Para 01111111111111111111111111111111 e 11111111111111111111111111111111 deve retornar:\n\n${saidaEsperada7}`, () => {
  const saidaDoPrograma = main(entrada7)
  assertEquals(saidaDoPrograma, saidaEsperada7);
});

const saidaEsperada8 = (await Deno.readTextFile(`./saidas/saida8.txt`)).replace(/\r\n/g, "\n")
const entrada8 = await Deno.readTextFile(`./entradas/entrada8.txt`)
Deno.test(`Para 10000000000000000000000000000001 e 00000000000000000000000000000010 deve retornar:\n\n${saidaEsperada8}`, () => {
  const saidaDoPrograma = main(entrada8)
  assertEquals(saidaDoPrograma, saidaEsperada8);
});

const saidaEsperada9 = (await Deno.readTextFile(`./saidas/saida9.txt`)).replace(/\r\n/g, "\n")
const entrada9 = await Deno.readTextFile(`./entradas/entrada9.txt`)
Deno.test(`Para 11111111111111111111111000001100 e 00000000000000000000001111101000 deve retornar:\n\n${saidaEsperada9}`, () => {
  const saidaDoPrograma = main(entrada9)
  assertEquals(saidaDoPrograma, saidaEsperada9);
});

const saidaEsperada10 = (await Deno.readTextFile(`./saidas/saida10.txt`)).replace(/\r\n/g, "\n")
const entrada10 = await Deno.readTextFile(`./entradas/entrada10.txt`)
Deno.test(`Para 00000000010101010101010111101101 e 00110011001100110011001100110011 deve retornar:\n\n${saidaEsperada10}`, () => {
  const saidaDoPrograma = main(entrada10)
  assertEquals(saidaDoPrograma, saidaEsperada10);
});

const saidaEsperada11 = (await Deno.readTextFile(`./saidas/saida11.txt`)).replace(/\r\n/g, "\n")
const entrada11 = await Deno.readTextFile(`./entradas/entrada11.txt`)
Deno.test(`Para 11111111111111111111111111111111 e 00000000000000000000000000000001 deve retornar:\n\n${saidaEsperada11}`, () => {
  const saidaDoPrograma = main(entrada11)
  assertEquals(saidaDoPrograma, saidaEsperada11);
});

// for (const entry of walkSync("./entradas")) {
//   if (entry.isFile) {
//     let index = Number(entry.name.split('')[7])
//     if (Number(entry.name.split('')[8] != '.')) index = Number(entry.name.split('')[7] + entry.name.split('')[8])

//     const entrada = await Deno.readTextFile(`./entradas/${entry.name}`)
//     const saidaEsperada = await Deno.readTextFile(`./saidas/saida${index}.txt`)
//     const [valor1, valor2] = entrada.split('\n')

  // Deno.test(`Para ${valor1} e ${valor2} deve retornar:\n\n${saidaEsperada}`, async () => {
  //   const entrada = await Deno.readTextFile(`./entradas/${entry.name}`)
  //   const saidaEsperada = await Deno.readTextFile(`./saidas/saida${index}.txt`)
  //   const saidaDoPrograma = main(entrada)
  //   console.log(saidaEsperada === saidaDoPrograma)
  //   assertEquals(saidaDoPrograma, saidaEsperada);
  //   console.log(`Teste ${index} passou!`)
  // });
  
//   }
// }
