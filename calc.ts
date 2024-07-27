function calc(num1:number,num2:number,symbol:string)
{
    switch(symbol)
    {
        case '+':
            console.log(num1," + ",num2," = ",num1+num2);
            break;
        case '-':
            console.log(num1," - ",num2," = ",num1-num2);
            break;
        case '*':
            console.log(num1," * ",num2," = ",num1*num2);
        case '/':
            console.log(num1," / ",num2," = ",num1/num2);

    }
}
let num1=2,num2=3,symbol='+';
calc(num1,num2,symbol);