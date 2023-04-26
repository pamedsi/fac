import { SMparaDec } from "./conversores.ts"
import { inverteBits, modulo } from "./funcoes-ajudadoras.ts"
import { subtrairBinarios } from "./subtrair-binarios.ts";

export const somarBinariosPositivos = function (valor1: string, valor2: string) {
  const resultado = []
  let index1 = valor1.length - 1
  let index2 = valor2.length - 1
  let veioUm = false

  const vaiUm = function () { veioUm = true }
  const naoVaiUm = function () { veioUm = false }

    while (valor1[index1] && valor2[index2]) {

      if (valor1[index1] !== valor2 [index2] && !veioUm) {
        resultado.unshift("1")
        naoVaiUm()
      }
      else if (valor1[index1] !== valor2 [index2]) {
        resultado.unshift("0")
        vaiUm()
      }
      else if (valor1[index1] === "0" && !veioUm) {
        resultado.unshift("0")
        naoVaiUm()
      }
      else if (valor1[index1] === "0") {
        resultado.unshift("1")
        naoVaiUm()
      }
      else if (valor1[index1] === "1" && !veioUm) {
        resultado.unshift("0")
        vaiUm()
      }
      else if (valor1[index1] === "1") {
        resultado.unshift("1")
        vaiUm()
      }

      index2--
      index1--
    }

    if (valor1.length === valor2.length && !veioUm) return resultado.join('')
    else if (valor1.length === valor2.length) resultado.unshift("1")
    else if (valor1.length > valor2.length && !veioUm) for (let index = index1; index >= 0; index--) resultado.unshift(valor1[index])
    else if (valor2.length > valor1.length && !veioUm) for (let index = index2; index >= 0; index--) resultado.unshift(valor2[index])
    else if (valor1.length > valor2.length) {
      let entrouNoWhile = false
      if (valor1[index1] === "0") {
        resultado.unshift("1")
        index1--
      }
      else while (valor1[index1] === "1") {
        entrouNoWhile = true
        resultado.unshift("0")
        index1--
      }
      if (entrouNoWhile) {
        resultado.unshift("1")
        index1--
      }
      for (let index = index1; index >= 0; index--) resultado.unshift(valor1[index])
    }
    else if (valor2.length > valor1.length) {
      let entrouNoWhile = false
      if (valor2[index2] === "0") {
        resultado.unshift("1")
        index2--
      }
      else while (valor2[index2] === "1") {
        entrouNoWhile = true
        resultado.unshift("0")
        index2--
      }
      if (entrouNoWhile) {
        resultado.unshift("1")
        index2--
      }
      for (let index = index2; index >= 0; index--) resultado.unshift(valor2[index])
    }

    return resultado.join('')
}

export const somarEmSM = function (valor1: string, valor2: string) {

  // Considerando que ambos são positivos:
  if (valor1[0] === "0" && valor2[0] === "0") return somarBinariosPositivos(valor1, valor2)

  if (valor1[0] !== valor2[0]) {
    // A conversão para decimal é feita apenas para verificar quem é o maior.
    const valor1EmDecimal = SMparaDec(valor1)
    const valor2EmDecimal = SMparaDec(valor2)

    let resultado: string

    if (modulo(valor1EmDecimal) > modulo(valor2EmDecimal)) resultado = subtrairBinarios(valor1, valor2, "SM")
    else resultado = subtrairBinarios(valor2, valor1, "SM")
    
    return resultado
  }

  // Remover o bit do sinal
  // Somar em binário (considerando que são positivos)
  // Atribui de novo o bit do sinal
  // Retorna
  return valor1 + valor2
}

export const operarC2 = function(valor1: string, valor2: string, operacao: "+" | "-") {
  if (operacao === "+") return somarBinariosPositivos(valor1, valor2)

  if (valor2[0] === "1") {
    const representacaoPositiva = somarBinariosPositivos(inverteBits(valor2), "1")
    return somarBinariosPositivos(valor1, representacaoPositiva)
  }
}