import { inverteBits } from "./funcoes-ajudadoras.ts"
import { somarBinariosPositivos } from "./soma.ts"

export const SMParaBinario = function(numeroBinario: string) {
  let numeroEmSM = ""
  if (numeroBinario[0] === "1") numeroEmSM = "-"

  let index = 1
  // Esse loop for serve para achar onde o número começa e descartar os zeros.
  for (index; index < numeroBinario.length; index++) if (numeroBinario[index] === "1") break

  // Esse vai pegar os bits de onde o número começa até o final da string.
  for (let i = index; i < numeroBinario.length; i++) numeroEmSM += numeroBinario[i]

  return numeroEmSM
}

export const C2paraBinario = function (numeroBinario: string) {
  if (numeroBinario[0] === "0") return SMParaBinario(numeroBinario)
  const representacaoPositiva = somarBinariosPositivos(inverteBits(numeroBinario), "1").split('')

  while (representacaoPositiva[0] === "0") representacaoPositiva.shift()
  representacaoPositiva.unshift("-")
  return representacaoPositiva.join('')
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