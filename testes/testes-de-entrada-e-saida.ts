import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts";
import { walkSync } from "https://deno.land/std@0.186.0/fs/mod.ts";
import { main } from "../gerar-saida.ts";

for (const entry of walkSync("./entradas")) {
  if (entry.isFile) {
    let index = Number(entry.name.split('')[7])
    if (Number(entry.name.split('')[8] != '.')) index = Number(entry.name.split('')[7] + entry.name.split('')[8])

    const entrada = await Deno.readTextFile(`./entradas/${entry.name}`)
    const saidaEsperada = await Deno.readTextFile(`./saidas/saida${index}.txt`)
    const [valor1, valor2] = entrada.split('\n')

  Deno.test(`Para ${valor1} e ${valor2} deve retornar:\n\n${saidaEsperada}`, async () => {
    const entrada = await Deno.readTextFile('./entradas/entrada1.txt')
    const saidaEsperada = await Deno.readTextFile('./saidas/saida1.txt')
    const saidaDoPrograma = main(entrada)
    assertEquals(saidaDoPrograma, saidaEsperada);
  });
  console.log(`Teste ${index} passou!`)
  }
}
