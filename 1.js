const reverse = (args) => {
    // Validation input
    if (typeof args !== "string" && typeof args !== "number") {
        return "ERROR: Input must be a number/string"
    }

    // split arguments to items array
    let argsArr = String(args).split('');
    let res = [];

    // loop through array arguments
    for (let i = 0; i < argsArr.length; i++) {
        const item = argsArr[i];

        // swap last item into first index of result array
        res = item + res;
    }

    return typeof args === "number" ? parseInt(res) : res;
}

console.log(reverse(123)) // Number Input
console.log(reverse("Saya suka ngoding")) // String Input
console.log(reverse(['e'])) // ERROR