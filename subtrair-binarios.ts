import { C2paraBinario, SMParaBinario } from "./conversores.ts"
import { modulo, moduloBinario } from "./funcoes-ajudadoras.ts";
import { somarBinariosPositivos } from "./operacoes.ts"

export const subtrairBinarios = function (valor1: string, valor2: string, tipo?: "SM" | "C2" ) {
  if (tipo && tipo !== "C2" && tipo !== "SM") throw new Error("Tipo inválido! Insira apenas 'SM' para Sinal e Magnitude ou 'C2' para Complemento a 2.")
  let valor1EmBinario: string, valor2EmBinario: string
  
  switch (tipo) {
    case "SM":
      [valor1EmBinario, valor2EmBinario] = [SMParaBinario(valor1), SMParaBinario(valor2)]    
      break
    case "C2":
      [valor1EmBinario, valor2EmBinario] = [C2paraBinario(valor1), C2paraBinario(valor2)]
      break
    default:
      [valor1EmBinario, valor2EmBinario] = [valor1, valor2]
      break
  }

  const pegarDoProximo = function (valor: string, index: number) {
    const posicaoDePegarDoProximo = index
    const valorAlterado = valor.split('')
    
    while (valor[index] !== "1") {
      index--
      if (index < 0) break
    }
  
    valorAlterado[index] = "0"
    index++
  
    while (index !== posicaoDePegarDoProximo) {
      valorAlterado[index] = "1"
      index++
    }
  
    index = posicaoDePegarDoProximo
    return valorAlterado.join('')
  }

  const calcularSubtracao = function(maiorValor: string, menorValor: string) {
    while (menorValor[index2]) {
      if(maiorValor[index1] === "1" && menorValor[index2] === "0") {
        resultado.unshift("1")
        index1--
        index2--
      }
      else if (maiorValor[index1] === "0" && menorValor[index2] === "1") {
        maiorValor = pegarDoProximo(maiorValor, index1)
        resultado.unshift("1")
        index1--
        index2--
      }
      else {
        index1--
        index2--
        resultado.unshift("0")
      }
    }
  }

  const resultado = []
  let index1 = valor1.length - 1
  let index2 = valor2.length - 1

  // A conversão para decimal é feita apenas para saber qual número é maior.
  const [valor1EmDecimal, valor2EmDecimal] = [parseInt(valor1EmBinario, 2), parseInt(valor2EmBinario, 2)]

  if (valor1EmDecimal === valor2EmDecimal) resultado.push("0")
  else if (valor1EmDecimal > 0 && valor2EmDecimal < 0) {
    const soma = somarBinariosPositivos(valor1EmBinario, moduloBinario(valor2EmBinario))
    resultado.push(...soma)
  }
  else if (valor1EmDecimal < 0 && valor2EmDecimal > 0) {
    const soma = somarBinariosPositivos(moduloBinario(valor1EmBinario), valor2EmBinario)
    resultado.push(...soma)
    resultado.unshift('-')
  }
  else if (valor1EmDecimal > valor2EmDecimal && valor2EmDecimal > 0) calcularSubtracao(valor1EmBinario, valor2EmBinario)
  else if (valor2EmDecimal > valor1EmDecimal && valor1EmDecimal > 0) {
    calcularSubtracao(valor2EmBinario, valor1EmBinario)
    resultado.unshift('-')
  }
  else if (valor1EmDecimal < 0 && valor2EmDecimal < 0 && modulo(valor1EmDecimal) > modulo(valor2EmDecimal)) {
    calcularSubtracao(valor1EmBinario, valor2EmBinario)
    resultado.unshift('-')
  }
  else if (valor1EmDecimal < 0 && valor2EmDecimal < 0 && modulo(valor1EmDecimal) < modulo(valor2EmDecimal)) {
    calcularSubtracao(valor2EmBinario, valor1EmBinario)
  }

  return resultado.join('')

}

// A = valor1 e valor2 sendo iguais => ex: (-4,-4) ... resulta em 0
// B = valor1 sendo positivo e valor2 negativo => ex: (5,-3) ... resulta num positivo ok
// C = valor2 sendo positivo e valor1 negativo => ex: (-3,5) ... resulta num negativo ok
// D = valor1 sendo maior que valor2 (os 2 positivos) => ex: (4, 2) ... resulta num positivo ok
// E = valor2 sendo maior que valor1 (os 2 positivos) => ex: (1, 2) ... resulta num negativo ok
// F = valor1 sendo (em módulo) maior que valor2 (os 2 negativos) => ex: (-3, -2) ... resulta num negativo ok
// G = valor2 sendo (em módulo) maior que valor1 (os 2 negativos) => ex: (-1, -2) ... resulta num positivo ok