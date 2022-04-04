import {Racer} from "./models/Racer.js"

let racer1 = new Racer('CL', '🐎', 16)
let racer2 = new Racer('LS', '💵', 18 )
let racer3 = new Racer('MV', '🐂', 33 )
let racer4 = new Racer('LH', '🐕', 44)

export const AppState = {
    racers: [racer1, racer2, racer3, racer4]
}