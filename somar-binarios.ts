
import { modulo, moduloBinario } from "./funcoes-ajudadoras.ts";
import { somarBinariosPositivos } from "./funcoes-ajudadoras.ts";
import { subtrairBinarios } from "./subtrair-binarios.ts";

export const somarBinarios = function (valor1: string, valor2: string) {
  const [valor1EmDecimal, valor2EmDecimal] = [parseInt(valor1, 2), parseInt(valor2, 2)]
  const valor1EmModulo = moduloBinario(valor1)
  const valor2EmModulo = moduloBinario(valor2)

  const resultado: string[] = []

  if (valor1EmDecimal >= 0 && valor2EmDecimal >= 0) resultado.push(...somarBinariosPositivos(valor1, valor2))
  else if (valor1EmDecimal < 0 && valor2EmDecimal < 0) {
    resultado.push(...somarBinarios(valor1EmModulo, valor2EmModulo))
    resultado.unshift("-")
  }
  else if (valor1EmDecimal >= 0 && modulo(valor1EmDecimal) > modulo(valor2EmDecimal) && valor2EmDecimal < 0) {
    resultado.push(...subtrairBinarios(valor1EmModulo, valor2EmModulo))
  }

  else if (valor1EmDecimal < 0 && modulo(valor1EmDecimal) > modulo(valor2EmDecimal) && valor2EmDecimal >= 0) {
    resultado.push(...subtrairBinarios(valor1EmModulo, valor2EmModulo))
    resultado.unshift("-")
  }
  else if (valor1EmDecimal < 0 && modulo(valor1EmDecimal) < modulo(valor2EmDecimal) && valor2EmDecimal >= 0) {
    resultado.push(...subtrairBinarios(valor2EmModulo, valor1EmModulo))
  }

  else if (valor1EmDecimal >= 0 && modulo(valor1EmDecimal) < modulo(valor2EmDecimal) && valor2EmDecimal < 0) {
    resultado.push(...subtrairBinarios(valor2EmModulo, valor1EmModulo))
    resultado.unshift("-")
  }
  else if ((valor1EmDecimal >= 0 && valor2EmDecimal < 0 && modulo(valor1EmDecimal) === modulo(valor2EmDecimal)) || (valor2EmDecimal >= 0 && valor1EmDecimal < 0 && modulo(valor1EmDecimal) === modulo(valor2EmDecimal))) {
    resultado.push("0")
  }

  return resultado.join('')
}