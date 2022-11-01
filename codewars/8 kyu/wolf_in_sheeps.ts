// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/typescript

export function warnTheSheep(queue: string[]): string {
    queue.reverse()
    let wolf = queue.indexOf("wolf")
    if (wolf == 0) {
        return "Pls go away and stop eating my sheep"
    } else {
        return `Oi! Sheep number ${wolf}! You are about to be eaten by a wolf!`
    }
}
