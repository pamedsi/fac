import { inverteBits, modulo, removerZeros } from "./funcoes-ajudadoras.ts"
import { somarBinariosPositivos } from "./funcoes-ajudadoras.ts"

export const SMParaBinario = function(numeroEmSM: string) {
  const semDigitoDeSinal = numeroEmSM.split('')
  semDigitoDeSinal.shift()
  const semZeros = removerZeros(semDigitoDeSinal.join(''))

  if (numeroEmSM[0] === "0") return semZeros
  return "-" + semZeros
}

export const C2paraBinario = function (numeroEmC2: string) {
  if (numeroEmC2[0] === "0") return SMParaBinario(numeroEmC2)
  const numeroBinario = "-" + removerZeros(somarBinariosPositivos(inverteBits(numeroEmC2), "1"))
  return numeroBinario
}

export const binarioParaC2 = function (numeroBinario: string, bits: number) {
  const limitePositivo = (2 ** (bits -1)) - 1
  const limiteNegativo = (2 ** (bits -1))
  if (modulo(parseInt(numeroBinario, 2)) > limiteNegativo && numeroBinario[0] === "-") throw new Error(`Não é possível representar este número com ${bits} bits.`);
  if (modulo(parseInt(numeroBinario, 2)) > limitePositivo) throw new Error(`Não é possível representar este número com ${bits} bits.`);
  
  if (numeroBinario[0] === "-") {
    const representacaoPositiva = numeroBinario.split('')
    representacaoPositiva.shift()
    for (let index = representacaoPositiva.length; index < bits; index++) representacaoPositiva.unshift("0")

    const bitsInvertidos = inverteBits(representacaoPositiva.join(''))
    return somarBinariosPositivos(bitsInvertidos, "1")
  }

  const complementoA2 = numeroBinario.split('')
  for (let index = complementoA2.length; index < bits; index++) complementoA2.unshift("0")
  return complementoA2.join('')
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
  return -SMparaDec(representacaoPositiva)
}