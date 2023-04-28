import { C2paraDec, SMparaDec } from "./conversores.ts"
import { inverteBits, modulo, removerPrimeiroBit, somarBinariosPositivos } from "./funcoes-ajudadoras.ts"
import { subtrairBinarios } from "./subtrair-binarios.ts";

export const somarEmSM = function (valor1: string, valor2: string, bits: number) {
  if (valor1.length !== bits || valor2.length !== bits) throw new Error(`Um dos valores passados não possuem ${bits} bits!`);
  // A conversão para decimal é feita apenas para verificar quem é o maior.
  const valor1EmDecimal = SMparaDec(valor1)
  const valor2EmDecimal = SMparaDec(valor2)
  const valor1SemBitDeSinal = removerPrimeiroBit(valor1)
  const valor2SemBitDeSinal = removerPrimeiroBit(valor2)
  const soma: string[] = []

  // Considerando que ambos têm o mesmo sinal:
  if (valor1[0] === valor2[0]) {
    soma.push(...somarBinariosPositivos(valor1SemBitDeSinal, valor2SemBitDeSinal))
    if (soma.length === bits) soma.shift()
    if (valor1[0] === "1") soma.unshift("1")
    else soma.unshift("0")
  }
  // Resultará num negativo
  else if (modulo(valor1EmDecimal) >= modulo(valor2EmDecimal) && valor1[0] === "1") {
    const subtracao = subtrairBinarios(valor1SemBitDeSinal, valor2SemBitDeSinal)
    soma.push(...subtracao)
    while (soma.length < bits - 1) soma.unshift("0")
    soma.unshift("1")
  }
  // Resultará num positivo:
  else if (modulo(valor2EmDecimal) < modulo(valor1EmDecimal) && valor1[0] === "1") {
    const subtracao = subtrairBinarios(valor2SemBitDeSinal, valor1SemBitDeSinal)
    soma.push(...subtracao)
    while (soma.length < bits) soma.unshift("0")
  } // Resultará num positivo:
  else if (modulo(valor1EmDecimal) > modulo(valor2EmDecimal) && valor1[0] === "0") {
    const subtracao = subtrairBinarios(valor1SemBitDeSinal, valor2SemBitDeSinal)
    soma.push(...subtracao)
    while (soma.length < bits) soma.unshift("0")
  } // Resultará num negativo:
  else if (modulo(valor1EmDecimal) < modulo(valor2EmDecimal) && valor1[0] === "0") {
    const subtracao = subtrairBinarios(valor2SemBitDeSinal, valor1SemBitDeSinal)
    soma.push(...subtracao)
    while (soma.length < bits - 1) soma.unshift("0")
    soma.unshift("1")
  }
  return soma.join('')
}

export const subtrairEmSM = function (valor1: string, valor2: string, bits: number) {
  if (valor1.length !== bits || valor2.length !== bits) throw new Error(`Um dos valores passados não possuem ${bits} bits!`);
  // A conversão para decimal é feita apenas para verificar quem é o maior.
  const valor1EmDecimal = SMparaDec(valor1)
  const valor2EmDecimal = SMparaDec(valor2)
  const valor1SemBitDeSinal = removerPrimeiroBit(valor1)
  const valor2SemBitDeSinal = removerPrimeiroBit(valor2)

  const resultado: string[] = []
  if (valor1EmDecimal === valor2EmDecimal) for (let index = 0; index < bits; index++) resultado.push("0")
  // Vai resultar num positivo:
  else if (valor1EmDecimal >= 0 && valor2EmDecimal < 0) {
    const soma = somarBinariosPositivos(valor1SemBitDeSinal, valor2SemBitDeSinal).split('')
    if (soma.length === bits) soma.shift()
    resultado.push(...soma)
    while (resultado.length < bits) resultado.unshift("0")
  }// Vai resultar num negativo:
  else if (valor1EmDecimal < 0 && valor2EmDecimal >= 0) {
    const soma = somarBinariosPositivos((valor1SemBitDeSinal), valor2SemBitDeSinal).split('')
    if (soma.length === bits) soma.shift()
    resultado.push(...soma)
    while (resultado.length < bits) resultado.unshift("1")
  }// Vai resultar num positivo:
  else if (valor1EmDecimal > valor2EmDecimal && valor2EmDecimal >= 0)  {
    const subtracao = subtrairBinarios(valor1SemBitDeSinal, valor2SemBitDeSinal)
    resultado.push(...subtracao)
    while (resultado.length < bits) resultado.unshift("0")
  }// Vai resultar num positivo:
  else if (valor1EmDecimal < valor2EmDecimal && valor1EmDecimal >= 0)  {
    const subtracao = subtrairBinarios(valor2SemBitDeSinal, valor1SemBitDeSinal)
    resultado.push(...subtracao)
    while (resultado.length < bits) resultado.unshift("0")
  }// Vai resultar num negativo:
  else if (valor1EmDecimal < 0 && valor2EmDecimal < 0 && modulo(valor1EmDecimal) > modulo(valor2EmDecimal)) {
    const subtracao = subtrairBinarios(valor1SemBitDeSinal, valor2SemBitDeSinal)
    resultado.push(...subtracao)
    while (resultado.length < bits - 1) resultado.unshift("0")
    resultado.unshift('1')
  }// Vai resultar num positivo:
  else if (valor1EmDecimal < 0 && valor2EmDecimal < 0 && modulo(valor1EmDecimal) < modulo(valor2EmDecimal)) {
    const subtracao = subtrairBinarios(valor2SemBitDeSinal, valor1SemBitDeSinal)
    resultado.push(...subtracao)
    while (resultado.length < bits) resultado.unshift("0")
  }
  return resultado.join('')
}

export const operarC2 = function(valor1: string, valor2: string, bits: number, operacao: "+" | "-") {
  if (operacao !== "+" && operacao !== "-") throw new Error("Insira '+' para soma ou '-' para subtração!");

  const valor1EmDecimal = C2paraDec(valor1)
  const valor2EmDecimal = C2paraDec(valor2)
  const valor1SemBitDeSinal = removerPrimeiroBit(valor1)
  const valor2SemBitDeSinal = removerPrimeiroBit(valor2)
  const resultado = []

  switch (operacao) {
    case "+":
    if (valor1[0] === valor2[0] && valor1[0] === "0") {
      const soma = somarBinariosPositivos(valor1SemBitDeSinal, valor2SemBitDeSinal).split('')
      if (soma.length === bits) soma.shift()
      while (resultado.length < bits - 1) resultado.unshift("0")
      // if (valor1[0] === "1") resultado.unshift("1")
      // else resultado.unshift("0")
    }
    else if (modulo(valor1EmDecimal) > modulo(valor2EmDecimal) && valor2[0] === "1") {
      const soma = somarBinariosPositivos(valor1SemBitDeSinal, valor2SemBitDeSinal).split('')
      if (soma.length === bits) soma.shift()
      while (resultado.length < bits) resultado.unshift("0")
    }
    // else if (modulo(valor1EmDecimal) > modulo(valor2EmDecimal) && valor1[0] === "1") {
    //   const soma = subtrairBinarios(valor1SemBitDeSinal, valor2SemBitDeSinal).split('')
    //   if (soma.length === bits) soma.shift()
    //   while (resultado.length < bits) resultado.unshift("0")
    // }
      break;
    case "-":

      break
    default:
      break;
  }



  if (valor2[0] === "1") {
    const representacaoPositiva = somarBinariosPositivos(inverteBits(valor2), "1")
    return somarBinariosPositivos(valor1, representacaoPositiva)
  }
}