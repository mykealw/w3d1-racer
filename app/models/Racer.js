



export class Racer {
    constructor(name, picture, number, distance = 0){
        this.name = name
        this.picture = picture
        this.number = number
        this.distance = distance
    }

get Template(){
    return /*html*/ `
    <div class="row p-2 my-2 bg-dark text-light">
    <p class="text-light pl-${this.distance}%" id="${this.number}">${this.picture} ${this.distance}</p>
    <h5 class="text-light"> ${this.name} ${this.number}</h5>
</div>
`
}

// get move(){
//     return 
//     if(this.distance >= 95){
//         console.log(${this.name} + ${this.number} +"is the winner");
//     }
// }

}


