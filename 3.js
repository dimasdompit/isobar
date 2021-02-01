const sameWord = (str) => {
    // Validation Input must be a string
    if (typeof str !== "string" || str.trim().length < 0) {
        return 'ERROR : Input must be a String & not allowed empty word/character'
    }

    const splitted = str.split(' ')

    // temp for counting word object
    let wordCountObj = {}
    let res = {}

    for (let i = 0; i < splitted.length; i++) {
        const word = splitted[i];

        // adding 1 if the word/key object exist
        wordCountObj[word] = wordCountObj[word] + 1 || 1;

        // condition for if there is a similar words in object keys
        if (wordCountObj[word] > 1) {
            res[word] = wordCountObj[word]
        }
    }

    return res;

}

console.log(sameWord("list of the same string same same string")) // Success
console.log(sameWord()) // ERROR : Empty input
console.log(sameWord(123)) // ERROR : Input must be a string