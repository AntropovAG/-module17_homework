export function countdown(n) {
    let result = [];
    if(n < 1 || isNaN(n)) {
        result[0] = `You entered "${n}", which is a wrong starting number (or even not a number)!`;
        console.log(result[0])}
    let startCount = Math.round(n); 
    for (let i = startCount; i >= 1; i--) {
        result.push(i);
        console.log(i);
    }
    return result;
}
