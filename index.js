const readline = require ('readline-sync')
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
         
        //  console.log(selectPrefixText)
        return selectPrefixText      
    }
    console.log(content)
}
start()