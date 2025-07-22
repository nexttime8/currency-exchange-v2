export function processData(input) {
    return new Promise((resolve, reject) => {
        try {
            if(!input) {
                throw new Error("No input provided")
            }
            const result = input.toUpperCase();
            resolve(result);
        }
        catch(err) {
            reject(err);
        }
    })
}


