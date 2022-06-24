function isDivisible(number) {
    for (d = 1; d <=20; d++) {
        if (number % d === 0) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

var number = 1;
do {
    number++;
} while (! isDivisible(number));

console.log(number);