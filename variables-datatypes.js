const solutions= [];

const variableAndDataTypes = () => {

  const exerciseName = "# Uppgift JS - Variables and Datatypes\n";
  solutions.push(exerciseName);

  const exercise1 = `## Exercise 1
  #### Declare a variable with description of age and print to console.
\`\`\`js
let age = 30;
console.log(\`This is my age: \${age}\`);
// Output:  This is my age: 30
\`\`\`
`;
solutions.push(exercise1)

  const exercise2 = 
`## Exercise 2 + 3
#### Declare three different keywords of three different data types.
\`\`\`js
const area = 22.53; // const is a constant and can't be changed once declared.
let shape = "circle"; // let is not a constant and can be changed.
var isSquare = false; // var is not a variation to use anymore.
console.log(\`The shape is a \${shape} with area \${area} and \${isSquare ? "is a square" : "is not a square"}.\`)
// Output: The shape is a circle with area 22.53 and is not a square.
\`\`\`
`;
  solutions.push(exercise2)

  const exercise4 = `## Exercise 4
  #### Create a const variable and try to re-assign it. What happens and why?
\`\`\`js
const name = "Lucas";
console.log(name);
// Output: Lucas

try {
    name = "Lukas";
    console.log(name);
} catch (error) {
    console.error(
    "You can't re-assign the value of a const variable.",
    error.message
    );
}
// Output: You can't re-assign the value of a const variable. Assignment to constant variable
\`\`\`
  `
 solutions.push(exercise4)
  
  const exercise7 = `## Exercise 7
  #### Create two numbers, save them in the variables number1 and number2. Add these two variabels together and save the result in a new variable that you log to the console.
\`\`\`js
let number1 = 2, 
    number2 = 4, 
    result1 = number1 + number2,
    result2 = number1 * number2, 
    result3 = number1 / number2;
            
console.log(\`Sum of number1 and number = \${number1} + \${number2} = \${result1}\`)
console.log(\`Product of number1 and number = \${number1} * \${number2} = \${result2}\`)
console.log(\`Quotient of number1 and number = \${number1} / \${number2} = \${result3}\`)

/* Output:  Sum of number1 and number = 2 + 4 = 6
            Product of number1 and number = 2 * 4 = 8
            Quotient of number1 and number = 2 / 4 = 0.5
*/
\`\`\`
  `
solutions.push(exercise7)
const exercise9 = `## Exercise 9
#### Create a variable a and assign it a value. Log it to the console. Now add 5 to a by reassigning the value of a by using the existing a and the number 5. Log it to the console.
\`\`\`js
let a = 5;
console.log(a); // Output: 5
a += 5;
console.log(a); // Output: 10
\`\`\`
`

solutions.push(exercise9)
};


export { variableAndDataTypes,solutions };
