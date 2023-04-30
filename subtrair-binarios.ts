import { C2paraBinario, SMParaBinario } from "./conversores.ts"
import { modulo, moduloBinario, pegarDoProximo, removerZeros } from "./funcoes-ajudadoras.ts";
import { somarBinariosPositivos } from "./funcoes-ajudadoras.ts"

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

  // A conversão para decimal é feita apenas para saber qual número é maior.
  const [valor1EmDecimal, valor2EmDecimal] = [parseInt(valor1EmBinario, 2), parseInt(valor2EmBinario, 2)]
  valor1EmBinario = moduloBinario(valor1EmBinario)
  valor2EmBinario = moduloBinario(valor2EmBinario)

  const resultado: string[] = []
  let index1 = valor1EmBinario.length - 1
  let index2 = valor2EmBinario.length - 1

  const calcularSubtracao = function(maiorValor: string, menorValor: string, valor2EhMaior?: true) {
    if (valor2EhMaior) [index1, index2] = [index2, index1]
    let contador = 0

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
      contador++
    }
    return maiorValor
  }

  if (valor1 === valor2) resultado.push("0")
  else if (valor1EmDecimal >= 0 && valor2EmDecimal < 0) {
    const soma = somarBinariosPositivos(valor1EmBinario, moduloBinario(valor2EmBinario))
    resultado.push(...soma)
  }
  else if (valor1EmDecimal < 0 && valor2EmDecimal >= 0) {
    const soma = somarBinariosPositivos(moduloBinario(valor1EmBinario), valor2EmBinario)
    resultado.push(...soma)
    resultado.unshift('-')
  }
  else if (valor1EmDecimal > valor2EmDecimal && valor2EmDecimal >= 0)  {
    valor1EmBinario = calcularSubtracao(valor1EmBinario, valor2EmBinario)
    for (let index = index1; index >= 0; index--) resultado.unshift(valor1EmBinario[index])
  }
  else if (valor2EmDecimal > valor1EmDecimal && valor1EmDecimal >= 0) {
    valor2EmBinario = calcularSubtracao(valor2EmBinario, valor1EmBinario, true)
    for (let index = index1; index >= 0; index--) resultado.unshift((valor2EmBinario[index]))
    resultado.unshift('-')
  }
  else if (valor1EmDecimal < 0 && valor2EmDecimal < 0 && modulo(valor1EmDecimal) > modulo(valor2EmDecimal)) {
    valor1EmBinario = calcularSubtracao(valor1EmBinario, valor2EmBinario)
    for (let index = index1; index >= 0; index--) resultado.unshift(valor1EmBinario[index])
    resultado.unshift('-')
  }
  else if (valor1EmDecimal < 0 && valor2EmDecimal < 0 && modulo(valor1EmDecimal) < modulo(valor2EmDecimal)) {
    valor2EmBinario = calcularSubtracao(valor2EmBinario, valor1EmBinario, true)
    // Passei o index1 para se referir ao index do valor2, porque quando é passado "true" como terceiro argumento da função
    // a função "calcularSubtracao" inverte os valores, index1 passar a ser index2 e vice-versa.
    for (let index = index1; index >= 0; index--) resultado.unshift((valor2EmBinario[index]))
  }

  if (resultado.join('') === "0") return "0"
  return removerZeros(resultado.join(''))
}