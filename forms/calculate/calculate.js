

function calcAvgSquare(x,y,z) {
    let avg = (x + y + z)/3
    let num1Sqr = x ** 2
    return avg * num1Sqr
  }

let num1 = Number(prompt("What is the first number?"))
let num2 = Number(prompt("What is the second number?"))
let num3 = Number(prompt("What is the third number?"))

let answer = calcAvgSquare(num1, num2, num3)
alert(`The answer using ${num1}, ${num2}, and ${num3} is ${answer}.`)


