import { inverteBits, removerZeros } from "./funcoes-ajudadoras.ts"
import { somarBinariosPositivos } from "./operacoes.ts"

export const SMParaBinario = function(numeroEmSM: string) {
  const semDigitoDeSinal = numeroEmSM.split('')
  semDigitoDeSinal.shift()
  const semZeros = removerZeros(semDigitoDeSinal.join(''))

  if (numeroEmSM[0] === "0") return semZeros
  return "-" + semZeros
}

export const C2paraBinario = function (numeroEmC2: string) {
  if (numeroEmC2[0] === "0") return SMParaBinario(numeroEmC2)
  const representacaoPositiva = somarBinariosPositivos(inverteBits(numeroEmC2), "1").split('')

  while (representacaoPositiva[0] === "0") representacaoPositiva.shift()
  representacaoPositiva.unshift("-")
  return representacaoPositiva.join('')
}

export const binarioParaC2 = function (numeroBinario: string, bits: number) {
  if (numeroBinario[0] === "-") {
    // split('') serve para transformar a string em lista
    // shift() serve para remover o primeiro elemento da lista, no caso, o sinal "-""
    const representacaoPositiva = numeroBinario.split('')
    representacaoPositiva.shift()
    for (let index = representacaoPositiva.length; index < bits; index++) representacaoPositiva.unshift("0")

    const bitsInvertidos = inverteBits(representacaoPositiva.join(''))
    return somarBinariosPositivos(bitsInvertidos, "1")
  } 
}

export const SMparaDec = function (numeroEmSM: string) {
  const numeroBinario = SMParaBinario(numeroEmSM)
  let numeroEmDecimal = 0
  let potenciaDeDois = 1

  for (let index = numeroBinario.length - 1; index > -1; index--) {
    if (numeroBinario[index] === "1") numeroEmDecimal += potenciaDeDois
    potenciaDeDois *= 2
  }

  if (numeroEmDecimal !== 0 && numeroBinario[0] === "-") return -numeroEmDecimal
  return numeroEmDecimal
}

export const C2paraDec = function (numeroEmC2: string) {
  if (numeroEmC2[0] === "0") return SMparaDec(numeroEmC2)

  const representacaoPositiva = somarBinariosPositivos(inverteBits(numeroEmC2), "1")
  return "-" + SMparaDec(representacaoPositiva)
}