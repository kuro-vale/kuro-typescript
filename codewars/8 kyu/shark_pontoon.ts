export function shark(pontoonDistance: number,
               sharkDistance: number, youSpeed: number, sharkSpeed: number, dolphin: boolean): string {
    if (dolphin) {
        sharkSpeed /= 2
    }
    let sharkEatTime: number = sharkDistance / sharkSpeed
    let safeTime: number = pontoonDistance / youSpeed

    return sharkEatTime <= safeTime ? "Shark Bait!" : "Alive!"
}
