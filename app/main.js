import { RacersController} from "./RacersControllers.js"



// console.log('BattleCruiser operational!');
class App{
    racersController = new RacersController() 
}
window["app"] = new App()