import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";
import { main } from "../gerar-saida.ts";
// import { walkSync } from "https://deno.land/std@0.186.0/fs/mod.ts";

// deno test --allow-read testes/testes-de-entrada-e-saida.ts

const saidaEsperada1 = (await Deno.readTextFile(`./saidas/saida1.txt`)).replace(/\r\n/g, "\n")
const entrada1 = await Deno.readTextFile(`./entradas/entrada1.txt`)
const [valor1A, valor1B] = entrada1.split('\r\n')
Deno.test(`Para ${valor1A} e ${valor1B} deve retornar:\n\n${saidaEsperada1}`, () => {
  const saidaDoPrograma = main(entrada1)
  assertEquals(saidaDoPrograma, saidaEsperada1);
});

const saidaEsperada2 = (await Deno.readTextFile(`./saidas/saida2.txt`)).replace(/\r\n/g, "\n");
const entrada2 = await Deno.readTextFile(`./entradas/entrada2.txt`);
const [valor2A, valor2B] = entrada2.split('\r\n');
Deno.test(`Para ${valor2A} e ${valor2B} deve retornar:\n\n${saidaEsperada2}`, () => {
  const saidaDoPrograma = main(entrada2);
  assertEquals(saidaDoPrograma, saidaEsperada2);
});

const saidaEsperada3 = (await Deno.readTextFile(`./saidas/saida3.txt`)).replace(/\r\n/g, "\n");
const entrada3 = await Deno.readTextFile(`./entradas/entrada3.txt`);
const [valor3A, valor3B] = entrada3.split('\r\n');
Deno.test(`Para ${valor3A} e ${valor3B} deve retornar:\n\n${saidaEsperada3}`, () => {
  const saidaDoPrograma = main(entrada3);
  assertEquals(saidaDoPrograma, saidaEsperada3);
});

const saidaEsperada4 = (await Deno.readTextFile(`./saidas/saida4.txt`)).replace(/\r\n/g, "\n");
const entrada4 = await Deno.readTextFile(`./entradas/entrada4.txt`);
const [valor4A, valor4B] = entrada4.split('\r\n');
Deno.test(`Para ${valor4A} e ${valor4B} deve retornar:\n\n${saidaEsperada4}`, () => {
  const saidaDoPrograma = main(entrada4);
  assertEquals(saidaDoPrograma, saidaEsperada4);
});

const saidaEsperada5 = (await Deno.readTextFile(`./saidas/saida5.txt`)).replace(/\r\n/g, "\n");
const entrada5 = await Deno.readTextFile(`./entradas/entrada5.txt`);
const [valor5A, valor5B] = entrada5.split('\r\n');
Deno.test(`Para ${valor5A} e ${valor5B} deve retornar:\n\n${saidaEsperada5}`, () => {
  const saidaDoPrograma = main(entrada5);
  assertEquals(saidaDoPrograma, saidaEsperada5);
});

const saidaEsperada6 = (await Deno.readTextFile(`./saidas/saida6.txt`)).replace(/\r\n/g, "\n");
const entrada6 = await Deno.readTextFile(`./entradas/entrada6.txt`);
const [valor6A, valor6B] = entrada6.split('\r\n');
Deno.test(`Para ${valor6A} e ${valor6B} deve retornar:\n\n${saidaEsperada6}`, () => {
  const saidaDoPrograma = main(entrada6);
  assertEquals(saidaDoPrograma, saidaEsperada6);
});

const saidaEsperada7 = (await Deno.readTextFile(`./saidas/saida7.txt`)).replace(/\r\n/g, "\n");
const entrada7 = await Deno.readTextFile(`./entradas/entrada7.txt`);
const [valor7A, valor7B] = entrada7.split('\r\n');
Deno.test(`Para ${valor7A} e ${valor7B} deve retornar:\n\n${saidaEsperada7}`, () => {
  const saidaDoPrograma = main(entrada7);
  assertEquals(saidaDoPrograma, saidaEsperada7);
});

const saidaEsperada8 = (await Deno.readTextFile(`./saidas/saida8.txt`)).replace(/\r\n/g, "\n");
const entrada8 = await Deno.readTextFile(`./entradas/entrada8.txt`);
const [valor8A, valor8B] = entrada8.split('\r\n');
Deno.test(`Para ${valor8A} e ${valor8B} deve retornar:\n\n${saidaEsperada8}`, () => {
  const saidaDoPrograma = main(entrada8);
  assertEquals(saidaDoPrograma, saidaEsperada8);
});

const saidaEsperada9 = (await Deno.readTextFile(`./saidas/saida9.txt`)).replace(/\r\n/g, "\n");
const entrada9 = await Deno.readTextFile(`./entradas/entrada9.txt`);
const [valor9A, valor9B] = entrada9.split('\r\n');
Deno.test(`Para ${valor9A} e ${valor9B} deve retornar:\n\n${saidaEsperada9}`, () => {
  const saidaDoPrograma = main(entrada9);
  assertEquals(saidaDoPrograma, saidaEsperada9);
});

const saidaEsperada10 = (await Deno.readTextFile(`./saidas/saida10.txt`)).replace(/\r\n/g, "\n");
const entrada10 = await Deno.readTextFile(`./entradas/entrada10.txt`);
const [valor10A, valor10B] = entrada10.split('\r\n');
Deno.test(`Para ${valor10A} e ${valor10B} deve retornar:\n\n${saidaEsperada10}`, () => {
  const saidaDoPrograma = main(entrada10);
  assertEquals(saidaDoPrograma, saidaEsperada10);
});

const saidaEsperada11 = (await Deno.readTextFile(`./saidas/saida11.txt`)).replace(/\r\n/g, "\n");
const entrada11 = await Deno.readTextFile(`./entradas/entrada11.txt`);
const [valor11A, valor11B] = entrada11.split('\r\n');
Deno.test(`Para ${valor11A} e ${valor11B} deve retornar:\n\n${saidaEsperada11}`, () => {
  const saidaDoPrograma = main(entrada11);
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
