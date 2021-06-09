function fizzBuzz(n) {

    if (typeof (n) === 'number') {
        if (n % 3 === 0 && n % 5 === 0) {
            return 'FizzBuzz'
        } else if (n % 5 === 0) {
            return 'Buzz'
        } else if (n % 3 === 0) {
            return 'Fizz'
        } else {
            return n
        }
    }else {
        return 'NaN'
    }
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}
