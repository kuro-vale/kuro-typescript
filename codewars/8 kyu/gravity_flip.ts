// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/typescript

export function flip(dir: string, arr: number[]): number[] {
    if (dir == 'L') {
        return arr.sort((a, b) => b - a)
    } else if (dir == 'R') {
        return arr.sort((a, b) => a - b)
    } else {
        console.log("Please enter a valid direction ('L' or 'R')")
        return arr
    }
}
