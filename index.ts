import { main } from "./gerar-saida.ts";

const { log: print } = console
const [caminhoDoArquivo] = Deno.args;

if (!caminhoDoArquivo) {
  throw new Error("É necessário fornecer o caminho do arquivo como argumento.")
}

try {
  const entrada = await Deno.readTextFile(caminhoDoArquivo);
  const saida = main(entrada)
  print(saida)
  
} catch (error) {
  console.log(error)
  throw new Error("Erro ao ler o arquivo:", error.message);
}