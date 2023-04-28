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

export const removerPrimeiroBit = function(valorBinario: string) {
  const retorno = valorBinario.split('')
  retorno.shift()
  return retorno.join('')
}