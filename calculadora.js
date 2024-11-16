function calc(a, b, c) {
    if (c === '+') {
        return a + b;
    }
    else if (c === '-') {
         return a - b;
    }
    else if (c === '*') {
        return a * b;
    }
    else if (c === '/') {
        return a / b;
    }
    else {
        return 'Operador Inválido!';
    }
}

console.log(calc(1, 3, '+'));
console.log(calc(3, 6, '+'));
console.log(calc(5, 3, '-'));
console.log(calc(1, 7, '*'));
console.log(calc(4, 3, '='));
console.log(calc(14, 4, '/'));