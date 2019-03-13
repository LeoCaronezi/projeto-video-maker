 // codigo com objetivo  de fazer video pro youtube automaticamente
// biblioteca para ler o imput do usuario 
const readline = require ('readline-sync')
//inicio da função
function start() {
    const content = {}
    content.searchTearm = askAndReturnSeachTerm()
    content.prefix = askAndReturnPrefix()
    function askAndReturnSeachTerm () {
        return readline.question('Type a wikipedia search term:')
        
    }
    function askAndReturnPrefix() {
        const prefixes = ['who is', 'what is', 'The history of ' ]
         const selectedPrefixIndex = readline.keyInSelect(prefixes, 'choose one option:')
         const selectPrefixText = prefixes[selectedPrefixIndex] 
         
        //  console.log(selectPrefixText) -- descontinuado  na versão
        return selectPrefixText      
    }
    console.log(content)
}
start()