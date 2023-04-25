import { SMparaDec } from "./conversores.ts"
import { somarBinariosPositivos, subtrairBinarios } from "./operacoes.ts"
const { log: print } = console
const [valor1, valor2] = (await Deno.readTextFile("./entrada.txt")).split('\n')

// Convertido de Sinal e Magnitude
print(SMparaDec(valor1))
print(SMparaDec(valor2))

// Operando em Sinal e Magnitude
print(somarBinariosPositivos(valor1, valor2))
subtrairBinarios(valor1, valor2)

