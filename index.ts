import { C2paraDec, SMparaDec } from "./utils/conversores.ts"
import { operarC2, somarEmSM, subtrairEmSM } from "./operacoes/operacoes-em-SM-e-C2.ts"

const { log: print } = console
const [caminhoDoArquivo] = Deno.args;

if (!caminhoDoArquivo) {
  throw new Error("É necessário fornecer o caminho do arquivo como argumento.")
}

function main (entrada: string) {

  const [valor1, valor2] = entrada.split('\n')

  // Operando em Sinal e Magnitude
  const valor1DecimalDeSM = SMparaDec(valor1)
  const valor2DecimalDeSM = SMparaDec(valor2)
  
  const somaEmSM = somarEmSM(valor1, valor2, 32)
  const subtracaoEmSM = subtrairEmSM(valor1, valor2, 32)

  const somaEmSMEmDec = SMparaDec(somaEmSM)
  const subtracaoEmSMEmDec = SMparaDec(subtracaoEmSM)

  // Operando em Complemento a 2:
  const valor1DecimalDeC2 =  C2paraDec(valor1)
  const valor2DecimalDeC2 =  C2paraDec(valor2)
  
  const somaEmC2 = operarC2(valor1, valor2, 32, "+")
  const subtracaoEmC2 = operarC2(valor1, valor2, 32, "-")

  const somaEmC2EmDec = C2paraDec(somaEmC2)
  const subtracaoEmC2EmDec = C2paraDec(subtracaoEmC2)

  const saida = `${valor1DecimalDeSM}\n${valor2DecimalDeSM}\n
${somaEmSM}
${subtracaoEmSM}

${somaEmSMEmDec}
${subtracaoEmSMEmDec}

${valor1DecimalDeC2}
${valor2DecimalDeC2}

${somaEmC2}
${subtracaoEmC2}

${somaEmC2EmDec}
${subtracaoEmC2EmDec}`

return saida
}

try {
  const entrada = await Deno.readTextFile(caminhoDoArquivo);
  const saida = main(entrada)
  print(saida)
  
} catch (error) {
  throw new Error("Erro ao ler o arquivo:", error.message);
}