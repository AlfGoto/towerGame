

class helpClass{
    constructor(){
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'helpDiv'

        this.x2 = document.createElement('p')
        this.div.appendChild(this.x2)
        this.x2.innerHTML = 'speed up the game by pressing space...'
    }
}
export default new helpClass()