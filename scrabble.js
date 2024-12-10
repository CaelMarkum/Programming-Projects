const dictionaryFile = "wordlist.txt"

// return an array of words that can be made from the given letters

function createCombinations(letters) {
    let results = [];

    // base case
    if( letters.length === 1 ) {
        results.push(letters)
        return results
    }

    // recursive case
    for( let i = 0; i < letters.length; i++) {
        let firstChar = letters[i]
        let otherChars = letters.substring(0, i) + letters.substring(i + 1)
        let otherCombinations = createCombinations(otherChars)

        for(let j = 0; j < otherCombinations.length; j++) {
            results.push(firstChar + otherCombinations[j])
        }
    }

    return results;


}

console.log(createCombinations("maze"))


function scrabble(letters) {
    
}

scrabble("figl")

// function factorial( n ){
    // base case
    // if ( n === 0 ) {
        // return 1
    // }


    // recursive case
    // return n * factorial(n-1)
// }




// console.log( factorial(199) )