import { main } from "./gerar-saida.ts";

const { log: print } = console
let [caminhoDoArquivo] = Deno.args;

if (!caminhoDoArquivo) {
  console.info("Arquivo de entrada não foi passado como argumento.\nUtilizando 'entradas/entrada1.txt' como padrão.\n")
  caminhoDoArquivo = 'entradas/entrada1.txt'
}

try {
  const entrada = await Deno.readTextFile(caminhoDoArquivo);
  const saida = main(entrada)
  print(saida)
  
} catch (error) {
  console.log(error)
  throw new Error("Erro ao ler o arquivo:", error.message);
}