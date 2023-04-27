export const inverteBits = function (bits: string) {
  let bitsInvertidos = ""
  for (let index = 0; index < bits.length; index++) bits[index] === "1" ? bitsInvertidos += "0" : bitsInvertidos += 1
  return bitsInvertidos
}

export const modulo = function (valor: number) {
  if (valor >= 0) return valor
  return -valor
}

export const moduloBinario = function(valorBinario: string) {
  if (valorBinario[0] !== "-") return valorBinario
  const modulo = valorBinario.split('')
  modulo.shift()
  return modulo.join('')
}

export const pegarDoProximo = function (valor: string, index: number) {
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

export const removerZeros = function (numeroBinario: string) {
  let retorno = ''
  let index = 0

  // Esse loop for serve para achar onde o número começa e descartar os zeros.
  for (index; index < numeroBinario.length; index++) if (numeroBinario[index] === "1") break

  // Esse vai pegar os bits de onde o número começa até o final da string.
  for (let i = index; i < numeroBinario.length; i++) retorno += numeroBinario[i]  

  if (numeroBinario[0] === "-") return "-" + retorno
  return retorno
}