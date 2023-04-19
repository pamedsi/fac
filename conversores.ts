export const BinarioParaSM = function(numeroBinario: string) {
  let numeroEmSM = ""
  if (numeroBinario[0] === "1") numeroEmSM = "-"

  let index = 1
  // Esse loop for serve para achar onde o número começa e descartar os zeros.
  for (index; index < numeroBinario.length; index++) if (numeroBinario[index] === "1") break

  // Esse vai pegar os bits de onde o número começa até o final da string.
  for (let i = index; i < numeroBinario.length; i++) numeroEmSM += numeroBinario[i]

  return numeroEmSM
}