import { SMparaDec } from "./conversores.ts"
import { somarEmSM, subtrairEmSM } from "./operacoes.ts";
const { log: print } = console
const [valor1, valor2] = (await Deno.readTextFile("./entrada.txt")).split('\n')

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
