import { checkNumber } from "./src/numberFunctions.js"

console.log("This is index.js")

console.log(checkNumber(7))

import { processData } from "./convertCallbackToPromise.js"

processData('asdfagwe').then(result => {
    console.log("Processed Data:", result);
}).catch(err => {
    console.error("Error processing data:", err.message);
});