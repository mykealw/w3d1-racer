import {AppState} from "./AppState.js"


function _drawRacers(){
let template = ''
const racers = AppState.racers
racers.forEach(r => template += r.Template)
document.getElementById('racers').innerHTML = template

}

function _moveRacers(){
let distance = Math.floor(Math.random()* 3)
const racers = AppState.racers
racers.forEach(d => d.distance += distance)
// console.log("distance went", distance);
_move()
_drawRacers()
}

function _move(){
let cap = 95
const racers = AppState.racers
racers.forEach(c => c.distance >= cap)
console.log('not done yet');


}

export class RacersController {
    constructor(){
        // console.log('hello from racers controller');
this.drawRacers()
// this.startRace()
}

drawRacers() {
    _drawRacers()
}
startRace(){
   setInterval(_moveRacers, 100) 
}

move(){
    _move()
}

    }
