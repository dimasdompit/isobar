let getSum = (a, b) => {
    // Validation inputs
    if (typeof a !== "number" || typeof b !== "number") {
        return 'ERROR: Input must be a number'
    }

    // Convert & fill to array
    const firstArr = new Array(a).fill(1);
    const secondArr = new Array(b).fill(1);

    // concat first array & second array to get the total length
    const length = firstArr.concat(secondArr).length;
    return length;
};

console.log(getSum(2, 2)) // Success
console.log(getSum(2, '2')) // ERROR