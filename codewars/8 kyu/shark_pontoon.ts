// https://www.codewars.com/kata/57e921d8b36340f1fd000059

export function shark(pontoonDistance: number,
               sharkDistance: number, youSpeed: number, sharkSpeed: number, dolphin: boolean): string {
    if (dolphin) {
        sharkSpeed /= 2
    }
    let sharkEatTime: number = sharkDistance / sharkSpeed
    let safeTime: number = pontoonDistance / youSpeed

    return sharkEatTime <= safeTime ? "Shark Bait!" : "Alive!"
}
