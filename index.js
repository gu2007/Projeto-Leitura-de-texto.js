
//Colocar o texto dentro do código: 

const fs = require('fs')

const caminhoTexto = process.argv

const textoPego = caminhoTexto[2]

fs.readFile(textoPego, 'utf-8', (erro, texto) => {
   extoSeparadoEmParagrafos(texto)
})

function extoSeparadoEmParagrafos(texto){
   const paragrafos = texto.toLowerCase().split('\n')
   const contagem = paragrafos.map(paragrafo => {
      return quantasPalavrasTemRepetidas(paragrafo)
   })
   console.log (contagem)
}

function quantasPalavrasTemRepetidas(texto){
   const textoDentroDoArray = texto.split(' ');
   const objeto = {}
   textoDentroDoArray.forEach(palavras => {
      objeto[palavras] = (objeto[palavras] || 0)+ 1
   })
      return objeto 
}






