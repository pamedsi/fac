import { C2paraDec, SMparaDec } from "./utils/conversores.ts"
import { operarC2, somarEmSM, subtrairEmSM } from "./operacoes/operacoes-em-SM-e-C2.ts"

const { log: print } = console
const entradas = (await Deno.readTextFile("./entradas.txt")).split('\n')

function main(entradas: string[]) {

  for (let index = 0; index < entradas.length; index++) {
    
    if (entradas[index]) {
      const [valor1, valor2] = [entradas[index], entradas[index + 1]]
      index++

    // Convertido de Sinal e Magnitude
    print(SMparaDec(valor1))
    print(SMparaDec(valor2))
    print()

    // Operando em Sinal e Magnitude
    const somaEmSM = somarEmSM(valor1, valor2, 32)
    const subtracaoEmSM = subtrairEmSM(valor1, valor2, 32)
    print(somaEmSM)

    print(subtracaoEmSM)
    print()
    print(SMparaDec(somaEmSM))
    print(SMparaDec(subtracaoEmSM))

    // Operando em Complemento a 2:
    print()
    print(C2paraDec(valor1))
    print(C2paraDec(valor2))
    const somaEmC2 = operarC2(valor1, valor2, 32, "+")
    const subtracaoEmC2 = operarC2(valor1, valor2, 32, "-")
    print()
    print(somaEmC2)
    print(subtracaoEmC2)
    print()
    print(C2paraDec(somaEmC2))
    print(C2paraDec(subtracaoEmC2))

    }
  }
}
main(entradas)