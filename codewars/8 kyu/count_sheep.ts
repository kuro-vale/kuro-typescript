//  https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/typescript

function countSheep(num: number): string {
    let sheep = ""
    for (let i = 1; i <= num; i++) {
        sheep += `${i} sheep...`
    }
    return sheep
}

console.log(countSheep(2))
