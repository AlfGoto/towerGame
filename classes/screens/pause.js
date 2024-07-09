import upgradeChosingScreen from "../screens/upgradeChosingScreen.js"
import towerStats from "../stats/towerStats.js"
import game from "../../script.js"

class pauseClass {
    constructor() {
        this.displayed = false
    }
    display() {
        if (!game.gameOn || upgradeChosingScreen.displayed) return
        if (this.displayed) {
            towerStats.gameOn = true
            this.remove()
        } else {
            towerStats.gameOn = false
            this.create()
        }
        this.displayed = !this.displayed
    }
    create(){
        this.div = document.createElement('div')
        this.div.id = 'pauseScreen'
        document.body.appendChild(this.div)

        this.h1 = document.createElement('h1')
        this.div.appendChild(this.h1)
        this.h1.innerHTML = 'Paused'
    }
    remove(){
        this.div.remove()
    }
}
export default new pauseClass()