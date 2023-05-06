# fac

Este é um projeto que trabalha com representações computacionais atravésde números binários.
Usa Typescript através do Deno.
Ele efetua operações simples como somar e subtrair números de 32 bits, ou maiores, caso seja passado como argumento.

Os arquivos de entrada estão na pasta './entradas' e devem funcionar em conjunto com a pasta './saidas'.
Para cada entrada na pasta, ex: './entradas/entrada1.txt' haverá uma saída correspondente na pasta de saídas, ex: './saidas/saida1.txt'.
O nome dos arquivos serão sempre a palavra "entrada" ou "saida" seguido de um número, que identifica a entrada aquela saída pertence, e depois a extensão ".txt"

Por exemplo, quando passado como argumento de entrada o arquivo './entradas/entrada1.txt' a saída deverá ser idênctica ao texto do arquivo'./saidas/saida1.txt'
O mesmo para './entradas/entrada2.txt' e './saidas/saida2.txt' e assim sucessivamente.

O arquivo principal do projeto é o "./index.ts"
É necessário liberar autorização para que o Deno leia outros arquivos no computador, para assim ler os arquivos de entrada.
Para isso, a flag "--allow-read" deve ser passada.

Além disso é necessário passar como argumento qual arquivo de entrada será lido.
Ex: se for o arquivo './entradas/entrada1.txt' o comando deverá ser o seguinte:

```
$ deno run --allow-read index.ts entradas/entrada1.txt
```

Dependendo do sistema operacional, talvez seja necessário adicionar um './' antes do endereço, ex:

```
$ deno run --allow-read index.ts ./entradas/entrada1.txt
```

Caso a primeira forma não funcione, tente a segunda.

Para testar todas as entradas de uma vez, pode ser executado o seguinte script:

```
$ deno test --allow-read testes/testes-de-entrada-e-saida.ts
```

Na pasta './testes' há três arquivos:

  'testes-aleatorios.ts': Um arquivo que gera números aleatórios para testas as funções de somar e subtrair binários. Essas funções processam números binários com sinais, não se limita apenas a representações como Complemento a 2 ou Sinal e Magnitude.

  'testes-de-entrada-e-saida.ts': Este executa todas as comparações entre a saída do algorítimo com cada entrada na pasta './entradas' com cada saída correspondente e avisa quantos destes testes passaram e quantos não passaram. Também diz qual caso não passou, caso algum sera reprovado.

  'testes-personalizados.ts': Este arquivo também testa apenas as funções de somar e subtrair binários, os valores podem ser inseridos manualmente para testes personalizados.

OBS: Os valores de entrada na pasta './entradas' podem ser modificados para testar outras possibilidades com números binários.
Porém, se algum deles for trocado, o teste de entrada e saída, encontrado em './testes/testes-de-entrada-e-saida.ts' apontará como falha, pois ele comparará com a suposta saída correspondente na pasta './saidas' e não com a nova saída que deverá ser exibida, exemplo:

Se o arquivo './entradas/entrada5.txt' for modificado e o script de testes for rodado novamente, ele reprovará 1 caso, o da saída 5, porque comparará com os valores que já estavam lá no arquivo './saidas/saida5.txt'. Se for mudar algum valor de entrada, fique atento a saber, previamente, qual saída deverá ser a correspondente daquela entrada.