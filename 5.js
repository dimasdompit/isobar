const countWord = (sentence, word) => {
    // Validation type of inputs
    if (typeof sentence !== "string" || typeof word !== "string") {
        return 'ERROR: Input must be a string'
    }

    // splitted sentence into array items
    const splitted = sentence.split(' ')

    // create object count for result
    let wordCountObj = {};
    let res = {};

    for (let i = 0; i < splitted.length; i++) {
        const item = splitted[i];

        // check if items in sentences is equal than word
        if (item === word) {
            // value of word keys increment
            wordCountObj[word] = wordCountObj[word] + 1 || 1;
        }

        // result object key & value
        res.word = word;
        res.total = wordCountObj[word];
    }

    if (res.total === undefined) {
        res.total = 0
    }

    return res;
}

console.log(countWord('lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lobortis sem libero.', 'lorem')) // Success
console.log(countWord('aku aku aku aku bukan dia.', 'aku')) // Success
console.log(countWord(123, 'aku')) // ERROR: Input must be a string
