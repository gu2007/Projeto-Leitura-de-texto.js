import fs from 'fs';
import path from 'path';
import tratandoErros from './erro/funcoesErro.js'; 
import {textoSeparadoEmParagrafos} from './index.js';
import { log } from 'console';
import {montaSaidaArquivo} from './helpers.js';
import {Command} from 'commander';
import chalk from 'chalk';

const program = new Command();

program.version('0.0.1')
.option('-t, --texto, <string>', 'caminho do texto a ser processado')
.option('-d, --destino <string>', 'Caminho da pasta onde salvar o arquivo de resultados')
.action((options) => {
   const {texto, destino} = options; 

   if (!texto || !destino){
      console.error(chalk.red ('erro: favor inserir caminho de origem e destino'))
      program.help();
      return
   }

   const caminhoTexto = path.resolve(texto)
   const caminhoDestino = path.resolve(destino)

   try{
      processaOArquivo(caminhoTexto, caminhoDestino)
      console.log(chalk.green ('texto processado com sucesso'))
   }catch (erro){
      console.log (chalk.red ('Ocorreu um erro no processamento'), erro)
   }
})

program.parse()

const caminhoTexto = process.argv
const textoPego = caminhoTexto[2]
const endereco = caminhoTexto[3]

function processaOArquivo(texto, destino){
   fs.readFile(texto, 'utf-8', (erro, texto) => {
      try {
         if (erro) throw erro
         const resultado = textoSeparadoEmParagrafos(texto)
         criaESalvaArquivos(resultado, destino)
      } catch (erro) {
         tratandoErros(erro)
      }
   })
}


async function criaESalvaArquivos(listaPalavras, endereco){
   const arquivoNovo = `${endereco}/resultados.txt`
   const textoPalavras = montaSaidaArquivo(listaPalavras)

   try{
      await fs.promises.writeFile(arquivoNovo, textoPalavras)
      console.log (chalk.green ('Arquivo criado'))
   } catch (erro){
      console.log (chalk.red ('Erro ao salvar o arquivo'))
   }
}