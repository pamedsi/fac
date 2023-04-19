export const inverteBits = function (bits: string) {
  let bitsInvertidos = ""
  for (let index = 0; index < bits.length; index++) bits[index] === "1" ? bitsInvertidos += "0" : bitsInvertidos += 1
  return bitsInvertidos
}