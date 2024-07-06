import towerStats from "./towerStats.js"
import jeu from '../script.js'

export default class {
    constructor() {}
    build(){
        this.div = document.createElement('div')
        document.body.appendChild(this.div)
        this.div.id = 'gameOverScreen'
        towerStats.stopTime()


        this.buildHead()
        this.buildBody()
        this.buildFeet()
    }
    buildHead() {
        this.head = document.createElement('div')
        this.div.appendChild(this.head)

        this.title = document.createElement('h2')
        this.head.appendChild(this.title)
        this.title.innerHTML = 'You lost'
    }
    buildBody() {
        this.body = document.createElement('div')
        this.div.appendChild(this.body)
    }
    buildFeet() {
        this.feet = document.createElement('div')
        this.div.appendChild(this.feet)
        this.replayButton = document.createElement('button')
        this.feet.appendChild(this.replayButton)
        this.replayButton.innerHTML = 'Replay !'
        this.replayButton.onclick = () => {
            this.div.remove()
            jeu.startGame()
        }
    }
}