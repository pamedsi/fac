
import { modulo, moduloBinario } from "./funcoes-ajudadoras.ts";
import { somarBinariosPositivos } from "./operacoes.ts";
import { subtrairBinarios } from "./subtrair-binarios.ts";

export const somarBinarios = function (valor1: string, valor2: string) {
  const [valor1EmDecimal, valor2EmDecimal] = [parseInt(valor1, 2), parseInt(valor2, 2)]
  const valor1EmModulo = moduloBinario(valor1)
  const valor2EmModulo = moduloBinario(valor2)

  const resultado: string[] = []
  // A = valor1 e valor2 sendo positivos => ex: (10,10) ... resulta em positivo
  if (valor1EmDecimal >= 0 && valor2EmDecimal >= 0) resultado.push(...somarBinariosPositivos(valor1, valor2))
  // B = valor1 sendo positivo (e maior que valor2 em módulo) e valor2 negativo => ex: (101,-100) ... resulta num positivo
  else if (valor1EmDecimal >= 0 && modulo(valor1EmDecimal) > modulo(valor2EmDecimal) && valor2EmDecimal < 0) {
    resultado.push(...subtrairBinarios(valor1EmModulo, valor2EmModulo))
  }
  // C = valor1 sendo negativo (e maior que valor2 em módulo) e valor2 positivo => ex: (-111,110) ... resulta num negativo
  else if (valor1EmDecimal < 0 && modulo(valor1EmDecimal) > modulo(valor2EmDecimal) && valor2EmDecimal >= 0) {
    resultado.push(...subtrairBinarios(valor1EmModulo, valor2EmModulo))
    resultado.unshift("-")
  }
  // D = valor1 sendo positivo (e menor que valor2 em módulo) e valor2 negativo => ex: (101, -1000) ... resulta num negativo 
  else if (valor1EmDecimal >= 0 && modulo(valor1EmDecimal) < modulo(valor2EmDecimal) && valor2EmDecimal < 0) {
    resultado.push(...subtrairBinarios(valor2EmModulo, valor1EmModulo))
    resultado.unshift("-")
  }
 // E = valor1 sendo (em módulo) maior que valor2 (os 2 negativos) => ex: (-1010, -101) ... resulta num negativo
  else if (modulo(valor1EmDecimal) > modulo(valor2EmDecimal) && valor1EmDecimal < 0 && valor2EmDecimal < 0) {
    resultado.push(...subtrairBinarios(valor1EmModulo, valor2EmModulo))
    resultado.unshift("-")
  }
  // F = valor2 sendo (em módulo) maior que valor1 (os 2 negativos) => ex: (-1011, -111001) ... resulta num positivo
  else if (modulo(valor1EmDecimal) < modulo(valor2EmDecimal) && valor1EmDecimal < 0 && valor2EmDecimal < 0) {
    resultado.push(...subtrairBinarios(valor2EmModulo, valor1EmModulo))
    resultado.unshift("-")
  }

  return resultado.join('')
}