import { variableAndDataTypes, solutions } from "./variables-datatypes.js";
import { writeFile } from 'node:fs';


variableAndDataTypes();
const filePath = 'exercise1.md';
console.log(solutions.join("\n"))

writeFile(filePath, solutions.join("\n"),(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 