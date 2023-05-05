const entradas = (await Deno.readTextFile('./todas-entradas.txt')).split('\n')
let contador = 1

for (let index = 0; index < entradas.length; index++) {
    
  if (entradas[index]) {
    const [valor1, valor2] = [entradas[index], entradas[index + 1]]
    index++

    Deno.writeTextFile(`./entradas/entrada${contador}.txt` ,`${valor1}\n${valor2}`)
    contador++
  }
}