let age = 30;
console.log(`This is my age: \${age}`);

const area = 22.53; 
let shape = "circle"; 
var isSquare = false; 
console.log(`The shape is a ${shape} with area ${area} and ${isSquare ? "is a square" : "is not a square"}.`)

  const name = "Lucas";
console.log(name);

try {
    name = "Lukas";
    console.log(name);
} catch (error) {
    console.error(
    "You can't re-assign the value of a const variable.",
    error.message
    );
    }
  let number1 = 2, 
    number2 = 4, 
    result1 = number1 + number2,
    result2 = number1 * number2, 
    result3 = number1 / number2;
            
console.log(`Sum of number1 and number = ${number1} + ${number2} = ${result1}`)
console.log(`Product of number1 and number = ${number1} * ${number2} = ${result2}`)
console.log(`Quotient of number1 and number = ${number1} / ${number2} = ${result3}`)

let a = 5;
console.log(a); 
a += 5;
console.log(a); 





