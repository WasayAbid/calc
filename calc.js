function calc(num1, num2, symbol) {
    switch (symbol) {
        case '+':
            console.log(num1, " + ", num2, " = ", num1 + num2);
            break;
        case '-':
            console.log(num1, " - ", num2, " = ", num1 - num2);
            break;
        case '*':
            console.log(num1, " * ", num2, " = ", num1 * num2);
        case '/':
            console.log(num1, " / ", num2, " = ", num1 / num2);
    }
}
var num1 = 2, num2 = 3, symbol = '+';
calc(num1, num2, symbol);
