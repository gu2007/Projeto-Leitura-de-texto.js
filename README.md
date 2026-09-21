# Projeto Leitura de Texto

Ferramenta de linha de comando que lê um arquivo `.txt`, separa o conteúdo em parágrafos e identifica quais palavras aparecem repetidas em cada um deles.

## Como funciona

1. O texto é dividido por parágrafo (quebra de linha).
2. Em cada parágrafo, as palavras com 3 ou mais caracteres são contadas (ignorando pontuação).
3. Palavras que aparecem mais de uma vez no mesmo parágrafo são listadas no resultado.

## Instalação

```bash
npm install
```

## Uso

```bash
node src/cli.js --texto <caminho-do-arquivo.txt> --destino <pasta-de-saida>
```

- `--texto`: caminho do arquivo `.txt` a ser processado
- `--destino`: pasta onde o arquivo `resultados.txt` será salvo

### Exemplo

```bash
node src/cli.js --texto arquivos/texto-web.txt --destino resultados
```

O resultado é salvo em `resultados/resultados.txt`, com uma linha por parágrafo listando as palavras duplicadas encontradas.

## Estrutura do projeto

```
src/
  cli.js       # ponto de entrada (linha de comando)
  index.js     # lógica de separação em parágrafos e contagem de palavras
  helpers.js   # formatação da saída
  erro/        # tratamento de erros (ex: arquivo não encontrado)
arquivos/      # exemplos de texto de entrada
resultados/    # saída gerada pela ferramenta
```

## Tecnologias

- Node.js
- [commander](https://www.npmjs.com/package/commander) — parsing de argumentos de linha de comando
- [chalk](https://www.npmjs.com/package/chalk) — formatação colorida no terminal
