const algoritmia = require('algorithmia')
 function robot(content) {
     fetchContentFromWikipedia(content)
 }
 function fetchContentFromWikipedia(content) {
     const algorithmiaAuthenticated = algorithimia('Api key tempora')
     const  wikipediaAlgorithmia = algorithmiaAuthenticated.algo('web/WikipediaParse/0.1.2' )
     const  wikipediaResponde = wikipediaAlgorithmia.pipe(content.seachTerm)
     const  wikipediaContent = wikipediaResponde.get()
     console.log(wikipediaContent)
 }
 module.export = robot