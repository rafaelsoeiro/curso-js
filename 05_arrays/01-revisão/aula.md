# arrays - revisão

## 1 - Criando arrays

### a) de forma literal

```bash
  const numeros = [1,2,3]
```

### b) Por meio do construtor

```bash
  const numeros = New Array(1,2,3 )
```

O resultado é o mesmo.

## 2 - Passando valores

### a) por referência

```bash
const nomes = ["rafael","victor","lucas"]

const nomes2 = nomes
```

Ambas as constantes apontam para o mesmo array na memoria, ou seja, ambos podem manipular o array

### a) usando a referência para clonar um array ja existente

```bash
const nomes = ["rafael","victor","lucas"]

const nomes2 = [... nomes]
```

Ambas as constantes não apontam para o mesmo array na memoria, ou seja, são arrays diferentes sendo que o conteudo de um foi clonado de outro

## 3 - removendo itens de um array

```bash
const nome = ["rafael","silveira", "soeiro"]

// remove uma posição do array sem alterar seu tamanho
delete nome[1]
```

## 4- Manipulando o array por referência

### a) array.pop() - remove o elemento do fim do array e o retorna

```bash
const nomes = ["rafael","victor","lucas"]
nomes.pop()
const nomes2 = nomes.pop()
console.log(nomes2)
```

### b) array.push() - adiciona novo elemento no fim do array

```bash
const nomes = ["rafael","victor","lucas"]
nomes.push("marcia")

console.log(nomes)
```

### c) array.shift() - remove o elemento do começo do array e o retorna

```bash
const nomes = ["rafael","victor","lucas"]
nomes.shift()
const nomes2 = nomes.shift()
console.log(nomes2)
```

### e) array.unshift() - adiciona novo elemento no começo do array

```bash
const nomes = ["rafael","victor","lucas"]
nomes.unshift("marcia")

console.log(nomes)
```

### c) array.slice() - retorna uma copia de uma parte do array. o metodo recebe um valor para começar e terminar o recorte, esses valores de inicio e fim não são incluidos no recorte, por exemplo, caso seja array.slice(1,4) os elementos retornados serão 2 e 3.

```bash
//                0        1        2        3
const nomes = ["rafael","victor","lucas","marcia",]
console.log(nomes.slice(1,3))
```

## 5 - Convertendo arrays em strings

### a) .split -> é um metodo do array que particiona o array sempre que encontra um determinado valor que se repete, por exemplo: espaços vazios, virgulas, pontos, etc.

```bash
const nome = ["rafael silveira soeiro"]
const nomes = nome.split(' ')

console.log(nomes)
```

### a) .join -> é um metodo do array que concatena os elementos de um array e unclui um elemento separador entre eles , por exemplo: espaços vazios, virgulas, pontos, etc.

```bash
const nomes = ["rafael","silveira","soeiro"]
const nome = nome.join(' ')

console.log(nome)
```
