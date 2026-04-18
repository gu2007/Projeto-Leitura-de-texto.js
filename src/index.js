
function tiraCaractereEspecial(palavras){
   return palavras.replace(/[.,\/#!$%\^$\*;:{}=\-_`~()]/g, '')
}

function extraiParagrafos(texto){
   return texto.toLowerCase().split('\n')
}

export function textoSeparadoEmParagrafos(texto){
   const paragrafos = extraiParagrafos(texto)
   const contagem = paragrafos.flatMap ((paragrafos) => {
      if (!paragrafos) return []
      return quantasPalavrasTemRepetidas(paragrafos)
   })
   return contagem
}

function quantasPalavrasTemRepetidas(texto){
   const textoDentroDoArray = texto.split(' ');
   const objeto = {}
   textoDentroDoArray.forEach(palavras => {
      if(palavras.length >= 3){
         const textoLimpo = tiraCaractereEspecial(palavras)
         objeto[textoLimpo] = (objeto[textoLimpo] || 0)+ 1
      }

   })
      return objeto 
}


















