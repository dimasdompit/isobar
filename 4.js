const searchCharacter = (str, char) => {
    // Validation Input must be a string
    if (typeof str !== "string" || str.trim().length < 0) {
        return 'ERROR : Input must be a String & not allowed empty word/character'
    }
    // split string into an array
    const splitted = str.toLowerCase().split('');

    for (let i = 0; i < splitted.length; i++) {
        const strItem = splitted[i];

        // looping search the same character in words
        if (strItem === char) {
            return true;
        }

    }

    // if character doesn't exist, return false
    return false;
}

console.log(searchCharacter('Lorem ipsum dolor sit amet', 'a')) // true
console.log(searchCharacter('Lorem ipsum dolor sit amet', 'z')) // false
console.log(searchCharacter(1234, 'a')) // ERROR